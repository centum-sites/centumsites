module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3hw":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ax_container": "Carousel_ax_container__3A7wr",
	"ax_carousel": "Carousel_ax_carousel__1LT6h",
	"ax_back": "Carousel_ax_back__2W8_u",
	"ax_next": "Carousel_ax_next__3Cr8A",
	"ax_dots": "Carousel_ax_dots__1wPNO",
	"ax_carousel_dkt": "Carousel_ax_carousel_dkt__2TMmT",
	"ax_carousel_tablet": "Carousel_ax_carousel_tablet__3BDOM",
	"ax_carousel_mob": "Carousel_ax_carousel_mob__PVs0s"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("N7jp");
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);





const Footer = props => {
  const formatPhone = phone => {
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const formatedPhone = formatPhone(props.phone);
  const year = new Date().getFullYear();

  const faxNumber = () => {
    if (props.fax) {
      const formatedFax = formatPhone(props.fax);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_contact,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "/assets/fax.svg"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
            children: "Fax"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: formatedFax
          })]
        })]
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("footer", {
    className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_container,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_content,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_logo,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: props.logo,
            alt: props.brokerage
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_contact,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/assets/paper-plane.svg"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                children: "Email"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: props.email
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_contact,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/assets/mobile-phone.svg"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                children: "Phone"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: formatedPhone
              })]
            })]
          }), faxNumber(), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_contact,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/assets/location-pin.svg"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                children: "Address"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: props.address
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_footer_social,
          children: [props.facebook ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: props.facebook,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/assets/facebook.svg",
                alt: "facebook"
              }), " facebook"]
            })
          }) : '', props.instagram ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: props.instagram,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/assets/instagram.svg",
                alt: "instagram"
              }), " instagram"]
            })
          }) : '', props.linkedin ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: props.linkedin,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/assets/linkedin.svg",
                alt: "linkedin"
              }), " linkedin"]
            })
          }) : '', props.twitter ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: props.twitter,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/assets/twitter.svg",
                alt: "twitter"
              }), " twitter"]
            })
          }) : '', props.youtube ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: props.youtube,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/assets/youtube.svg",
                alt: "youtube"
              }), " youtube"]
            })
          }) : '']
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ax_copyright,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: [" Proud Member of the Centum Network. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          children: ["\xA9 ", year, " Centum Financial Group Inc."]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "CIUX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("E48L");
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);



const Button = props => {
  const colorClass = () => {
    return props.color === 'highlight' ? _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_highlight : _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_base;
  };

  const centeredClass = () => {
    return props.isCentered ? _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_centered : '';
  };

  const wideClass = () => {
    return props.isWide ? _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_wide : '';
  };

  const blank = () => {
    return props.blank ? '_blank' : '_self';
  };

  const sizeClass = () => {
    switch (props.sizing) {
      case 'small':
        return _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_small;

      case 'medium':
        return _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_medium;

      case 'large':
        return _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_large;

      case 'xlarge':
        return _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_xlarge;

      default:
        return _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn_medium;
    }
  };

  if (props.isLink) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: props.linkPath,
      className: `${_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn} ${sizeClass()} ${colorClass()} ${centeredClass()} ${wideClass()}}`,
      target: blank(),
      children: props.label
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    className: `${_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ax_btn} ${sizeClass()} ${colorClass()} ${centeredClass()} ${wideClass()}}`,
    children: props.label
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "E48L":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ax_container": "Button_ax_container__3Beyo",
	"ax_btn": "Button_ax_btn__12Ry2",
	"ax_btn_small": "Button_ax_btn_small__9k6WR",
	"ax_btn_medium": "Button_ax_btn_medium__3BGDl",
	"ax_btn_large": "Button_ax_btn_large__3_h2E",
	"ax_btn_xlarge": "Button_ax_btn_xlarge__1KXnu",
	"ax_btn_highlight": "Button_ax_btn_highlight__26DU4",
	"ax_btn_wide": "Button_ax_btn_wide__1oBLu",
	"ax_btn_centered": "Button_ax_btn_centered__1xHoF"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GITI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ax_container": "Home_ax_container__1Ufcv",
	"ax_banner": "Home_ax_banner__34Atx",
	"ax_banner_info": "Home_ax_banner_info__3ZXoP",
	"ax_text_section": "Home_ax_text_section__3Pqlo",
	"ax_specialties": "Home_ax_specialties__uPNWA",
	"ax_calculator": "Home_ax_calculator__iNDU2",
	"ax_numbers": "Home_ax_numbers__1v4Pg",
	"ax_rate_table": "Home_ax_rate_table__3QBAM",
	"ax_calculator_cta": "Home_ax_calculator_cta__2SWmW",
	"ax_presentation": "Home_ax_presentation__BAGWJ",
	"ax_presentation_text": "Home_ax_presentation_text__tFpGD",
	"ax_presentation_photo": "Home_ax_presentation_photo__3-bqc",
	"ax_map": "Home_ax_map__36eKm",
	"ax_map_address": "Home_ax_map_address__2afrp"
};


