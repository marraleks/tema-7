function setup() {
  createCanvas(innerWidth, innerHeight);
}

const ball = {
  x: Math.floor(Math.random() * innerWidth),
  y: Math.floor(Math.random() * innerHeight),
  r: 50,
  farge: "blue",
  xretning: 1,
  yretning: 1,
  xfart: 5,
  yfart: 5
};

function tegnBall() {
  fill(ball.farge);
  circle(ball.x, ball.y, ball.r);

  ball.x += ball.xfart * ball.xretning;
  ball.y += ball.yfart * ball.yretning;

  if (ball.x + ball.r >= innerWidth) {
    ball.xretning = -1;
  }
  if (ball.y + ball.r >= innerHeight) {
    ball.yretning = -1;
  }
  if (ball.x - ball.r <= 0) {
    ball.xretning = 1;
  }
  if (ball.y - ball.r <= 0) {
    ball.yretning = 1;
  }
}

function draw() {
  background("grey");
  noStroke();
  tegnBall();
}
