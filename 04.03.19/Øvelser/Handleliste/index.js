
// HTML-elementer
const skjema = document.querySelector("#skjema");
const inpVare = document.querySelector("#inpVare");
const handleliste = document.querySelector("#handleliste");

// Definere en tom handlelist
const varer = [];

function visVare() {
    // Først tømmer vi handlelisten vår
    handleliste.innerHTML = "";

    // Så går vi gjennom arrayet med varer
    for(const vare of varer) {
        handleliste.innerHTML += `
            <article>
                <div>${vare}</div>
                <div>X</div>
            </article>
        `;
    }
}


function leggTilVare(evt) {
    evt.preventDefault();

    varer.push(inpVare.value);
    skjema.reset();

    visVare();
    
}

skjema.addEventListener("submit", leggTilVare);