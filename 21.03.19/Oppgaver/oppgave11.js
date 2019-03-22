const inpUtenmoms = prompt("Hva er prisen uten moms?");
const utenmoms = Number(inpUtenmoms);

console.log(typeof inpUtenmoms);
console.log(typeof utenmoms);

document.write(utenmoms.toFixed(2));



document.write(`
    <ul>
        <li>${utenmoms}</li>
        <li>${utenmoms*0.25}</li>
        <li>${utenmoms*1.25}</li>
    </ul>

`);