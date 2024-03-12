let createNote = document.createElement('form');

createNote.classList.add('create-note');

createNote.innerHTML = `
<input type="text" class="title">
<textarea></textarea>
<button type="submit">Create</button>
`;

module.exports = {createNote};