// ===================================
// FUNCTIONS
// ======================
// function that initializes the carousels, the parameter is an array of carousel section elements
export function carouselSlideInit(carousels) {
	for (let carouselSection of carousels) {
		// create a carousel object for each carousel section element
		const carousel = {
			container: carouselSection,
			slides: Array.from(
				carouselSection
					.querySelector(".carousel__container")
					.getElementsByTagName("div")
			),
			visibleSlideIndex: 0,
			btnL: carouselSection.querySelector(".btn-l"),
			btnR: carouselSection.querySelector(".btn-r"),
			transitionRunning: false,
		};
		// adds event listeners
		carousel.btnR.addEventListener("click", () => carouselSlide(carousel, "r"));
		carousel.btnL.addEventListener("click", () => carouselSlide(carousel, "l"));
		carousel.container.addEventListener("transitionend", () => {
			carousel.transitionRunning = false;
		});
		// sets the slides to its initial positions
		updateSlidePositions(carousel, false);
	}
}
//
//function that slides the carousel
function carouselSlide(carousel, direction) {
	if (!carousel.transitionRunning) {
		if (direction == "r") {
			if (carousel.visibleSlideIndex == carousel.slides.length - 1) {
				carousel.slides.push(carousel.slides[0]);
				carousel.slides.shift();
				carousel.visibleSlideIndex--;
				updateSlidePositions(carousel, false);
			}
			carousel.visibleSlideIndex++;
		} else if (direction == "l") {
			if (carousel.visibleSlideIndex == 0) {
				carousel.slides.unshift(carousel.slides[carousel.slides.length - 1]);
				carousel.slides.pop();
				carousel.visibleSlideIndex++;
				updateSlidePositions(carousel, false);
			}
			carousel.visibleSlideIndex--;
		}
		updateSlidePositions(carousel, true);
	}
}
//
// function that updates the positions of the slides
function updateSlidePositions(carousel, animate) {
	for (let i = 0; i < carousel.slides.length; i++) {
		if (!animate) {
			carousel.slides[i].style.transition = "none";
			carousel.slides[i].offsetHeight;
		} else {
			carousel.slides[i].style.transition = "transform 1s";
			carousel.slides[i].offsetHeight;
			carousel.transitionRunning = true;
		}
		carousel.slides[i].style.transform = `translateX(${
			(i - carousel.visibleSlideIndex) * 120
		}%)`;
	}
}
