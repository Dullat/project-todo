function createTaskUi(todoArray, main) {

    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call
    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');

    todoArray.forEach(todo => {
        todo.dueDate = new Date(todo.dueDate);
    });

    todoArray.sort((a, b) => a.dueDate - b.dueDate);
    const options = { day: 'numeric', month: 'short' };

    console.log(todoArray);

    todoArray.forEach((element) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        taskDiv.innerHTML = `
        <div class="top">
            <p class="title">${element.title}</p>
            <p class="date">${element.dueDate.toLocaleDateString('en-US', options)}</p>
            <button class="delete-task">del</button>
        </div>
        `

        inboxLayout.appendChild(taskDiv); // Append the task div to the inbox layout
    });

    main.appendChild(inboxLayout); // Append the inboxLayout to the main container
}

module.exports = { createTaskUi };
