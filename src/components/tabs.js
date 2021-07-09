import axios from "axios";

const Tabs = (topics) => {
	const topicsHolder = document.createElement("div");
	topicsHolder.classList = "topics";
	topics.map((topic) => {
		const tab = document.createElement("div");
		tab.innerHTML = topic;
		tab.className = "tab";
		topicsHolder.appendChild(tab);
	});
	return topicsHolder;
};

const tabsAppender = (selector) => {
	setTimeout(() => {
		axios.get("http://localhost:5000/api/topics").then((response) => {
			document.querySelector(selector).appendChild(Tabs(response.data.topics));
		});
	}, 1000);
};

export { Tabs, tabsAppender };
