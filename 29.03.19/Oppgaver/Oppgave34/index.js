

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


const bananplass = frukt.indexOf("banan");
console.log(bananplass);
