function setup() {
  createCanvas(200, 200);
}

function draw() {
  fill(255, 204, 0);
  noStroke();
  circle(100, 100, 90);
  fill(255, 255, 0);
  circle(100, 100, 75);
  fill(193, 129, 1);
  circle(70, 85, 15);
  fill(193, 129, 1);
  circle(130, 85, 15);
  stroke(193, 129, 1);
  strokeWeight(10);
  noFill();
  arc(100, 130, 70, 40, 0, PI);
}
