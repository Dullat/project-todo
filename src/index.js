import './css/reset.scss';
import './css/index.scss';
import './css/createBox.scss';
import './css/createTodo.scss';

import { CreateTodo } from './js/create.js';
import { todoCreationForm, addListBox, checkPrio, sendPrio} from './js/uiCreateTodo.js';
import { box } from './js/uiCreateBox.js';
window.addListBox = addListBox;

let addBtn = document.querySelector('.add-new');
let createToDo = document.querySelector('.todoCreationForm');
let wrapper = document.querySelector('.wrapper');
let createList;
let todoArray = [];
let i = 0;


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

    todoArray[i] = new CreateTodo(document.querySelector('.title').value,
        document.querySelector('.description').value,
        document.querySelector('#dateInput').value,
        sendPrio(),
        document.querySelector('textarea').value
    );

    if (box.parentElement === wrapper) {
        wrapper.removeChild(box);
    }
    
    i++;
});
