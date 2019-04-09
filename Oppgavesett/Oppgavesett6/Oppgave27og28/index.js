function setup() {
  createCanvas(innerWidth, innerHeight);
}

const ball1 = {
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: 30,
  xfart: 10,
  yfart: 10,
  xretning: 1,
  yretning: 1,
  farge: "rgba(150, 255, 94, 1)"
};

const ball2 = {
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: 30,
  xfart: 10,
  yfart: 10,
  xretning: 1,
  yretning: 1,
  farge: "rgba(0, 255, 233, 1)"
};

function tegnBall1() {
  fill(ball1.farge);
  circle(ball1.x, ball1.y, ball1.r);

  ball1.x += ball1.xfart * ball1.xretning;
  ball1.y += ball1.yfart * ball1.yretning;

  if (ball1.x >= innerWidth - ball1.r) {
    ball1.xretning = -1 * Math.random();
  }
  if (ball1.y >= innerHeight - ball1.r) {
    ball1.yretning = -1 * Math.random();
  }
  if (ball1.x <= 0 + ball1.r) {
    ball1.xretning = 1 * Math.random();
  }
  if (ball1.y <= 0 + ball1.r) {
    ball1.yretning = 1 * Math.random();
  }
}

function tegnBall2() {
  fill(ball2.farge);
  circle(ball2.x, ball2.y, ball2.r);

  ball2.x += ball2.xfart * ball2.xretning;
  ball2.y += ball2.yfart * ball2.yretning;

  if (ball2.x >= innerWidth - ball2.r) {
    ball2.xretning = -1 * Math.random();
  }
  if (ball2.y >= innerHeight - ball2.r) {
    ball2.yretning = -1 * Math.random();
  }
  if (ball2.x <= 0 + ball2.r) {
    ball2.xretning = 1 * Math.random();
  }
  if (ball2.y <= 0 + ball1.r) {
    ball2.yretning = 1 * Math.random();
  }
}

function draw() {
  //Fjern linjen under for å få oppgave 28
  background("pink");
  noStroke();

  tegnBall1();
  tegnBall2();
}