/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "N7jp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ax_container": "Footer_ax_container__3vQcP",
	"ax_footer": "Footer_ax_footer__CHV73",
	"ax_footer_content": "Footer_ax_footer_content__1nsWD",
	"ax_footer_logo": "Footer_ax_footer_logo__1BPZh",
	"ax_footer_contact": "Footer_ax_footer_contact__1DGV5",
	"ax_footer_social": "Footer_ax_footer_social__7kHsn",
	"ax_copyright": "Footer_ax_copyright__2vDkk"
};


/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ pages_getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./utils/currentUser.js
var currentUser = __webpack_require__("jVWN");

// EXTERNAL MODULE: ./components/Navbar.js + 1 modules
var Navbar = __webpack_require__("zYID");

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__("CIUX");

// CONCATENATED MODULE: ./components/RateTable.js



const RateTable = props => {
  console.log('MY RATES: ', props.rates[0].tableitem);
  const items = props.rates[0].tableitem;
  const RateItems = items.map((item, index) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
        children: item.years
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
        children: item.ourRate
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
        children: item.bankRate
      })]
    }, index);
  });
  const TableItems = RateItems;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
          children: "Term"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
          children: "Our Rate"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
          children: "Bank Rate"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
      children: TableItems
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tfoot", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
          colSpan: "3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Updated: Feb 26"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "Rates may vary between geographic regions and the posted rates on this website may not be available in your area. Please contact your local CENTUM office for more details."
          })]
        })
      })
    })]
  });
};

const getStaticProps = async () => {
  const data = await axios.get(`http://localhost:1338/rates`).then(res => {
    console.log('RES: ', res);
    const rates = res.data;
    return {
      revalidate: 1,
      props: {
        rates
      }
    };
  }).catch(error => {
    console.log(error);
  });
  return data;
};
/* harmony default export */ var components_RateTable = (RateTable);
// EXTERNAL MODULE: external "pure-react-carousel"
var external_pure_react_carousel_ = __webpack_require__("vPRl");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// EXTERNAL MODULE: ./node_modules/pure-react-carousel/dist/react-carousel.es.css
var react_carousel_es = __webpack_require__("hmtA");

// EXTERNAL MODULE: ./styles/Carousel.module.scss
var Carousel_module = __webpack_require__("/3hw");
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);

// CONCATENATED MODULE: ./components/CarouselSpecialties.js








