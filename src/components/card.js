import axios from "axios";

const Card = (article) => {
	//Define & Set Variables
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

	//Creating & Appending
	authorHolder.appendChild(imgHolder);
	authorHolder.appendChild(authorSpan);
	imgHolder.appendChild(img);
	cardHolder.appendChild(headlineHolder);
	cardHolder.appendChild(authorHolder);

	//Adding Event Listener
	cardHolder.addEventListener("click", (e) => {
		e.target.className === "card"
			? console.log(e.target.querySelector(".headline").innerHTML)
			: null;
	});
	return cardHolder;
};
//Fetching Data
const cardAppender = (selector) => {
	axios
		.get("http://localhost:5000/api/articles")
		//Looping Through Promise Twice To Pass In Articles To Card
		.then((response) => {
			const data = Object.entries(response.data.articles);
			data.forEach((x) => {
				x[1].forEach((art) => {
					document.querySelector(selector).appendChild(Card(art));
				});
			});
		});
};

export { Card, cardAppender };
