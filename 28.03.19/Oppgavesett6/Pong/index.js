const bredde = 600;
const hoyde = 400;

let score1 = 0;
let score2 = 0;
const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");


const UP_ARROW_PLAYER_2 = 38;
const DOWN_ARROW_PLAYER_2 = 40;

const ball = {
    x: 600/2,
    y: 400/2,
    r: 5,
    xfart: 5,
    yfart: 2,
    xretning: 1,
    yretning: 1,
    farge: "black"
};

const player1 = {
    x: 15,
    y: hoyde/2-25,
    w: 10,
    h: 50,
    yretning: 0,
    yfart: 5,
    farge: "black"
};

const player2 = {
    x: 575,
    y: hoyde/2-25,
    w: 10,
    h: 50,
    yretning: 0,
    yfart: 5,
    farge: "black"
};

 /*
const robot = {
    x: 15,
    y: 100,
    w: 10,
    h: 80,
    farge: "black"
};
*/

function setup() {
    createCanvas(bredde, hoyde);
}

/*
function tegnRobot() {
    noStroke();
    fill(robot.farge);
    rect(robot.x, robot.y, robot.w, robot.h);

    robot.y = ball.y - robot.h/2;
}
*/



function tegnPlayer1() {
    fill(player1.farge);
    rect(player1.x, player1.y, player1.w, player1.h);

    player1.y += player1.yfart * player1.yretning;

    if (keyIsDown(87)) {
        player1.yretning = -1;
      }
    if (keyIsDown(83)) {
        player1.yretning = 1;
    }
    if(player1.y <= 0) {
        player1.y = 0;
    }
    if(player1.y >= hoyde - player1.h) {
        player1.y = hoyde - player1.h;
    }
}
function tegnPlayer2() {
    fill(player2.farge);
    rect(player2.x, player2.y, player2.w, player2.h);

    player2.y += player2.yfart * player2.yretning;

    if (keyIsDown(UP_ARROW_PLAYER_2)) {
        player2.yretning = -1;
      }
    if (keyIsDown(DOWN_ARROW_PLAYER_2)) {
        player2.yretning = 1;
    }
    if(player2.y <= 0) {
        player2.y = 0;
    }
    if(player2.y >= hoyde - player2.h) {
        player2.y = hoyde - player2.h;
    }
}

function keyReleased() {
    
    if(keyCode === 38 || keyCode === 40) {
        player2.yretning = 0;
    }
    if(keyCode === 87 || keyCode === 83) {
        player1.yretning = 0;
    }
    return false; // prevent any default behavior
  }


function hitOne() {
    const over = ball.y + ball.r < player2.y;
    const under = ball.y - ball.r > player2.y + player2.h;
    const left = ball.x + ball.r < player2.x;
    const right = ball.x - ball.r > player2.x + player2.w;
    
    const over1 = ball.y + ball.r < player1.y;
    const under1 = ball.y - ball.r > player1.y + player1.h;
    const left1 = ball.x + ball.r < player1.x;
    const right1 = ball.x - ball.r > player1.x + player1.w;



    if(!over && !under && !left && !right) {
        ball.xretning = -1;
    }
    if(!over1 && !under1 && !left1 && !right1) {
        ball.xretning = 1;
    }
     
}

function tegnBall() {
    fill(ball.farge);
    circle(ball.x, ball.y, ball.r);

    ball.x += ball.xfart * ball.xretning;
    ball.y += ball.yfart * ball.yretning;

    if(ball.x <= 0) {
        reset();
        score2 ++;
        txtScore2.innerHTML = score2;
    }
    if(ball.x >= bredde) {
        reset();
        score1 ++;
        txtScore1.innerText = score1;
    }
    
    if(ball.y >= hoyde) {
        ball.yretning = -1;
    }
    if(ball.y <= 0) {
        ball.yretning = 1;
    }
}

function reset(){
    ball.x = bredde/2;
    ball.y = Math.floor(Math.random() * 400);
    ball.xfart = 5;
    ball.yfart = 3;
    ball.xretning = 1;
    ball.yretning = 1;
    player1.x = 15;
    player1.y = height/2;   
    player2.x = 575;
    player2.y = height/2;   
}

// Dette er en loop
function draw() {
    fill("pink");
    noStroke();
    background("pink");

    tegnBall();
    tegnPlayer1();
    tegnPlayer2();
    hitOne();
    textSize(24);
    // tegnRobot();

}


// robot.x + robot.w