/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/reviews.js":
/*!************************!*\
  !*** ./src/reviews.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Review = (review, name) =>
{
  return { review, name}
}
const ahmedReview = Review("7lw nek el sra7a bs m4 a7sn 7aga 4rbtha f el dnya fam?", "-Ahmed Khaled");
const moazReview = Review("el nescafe bkam?", "-Moaz Mohamed");
const abdelrahmanReview = Review("hya 2hwa t2ela fam fa de 7aga ndefa y3ny, value for money w keda b2a", "-Abdelrahman El-Sharkawy");
const shahdReview = Review("hwa 7elw bs mskr el sra7a", "-Shahd Mohamed");

const reviews = [ahmedReview, moazReview, abdelrahmanReview, shahdReview];

const Reviews = (() =>
{
  const CreateReviewsWindow = () =>
  {
    const menuWindow = document.querySelector("#menu-window");

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "reviews-window"

      for (let i = 0; i < 4; i++)
      {
        let div = document.createElement("div");
        div.classList.add("review");

        let p = document.createElement("p");
        div.appendChild(p);

        let span = document.createElement("span");
        div.appendChild(span);

        mainDiv.appendChild(div);
      }
      menuWindow.appendChild(mainDiv);
    })();

    (function()
    {
      const _reviews = Array.from(document.querySelectorAll(".review"));
      for (let i = 0; i < _reviews.length; i++)
      {
        _reviews[i].querySelector("p").textContent = reviews[i].review;
        _reviews[i].querySelector("span").textContent = reviews[i].name;
      }
    })()
  }

  return { CreateReviewsWindow }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews.CreateReviewsWindow);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reviews_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.js */ "./src/reviews.js");


const content = document.querySelector("#content");

const mainPage = (function ()
{
  const createMainPage = (() =>
  {
    const createNavBar = (() =>
    {
      const navBar = document.createElement("nav");
      navBar.id = "navbar";

      const div = document.createElement("div");
      div.id = "img-logo-div";
      const img = document.createElement("img");
      img.src = "./images/BCS-Logo-Blank.png"
      div.appendChild(img);
      navBar.appendChild(div);

      const h2 = document.createElement("h2");
      h2.textContent = "Brazillian Coffee Stores";
      navBar.appendChild(h2);

      content.appendChild(navBar);
    })()

    const createHeader = (() =>
    {
      const div = document.createElement("div");
      div.id = "header";

      const h1 = document.createElement("h1");
      h1.textContent = "Brazillian Coffee Stores Since 1929";
      div.appendChild(h1);

      content.appendChild(div);
    })();

    const createMenuBar = (() =>
    {
      console.log("a7a");
      const menubar = document.createElement("div");
      menubar.id = "menubar";

      const ul = document.createElement("ul");

      const reviews = document.createElement("li");
      reviews.classList.add("menuElement");
      reviews.textContent = "Reviews";
      reviews.id = "reviews";
      ul.appendChild(reviews);

      const menu = document.createElement("li");
      menu.textContent = "Menu";
      menu.classList.add("menuElement");
      menu.id = "menu";
      ul.appendChild(menu);

      const contact = document.createElement("li");
      contact.textContent = "Contact";
      contact.classList.add("menuElement");
      contact.id = "contact"
      ul.appendChild(contact);

      menubar.appendChild(ul);

      content.appendChild(menubar);

      const menuWindow = document.createElement("div");
      menuWindow.id = "menu-window";
      content.appendChild(menuWindow);
    })();
  })();

  const _menuWindow = document.querySelector("#menu-window");
  const _menuElements = document.querySelectorAll(".menuElement");
  const ClearUnderline = () => _menuElements.forEach(element => element.classList.remove("selected"));

  const ClearMenuWindow = () =>
  {
    _menuWindow.children[0].remove();
  }

  const AddEventListeners = (() =>
  {
    _menuElements.forEach(element =>
      {
        element.addEventListener("click", () =>
        {
          ClearUnderline();
          ClearMenuWindow();
          element.classList.add("selected");

          switch (element.textContent)
          {
            case "Reviews":
              (0,_reviews_js__WEBPACK_IMPORTED_MODULE_0__.default)();
              break;
            
            case "Menu":
              const div = document.createElement("div");
              _menuWindow.appendChild(div);
              break;
          
            case "Contact":
              //TODO: CONTACT
              break;
          }
        });
      });
  })();
})()

