const url = prompt("Lim inn bildelink");
const title = prompt("Gi bildet ett navn");
const size = prompt("Hvor mange pixler bredt skal bildet være?");

document.write(`
<img src="${url}" title="${title}" style="width: ${size}px;">
`);
