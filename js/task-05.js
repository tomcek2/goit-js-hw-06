const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const checkName = () => {
  const name = nameInput.value;
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
};
nameInput.addEventListener("input", checkName);
