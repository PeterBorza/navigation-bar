const data = [
	{
		name: "CSS3",
		items: [
			{
				link: 'https://www.youtube.com/watch?v=qm0IfG1GyZU&t=1081s" ',
				name: "Grid Layouts",
			},
			{
				link: "https://www.youtube.com/c/programmingwithmosh ",
				name: "Mosh",
			},
			{ link: "https://htmlcheatsheet.com/css/", name: "Cheatsheet" },
		],
	},
	{
		name: "Tutorials",
		items: [
			{
				link: "https://youtu.be/FhguwBJeqWs ",
				name: "The Net Ninja",
			},
			{
				link:
					"https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q ",
				name: "Dev Ed",
			},
			{
				link:
					"https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw ",
				name: "Web Dev S.",
			},
			{
				link: "https://www.youtube.com/user/DesignCourse ",
				name: "Design Course",
			},
			{
				link: "https://www.youtube.com/user/KepowOb ",
				name: "Kevin Powell",
			},
			{
				link: "https://www.youtube.com/c/TheCharmefis ",
				name: "Dani Krossing",
			},
			{
				link: "https://www.w3schools.com ",
				name: "W3Schools",
			},
		],
	},

	{
		name: "Lectures",
		items: [
			{ link: "#", name: "Lecture 1" },
			{ link: "#", name: "Lecture 2" },
			{ link: "#", name: "Lecture 3" },
			{ link: "#", name: "Lecture 4" },
		],
	},
	{
		name: "Libraries",
		items: [
			{ link: "https://jquery.com", name: "Jquery" },
			{ link: "https://fontawesome.com", name: "Font Awesome" },
			{ link: "https://cdnjs.com", name: "Cdnjs" },
			{ link: "https://greensock.com", name: "Greensock" },
			{ link: "https://getbootstrap.com", name: "Bootstrap" },
		],
	},
];

const dropMenu = () => {
	const menu = document.querySelector(".drop-menu");
	const renderDropLists = dropLists();
	renderDropLists.forEach((item) => menu.append(item));
};

const dropLists = () => data.map(dropList);

const dropList = (item) => {
	const button = buttonMaker(item.name);
	const ul = listMaker(item.items);

	const section = document.createElement("div");
	section.classList.add("section");
	section.prepend(button);
	section.append(ul);

	section.addEventListener("click", () => {
		ul.classList.toggle("open");
	});

	return section;
};

const buttonMaker = (name) => {
	const button = document.createElement("button");
	button.classList.add("myButtons");
	button.textContent = name;

	return button;
};

const listMaker = (items) => {
	const lis = items.map(listElement);

	const ul = document.createElement("ul");
	lis.forEach((li) => ul.append(li));

	return ul;
};

const listElement = (items) => {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.setAttribute("href", items.link);
	a.setAttribute("target", "_blank");

	a.textContent = items.name;
	li.append(a);

	return li;
};

dropMenu();
