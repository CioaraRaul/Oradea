const imgSlider = document.querySelectorAll(".slider__img");
const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");
let currentPage = 1;
const maxDisplay = 3;
let imagesDisplay = [];

console.log(imgSlider);

if (window.innerWidth > 900) {
  let imageLength = imgSlider.length - 1;

  const imageCheckNumber = function (e) {
    let direction = e.target.classList[1];
    let currentArray = [];

    if (direction === "left-arrow") {
      imgSlider.forEach((img, i) => {
        if (imagesDisplay.length !== 0) {
          currentArray = imagesDisplay;
        } else {
          currentArray.push(i);
          // console.log(i);
        }
      });
      console.log(`Left: ${currentArray}`);
      let aux;
      aux = currentArray[currentArray.length - 1];
      currentArray[currentArray.length - 1] = currentArray[0];
      console.log(`Left: ${currentArray}`);
      for (let i = 0; i < 3; i++) {
        currentArray[i] = currentArray[i + 1];
      }
      console.log(`Left: ${currentArray}`);
      currentArray[currentArray.length - 2] = aux;

      // currentArray = currentArray.slice(0, 3);
      console.log(`Left: ${currentArray}`);
      imagesDisplay = currentArray;
    }
    if (direction === "right-arrow") {
      imgSlider.forEach((img, i) => {
        if (imagesDisplay.length !== 0) {
          currentArray = imagesDisplay;
        } else {
          currentArray.push(i);
          // console.log(i);
        }
      });
      console.log(currentArray);
      let aux;
      aux = currentArray[currentArray.length - 1];
      // currentArray[currentArray.length - 1] = currentArray[0];
      console.log(`Lenght: ${currentArray.length}`);
      for (let i = currentArray.length - 1; i > 0; i--) {
        currentArray[i] = currentArray[i - 1];
      }
      currentArray[0] = aux;
      console.log(`After right: ${currentArray}`);
      // currentArray = currentArray.slice(0, 3);
      imagesDisplay = currentArray;
    }
    return imagesDisplay;
  };

  const minimuseArray = function (arr) {
    // console.log(imagesDisplay);
    let temp = imagesDisplay.slice(0, 3);
    let valueInTemp = [];
    let valueNotInTemp = [];
    imagesDisplay.forEach((value) => {
      if (temp.includes(value)) {
        valueInTemp.push(value);
      } else {
        valueNotInTemp.push(value);
      }
    });
    valueInTemp.forEach((value) => {
      imgSlider[value].classList.remove("slider_hidden");
    });
    valueNotInTemp.forEach((value) => {
      imgSlider[value].classList.add("slider_hidden");
    });

    // arr.forEach((img, i) => {
    //   if (i === temp[0] || i === temp[1] || i === temp[2]) {
    //     img.classList.add("slider_hidden");
    //   } else {
    //     img.classList.remove("slider_hidden");
    //   }
    // });

    return imagesDisplay;
  };

  arrowLeft.addEventListener("click", (e) => {
    imageCheckNumber(e);
    minimuseArray(imgSlider);

    if (currentPage < 0) {
      currentPage = 2;
    } else {
      currentPage--;
    }
    updateSlider(currentPage);
  });
  arrowRight.addEventListener("click", (e) => {
    imageCheckNumber(e);
    minimuseArray(imgSlider);

    if (currentPage >= 2) {
      currentPage--;
    } else {
      currentPage = 2;
    }
    updateSlider(currentPage);
  });

  const updateSlider = (currPage) => {
    for (let i = 0; i <= 2; i++) {
      let value = imagesDisplay[i];
      // console.log(`Inside ${i}`);
      if (i === currPage) {
        imgSlider[value].classList.add("slider__active");
        // console.log("active");
      } else {
        imgSlider[value].classList.remove("slider__active");
        // console.log("rempove");
      }
    }
    // currPage.forEach((img, i) => {
    //   console.log(imgSlider[img]);
    //   if (i === currPage) {
    //     img.classList.add("slider__active");
    //     console.log("active");
    //   } else {
    //     img.classList.remove("slider__active");
    //     console.log("remove");
    //   }
    // });
  };
}
