import axios from "axios";

// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//
const Card = (article) => {
	const cardHolder = document.createElement("div"),
		headlineHolder = document.createElement("div"),
		authorHolder = document.createElement("div"),
		authorSpan = document.createElement("span"),
		imgHolder = document.createElement("div"),
		img = document.createElement("img");
	const { headline, authorPhoto, authorName } = article;
	cardHolder.className = "card";
	headlineHolder.className = "headline";
	authorHolder.className = "author";
	imgHolder.className = "img-container";
	headlineHolder.innerHTML = headline;
	img.src = authorPhoto;
	authorSpan.innerHTML = authorName;
	authorHolder.appendChild(imgHolder);
	authorHolder.appendChild(authorSpan);
	imgHolder.appendChild(img);
	cardHolder.appendChild(headlineHolder);
	cardHolder.appendChild(authorHolder);

	cardHolder.addEventListener("click", (e) => {
		e.target.className === "card"
			? console.log(e.target.querySelector(".headline").innerHTML)
			: null;
	});
	return cardHolder;
};
// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//
const cardAppender = (selector) => {
	axios.get("http://localhost:5000/api/articles").then((response) => {
		const data = Object.entries(response.data.articles);
		data.forEach((x) => {
			x[1].forEach((art) => {
				document.querySelector(selector).appendChild(Card(art));
			});
		});
	});
};

export { Card, cardAppender };
