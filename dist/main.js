/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let drinks = [];

const Drink = (name, price) =>
{
  const _drink = { name, price}

  drinks.push(_drink);

  return _drink;
}
Drink("Iced Cappuccino", 23);
Drink("Iced Latte", 24);
Drink("Iced American Coffee", 24);
Drink("Iced Mocha", 25);
Drink("Iced Mocha Nutella", 29);
Drink("Iced Nescafe", 23);
Drink("Iced Nutella", 30);
Drink("Iced Milk", 18);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drinks);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drinks.js */ "./src/drinks.js");


const PricesMenu = (() =>
{
  const CreatePricesMenuWindow = () =>
  {
    const menuWindow = document.querySelector("#menu-window");
    
    (function ()
    {
      const __menu = document.querySelector("#menu");
      __menu.classList.add("selected");
    })();

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "prices-window";

      const header = document.createElement("div");
      header.id = "prices-header";
      const headerH2 = document.createElement("h2");
      headerH2.textContent = "Drink";
      header.appendChild(headerH2);
      const headerPriceH2 = document.createElement("h2");
      headerPriceH2.textContent = "Price";
      header.appendChild(headerPriceH2);
      mainDiv.appendChild(header);


      for (let i = 0; i < _drinks_js__WEBPACK_IMPORTED_MODULE_0__.default.length; i++)
      {
        let div = document.createElement("div");
        div.classList.add("drink");

        let nameH2 = document.createElement("h2");
        nameH2.classList.add("drink-name");
        div.appendChild(nameH2);

        let priceH2 = document.createElement("h2");
        priceH2.classList.add("price")
        div.appendChild(priceH2);

        mainDiv.appendChild(div);
      }
      menuWindow.appendChild(mainDiv);
    })();

    (function()
    {
      const _drinks = Array.from(document.querySelectorAll(".drink"));
      for (let i = 0; i < _drinks.length; i++)
      {
        _drinks[i].querySelector(".drink-name").textContent = _drinks_js__WEBPACK_IMPORTED_MODULE_0__.default[i].name;
        _drinks[i].querySelector(".price").textContent = _drinks_js__WEBPACK_IMPORTED_MODULE_0__.default[i].price;
      }
    })()
  }

  return { CreatePricesMenuWindow }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricesMenu.CreatePricesMenuWindow);

