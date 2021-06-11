/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById('sidebarToggle');\nconst sidebar = document.getElementById('sidebar');\nconst page = document.getElementById('page');\nconst body = document.body;\nburger.addEventListener('click', event => {\n    if( body.classList.contains('show-sidebar') ) {\n        closeSidebar();\n    }else {\n        showSidebar();\n    }\n    // burger.classList.toggle('active');\n});\nfunction showSidebar() {\n    let mask = document.createElement('div');\n    mask.classList.add('page_mask');\n    mask.addEventListener('click', closeSidebar);\n    page.appendChild(mask);\n    body.classList.add('show-sidebar');\n}\nfunction closeSidebar() {\n    body.classList.remove('show-sidebar');\n    document.querySelector('.page_mask').remove();\n}\n\n//# sourceURL=webpack:///./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal_close');\r\nconst modal = document.querySelectorAll('.modal');\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal-content');\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        });\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n        setTimeout(function() {\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n        \r\n    });\r\n});\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n        closeModal(currentModal);\r\n    });\r\n});\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget;\r\n        closeModal(currentModal);\r\n    });\r\n});\r\nfunction closeModal(currentModal) {\r\n    let modalContent = currentModal.querySelector('.modal-content');\r\n    modalContent.removeAttribute('style');\r\n        setTimeout(() => {\r\n            currentModal.classList.remove('show');\r\n            body.classList.remove('no-scroll');\r\n        }, 200);\r\n};\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\ntextArea.forEach(item => {\n    let textAreaH = item.offsetHeight;\n    item.addEventListener('input', event => {\n        let $this = event.target;\n        $this.style.height = textAreaH + 'px';\n        $this.style.height = $this.scrollHeight + 'px';\n    });\n});\n\n//# sourceURL=webpack:///./src/assets/js/textarea.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************************!*\
  !*** multi ./src/assets/js/mobileNav.js ./src/assets/js/modal.js ./src/assets/js/textarea.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/artem/Desktop/PersonalBlog/src/assets/js/mobileNav.js */\"./src/assets/js/mobileNav.js\");\n__webpack_require__(/*! /Users/artem/Desktop/PersonalBlog/src/assets/js/modal.js */\"./src/assets/js/modal.js\");\nmodule.exports = __webpack_require__(/*! /Users/artem/Desktop/PersonalBlog/src/assets/js/textarea.js */\"./src/assets/js/textarea.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/mobileNav.js_./src/assets/js/modal.js_./src/assets/js/textarea.js?");

/***/ })

/******/ });