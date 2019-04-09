function setup() {
  createCanvas(innerWidth, innerHeight);
}

let xPos = 100;

function tegnPacman() {
  //MørkSirkel

  if (mouseIsPressed) {
    fill(255, 204, 0);
    noStroke();
    circle(xPos, 100, 90);
  } else {
    fill(255, 204, 0);
    noStroke();
    circle(xPos, 100, 90);
    fill("black");
    triangle(xPos + 90, 150, xPos, 100, xPos + 90, 50);
  }
}

function tegnMat() {
  let xMat = 150;

  while (xMat < innerWidth) {
    if (xMat < xPos - 5) {
      fill("black");
    } else if (mouseIsPressed && xMat < xPos + 100) {
      fill(255, 204, 0);
      circle(xMat, 100, 10);
    } else {
      fill("white");
      circle(xMat, 100, 10);
    }

    xMat += 100;
  }
}

function draw() {
  background("black");
  tegnPacman();
  tegnMat();
}

function mouseClicked() {
  xPos += 100;
}
