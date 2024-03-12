function createComingUi(todoArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call
    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');

    let today = new Date();

    let todayArray;

    todoArray.forEach(element => {
        let dueDate = new Date(element.dueDate);

        if (today.getDate() < dueDate.getDate()) {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            taskDiv.innerHTML = `
            <div class="top">
                <p class="title">${element.title}</p>
                <p class="date">${element.dueDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
                <p class="priority">${element.priority}</p>
            </div>
            <div class="hidden">
                <button class="delete-task">del</button>
                <div class="check-lists"></div>
                <div class="note">${element.note}</div>
            </div>
            `;

            inboxLayout.appendChild(taskDiv);

            element.checkList.forEach((el, i) => {
                let bar = document.createElement('div');
                bar.classList.add('list');
                bar.innerHTML = `
                <div>${el}</div>
                <del index="${i}" class="remove-box">x</del>
                `;
                taskDiv.querySelector('.check-lists').appendChild(bar);
            });
        };
    });

    main.appendChild(inboxLayout);

    // Event delegation for button clicks
    inboxLayout.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            // Find the index of the clicked element in the DOM
            let index = Array.from(inboxLayout.querySelectorAll('.task')).indexOf(event.target.closest('.task'));
            if (index !== -1) {
                todoArray.splice(index, 1);
                createComingUi(todoArray, main);
            }
        }

        if (event.target.tagName === 'DEL') {
            // Find the index of the clicked element in the DOM
            let taskDiv = event.target.closest('.task');
            if (taskDiv) {
                let index = Array.from(taskDiv.parentNode.children).indexOf(taskDiv);
                let taskIndex = Array.from(taskDiv.querySelectorAll('del')).indexOf(event.target);
                if (index !== -1 && taskIndex !== -1) {
                    todoArray[index].checkList.splice(taskIndex, 1);
                    createComingUi(todoArray, main);
                }
            }
        }


        if (event.target.closest('.task')) {
            event.target.classList.toggle('active');
        }
    });
}


module.exports = { createComingUi };