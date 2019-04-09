const inpVekt = document.getElementById("inpVekt");
const inpHoyde = document.getElementById("inpHoyde");
const btn = document.getElementById("btn");

const info = document.querySelector("#info");

function bmiKalk() {
  const vekt = Number(inpVekt.value);
  const hoyde = Number(inpHoyde.value / 100);
  const BMI = vekt / hoyde ** 2;
  info.innerHTML = `<h2>${BMI.toFixed(1)}</h2>`;

  if (BMI <= 18.4) {
    info.innerHTML += `<p>Du er undervektig, legg på deg!</p>`;
  } else if (BMI <= 24.9) {
    info.innerHTML += `<p>Du er normalvektig, gz!</p>`;
  } else if (BMI <= 29.9) {
    info.innerHTML += `<p>Du er overvektig, slank deg!</p>`;
  } else if (BMI <= 34.9) {
    info.innerHTML += `<p>Du er i fedme grad 1, dette  begynner å bli farlig!</p>`;
  } else if (BMI <= 39.9) {
    info.innerHTML += `<p>Du er i fedme grad 2, dette  begynner å bli veldig farlig!</p>`;
  } else {
    info.innerHTML += `<p>Du er i fedme grad 3, snart dør du!</p>`;
  }
}

btn.addEventListener("click", bmiKalk);
