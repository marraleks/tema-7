const inpTittel = document.querySelector("#inpTittel");
const info = document.querySelector("#info");


const filmer = [
    "Sharknado",
    "Sharknado 2",
    "Sharknado 3",
    "Sharknado 4",
    "The last Sharknado",
    "E.T.",
    "Star Wars"
];


function finnFilmer() {
    const q = inpTittel.value;
    const resulatat = filmer.filter(film => film.toLocaleUpperCase().includes(q.toLocaleUpperCase()));
    
    info.innerHTML = "";
    
    for(const film of resulatat) {
        info.innerHTML += `<h1>${film}</h1>`;
    }
}

inpTittel.addEventListener("input", finnFilmer);





/*
function finnFilm() {
    const q = inpTittel.value;
    const resulatat = filmer.find(film => film.toLocaleUpperCase() === q.toLocaleUpperCase());
    if(resulatat) {
        info.innerHTML = resulatat;
    } else {
        info.innerHTML = "";
    }
}

inpTittel.addEventListener("input", finnFilm);
*/





/*
const q = "Sharknado 4";
const resulatat = filmer.find(film => film === q);

console.log(resulatat);
*/
//filmer.splice(3, 1)
//console.log(filmer);

// Hvor mange filmer er det?
// console.log( filmer.length );

// Tar ut den siste filmen?
// filmer.pop();

// Nå er Star Wars borte
// console.log(filmer);