const CarouselSpecialties = props => {
  let carousel = props.carouselData;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Carousel_module_default.a.ax_carousel,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_pure_react_carousel_["CarouselProvider"], {
      className: Carousel_module_default.a.ax_carousel_dkt,
      naturalSlideWidth: 100,
      naturalSlideHeight: 125,
      visibleSlides: 3,
      totalSlides: 9,
      infinite: true,
      isPlaying: true,
      isIntrinsicHeight: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["Slider"], {
        children: carousel.map((item, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_pure_react_carousel_["Slide"], {
            index: index,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: item.image.url,
              alt: item.title,
              title: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: item.description
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              sizing: "medium",
              color: "highlight",
              isCentered: true,
              isLink: true,
              linkPath: props.appLink,
              label: "Get Started",
              blank: true
            })]
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["ButtonBack"], {
        className: Carousel_module_default.a.ax_back
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["ButtonNext"], {
        className: Carousel_module_default.a.ax_next
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["DotGroup"], {
        className: Carousel_module_default.a.ax_dots,
        showAsSelectedForCurrentSlideOnly: true
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["CarouselProvider"], {
      className: Carousel_module_default.a.ax_carousel_tablet,
      naturalSlideWidth: 100,
      naturalSlideHeight: 125,
      visibleSlides: 2,
      totalSlides: 9,
      infinite: true,
      isPlaying: true,
      isIntrinsicHeight: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["Slider"], {
        children: carousel.map((item, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_pure_react_carousel_["Slide"], {
            index: index,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: item.image.url,
              alt: item.title,
              title: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: item.description
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              sizing: "medium",
              color: "highlight",
              isCentered: true,
              isLink: true,
              linkPath: props.appLink,
              label: "Get Started",
              blank: true
            })]
          }, index);
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["CarouselProvider"], {
      className: Carousel_module_default.a.ax_carousel_mob,
      naturalSlideWidth: 100,
      naturalSlideHeight: 125,
      visibleSlides: 1,
      totalSlides: 9,
      infinite: true,
      isPlaying: true,
      isIntrinsicHeight: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_pure_react_carousel_["Slider"], {
        children: carousel.map((item, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_pure_react_carousel_["Slide"], {
            index: index,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: item.image.url,
              alt: item.title,
              title: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: item.description
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              sizing: "medium",
              color: "highlight",
              isCentered: true,
              isLink: true,
              linkPath: props.appLink,
              label: "Get Started",
              blank: true
            })]
          }, index);
        })
      })
    })]
  });
};

/* harmony default export */ var components_CarouselSpecialties = (CarouselSpecialties);
// CONCATENATED MODULE: ./components/GoogleMap.js


const GoogleMap = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("iframe", {
    src: props.embedSrc,
    width: "100%",
    height: "450",
    frameBorder: "0",
    allowFullScreen: "",
    "aria-hidden": "false",
    tabIndex: "0"
  });
}; //https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7093.564827594488!2d-114.09729984271256!3d51.05393908409718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fea1ba82deb%3A0xa52b9002ec27e690!2sAxiom%20Mortgage%20Solutions!5e0!3m2!1sen!2sca!4v1607994365135!5m2!1sen!2sca


/* harmony default export */ var components_GoogleMap = (GoogleMap);
// EXTERNAL MODULE: ./components/Markdown.js
var Markdown = __webpack_require__("wR4/");

// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__("GITI");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./pages/index.js














