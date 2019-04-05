const minCanvas = document.querySelector("#minCanvas");

const ctx = minCanvas.getContext("2d");



let x = 10;
let y = 10;

function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 100, 50);

    x++;
    y++;


    /*
    if(x < 100) {
        requestAnimationFrame(draw);
    }
    */

}


setInterval(draw, 100);

draw();