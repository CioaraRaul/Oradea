const imgSlider = document.querySelectorAll(".slider__img");
const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");
let currentPage = 1;

const showAllImages = () => {
  imgSlider.forEach((img) => {
    img.classList.remove("slider_hidden");
  });
};

const updateSlider = () => {
  showAllImages();
  imgSlider.forEach((img) => {
    img.classList.remove("slider__active");
  });
  imgSlider[currentPage].classList.add("slider__active");
};

arrowLeft.addEventListener("click", () => {
  currentPage = (currentPage - 1 + imgSlider.length) % imgSlider.length;
  updateSlider();
});

arrowRight.addEventListener("click", () => {
  currentPage = (currentPage + 1) % imgSlider.length;
  updateSlider();
});

// Initial setup
updateSlider();
