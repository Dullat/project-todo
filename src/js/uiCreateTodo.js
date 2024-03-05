let todoCreation = document.createElement('form');
let checkList = document.createElement('div');

todoCreation.classList.add('todoCreation');
checkList.classList.add('check-list-box');

todoCreation.innerHTML = `
<input type="text" class="title" placeholder="title: payBills">
<input type="text" class="description" placeholder="description">
<textarea></textarea>
<div class="checklists-container"></div>

<div class="bottom">
    <div class="date">
        <label for="dateInput">Select a date:</label>
        <input type="date" id="dateInput" name="dateInput">
    </div>
    <div class="create-check-list" onclick="addListBox()">create-check-list</div>
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

module.exports = {todoCreation, addListBox};