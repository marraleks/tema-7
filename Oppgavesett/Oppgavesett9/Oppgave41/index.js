const slideshow = document.querySelector("#slideshow");
const overskrift = document.querySelector("#overskrift");

const bilde = document.querySelector("#slideshow img");
const tekst = document.querySelector("#slideshow h1");

const neste = document.querySelector("#neste");
const forrige = document.querySelector("#forrige");

const bilder = [
    {
        tittel: "Fin øy",
        poster: "https://images.wallpaperscraft.com/image/3d_photoshop_nature_landscape_14993_1600x900.jpg"
    },
    {
        tittel: "Fint fjell",
        poster: "https://cdn-images-1.medium.com/max/1600/1*U18aWqq2322t8Z26zZ0SIg.jpeg"
    },
    {
        tittel: "Fint bad",
        poster: "https://i0.wp.com/greatdestinationsradioshow.com/wp-content/uploads/2017/08/rotorua_te-puia-2.jpg?fit=1600%2C900"
    }
];

let tikker;
let nr = 0;



function byttBilde() {
    // document.body.style.backgroundImage = `url("${bilder[nr].poster}")`;
    // slideshow.style.backgroundImage = `url("${bilder[nr].poster}")`;
    
    if (nr >= bilder.length) {
        nr = 0;
    }
    if(nr < 0) {
        nr = bilder.length; 
    }
    
    bilde.src = bilder[nr].poster;
    overskrift.innerHTML = bilder[nr].tittel;
}


neste.onclick = () => {
    nr++;
    byttBilde();
    tikker = clearInterval(tikker);
    tikker = setInterval(fremover, 5000);   
}

forrige.onclick = () => {
    nr--;
    byttBilde();
    tikker = clearInterval(tikker);
    tikker = setInterval(fremover, 5000);  
}

function fremover() {
    nr++;
    byttBilde();
}

byttBilde();
tikker = setInterval(fremover, 5000);