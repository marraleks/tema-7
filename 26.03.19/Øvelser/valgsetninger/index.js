
// Den automatiske dørvakt
const inpAlder = prompt("Hvor gammel er du?");
alder = Number(inpAlder);
/*
if(alder <= 18) {
    document.write("Flott! Du kommer inn");
} else {
    document.write("Du er ikke gammel nok til å komme inn");
}
*/
/*
if(alder > 50) {
    document.write("Du er for gammel");
} else if(alder < 18) {
    document.write("Du er for ung");
} else {
    document.write("Du er akkurat passe gammel");
}
*/

const skotype = prompt("Hva slags sko har du?");

if( (alder >= 18) && (skotype === "pensko") ) {
    document.write("JUHU. Du kommer inn");
}
