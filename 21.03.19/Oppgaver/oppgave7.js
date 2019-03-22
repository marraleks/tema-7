const url = prompt("Lim inn bildelink");
const title = prompt("Gi bildet ett navn");
const size = prompt("hvor mange pixler høyt skal bildet være?");


document.write(`
<img src="${url}" title="${title}" style="height: ${size}px;">
`);