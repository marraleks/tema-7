// Litt om tall 
// Det største tallet som finnes i JavaScript

// console.log( Number.MAX_VALUE);
/*
const pris = 100 / 3;

console.log(pris);


// Lager en tekst av taller med et visst antall
const avrundet = pris.toFixed(2);

console.log(avrundet);
*/

console.log( Math.PI );

const r = 5;
const areal = Math.PI * Math.pow(r, 2);

console.log(areal);


// ny
const tall = 5.5;

const avrundet = Math.round(tall);
const oppover = Math.ceil(tall);
const nedover = Math.floor(tall);

console.log(avrundet);
console.log(oppover);
console.log(nedover);


// Tilfeldig tall mellom 0 og 1
const tilfeldig = Math.random();

console.log(tilfeldig);



// Lotto-maskinen

const vinnertall = Math.random() * 36 + 1;
const heltall = Math.floor(vinnertall);

console.log(heltall);


