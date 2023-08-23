console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
hideTosError();

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formTos = event.target.elements.tos.checked;
  console.log(formTos);

  if (formTos === true) {
    hideTosError();
    alert("Form submitted");
  } else {
    showTosError();
  }

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
