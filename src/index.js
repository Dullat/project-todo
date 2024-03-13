import './css/reset.scss';
import './css/index.scss';
import './css/createBox.scss';
import './css/createTodo.scss';
import './css/inbox.scss';
import './css/createNote.scss';

import { CreateTodo } from './js/create.js';
import { todoCreationForm, addListBox, checkPrio, sendPrio } from './js/uiCreateTodo.js';
import { box } from './js/uiCreateBox.js';
import { createTaskUi } from './js/inbox.js';
import { createTodayUi } from './js/today.js';
import { createComingUi } from './js/coming.js';
import { createNoteForm } from './js/uiCreateNote.js';
import { createNote } from './js/createNote.js';
import { createNoteUi } from './js/notes.js';
window.addListBox = addListBox;

let addBtn = document.querySelector('.add-new');
let createToDo = document.querySelector('.todoCreationForm');
let wrapper = document.querySelector('.wrapper');
let main = document.querySelector('.main');
let todoArray = [];
let noteArray = [];
let todoIndex = 0;
let noteIndex = 0;
let inbox = document.querySelector('.inbox');
let today = document.querySelector('.today');
let coming = document.querySelector('.upcoming');
let notes = document.querySelector('.notes');
let primaryNav = document.querySelector('.primary-nav');


addBtn.addEventListener('click', () => {
    wrapper.appendChild(box);
    document.querySelector('.box-menu').appendChild(todoCreationForm);
    document.querySelector('.close-box').addEventListener('click', () => {
        if (box.parentElement === wrapper) {
            wrapper.removeChild(box);
        }
    });
    document.querySelectorAll('.prio').forEach(e => {
        checkPrio();
    })

    box.querySelector('.todo-creation').addEventListener('click', () => {
        box.querySelector('.todo-creation').style.color = 'green';
        box.querySelector('.note-creation').style.color = 'black';
        const boxMenu = document.querySelector('.box-menu');
        boxMenu.removeChild(boxMenu.firstElementChild);
        document.querySelector('.box-menu').appendChild(todoCreationForm);
    })

    box.querySelector('.note-creation').addEventListener('click', () => {
        box.querySelector('.note-creation').style.color = 'green';
        box.querySelector('.todo-creation').style.color = 'black';
        const boxMenu = document.querySelector('.box-menu');
        boxMenu.removeChild(boxMenu.firstElementChild)
        document.querySelector('.box-menu').appendChild(createNoteForm);
    });
})

//create todo

todoCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let checkListArray = document.querySelectorAll('.checkList');

    let sendChecklist = [];

    checkListArray.forEach(e => {
        sendChecklist.push(e.value);
    })

    console.log(sendChecklist);

    todoArray[todoIndex] = new CreateTodo(document.querySelector('#title').value,
        document.querySelector('.description').value,
        document.querySelector('#dateInput').value,
        sendPrio(),
        document.querySelector('textarea').value,
        sendChecklist,
        todoIndex
    );

    console.log(todoArray[todoIndex]);

    if (box.parentElement === wrapper) {
        wrapper.removeChild(box);
    }

    createTaskUi(todoArray, main);

    navStyle();
    primaryNav.querySelector('.inbox').style.color = 'green';
    primaryNav.querySelector('.inbox').children[0].style.fill = 'green';

    todoIndex++;
});

window.onload = function () {
    createTaskUi(todoArray, main);
    inbox.style.color = 'green';
    inbox.children[0].style.fill = 'green';
}

//create Note

createNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    noteArray[noteIndex] = new createNote(createNoteForm.querySelector('.title').value, createNoteForm.querySelector('textarea').value);
    noteIndex++;

    if (box.parentElement === wrapper) {
        wrapper.removeChild(box);
    }

    createNoteUi(noteArray, main);

    navStyle();
    primaryNav.querySelector('.notes').style.color = 'green';
    primaryNav.querySelector('.notes').children[0].style.fill = 'green';

    console.log(noteArray);
})

//
inbox.addEventListener('click', () => {
    createTaskUi(todoArray, main);
})

today.addEventListener('click', () => {
    createTodayUi(todoArray, main);
})

coming.addEventListener('click', () => {
    createComingUi(todoArray, main);
})

notes.addEventListener('click', () => {
    createNoteUi(noteArray, main);
})

primaryNav.querySelectorAll('li').forEach(e => {
    e.addEventListener('click', () => {
        primaryNav.querySelectorAll('li').forEach(e => {
            e.style.color = 'black';
            e.children[0].style.fill = 'black';
        });
        e.style.color = 'green';
        e.children[0].style.fill = 'green';
    })
})

function navStyle() {
    primaryNav.querySelectorAll('li').forEach(e => {
        e.style.color = 'black';
        e.children[0].style.fill = 'black';
    })
}


document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.side-bar').classList.toggle('active');
})