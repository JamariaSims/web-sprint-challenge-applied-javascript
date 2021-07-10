/**
 * Header
 * @param {string} title - Name
 * @param {string} date - Date
 * @param {*} temp - Temperature
 * @returns - a html element
 */
const Header = (title, date, temp) => {
	//Define Variables
	const headerHolder = document.createElement("div"),
		dateHolder = document.createElement("span"),
		titleHolder = document.createElement("h1"),
		tempHolder = document.createElement("span");
	const body = [dateHolder, titleHolder, tempHolder];

	//Appending Elements
	body.forEach((element) => {
		headerHolder.appendChild(element);
	});

	//Setting Values
	headerHolder.className = "header";
	dateHolder.className = "date";
	tempHolder.className = "temp";
	dateHolder.textContent = date;
	titleHolder.textContent = title;
	tempHolder.textContent = temp;

	//Returning Main Html
	return headerHolder;
};

/**
 * Header Appender
 * @param {string} selector - Name
 * @returns - append html element
 */
const headerAppender = (selector) => {
	//Append the return from Header()
	return document
		.querySelector(selector)
		.appendChild(Header("Jamaria", "July 9", 90));
};

export { Header, headerAppender };
