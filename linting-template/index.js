//import { peopleYouKnow } from './PeopleYouKnow/aboutPeople.js';

const olElement = document.querySelector('[data-js="people-list"]');

function list(person) {
  const liElement = document.createElement('li');
  liElement.textContent = `Name: ${person.name} , Age: ${person.age} years, City: ${person.location} `;
  olElement.append(liElement);
  const buttonDelete = document.createElement('button');
  liElement.append(buttonDelete);
  buttonDelete.textContent = 'Delete';
}

// fetch('https://mock.io/v1/80eaad70-0a54-4755-9f3c-1ecac2ae97e2')
//   .then(data => {
//     data.json().then(p => {
//       console.log('I am working', p);
//       p.forEach(people => {
//         list(people);
//       });
//     });
//   })
//   .catch(err => {
//     console.log('I am logging error', err);
//   });

async function initialize() {
  try {
    const data = await fetch(
      'https://mocki.io/v1/80eaad70-0a54-4755-9f3c-1ecac2ae97e2'
    );
    const p = await data.json();

    p.forEach(people => {
      list(people);
    });
  } catch (exc) {
    console.log('I am exception ', exc);
  }
}

initialize();

// peopleYouKnow.forEach(people => {
//   list(people);
// });
