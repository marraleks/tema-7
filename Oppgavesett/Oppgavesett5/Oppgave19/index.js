function setup() {
  createCanvas(200, 200);
}

function draw() {
  //MørkSirkel
  fill(255, 204, 0);
  noStroke();
  circle(100, 100, 90);

  //LysSirkel
  fill(255, 255, 0);
  circle(100, 100, 75);

  // VenstreØye
  fill(193, 129, 1);
  circle(70, 85, 15);

  //HøyreØyeBlunk
  if (mouseIsPressed) {
    stroke(193, 129, 1);
    line(120, 80, 140, 90);
  } else {
    fill(193, 129, 1);
    circle(130, 85, 15);
    //HøyreØye
  }

  //Munn
  stroke(193, 129, 1);
  strokeWeight(10);
  noFill();
  arc(100, 130, 70, 40, 0, PI);
}
