function setup() {
    createCanvas(innerWidth, innerHeight);
}

const ball = {
    x: 100,
    y: innerHeight / 2,
    r: 10,
    xretning: 1,
    xfart: 5,
    farge: "red"
}



function tegnBall() {
    fill(ball.farge);
    circle(ball.x, ball.y, ball.r);

    ball.x += ball.xfart * ball.xretning;
    ball.r += 0.5;

    if(ball.x >= innerWidth + ball.r) {
        ball.x = 100;
        ball.r = 10;
    }
}





function draw() {
    background("pink");
    
    tegnBall();
}