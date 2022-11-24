const body = document.body;
const getBodyTheme = sessionStorage.getItem("portfolio-theme");
const getButtonTheme = sessionStorage.getItem("portfolio-button-theme");
const buttonTheme = document.querySelector(".fa-moon");
const buttonHamburger = document.querySelector(".fa-bars");
const profilePhoto = document.querySelector(".profile-photo");
const logo = document.querySelector(".logo");

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, buttonClass) => {
	body.classList.remove(sessionStorage.getItem("portfolio-theme"));
	buttonTheme.classList.remove(
		sessionStorage.getItem("portfolio-button-theme")
	);
	body.classList.add(bodyClass);
	buttonTheme.classList.add(buttonClass);
	sessionStorage.setItem("portfolio-theme", bodyClass);
	sessionStorage.setItem("portfolio-button-theme", buttonClass);
	changeProfilePhoto(bodyClass);
	changeLogo(bodyClass);
};

function changeProfilePhoto(bodyClass) {
	if (bodyClass == "dark") {
		profilePhoto.setAttribute(
			"src",
			"./img/mario-barcelo-profile-dark-mode.png"
		);
	} else {
		profilePhoto.setAttribute("src", "./img/mario-barcelo-profile.png");
	}
}

function changeLogo(bodyClass) {
	if (bodyClass == "dark") {
		logo.setAttribute("src", "./img/mario-barcelo-logo-dark-mode.png");
	} else {
		logo.setAttribute("src", "./img/mario-barcelo-logo.png");
	}
}

const toggleTheme = () =>
	isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

const displayList = () => {
	const navUl = document.querySelector(".nav__list");

	if (buttonHamburger.classList.contains("fa-bars")) {
		buttonHamburger.classList.remove("fa-bars");
		buttonHamburger.classList.add("fa-times");
		navUl.classList.add("display-nav-list");
	} else {
		buttonHamburger.classList.remove("fa-times");
		buttonHamburger.classList.add("fa-bars");
		navUl.classList.remove("display-nav-list");
	}
};

buttonTheme.addEventListener("click", toggleTheme);
buttonHamburger.addEventListener("click", displayList);

const setBodyTheme = () => body.classList.add(getBodyTheme);
const setButtonTheme = () => buttonTheme.classList.add(getButtonTheme);

setBodyTheme();
setButtonTheme();

// Heart Animation
const heart = document.querySelector(".heart");

heart.addEventListener("click", heartToggle);

function heartToggle() {
	heart.classList.toggle("heart-animation");
}
