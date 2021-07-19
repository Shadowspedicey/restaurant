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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9kcmlua3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixLQUFLLHlEQUFnQixDQUFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQSwyREFBMkQsa0RBQVMsU0FBUztBQUM3RSxvREFBb0Qsa0RBQVM7QUFDN0Q7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Q1QsT0FBTztBQUNQLEdBQUc7QUFDSCxDQUFDOztBQUVELHFEQUFtQixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy5qc1wiO1xuXG5jb25zdCBDb250YWN0ID0gKCgpID0+XG57XG4gIGNvbnN0IENyZWF0ZUNvbnRhY3RXaW5kb3cgPSAoKSA9PlxuICB7XG4gICAgY29uc3QgbWVudVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS13aW5kb3dcIik7XG4gICAgXG4gICAgKGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgY29uc3QgX19jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICAgICAgX19jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1haW5EaXYuaWQgPSBcImNvbnRhY3Qtd2luZG93XCI7XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVmlzaXQgdXMgYXQgb25lIG9mIG91ciBsb2NhdGlvbnMhXCI7XG4gICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsb2NhdGlvbnNEaXYuaWQgPSBcImxvY2F0aW9uc1wiO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG5cbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIGxldCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBtYXAuaGVpZ2h0ID0gXCIzMDBcIjtcbiAgICAgICAgbWFwLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICBtYXAuYWxsb3dGdWxsc2NyZWVuID0gXCJcIjtcbiAgICAgICAgbWFwLnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIiwgXCJsYXp5XCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgICAgICBsb2NhdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbnNEaXYpO1xuXG4gICAgICBjb25zdCBjYWxsVXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBjYWxsVXMudGV4dENvbnRlbnQgPSBcIk9yIGNhbGwgdXMhXCI7XG4gICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNhbGxVcyk7XG5cbiAgICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiMDM0ODY1MDU5XCI7XG4gICAgICBudW1iZXIuc3R5bGUgPSBcIm1hcmdpbjowOyBmb250LXNpemU6MmVtO1wiO1xuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChudW1iZXIpO1xuXG4gICAgICBtZW51V2luZG93LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGNvbnN0IF9sb2NhdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9jYXRpb25cIikpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfbG9jYXRpb25zLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICBfbG9jYXRpb25zW2ldLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uc1tpXS5uYW1lfTpgO1xuICAgICAgICBfbG9jYXRpb25zW2ldLnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuc3JjID0gbG9jYXRpb25zW2ldLnNyYztcbiAgICAgIH1cbiAgICB9KSgpXG4gIH1cblxuICByZXR1cm4geyBDcmVhdGVDb250YWN0V2luZG93IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdC5DcmVhdGVDb250YWN0V2luZG93OyIsImxldCBkcmlua3MgPSBbXTtcblxuY29uc3QgRHJpbmsgPSAobmFtZSwgcHJpY2UpID0+XG57XG4gIGNvbnN0IF9kcmluayA9IHsgbmFtZSwgcHJpY2V9XG5cbiAgZHJpbmtzLnB1c2goX2RyaW5rKTtcblxuICByZXR1cm4gX2RyaW5rO1xufVxuRHJpbmsoXCJJY2VkIENhcHB1Y2Npbm9cIiwgMjMpO1xuRHJpbmsoXCJJY2VkIExhdHRlXCIsIDI0KTtcbkRyaW5rKFwiSWNlZCBBbWVyaWNhbiBDb2ZmZWVcIiwgMjQpO1xuRHJpbmsoXCJJY2VkIE1vY2hhXCIsIDI1KTtcbkRyaW5rKFwiSWNlZCBNb2NoYSBOdXRlbGxhXCIsIDI5KTtcbkRyaW5rKFwiSWNlZCBOZXNjYWZlXCIsIDIzKTtcbkRyaW5rKFwiSWNlZCBOdXRlbGxhXCIsIDMwKTtcbkRyaW5rKFwiSWNlZCBNaWxrXCIsIDE4KTtcblxuZXhwb3J0IGRlZmF1bHQgZHJpbmtzOyIsImxldCBsb2NhdGlvbnMgPSBbXTtcblxuY29uc3QgTG9jYXRpb24gPSAobmFtZSwgc3JjKSA9Plxue1xuICBjb25zdCBfbG9jYXRpb24gPSB7IG5hbWUsIHNyY31cblxuICBsb2NhdGlvbnMucHVzaChfbG9jYXRpb24pO1xuXG4gIHJldHVybiBfbG9jYXRpb247XG59XG5Mb2NhdGlvbihcIkVsIFJhbWwgU3RhdGlvbiBCcmFuY2hcIiwgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzNDEyLjc1NDkyNjQ1MDcxNiEyZDI5Ljg5NzE5ODgxNTQ5ODc2NSEzZDMxLjE5OTgwNzg3MDAyMTc0MyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTRmNWMzZWRkY2ZjMWVjMSUzQTB4NGRiM2MxY2RhZWI2YzI3ZiEyc0JyYXppbGlhbiUyMENvZmZlZSUyMFN0b3JlcyE1ZTAhM20yITFzZW4hMnNlZyE0djE2MjY3MjYyMDczNzQhNW0yITFzZW4hMnNlZ1wiKTtcbkxvY2F0aW9uKFwiQWwgQXphcml0YWggQnJhbmNoXCIsIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTcwNi4yODUzMDQ2OTIyNjQ2ITJkMjkuOTA2MTc4ODUxMjY2MDg0ITNkMzEuMjA0OTE3MDcyMjIxNTEyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxNGY1YzM4YzljN2M1MmMxJTNBMHgzOGJhNWMyODM5ODg3OGE1ITJzQnJhemlsaWFuJTIwQ29mZmVlJTIwU3RvcmVzITVlMCEzbTIhMXNlbiEyc2VnITR2MTYyNjcyOTMyNDU0NiE1bTIhMXNlbiEyc2VnXCIpO1xuTG9jYXRpb24oXCJTYWxhaCBTYWxlbSBCcmFuY2hcIiwgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNzA2LjQ0Nzc3NTY1NzQ0MjIhMmQyOS44OTgwNTkyNjU3ODU5MDMhM2QzMS4xOTU5MDkyOTM4MjI4MjIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDE0ZjVjM2U5MmM1Y2ExNjUlM0EweGVjMzlhNDdlNWE0N2NkNDYhMnNCcmF6aWxpYW4lMjBDb2ZmZWUlMjBTdG9yZXMhNWUwITNtMiExc2VuITJzZWchNHYxNjI2NzI5NzMwNjIzITVtMiExc2VuITJzZWdcIik7XG5Mb2NhdGlvbihcIkdsZWVtIEJyYW5jaFwiLCBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI3Mjk1LjQxNjM4OTM1NTU5NiEyZDI5LjkyMDAzNzc5NjM2ODA2ITNkMzEuMjIyNzUwNDQ3MTk4Nzg4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHgyMmEwNjlhYzA0OWI5ZWEyITJzQnJhemlsbGlhbiUyMENvZmZlZSUyMFN0b3JlcyE1ZTAhM20yITFzZW4hMnNlZyE0djE2MjY3MzAxMzk1NzIhNW0yITFzZW4hMnNlZ1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25zOyIsImltcG9ydCBkcmlua3MgZnJvbSBcIi4vZHJpbmtzLmpzXCI7XG5cbmNvbnN0IFByaWNlc01lbnUgPSAoKCkgPT5cbntcbiAgY29uc3QgQ3JlYXRlUHJpY2VzTWVudVdpbmRvdyA9ICgpID0+XG4gIHtcbiAgICBjb25zdCBtZW51V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXdpbmRvd1wiKTtcbiAgICBcbiAgICAoZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICBjb25zdCBfX21lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG4gICAgICBfX21lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFpbkRpdi5pZCA9IFwicHJpY2VzLXdpbmRvd1wiO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGVhZGVyLmlkID0gXCJwcmljZXMtaGVhZGVyXCI7XG4gICAgICBjb25zdCBoZWFkZXJIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGhlYWRlckgyLnRleHRDb250ZW50ID0gXCJEcmlua1wiO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckgyKTtcbiAgICAgIGNvbnN0IGhlYWRlclByaWNlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBoZWFkZXJQcmljZUgyLnRleHRDb250ZW50ID0gXCJQcmljZVwiO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclByaWNlSDIpO1xuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyaW5rcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZHJpbmtcIik7XG5cbiAgICAgICAgbGV0IG5hbWVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgbmFtZUgyLmNsYXNzTGlzdC5hZGQoXCJkcmluay1uYW1lXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZUgyKTtcblxuICAgICAgICBsZXQgcHJpY2VIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgcHJpY2VIMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIilcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaWNlSDIpO1xuXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICAgIG1lbnVXaW5kb3cuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgX2RyaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmlua1wiKSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmlua3MubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIF9kcmlua3NbaV0ucXVlcnlTZWxlY3RvcihcIi5kcmluay1uYW1lXCIpLnRleHRDb250ZW50ID0gZHJpbmtzW2ldLm5hbWU7XG4gICAgICAgIF9kcmlua3NbaV0ucXVlcnlTZWxlY3RvcihcIi5wcmljZVwiKS50ZXh0Q29udGVudCA9IGRyaW5rc1tpXS5wcmljZTtcbiAgICAgIH1cbiAgICB9KSgpXG4gIH1cblxuICByZXR1cm4geyBDcmVhdGVQcmljZXNNZW51V2luZG93IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzTWVudS5DcmVhdGVQcmljZXNNZW51V2luZG93OyIsImNvbnN0IFJldmlldyA9IChyZXZpZXcsIG5hbWUpID0+XG57XG4gIHJldHVybiB7IHJldmlldywgbmFtZX1cbn1cbmNvbnN0IGFobWVkUmV2aWV3ID0gUmV2aWV3KFwiN2x3IG5layBlbCBzcmE3YSBicyBtNCBhN3NuIDdhZ2EgNHJidGhhIGYgZWwgZG55YSBmYW0/XCIsIFwiLUFobWVkIEtoYWxlZFwiKTtcbmNvbnN0IG1vYXpSZXZpZXcgPSBSZXZpZXcoXCJlbCBuZXNjYWZlIGJrYW0/XCIsIFwiLU1vYXogTW9oYW1lZFwiKTtcbmNvbnN0IGFiZGVscmFobWFuUmV2aWV3ID0gUmV2aWV3KFwiaHlhIDJod2EgdDJlbGEgZmFtIGZhIGRlIDdhZ2EgbmRlZmEgeTNueSwgdmFsdWUgZm9yIG1vbmV5IHcga2VkYSBiMmFcIiwgXCItQWJkZWxyYWhtYW4gRWwtU2hhcmthd3lcIik7XG5jb25zdCBzaGFoZFJldmlldyA9IFJldmlldyhcImh3YSA3ZWx3IGJzIG1za3IgZWwgc3JhN2FcIiwgXCItU2hhaGQgTW9oYW1lZFwiKTtcblxuY29uc3QgcmV2aWV3cyA9IFthaG1lZFJldmlldywgbW9helJldmlldywgYWJkZWxyYWhtYW5SZXZpZXcsIHNoYWhkUmV2aWV3XTtcblxuY29uc3QgUmV2aWV3cyA9ICgoKSA9Plxue1xuICBjb25zdCBDcmVhdGVSZXZpZXdzV2luZG93ID0gKCkgPT5cbiAge1xuICAgIGNvbnN0IG1lbnVXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtd2luZG93XCIpO1xuICAgIFxuICAgIChmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgIGNvbnN0IF9fcmV2aWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmV2aWV3c1wiKTtcbiAgICAgIF9fcmV2aWV3cy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpXG4gICAge1xuICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtYWluRGl2LmlkID0gXCJyZXZpZXdzLXdpbmRvd1wiO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcbiAgICAgIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicmV2aWV3XCIpO1xuXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgICAgbWVudVdpbmRvdy5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICBjb25zdCBfcmV2aWV3cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdcIikpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcmV2aWV3cy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgX3Jldmlld3NbaV0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQgPSByZXZpZXdzW2ldLnJldmlldztcbiAgICAgICAgX3Jldmlld3NbaV0ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPSByZXZpZXdzW2ldLm5hbWU7XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG5cbiAgcmV0dXJuIHsgQ3JlYXRlUmV2aWV3c1dpbmRvdyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3MuQ3JlYXRlUmV2aWV3c1dpbmRvdzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVSZXZpZXdzV2luZG93IGZyb20gXCIuL3Jldmlld3MuanNcIjtcbmltcG9ydCBDcmVhdGVQcmljZXNNZW51V2luZG93IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBDcmVhdGVDb250YWN0V2luZG93IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbWFpblBhZ2UgPSAoZnVuY3Rpb24gKClcbntcbiAgY29uc3QgY3JlYXRlTWFpblBhZ2UgPSAoKCkgPT5cbiAge1xuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgoKSA9PlxuICAgIHtcbiAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgICBuYXZCYXIuaWQgPSBcIm5hdmJhclwiO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmlkID0gXCJpbWctbG9nby1kaXZcIjtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWcuc3JjID0gXCIuL2ltYWdlcy9CQ1MtTG9nby1CbGFuay5wbmdcIlxuICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBoMi50ZXh0Q29udGVudCA9IFwiQnJhemlsbGlhbiBDb2ZmZWUgU3RvcmVzXCI7XG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgfSkoKVxuXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+XG4gICAge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgaDEudGV4dENvbnRlbnQgPSBcIkJyYXppbGxpYW4gQ29mZmVlIFN0b3JlcyBTaW5jZSAxOTI5XCI7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZU1lbnVCYXIgPSAoKCkgPT5cbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcImE3YVwiKTtcbiAgICAgIGNvbnN0IG1lbnViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVudWJhci5pZCA9IFwibWVudWJhclwiO1xuXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgICAgY29uc3QgcmV2aWV3cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHJldmlld3MuY2xhc3NMaXN0LmFkZChcIm1lbnVFbGVtZW50XCIpO1xuICAgICAgcmV2aWV3cy50ZXh0Q29udGVudCA9IFwiUmV2aWV3c1wiO1xuICAgICAgcmV2aWV3cy5pZCA9IFwicmV2aWV3c1wiO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQocmV2aWV3cyk7XG5cbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51RWxlbWVudFwiKTtcbiAgICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICAgIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibWVudUVsZW1lbnRcIik7XG4gICAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCJcbiAgICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgICBtZW51YmFyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51YmFyKTtcblxuICAgICAgY29uc3QgbWVudVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZW51V2luZG93LmlkID0gXCJtZW51LXdpbmRvd1wiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51V2luZG93KTtcbiAgICB9KSgpO1xuICB9KSgpO1xuXG4gIGNvbnN0IF9tZW51V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXdpbmRvd1wiKTtcbiAgY29uc3QgX21lbnVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudUVsZW1lbnRcIik7XG4gIGNvbnN0IENsZWFyVW5kZXJsaW5lID0gKCkgPT4gX21lbnVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuXG4gIGNvbnN0IENsZWFyTWVudVdpbmRvdyA9ICgpID0+XG4gIHtcbiAgICBfbWVudVdpbmRvdy5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IEFkZEV2ZW50TGlzdGVuZXJzID0gKCgpID0+XG4gIHtcbiAgICBfbWVudUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PlxuICAgICAge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgQ2xlYXJVbmRlcmxpbmUoKTtcbiAgICAgICAgICBDbGVhck1lbnVXaW5kb3coKTtcblxuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudC50ZXh0Q29udGVudClcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwiUmV2aWV3c1wiOlxuICAgICAgICAgICAgICBDcmVhdGVSZXZpZXdzV2luZG93KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgICAgICBDcmVhdGVQcmljZXNNZW51V2luZG93KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgQ3JlYXRlQ29udGFjdFdpbmRvdygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0pKCk7XG59KSgpXG5cbkNyZWF0ZVJldmlld3NXaW5kb3coKTsiXSwic291cmNlUm9vdCI6IiJ9