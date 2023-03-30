// ===================================
// FUNCTIONS
// ======================
// function that initializes the carousels, the parameter is an array of carousel section elements
export function carouselSlideInit(carousels) {
	for (let carouselSection of carousels) {
		// create a carousel object for each carousel section element
		const carousel = {
			container: carouselSection.querySelector(".carousel__container"),
			slides: Array.from(
				carouselSection
					.querySelector(".carousel__container")
					.getElementsByTagName("div")
			),
			visibleSlideIndex: 0,
			btnL: carouselSection.querySelector(".btn-l"),
			btnR: carouselSection.querySelector(".btn-r"),
			transitionRunning: false,
			dragging: false,
			dragStartX: 0,
		};
		// adds event listeners
		// event listeners for the carousel buttons
		carousel.btnR.addEventListener("click", () => carouselSlide(carousel, "r"));
		carousel.btnL.addEventListener("click", () => carouselSlide(carousel, "l"));
		carousel.container.addEventListener("transitionend", () => {
			carousel.transitionRunning = false;
		});
		// event listeners for the carousel drag scrolling
		carousel.container.addEventListener("pointerdown", (e) => {
			if (!carousel.transitionRunning) {
				carousel.dragging = true;
				carousel.dragStartX = e.clientX;
				carousel.container.style.cursor = "grabbing";
			}
		});
		carousel.container.addEventListener("pointerup", (e) => {
			carousel.dragging = false;
			carousel.container.style.cursor = "grab";
		});
		carousel.container.addEventListener("pointermove", (e) => {
			if (!carousel.transitionRunning && carousel.dragging) {
				let swipeLength;
				window.innerWidth / 4 > 150
					? (swipeLength = 150)
					: (swipeLength = window.innerWidth / 4);
				if (carousel.dragStartX - e.clientX > swipeLength) {
					carouselSlide(carousel, "r");
					carousel.dragging = false;
				} else if (e.clientX - carousel.dragStartX > swipeLength) {
					carouselSlide(carousel, "l");
					carousel.dragging = false;
				}
			}
		});
		// sets the cursor style
		carousel.container.style.cursor = "grab";

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
