let currentTimeout;
// ===================================
// FUNCTIONS
// ======================
// carousel resize initialization
export function carouselResizeInit(carousels) {
	window.addEventListener("resize", () => onResize(carousels));
	onResize(carousels);
}

// function that gets called on each window resize, has debouncing included
function onResize(carousels) {
	clearTimeout(currentTimeout);
	currentTimeout = setTimeout(() => {
		for (let carousel of carousels) {
			resizeCarouselContainer(carousel);
		}
	}, 150);
}
//
//function that resizes the given carousel container to its tallest child
function resizeCarouselContainer(carousel) {
	const carouselContainer = carousel.querySelector(".carousel__container");
	const newHeight = getBiggestSlide(carouselContainer);
	carouselContainer.style.height = newHeight;
}
//
//function that returns the vertically largest slide in pixels
function getBiggestSlide(carouselContainer) {
	const slides = carouselContainer.getElementsByTagName("blockquote");
	const arrayOfHeights = [];
	for (let slide of slides) {
		arrayOfHeights.push(slide.scrollHeight);
	}
	return Math.max(...arrayOfHeights) + "px";
}
