let todoCreationForm = document.createElement('form');
let checkList = document.createElement('div');
let clicked;

todoCreationForm.classList.add('todoCreationForm');
checkList.classList.add('check-list-box');

todoCreationForm.innerHTML = `
<input type="text" id="title" class="title" placeholder="title: payBills" required>
<input type="text" class="description" placeholder="description" required>
<textarea placeholder="note"></textarea>
<div class="checklists-container"></div>
<div class="priority">
    <div class="low prio" data-value="low">Priority level: Low</div>
    <div class="med prio" data-value="med">Priority level: Med</div>
    <div class="high prio" data-value="high">Priority level: High</div>
</div>

<div class="bottom">
    <div class="date">
        <input type="date" id="dateInput" name="dateInput">
    </div>
    <div class="create-check-list" onclick="addListBox()">Checklist</div>
    <button type="submit">create</button>
</div>
`;

checkList.innerHTML = `
<input type="text" class="checkList" placeholder="addCheckList">
<button onclick="this.parentElement.remove()" class="remove-box">x</button>
`;

function addListBox() {
    document.querySelector('.checklists-container').appendChild(checkList.cloneNode(true));
}

function checkPrio() {
    let prios = document.querySelectorAll('.prio');
    prios.forEach(e => {
        e.addEventListener('click', () => {
            prios.forEach(l => {
                l.removeAttribute('active');
                l.style.background = 'beige';
            })
            e.setAttribute('active','')
            e.style.background = 'green';
            clicked = e;
        })
    })
}

function sendPrio(){
    return clicked.getAttribute("data-value");
}

module.exports = { todoCreationForm, addListBox, checkPrio, sendPrio };