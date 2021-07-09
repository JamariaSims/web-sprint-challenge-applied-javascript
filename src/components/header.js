const Header = (title, date, temp) => {
	const headerHolder = document.createElement("div"),
		dateHolder = document.createElement("span"),
		titleHolder = document.createElement("h1"),
		tempHolder = document.createElement("span");
	const body = [dateHolder, titleHolder, tempHolder];
	body.forEach((element) => {
		headerHolder.appendChild(element);
	});
	headerHolder.className = "header";
	dateHolder.className = "date";
	tempHolder.className = "temp";

	dateHolder.textContent = date;
	titleHolder.textContent = title;
	tempHolder.textContent = temp;

	return headerHolder;
};

const headerAppender = (selector) => {
	return document
		.querySelector(selector)
		.appendChild(Header("Jamaria", "July 9", 90));
};

export { Header, headerAppender };
