const a = document.querySelectorAll("a");

function lagLink() {
  for (const link of a) {
    link.innerHTML = `<i class="fas fa-link"></i> <span>${
      link.innerHTML
    }</span>`;
  }
}

addEventListener("load", lagLink);

const header = document.querySelector(".header");

function visMeny(evt) {
  let y = evt.screenY;

  if (y <= 250) {
    header.classList.add("visible");
  }
  if (y > 250) {
    header.classList.remove("visible");
  }
}

document.addEventListener("mousemove", visMeny);
