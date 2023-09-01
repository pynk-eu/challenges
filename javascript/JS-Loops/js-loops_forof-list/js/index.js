console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const languages of programmingLanguages) {
  const liElements = document.createElement("li");
  ol.append(liElements);
  liElements.append(languages);
  console.log(languages);
}
// --^-- write/change code here --^--
