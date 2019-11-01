function show() {
	const burger = document.querySelector(".hamburger");
	const links = document.querySelectorAll(".links");

	burger.addEventListener("click", ()=> {
		const nav = document.querySelector(".nav");
		nav.classList.toggle("responsive");

		links.forEach((link, index) => {
		    if(link.style.animation) {
			    link.style.animation = "";
		    } else {
		        link.style.animation = `fadeLinks 0.5s ease forwards ${index / 5 + 1.0}s`;
		    }
	    });

	    burger.classList.toggle("showAndHide");
	});
}

function angleDown(obj) {
	obj.style.display = "none";
	obj.nextElementSibling.style.display = "inline";
	obj.parentElement.parentElement.getElementsByTagName("ul")[0].style.display = "block";
}

function angleUp(obj) {
	obj.style.display = "none";
	obj.previousElementSibling.style.display = "inline";
	obj.parentElement.parentElement.getElementsByTagName("ul")[0].style.display = "none";
}

show();