function setup() {
    createCanvas(innerWidth, innerHeight);
}


let i = 1;

let x = 1;
let y = 15;
let r = 10;


function draw() {

    while(i < innerWidth) {
        noStroke();
        circle(x * 30, y, r);
        i++;
        x++;
        if(x * 30 > innerWidth) {
            y += 30;
            x = 1;
            fill(255 - (y / 3));
        }
    }
}
