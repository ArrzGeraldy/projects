const jumbotron = document.querySelector(".left-content");
const bcImg = document.querySelector(".bc-img");
const nav = document.querySelector(".navbar");
const btnUp = document.querySelector(".btn-up");
const cards = document.querySelectorAll(".card");

if (scrollY >= 0) {
  jumbotron.classList.add("active-v");

  bcImg.classList.add("bc-img-active");
}

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 0) {
    nav.classList.add("border-bottom");
    nav.classList.add("bg-body-tertiary");
  } else {
    nav.classList.remove("border-bottom");
    nav.classList.remove("bg-body-tertiary");
  }

  if (scrollY >= 100) {
    btnUp.classList.add("up-active");
  } else {
    btnUp.classList.remove("up-active");
  }
});
