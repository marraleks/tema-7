const cb = document.querySelector("#cb");

const burger = document.querySelector("#burger");
const valgt = document.querySelector(".valgt");

const menu = document.querySelector(".menu");


cb.onclick = () => {
    burger.classList.toggle("valgt");
    menu.classList.toggle("active");
}


const klokka = document.querySelector("#klokka");


function visKlokka() {
    const tid = new Date();
    let timer = tid.getHours();
    let minutter = tid.getMinutes();
    let sekunder = tid.getSeconds();

    if(timer < 10) { 
        timer = "0" + timer;
    }
    if(minutter < 10) { 
        minutter = "0" + minutter;
    }
    if(sekunder < 10) {
        sekunder = "0" + sekunder;
    }

    const tidstekst = `${timer}:${minutter}:${sekunder}`;
    klokka.innerHTML = tidstekst
}

setInterval(visKlokka, 1000);
visKlokka();