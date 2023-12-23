const form = document.querySelector(".form__class");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const phoneNumber = document.querySelector("#phoneNumber");
const mention = document.querySelector("#mention");

let formElementsArray = [];

let formElements;
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = [username, email, message, phoneNumber, mention];

  try {
    inputs.forEach((input, index) => {
      console.log(index);
      if (input.value === "") {
        let inputEl = inputs[index].id;
        console.log(inputs[index].placeholder);
        console.log(inputEl);
        const dom = `
        <h3 class="error-message">You must fill the ${inputEl} field</h3>
        `;

        // formElements = document.createElement("h2");
        // formElements.textContent = `You must fill the ${inputEl}`;
        // formElementsArray.push(formElements);
        // form.appendChild(formElements);

        input.insertAdjacentHTML("afterend", dom);
      } else {
        console.log(input.value);
        input.value = "";
      }
    });
  } catch (error) {
    console.error(error);
  }
});
