let tabLinks = document.getElementsByClassName("tabLinks");

for (let i=0; i < tabLinks.length; i++) {
	tabLinks[i].addEventListener('click', openExperienceTab);
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

function experienceNavHamburger() {
	var x = document.getElementById("myTopnav");
	if (x.className === "tab") {
		x.className += " responsive";
	} else {
		x.className = "tab";
	}
}

function sendEmail() {
	window.location = "mailto:amirj.castaneda@gmail.com";
}

