// Lage array med frukter
const frukter = ["eple", "banan", "pære", "appelsin", "drue"];
console.log(frukter);

// Sorterer arrayet etter alfabetisk rekkefølge
frukter.sort();
console.log(frukter);

// Legg til ananas og sortere på nytt
frukter.push("ananas");
frukter.sort();
console.log(frukter);

// Finne indexplassen til banan
const bananplass = frukter.indexOf("banan");
console.log("bananen befinner seg på plass " + bananplass);

// Fjerne bananen fra listen
const fjerne = frukter.splice(frukter.indexOf("banan"), 1);
console.log(fjerne + " blir fjernet");

// console logge etter for å se at banan har blitt fjernet
console.log(frukter);