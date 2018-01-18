(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ckjs", [], factory);
	else if(typeof exports === 'object')
		exports["ckjs"] = factory();
	else
		root["ckjs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mediator = void 0;

/**
 * Authored by Milan van As (CodingKorner)
 * Released under the MIT license
 *
 * Mediator pattern taken from https://gist.github.com/TCotton/d85e879fdbf856ddae3511652f9260f0
 * With a bit of own magic
 */
var Mediator = function () {
  /**
   * @description Subscribe to an event, supply a callback to be executed when that event is published
   * @param event {string}
   * @param fn {function}
   * @returns {subscribe} {object}
   */
  var subscribe = function subscribe(event, fn) {
    // Multiple events
    if (Array.isArray(event)) {
      event.forEach(function (singleStore) {
        subscribe(singleStore, fn);
      });
    } else {
      // Single event
      // If the event hasnt been subscribed to before, initialze the event store
      if (!Mediator.events[event]) {
        Mediator.events[event] = [];
      } // Add the new callback to the event list


      Mediator.events[event].push({
        context: this,
        callback: fn
      });
    }

    return this;
  };
  /**
   * @description Publish an event to the rest of the application
   * @param event {string}
   * @param args {object}
   * @returns {*||boolean}
   */


  var publish = function publish(event) {
    // If this event doesnt exist
    if (!Mediator.events[event]) {
      return false;
    } // Loop through the event lists and callback in context


    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Mediator.events[event][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _value = _step.value;
        var subscription = _value;
        subscription.callback.apply(subscription.context, args);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return this;
  };
  /**
   * @description a function to `install` the
   * subscribe and publish functions to other objects
   * @param obj
   * @returns undefined
   */


  var installTo = function installTo(obj) {
    obj.subscribe = subscribe;
    obj.publish = publish;
  };

  return {
    events: {},
    publish: publish,
    subscribe: subscribe,
    installTo: installTo
  };
}();

exports.Mediator = Mediator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Mediator", {
  enumerable: true,
  get: function get() {
    return _Mediator.Mediator;
  }
});
Object.defineProperty(exports, "Dispatch", {
  enumerable: true,
  get: function get() {
    return _Dispatcher.Dispatch;
  }
});
Object.defineProperty(exports, "DefaultModule", {
  enumerable: true,
  get: function get() {
    return _DefaultModule.DefaultModule;
  }
});

var _Mediator = __webpack_require__(0);

var _Dispatcher = __webpack_require__(2);

var _DefaultModule = __webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dispatch = void 0;

var _this = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Authored by Milan van As (CodingKorner)
 * Released under the MIT license
 *
 * Dispatcher
 *
 * Use:
 * Dispatch([Class1, Class2, Class3]);
 * Dispatch(Class1)
 * Dispatch({class1: Class1, class2: Class2, class3: Class3});
 */
var Dispatch = function Dispatch(modules) {
  if (Array.isArray(modules)) {
    modules.forEach(function (module, i) {
      new modules[i]();
    });
  } else if (_typeof(modules) === 'object') {
    Object.getOwnPropertyNames(modules).foreach(function (module) {
      new modules[module]();
    });
  } else if (typeof modules === 'function') {
    var holder = {
      c: modules
    };
    new holder.c();
  }

  return _this;
};

exports.Dispatch = Dispatch;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultModule = void 0;

var _Mediator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultModule =
/**
 * Constructor
 */
function DefaultModule() {
  _classCallCheck(this, DefaultModule);

  // Give this class access to the mediator
  _Mediator.Mediator.installTo(this); // If this class has the subscriptions function, run it


  if (typeof this.subscriptions === 'function') {
    this.subscriptions();
  }
};

exports.DefaultModule = DefaultModule;

/***/ })
/******/ ]);
});