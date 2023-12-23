const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const btnForm = document.querySelector(".btn_form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = [name, email, number];

  try {
    inputs.forEach((input, index) => {
      if (input.value === "") {
        let inputEl = inputs[index].id;
        const dom = `<h3 class="error-message-cazare">You must fill the ${inputEl} field</h3>`;
        input.insertAdjacentHTML("afterend", dom);
      } else {
        // If input is not empty, remove any existing error message
        const existingErrorMessage = input.nextElementSibling;
        if (
          existingErrorMessage &&
          existingErrorMessage.classList.contains("error-message-cazare")
        ) {
          existingErrorMessage.remove();
        }
        console.log(input.value);
        input.value = "";
      }
    });
  } catch (error) {
    console.error(error);
  }
});
