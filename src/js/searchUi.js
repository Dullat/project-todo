function listSearched(todoArray, sortedArray, main, inboxLayout) {
    while(inboxLayout.firstElementChild){
        inboxLayout.removeChild(inboxLayout.firstElementChild)
    };
    sortedArray.forEach((element, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        taskDiv.innerHTML = `
        <div class="top">
            <p class="title">${element.title}</p>
            <p class="date">${element.dueDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
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
            <div>${el.value}</div>
            <input type="checkbox">
            `;

            let checkbox = bar.querySelector('input[type="checkbox"]');
            if (el.checked) {
                checkbox.checked = true;
            }

            taskDiv.querySelector('.check-lists').appendChild(bar);

            checkbox.addEventListener('click', () => {
                if (checkbox.checked) {
                    el.checked = true;
                } else if (!checkbox.checked) el.checked = false;
            });
        });

        taskDiv.querySelector('.delete-task').addEventListener('click', () => {
            todoArray.forEach((array, indexofarray) => {
                if (array.index === element.index) {
                    todoArray.splice(indexofarray, 1);
                }
            });
            createTaskUi(todoArray, main);
            console.log(todoArray);
        });
    });

    main.appendChild(inboxLayout);

    inboxLayout.addEventListener("click", (event) => {
        if (event.target.classList.contains('ssvg')) {
            event.target.closest('.task').querySelector('.hidden').classList.toggle('active');
        }
    });
};

////

function uiCreateSearch(todoArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call

    let inboxHeader = document.createElement('div');
    inboxHeader.classList.add('inbox-header');

    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');


    inboxHeader.innerHTML = `
    <p>SEARCH TODO</p>
    <input type="text" id="search" placeholder="search">
    `;

    main.appendChild(inboxHeader);

    let sortedArray = [];
    

    inboxHeader.querySelector('#search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        console.log(searchTerm);
        todoArray.forEach(searchElament => {
            if (searchElament.title.includes(searchTerm)) {
                sortedArray.push(searchElament);
                console.log("jk",sortedArray);
            }
        });
        listSearched(todoArray, sortedArray, main, inboxLayout);
        sortedArray = [];
    });
};

module.exports = { uiCreateSearch };