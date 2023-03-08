console.log("Cześć!");

let button1 = document.querySelector(".button1");
let header__title = document.querySelector(".header__title");

let sectionFour__button = document.querySelector(".sectionFour__button");
let fourVerse = document.querySelector(".fourVerse");


button1.addEventListener("click", () => {
    header__title.remove();
});

sectionFour__button.addEventListener("click", () => {
    fourVerse.innerText = "Wesołych Świąt HO HO HO";
});

let buttonBetweenSection = document.querySelector(".buttonBetweenSection");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

buttonBetweenSection.addEventListener("click", () => {
    body.classList.toggle("dark");

if (body.classList.contains("dark")) {
    themeName.innerText = "Ciemny";
  } else {
    themeName.innerText = "Jasny";
  }
});