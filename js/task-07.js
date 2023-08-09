const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = "57px";

const textSize = () => {
  text.style.fontSize = `${slider.value}px`;
};

slider.addEventListener("input", textSize);
