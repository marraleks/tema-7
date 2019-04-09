function setup() {
  createCanvas(200, 200);
}

function draw() {
  fill(255);
  rect(0, 0, 200, 200);
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(90, 100, 80, 80);
  noStroke();
  fill(0, 255, 0, 100);
  ellipse(120, 100, 80, 80);
  noStroke();
  fill(0, 0, 255, 100);
  ellipse(150, 100, 80, 80);
}

/*
let r = 200;

function draw() {
    noFill();
    circle(250, 250, r);

    r = r - 2;
}
*/
