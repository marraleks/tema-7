const inpHoyde = prompt("Hvor høy er du i cm?");

hoyde = Number(inpHoyde);

console.log(hoyde);

const tilInch = hoyde * 0.3937;

if (isNaN(tilInch)) {
  document.write("idiot!");
  console.log("Dette er ikke et tall");
} else {
  if (hoyde >= 300) {
    document.write("Du er ikke så høy!");
  } else if (hoyde <= 100) {
    document.write("Du er ikke så lav!");
  } else {
    document.write(`Du er ${tilInch.toFixed(1)} inches.`);
  }
}
