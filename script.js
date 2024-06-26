
document.getElementById('mobileNav').addEventListener("click", onMenuClicked);

document.addEventListener('mouseup', (e) => {
	var menu = document.querySelector('.mobileNav .mobileMenu');

	if (((e.target.id !== 'mobileMenuContent') && (menu.classList.contains('clicked'))) && (!e.target.classList.contains('bar'))) {
		onMenuClicked();
	}
})

function onMenuClicked() {
	var bars = document.querySelectorAll('.mobileNav .bars .bar');
	bars.forEach(bar => {
		bar.classList.toggle('clicked');
	});
	var menu = document.querySelector('.mobileNav .mobileMenu');
	menu.classList.toggle('clicked');
}

function setActive(activeLink) {
	var links = document.querySelectorAll('.navLink .link');
	links.forEach(link => {
		if (link.innerHTML == activeLink) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav div .nav div a');

window.addEventListener('scroll', setActiveOnScroll);
window.addEventListener('load', setActiveOnScroll);

//function to set link active on scroll
function setActiveOnScroll() {
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
// window.addEventListener('scroll', smoothScrolling);
// window.addEventListener('load', smoothScrolling);
// function smoothScrolling() {
// 	var smoother = document.querySelectorAll('.smoother');
// 	// console.log(smoother);
// 	for (let i = 0; i < smoother.length; i++) {
// 		var windowHeight = window.innerHeight;
// 		var revealTop = smoother[i].getBoundingClientRect().top;
// 		// console.log(revealTop);
// 		var revealPoint = 150;

// 		if (revealTop < (windowHeight - revealPoint)) {
// 			smoother[i].classList.add('reveal');
// 		} else {
// 			smoother[i].classList.remove('reveal');
// 		}
// 	}
// }


// Typed js
var typed = new Typed('#typed', {
	strings: ['Software Developer', 'Front End Developer', 'Web Developer'],
	typeSpeed: 50,
	backSpeed: 20,
	startDelay: 3000,
	loop: true,
	onComplete: (self) => {
		self.startDelay = 200
	},
});


// skills section start
document.getElementById('skills').onmousemove = e => {
	for (const date of document.getElementsByClassName("grid-box")) {
		const rect = date.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		date.style.setProperty("--mouse-x", `${x}px`);
		date.style.setProperty("--mouse-y", `${y}px`);
	};
}

const response1 = await fetch('./assets/skills/skills.json')
const skills = await response1.json();

var skillsGrid = document.getElementById("skillsGrid");
var skillHTML = "";
skills.forEach((skill, i) => {
	skillHTML += `
		<div class="grid-box">
			<div class="grid-item">
				<img src="${skill.icon}" alt="">
				<p>${skill.name}</p>
			</div>
		</div>
	`
	
	// skillHTML += `
	// 	<div class="win-btn" id="${i}">
	// 		<img src="${skill.icon}" style="margin:0 auto 8px auto;" class="h-14 w-14 sm:h-20 sm:w-20 " alt="">
	// 		${skill.name}
	// 	</div>
	// `
});
skillsGrid.innerHTML = skillHTML;


// skills section end


// projects section start
const response2 = await fetch('./assets/projects/projects.json')
const projects = await response2.json();

var projectsGrid = document.getElementById("projectsGrid");
var projectHTML = "";
projects.forEach(project => {
	projectHTML += `
		<div class="relative">
			<div class="project max-w-96 max-h-[21.75rem] overflow-hidden border-2 group transition-all duration-300">
				<div class="relative bg-black">
					<img src="${project.img}" class="h-72 mx-auto  group-hover:bg-black group-hover:opacity-65 transition-all duration-300" alt="">
				</div>
				<div class="p-3 border-t-2 translate-y-0 group-hover:-translate-y-3/4 bg-white transition-all duration-300">
					<div class="absolute w-11/12 left-1/2 -top-3 -translate-x-1/2 -translate-y-full hidden group-hover:flex flex-col justify-center space-y-3	">
						<a href="${project.link}" target="_blank" class="relative left-1/2 -translate-x-1/2 text-white w-fit font-semibold border-2 px-4 py-2 rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500">View Code</a>
						<p class="text-white">Technologies Used: ${project.tech}</p>
					</div>
					<p class="font-bold text-lg md:text-xl relative">${project.title}</p>
					<p class="max-h-0 group-hover:max-h-96 opacity-0 mt-3 group-hover:opacity-100 transition-all duration-300">${project.desc}</p>
				</div>
			</div>
		</div>
	`
});
projectsGrid.innerHTML = projectHTML;
// projects section end

// development section start
document.querySelectorAll('.developmentHead').forEach(element => {
	if (element.nextElementSibling.id == 'd1')
		element.addEventListener('click', accordian)
	else if (element.nextElementSibling.id == 'd2')
		element.addEventListener('click', accordian)
	else if (element.nextElementSibling.id == 'd3')
		element.addEventListener('click', accordian)
})
function accordian() {
	var div = this.nextElementSibling;
	var icon = div.previousElementSibling.lastElementChild;
	var activeDiv = div.previousElementSibling;
	div.classList.toggle('max-h-[40rem]');
	icon.classList.toggle('rotate-180');
	activeDiv.classList.toggle('bg-white');
}
// development section end



const scrollReveal = ScrollReveal({
	origin: 'bottom',
	distance: '150px',
	duration: 1000,
	reset: false
});


scrollReveal.reveal('#home', { delay: 200 });
scrollReveal.reveal('#about .pageHeading', { delay: 200 });
scrollReveal.reveal('#about .profile', { delay: 300 });
scrollReveal.reveal('#about .aboutContent', { delay: 400 });

scrollReveal.reveal('#skills .pageHeading', { delay: 200 });
scrollReveal.reveal('#skills .skillsContent .skills', { delay: 300 });

scrollReveal.reveal('#work .pageHeading', { interval: 200 });
scrollReveal.reveal('#work .projectsContent .project', { interval: 200 });

scrollReveal.reveal('#development .pageHeading', { delay: 200 });
scrollReveal.reveal('#development .developmentContent', { delay: 300, interval: 300 });
scrollReveal.reveal('#development .developmentImage', { delay: 400 });

scrollReveal.reveal('#education .pageHeading', { delay: 200 });
scrollReveal.reveal('#education .educationContent', { delay: 300, interval: 200 });
scrollReveal.reveal('#footer .profile', { delay: 100 })