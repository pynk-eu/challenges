console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const inputValue = input.value;
  const upperCase = inputValue.toUpperCase();
  input.value = upperCase;
});
