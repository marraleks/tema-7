function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawStar(x, y) {
  strokeWeight(3);

  line(x, y, x + 25, y + 65);
  line(x - 25, y + 65, x, y);
  line(x + 25, y + 65, x - 35, y + 25);
  line(x - 35, y + 25, x + 35, y + 25);
  line(x + 35, y + 25, x - 25, y + 65);
}

let xpos = -100;
let ypos = -100;

function mousePressed() {
  xpos = mouseX;
  ypos = mouseY - 40;
}

function draw() {
  drawStar(xpos, ypos);
}
