function setup() {
    createCanvas(200, 200);
    //document.body.style.backgroundColor = "grey";
  }

  function draw() {
    noStroke();
    fill(120);
    rect(0, 0, 200, 200);
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(10, 10, 180, 180);
    fill(0, 100, 0);
    noStroke();
    circle(100, 100, 70);
    fill(0, 255,0);
    circle(100, 100, 60);
  }

  