function createTaskUi(todoArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call
    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');

    let inboxHeader = document.createElement('div');
    inboxHeader.classList.add('inbox-header');

    inboxHeader.innerHTML = `<p>INBOX</p>`;

    inboxLayout.appendChild(inboxHeader);

    todoArray.forEach(todo => {
        todo.dueDate = new Date(todo.dueDate);
    });

    let sortedArray = todoArray.slice().sort((a, b) => a.dueDate - b.dueDate);
    const options = { day: 'numeric', month: 'short' };

    sortedArray.forEach((element, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        taskDiv.innerHTML = `
        <div class="top">
            <p class="title">${element.title}</p>
            <p class="date">${element.dueDate.toLocaleDateString('en-US', options)}</p>
            <p class="priority">${element.priority}</p>
            <div class="open-close" style="position: relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="ssvg" height="30px" viewBox="0 0 24 24"><title>arrow-down-drop-circle-outline</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" /></svg>
                <div class="ssvg" style="position: absolute; height: 100%; width: 100%;"></div>
            </div>
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
    });

    main.appendChild(inboxLayout);

    // Event delegation for button clicks
    inboxLayout.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            // Find the index of the clicked element in the DOM
            let index = Array.from(inboxLayout.querySelectorAll('.task')).indexOf(event.target.closest('.task'));
            if (index !== -1) {
                todoArray.splice(index, 1);
                createTaskUi(todoArray, main);
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
                    createTaskUi(todoArray, main);
                }
            }
        }


        if (event.target.classList.contains('ssvg')) {
            event.target.closest('.task').querySelector('.hidden').classList.toggle('active');
        }        
    });
}

module.exports = { createTaskUi };
