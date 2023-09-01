console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const toastMsg = document.createElement("li");
  toastMsg.textContent = "I am new toast message";
  toastContainer.append(toastMsg);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = " ";
  // Exercise: Clear the stack of toast messages
});
