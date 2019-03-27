function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    if (mouseIsPressed) {
        noStroke();
        fill(255);
        circle(mouseX, mouseY, 80);
    } else {
        fill(0);
    }
    circle(mouseX, mouseY, 10);
}

/*
function draw() {
    strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
    }
*/






