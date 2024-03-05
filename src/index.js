import './css/reset.scss';
import './css/main.scss';

import {CreateTodo} from './js/create.js';
import {todoCreation, addListBox} from './js/uiCreateTodo.js';
import {box} from './js/uiCreateBox.js';
window.addListBox = addListBox; // Add addListBox to the global scope


let addBtn = document.querySelector('.add-new');
let createList;

addBtn.addEventListener('click', () => {
    document.body.appendChild(box);
    document.querySelector('.box-menu').appendChild(todoCreation);
})