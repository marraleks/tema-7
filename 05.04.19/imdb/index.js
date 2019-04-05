const main = document.querySelector("main");
const knapper = document.querySelectorAll("#knapper div");


function visFilmer(evt) {
    // Vi finner ut hvilken knapp som ble klikket på
    const knapp = evt.target;
    const genre = knapp.dataset.genre;
    console.log(genre);

    const valgtefilmer = filmer.filter(film => film.genre === genre);
    main.innerHTML = "";
    for(const film of valgtefilmer) {
        main.innerHTML += `
        <a href="https://www.imdb.com/title/${film.id}" target="_blank">
            <p>${film.tittel}</p>
            <img src="${film.poster}">
        </a>
        `
    }
}


for(const knapp of knapper) {
    knapp.addEventListener("click", visFilmer);
}