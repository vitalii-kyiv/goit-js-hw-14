const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");
let counterValue = 0;

const decrement = () => {
  counterValue += Number(btnDecrement.textContent);
  valueElement.textContent = counterValue;
};

const increment = () => {
  counterValue += Number(btnIncrement.textContent);
  valueElement.textContent = counterValue;
};

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
