let counterValue = 0;
const value = document.querySelector("#value");
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

const updateCounterValue = (newValue) => {
  counterValue = newValue;
  value.textContent = counterValue;
};
const minusClick = () => {
  let minusValue = counterValue - 1;
  updateCounterValue(minusValue);
};

minusBtn.addEventListener("click", minusClick);

const plusClick = () => {
  let plusValue = counterValue + 1;
  updateCounterValue(plusValue);
};

plusBtn.addEventListener("click", plusClick);

updateCounterValue(counterValue);
