const fornavn = prompt("Hva er ditt fornavn?");
const etternavn = prompt("Hva er ditt etternavn?");
const stilling = prompt("Hvilken stilling har du?");
const bilde = prompt("Lim inn url-bilde av deg");

document.write(`
    <article>
        <h1>${fornavn} ${etternavn}</h1>
        <p><b>Stilling: </b>${stilling}</p>
        <img src="${bilde}" style="width: 300px">
    </article>
    `);
