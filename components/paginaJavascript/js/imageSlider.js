const arrowDiv = document.querySelector(".arrow__div");
const arrowLeft = document.querySelector(".arrow__left");
const arrowRight = document.querySelector(".arrow__right");
const sliderMainImg = document.querySelector(".slider__main__img");
const sliderImg = document.querySelectorAll(".slider__img");

let currPage = 0;

const handleRightArrow = () => {
  console.log("arrow right");
  currPage += 1;
  console.log(currPage);
  if (currPage > 2) {
    currPage = 0;
  }
  updateImg();
};

const handleLeftArrow = () => {
  console.log("arrow left");
  currPage -= 1;
  console.log(currPage);
  if (currPage < 0) {
    currPage = sliderImg.length - 1;
  }
  updateImg();
};

const updateImg = () => {
  sliderImg.forEach((img, index) => {
    if (index === currPage) {
      img.classList.add("slider__active");
    } else {
      img.classList.remove("slider__active");
    }
  });
};

arrowRight.addEventListener("click", handleRightArrow);

arrowLeft.addEventListener("click", handleLeftArrow);