/***/ }),

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
    
    (function ()
    {
      const __reviews = document.querySelector("#reviews");
      __reviews.classList.add("selected");
    })();

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "reviews-window";

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



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

          switch (element.textContent)
          {
            case "Reviews":
              (0,_reviews_js__WEBPACK_IMPORTED_MODULE_0__.default)();
              break;
            
            case "Menu":
              (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2RyaW5rcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9yZXZpZXdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNuQlk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EscUJBQXFCLEtBQUssc0RBQWEsQ0FBQztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQSw4REFBOEQsK0NBQU07QUFDcEUseURBQXlELCtDQUFNO0FBQy9EO0FBQ0EsS0FBSztBQUNMOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLGlDQUFpQyxFOzs7Ozs7Ozs7Ozs7OztBQzlEaEQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLDJCQUEyQixFOzs7Ozs7VUMxRDFDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNBOztBQUUvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFtQjtBQUNqQzs7QUFFQTtBQUNBLGNBQWMsaURBQXNCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxxREFBbUIsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRyaW5rcyA9IFtdO1xuXG5jb25zdCBEcmluayA9IChuYW1lLCBwcmljZSkgPT5cbntcbiAgY29uc3QgX2RyaW5rID0geyBuYW1lLCBwcmljZX1cblxuICBkcmlua3MucHVzaChfZHJpbmspO1xuXG4gIHJldHVybiBfZHJpbms7XG59XG5EcmluayhcIkljZWQgQ2FwcHVjY2lub1wiLCAyMyk7XG5EcmluayhcIkljZWQgTGF0dGVcIiwgMjQpO1xuRHJpbmsoXCJJY2VkIEFtZXJpY2FuIENvZmZlZVwiLCAyNCk7XG5EcmluayhcIkljZWQgTW9jaGFcIiwgMjUpO1xuRHJpbmsoXCJJY2VkIE1vY2hhIE51dGVsbGFcIiwgMjkpO1xuRHJpbmsoXCJJY2VkIE5lc2NhZmVcIiwgMjMpO1xuRHJpbmsoXCJJY2VkIE51dGVsbGFcIiwgMzApO1xuRHJpbmsoXCJJY2VkIE1pbGtcIiwgMTgpO1xuXG5leHBvcnQgZGVmYXVsdCBkcmlua3M7IiwiaW1wb3J0IGRyaW5rcyBmcm9tIFwiLi9kcmlua3MuanNcIjtcblxuY29uc3QgUHJpY2VzTWVudSA9ICgoKSA9Plxue1xuICBjb25zdCBDcmVhdGVQcmljZXNNZW51V2luZG93ID0gKCkgPT5cbiAge1xuICAgIGNvbnN0IG1lbnVXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtd2luZG93XCIpO1xuICAgIFxuICAgIChmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgIGNvbnN0IF9fbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgICAgIF9fbWVudS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtYWluRGl2LmlkID0gXCJwcmljZXMtd2luZG93XCI7XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBoZWFkZXIuaWQgPSBcInByaWNlcy1oZWFkZXJcIjtcbiAgICAgIGNvbnN0IGhlYWRlckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaGVhZGVySDIudGV4dENvbnRlbnQgPSBcIkRyaW5rXCI7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySDIpO1xuICAgICAgY29uc3QgaGVhZGVyUHJpY2VIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGhlYWRlclByaWNlSDIudGV4dENvbnRlbnQgPSBcIlByaWNlXCI7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUHJpY2VIMik7XG4gICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmlua3MubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRyaW5rXCIpO1xuXG4gICAgICAgIGxldCBuYW1lSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG5hbWVIMi5jbGFzc0xpc3QuYWRkKFwiZHJpbmstbmFtZVwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5hbWVIMik7XG5cbiAgICAgICAgbGV0IHByaWNlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHByaWNlSDIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcmljZUgyKTtcblxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgICBtZW51V2luZG93LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGNvbnN0IF9kcmlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJpbmtcIikpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZHJpbmtzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICBfZHJpbmtzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuZHJpbmstbmFtZVwiKS50ZXh0Q29udGVudCA9IGRyaW5rc1tpXS5uYW1lO1xuICAgICAgICBfZHJpbmtzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIucHJpY2VcIikudGV4dENvbnRlbnQgPSBkcmlua3NbaV0ucHJpY2U7XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG5cbiAgcmV0dXJuIHsgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlc01lbnUuQ3JlYXRlUHJpY2VzTWVudVdpbmRvdzsiLCJjb25zdCBSZXZpZXcgPSAocmV2aWV3LCBuYW1lKSA9Plxue1xuICByZXR1cm4geyByZXZpZXcsIG5hbWV9XG59XG5jb25zdCBhaG1lZFJldmlldyA9IFJldmlldyhcIjdsdyBuZWsgZWwgc3JhN2EgYnMgbTQgYTdzbiA3YWdhIDRyYnRoYSBmIGVsIGRueWEgZmFtP1wiLCBcIi1BaG1lZCBLaGFsZWRcIik7XG5jb25zdCBtb2F6UmV2aWV3ID0gUmV2aWV3KFwiZWwgbmVzY2FmZSBia2FtP1wiLCBcIi1Nb2F6IE1vaGFtZWRcIik7XG5jb25zdCBhYmRlbHJhaG1hblJldmlldyA9IFJldmlldyhcImh5YSAyaHdhIHQyZWxhIGZhbSBmYSBkZSA3YWdhIG5kZWZhIHkzbnksIHZhbHVlIGZvciBtb25leSB3IGtlZGEgYjJhXCIsIFwiLUFiZGVscmFobWFuIEVsLVNoYXJrYXd5XCIpO1xuY29uc3Qgc2hhaGRSZXZpZXcgPSBSZXZpZXcoXCJod2EgN2VsdyBicyBtc2tyIGVsIHNyYTdhXCIsIFwiLVNoYWhkIE1vaGFtZWRcIik7XG5cbmNvbnN0IHJldmlld3MgPSBbYWhtZWRSZXZpZXcsIG1vYXpSZXZpZXcsIGFiZGVscmFobWFuUmV2aWV3LCBzaGFoZFJldmlld107XG5cbmNvbnN0IFJldmlld3MgPSAoKCkgPT5cbntcbiAgY29uc3QgQ3JlYXRlUmV2aWV3c1dpbmRvdyA9ICgpID0+XG4gIHtcbiAgICBjb25zdCBtZW51V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXdpbmRvd1wiKTtcbiAgICBcbiAgICAoZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICBjb25zdCBfX3Jldmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jldmlld3NcIik7XG4gICAgICBfX3Jldmlld3MuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFpbkRpdi5pZCA9IFwicmV2aWV3cy13aW5kb3dcIjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspXG4gICAgICB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInJldmlld1wiKTtcblxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICAgIG1lbnVXaW5kb3cuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgX3Jldmlld3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3XCIpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Jldmlld3MubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIF9yZXZpZXdzW2ldLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50ID0gcmV2aWV3c1tpXS5yZXZpZXc7XG4gICAgICAgIF9yZXZpZXdzW2ldLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID0gcmV2aWV3c1tpXS5uYW1lO1xuICAgICAgfVxuICAgIH0pKClcbiAgfVxuXG4gIHJldHVybiB7IENyZWF0ZVJldmlld3NXaW5kb3cgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzLkNyZWF0ZVJldmlld3NXaW5kb3c7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlUmV2aWV3c1dpbmRvdyBmcm9tIFwiLi9yZXZpZXdzLmpzXCI7XG5pbXBvcnQgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdyBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IG1haW5QYWdlID0gKGZ1bmN0aW9uICgpXG57XG4gIGNvbnN0IGNyZWF0ZU1haW5QYWdlID0gKCgpID0+XG4gIHtcbiAgICBjb25zdCBjcmVhdGVOYXZCYXIgPSAoKCkgPT5cbiAgICB7XG4gICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgbmF2QmFyLmlkID0gXCJuYXZiYXJcIjtcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5pZCA9IFwiaW1nLWxvZ28tZGl2XCI7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLnNyYyA9IFwiLi9pbWFnZXMvQkNTLUxvZ28tQmxhbmsucG5nXCJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBcIkJyYXppbGxpYW4gQ29mZmVlIFN0b3Jlc1wiO1xuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGgyKTtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIH0pKClcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PlxuICAgIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGgxLnRleHRDb250ZW50ID0gXCJCcmF6aWxsaWFuIENvZmZlZSBTdG9yZXMgU2luY2UgMTkyOVwiO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVNZW51QmFyID0gKCgpID0+XG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCJhN2FcIik7XG4gICAgICBjb25zdCBtZW51YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1lbnViYXIuaWQgPSBcIm1lbnViYXJcIjtcblxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICAgIGNvbnN0IHJldmlld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICByZXZpZXdzLmNsYXNzTGlzdC5hZGQoXCJtZW51RWxlbWVudFwiKTtcbiAgICAgIHJldmlld3MudGV4dENvbnRlbnQgPSBcIlJldmlld3NcIjtcbiAgICAgIHJldmlld3MuaWQgPSBcInJldmlld3NcIjtcbiAgICAgIHVsLmFwcGVuZENoaWxkKHJldmlld3MpO1xuXG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudUVsZW1lbnRcIik7XG4gICAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgICB1bC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm1lbnVFbGVtZW50XCIpO1xuICAgICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiXG4gICAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgICAgbWVudWJhci5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudWJhcik7XG5cbiAgICAgIGNvbnN0IG1lbnVXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVudVdpbmRvdy5pZCA9IFwibWVudS13aW5kb3dcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVdpbmRvdyk7XG4gICAgfSkoKTtcbiAgfSkoKTtcblxuICBjb25zdCBfbWVudVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS13aW5kb3dcIik7XG4gIGNvbnN0IF9tZW51RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVFbGVtZW50XCIpO1xuICBjb25zdCBDbGVhclVuZGVybGluZSA9ICgpID0+IF9tZW51RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcblxuICBjb25zdCBDbGVhck1lbnVXaW5kb3cgPSAoKSA9PlxuICB7XG4gICAgX21lbnVXaW5kb3cuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBBZGRFdmVudExpc3RlbmVycyA9ICgoKSA9PlxuICB7XG4gICAgX21lbnVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT5cbiAgICAgIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgIENsZWFyVW5kZXJsaW5lKCk7XG4gICAgICAgICAgQ2xlYXJNZW51V2luZG93KCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGV4dENvbnRlbnQpXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIlJldmlld3NcIjpcbiAgICAgICAgICAgICAgQ3JlYXRlUmV2aWV3c1dpbmRvdygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgICAgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgICAgICAgIC8vVE9ETzogQ09OVEFDVFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0pKCk7XG59KSgpXG5cbkNyZWF0ZVJldmlld3NXaW5kb3coKTsiXSwic291cmNlUm9vdCI6IiJ9