const Home = props => {
  const page = props.page;
  const user = props.user[0];
  console.log(user);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar["a" /* default */], {
      faviconURL: user.siteIcon.url,
      logo: user.logoHeader.url,
      logo2: user.hasLogo2 ? user.logoHeader2.url : '',
      siteTitle: `${user.firstname} ${user.lastname} - Mortgage Broker`,
      email: user.email,
      phone: user.phone,
      showWhatsAppButton: user.whatsapp
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("figure", {
      className: Home_module_default.a.ax_banner,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Home_module_default.a.ax_container,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Home_module_default.a.ax_banner_info,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: page.banner.title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: page.banner.subtitle
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            sizing: "large",
            color: "highlight",
            isLink: true,
            linkPath: user.applicationLink,
            label: "Apply Now",
            blank: true
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: Home_module_default.a.ax_text_section,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Home_module_default.a.ax_container,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Hi. We're so glad you stopped by!"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Markdown["a" /* default */], {
          children: page.intro.description
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: `${Home_module_default.a.ax_specialties} ${Home_module_default.a.ax_container}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        children: "Our Specialties"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Home_module_default.a.ax_container,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CarouselSpecialties, {
          carouselData: page.features,
          appLink: user.applicationLink
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: Home_module_default.a.ax_calculator,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Home_module_default.a.ax_container,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Home_module_default.a.ax_numbers,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Home_module_default.a.ax_rate_table,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Lowest Rates* in Canada"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_RateTable, {
              rates: props.rates
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Home_module_default.a.ax_calculator_cta,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: page.calculator.title
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                sizing: "large",
                color: "highlight",
                isLink: true,
                linkPath: "/mortgage-calculators",
                label: "Go To Calculators"
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: Home_module_default.a.ax_presentation,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Home_module_default.a.ax_container,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Home_module_default.a.ax_presentation_text,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: page.presentation.title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Markdown["a" /* default */], {
            children: page.presentation.description
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["That's the ", user.brokerage, " advantage!"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            sizing: "large",
            color: "highlight",
            isLink: true,
            linkPath: user.applicationLink,
            label: "Apply Now",
            blank: true
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Home_module_default.a.ax_presentation_photo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: user.photo.url,
            alt: user.firstname
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
            children: [user.firstname, " ", user.lastname]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: user.position
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: user.license ? user.license : ''
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: Home_module_default.a.ax_map,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Home_module_default.a.ax_container,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: page.map.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_GoogleMap, {
          embedSrc: user.mapEmbedSrc
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Home_module_default.a.ax_map_address,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: user.address
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {
      logo: user.logoFooter.url,
      email: user.email,
      address: user.address,
      phone: user.phone,
      fax: user.fax ? user.fax : false,
      facebook: user.facebook,
      instagram: user.instagram,
      twitter: user.twitter,
      linkedin: user.linkedin,
      youtube: user.youtube
    })]
  });
};

const pages_getStaticProps = async () => {
  const data = external_axios_default.a.get(`https://centumapi.herokuapp.com/page-home`).then(res => {
    return res.data;
  }).then(async page => {
    const {
      data
    } = await external_axios_default.a.get(`https://centumapi.herokuapp.com/rates`);
    const rates = data;
    return {
      page,
      rates
    };
  }).then(async info => {
    const {
      data
    } = await external_axios_default.a.get(`https://centumapi.herokuapp.com/users?email_eq=${currentUser["a" /* default */].email}`);
    const user = data;
    const {
      page,
      rates
    } = info;
    return {
      revalidate: 1,
      props: {
        page,
        rates,
        user
      }
    };
  }).catch(error => {
    console.log(error);
  });
  return data;
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XUTK":
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hmtA":
/***/ (function(module, exports) {



/***/ }),

/***/ "jVWN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const currentUser = {
  email: 'yourmrtgpro@gmail.com'
};
/* harmony default export */ __webpack_exports__["a"] = (currentUser);

/***/ }),

/***/ "jXWh":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ax_container": "Navbar_ax_container__3_bd9",
	"ax_loading_bar": "Navbar_ax_loading_bar__3JnVl",
	"ax_loading_peg": "Navbar_ax_loading_peg__2YJS8",
	"ax_loading_spinner": "Navbar_ax_loading_spinner__2yuut",
	"ax_loading_spinner_icon": "Navbar_ax_loading_spinner_icon__3RDoa",
	"ax_overlay": "Navbar_ax_overlay__dSDhN",
	"ax_overlay_open": "Navbar_ax_overlay_open__Q_UDc",
	"ax_header": "Navbar_ax_header__9dQO0",
	"ax_topbar": "Navbar_ax_topbar__3KxOO",
	"ax_navbar": "Navbar_ax_navbar__3kYoL",
	"ax_logo": "Navbar_ax_logo__1i--z",
	"ax_logo_2": "Navbar_ax_logo_2__2cFEU",
	"ax_menu": "Navbar_ax_menu__tm6bs",
	"ax_has_submenu": "Navbar_ax_has_submenu__1_I8t",
	"ax_navbar_2_logos": "Navbar_ax_navbar_2_logos__31pwi",
	"ax_megamenu": "Navbar_ax_megamenu__h6wsp",
	"ax_close_megamenu": "Navbar_ax_close_megamenu__IEjNW",
	"ax_megamenu_close": "Navbar_ax_megamenu_close__3e-Zb",
	"ax_megamenu_open": "Navbar_ax_megamenu_open__7zIRD",
	"ax_btn_menu_mob": "Navbar_ax_btn_menu_mob__1hsCT",
	"ax_btn_menu_mob_open": "Navbar_ax_btn_menu_mob_open__2rir3",
	"ax_mobile_menu": "Navbar_ax_mobile_menu__2U3hc",
	"ax_has_submenu_mob": "Navbar_ax_has_submenu_mob__2wPLn",
	"ax_submenu_mob": "Navbar_ax_submenu_mob__1zoq4",
	"ax_submenu_mob_inner": "Navbar_ax_submenu_mob_inner__1fFy5",
	"ax_menu_mob_open": "Navbar_ax_menu_mob_open__2na3Y",
	"ax_submenu_mob_open": "Navbar_ax_submenu_mob_open__H9dK_",
	"ax_hide_btn_menu_mob": "Navbar_ax_hide_btn_menu_mob__249XI"
};


