const profiler = document.querySelector("#profiler");
const skjema = document.querySelector("#skjema");
const inpFornavn = document.querySelector("#inpFornavn");


function lagreData(evt) {
    evt.preventDefault();
    const fornavn = inpFornavn.value;

    profiler.innerHTML += `
        <article>
            <p>${fornavn}</p>
        </article>
    `;
}


skjema.addEventListener("submit", lagreData);
