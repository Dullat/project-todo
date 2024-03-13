function createNoteUi(noteArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    let noteLayout = document.createElement('div');
    noteLayout.classList.add('note-layout');

    noteArray.forEach(element => {
        let noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        noteCard.innerHTML = `
        <div class="title"><span style="opacity: .5">title: </span><span>${element.title}</span></div>
        <div class="note">${element.note}</div>
        `;

        noteLayout.appendChild(noteCard);
    });

    main.appendChild(noteLayout);
}

module.exports = { createNoteUi };