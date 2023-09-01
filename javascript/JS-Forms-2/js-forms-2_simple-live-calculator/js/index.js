console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function multiplyInputs() {
  result.textContent = firstInput.value * secondInput.value;
}

firstInput.addEventListener("input", multiplyInputs);
secondInput.addEventListener("input", multiplyInputs);
