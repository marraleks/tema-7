

const klokka = document.querySelector("#klokka");
const sekundviser = document.querySelector("#sekundviser");


const dato = new Date();
let sekunder = dato.getSeconds();
sekundviser.style.transform = `rotate(${sekunder * 6}deg)`;

function visKlokka() {
    sekunder++;
    const sekGrader = sekunder * 6;

    sekundviser.style.transform = `rotate(${sekGrader}deg)`;

}


setInterval(visKlokka, 1000);