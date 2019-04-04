// HTML-elementer
const inpDato = document.querySelector("#inpDato");
const info = document.querySelector("#info");


const dato = new Date();

const år = dato.getFullYear();
const måned = dato.getMonth();
const ukedag = dato.getDay();
const dagIMåneden = dato.getDate();



function sjekkAlder() {
    const fdato = new Date(inpDato);
    const fmåned = fdato.getMonth();
    const fukedag = fdato.getDay();
    const fdagIMåneden = fdato.getDate();
}

inpDato.addEventListener("change", sjekkAlder);



console.log("ÅR: " + år);
console.log("Måned: " + måned);
console.log("Ukedag: " + ukedag);
console.log("Dag i måned: " + dagIMåneden);