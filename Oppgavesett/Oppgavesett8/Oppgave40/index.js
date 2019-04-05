const bildestabel = document.querySelector("#bildestabel");
const bilde1 = document.querySelector("#bilde1");
const bilde2 = document.querySelector("#bilde2");
const bilde3 = document.querySelector("#bilde3");
const bilde4 = document.querySelector("#bilde4");
const bilde5 = document.querySelector("#bilde5");
const bilde6 = document.querySelector("#bilde6");
const bilde7 = document.querySelector("#bilde7");
const bilde8 = document.querySelector("#bilde8");
const bilde9 = document.querySelector("#bilde9");


function mouseOver() {

  bilde1.style.transform = `rotateX(0deg) translate(${-innerWidth/2 + 150}px, ${-innerHeight/2 + 100}px)`;
  bilde2.style.transform = `rotateX(0deg) translate(0, ${-innerHeight/2 + 100}px)`;
  bilde3.style.transform = `rotateX(0deg) translate(${innerWidth/2 - 150}px, ${-innerHeight/2 + 100}px)`;
  bilde4.style.transform = `rotateX(0deg) translate(${-innerWidth/2 + 150}px, 0`;
  bilde5.style.transform = `rotateX(0deg) translate(${innerWidth/2 - 150}px, 0`;
  bilde6.style.transform = `rotateX(0deg) translate(${-innerWidth/2 + 150}px, ${innerHeight/2 - 100}px)`;
  bilde7.style.transform = `rotateX(0deg) translate(0, ${innerHeight/2 - 100}px)`;
  bilde8.style.transform = `rotateX(0deg) translate(${innerWidth/2 - 150}px, ${innerHeight/2 - 100}px)`;

}

  function mouseOut() {
    bilde1.style.transform = "rotateX(50deg) translate(50px, -110px)";
    bilde2.style.transform = "rotateX(50deg) translate(-150px, 50px)";
    bilde3.style.transform = "rotateX(50deg) translate(-150px, -150px)";
    bilde4.style.transform = "rotateX(50deg) translate(-50px, 50px)";
    bilde5.style.transform = "rotateX(50deg) translate(50px, 50px)";
    bilde6.style.transform = "rotateX(50deg) translate(50px, -50px)";
    bilde7.style.transform = "rotateX(50deg) translate(-50px, -50px)";
    bilde8.style.transform = "rotateX(50deg) translate(50px, 50px)";
  }
