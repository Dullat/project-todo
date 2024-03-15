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
                <svg xmlns="http://www.w3.org/2000/svg" class="ssvg" height="25" width="25" viewBox="0 0 24 24"><title>email-open</title><path d="M21,9V18C21,19.66 19.66,21 18,21H5C3.34,21 2,19.66 2,18V9C2,7.89 2.6,6.92 3.5,6.4V6.4L11.5,1.78L19.5,6.4V6.4C20.4,6.92 21,7.89 21,9M3.72,7.47L11.5,12.5L19.28,7.47L11.5,2.93L3.72,7.47M11.5,13.71L3.13,8.28C3.05,8.5 3,8.75 3,9V18C3,19.1 3.9,20 5,20H18C19.1,20 20,19.1 20,18V9C20,8.75 19.95,8.5 19.87,8.28L11.5,13.71Z" /></svg>
                <div class="ssvg" style="position: absolute; height: 100%; width: 100%;"></div>
            </div>
        </div>
        <div class="hidden">
            <button class="delete-task">Delete</button>
            <div class="check-lists"></div>
            <div class="note">Note: ${element.note}</div>
        </div>
        `;

        inboxLayout.appendChild(taskDiv);

        element.checkList.forEach((el, i) => {
            let bar = document.createElement('div');
            bar.classList.add('list');
            bar.innerHTML = `
            <div>${el}</div>
            <input type="checkbox">
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

        if (event.target.tagName === 'INPUT') {
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