/***/ }),

/***/ "kj2i":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ax_container": "Whatsapp_ax_container__2ozu4",
	"ax_whatsapp_button": "Whatsapp_ax_whatsapp_button__HdKFX"
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vPRl":
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ "wR4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XUTK");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);


const md = new markdown_it__WEBPACK_IMPORTED_MODULE_1___default.a();

const Markdown = props => {
  const mdToHtml = md.render(props.children);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    dangerouslySetInnerHTML: {
      __html: mdToHtml
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Markdown);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zYID":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: customLoader

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__("jXWh");
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./styles/Whatsapp.module.scss
var Whatsapp_module = __webpack_require__("kj2i");
var Whatsapp_module_default = /*#__PURE__*/__webpack_require__.n(Whatsapp_module);

// CONCATENATED MODULE: ./components/WhatsAppButton.js




const WhatsAppButton = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: `https://api.whatsapp.com/send?phone=${props.phone}`,
      target: "_blank",
      className: Whatsapp_module_default.a.ax_whatsapp_button,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/assets/whatsapp.svg",
        alt: "Chat in WhatsApp"
      })
    })
  });
};

/* harmony default export */ var components_WhatsAppButton = (WhatsAppButton);
// CONCATENATED MODULE: ./components/Navbar.js










const customLoader = () => {
  return `
      <div class="${Navbar_module_default.a.ax_loading_bar} bar" role="bar">
        <div class="${Navbar_module_default.a.ax_loading_peg} peg">
        </div>
      </div>
      <div class="${Navbar_module_default.a.ax_loading_spinner} spinner" role="spinner">
        <div class="${Navbar_module_default.a.ax_loading_spinner_icon} spinner-icon">
        </div>
      </div>
   `;
};
external_nprogress_default.a.configure({
  template: customLoader()
});
router_default.a.events.on('routeChangeStart', url => {
  external_nprogress_default.a.start();
});
router_default.a.events.on('routeChangeComplete', () => external_nprogress_default.a.done());
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done());

