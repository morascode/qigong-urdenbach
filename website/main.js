import { carouselResizeInit } from "./carousel-resize.js";
import { carouselSlideInit } from "./carousel-slide.js";
// ===================================
// CONSTANTS AND VARIABLE DECLARATIONS
// ======================
const carouselRezensionen = document.getElementById("Rezensionen");
const carouselInhalte = document.getElementById("Kursinhalte");
// ===================================
// FUNCTION CALLS
// ======================
carouselResizeInit([carouselRezensionen, carouselInhalte]);
carouselSlideInit([carouselRezensionen, carouselInhalte]);
