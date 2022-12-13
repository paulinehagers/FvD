// JavaScript Document
console.log("hi");

var openButton = document.querySelector ("header section:nth-of-type(1) > button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("header section:first-of-type nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

/****************************/
/* Code gemaakt door Robert */
/****************************/

window.addEventListener('scroll', onScroll)

const header = document.querySelector('header section:first-of-type');

function onScroll(e) {
	console.log(window.pageYOffset);
	
	if(window.pageYOffset > 50) {
		header.classList.add('is-down');
	} else {
		header.classList.remove('is-down');
	}
}

onScroll();