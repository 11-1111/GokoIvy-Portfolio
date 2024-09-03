/*const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');*

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#1B1212';
		
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
*/
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#1B1212';
		header.style.width = '100%';
		
	} else {
		header.style.backgroundColor = 'transparent';
		header.style.width = '100%';
	}
});




document.addEventListener('DOMContentLoaded', () => {
	const progressBars = document.querySelectorAll('.circular-progress');
  
	const observerOptions = {
	  root: null, // Use the viewport as the root
	  rootMargin: '0px',
	  threshold: 0.5 // Trigger when 50% of the element is in view
	};
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  const progressBar = entry.target;
		  let valueContainer = progressBar.querySelector('.value-container');
		  let progressEndValue = parseInt(progressBar.getAttribute('data-percentage'));
		  let progressValue = 0;
		  let speed = 30;
  
		  let progress = setInterval(() => {
			progressValue++;
			valueContainer.textContent = `${progressValue}%`;
			progressBar.style.background = `conic-gradient(
			  bisque ${progressValue * 3.6}deg,
			  #424242 ${progressValue * 3.6}deg
			)`;
			if (progressValue >= progressEndValue) {
			  clearInterval(progress);
			}
		  }, speed);
  
		  // Unobserve the progress bar after starting the animation
		  observer.unobserve(progressBar);
		}
	  });
	}, observerOptions);
  
	// Observe each progress bar
	progressBars.forEach(progressBar => {
	  observer.observe(progressBar);
	});
  });

  


  document.addEventListener('DOMContentLoaded', () => {
	const skillBars = document.querySelectorAll('.skill-per');
  
	const observerOptions = {
	  root: null, // Use the viewport as the root
	  rootMargin: '0px',
	  threshold: 0.5 // Trigger when 50% of the element is in view
	};
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  const skillBar = entry.target;
		  const percentage = skillBar.getAttribute('per');
		  
		  // Ensure the width is reset before the animation
		  skillBar.style.width = '0';
		  
		  // Use requestAnimationFrame to trigger reflow and ensure the transition works
		  requestAnimationFrame(() => {
			skillBar.style.transition = 'width 1.5s ease-in-out';
			skillBar.style.backgroundColor = 'crimson';
			skillBar.style.width = percentage;
		  });
  
		  // Unobserve the progress bar after starting the animation
		  observer.unobserve(skillBar);
		}
	  });
	}, observerOptions);
  
	// Observe each skill bar
	skillBars.forEach(skillBar => {
	  observer.observe(skillBar);
	});
  });
  


  (function () {
	// Add event listener
	document.addEventListener("mousemove", parallax);
	const elem = document.querySelector("#parallax");
	// Magic happens here
	function parallax(e) {
	  let _w = window.innerWidth / 2;
	  let _h = window.innerHeight / 2;
	  let _mouseX = e.clientX;
	  let _mouseY = e.clientY;
	  let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
		50 - (_mouseY - _h) * 0.01
	  }%`;
	  let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
		50 - (_mouseY - _h) * 0.02
	  }%`;
	  let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
		50 - (_mouseY - _h) * 0.06
	  }%`;
	  let x = `${_depth3}, ${_depth2}, ${_depth1}`;
	  console.log(x);
	  elem.style.backgroundPosition = x;
	}
  })();
  

  




  /*hero h1 change color*/
  document.addEventListener("DOMContentLoaded", () => {
	const heroHeaders = document.querySelectorAll("#hero h1");
	heroHeaders.forEach((header, index) => {
	  const span = header.querySelector("span");
	  const spanAnimationDuration = parseFloat(window.getComputedStyle(span).animationDuration);
	  const spanAnimationDelay = parseFloat(window.getComputedStyle(span).animationDelay);
  
	  // Calculate the total time for the span animation to finish
	  const totalTime = (spanAnimationDuration + spanAnimationDelay) * 1000;
  
	  setTimeout(() => {
		header.classList.add("finished");
	  }, totalTime);
	});
  });
  


  function toggleWidth(event) {
    event.preventDefault();
    const line = event.currentTarget.querySelector('.horizontal_line');
    line.classList.toggle('clicked');
  }

  document.addEventListener("DOMContentLoaded", function() {
	const sections = document.querySelectorAll("section"); // Assuming your sections are <section> elements
	const links = document.querySelectorAll(".menu .link a");
  
	function setActiveLink() {
	  let currentSection = "";
  
	  sections.forEach(section => {
		const sectionTop = section.offsetTop;
		if (window.pageYOffset >= sectionTop - 60) {
		  currentSection = section.getAttribute("id");
		}
	  });
  
	  links.forEach(link => {
		link.classList.remove("active");
		if (link.getAttribute("href").substring(1) === currentSection) {
		  link.classList.add("active");
		}
	  });
	}
  
	window.addEventListener("scroll", setActiveLink);
  
	links.forEach(link => {
	  link.addEventListener("click", function() {
		links.forEach(link => link.classList.remove("active"));
		this.classList.add("active");
	  });
	});
  });
  

  // script.js
  document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.getElementById('toggleButton');
	const floatingWidget = document.getElementById('floatingWidget');
	const closeButton = document.getElementById('closeButton');
	const mainContent = document.getElementById('mainContent'); // Add a wrapper around the main content if not already present
  
	toggleButton.addEventListener('click', () => {
	  if (floatingWidget.style.display === 'none' || floatingWidget.style.display === '') {
		floatingWidget.style.display = 'block';
		toggleButton.textContent = 'GET IN TOUCH';
		mainContent.style.filter = 'blur(5px)'; // Apply blur effect to the background content
	  } else {
		floatingWidget.style.display = 'none';
		toggleButton.textContent = 'GET IN TOUCH';
		mainContent.style.filter = 'none'; // Remove blur effect
	  }
	});
  
	closeButton.addEventListener('click', () => {
	  floatingWidget.style.display = 'none';
	  toggleButton.textContent = 'GET IN TOUCH';
	  mainContent.style.filter = 'none'; // Remove blur effect
	});
  });
  