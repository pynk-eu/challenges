console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const bodyElement = document.querySelector("body");
const articleElement = document.createElement("article");
const pElement = document.createElement("p");
const footerElement = document.createElement("footer");
const spanElement = document.createElement("span");
const button = document.createElement("button");

articleElement.classList.add("post");
pElement.classList.add("post__content");
pElement.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
footerElement.classList.add("post__footer");
spanElement.classList.add("post__username");
spanElement.textContent = "@username";
button.classList.add("post__button");
button.textContent = " ♥ Like";

bodyElement.append(articleElement);
articleElement.append(pElement);
articleElement.append(footerElement);
footerElement.append(spanElement);
footerElement.append(button);

button.addEventListener("click", handleLikeButtonClick);
