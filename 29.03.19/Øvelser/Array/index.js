


// Registrere karakterer
//Definere et array med mange tall
const karakterer = [4, 5, 23, 1, 3, 32, 43, 43];

// Ta ut den siste karakteren:
karakterer.pop();

// Ta ut den første:
document.write(karakterer.shift());

// Ta ut karakteren på plass 4:
// Ta ut ett element fra plass 4:
karakterer.splice(3, 1);

// Finn summen av karakterene
let sum = 0;

for(const karakter of karakterer) {
    document.write("Karakteren ble " + karakter);
    document.write("<br>");

    //Legger til karakteren i sum
    sum += karakter;
}

    // Hva er snittet?
    const snitt = sum / karakterer.length;
    console.log(snitt);


/*
const bloggere = ["Sophie Elise", "Annijor", "Pappahjerte"];


const antallBloggere = bloggere.length;

document.write(antallBloggere);
document.write("<br>");

// Det dukker opp en ny influencer på scenen 
bloggere.push("Pilotfrue");

bloggere.unshift("Jon Arne Riise");

document.write(bloggere[0]);

console.log(bloggere);

*/