const Navbar = props => {
  const {
    0: megaMenu,
    1: setMegaMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: mobileMenu,
    1: setMobileMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: mobileSubmenu,
    1: setMobileSubmenu
  } = Object(external_react_["useState"])(false);

  const handleMegaMenu = () => {
    let isOpen = !megaMenu;
    setMegaMenu(isOpen);
  };

  const handleMobileMenu = () => {
    let isMobileOpen = !mobileMenu;
    setMobileMenu(isMobileOpen);
  };

  const handleMobileSubmenu = () => {
    let isMobileSubmenuOpen = !mobileSubmenu;
    setMobileSubmenu(isMobileSubmenuOpen);
  };

  router_default.a.events.on('routeChangeStart', () => {
    handleMegaMenu();
  });

  const formatPhone = () => {
    const phone = props.phone;
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const formatedPhone = formatPhone();
  console.log(props.faviconURL);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        href: props.faviconURL
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.siteTitle
      })]
    }), props.showWhatsAppButton ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_WhatsAppButton, {
      phone: props.phone
    }) : '', /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${Navbar_module_default.a.ax_overlay} ${megaMenu ? Navbar_module_default.a.ax_overlay_open : ''}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
      className: Navbar_module_default.a.ax_header,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
        className: Navbar_module_default.a.ax_topbar,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Email: "
          }), props.email, "  ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Phone: "
          }), formatedPhone]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
        className: `${Navbar_module_default.a.ax_navbar} ${props.logo2 ? Navbar_module_default.a.ax_navbar_2_logos : ''}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Navbar_module_default.a.ax_logo,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: props.logo,
            layout: "fill"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
          className: Navbar_module_default.a.ax_menu,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: "Home"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/about",
            children: "About"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/mortgage-process",
            children: "Mortgage Process"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/mortgage-calculators",
            children: "Calculators"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: Navbar_module_default.a.ax_has_submenu,
            onClick: handleMegaMenu,
            children: "Learn"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/faq",
            children: "FAQ"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/contact",
            children: "Contact"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Navbar_module_default.a.ax_logo_2,
          children: props.logo2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: props.logo2,
            layout: "fill"
          }) : ''
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${Navbar_module_default.a.ax_megamenu} ${megaMenu ? Navbar_module_default.a.ax_megamenu_open : Navbar_module_default.a.ax_megamenu_close} `,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Learning Centre"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/about-learning-centre",
          children: "About Learning Centre"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/the-mortgage-process-explained",
          children: "The Mortgage Process"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/why-use-a-mortgage-broker",
          children: "Why Use a Mortgage Broker"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/mortgage-101-the-basics",
          children: "Mortgage 101"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/costs",
          children: "Costs"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/whats-a-rate-hold",
          children: "What's a Rate Hold"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/home-fire-insurance",
          children: "Home (Fire) Insurance"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/mortgage-payment-protection-insurance",
          children: "Mortgage (Payment Protection) Insurance"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/mortgage-default-insurance",
          children: "Mortgage Default Insurance"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/the-mortgage-payment",
          children: "The Mortgage Payment"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/payment-strategy-extra-payments",
          children: "Payment Strategy \u2013 Extra Payments"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/credit-basics",
          children: "Credit Basics"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Mortgage Solutions"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/finding-the-right-solution",
          children: "Finding the Right Solution"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/mortgage-renewals",
          children: "Mortgage Renewals"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/mortgage-refinancing",
          children: "Mortgage Refinancing"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/home-equity-loans",
          children: "Home Equity Loans"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/self-employed-loans",
          children: "Self Employed Loans"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/purchase-plus-improvements",
          children: "Purchase Plus Improvements"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/posts/debt-consolidation",
          children: "Debt Consolidation"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: Navbar_module_default.a.ax_close_megamenu,
        onClick: handleMegaMenu,
        children: "Close"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${Navbar_module_default.a.ax_btn_menu_mob} ${mobileMenu ? Navbar_module_default.a.ax_btn_menu_mob_open : ''} ${mobileSubmenu ? Navbar_module_default.a.ax_hide_btn_menu_mob : ''}`,
      onClick: handleMobileMenu,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${Navbar_module_default.a.ax_mobile_menu} ${mobileMenu ? Navbar_module_default.a.ax_menu_mob_open : ''} ${mobileSubmenu ? Navbar_module_default.a.ax_submenu_mob_open : ''}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: "Home"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/about",
          children: "About"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/mortgage-process",
          children: "Mortgage Process"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/mortgage-calculators",
          children: "Calculators"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          href: "#",
          className: Navbar_module_default.a.ax_has_submenu_mob,
          onClick: handleMobileSubmenu,
          children: "Learn"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${Navbar_module_default.a.ax_submenu_mob}`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: handleMobileSubmenu,
            children: "Back"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Navbar_module_default.a.ax_submenu_mob_inner,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Learning Centre"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/about-learning-centre",
              children: "About Learning Centre"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/the-mortgage-process-explained",
              children: "The Mortgage Process"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/why-use-a-mortgage-broker",
              children: "Why Use a Mortgage Broker"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/mortgage-101-the-basics",
              children: "Mortgage 101"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/costs",
              children: "Costs"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/whats-a-rate-hold",
              children: "What's a Rate Hold"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/home-fire-insurance",
              children: "Home (Fire) Insurance"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/mortgage-payment-protection-insurance",
              children: "Mortgage (Payment Protection) Insurance"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/mortgage-default-insurance",
              children: "Mortgage Default Insurance"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/the-mortgage-payment",
              children: "The Mortgage Payment"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/payment-strategy-extra-payments",
              children: "Payment Strategy \u2013 Extra Payments"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/credit-basics",
              children: "Credit Basics"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Mortgage Solutions"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/finding-the-right-solution",
              children: "Finding the Right Solution"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/mortgage-renewals",
              children: "Mortgage Renewals"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/mortgage-refinancing",
              children: "Mortgage Refinancing"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/home-equity-loans",
              children: "Home Equity Loans"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/self-employed-loans",
              children: "Self Employed Loans"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/purchase-plus-improvements",
              children: "Purchase Plus Improvements"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/posts/debt-consolidation",
              children: "Debt Consolidation"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/faq",
          children: "FAQ"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/contact",
          children: "Contact"
        })]
      })
    })]
  });
};

/* harmony default export */ var components_Navbar = __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });