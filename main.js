import { carouselResizeInit } from "./carousel-resize.js";
import { carouselSlideInit } from "./carousel-slide.js";
// ===================================
// CONSTANTS AND VARIABLE DECLARATIONS
// ======================
const carouselRezensionen = document.getElementById("Rezensionen");
const carouselInhalte = document.getElementById("Kursinhalte");
const btnMobileMenuOpen = document.getElementById("btn-mobile-menu_open");
const btnMobileMenuClose = document.getElementById("btn-mobile-menu_close");
const sidebar = document.getElementById("sidebar");
const sidebarShadow = document.getElementById("sidebar-shadow");
const sidebarLinks = sidebar.querySelectorAll("a");
// ===================================
// INITIALIZE CAROUSELS
// ======================
if (carouselRezensionen && carouselInhalte) {
	carouselResizeInit([carouselRezensionen, carouselInhalte]);
	carouselSlideInit([carouselRezensionen, carouselInhalte]);
}
// ===================================
// MOBILE SIDEBAR FUNCTIONALITY
// ======================
sidebarLinks.forEach((link) => {
	link.addEventListener("click", () => sidebarOpenClose(false, true));
});
btnMobileMenuOpen.addEventListener("click", () =>
	sidebarOpenClose(true, false)
);
btnMobileMenuClose.addEventListener("click", () =>
	sidebarOpenClose(false, true)
);
sidebar.addEventListener("transitionend", () => {
	if (sidebar.style.transform === "") {
		document.querySelector("html").style.scrollBehavior = "smooth"; // turns smooth scrolling on
	}
});
//
// function that opens/closes the sidebar
// parameters are two booleans, first one opens the sidebar, the second one closes
// only opens the sidebar if its not already open (checks the transform value)
// only closes the sidebar if its not already closed (checks the transform value)
function sidebarOpenClose(open, close) {
	if (sidebar.style.transform === "" && open) {
		document.querySelector("html").style.scrollBehavior = "auto"; // turns smooth scrolling off
		sidebar.style.transform = "translateX(0%)"; // open the sidebar
		sidebarShadow.style.pointerEvents = "auto"; /// make the sidebar page shadow enabled
		sidebarShadow.style.opacity = "0.7"; // make the sidebar page shadow dark
	} else if (sidebar.style.transform !== "" && close) {
		sidebar.style.transform = ""; // close the sidebar
		sidebarShadow.style.pointerEvents = "none"; // make the sidebar page shadow disabled
		sidebarShadow.style.opacity = "0"; // make the sidebar page shadow transparent again
	}
}
