var skills = [
	{
		name: "C++",
		icon: "assets/skills/c++.png"
	},
	{
		name: "Java",
		icon: "assets/skills/java.png"
	},
	{
		name: "Data Structures",
		icon: "assets/skills/dsa.png"
	},
	{
		name: "MySQL",
		icon: "assets/skills/sql.png"
	},
	{
		name: "Python",
		icon: "assets/skills/python.png"
	},
	{
		name: "PHP",
		icon: "assets/skills/php.png"
	},
	{
		name: "Xampp",
		icon: "assets/skills/xampp.png"
	},
	{
		name: "Figma",
		icon: "assets/skills/figma.png"
	},
	{
		name: "HTML",
		icon: "assets/skills/html.png"
	},
	{
		name: "CSS",
		icon: "assets/skills/css.png"
	},
	{
		name: "JavaScript",
		icon: "assets/skills/javascript.png"
	},
	{
		name: "Angular",
		icon: "assets/skills/angular.png"
	},
	{
		name: "Svelte",
		icon: "assets/skills/svelte.png"
	},
	{
		name: "Tailwind",
		icon: "assets/skills/tailwind.png"
	},
	{
		name: "Bootstrap",
		icon: "assets/skills/bootstrap.png"
	},
	{
		name: "Firebase",
		icon: "assets/skills/firebase.png"
	},
]

var projects = [
	{
		img: "assets/projects/recipebook.png",
		title: "Recipe Book Application",
		desc: "Developed a recipe book web application using Angular, allowing users to browse, create, update, and delete recipes.",
		tech: "Angular, TypeScript, HTML, CSS, Bootstrap"
	},
	{
		img: "assets/projects/snake.png",
		title: "Snake Game",
		desc: "Developed a classic Snake game in Java, featuring responsive controls, and collision detection.",
		tech: "Java"
	},
	{
		img: "assets/projects/2048.png",
		title: "2048 Game",
		desc: "Created a browser-based version of the popular 2048. Implemented game logic, user interface, and scoring system.",
		tech: "HTML, CSS, JavaScript, Tailwind"
	},
	{
		img: "assets/projects/healthapp.png",
		title: "Health App",
		desc: "The Health App is a comprehensive digital tool designed to empower users in effectively managing their health measures and wellness data, providing personalized insights and warnings for informed decision-making.",
		tech: "Figma, HTML, CSS, JavaScript, Svelte, Tailwind"
	},
	{
		img: "assets/projects/hellofixer.png",
		title: "Hello Fixer!",
		desc: "Platform which finds and hires the appropriate person for their work and helps workers to find work.",
		tech: "HTML, CSS, JavaScript, PHP, Xampp"
	},
	{
		img: "assets/projects/bank.png",
		title: "Bank Management",
		desc: "Project to record and handle transactions of a user’s bank account.",
		tech: "C++"
	},
]


function onMenuClicked() {
	var bars = document.querySelectorAll('.mobileNav .bars .bar');
	bars.forEach(bar => {
		bar.classList.toggle('clicked')
	});
	var menu = document.querySelector('.mobileNav .mobileMenu');
	menu.classList.toggle('clicked');
}

// function setActive(activeLink) {
// 	var div = document.getElementById('active');
// 	var parentDivX = div.parentElement.getBoundingClientRect().left;
// 	var activeDivX;
// 	var active = document.getElementsByClassName('navLink');
// 	for (let i = 0; i < active.length; i++) {
// 		if (active[i].id == activeLink) {
// 			active[i].classList.add('text-white');
// 			activeDivX = active[i].getBoundingClientRect().left;
// 			div.style.left = (activeDivX - parentDivX) + 'px';
// 			div.style.width = active[i].clientWidth + 'px';
// 		}
// 		else {
// 			active[i].classList.replace('text-white', 'text-blue-600');
// 		}
// 	}
// }

function setActive(activeLink) {
	var links = document.querySelectorAll('.navLink .link');
	links.forEach(link => {
		if(link.innerHTML == activeLink) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav div .nav div a');

window.addEventListener('scroll', event1);
window.addEventListener('load', event1);

//function to set link active on scroll
function event1() {
	var current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (scrollY >= (sectionTop - 64)) {
			current = section.id;
		}
	});

	navLinks.forEach(navLink => {
		if (navLink.getAttribute('href').includes(current)) {
			setActive(navLink.id);
		}
	});
}


// Smooth Scrolling
window.addEventListener('scroll', event2);
window.addEventListener('load', event2);
function event2() {
	var smoother = document.querySelectorAll('.smoother');
	// console.log(smoother);
	for (let i = 0; i < smoother.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = smoother[i].getBoundingClientRect().top;
		// console.log(revealTop);
		var revealPoint = 150;

		if (revealTop < (windowHeight - revealPoint)) {
			smoother[i].classList.add('reveal');
		} else {
			smoother[i].classList.remove('reveal');
		}
	}
}


//cube
window.addEventListener('load', () => {
	var cubes = document.querySelectorAll('.cube');
	
	for (let i = 0; i < cubes.length; i++) {
		var top = Math.floor(Math.random() * 100) + 1;
		var left = Math.floor(Math.random() * 100) + 1;
		var time = Math.floor(Math.random() * 1000) + 1;
		console.log(time);
		cubes[i].classList.add('left-['+left+'vw]');
		cubes[i].classList.add('top-['+top+'vh]');
		cubes[i].classList.add('delay-['+time+'ms]');
	}
})


// skills start
var skillsGrid = document.getElementById("skillsGrid");
var skillHTML = "";
skills.forEach((skill, i) => {
	skillHTML += `
		<div class="win-btn" id="${i}">
			<img src="${skill.icon}" style="margin:0 auto 8px auto;" class="h-14 w-14 sm:h-20 sm:w-20 " alt="">
			${skill.name}
		</div>
	`
});
skillsGrid.innerHTML = skillHTML;

/**
 * You can find an explanation for this code here - https://dev.to/jashgopani
 */
const offset = 100;
const angles = []; //in deg
for (let i = 0; i <= 360; i += 45) {
	angles.push((i * Math.PI) / 180);
}
let nearBy = [];

function clearNearBy() {
	nearBy.splice(0, nearBy.length).forEach((e) => (e.style.borderImage = null));
}

/*Effect #1 explanation - bit.ly/win10-button-effect*/
document.querySelectorAll(".win-btn").forEach((b) => {
	// console.log(b);
	b.onmouseleave = (e) => {
		// e.target.style.background = "transparent";
		e.target.style.borderImage = null;
		e.target.border = "1px solid transparent";
	};

	b.onmouseenter = (e) => {
		clearNearBy();
	};
});

const body = document.querySelector(".win-grid");

body.addEventListener("mousemove", (e) => {
	const x = e.x; //x position within the element.
	const y = e.y; //y position within the element.

	clearNearBy();
	nearBy = angles.reduce((acc, rad, i, arr) => {
		const cx = Math.floor(x + Math.cos(rad) * offset);
		const cy = Math.floor(y + Math.sin(rad) * offset);
		const element = document.elementFromPoint(cx, cy);

		if (element !== null) {
			// console.log("cursor at ", x, y, "element at ", cx, cy, element);
			if (
				element.className === "win-btn" &&
				acc.findIndex((ae) => ae.id === element.id) < 0
			) {
				const brect = element.getBoundingClientRect();
				const bx = x - brect.left; //x position within the element.
				const by = y - brect.top; //y position within the element.
				if (!element.style.borderImage)
					element.style.borderImage = `radial-gradient(${offset * 2}px ${offset * 2}px at ${bx}px ${by}px,rgba(0,0,0,1),rgba(0,0,0,0.5),transparent ) 9 / 4px / 0px stretch `;
				return [...acc, element];
			}
		}
		return acc;
	}, []);
});

// skills end


var projectsGrid = document.getElementById("projectsGrid");
var projectHTML = "";
projects.forEach(project => {
	projectHTML += `
		<div class="project max-w-80 h-96 mx-auto cursor-pointer overflow-hidden transition-all duration-300 group">
			<div class="h-2/3 relative overflow-hidden bg-black group-hover:bg-black">
				<img src="${project.img}" class="block h-full mx-auto transition duration-500 group-hover:scale-125 group-hover:opacity-50" alt="">
				<div class="absolute flex items-center justify-center h-1/2 w-full top-0 p-3 opacity-0 transition duration-300 translate-y-10 group-hover:opacity-100 group-hover:translate-y-5 group-hover:delay-200">
					<div class="w-full relative top-5 text-center space-y-8">
						<a href="" class="relative text-white font-semibold border-2 px-4 py-2 rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500">View Code</a>
						<p class="text-white text-left"><i class="font-semibold">Technology Used:</i> ${project.tech}</p>
					</div>
				</div>
			</div>
			<hr>
			<div class="h-1/3 bg-white relative transition duration-300 group-hover:-translate-y-20">
				<p class="font-bold text-xl py-3 px-5">${project.title}</p>
				<div class="absolute px-3 opacity-0 translate-y-10  transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
					${project.desc}
				</div>
			</div>
		</div>
	`
});
projectsGrid.innerHTML = projectHTML;

function accordian(str) {
	var div = document.getElementById(str);
	var icon = div.previousElementSibling.lastElementChild;
	var activeDiv = div.previousElementSibling;
	// console.log(icon);
	div.classList.toggle('max-h-[40rem]');
	icon.classList.toggle('rotate-180');
	activeDiv.classList.toggle('bg-white');
}
