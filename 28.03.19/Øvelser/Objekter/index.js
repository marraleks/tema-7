
/*
const navn = "Don Johnson";
const alder = 60;

const info = `${navn} er ${alder} gammel`;

document.write(info);

*/

// Infoen er samlet ett sted. (aldri komma etter siste!)

const donjohnson = {
    navn: "Don Johnson",
    alder: 60
};

// Endre verdi til et attributt i objektet
donjohnson.alder = 70;

// Legge til nye verdier
donjohnson.hårfarge = "brunt";

const info = `<h1>${donjohnson.navn} er ${donjohnson.alder} gammel og har ${donjohnson.hårfarge} hår.</h1>`;

document.write(info);




const ball = {
    x: 50,
    y: 100
};


// Disse to gjør akkurat de samme
//De øker ball.x med 5

ball.x = ball.x + 5;
ball.x += 5;