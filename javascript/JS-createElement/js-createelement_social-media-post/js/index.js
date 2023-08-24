console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

likeButton.addEventListener("mouseover", () => {});

// Exercise:
// Use document.createElement() and append another social media post to the body.

document.body.append(article);
const article = document.createElement("article");
const p = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

article.append(p);
article.append(footer);
footer.append(span);
footer.append(button);
