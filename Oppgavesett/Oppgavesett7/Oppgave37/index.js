const linjer = [];

const linje0 = {
  x1: 150,
  y1: 50,
  x2: 150,
  y2: 250
};

const linje1 = {
  x1: 150,
  y1: 50,
  x2: 90,
  y2: 90
};

const linje2 = {
  x1: 150,
  y1: 50,
  x2: 210,
  y2: 90
};
const linje3 = {
  x1: 150,
  y1: 90,
  x2: 90,
  y2: 130
};
const linje4 = {
  x1: 150,
  y1: 90,
  x2: 210,
  y2: 130
};
const linje5 = {
  x1: 150,
  y1: 130,
  x2: 90,
  y2: 170
};
const linje6 = {
  x1: 150,
  y1: 130,
  x2: 210,
  y2: 170
};
const linje7 = {
  x1: 150,
  y1: 170,
  x2: 90,
  y2: 210
};
const linje8 = {
  x1: 150,
  y1: 170,
  x2: 210,
  y2: 210
};

linjer.push(linje0);
linjer.push(linje1);
linjer.push(linje2);
linjer.push(linje3);
linjer.push(linje4);
linjer.push(linje5);
linjer.push(linje6);
linjer.push(linje7);
linjer.push(linje8);

function setup() {
  createCanvas(300, 300);
}

function draw() {
  strokeWeight(5);

  for (const linje of linjer) {
    line(linje.x1, linje.y1, linje.x2, linje.y2);
  }

  /* Med while-loop
    while(i < linjer.length) {
        const linje = linjer[i];
        line(linje.x1, linje.y1, linje.x2, linje.y2);
        i++;
    }
    */
}
