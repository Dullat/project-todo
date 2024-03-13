let createNoteForm = document.createElement('form');

createNoteForm.classList.add('create-note');

createNoteForm.innerHTML = `
<input type="text" class="title" placeholder="title">
<textarea></textarea>
<button type="submit">Create</button>
`;

module.exports = {createNoteForm};