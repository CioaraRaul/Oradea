const navbarDiv = document.querySelector(".navbar_div");

const showBtn = function () {
  if (navbarDiv.classList.contains("navbar_show")) {
    navbarDiv.classList.remove("navbar_show");
  } else {
    navbarDiv.classList.add("navbar_show");
  }
};
