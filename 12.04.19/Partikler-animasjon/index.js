const bildestriper = document.querySelector("#bildestriper");
const brud = document.querySelector("#brud");
console.log(brud.width);



const bredde = brud.width;
const hoyde = brud.height;
const antallStriper = 14; 
const antallHoyder = 7;
//bildestriper.style.width = bredde + "px";
const rutebredde = bredde / antallStriper;


bildestriper.style.gridTemplateRows = `repeat(${antallHoyder}, 1fr)`;
bildestriper.style.gridTemplateColumns = `repeat(${antallStriper}, 1fr)`;




for(let i=0; i<antallHoyder; i++) {
    for(let j=0; j<antallStriper; j++) {
        const div = document.createElement("div");
        div.style.backgroundPosition = `${-j * rutebredde}px ${-i * rutebredde}px`
        div.style.animationDelay = `${i * 100}ms`
        div.style.animationDuration = `${Math.random() * 6}s`
        bildestriper.appendChild(div);
    } 
}


