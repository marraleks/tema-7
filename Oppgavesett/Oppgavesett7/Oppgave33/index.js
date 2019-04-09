const farger = ["green", "yellow", "blue", "red", "orange"];

let randFarge = farger[Math.floor(Math.random() * farger.length)];

console.log(randFarge);

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(randFarge);
}
