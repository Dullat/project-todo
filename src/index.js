import './css/reset.scss';
import './css/index.scss';
import './css/createBox.scss';
import './css/createTodo.scss';
import './css/inbox.scss';

import { CreateTodo } from './js/create.js';
import { todoCreationForm, addListBox, checkPrio, sendPrio } from './js/uiCreateTodo.js';
import { box } from './js/uiCreateBox.js';
import { createTaskUi } from './js/inbox.js';
import {createTodayUi} from './js/today.js';
import {createComingUi} from './js/coming.js';
window.addListBox = addListBox;

let addBtn = document.querySelector('.add-new');
let createToDo = document.querySelector('.todoCreationForm');
let wrapper = document.querySelector('.wrapper');
let main = document.querySelector('.main');
let todoArray = [];
let i = 0;
let inbox = document.querySelector('.inbox');
let today = document.querySelector('.today');
let coming = document.querySelector('.upcoming');
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
})

todoCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let checkListArray = document.querySelectorAll('.checkList');

    let sendChecklist = [];

    checkListArray.forEach(e => {
        sendChecklist.push(e.value);
    })

    console.log(sendChecklist);

    todoArray[i] = new CreateTodo(document.querySelector('#title').value,
        document.querySelector('.description').value,
        document.querySelector('#dateInput').value,
        sendPrio(),
        document.querySelector('textarea').value,
        sendChecklist,
        i
    );

    console.log(todoArray[i]);

    if (box.parentElement === wrapper) {
        wrapper.removeChild(box);
    }

    createTaskUi(todoArray, main);

    i++;
});

window.onload = function () {
    createTaskUi(todoArray, main);
    inbox.style.color = 'green';
    inbox.children[0].style.fill = 'green';
}

//
inbox.addEventListener('click', () => {
    createTaskUi(todoArray, main);
})

today.addEventListener('click', () => {
    createTodayUi(todoArray,main);
})

coming.addEventListener('click', () => {
    createComingUi(todoArray,main);
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

///

box.querySelectorAll('.note-creation').addEventListener('click', () => {
    box.querySelectorAll('.note-creation').style.color = 'green';
})