const random = Math.random() * 100 + 1;
const randomDesi = random.toFixed(0);

if (random <= 20) {
  document.write(randomDesi + " is a smaller number");
} else if (random <= 80) {
  document.write(randomDesi + " is a medium big number");
} else {
  document.write(randomDesi + " is a big number");
}
