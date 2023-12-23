const divImages = document.querySelectorAll(".images");
const images = document.querySelectorAll(".img-introPage");
const img = document.querySelector(".img-introPage");
const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");

console.log(images.length);
let currentSlide = 0;

arrowLeft.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentSlide > 0) currentSlide -= 1;
  else currentSlide = images.length - 1;
  updateImg();
});
arrowRight.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentSlide < images.length - 1) currentSlide += 1;
  else currentSlide = currentSlide = 0;
  updateImg();
});

const updateImg = () => {
  images.forEach((img, i) => {
    if (i === currentSlide) {
      img.classList.add("active-img-slider");
    } else {
      img.classList.remove("active-img-slider");
    }
  });
};
