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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOMNodeCollection.js":
/*!**********************************!*\
  !*** ./src/DOMNodeCollection.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  \n  constructor (array) {\n    this.array = array;\n  }\n\n  html(string) {\n    if (string) {\n      this.array.forEach( (el) => { \n        el.innerHTML = string;\n      });\n    } else {\n      return this.array[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.array.forEach( (el) => {\n      el.innerHTML = \"\";\n    });\n  }\n\n  append(arg) {\n    this.array.forEach((el) => {\n      el.innerHTML += arg;\n    });\n  }\n\n  attr(attribute, value) {\n    for (let i = 0; i < this.array.length; i++) {\n      if (!value) return this.array[i].getAttribute(attribute);\n      if (value) return this.array[i].setAttribute(attribute,value);\n    }\n  }\n\n  addClass(className) {\n    this.array.forEach((el) => {\n      el.className = className;\n    });\n  }\n\n  removeClass(className) {\n    this.array.forEach((el) => {\n      el.removeAttribute(className);\n    });\n  }\n\n  children() {\n    let childrenArr = [];\n    \n    for (let i = 0; i < this.array.length; i++) {\n      // console.log(this.array[i].children);\n      let tempChild = this.array[i].children;\n      childrenArr.push(...tempChild);\n    }\n    return new DOMNodeCollection(childrenArr);\n  }\n\n  parent() {\n    let parentArr = [];\n    for (let i = 0; i < this.array.length; i++) {\n      parentArr.push(this.array[i].parentNode);\n    }\n    return new DOMNodeCollection(parentArr);\n  }\n\n  find(arg) {\n    const result = [];\n    this.array.forEach((el) => {\n      result.push(el.querySelectorAll(arg));\n    })\n    return new DOMNodeCollection(result);\n  }\n\n  remove() {\n    this.array.forEach((el) => {\n      el.parentNode.removeChild(el);\n    });\n  }\n\n  on(action,callback) {\n    this.array.forEach((el) => {\n      el.actionEvent = callback;\n      el.addEventListener(action, el.actionEvent);\n    })\n  }\n\n  off(action) {\n    this.array.forEach((el) => {\n      el.removeEventListener(action, el.actionEvent);\n    })\n  }\n\n  \n\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n\n//# sourceURL=webpack:///./src/DOMNodeCollection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./DOMNodeCollection.js */ \"./src/DOMNodeCollection.js\");\n\nwindow.$l = (arg) => {\n  let funcQueue = [];\n  if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n   } else if (typeof arg === \"string\") {\n     console.log(\"here\");\n    return getNodes(arg);\n  } if (typeof arg === \"function\") {\n    funcQueue.push(arg);\n    document.addEventListener('DOMContentLoaded', (event)=>{\n      for (let i = 0; i < funcQueue.length; i++) {\n        funcQueue[i]();\n      }\n    });\n  }\n};\n\nfunction getNodes(arg) {\n  let element = document.querySelectorAll(arg);\n  let elementArray = Array.from(element);\n  return new DOMNodeCollection(elementArray);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });