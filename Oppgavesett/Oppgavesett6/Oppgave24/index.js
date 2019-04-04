
function setup() {
    createCanvas(innerWidth, innerHeight);
}

const bredde = 200;
const hoyde = 100;
const farge = "rgba(0, 212, 255, 0.7)";
const strokeFarge = "yellow";
const backgroundFarge = "black";
const strokeTykk = "3";

function draw() {
    background(backgroundFarge);
    fill(farge);
    stroke(strokeFarge);
    strokeWeight(strokeTykk);

    rect(10, 10, bredde, hoyde);
    
    rect(40, 40, bredde, hoyde);
    
    rect(70, 70, bredde, hoyde);
    
    rect(100, 100, bredde, hoyde);
}