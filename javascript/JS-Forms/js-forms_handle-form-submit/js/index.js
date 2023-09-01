console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Required", data);

  const firstName = data.firstName;
  const age = data.age;
  const badness = data.badness;

  console.log(`${firstName} badness value is ${Number(age) + Number(badness)}`);
});
