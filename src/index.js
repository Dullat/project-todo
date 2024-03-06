import './css/reset.scss';
import './css/index.scss';
import './css/createBox.scss';

import {CreateTodo} from './js/create.js';
import {todoCreation, addListBox} from './js/uiCreateTodo.js';
import {box} from './js/uiCreateBox.js';
window.addListBox = addListBox; // Add addListBox to the global scope


let addBtn = document.querySelector('.add-new');
let createList;

addBtn.addEventListener('click', () => {
    document.querySelector('.wrapper').appendChild(box);
    document.querySelector('.box-menu').appendChild(todoCreation);
})