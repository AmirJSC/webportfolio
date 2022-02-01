window.addEventListener('scroll', revealElementsOnScroll);
window.addEventListener('load', revealElementsOnLoad);
let tabLinks = document.getElementsByClassName("tabLinks");
for (let i=0; i < tabLinks.length; i++) {
	tabLinks[i].addEventListener('click', openExperienceTab);
}

function revealElementsOnScroll() {
	var elementsToReveal = document.querySelectorAll('.reveal-onScroll');

	for (var i=0; i<elementsToReveal.length; i++) {
		var windowHeight = window.innerHeight;
		var elementsDistanceFromTop = elementsToReveal[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if(elementsDistanceFromTop < windowHeight - revealPoint){
          elementsToReveal[i].classList.add('active');
        }
	}
}

function revealElementsOnLoad() {
	var elementsToReveal = document.querySelectorAll('.reveal-onLoad');
	var length = elementsToReveal.length;
	var i = 0;

	var interval = setInterval(function() { 
		elementsToReveal[i].classList.add('active');
		i++;
		if (i > length - 1) {
			document.querySelector('#my_name').classList.add('glitch');
			clearInterval(interval);
		}
	}, 150)
}


function experienceNavHamburger() {
	var x = document.getElementById("myTopnav");
	if (x.className === "tab") {
		x.className += " responsive";
	} else {
		x.className = "tab";
	}
}

function openExperienceTab(event) {
	var i, tabLinks, tabContent;
	tabLinks = document.getElementsByClassName("tabLinks");
	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" active", "")
	}
	for (i = 0; i < tabLinks.length; i++) {
		tabContent[i].className = tabContent[i].className.replace(" active", "")
	}

	document.querySelector(`#${event.target.id}`).classList.add("active");
	document.querySelector(`#${event.target.id}Content`).classList.add("active");
}

function sendEmail() {
	window.location = "mailto:amirj.castaneda@gmail.com";
}

