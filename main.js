/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.js */ "./src/locations.js");


const Contact = (() =>
{
  const CreateContactWindow = () =>
  {
    const menuWindow = document.querySelector("#menu-window");
    
    (function ()
    {
      const __contact = document.querySelector("#contact");
      __contact.classList.add("selected");
    })();

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "contact-window";

      const header = document.createElement("h2");
      header.textContent = "Visit us at one of our locations!";
      mainDiv.appendChild(header);

      const locationsDiv = document.createElement("div");
      locationsDiv.id = "locations";

      for (let i = 0; i < _locations_js__WEBPACK_IMPORTED_MODULE_0__.default.length; i++)
      {
        let div = document.createElement("div");
        div.classList.add("location");

        let h3 = document.createElement("h3");
        div.appendChild(h3);

        let map = document.createElement("iframe");
        map.height = "300";
        map.style.border = "0";
        map.allowFullscreen = "";
        map.setAttribute("loading", "lazy");
        div.appendChild(map);

        locationsDiv.appendChild(div);
      }
      
      mainDiv.appendChild(locationsDiv);

      const callUs = document.createElement("h2");
      callUs.textContent = "Or call us!";
      mainDiv.appendChild(callUs);

      const number = document.createElement("h2");
      number.textContent = "034865059";
      number.style = "margin:0; font-size:2em;";
      mainDiv.appendChild(number);

      menuWindow.appendChild(mainDiv);
    })();

    (function()
    {
      const _locations = Array.from(document.querySelectorAll(".location"));
      for (let i = 0; i < _locations.length; i++)
      {
        _locations[i].querySelector("h3").textContent = `${_locations_js__WEBPACK_IMPORTED_MODULE_0__.default[i].name}:`;
        _locations[i].querySelector("iframe").src = _locations_js__WEBPACK_IMPORTED_MODULE_0__.default[i].src;
      }
    })()
  }

  return { CreateContactWindow }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact.CreateContactWindow);

/***/ }),

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

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let locations = [];

const Location = (name, src) =>
{
  const _location = { name, src}

  locations.push(_location);

  return _location;
}
Location("El Raml Station Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.754926450716!2d29.897198815498765!3d31.199807870021743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3eddcfc1ec1%3A0x4db3c1cdaeb6c27f!2sBrazilian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626726207374!5m2!1sen!2seg");
Location("Al Azaritah Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.2853046922646!2d29.906178851266084!3d31.204917072221512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38c9c7c52c1%3A0x38ba5c28398878a5!2sBrazilian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626729324546!5m2!1sen!2seg");
Location("Salah Salem Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.4477756574422!2d29.898059265785903!3d31.195909293822822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3e92c5ca165%3A0xec39a47e5a47cd46!2sBrazilian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626729730623!5m2!1sen!2seg");
Location("Gleem Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27295.416389355596!2d29.92003779636806!3d31.222750447198788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a069ac049b9ea2!2sBrazillian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626730139572!5m2!1sen!2seg");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locations);

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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




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

    const createFooter = (() =>
    {
      const footer = document.createElement("footer");
      footer.innerHTML = "&copy Created by Shadowspedicey for The Odin Project";
      content.appendChild(footer);
    })()
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
              (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9kcmlua3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixLQUFLLHlEQUFnQixDQUFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQSwyREFBMkQsa0RBQVMsU0FBUztBQUM3RSxvREFBb0Qsa0RBQVM7QUFDN0Q7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LG9EQUFtQjtBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxxREFBbUIsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMuanNcIjtcblxuY29uc3QgQ29udGFjdCA9ICgoKSA9Plxue1xuICBjb25zdCBDcmVhdGVDb250YWN0V2luZG93ID0gKCkgPT5cbiAge1xuICAgIGNvbnN0IG1lbnVXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtd2luZG93XCIpO1xuICAgIFxuICAgIChmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgIGNvbnN0IF9fY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcbiAgICAgIF9fY29udGFjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtYWluRGl2LmlkID0gXCJjb250YWN0LXdpbmRvd1wiO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlZpc2l0IHVzIGF0IG9uZSBvZiBvdXIgbG9jYXRpb25zIVwiO1xuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG9jYXRpb25zRGl2LmlkID0gXCJsb2NhdGlvbnNcIjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcblxuICAgICAgICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgbWFwLmhlaWdodCA9IFwiMzAwXCI7XG4gICAgICAgIG1hcC5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICAgICAgbWFwLmFsbG93RnVsbHNjcmVlbiA9IFwiXCI7XG4gICAgICAgIG1hcC5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsIFwibGF6eVwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgICAgICAgbG9jYXRpb25zRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25zRGl2KTtcblxuICAgICAgY29uc3QgY2FsbFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgY2FsbFVzLnRleHRDb250ZW50ID0gXCJPciBjYWxsIHVzIVwiO1xuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjYWxsVXMpO1xuXG4gICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBcIjAzNDg2NTA1OVwiO1xuICAgICAgbnVtYmVyLnN0eWxlID0gXCJtYXJnaW46MDsgZm9udC1zaXplOjJlbTtcIjtcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobnVtYmVyKTtcblxuICAgICAgbWVudVdpbmRvdy5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICBjb25zdCBfbG9jYXRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvY2F0aW9uXCIpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2xvY2F0aW9ucy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgX2xvY2F0aW9uc1tpXS5xdWVyeVNlbGVjdG9yKFwiaDNcIikudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbnNbaV0ubmFtZX06YDtcbiAgICAgICAgX2xvY2F0aW9uc1tpXS5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLnNyYyA9IGxvY2F0aW9uc1tpXS5zcmM7XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG5cbiAgcmV0dXJuIHsgQ3JlYXRlQ29udGFjdFdpbmRvdyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QuQ3JlYXRlQ29udGFjdFdpbmRvdzsiLCJsZXQgZHJpbmtzID0gW107XG5cbmNvbnN0IERyaW5rID0gKG5hbWUsIHByaWNlKSA9Plxue1xuICBjb25zdCBfZHJpbmsgPSB7IG5hbWUsIHByaWNlfVxuXG4gIGRyaW5rcy5wdXNoKF9kcmluayk7XG5cbiAgcmV0dXJuIF9kcmluaztcbn1cbkRyaW5rKFwiSWNlZCBDYXBwdWNjaW5vXCIsIDIzKTtcbkRyaW5rKFwiSWNlZCBMYXR0ZVwiLCAyNCk7XG5EcmluayhcIkljZWQgQW1lcmljYW4gQ29mZmVlXCIsIDI0KTtcbkRyaW5rKFwiSWNlZCBNb2NoYVwiLCAyNSk7XG5EcmluayhcIkljZWQgTW9jaGEgTnV0ZWxsYVwiLCAyOSk7XG5EcmluayhcIkljZWQgTmVzY2FmZVwiLCAyMyk7XG5EcmluayhcIkljZWQgTnV0ZWxsYVwiLCAzMCk7XG5EcmluayhcIkljZWQgTWlsa1wiLCAxOCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRyaW5rczsiLCJsZXQgbG9jYXRpb25zID0gW107XG5cbmNvbnN0IExvY2F0aW9uID0gKG5hbWUsIHNyYykgPT5cbntcbiAgY29uc3QgX2xvY2F0aW9uID0geyBuYW1lLCBzcmN9XG5cbiAgbG9jYXRpb25zLnB1c2goX2xvY2F0aW9uKTtcblxuICByZXR1cm4gX2xvY2F0aW9uO1xufVxuTG9jYXRpb24oXCJFbCBSYW1sIFN0YXRpb24gQnJhbmNoXCIsIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzQxMi43NTQ5MjY0NTA3MTYhMmQyOS44OTcxOTg4MTU0OTg3NjUhM2QzMS4xOTk4MDc4NzAwMjE3NDMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDE0ZjVjM2VkZGNmYzFlYzElM0EweDRkYjNjMWNkYWViNmMyN2YhMnNCcmF6aWxpYW4lMjBDb2ZmZWUlMjBTdG9yZXMhNWUwITNtMiExc2VuITJzZWchNHYxNjI2NzI2MjA3Mzc0ITVtMiExc2VuITJzZWdcIik7XG5Mb2NhdGlvbihcIkFsIEF6YXJpdGFoIEJyYW5jaFwiLCBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE3MDYuMjg1MzA0NjkyMjY0NiEyZDI5LjkwNjE3ODg1MTI2NjA4NCEzZDMxLjIwNDkxNzA3MjIyMTUxMiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTRmNWMzOGM5YzdjNTJjMSUzQTB4MzhiYTVjMjgzOTg4NzhhNSEyc0JyYXppbGlhbiUyMENvZmZlZSUyMFN0b3JlcyE1ZTAhM20yITFzZW4hMnNlZyE0djE2MjY3MjkzMjQ1NDYhNW0yITFzZW4hMnNlZ1wiKTtcbkxvY2F0aW9uKFwiU2FsYWggU2FsZW0gQnJhbmNoXCIsIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTcwNi40NDc3NzU2NTc0NDIyITJkMjkuODk4MDU5MjY1Nzg1OTAzITNkMzEuMTk1OTA5MjkzODIyODIyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxNGY1YzNlOTJjNWNhMTY1JTNBMHhlYzM5YTQ3ZTVhNDdjZDQ2ITJzQnJhemlsaWFuJTIwQ29mZmVlJTIwU3RvcmVzITVlMCEzbTIhMXNlbiEyc2VnITR2MTYyNjcyOTczMDYyMyE1bTIhMXNlbiEyc2VnXCIpO1xuTG9jYXRpb24oXCJHbGVlbSBCcmFuY2hcIiwgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyNzI5NS40MTYzODkzNTU1OTYhMmQyOS45MjAwMzc3OTYzNjgwNiEzZDMxLjIyMjc1MDQ0NzE5ODc4OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4MjJhMDY5YWMwNDliOWVhMiEyc0JyYXppbGxpYW4lMjBDb2ZmZWUlMjBTdG9yZXMhNWUwITNtMiExc2VuITJzZWchNHYxNjI2NzMwMTM5NTcyITVtMiExc2VuITJzZWdcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uczsiLCJpbXBvcnQgZHJpbmtzIGZyb20gXCIuL2RyaW5rcy5qc1wiO1xuXG5jb25zdCBQcmljZXNNZW51ID0gKCgpID0+XG57XG4gIGNvbnN0IENyZWF0ZVByaWNlc01lbnVXaW5kb3cgPSAoKSA9PlxuICB7XG4gICAgY29uc3QgbWVudVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS13aW5kb3dcIik7XG4gICAgXG4gICAgKGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgY29uc3QgX19tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICAgICAgX19tZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1haW5EaXYuaWQgPSBcInByaWNlcy13aW5kb3dcIjtcblxuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGhlYWRlci5pZCA9IFwicHJpY2VzLWhlYWRlclwiO1xuICAgICAgY29uc3QgaGVhZGVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBoZWFkZXJIMi50ZXh0Q29udGVudCA9IFwiRHJpbmtcIjtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMik7XG4gICAgICBjb25zdCBoZWFkZXJQcmljZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaGVhZGVyUHJpY2VIMi50ZXh0Q29udGVudCA9IFwiUHJpY2VcIjtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJQcmljZUgyKTtcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmlua3MubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRyaW5rXCIpO1xuXG4gICAgICAgIGxldCBuYW1lSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG5hbWVIMi5jbGFzc0xpc3QuYWRkKFwiZHJpbmstbmFtZVwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5hbWVIMik7XG5cbiAgICAgICAgbGV0IHByaWNlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHByaWNlSDIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcmljZUgyKTtcblxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgICBtZW51V2luZG93LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGNvbnN0IF9kcmlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJpbmtcIikpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZHJpbmtzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICBfZHJpbmtzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuZHJpbmstbmFtZVwiKS50ZXh0Q29udGVudCA9IGRyaW5rc1tpXS5uYW1lO1xuICAgICAgICBfZHJpbmtzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIucHJpY2VcIikudGV4dENvbnRlbnQgPSBkcmlua3NbaV0ucHJpY2U7XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG5cbiAgcmV0dXJuIHsgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlc01lbnUuQ3JlYXRlUHJpY2VzTWVudVdpbmRvdzsiLCJjb25zdCBSZXZpZXcgPSAocmV2aWV3LCBuYW1lKSA9Plxue1xuICByZXR1cm4geyByZXZpZXcsIG5hbWV9XG59XG5jb25zdCBhaG1lZFJldmlldyA9IFJldmlldyhcIjdsdyBuZWsgZWwgc3JhN2EgYnMgbTQgYTdzbiA3YWdhIDRyYnRoYSBmIGVsIGRueWEgZmFtP1wiLCBcIi1BaG1lZCBLaGFsZWRcIik7XG5jb25zdCBtb2F6UmV2aWV3ID0gUmV2aWV3KFwiZWwgbmVzY2FmZSBia2FtP1wiLCBcIi1Nb2F6IE1vaGFtZWRcIik7XG5jb25zdCBhYmRlbHJhaG1hblJldmlldyA9IFJldmlldyhcImh5YSAyaHdhIHQyZWxhIGZhbSBmYSBkZSA3YWdhIG5kZWZhIHkzbnksIHZhbHVlIGZvciBtb25leSB3IGtlZGEgYjJhXCIsIFwiLUFiZGVscmFobWFuIEVsLVNoYXJrYXd5XCIpO1xuY29uc3Qgc2hhaGRSZXZpZXcgPSBSZXZpZXcoXCJod2EgN2VsdyBicyBtc2tyIGVsIHNyYTdhXCIsIFwiLVNoYWhkIE1vaGFtZWRcIik7XG5cbmNvbnN0IHJldmlld3MgPSBbYWhtZWRSZXZpZXcsIG1vYXpSZXZpZXcsIGFiZGVscmFobWFuUmV2aWV3LCBzaGFoZFJldmlld107XG5cbmNvbnN0IFJldmlld3MgPSAoKCkgPT5cbntcbiAgY29uc3QgQ3JlYXRlUmV2aWV3c1dpbmRvdyA9ICgpID0+XG4gIHtcbiAgICBjb25zdCBtZW51V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXdpbmRvd1wiKTtcbiAgICBcbiAgICAoZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICBjb25zdCBfX3Jldmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jldmlld3NcIik7XG4gICAgICBfX3Jldmlld3MuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFpbkRpdi5pZCA9IFwicmV2aWV3cy13aW5kb3dcIjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspXG4gICAgICB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInJldmlld1wiKTtcblxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICAgIG1lbnVXaW5kb3cuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgX3Jldmlld3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3XCIpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Jldmlld3MubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIF9yZXZpZXdzW2ldLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50ID0gcmV2aWV3c1tpXS5yZXZpZXc7XG4gICAgICAgIF9yZXZpZXdzW2ldLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID0gcmV2aWV3c1tpXS5uYW1lO1xuICAgICAgfVxuICAgIH0pKClcbiAgfVxuXG4gIHJldHVybiB7IENyZWF0ZVJldmlld3NXaW5kb3cgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzLkNyZWF0ZVJldmlld3NXaW5kb3c7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlUmV2aWV3c1dpbmRvdyBmcm9tIFwiLi9yZXZpZXdzLmpzXCI7XG5pbXBvcnQgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdyBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgQ3JlYXRlQ29udGFjdFdpbmRvdyBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IG1haW5QYWdlID0gKGZ1bmN0aW9uICgpXG57XG4gIGNvbnN0IGNyZWF0ZU1haW5QYWdlID0gKCgpID0+XG4gIHtcbiAgICBjb25zdCBjcmVhdGVOYXZCYXIgPSAoKCkgPT5cbiAgICB7XG4gICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgbmF2QmFyLmlkID0gXCJuYXZiYXJcIjtcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5pZCA9IFwiaW1nLWxvZ28tZGl2XCI7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLnNyYyA9IFwiLi9pbWFnZXMvQkNTLUxvZ28tQmxhbmsucG5nXCJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBcIkJyYXppbGxpYW4gQ29mZmVlIFN0b3Jlc1wiO1xuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGgyKTtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIH0pKClcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PlxuICAgIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGgxLnRleHRDb250ZW50ID0gXCJCcmF6aWxsaWFuIENvZmZlZSBTdG9yZXMgU2luY2UgMTkyOVwiO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVNZW51QmFyID0gKCgpID0+XG4gICAge1xuICAgICAgY29uc3QgbWVudWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZW51YmFyLmlkID0gXCJtZW51YmFyXCI7XG5cbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgICBjb25zdCByZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgcmV2aWV3cy5jbGFzc0xpc3QuYWRkKFwibWVudUVsZW1lbnRcIik7XG4gICAgICByZXZpZXdzLnRleHRDb250ZW50ID0gXCJSZXZpZXdzXCI7XG4gICAgICByZXZpZXdzLmlkID0gXCJyZXZpZXdzXCI7XG4gICAgICB1bC5hcHBlbmRDaGlsZChyZXZpZXdzKTtcblxuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVFbGVtZW50XCIpO1xuICAgICAgbWVudS5pZCA9IFwibWVudVwiO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtZW51RWxlbWVudFwiKTtcbiAgICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIlxuICAgICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICAgIG1lbnViYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnViYXIpO1xuXG4gICAgICBjb25zdCBtZW51V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1lbnVXaW5kb3cuaWQgPSBcIm1lbnUtd2luZG93XCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVXaW5kb3cpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKCkgPT5cbiAgICB7XG4gICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgICAgZm9vdGVyLmlubmVySFRNTCA9IFwiJmNvcHkgQ3JlYXRlZCBieSBTaGFkb3dzcGVkaWNleSBmb3IgVGhlIE9kaW4gUHJvamVjdFwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH0pKClcbiAgfSkoKTtcblxuICBjb25zdCBfbWVudVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS13aW5kb3dcIik7XG4gIGNvbnN0IF9tZW51RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVFbGVtZW50XCIpO1xuICBjb25zdCBDbGVhclVuZGVybGluZSA9ICgpID0+IF9tZW51RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcblxuICBjb25zdCBDbGVhck1lbnVXaW5kb3cgPSAoKSA9PlxuICB7XG4gICAgX21lbnVXaW5kb3cuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBBZGRFdmVudExpc3RlbmVycyA9ICgoKSA9PlxuICB7XG4gICAgX21lbnVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT5cbiAgICAgIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgIENsZWFyVW5kZXJsaW5lKCk7XG4gICAgICAgICAgQ2xlYXJNZW51V2luZG93KCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGV4dENvbnRlbnQpXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIlJldmlld3NcIjpcbiAgICAgICAgICAgICAgQ3JlYXRlUmV2aWV3c1dpbmRvdygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgICAgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgICAgICAgIENyZWF0ZUNvbnRhY3RXaW5kb3coKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9KSgpO1xufSkoKVxuXG5DcmVhdGVSZXZpZXdzV2luZG93KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==