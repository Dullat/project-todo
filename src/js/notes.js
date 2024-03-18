function createNoteUi(noteArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    let noteLayout = document.createElement('div');
    noteLayout.classList.add('note-layout');

    let noteHeader = document.createElement('div');
    noteHeader.classList.add('inbox-header');
    noteHeader.innerHTML = `<p>NOTES</p>`;
    noteLayout.appendChild(noteHeader);

    let noteBody = document.createElement('div');
    noteBody.classList.add('note-body');

    noteArray.forEach((element, index) => {
        let noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        noteCard.innerHTML = `
        <div class="title"><i style="font-weight: 600; opacity: .6;">${element.title}</i></div>
        <div class="note">${element.note}</div>
        <button class="delete-note">delete</button>
        `;

        noteBody.appendChild(noteCard);

        noteCard.querySelector('.delete-note').addEventListener('click', () => {
            noteArray.splice(index, 1);
            createNoteUi(noteArray, main);
        });

    });

    noteLayout.appendChild(noteBody);
    main.appendChild(noteLayout);
}

module.exports = { createNoteUi };