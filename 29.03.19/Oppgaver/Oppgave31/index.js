function setup() {
    createCanvas(innerWidth, innerHeight);
}

let i = 1;

let x = 1;
let y = 20;
let r = 10;

function draw() {
    while(i <= 42) {
        fill("lightblue");
        noStroke();
        circle(x*30, y, r);
        x++;
        i++;
    }
    if(i <=82) {
        
    }
}


/*

function draw() {

    while(y < innerHeight - 10) {
        fill("lightblue");
        noStroke();
        circle(x * 30, y, r);
        x++;
        i++;

        if(x * 30 > innerWidth - 10) {
            x = 1;
            y += 30;
        }
    }
}
*/
