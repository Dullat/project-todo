let box = document.createElement('div');
box.classList.add('box');

box.innerHTML = `
<div class="close-box">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
    </svg>
</div>
<ul class="box-header">
    <li class="todo-creation">ToDo</li>
    <li class="project-creation">Project</li>
    <li class="note-creation">Note</li>
</ul>
<div class="box-menu"></div>
`;

module.exports = { box };