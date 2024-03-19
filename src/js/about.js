function createAbout(main) {
    while (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    };

    let about = document.createElement('div');

    about.innerHTML = `<p style="padding: 1rem; font-weight: 600; color: green; font-size: 1.2rem; padding-top: 5rem;">I developed this project independently, without relying on tutorials or guides. While this approach may have led to some mistakes, it allowed me to focus on building robust logic and improving my programming skills. Although the user interface may not be polished, the primary goal of this project was to refine my logic and problem-solving abilities </p>`

    main.appendChild(about);

}

module.exports = { createAbout };