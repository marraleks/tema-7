const inpUtenmoms = prompt("Hva er prisen uten moms?");
const utenmoms = Number(inpUtenmoms);

console.log(typeof inpUtenmoms);
console.log(typeof utenmoms);

document.write(`
    <ul>
        <li>${utenmoms} pris uten moms.</li>
        <li>${utenmoms * 0.25} selve momsen.</li>
        <li>${utenmoms * 1.25} pris med moms.</li>
    </ul>

`);
