const firkant = document.getElementById("firkant");
const xPos = document.getElementById("xPos");
const yPos = document.getElementById("yPos");

function flytt() {
    firkant.style.left = `${xPos.value}px`;
    firkant.style.top = `${yPos.value}px`;
}

xPos.addEventListener("input", flytt);
yPos.addEventListener("input", flytt);