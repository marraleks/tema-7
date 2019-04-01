

const frukt = ["eple", "banan", "pære", "appelsin", "drue"];

console.log(frukt);

const alfabetiskrekk = frukt.sort();

console.log(alfabetiskrekk);



function alfabetisk() {
    frukt.sort();
    console.log(frukt);
}

addEventListener("load", alfabetisk);


frukt.push("ananas");

function bananplass() {
const bananplass = frukt.indexOf("banan");
console.log("bananen befinner seg på plass " + bananplass)
}

addEventListener("load", bananplass);


function fjerne() {
    const fjerne = frukt.splice(2, 1);
    console.log(fjerne + " blir fjernet");
    console.log(frukt);
}

addEventListener("load", fjerne);
