/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(() => {\n    const body = document.querySelector('body');\n    const container = document.createElement('div');\n    const top = document.createElement('div');\n    const bottom = document.createElement('div');\n\n    container.addEventListener('mouseenter', containerMouseEnter);\n    container.addEventListener('mouseleave', containerMouseLeave);\n\n    top.innerText = 'Hover';\n    bottom.style.display = \"none\";\n    bottom.innerText = 'Displaying';\n\n    function containerMouseEnter() {\n        bottom.style.display = \"block\";\n    };\n\n    function containerMouseLeave() {\n        bottom.style.display = \"none\";\n    };\n\n    container.appendChild(top);\n    container.appendChild(bottom);\n    body.appendChild(container);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBjb250YWluZXJNb3VzZUVudGVyKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGNvbnRhaW5lck1vdXNlTGVhdmUpO1xuXG4gICAgdG9wLmlubmVyVGV4dCA9ICdIb3Zlcic7XG4gICAgYm90dG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBib3R0b20uaW5uZXJUZXh0ID0gJ0Rpc3BsYXlpbmcnO1xuXG4gICAgZnVuY3Rpb24gY29udGFpbmVyTW91c2VFbnRlcigpIHtcbiAgICAgICAgYm90dG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbnRhaW5lck1vdXNlTGVhdmUoKSB7XG4gICAgICAgIGJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3ApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b20pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;