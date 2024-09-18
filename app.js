




//loader
document.addEventListener("DOMContentLoaded", () => {
	// When the page is fully loaded, start the loader timeout
	window.onload = function() {
	  // Keep the loader visible for 5 seconds after the page has loaded
	  setTimeout(function() {
		// Slide the loader down by setting its transform property
		const gifSection = document.getElementById('gif-section');
		gifSection.style.transform = 'translateY(100%)'; // Slide down out of view
  
		// After the sliding animation, reveal the main content
		setTimeout(function() {
		  const content = document.querySelector('.body');
		  content.classList.add('fade-in');
		}, 1000); // Wait for the slide transition to finish (1 second)
	  }, 2000); // 5000 milliseconds = 5 seconds delay
	};
  });
  
  
  
//shuffle 
$(document).ready(function() {
	// Delay for 10 seconds (10000 milliseconds) before starting the randomizer
	setTimeout(function() {
		const $random = $('.nbr');
		const $timer = 30;
		let $it;
		let $data = 0;
		let index;
		let change;
		let letters = ['p', 'a', 't', 't', 'e', 'r', 'n'];
		
		$random.each(function() {
			change = Math.round(Math.random() * 100);
			$(this).attr('data-change', change);
		});
		
		function random() {
			return Math.round(Math.random() * 9);
		}
		
		function select() {
			return Math.round(Math.random() * $random.length + 1);
		}
		
		function value() {
			$('.nbr:nth-child(' + select() + ')').html( random() );
			$('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
			$data++;
			
			$random.each(function() {
				if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
					index = $('.ltr').index(this);
					$(this).html(letters[index]);
					$(this).removeClass('nbr');
				}
			});
		}
		
		$it = setInterval(value, $timer);
	}, 10000); // 10-second delay
});













//MAD ANIMATIONS 

///line to zoom in 
$(document).ready(function() {
	const $random = $('.nbr');
	const $timer = 40;
	let $it;
	let $data = 0;
	let index;
	let change;
	let letters = ['c', 'r', 'e', 'a', 't', 'i', 'v', 'e' ];
	
	$random.each(function() {
		change = Math.round(Math.random() * 100);
		$(this).attr('data-change', change);
	})
	
	function random() {
		return Math.round(Math.random() * 9);
	}
	
	function select() {
		return Math.round(Math.random() * $random.length + 1);
	}
	
	function value() {
		$('.nbr:nth-child(' + select() + ')').html('' + random() + '');
		$('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
		$data++;
		
		$random.each(function() {
			if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
				index = $('.ltr').index(this);
				$(this).html(letters[index]);
				$(this).removeClass('nbr');
			}
		})
	}
	
	$it = setInterval(value, $timer);
})
// stagger

	// Register the ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
  
	// Create a ScrollTrigger instance
	ScrollTrigger.create({
	  trigger: ".name3", // The element that triggers the animation
	  start: "top 80%", // When the top of the trigger element reaches 80% from the top of the viewport
	  end: "bottom top", // When the bottom of the trigger element reaches the top of the viewport
	  onEnter: () => {
		gsap.from(".name3", {
		  opacity: 0,
		  y: 50,
		  duration: 1,
		  stagger: 0.2,
		  ease: "power2.out"
		});
	  }
	});
  
//stagger 2 
document.addEventListener('DOMContentLoaded', () => {
	// Register the ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
  
	// Create a ScrollTrigger instance
	ScrollTrigger.create({
	  trigger: ".overlap-projects", // Element to trigger the animation
	  start: "top 80%", // Start when the top of the trigger element is 80% from the top of the viewport
	  end: "bottom top", // End when the bottom of the trigger element is at the top of the viewport
	  onEnter: () => {
		gsap.from(".overlap-projects span", {
		  opacity: 0,
		  y: 50,
		  duration: 0.1,
		  stagger: 0.08,
		  ease: "power2.out",
		  pin: ".projects"
		});
	  },
	  onLeaveBack: () => {
		// Optional: Define what happens when scrolling back past the element
		gsap.to(".overlap-projects span", {
		  opacity: 0,
		  y: 50,
		  duration: 0.2,
		  stagger: 0.08,
		  ease: "power2.out"
		});
	  },
	  markers: false // Optional: show markers for debugging
	});
  });
  





  //PARALLAX FOR SECTIONS 
  // Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Apply parallax effect to the elements
