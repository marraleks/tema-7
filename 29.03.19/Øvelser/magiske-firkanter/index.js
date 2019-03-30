const main = document.querySelector("main");

const antallFirkanter = 500;
let i = 0;

while(i < antallFirkanter) {

    const firkant = document.createElement("div");
    
    firkant.style.left = Math.random() * innerWidth + "px";
    firkant.style.top = Math.random() * innerHeight + "px";
    firkant.style.width = Math.random() * 20 + "px";
    firkant.style.height = Math.random() * 10 + "px";

    main.appendChild(firkant);

    i++;
}

function scramble() {
    const firkanter = document.querySelectorAll("main div");
    
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    for(const firkant of firkanter) {

    firkant.style.left = Math.random() * innerWidth + "px";
    firkant.style.top = Math.random() * innerHeight + "px";
    firkant.style.width = Math.random() * 20 + "px";
    firkant.style.height = Math.random() * 10 + "px";
    firkant.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}

document.addEventListener("click", scramble);