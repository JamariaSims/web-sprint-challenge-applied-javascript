import axios from "axios";

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
