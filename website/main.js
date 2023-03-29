import { carouselResizeInit } from "./carousel-resize.js";
import { carouselSlideInit } from "./carousel-slide.js";
import { googleMapInit } from "./google-map.js";
// ===================================
// CONSTANTS AND VARIABLE DECLARATIONS
// ======================
const carouselRezensionen = document.getElementById("Rezensionen");
const carouselInhalte = document.getElementById("Kursinhalte");
const btnMobileMenuOpen = document.getElementById("btn-mobile-menu_open");
const btnMobileMenuClose = document.getElementById("btn-mobile-menu_close");
const navbar = document.getElementById("header__navbar");
const page = document.querySelector("main");
const googleMap = document.getElementById("google-map");
// ===================================
// INITIALIZE CAROUSELS
// ======================
carouselResizeInit([carouselRezensionen, carouselInhalte]);
carouselSlideInit([carouselRezensionen, carouselInhalte]);
// ===================================
// INITIALIZE GOOGLE MAP
// ======================
// googleMapInit();
// ===================================
// MOBILE MENU FUNCTIONALITY
// ======================
btnMobileMenuOpen.addEventListener("click", mobileNavbarOpenClose);
btnMobileMenuClose.addEventListener("click", mobileNavbarOpenClose);
page.addEventListener("pointerdown", () => mobileNavbarOpenClose(false, true));
function mobileNavbarOpenClose(open = true, close = true) {
	navbar.style.transition = "transform 1s";
	if (navbar.style.transform === "" && open)
		navbar.style.transform = "translateX(0%)"; // open the navbar
	else if (navbar.style.transform !== "" && close) navbar.style.transform = ""; // close the navbar
}
