function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colourButton = document.querySelector(".change-color");
const colourText = document.querySelector(".color");
const colourChange = () => {
  body.style.backgroundColor = getRandomHexColor();
  colourText.textContent = body.style.backgroundColor;
};
colourButton.addEventListener("click", colourChange);
