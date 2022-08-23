/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("//slider\r\n\r\nlet sliderTrack = document.getElementById(\"sliderTrack\");\r\nlet sliderOffsetWidth = sliderTrack.offsetWidth;\r\nlet sliderScrollWidth;\r\nconst sliderIndicators = document.querySelectorAll(\".slider__indicator\");\r\nlet activeIndicator = sliderIndicators[0];\r\n\r\nsliderIndicators.forEach((sliderIndicator) => {\r\n  sliderIndicator.addEventListener(\"click\", () => {\r\n    sliderScrollWidth = sliderTrack.scrollWidth;\r\n    activeIndicator.classList.remove(\"active\");\r\n    activeIndicator = sliderIndicator;\r\n    activeIndicator.classList.add(\"active\");\r\n  });\r\n});\r\n\r\nsliderIndicators[0].addEventListener(\"click\", () => {\r\n  sliderTrack.style.transform = `translateX(0px)`;\r\n});\r\n\r\nsliderIndicators[1].addEventListener(\"click\", () => {\r\n  sliderTrack.style.transform = `translateX(${-((sliderScrollWidth - sliderOffsetWidth) / 2)}px)`;\r\n});\r\nsliderIndicators[2].addEventListener(\"click\", () => {\r\n  sliderTrack.style.transform = `translateX(${-(sliderScrollWidth - sliderOffsetWidth)}px)`;\r\n});\r\n\r\n//burger-menu\r\n\r\nconst burger = document.getElementById(\"burger\");\r\n\r\nburger.onclick = () => document.body.classList.toggle(\"active-nav\");\r\n\r\nif (window.innerWidth < 992) {\r\n  let nav = document.querySelector(\".nav\");\r\n\r\n  nav.onclick = () => document.body.classList.remove(\"active-nav\");\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;