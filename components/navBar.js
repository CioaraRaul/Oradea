const btn = document.querySelector(".hidden");
const nav = document.querySelector(".hidden-navbar");
const divNav = document.querySelector(".div-nav");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (nav.classList.contains("hidden-navbar")) {
    nav.classList.remove("hidden-navbar");
  } else {
    nav.classList.add("hidden-navbar");
  }
});
