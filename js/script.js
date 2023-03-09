{
  function welcome() {
    console.log("Cześć wszystkim!");
  }
  welcome();
  
  
  const headerDisappears = () => {
    const button1 = document.querySelector(".button1");
    const header__title = document.querySelector(".header__title");
    button1.addEventListener("click", () => {
      header__title.remove();
    });
  }
  headerDisappears();
  
  
  const textChange = () => {
    const section__button = document.querySelector(".section__button");
    const fourVerse = document.querySelector(".fourVerse");
    section__button.addEventListener("click", () => {
      fourVerse.innerText = "Wesołych Świąt HO HO HO";
    });
  }
  textChange();
  
  const backgroundChange = () => {
    const buttonBetweenSection = document.querySelector(".buttonBetweenSection");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");
    buttonBetweenSection.addEventListener("click", () => {
      body.classList.toggle("dark");
  
      if (body.classList.contains("dark")) {
        themeName.innerText = "Ciemny";
      } else {
        themeName.innerText = "Jasny";
      }
    });
  }
  backgroundChange();
  
}