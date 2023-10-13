const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", handlerInput);

function handlerInput(evt) {
  if (evt.currentTarget.value.trim() === "") {
    span.textContent = "Anonymus";
  } else {
    span.textContent = evt.currentTarget.value;
  }
}
