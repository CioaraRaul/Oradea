const navBarHeader = document.querySelector(".navbar_header");
const btnDiv = document.querySelector(".btn-mobile");
const button = document.querySelector(".mobile");
const headerElement = document.querySelector("header");

const handleClickMenu = function () {
  if (navBarHeader.classList.contains("mobile-width")) {
    headerElement.style.marginBottom = "30rem";
    navBarHeader.classList.remove("mobile-width");
  } else {
    headerElement.style.marginBottom = 0;
    navBarHeader.classList.add("mobile-width");
  }

  //   if (navBar.classList.contains("show-menu")) {
  //     button.classList.add("mobile-width");
  //   } else {
  //     button.classList.remove("mobile-width");
  //   }
};
const handleWindowResize = function () {
  // Check the window width and close the menu if necessary
  if (window.innerWidth > 768) {
    headerElement.style.marginBottom = 0;
    navBarHeader.classList.add("mobile-width");
  }
};

button.addEventListener("click", handleClickMenu);
window.addEventListener("resize", handleWindowResize);
