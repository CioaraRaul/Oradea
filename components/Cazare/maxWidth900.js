if (window.innerWidth <= 900) {
  const prevBtn = document.querySelector(".btn-prev");
  const rightBtn = document.querySelector(".btn-right");
  const imgSlider = document.querySelectorAll(".slider__img");
  let currPage = 1;

  const handlePrevBtn = function (e) {
    e.preventDefault();
    if (currPage <= 0) {
      currPage = imgSlider.length - 1;
      console.log(currPage);
    } else {
      currPage--;
      console.log(currPage);
    }
    updateImg(currPage);
  };

  const handleRightBtn = function (e) {
    e.preventDefault();
    if (currPage >= imgSlider.length - 1) {
      currPage = 0;
      console.log(currPage);
    } else {
      currPage++;
      console.log(currPage);
    }
    updateImg(currPage);
  };

  const updateImg = function (curr) {
    imgSlider.forEach((value, index) => {
      if (curr === index) {
        value.classList.add("sliderMaxWidth900");
      } else {
        value.classList.remove("sliderMaxWidth900");
      }
    });
  };

  prevBtn.addEventListener("click", handlePrevBtn);
  rightBtn.addEventListener("click", handleRightBtn);
}
