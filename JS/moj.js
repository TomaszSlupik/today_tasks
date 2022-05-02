const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const today = document.querySelector(".today");

let now = new Date();
let days = now.toLocaleString("default", { weekday: "long" });

const dayInfo = () => {
	const day = document.querySelector(".day");
	day.append(days);
	day.style.color = "white";
	day.style.fontWeight = "bold";
};

const draw = [
	`Pobudka i śniadanie`,
	`Kursy`,
	`Pierwszy trening`,
	`Praca`,
	`Drugi trening`,
	`Obiad`,
	`Film`,
	`Kolacja`,
	`Sen`,
];

const drawShow = () => {
	const text = document.querySelector(".text");
	const number = Math.floor(Math.random() * draw.length);

	text.textContent = draw[number];
};

btn.addEventListener("click", dayInfo);
btn2.addEventListener("click", drawShow);
