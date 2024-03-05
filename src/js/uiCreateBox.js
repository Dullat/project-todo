let box = document.createElement('div');
box.classList.add('box');

box.innerHTML = `
<ul class="box-header">
    <li class="todo-creation">ToDo</li>
    <li class="project-creation">Project</li>
    <li class="note-creation">Note</li>
</ul>
<div class="box-menu"></div>
`;

module.exports = {box};