;(0,_reviews_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSwyQkFBMkIsRTs7Ozs7O1VDcEQxQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ044Qzs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFtQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsR0FBRztBQUNILENBQUM7O0FBRUQscURBQW1CLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJldmlldyA9IChyZXZpZXcsIG5hbWUpID0+XG57XG4gIHJldHVybiB7IHJldmlldywgbmFtZX1cbn1cbmNvbnN0IGFobWVkUmV2aWV3ID0gUmV2aWV3KFwiN2x3IG5layBlbCBzcmE3YSBicyBtNCBhN3NuIDdhZ2EgNHJidGhhIGYgZWwgZG55YSBmYW0/XCIsIFwiLUFobWVkIEtoYWxlZFwiKTtcbmNvbnN0IG1vYXpSZXZpZXcgPSBSZXZpZXcoXCJlbCBuZXNjYWZlIGJrYW0/XCIsIFwiLU1vYXogTW9oYW1lZFwiKTtcbmNvbnN0IGFiZGVscmFobWFuUmV2aWV3ID0gUmV2aWV3KFwiaHlhIDJod2EgdDJlbGEgZmFtIGZhIGRlIDdhZ2EgbmRlZmEgeTNueSwgdmFsdWUgZm9yIG1vbmV5IHcga2VkYSBiMmFcIiwgXCItQWJkZWxyYWhtYW4gRWwtU2hhcmthd3lcIik7XG5jb25zdCBzaGFoZFJldmlldyA9IFJldmlldyhcImh3YSA3ZWx3IGJzIG1za3IgZWwgc3JhN2FcIiwgXCItU2hhaGQgTW9oYW1lZFwiKTtcblxuY29uc3QgcmV2aWV3cyA9IFthaG1lZFJldmlldywgbW9helJldmlldywgYWJkZWxyYWhtYW5SZXZpZXcsIHNoYWhkUmV2aWV3XTtcblxuY29uc3QgUmV2aWV3cyA9ICgoKSA9Plxue1xuICBjb25zdCBDcmVhdGVSZXZpZXdzV2luZG93ID0gKCkgPT5cbiAge1xuICAgIGNvbnN0IG1lbnVXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtd2luZG93XCIpO1xuXG4gICAgKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1haW5EaXYuaWQgPSBcInJldmlld3Mtd2luZG93XCJcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspXG4gICAgICB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInJldmlld1wiKTtcblxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICAgIG1lbnVXaW5kb3cuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgX3Jldmlld3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3XCIpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Jldmlld3MubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIF9yZXZpZXdzW2ldLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50ID0gcmV2aWV3c1tpXS5yZXZpZXc7XG4gICAgICAgIF9yZXZpZXdzW2ldLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID0gcmV2aWV3c1tpXS5uYW1lO1xuICAgICAgfVxuICAgIH0pKClcbiAgfVxuXG4gIHJldHVybiB7IENyZWF0ZVJldmlld3NXaW5kb3cgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzLkNyZWF0ZVJldmlld3NXaW5kb3c7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlUmV2aWV3c1dpbmRvdyBmcm9tIFwiLi9yZXZpZXdzLmpzXCJcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbWFpblBhZ2UgPSAoZnVuY3Rpb24gKClcbntcbiAgY29uc3QgY3JlYXRlTWFpblBhZ2UgPSAoKCkgPT5cbiAge1xuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgoKSA9PlxuICAgIHtcbiAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgICBuYXZCYXIuaWQgPSBcIm5hdmJhclwiO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmlkID0gXCJpbWctbG9nby1kaXZcIjtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWcuc3JjID0gXCIuL2ltYWdlcy9CQ1MtTG9nby1CbGFuay5wbmdcIlxuICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBoMi50ZXh0Q29udGVudCA9IFwiQnJhemlsbGlhbiBDb2ZmZWUgU3RvcmVzXCI7XG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgfSkoKVxuXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+XG4gICAge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgaDEudGV4dENvbnRlbnQgPSBcIkJyYXppbGxpYW4gQ29mZmVlIFN0b3JlcyBTaW5jZSAxOTI5XCI7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZU1lbnVCYXIgPSAoKCkgPT5cbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcImE3YVwiKTtcbiAgICAgIGNvbnN0IG1lbnViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVudWJhci5pZCA9IFwibWVudWJhclwiO1xuXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgICAgY29uc3QgcmV2aWV3cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHJldmlld3MuY2xhc3NMaXN0LmFkZChcIm1lbnVFbGVtZW50XCIpO1xuICAgICAgcmV2aWV3cy50ZXh0Q29udGVudCA9IFwiUmV2aWV3c1wiO1xuICAgICAgcmV2aWV3cy5pZCA9IFwicmV2aWV3c1wiO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQocmV2aWV3cyk7XG5cbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51RWxlbWVudFwiKTtcbiAgICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICAgIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibWVudUVsZW1lbnRcIik7XG4gICAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCJcbiAgICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgICBtZW51YmFyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51YmFyKTtcblxuICAgICAgY29uc3QgbWVudVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZW51V2luZG93LmlkID0gXCJtZW51LXdpbmRvd1wiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51V2luZG93KTtcbiAgICB9KSgpO1xuICB9KSgpO1xuXG4gIGNvbnN0IF9tZW51V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXdpbmRvd1wiKTtcbiAgY29uc3QgX21lbnVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudUVsZW1lbnRcIik7XG4gIGNvbnN0IENsZWFyVW5kZXJsaW5lID0gKCkgPT4gX21lbnVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuXG4gIGNvbnN0IENsZWFyTWVudVdpbmRvdyA9ICgpID0+XG4gIHtcbiAgICBfbWVudVdpbmRvdy5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IEFkZEV2ZW50TGlzdGVuZXJzID0gKCgpID0+XG4gIHtcbiAgICBfbWVudUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PlxuICAgICAge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgQ2xlYXJVbmRlcmxpbmUoKTtcbiAgICAgICAgICBDbGVhck1lbnVXaW5kb3coKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudC50ZXh0Q29udGVudClcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwiUmV2aWV3c1wiOlxuICAgICAgICAgICAgICBDcmVhdGVSZXZpZXdzV2luZG93KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICBfbWVudVdpbmRvdy5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgICAgICAgIC8vVE9ETzogQ09OVEFDVFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0pKCk7XG59KSgpXG5cbkNyZWF0ZVJldmlld3NXaW5kb3coKTsiXSwic291cmNlUm9vdCI6IiJ9