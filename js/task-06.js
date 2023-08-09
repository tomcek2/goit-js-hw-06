const validationInput = document.querySelector("#validation-input");
const validationLength = validationInput.getAttribute("data-length");
const checkLength = () => {
  if (validationInput.value.length === Number(validationLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};
validationInput.addEventListener("blur", checkLength);