gsap.utils.toArray('.parallax-item').forEach(item => {
  gsap.fromTo(item, 
    { y: 100 }, // Start position (e.g., below the normal position)
    { 
      y: -100, // End position (moves up as you scroll)
      scrollTrigger: {
        trigger: item, // The element that triggers the effect
        start: "top 80%", // Start when the element comes into view
        end: "bottom top", // End when the element leaves the view
        scrub: true, // Smoothly animate the parallax effect based on scroll
		markers: false,
      }
    }
  );
});

 // Register the ScrollTrigger plugin
 gsap.registerPlugin(ScrollTrigger);

 // Apply parallax effect to the elements
 gsap.utils.toArray('.parallax-item2').forEach(item => {
   gsap.fromTo(item, 
	 { y: 100 }, // Start position (e.g., below the normal position)
	 { 
	   y: -500, // End position (moves up as you scroll)
	   scrollTrigger: {
		 trigger: item, // The element that triggers the effect
		 start: "top 140%", // Start when the element comes into view
		 end: "bottom top", // End when the element leaves the view
		 scrub: true, // Smoothly animate the parallax effect based on scroll
		 markers: false,
	   }
	 }
   );
 });

 

 gsap.registerPlugin(ScrollTrigger);

 // Apply parallax effect to the elements
 gsap.utils.toArray('.parallax-item3').forEach(item => {
   gsap.fromTo(item, 
	 { y: 100 }, // Start position (e.g., below the normal position)
	 { 
	   y: -300, // End position (moves up as you scroll)
	   scrollTrigger: {
		 trigger: item, // The element that triggers the effect
		 start: "top 80%", // Start when the element comes into view
		 end: "bottom top", // End when the element leaves the view
		 scrub: true, // Smoothly animate the parallax effect based on scroll
		 markers: false,
	   }
	 }
   );
 });


   

 ///pause 
//  gsap.registerPlugin(ScrollTrigger);

// gsap.to("#services", {
//   scrollTrigger: {
//     trigger: "#services",
//     start: "top 0%",  // When the section hits the middle of the viewport
//     end: "+=500",         // Total scroll distance
//     pin: true,            // Pins the section in place
//     scrub: true,          // Smooth scrubbing as you scroll
//     onEnter: (self) => {
//       // Disable scroll for 3 seconds
//       self.scroll = false;
//       setTimeout(() => {
//         self.scroll = true; // Enable scroll again
//       }, 1000); // Delay of 3 seconds
//     },
//     markers: false // Remove markers after debugging
//   }
// });





//section zoom in
document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
  
	gsap.fromTo(
	  ".containerS",
	  { scale: 0.5 }, // Initial scale (shrink when not in view)
	  {
		scale: 1.05, // Full scale (zoom when in view)
		ease: "power1.out",
		scrollTrigger: {
		  trigger: ".containerS",
		  start: "top 80%", // When the top of the section is 80% from the top of the viewport
		  end: "bottom 20%", // When the bottom of the section reaches 20% from the top
		  scrub: true, // Smooth transition during scroll
		  toggleActions: "play reverse play reverse", // Revert to initial state when scrolling out
		},
	  }
	);
  });


document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
  
	gsap.fromTo(
	  ".services", 
	  { scale: 0.5 }, // Initial scale (shrink when not in view)
	  {
		scale: 1.05, // Full scale (zoom when in view)
		ease: "power1.out",
		scrollTrigger: {
		  trigger: ".services",
		  start: "top 80%", // When the top of the section is 80% from the top of the viewport
		  end: "bottom 20%", // When the bottom of the section reaches 20% from the top
		  scrub: true, // Smooth transition during scroll
		  toggleActions: "play reverse play reverse", // Revert to initial state when scrolling out
		},
	  }
	);
  });



  document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
  
	gsap.fromTo(
	  ".projects", 
	  { scale: 0.5 }, // Initial scale (shrink when not in view)
	  {
		scale: 1.05, // Full scale (zoom when in view)
		ease: "power1.out",
		scrollTrigger: {
		  trigger: ".projects",
		  start: "top 80%", // When the top of the section is 80% from the top of the viewport
		  end: "bottom 20%", // When the bottom of the section reaches 20% from the top
		  scrub: true, // Smooth transition during scroll
		  toggleActions: "play reverse play reverse", // Revert to initial state when scrolling out
		},
	  }
	);
  });



  document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
  
	gsap.fromTo(
	  ".sliderProjects", 
	  { scale: 0.5 }, // Initial scale (shrink when not in view)
	  {
		scale: 1.05, // Full scale (zoom when in view)
		ease: "power1.out",
		scrollTrigger: {
		  trigger: ".sliderProjects",
		  start: "top 80%", // When the top of the section is 80% from the top of the viewport
		  end: "bottom 20%", // When the bottom of the section reaches 20% from the top
		  scrub: true, // Smooth transition during scroll
		  toggleActions: "play reverse play reverse", // Revert to initial state when scrolling out
		},
	  }
	);
  });
  



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
  