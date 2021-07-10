import axios from "axios";
// Import Axios

//Create Tabs
const Tabs = (topics) => {
	//Define & Set Variables
	const topicsHolder = document.createElement("div");
	topicsHolder.classList = "topics";

	//Looping Through & Creating & Appending
	topics.map((topic) => {
		const tab = document.createElement("div");
		tab.innerHTML = topic;
		tab.className = "tab";
		topicsHolder.appendChild(tab);
	});

	//Return HTML Element
	return topicsHolder;
};

//Append Tabs
const tabsAppender = (selector) => {
	//Fetching Data
	axios
		.get("http://localhost:5000/api/topics")
		//Using promise to make tabs
		.then((response) => {
			document.querySelector(selector).appendChild(Tabs(response.data.topics));
		});
};

export { Tabs, tabsAppender };
