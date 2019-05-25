module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0FHn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tagging":"tagging__1o__T"};

/***/ }),

/***/ "3CUW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"about":"about__2Sv7a"};

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "94oU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"dropdown__teS-4"};

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "CeLM":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function (root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

    // Support AMD
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);

    // Support vanilla script loading
  } else {
    root.randomColor = factory();
  }
})(this, function () {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  var randomColor = function randomColor(options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

      // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

      // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

      // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H, S, B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];

      options.count = null;

      while (totalColors > colors.length) {

        // Since we're generating multiple colors,
        // incremement the seed. Otherwise we'd just
        // generate the same color each time...
        if (seed && options.seed) options.seed += 1;

        colors.push(randomColor(options));
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H, S, B], options);
  };

  function pickHue(options) {

    var hueRange = getHueRange(options.hue),
        hue = randomWithin(hueRange);

    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (hue < 0) {
      hue = 360 + hue;
    }

    return hue;
  }

  function pickSaturation(hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0, 100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
    }

    return randomWithin([sMin, sMax]);
  }

  function pickBrightness(H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin) / 2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat(hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla(' + hslColor[0] + ', ' + hslColor[1] + '%, ' + hslColor[2] + '%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }
  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i + 1][0],
          v2 = lowerBounds[i + 1][1];

      if (S >= s1 && S <= s2) {

        var m = (v2 - v1) / (s2 - s1),
            b = v1 - m * s1;

        return m * S + b;
      }
    }

    return 0;
  }

  function getHueRange(colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }
    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {
          return color.hueRange;
        }
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [hue, hue];
      }
    }

    return [0, 360];
  }

  function getSaturationRange(hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo(hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue -= 360;
    }

    for (var colorName in colorDictionary) {
      var color = colorDictionary[colorName];
      if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
        return colorDictionary[colorName];
      }
    }return 'Color not found';
  }

  function randomWithin(range) {
    if (seed === null) {
      return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }
  }

  function HSVtoHex(hsv) {

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;
  }

  function defineColor(name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],
        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };
  }

  function loadColorBounds() {

    defineColor('monochrome', null, [[0, 0], [100, 0]]);

    defineColor('red', [-26, 18], [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]);

    defineColor('orange', [19, 46], [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]);

    defineColor('yellow', [47, 62], [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]);

    defineColor('green', [63, 178], [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]);

    defineColor('blue', [179, 257], [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]);

    defineColor('purple', [258, 282], [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]);

    defineColor('pink', [283, 334], [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]);
  }

  function HSVtoRGB(hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {
      h = 1;
    }
    if (h === 360) {
      h = 359;
    }

    // Rebase the h,s,v values
    h = h / 360;
    var s = hsv[1] / 100,
        v = hsv[2] / 100;

    var h_i = Math.floor(h * 6),
        f = h * 6 - h_i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        r = 256,
        g = 256,
        b = 256;

    switch (h_i) {
      case 0:
        r = v;g = t;b = p;break;
      case 1:
        r = q;g = v;b = p;break;
      case 2:
        r = p;g = v;b = t;break;
      case 3:
        r = p;g = q;b = v;break;
      case 4:
        r = t;g = p;b = v;break;
      case 5:
        r = v;g = p;b = q;break;
    }

    var result = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
    return result;
  }

  function HexToHSB(hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
        green = parseInt(hex.substr(2, 2), 16) / 255,
        blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
        delta = cMax - Math.min(red, green, blue),
        saturation = cMax ? delta / cMax : 0;

    switch (cMax) {
      case red:
        return [60 * ((green - blue) / delta % 6) || 0, saturation, cMax];
      case green:
        return [60 * ((blue - red) / delta + 2) || 0, saturation, cMax];
      case blue:
        return [60 * ((red - green) / delta + 4) || 0, saturation, cMax];
    }
  }

  function HSVtoHSL(hsv) {
    var h = hsv[0],
        s = hsv[1] / 100,
        v = hsv[2] / 100,
        k = (2 - s) * v;

    return [h, Math.round(s * v / (k < 1 ? k : 2 - k) * 10000) / 100, k / 2 * 100];
  }

  function stringToInteger(string) {
    var total = 0;
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i);
    }
    return total;
  }

  return randomColor;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "JZ8C":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 3);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var UAParser = __webpack_require__(6);

  var UA = exports.UA = new UAParser();

  var browser = exports.browser = UA.getBrowser();
  var cpu = exports.cpu = UA.getCPU();
  var device = exports.device = UA.getDevice();
  var engine = exports.engine = UA.getEngine();
  var os = exports.os = UA.getOS();
  var ua = exports.ua = UA.getUA();
  var setUA = exports.setUA = function setUA(uaStr) {
    return UA.setUA(uaStr);
  };

  var mockUserAgent = exports.mockUserAgent = function mockUserAgent(userAgent) {
    window.navigator.__defineGetter__("userAgent", function () {
      return userAgent;
    });
  };

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isYandex = exports.isEdge = exports.getUA = exports.engineVersion = exports.engineName = exports.mobileModel = exports.mobileVendor = exports.browserName = exports.browserVersion = exports.fullBrowserVersion = exports.osName = exports.osVersion = exports.isIE = exports.isOpera = exports.isSafari = exports.isFirefox = exports.isChrome = exports.isIOS = exports.isWinPhone = exports.isAndroid = exports.isBrowser = exports.isTablet = exports.isMobileOnly = exports.isMobile = exports.isChromium = exports.isMobileSafari = exports.isWearable = exports.isConsole = exports.isSmartTV = undefined;

  var _getUaData = __webpack_require__(0);

  var _types = __webpack_require__(2);

  var CHROME = _types.BROWSER_TYPES.CHROME,
      CHROMIUM = _types.BROWSER_TYPES.CHROMIUM,
      IE = _types.BROWSER_TYPES.IE,
      INTERNET_EXPLORER = _types.BROWSER_TYPES.INTERNET_EXPLORER,
      OPERA = _types.BROWSER_TYPES.OPERA,
      FIREFOX = _types.BROWSER_TYPES.FIREFOX,
      SAFARI = _types.BROWSER_TYPES.SAFARI,
      MOBILE_SAFARI = _types.BROWSER_TYPES.MOBILE_SAFARI,
      EDGE = _types.BROWSER_TYPES.EDGE,
      YANDEX = _types.BROWSER_TYPES.YANDEX;
  var MOBILE = _types.DEVICE_TYPES.MOBILE,
      TABLET = _types.DEVICE_TYPES.TABLET,
      SMART_TV = _types.DEVICE_TYPES.SMART_TV,
      BROWSER = _types.DEVICE_TYPES.BROWSER,
      WEARABLE = _types.DEVICE_TYPES.WEARABLE,
      CONSOLE = _types.DEVICE_TYPES.CONSOLE;
  var ANDROID = _types.OS_TYPES.ANDROID,
      WINDOWS_PHONE = _types.OS_TYPES.WINDOWS_PHONE,
      IOS = _types.OS_TYPES.IOS;

  var isMobileType = function isMobileType() {
    return _getUaData.device.type === MOBILE;
  };
  var isTabletType = function isTabletType() {
    return _getUaData.device.type === TABLET;
  };

  var isMobileAndTabletType = function isMobileAndTabletType() {
    switch (_getUaData.device.type) {
      case MOBILE:
      case TABLET:
        return true;
      default:
        return false;
    }
  };

  var isSmartTVType = function isSmartTVType() {
    return _getUaData.device.type === SMART_TV;
  };
  var isBrowserType = function isBrowserType() {
    return _getUaData.device.type === BROWSER;
  };
  var isWearableType = function isWearableType() {
    return _getUaData.device.type === WEARABLE;
  };
  var isConsoleType = function isConsoleType() {
    return _getUaData.device.type === CONSOLE;
  };
  var isAndroidType = function isAndroidType() {
    return _getUaData.os.name === ANDROID;
  };
  var isWinPhoneType = function isWinPhoneType() {
    return _getUaData.os.name === WINDOWS_PHONE;
  };
  var isIOSType = function isIOSType() {
    return _getUaData.os.name === IOS;
  };
  var isChromeType = function isChromeType() {
    return _getUaData.browser.name === CHROME;
  };
  var isFirefoxType = function isFirefoxType() {
    return _getUaData.browser.name === FIREFOX;
  };
  var isChromiumType = function isChromiumType() {
    return _getUaData.browser.name === CHROMIUM;
  };
  var isEdgeType = function isEdgeType() {
    return _getUaData.browser.name === EDGE;
  };
  var isYandexType = function isYandexType() {
    return _getUaData.browser.name === YANDEX;
  };
  var isSafariType = function isSafariType() {
    return _getUaData.browser.name === SAFARI || _getUaData.browser.name === MOBILE_SAFARI;
  };
  var isMobileSafariType = function isMobileSafariType() {
    return _getUaData.browser.name === MOBILE_SAFARI;
  };
  var isOperaType = function isOperaType() {
    return _getUaData.browser.name === OPERA;
  };
  var isIEType = function isIEType() {
    return _getUaData.browser.name === INTERNET_EXPLORER || _getUaData.browser.name === IE;
  };

  var getBrowserFullVersion = function getBrowserFullVersion() {
    return _getUaData.browser.major;
  };
  var getBrowserVersion = function getBrowserVersion() {
    return _getUaData.browser.version;
  };
  var getOsVersion = function getOsVersion() {
    return _getUaData.os.version ? _getUaData.os.version : "none";
  };
  var getOsName = function getOsName() {
    return _getUaData.os.name ? _getUaData.os.name : "none";
  };
  var getBrowserName = function getBrowserName() {
    return _getUaData.browser.name;
  };
  var getMobileVendor = function getMobileVendor() {
    return _getUaData.device.vendor ? _getUaData.device.vendor : "none";
  };
  var getMobileModel = function getMobileModel() {
    return _getUaData.device.model ? _getUaData.device.model : "none";
  };
  var getEngineName = function getEngineName() {
    return _getUaData.engine.name;
  };
  var getEngineVersion = function getEngineVersion() {
    return _getUaData.engine.version;
  };
  var getUseragent = function getUseragent() {
    return _getUaData.ua;
  };

  var isSmartTV = exports.isSmartTV = isSmartTVType();
  var isConsole = exports.isConsole = isConsoleType();
  var isWearable = exports.isWearable = isWearableType();
  var isMobileSafari = exports.isMobileSafari = isMobileSafariType();
  var isChromium = exports.isChromium = isChromiumType();
  var isMobile = exports.isMobile = isMobileAndTabletType();
  var isMobileOnly = exports.isMobileOnly = isMobileType();
  var isTablet = exports.isTablet = isTabletType();
  var isBrowser = exports.isBrowser = isBrowserType();
  var isAndroid = exports.isAndroid = isAndroidType();
  var isWinPhone = exports.isWinPhone = isWinPhoneType();
  var isIOS = exports.isIOS = isIOSType();
  var isChrome = exports.isChrome = isChromeType();
  var isFirefox = exports.isFirefox = isFirefoxType();
  var isSafari = exports.isSafari = isSafariType();
  var isOpera = exports.isOpera = isOperaType();
  var isIE = exports.isIE = isIEType();
  var osVersion = exports.osVersion = getOsVersion();
  var osName = exports.osName = getOsName();
  var fullBrowserVersion = exports.fullBrowserVersion = getBrowserFullVersion();
  var browserVersion = exports.browserVersion = getBrowserVersion();
  var browserName = exports.browserName = getBrowserName();
  var mobileVendor = exports.mobileVendor = getMobileVendor();
  var mobileModel = exports.mobileModel = getMobileModel();
  var engineName = exports.engineName = getEngineName();
  var engineVersion = exports.engineVersion = getEngineVersion();
  var getUA = exports.getUA = getUseragent();
  var isEdge = exports.isEdge = isEdgeType();
  var isYandex = exports.isYandex = isYandexType();

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.wearPayload = exports.consolePayload = exports.stvPayload = exports.mobilePayload = exports.broPayload = exports.getCurrentBrowser = exports.checkType = exports.OS_TYPES = exports.BROWSER_TYPES = exports.DEVICE_TYPES = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _getUaData = __webpack_require__(0);

  var DEVICE_TYPES = exports.DEVICE_TYPES = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    SMART_TV: 'smarttv',
    CONSOLE: 'console',
    WEARABLE: 'wearable',
    BROWSER: undefined
  };

  var BROWSER_TYPES = exports.BROWSER_TYPES = {
    CHROME: 'Chrome',
    FIREFOX: "Firefox",
    OPERA: "Opera",
    YANDEX: "Yandex",
    SAFARI: "Safari",
    INTERNET_EXPLORER: "Internet Explorer",
    EDGE: "Edge",
    CHROMIUM: "Chromium",
    IE: 'IE',
    MOBILE_SAFARI: "Mobile Safari"
  };

  var OS_TYPES = exports.OS_TYPES = {
    IOS: 'iOS',
    ANDROID: "Android",
    WINDOWS_PHONE: "Windows Phone"
  };

  var initialData = {
    isMobile: false,
    isTablet: false,
    isBrowser: false,
    isSmartTV: false,
    isConsole: false,
    isWearable: false
  };

  var checkType = exports.checkType = function checkType(type) {
    switch (type) {
      case DEVICE_TYPES.MOBILE:
        return { isMobile: true };
      case DEVICE_TYPES.TABLET:
        return { isTablet: true };
      case DEVICE_TYPES.SMART_TV:
        return { isSmartTV: true };
      case DEVICE_TYPES.CONSOLE:
        return { isConsole: true };
      case DEVICE_TYPES.WEARABLE:
        return { isWearable: true };
      case DEVICE_TYPES.BROWSER:
        return { isBrowser: true };
      default:
        return initialData;
    }
  };

  var getCurrentBrowser = exports.getCurrentBrowser = function getCurrentBrowser(name) {
    switch (name) {
      case BROWSER_TYPES.CHROME:
      case BROWSER_TYPES.FIREFOX:
      case BROWSER_TYPES.OPERA:
      case BROWSER_TYPES.YANDEX:
      case BROWSER_TYPES.SAFARI:
      case BROWSER_TYPES.IE:
      case BROWSER_TYPES.EDGE:
      case BROWSER_TYPES.CHROMIUM:
        return true;
      default:
        return false;
    }
  };

  var broPayload = exports.broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
    return {
      isBrowser: isBrowser,
      browserMajorVersion: browser.major,
      browserFullVersion: browser.version,
      browserName: browser.name,
      engineName: engine.name || false,
      engineVersion: engine.version,
      osName: os.name,
      osVersion: os.version,
      userAgent: ua
    };
  };

  var mobilePayload = exports.mobilePayload = function mobilePayload(type, device, os, ua) {
    return _extends({}, type, {
      vendor: device.vendor || "none",
      model: device.model || "none",
      os: os.name || "none",
      osVersion: os.version || "none",
      ua: ua || "none"
    });
  };

  var stvPayload = exports.stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
    return {
      isSmartTV: isSmartTV,
      engineName: engine.name || false,
      engineVersion: engine.version,
      osName: os.name,
      osVersion: os.version,
      userAgent: ua
    };
  };

  var consolePayload = exports.consolePayload = function consolePayload(isConsole, engine, os, ua) {
    return {
      isConsole: isConsole,
      engineName: engine.name || false,
      engineVersion: engine.version,
      osName: os.name,
      osVersion: os.version,
      userAgent: ua
    };
  };

  var wearPayload = exports.wearPayload = function wearPayload(isWearable, engine, os, ua) {
    return {
      isWearable: isWearable,
      engineName: engine.name || false,
      engineVersion: engine.version,
      osName: os.name,
      osVersion: os.version,
      userAgent: ua
    };
  };

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.deviceDetect = undefined;

  var _views = __webpack_require__(4);

  Object.keys(_views).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _views[key];
      }
    });
  });

  var _selectors = __webpack_require__(1);

  Object.keys(_selectors).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _selectors[key];
      }
    });
  });

  var _detect = __webpack_require__(8);

  var _detect2 = _interopRequireDefault(_detect);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.deviceDetect = _detect2.default;

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CustomView = exports.WearableView = exports.ConsoleView = exports.SmartTVView = exports.MobileOnlyView = exports.WinPhoneView = exports.TabletView = exports.MobileView = exports.IOSView = exports.IEView = exports.BrowserView = exports.AndroidView = undefined;

  var _react = __webpack_require__(5);

  var _react2 = _interopRequireDefault(_react);

  var _selectors = __webpack_require__(1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var AndroidView = exports.AndroidView = function AndroidView(_ref) {
    var renderWithFragment = _ref.renderWithFragment,
        children = _ref.children,
        viewClassName = _ref.viewClassName,
        style = _ref.style;

    return _selectors.isAndroid ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var BrowserView = exports.BrowserView = function BrowserView(_ref2) {
    var renderWithFragment = _ref2.renderWithFragment,
        children = _ref2.children,
        viewClassName = _ref2.viewClassName,
        style = _ref2.style;

    return _selectors.isBrowser ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var IEView = exports.IEView = function IEView(_ref3) {
    var renderWithFragment = _ref3.renderWithFragment,
        children = _ref3.children,
        viewClassName = _ref3.viewClassName,
        style = _ref3.style;

    return _selectors.isIE ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var IOSView = exports.IOSView = function IOSView(_ref4) {
    var renderWithFragment = _ref4.renderWithFragment,
        children = _ref4.children,
        viewClassName = _ref4.viewClassName,
        style = _ref4.style;

    return _selectors.isIOS ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var MobileView = exports.MobileView = function MobileView(_ref5) {
    var renderWithFragment = _ref5.renderWithFragment,
        children = _ref5.children,
        viewClassName = _ref5.viewClassName,
        style = _ref5.style;

    return _selectors.isMobile ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var TabletView = exports.TabletView = function TabletView(_ref6) {
    var renderWithFragment = _ref6.renderWithFragment,
        children = _ref6.children,
        viewClassName = _ref6.viewClassName,
        style = _ref6.style;

    return _selectors.isTablet ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var WinPhoneView = exports.WinPhoneView = function WinPhoneView(_ref7) {
    var renderWithFragment = _ref7.renderWithFragment,
        children = _ref7.children,
        viewClassName = _ref7.viewClassName,
        style = _ref7.style;

    return _selectors.isWinPhone ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var MobileOnlyView = exports.MobileOnlyView = function MobileOnlyView(_ref8) {
    var renderWithFragment = _ref8.renderWithFragment,
        children = _ref8.children,
        viewClassName = _ref8.viewClassName,
        style = _ref8.style;

    return _selectors.isMobileOnly ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var SmartTVView = exports.SmartTVView = function SmartTVView(_ref9) {
    var renderWithFragment = _ref9.renderWithFragment,
        children = _ref9.children,
        viewClassName = _ref9.viewClassName,
        style = _ref9.style;

    return _selectors.isSmartTV ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var ConsoleView = exports.ConsoleView = function ConsoleView(_ref10) {
    var renderWithFragment = _ref10.renderWithFragment,
        children = _ref10.children,
        viewClassName = _ref10.viewClassName,
        style = _ref10.style;

    return _selectors.isConsole ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var WearableView = exports.WearableView = function WearableView(_ref11) {
    var renderWithFragment = _ref11.renderWithFragment,
        children = _ref11.children,
        viewClassName = _ref11.viewClassName,
        style = _ref11.style;

    return _selectors.isWearable ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  var CustomView = exports.CustomView = function CustomView(_ref12) {
    var renderWithFragment = _ref12.renderWithFragment,
        children = _ref12.children,
        viewClassName = _ref12.viewClassName,
        style = _ref12.style,
        condition = _ref12.condition;

    return condition ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', { className: viewClassName, style: style }, children) : null;
  };

  /***/
},
/* 5 */
/***/function (module, exports) {

  module.exports = __webpack_require__("eW0v");

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                     * UAParser.js v0.7.18
                                     * Lightweight JavaScript-based User-Agent string parser
                                     * https://github.com/faisalman/ua-parser-js
                                     *
                                     * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                                     * Dual licensed under GPLv2 or MIT
                                     */
  (function (window, undefined) {
    "use strict";
    var LIBVERSION = "0.7.18",
        EMPTY = "",
        UNKNOWN = "?",
        FUNC_TYPE = "function",
        UNDEF_TYPE = "undefined",
        OBJ_TYPE = "object",
        STR_TYPE = "string",
        MAJOR = "major",
        MODEL = "model",
        NAME = "name",
        TYPE = "type",
        VENDOR = "vendor",
        VERSION = "version",
        ARCHITECTURE = "architecture",
        CONSOLE = "console",
        MOBILE = "mobile",
        TABLET = "tablet",
        SMARTTV = "smarttv",
        WEARABLE = "wearable",
        EMBEDDED = "embedded";var util = { extend: function extend(regexes, extensions) {
        var margedRegexes = {};for (var i in regexes) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            margedRegexes[i] = extensions[i].concat(regexes[i]);
          } else {
            margedRegexes[i] = regexes[i];
          }
        }return margedRegexes;
      }, has: function has(str1, str2) {
        if (typeof str1 === "string") {
          return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
        } else {
          return false;
        }
      }, lowerize: function lowerize(str) {
        return str.toLowerCase();
      }, major: function major(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined;
      }, trim: function trim(str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      } };var mapper = { rgx: function rgx(ua, arrays) {
        var i = 0,
            j,
            k,
            p,
            q,
            matches,
            match;while (i < arrays.length && !matches) {
          var regex = arrays[i],
              props = arrays[i + 1];j = k = 0;while (j < regex.length && !matches) {
            matches = regex[j++].exec(ua);if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];q = props[p];if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length == 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length == 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                    }
                  } else if (q.length == 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                  }
                } else {
                  this[q] = match ? match : undefined;
                }
              }
            }
          }i += 2;
        }
      }, str: function str(_str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (util.has(map[i][j], _str)) {
                return i === UNKNOWN ? undefined : i;
              }
            }
          } else if (util.has(map[i], _str)) {
            return i === UNKNOWN ? undefined : i;
          }
        }return _str;
      } };var maps = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } };var regexes = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i], [[NAME, "Opera Mini"], VERSION], [/\s(opr)\/([\w\.]+)/i], [[NAME, "Opera"], VERSION], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[NAME, "IE"], VERSION], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[NAME, "Edge"], VERSION], [/(yabrowser)\/([\w\.]+)/i], [[NAME, "Yandex"], VERSION], [/(puffin)\/([\w\.]+)/i], [[NAME, "Puffin"], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[NAME, "UCBrowser"], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, " "], VERSION], [/(micromessenger)\/([\w\.]+)/i], [[NAME, "WeChat"], VERSION], [/(qqbrowserlite)\/([\w\.]+)/i], [NAME, VERSION], [/(QQ)\/([\d\.]+)/i], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(MetaSr)[\/\s]?([\w\.]+)/i], [NAME], [/(LBBROWSER)/i], [NAME], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [VERSION, [NAME, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [VERSION, [NAME, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [VERSION, [NAME, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 WebView"], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [VERSION, [NAME, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i], [[NAME, "Dolphin"], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[NAME, "Chrome"], VERSION], [/(coast)\/([\w\.]+)/i], [[NAME, "Opera Coast"], VERSION], [/fxios\/([\w\.-]+)/i], [VERSION, [NAME, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[NAME, "GSA"], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape)\/([\w\.-]+)/i], [[NAME, "Netscape"], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [NAME, VERSION]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[ARCHITECTURE, /ower/, "", util.lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[ARCHITECTURE, util.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/], [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i], [[MODEL, "Apple TV"], [VENDOR, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, "Amazon"], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i], [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i], [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, "Sony"], [MODEL, "Xperia Tablet"], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i], [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [/(nexus\s9)/i], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, " "], [VENDOR, "Microsoft"], [TYPE, MOBILE]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, "Samsung"], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i], [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]], [/sie-(\w*)/i], [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i], [MODEL, [VENDOR, "LG"], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[VENDOR, "LG"], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [/linux;.+((jolla));/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i], [[MODEL, "Chromecast"], [VENDOR, "Google"]], [/android.+;\s(glass)\s\d/i], [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i], [MODEL, [VENDOR, "Google"], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i], [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [MODEL, [VENDOR, "Meizu"], [TYPE, TABLET]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/android.+;\s(k88)\sbuild/i], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i], [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android[\w\.\s\-]{0,9});.+build/i], [MODEL, [VENDOR, "Generic"]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [VERSION, [NAME, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [NAME, VERSION], [/rv\:([\w\.]{1,9}).+(gecko)/i], [VERSION, NAME]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, "Windows"], [VERSION, mapper.str, maps.os.windows.version]], [/\((bb)(10);/i], [[NAME, "BlackBerry"], VERSION], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[NAME, "Symbian"], VERSION], [/\((series40);/i], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[NAME, "Firefox OS"], VERSION], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[NAME, "Chromium OS"], VERSION], [/(sunos)\s?([\w\.\d]*)/i], [[NAME, "Solaris"], VERSION], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [NAME, VERSION], [/(haiku)\s(\w+)/i], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[NAME, "Mac OS"], [VERSION, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [NAME, VERSION]] };var UAParser = function UAParser(uastring, extensions) {
      if (typeof uastring === "object") {
        extensions = uastring;uastring = undefined;
      }if (!(this instanceof UAParser)) {
        return new UAParser(uastring, extensions).getResult();
      }var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;this.getBrowser = function () {
        var browser = { name: undefined, version: undefined };mapper.rgx.call(browser, ua, rgxmap.browser);browser.major = util.major(browser.version);return browser;
      };this.getCPU = function () {
        var cpu = { architecture: undefined };mapper.rgx.call(cpu, ua, rgxmap.cpu);return cpu;
      };this.getDevice = function () {
        var device = { vendor: undefined, model: undefined, type: undefined };mapper.rgx.call(device, ua, rgxmap.device);return device;
      };this.getEngine = function () {
        var engine = { name: undefined, version: undefined };mapper.rgx.call(engine, ua, rgxmap.engine);return engine;
      };this.getOS = function () {
        var os = { name: undefined, version: undefined };mapper.rgx.call(os, ua, rgxmap.os);return os;
      };this.getResult = function () {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      };this.getUA = function () {
        return ua;
      };this.setUA = function (uastring) {
        ua = uastring;return this;
      };return this;
    };UAParser.VERSION = LIBVERSION;UAParser.BROWSER = { NAME: NAME, MAJOR: MAJOR, VERSION: VERSION };UAParser.CPU = { ARCHITECTURE: ARCHITECTURE };UAParser.DEVICE = { MODEL: MODEL, VENDOR: VENDOR, TYPE: TYPE, CONSOLE: CONSOLE, MOBILE: MOBILE, SMARTTV: SMARTTV, TABLET: TABLET, WEARABLE: WEARABLE, EMBEDDED: EMBEDDED };UAParser.ENGINE = { NAME: NAME, VERSION: VERSION };UAParser.OS = { NAME: NAME, VERSION: VERSION };if (typeof exports !== UNDEF_TYPE) {
      if (typeof module !== UNDEF_TYPE && module.exports) {
        exports = module.exports = UAParser;
      }exports.UAParser = UAParser;
    } else {
      if ("function" === FUNC_TYPE && __webpack_require__(7)) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return UAParser;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else if (window) {
        window.UAParser = UAParser;
      }
    }var $ = window && (window.jQuery || window.Zepto);if (typeof $ !== UNDEF_TYPE) {
      var parser = new UAParser();$.ua = parser.getResult();$.ua.get = function () {
        return parser.getUA();
      };$.ua.set = function (uastring) {
        parser.setUA(uastring);var result = parser.getResult();for (var prop in result) {
          $.ua[prop] = result[prop];
        }
      };
    }
  })(typeof window === "object" ? window : this);

  /***/
},
/* 7 */
/***/function (module, exports) {

  /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
    /* globals __webpack_amd_options__ */
    module.exports = __webpack_amd_options__;

    /* WEBPACK VAR INJECTION */
  }).call(exports, {});

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getUaData = __webpack_require__(0);

  var _types = __webpack_require__(2);

  var create = _interopRequireWildcard(_types);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  var type = create.checkType(_getUaData.device.type);

  exports.default = function () {
    var isBrowser = type.isBrowser,
        isMobile = type.isMobile,
        isTablet = type.isTablet,
        isSmartTV = type.isSmartTV,
        isConsole = type.isConsole,
        isWearable = type.isWearable;

    if (isBrowser) {
      return create.broPayload(isBrowser, _getUaData.browser, _getUaData.engine, _getUaData.os, _getUaData.ua);
    }

    if (isSmartTV) {
      return create.stvPayload(isSmartTV, _getUaData.engine, _getUaData.os, _getUaData.ua);
    }

    if (isConsole) {
      return create.consolePayload(isConsole, _getUaData.engine, _getUaData.os, _getUaData.ua);
    }

    if (isMobile) {
      return create.mobilePayload(type, _getUaData.device, _getUaData.os, _getUaData.ua);
    }

    if (isTablet) {
      return create.mobilePayload(type, _getUaData.device, _getUaData.os, _getUaData.ua);
    }

    if (isWearable) {
      return create.wearPayload(isWearable, _getUaData.engine, _getUaData.os, _getUaData.ua);
    }
  };

  /***/
}]
/******/);

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.scss
var style_0 = __webpack_require__("yY49");
var style_default = /*#__PURE__*/__webpack_require__.n(style_0);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/gsap/TweenLite.js
var gsap_TweenLite = __webpack_require__("PWbO");

// CONCATENATED MODULE: ../node_modules/gsap/TweenMaxBase.js
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



gsap_TweenLite["f" /* _gsScope */]._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {

	var _slice = function _slice(a) {
		//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
		var b = [],
		    l = a.length,
		    i;
		for (i = 0; i !== l; b.push(a[i++])) {}
		return b;
	},
	    _applyCycle = function _applyCycle(vars, targets, i) {
		var alt = vars.cycle,
		    p,
		    val;
		for (p in alt) {
			val = alt[p];
			vars[p] = typeof val === "function" ? val(i, targets[i], targets) : val[i % val.length];
		}
		delete vars.cycle;
	},

	//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
	_distribute = function _distribute(v) {
		if (typeof v === "function") {
			return v;
		}
		var vars = typeof v === "object" ? v : { each: v },
		    //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
		ease = vars.ease,
		    from = vars.from || 0,
		    base = vars.base || 0,
		    cache = {},
		    isFromKeyword = isNaN(from),
		    axis = vars.axis,
		    ratio = { center: 0.5, end: 1 }[from] || 0;
		return function (i, target, a) {
			var l = (a || vars).length,
			    distances = cache[l],
			    originX,
			    originY,
			    x,
			    y,
			    d,
			    j,
			    max,
			    min,
			    wrap;
			if (!distances) {
				wrap = vars.grid === "auto" ? 0 : (vars.grid || [Infinity])[0];
				if (!wrap) {
					max = -Infinity;
					while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) {}
					wrap--;
				}
				distances = cache[l] = [];
				originX = isFromKeyword ? Math.min(wrap, l) * ratio - 0.5 : from % wrap;
				originY = isFromKeyword ? l * ratio / wrap - 0.5 : from / wrap | 0;
				max = 0;
				min = Infinity;
				for (j = 0; j < l; j++) {
					x = j % wrap - originX;
					y = originY - (j / wrap | 0);
					distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
					if (d > max) {
						max = d;
					}
					if (d < min) {
						min = d;
					}
				}
				distances.max = max - min;
				distances.min = min;
				distances.v = l = vars.amount || vars.each * (wrap > l ? l : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap) || 0;
				distances.b = l < 0 ? base - l : base;
			}
			l = (distances[i] - distances.min) / distances.max;
			return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
		};
	},
	    TweenMax = function TweenMax(target, duration, vars) {
		gsap_TweenLite["g" /* default */].call(this, target, duration, vars);
		this._cycle = 0;
		this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
		this._repeat = this.vars.repeat || 0;
		this._repeatDelay = this.vars.repeatDelay || 0;
		if (this._repeat) {
			this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
		}
		this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
	},
	    _tinyNum = 0.00000001,
	    TweenLiteInternals = gsap_TweenLite["g" /* default */]._internals,
	    _isSelector = TweenLiteInternals.isSelector,
	    _isArray = TweenLiteInternals.isArray,
	    p = TweenMax.prototype = gsap_TweenLite["g" /* default */].to({}, 0.1, {}),
	    _blankArray = [];

	TweenMax.version = "2.1.2";
	p.constructor = TweenMax;
	p.kill()._gc = false;
	TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = gsap_TweenLite["g" /* default */].killTweensOf;
	TweenMax.getTweensOf = gsap_TweenLite["g" /* default */].getTweensOf;
	TweenMax.lagSmoothing = gsap_TweenLite["g" /* default */].lagSmoothing;
	TweenMax.ticker = gsap_TweenLite["g" /* default */].ticker;
	TweenMax.render = gsap_TweenLite["g" /* default */].render;
	TweenMax.distribute = _distribute;

	p.invalidate = function () {
		this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
		this._repeat = this.vars.repeat || 0;
		this._repeatDelay = this.vars.repeatDelay || 0;
		this._yoyoEase = null;
		this._uncache(true);
		return gsap_TweenLite["g" /* default */].prototype.invalidate.call(this);
	};

	p.updateTo = function (vars, resetDuration) {
		var self = this,
		    curRatio = self.ratio,
		    immediate = self.vars.immediateRender || vars.immediateRender,
		    p;
		if (resetDuration && self._startTime < self._timeline._time) {
			self._startTime = self._timeline._time;
			self._uncache(false);
			if (self._gc) {
				self._enabled(true, false);
			} else {
				self._timeline.insert(self, self._startTime - self._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
			}
		}
		for (p in vars) {
			self.vars[p] = vars[p];
		}
		if (self._initted || immediate) {
			if (resetDuration) {
				self._initted = false;
				if (immediate) {
					self.render(0, true, true);
				}
			} else {
				if (self._gc) {
					self._enabled(true, false);
				}
				if (self._notifyPluginsOfEnabled && self._firstPT) {
					gsap_TweenLite["g" /* default */]._onPluginEvent("_onDisable", self); //in case a plugin like MotionBlur must perform some cleanup tasks
				}
				if (self._time / self._duration > 0.998) {
					//if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
					var prevTime = self._totalTime;
					self.render(0, true, false);
					self._initted = false;
					self.render(prevTime, true, false);
				} else {
					self._initted = false;
					self._init();
					if (self._time > 0 || immediate) {
						var inv = 1 / (1 - curRatio),
						    pt = self._firstPT,
						    endValue;
						while (pt) {
							endValue = pt.s + pt.c;
							pt.c *= inv;
							pt.s = endValue - pt.c;
							pt = pt._next;
						}
					}
				}
			}
		}
		return self;
	};

	p.render = function (time, suppressEvents, force) {
		if (!this._initted) if (this._duration === 0 && this.vars.repeat) {
			//zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
			this.invalidate();
		}
		var self = this,
		    totalDur = !self._dirty ? self._totalDuration : self.totalDuration(),
		    prevTime = self._time,
		    prevTotalTime = self._totalTime,
		    prevCycle = self._cycle,
		    duration = self._duration,
		    prevRawPrevTime = self._rawPrevTime,
		    isComplete,
		    callback,
		    pt,
		    cycleDuration,
		    r,
		    type,
		    pow,
		    rawPrevTime,
		    yoyoEase;
		if (time >= totalDur - _tinyNum && time >= 0) {
			//to work around occasional floating point math artifacts.
			self._totalTime = totalDur;
			self._cycle = self._repeat;
			if (self._yoyo && (self._cycle & 1) !== 0) {
				self._time = 0;
				self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
			} else {
				self._time = duration;
				self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
			}
			if (!self._reversed) {
				isComplete = true;
				callback = "onComplete";
				force = force || self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
			}
			if (duration === 0) if (self._initted || !self.vars.lazy || force) {
				//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
				if (self._startTime === self._timeline._duration) {
					//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
					time = 0;
				}
				if (prevRawPrevTime < 0 || time <= 0 && time >= -_tinyNum || prevRawPrevTime === _tinyNum && self.data !== "isPause") if (prevRawPrevTime !== time) {
					//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
					force = true;
					if (prevRawPrevTime > _tinyNum) {
						callback = "onReverseComplete";
					}
				}
				self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
			}
		} else if (time < _tinyNum) {
			//to work around occasional floating point math artifacts, round super small values to 0.
			self._totalTime = self._time = self._cycle = 0;
			self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
			if (prevTotalTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
				callback = "onReverseComplete";
				isComplete = self._reversed;
			}
			if (time > -_tinyNum) {
				time = 0;
			} else if (time < 0) {
				self._active = false;
				if (duration === 0) if (self._initted || !self.vars.lazy || force) {
					//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (prevRawPrevTime >= 0) {
						force = true;
					}
					self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}
			}
			if (!self._initted) {
				//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
				force = true;
			}
		} else {
			self._totalTime = self._time = time;
			if (self._repeat !== 0) {
				cycleDuration = duration + self._repeatDelay;
				self._cycle = self._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
				if (self._cycle !== 0) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
					self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
				}
				self._time = self._totalTime - self._cycle * cycleDuration;
				if (self._yoyo) if ((self._cycle & 1) !== 0) {
					self._time = duration - self._time;
					yoyoEase = self._yoyoEase || self.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.
					if (yoyoEase) {
						if (!self._yoyoEase) {
							if (yoyoEase === true && !self._initted) {
								//if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
								yoyoEase = self.vars.ease;
								self._yoyoEase = yoyoEase = !yoyoEase ? gsap_TweenLite["g" /* default */].defaultEase : yoyoEase instanceof gsap_TweenLite["b" /* Ease */] ? yoyoEase : typeof yoyoEase === "function" ? new gsap_TweenLite["b" /* Ease */](yoyoEase, self.vars.easeParams) : gsap_TweenLite["b" /* Ease */].map[yoyoEase] || gsap_TweenLite["g" /* default */].defaultEase;
							} else {
								self._yoyoEase = yoyoEase = yoyoEase === true ? self._ease : yoyoEase instanceof gsap_TweenLite["b" /* Ease */] ? yoyoEase : gsap_TweenLite["b" /* Ease */].map[yoyoEase];
							}
						}
						self.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - self._time) / duration) : 0;
					}
				}
				if (self._time > duration) {
					self._time = duration;
				} else if (self._time < 0) {
					self._time = 0;
				}
			}
			if (self._easeType && !yoyoEase) {
				r = self._time / duration;
				type = self._easeType;
				pow = self._easePower;
				if (type === 1 || type === 3 && r >= 0.5) {
					r = 1 - r;
				}
				if (type === 3) {
					r *= 2;
				}
				if (pow === 1) {
					r *= r;
				} else if (pow === 2) {
					r *= r * r;
				} else if (pow === 3) {
					r *= r * r * r;
				} else if (pow === 4) {
					r *= r * r * r * r;
				}
				self.ratio = type === 1 ? 1 - r : type === 2 ? r : self._time / duration < 0.5 ? r / 2 : 1 - r / 2;
			} else if (!yoyoEase) {
				self.ratio = self._ease.getRatio(self._time / duration);
			}
		}

		if (prevTime === self._time && !force && prevCycle === self._cycle) {
			if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) {
				//so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
				self._callback("onUpdate");
			}
			return;
		} else if (!self._initted) {
			self._init();
			if (!self._initted || self._gc) {
				//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
				return;
			} else if (!force && self._firstPT && (self.vars.lazy !== false && self._duration || self.vars.lazy && !self._duration)) {
				//we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
				self._time = prevTime;
				self._totalTime = prevTotalTime;
				self._rawPrevTime = prevRawPrevTime;
				self._cycle = prevCycle;
				TweenLiteInternals.lazyTweens.push(self);
				self._lazy = [time, suppressEvents];
				return;
			}
			//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
			if (self._time && !isComplete && !yoyoEase) {
				self.ratio = self._ease.getRatio(self._time / duration);
			} else if (isComplete && this._ease._calcEnd && !yoyoEase) {
				self.ratio = self._ease.getRatio(self._time === 0 ? 0 : 1);
			}
		}
		if (self._lazy !== false) {
			self._lazy = false;
		}

		if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
			self._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
		}
		if (prevTotalTime === 0) {
			if (self._initted === 2 && time > 0) {
				self._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
			}
			if (self._startAt) {
				if (time >= 0) {
					self._startAt.render(time, true, force);
				} else if (!callback) {
					callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
				}
			}
			if (self.vars.onStart) if (self._totalTime !== 0 || duration === 0) if (!suppressEvents) {
				self._callback("onStart");
			}
		}

		pt = self._firstPT;
		while (pt) {
			if (pt.f) {
				pt.t[pt.p](pt.c * self.ratio + pt.s);
			} else {
				pt.t[pt.p] = pt.c * self.ratio + pt.s;
			}
			pt = pt._next;
		}

		if (self._onUpdate) {
			if (time < 0) if (self._startAt && self._startTime) {
				//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
				self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
			}
			if (!suppressEvents) if (self._totalTime !== prevTotalTime || callback) {
				self._callback("onUpdate");
			}
		}
		if (self._cycle !== prevCycle) if (!suppressEvents) if (!self._gc) if (self.vars.onRepeat) {
			self._callback("onRepeat");
		}
		if (callback) if (!self._gc || force) {
			//check gc because there's a chance that kill() could be called in an onUpdate
			if (time < 0 && self._startAt && !self._onUpdate && self._startTime) {
				//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
				self._startAt.render(time, true, force);
			}
			if (isComplete) {
				if (self._timeline.autoRemoveChildren) {
					self._enabled(false, false);
				}
				self._active = false;
			}
			if (!suppressEvents && self.vars[callback]) {
				self._callback(callback);
			}
			if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
				//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
				self._rawPrevTime = 0;
			}
		}
	};

	//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------

	TweenMax.to = function (target, duration, vars) {
		return new TweenMax(target, duration, vars);
	};

	TweenMax.from = function (target, duration, vars) {
		vars.runBackwards = true;
		vars.immediateRender = vars.immediateRender != false;
		return new TweenMax(target, duration, vars);
	};

	TweenMax.fromTo = function (target, duration, fromVars, toVars) {
		toVars.startAt = fromVars;
		toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
		return new TweenMax(target, duration, toVars);
	};

	TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
		var a = [],
		    staggerFunc = _distribute(vars.stagger || stagger),
		    cycle = vars.cycle,
		    fromCycle = (vars.startAt || _blankArray).cycle,
		    l,
		    copy,
		    i,
		    p;
		if (!_isArray(targets)) {
			if (typeof targets === "string") {
				targets = gsap_TweenLite["g" /* default */].selector(targets) || targets;
			}
			if (_isSelector(targets)) {
				targets = _slice(targets);
			}
		}
		targets = targets || [];
		l = targets.length - 1;
		for (i = 0; i <= l; i++) {
			copy = {};
			for (p in vars) {
				copy[p] = vars[p];
			}
			if (cycle) {
				_applyCycle(copy, targets, i);
				if (copy.duration != null) {
					duration = copy.duration;
					delete copy.duration;
				}
			}
			if (fromCycle) {
				fromCycle = copy.startAt = {};
				for (p in vars.startAt) {
					fromCycle[p] = vars.startAt[p];
				}
				_applyCycle(copy.startAt, targets, i);
			}
			copy.delay = staggerFunc(i, targets[i], targets) + (copy.delay || 0);
			if (i === l && onCompleteAll) {
				copy.onComplete = function () {
					if (vars.onComplete) {
						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
					}
					onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
				};
			}
			a[i] = new TweenMax(targets[i], duration, copy);
		}
		return a;
	};

	TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
		vars.runBackwards = true;
		vars.immediateRender = vars.immediateRender != false;
		return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
	};

	TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
		toVars.startAt = fromVars;
		toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
		return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
	};

	TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
		return new TweenMax(callback, 0, { delay: delay, onComplete: callback, onCompleteParams: params, callbackScope: scope, onReverseComplete: callback, onReverseCompleteParams: params, immediateRender: false, useFrames: useFrames, overwrite: 0 });
	};

	TweenMax.set = function (target, vars) {
		return new TweenMax(target, 0, vars);
	};

	TweenMax.isTweening = function (target) {
		return gsap_TweenLite["g" /* default */].getTweensOf(target, true).length > 0;
	};

	var _getChildrenOf = function _getChildrenOf(timeline, includeTimelines) {
		var a = [],
		    cnt = 0,
		    tween = timeline._first;
		while (tween) {
			if (tween instanceof gsap_TweenLite["g" /* default */]) {
				a[cnt++] = tween;
			} else {
				if (includeTimelines) {
					a[cnt++] = tween;
				}
				a = a.concat(_getChildrenOf(tween, includeTimelines));
				cnt = a.length;
			}
			tween = tween._next;
		}
		return a;
	},
	    getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
		return _getChildrenOf(gsap_TweenLite["a" /* Animation */]._rootTimeline, includeTimelines).concat(_getChildrenOf(gsap_TweenLite["a" /* Animation */]._rootFramesTimeline, includeTimelines));
	};

	TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
		if (tweens == null) {
			tweens = true;
		}
		if (delayedCalls == null) {
			delayedCalls = true;
		}
		var a = getAllTweens(timelines != false),
		    l = a.length,
		    allTrue = tweens && delayedCalls && timelines,
		    isDC,
		    tween,
		    i;
		for (i = 0; i < l; i++) {
			tween = a[i];
			if (allTrue || tween instanceof gsap_TweenLite["d" /* SimpleTimeline */] || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
				if (complete) {
					tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
				} else {
					tween._enabled(false, false);
				}
			}
		}
	};

	TweenMax.killChildTweensOf = function (parent, complete) {
		if (parent == null) {
			return;
		}
		var tl = TweenLiteInternals.tweenLookup,
		    a,
		    curParent,
		    p,
		    i,
		    l;
		if (typeof parent === "string") {
			parent = gsap_TweenLite["g" /* default */].selector(parent) || parent;
		}
		if (_isSelector(parent)) {
			parent = _slice(parent);
		}
		if (_isArray(parent)) {
			i = parent.length;
			while (--i > -1) {
				TweenMax.killChildTweensOf(parent[i], complete);
			}
			return;
		}
		a = [];
		for (p in tl) {
			curParent = tl[p].target.parentNode;
			while (curParent) {
				if (curParent === parent) {
					a = a.concat(tl[p].tweens);
				}
				curParent = curParent.parentNode;
			}
		}
		l = a.length;
		for (i = 0; i < l; i++) {
			if (complete) {
				a[i].totalTime(a[i].totalDuration());
			}
			a[i]._enabled(false, false);
		}
	};

	var _changePause = function _changePause(pause, tweens, delayedCalls, timelines) {
		tweens = tweens !== false;
		delayedCalls = delayedCalls !== false;
		timelines = timelines !== false;
		var a = getAllTweens(timelines),
		    allTrue = tweens && delayedCalls && timelines,
		    i = a.length,
		    isDC,
		    tween;
		while (--i > -1) {
			tween = a[i];
			if (allTrue || tween instanceof gsap_TweenLite["d" /* SimpleTimeline */] || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
				tween.paused(pause);
			}
		}
	};

	TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
		_changePause(true, tweens, delayedCalls, timelines);
	};

	TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
		_changePause(false, tweens, delayedCalls, timelines);
	};

	TweenMax.globalTimeScale = function (value) {
		var tl = gsap_TweenLite["a" /* Animation */]._rootTimeline,
		    t = gsap_TweenLite["g" /* default */].ticker.time;
		if (!arguments.length) {
			return tl._timeScale;
		}
		value = value || _tinyNum; //can't allow zero because it'll throw the math off
		tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
		tl = gsap_TweenLite["a" /* Animation */]._rootFramesTimeline;
		t = gsap_TweenLite["g" /* default */].ticker.frame;
		tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
		tl._timeScale = gsap_TweenLite["a" /* Animation */]._rootTimeline._timeScale = value;
		return value;
	};

	//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------

	p.progress = function (value, suppressEvents) {
		return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
	};

	p.totalProgress = function (value, suppressEvents) {
		return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
	};

	p.time = function (value, suppressEvents) {
		if (!arguments.length) {
			return this._time;
		}
		if (this._dirty) {
			this.totalDuration();
		}
		var duration = this._duration,
		    cycle = this._cycle,
		    cycleDur = cycle * (duration + this._repeatDelay);
		if (value > duration) {
			value = duration;
		}
		return this.totalTime(this._yoyo && cycle & 1 ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
	};

	p.duration = function (value) {
		if (!arguments.length) {
			return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
		}
		return gsap_TweenLite["a" /* Animation */].prototype.duration.call(this, value);
	};

	p.totalDuration = function (value) {
		if (!arguments.length) {
			if (this._dirty) {
				//instead of Infinity, we use 999999999999 so that we can accommodate reverses
				this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
				this._dirty = false;
			}
			return this._totalDuration;
		}
		return this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1));
	};

	p.repeat = function (value) {
		if (!arguments.length) {
			return this._repeat;
		}
		this._repeat = value;
		return this._uncache(true);
	};

	p.repeatDelay = function (value) {
		if (!arguments.length) {
			return this._repeatDelay;
		}
		this._repeatDelay = value;
		return this._uncache(true);
	};

	p.yoyo = function (value) {
		if (!arguments.length) {
			return this._yoyo;
		}
		this._yoyo = value;
		return this;
	};

	return TweenMax;
}, true);

var TweenMaxBase_TweenMax = gsap_TweenLite["h" /* globals */].TweenMax;
var TweenMaxBase = TweenMaxBase_TweenMax;


// CONCATENATED MODULE: ../node_modules/gsap/TimelineLite.js
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



gsap_TweenLite["f" /* _gsScope */]._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {

	var TimelineLite = function TimelineLite(vars) {
		gsap_TweenLite["d" /* SimpleTimeline */].call(this, vars);
		var self = this,
		    v = self.vars,
		    val,
		    p;
		self._labels = {};
		self.autoRemoveChildren = !!v.autoRemoveChildren;
		self.smoothChildTiming = !!v.smoothChildTiming;
		self._sortChildren = true;
		self._onUpdate = v.onUpdate;
		for (p in v) {
			val = v[p];
			if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
				v[p] = self._swapSelfInParams(val);
			}
		}
		if (_isArray(v.tweens)) {
			self.add(v.tweens, 0, v.align, v.stagger);
		}
	},
	    _tinyNum = 0.00000001,
	    TweenLiteInternals = gsap_TweenLite["g" /* default */]._internals,
	    _internals = TimelineLite._internals = {},
	    _isSelector = TweenLiteInternals.isSelector,
	    _isArray = TweenLiteInternals.isArray,
	    _lazyTweens = TweenLiteInternals.lazyTweens,
	    _lazyRender = TweenLiteInternals.lazyRender,
	    _globals = gsap_TweenLite["f" /* _gsScope */]._gsDefine.globals,
	    _copy = function _copy(vars) {
		var copy = {},
		    p;
		for (p in vars) {
			copy[p] = vars[p];
		}
		return copy;
	},
	    _applyCycle = function _applyCycle(vars, targets, i) {
		var alt = vars.cycle,
		    p,
		    val;
		for (p in alt) {
			val = alt[p];
			vars[p] = typeof val === "function" ? val(i, targets[i], targets) : val[i % val.length];
		}
		delete vars.cycle;
	},
	    _pauseCallback = _internals.pauseCallback = function () {},
	    _slice = function _slice(a) {
		//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
		var b = [],
		    l = a.length,
		    i;
		for (i = 0; i !== l; b.push(a[i++])) {}
		return b;
	},
	    _defaultImmediateRender = function _defaultImmediateRender(tl, toVars, fromVars, defaultFalse) {
		//default to immediateRender:true unless otherwise set in toVars, fromVars or if defaultFalse is passed in as true
		var ir = "immediateRender";
		if (!(ir in toVars)) {
			toVars[ir] = !(fromVars && fromVars[ir] === false || defaultFalse);
		}
		return toVars;
	},

	//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
	_distribute = function _distribute(v) {
		if (typeof v === "function") {
			return v;
		}
		var vars = typeof v === "object" ? v : { each: v },
		    //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
		ease = vars.ease,
		    from = vars.from || 0,
		    base = vars.base || 0,
		    cache = {},
		    isFromKeyword = isNaN(from),
		    axis = vars.axis,
		    ratio = { center: 0.5, end: 1 }[from] || 0;
		return function (i, target, a) {
			var l = (a || vars).length,
			    distances = cache[l],
			    originX,
			    originY,
			    x,
			    y,
			    d,
			    j,
			    max,
			    min,
			    wrap;
			if (!distances) {
				wrap = vars.grid === "auto" ? 0 : (vars.grid || [Infinity])[0];
				if (!wrap) {
					max = -Infinity;
					while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) {}
					wrap--;
				}
				distances = cache[l] = [];
				originX = isFromKeyword ? Math.min(wrap, l) * ratio - 0.5 : from % wrap;
				originY = isFromKeyword ? l * ratio / wrap - 0.5 : from / wrap | 0;
				max = 0;
				min = Infinity;
				for (j = 0; j < l; j++) {
					x = j % wrap - originX;
					y = originY - (j / wrap | 0);
					distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
					if (d > max) {
						max = d;
					}
					if (d < min) {
						min = d;
					}
				}
				distances.max = max - min;
				distances.min = min;
				distances.v = l = vars.amount || vars.each * (wrap > l ? l : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap) || 0;
				distances.b = l < 0 ? base - l : base;
			}
			l = (distances[i] - distances.min) / distances.max;
			return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
		};
	},
	    p = TimelineLite.prototype = new gsap_TweenLite["d" /* SimpleTimeline */]();

	TimelineLite.version = "2.1.2";
	TimelineLite.distribute = _distribute;
	p.constructor = TimelineLite;
	p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

	/* might use later...
 //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
 function localToGlobal(time, animation) {
 	while (animation) {
 		time = (time / animation._timeScale) + animation._startTime;
 		animation = animation.timeline;
 	}
 	return time;
 }
 	//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
 function globalToLocal(time, animation) {
 	var scale = 1;
 	time -= localToGlobal(0, animation);
 	while (animation) {
 		scale *= animation._timeScale;
 		animation = animation.timeline;
 	}
 	return time * scale;
 }
 */

	p.to = function (target, duration, vars, position) {
		var Engine = vars.repeat && _globals.TweenMax || gsap_TweenLite["g" /* default */];
		return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
	};

	p.from = function (target, duration, vars, position) {
		return this.add((vars.repeat && _globals.TweenMax || gsap_TweenLite["g" /* default */]).from(target, duration, _defaultImmediateRender(this, vars)), position);
	};

	p.fromTo = function (target, duration, fromVars, toVars, position) {
		var Engine = toVars.repeat && _globals.TweenMax || gsap_TweenLite["g" /* default */];
		toVars = _defaultImmediateRender(this, toVars, fromVars);
		return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
	};

	p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
		var tl = new TimelineLite({ onComplete: onCompleteAll, onCompleteParams: onCompleteAllParams, callbackScope: onCompleteAllScope, smoothChildTiming: this.smoothChildTiming }),
		    staggerFunc = _distribute(vars.stagger || stagger),
		    startAt = vars.startAt,
		    cycle = vars.cycle,
		    copy,
		    i;
		if (typeof targets === "string") {
			targets = gsap_TweenLite["g" /* default */].selector(targets) || targets;
		}
		targets = targets || [];
		if (_isSelector(targets)) {
			//if the targets object is a selector, translate it into an array.
			targets = _slice(targets);
		}
		for (i = 0; i < targets.length; i++) {
			copy = _copy(vars);
			if (startAt) {
				copy.startAt = _copy(startAt);
				if (startAt.cycle) {
					_applyCycle(copy.startAt, targets, i);
				}
			}
			if (cycle) {
				_applyCycle(copy, targets, i);
				if (copy.duration != null) {
					duration = copy.duration;
					delete copy.duration;
				}
			}
			tl.to(targets[i], duration, copy, staggerFunc(i, targets[i], targets));
		}
		return this.add(tl, position);
	};

	p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
		vars.runBackwards = true;
		return this.staggerTo(targets, duration, _defaultImmediateRender(this, vars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
	};

	p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
		toVars.startAt = fromVars;
		return this.staggerTo(targets, duration, _defaultImmediateRender(this, toVars, fromVars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
	};

	p.call = function (callback, params, scope, position) {
		return this.add(gsap_TweenLite["g" /* default */].delayedCall(0, callback, params, scope), position);
	};

	p.set = function (target, vars, position) {
		return this.add(new gsap_TweenLite["g" /* default */](target, 0, _defaultImmediateRender(this, vars, null, true)), position);
	};

	TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
		vars = vars || {};
		if (vars.smoothChildTiming == null) {
			vars.smoothChildTiming = true;
		}
		var tl = new TimelineLite(vars),
		    root = tl._timeline,
		    hasNegativeStart,
		    time,
		    tween,
		    next;
		if (ignoreDelayedCalls == null) {
			ignoreDelayedCalls = true;
		}
		root._remove(tl, true);
		tl._startTime = 0;
		tl._rawPrevTime = tl._time = tl._totalTime = root._time;
		tween = root._first;
		while (tween) {
			next = tween._next;
			if (!ignoreDelayedCalls || !(tween instanceof gsap_TweenLite["g" /* default */] && tween.target === tween.vars.onComplete)) {
				time = tween._startTime - tween._delay;
				if (time < 0) {
					hasNegativeStart = 1;
				}
				tl.add(tween, time);
			}
			tween = next;
		}
		root.add(tl, 0);
		if (hasNegativeStart) {
			//calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
			tl.totalDuration();
		}
		return tl;
	};

	p.add = function (value, position, align, stagger) {
		var self = this,
		    curTime,
		    l,
		    i,
		    child,
		    tl,
		    beforeRawTime;
		if (typeof position !== "number") {
			position = self._parseTimeOrLabel(position, 0, true, value);
		}
		if (!(value instanceof gsap_TweenLite["a" /* Animation */])) {
			if (value instanceof Array || value && value.push && _isArray(value)) {
				align = align || "normal";
				stagger = stagger || 0;
				curTime = position;
				l = value.length;
				for (i = 0; i < l; i++) {
					if (_isArray(child = value[i])) {
						child = new TimelineLite({ tweens: child });
					}
					self.add(child, curTime);
					if (typeof child !== "string" && typeof child !== "function") {
						if (align === "sequence") {
							curTime = child._startTime + child.totalDuration() / child._timeScale;
						} else if (align === "start") {
							child._startTime -= child.delay();
						}
					}
					curTime += stagger;
				}
				return self._uncache(true);
			} else if (typeof value === "string") {
				return self.addLabel(value, position);
			} else if (typeof value === "function") {
				value = gsap_TweenLite["g" /* default */].delayedCall(0, value);
			} else {
				throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
			}
		}

		gsap_TweenLite["d" /* SimpleTimeline */].prototype.add.call(self, value, position);

		if (value._time || !value._duration && value._initted) {
			//in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
			curTime = (self.rawTime() - value._startTime) * value._timeScale;
			if (!value._duration || Math.abs(Math.max(0, Math.min(value.totalDuration(), curTime))) - value._totalTime > 0.00001) {
				value.render(curTime, false, false);
			}
		}

		//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
		if (self._gc || self._time === self._duration) if (!self._paused) if (self._duration < self.duration()) {
			//in case any of the ancestors had completed but should now be enabled...
			tl = self;
			beforeRawTime = tl.rawTime() > value._startTime; //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
			while (tl._timeline) {
				if (beforeRawTime && tl._timeline.smoothChildTiming) {
					tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
				} else if (tl._gc) {
					tl._enabled(true, false);
				}
				tl = tl._timeline;
			}
		}

		return self;
	};

	p.remove = function (value) {
		if (value instanceof gsap_TweenLite["a" /* Animation */]) {
			this._remove(value, false);
			var tl = value._timeline = value.vars.useFrames ? gsap_TweenLite["a" /* Animation */]._rootFramesTimeline : gsap_TweenLite["a" /* Animation */]._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
			value._startTime = (value._paused ? value._pauseTime : tl._time) - (!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale; //ensure that if it gets played again, the timing is correct.
			return this;
		} else if (value instanceof Array || value && value.push && _isArray(value)) {
			var i = value.length;
			while (--i > -1) {
				this.remove(value[i]);
			}
			return this;
		} else if (typeof value === "string") {
			return this.removeLabel(value);
		}
		return this.kill(null, value);
	};

	p._remove = function (tween, skipDisable) {
		gsap_TweenLite["d" /* SimpleTimeline */].prototype._remove.call(this, tween, skipDisable);
		var last = this._last;
		if (!last) {
			this._time = this._totalTime = this._duration = this._totalDuration = 0;
		} else if (this._time > this.duration()) {
			this._time = this._duration;
			this._totalTime = this._totalDuration;
		}
		return this;
	};

	p.append = function (value, offsetOrLabel) {
		return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
	};

	p.insert = p.insertMultiple = function (value, position, align, stagger) {
		return this.add(value, position || 0, align, stagger);
	};

	p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
		return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
	};

	p.addLabel = function (label, position) {
		this._labels[label] = this._parseTimeOrLabel(position);
		return this;
	};

	p.addPause = function (position, callback, params, scope) {
		var t = gsap_TweenLite["g" /* default */].delayedCall(0, _pauseCallback, params, scope || this);
		t.vars.onComplete = t.vars.onReverseComplete = callback;
		t.data = "isPause";
		this._hasPause = true;
		return this.add(t, position);
	};

	p.removeLabel = function (label) {
		delete this._labels[label];
		return this;
	};

	p.getLabelTime = function (label) {
		return this._labels[label] != null ? this._labels[label] : -1;
	};

	p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
		var clippedDuration, i;
		//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
		if (ignore instanceof gsap_TweenLite["a" /* Animation */] && ignore.timeline === this) {
			this.remove(ignore);
		} else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
			i = ignore.length;
			while (--i > -1) {
				if (ignore[i] instanceof gsap_TweenLite["a" /* Animation */] && ignore[i].timeline === this) {
					this.remove(ignore[i]);
				}
			}
		}
		clippedDuration = typeof timeOrLabel === "number" && !offsetOrLabel ? 0 : this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
		if (typeof offsetOrLabel === "string") {
			return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && typeof timeOrLabel === "number" && this._labels[offsetOrLabel] == null ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
		}
		offsetOrLabel = offsetOrLabel || 0;
		if (typeof timeOrLabel === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
			//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
			i = timeOrLabel.indexOf("=");
			if (i === -1) {
				if (this._labels[timeOrLabel] == null) {
					return appendIfAbsent ? this._labels[timeOrLabel] = clippedDuration + offsetOrLabel : offsetOrLabel;
				}
				return this._labels[timeOrLabel] + offsetOrLabel;
			}
			offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
			timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : clippedDuration;
		} else if (timeOrLabel == null) {
			timeOrLabel = clippedDuration;
		}
		return Number(timeOrLabel) + offsetOrLabel;
	};

	p.seek = function (position, suppressEvents) {
		return this.totalTime(typeof position === "number" ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
	};

	p.stop = function () {
		return this.paused(true);
	};

	p.gotoAndPlay = function (position, suppressEvents) {
		return this.play(position, suppressEvents);
	};

	p.gotoAndStop = function (position, suppressEvents) {
		return this.pause(position, suppressEvents);
	};

	p.render = function (time, suppressEvents, force) {
		if (this._gc) {
			this._enabled(true, false);
		}
		var self = this,
		    prevTime = self._time,
		    totalDur = !self._dirty ? self._totalDuration : self.totalDuration(),
		    prevStart = self._startTime,
		    prevTimeScale = self._timeScale,
		    prevPaused = self._paused,
		    tween,
		    isComplete,
		    next,
		    callback,
		    internalForce,
		    pauseTween,
		    curTime,
		    pauseTime;
		if (prevTime !== self._time) {
			//if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
			time += self._time - prevTime;
		}
		if (time >= totalDur - _tinyNum && time >= 0) {
			//to work around occasional floating point math artifacts.
			self._totalTime = self._time = totalDur;
			if (!self._reversed) if (!self._hasPausedChild()) {
				isComplete = true;
				callback = "onComplete";
				internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				if (self._duration === 0) if (time <= 0 && time >= -_tinyNum || self._rawPrevTime < 0 || self._rawPrevTime === _tinyNum) if (self._rawPrevTime !== time && self._first) {
					internalForce = true;
					if (self._rawPrevTime > _tinyNum) {
						callback = "onReverseComplete";
					}
				}
			}
			self._rawPrevTime = self._duration || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
			time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
		} else if (time < _tinyNum) {
			//to work around occasional floating point math artifacts, round super small values to 0.
			self._totalTime = self._time = 0;
			if (time > -_tinyNum) {
				time = 0;
			}
			if (prevTime !== 0 || self._duration === 0 && self._rawPrevTime !== _tinyNum && (self._rawPrevTime > 0 || time < 0 && self._rawPrevTime >= 0)) {
				callback = "onReverseComplete";
				isComplete = self._reversed;
			}
			if (time < 0) {
				self._active = false;
				if (self._timeline.autoRemoveChildren && self._reversed) {
					//ensures proper GC if a timeline is resumed after it's finished reversing.
					internalForce = isComplete = true;
					callback = "onReverseComplete";
				} else if (self._rawPrevTime >= 0 && self._first) {
					//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
					internalForce = true;
				}
				self._rawPrevTime = time;
			} else {
				self._rawPrevTime = self._duration || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (time === 0 && isComplete) {
					//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
					tween = self._first;
					while (tween && tween._startTime === 0) {
						if (!tween._duration) {
							isComplete = false;
						}
						tween = tween._next;
					}
				}
				time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
				if (!self._initted) {
					internalForce = true;
				}
			}
		} else {

			if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
				if (time >= prevTime) {
					tween = self._first;
					while (tween && tween._startTime <= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
							pauseTween = tween;
						}
						tween = tween._next;
					}
				} else {
					tween = self._last;
					while (tween && tween._startTime >= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
							pauseTween = tween;
						}
						tween = tween._prev;
					}
				}
				if (pauseTween) {
					self._time = self._totalTime = time = pauseTween._startTime;
					pauseTime = self._startTime + time / self._timeScale;
				}
			}

			self._totalTime = self._time = self._rawPrevTime = time;
		}
		if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
			return;
		} else if (!self._initted) {
			self._initted = true;
		}

		if (!self._active) if (!self._paused && self._time !== prevTime && time > 0) {
			self._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
		}

		if (prevTime === 0) if (self.vars.onStart) if (self._time !== 0 || !self._duration) if (!suppressEvents) {
			self._callback("onStart");
		}

		curTime = self._time;
		if (curTime >= prevTime) {
			tween = self._first;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (curTime !== self._time || self._paused && !prevPaused) {
					//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
					break;
				} else if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
					if (pauseTween === tween) {
						self.pause();
						self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
					}
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
					}
				}
				tween = next;
			}
		} else {
			tween = self._last;
			while (tween) {
				next = tween._prev; //record it here because the value could change after rendering...
				if (curTime !== self._time || self._paused && !prevPaused) {
					//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
					break;
				} else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
					if (pauseTween === tween) {
						pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
						while (pauseTween && pauseTween.endTime() > self._time) {
							pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
							pauseTween = pauseTween._prev;
						}
						pauseTween = null;
						self.pause();
						self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
					}
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
					}
				}
				tween = next;
			}
		}

		if (self._onUpdate) if (!suppressEvents) {
			if (_lazyTweens.length) {
				//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
				_lazyRender();
			}
			self._callback("onUpdate");
		}

		if (callback) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) {
			//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
			if (isComplete) {
				if (_lazyTweens.length) {
					//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				if (self._timeline.autoRemoveChildren) {
					self._enabled(false, false);
				}
				self._active = false;
			}
			if (!suppressEvents && self.vars[callback]) {
				self._callback(callback);
			}
		}
	};

	p._hasPausedChild = function () {
		var tween = this._first;
		while (tween) {
			if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
				return true;
			}
			tween = tween._next;
		}
		return false;
	};

	p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
		ignoreBeforeTime = ignoreBeforeTime || -9999999999;
		var a = [],
		    tween = this._first,
		    cnt = 0;
		while (tween) {
			if (tween._startTime < ignoreBeforeTime) {
				//do nothing
			} else if (tween instanceof gsap_TweenLite["g" /* default */]) {
				if (tweens !== false) {
					a[cnt++] = tween;
				}
			} else {
				if (timelines !== false) {
					a[cnt++] = tween;
				}
				if (nested !== false) {
					a = a.concat(tween.getChildren(true, tweens, timelines));
					cnt = a.length;
				}
			}
			tween = tween._next;
		}
		return a;
	};

	p.getTweensOf = function (target, nested) {
		var disabled = this._gc,
		    a = [],
		    cnt = 0,
		    tweens,
		    i;
		if (disabled) {
			this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
		}
		tweens = gsap_TweenLite["g" /* default */].getTweensOf(target);
		i = tweens.length;
		while (--i > -1) {
			if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
				a[cnt++] = tweens[i];
			}
		}
		if (disabled) {
			this._enabled(false, true);
		}
		return a;
	};

	p.recent = function () {
		return this._recent;
	};

	p._contains = function (tween) {
		var tl = tween.timeline;
		while (tl) {
			if (tl === this) {
				return true;
			}
			tl = tl.timeline;
		}
		return false;
	};

	p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
		ignoreBeforeTime = ignoreBeforeTime || 0;
		var tween = this._first,
		    labels = this._labels,
		    p;
		while (tween) {
			if (tween._startTime >= ignoreBeforeTime) {
				tween._startTime += amount;
			}
			tween = tween._next;
		}
		if (adjustLabels) {
			for (p in labels) {
				if (labels[p] >= ignoreBeforeTime) {
					labels[p] += amount;
				}
			}
		}
		return this._uncache(true);
	};

	p._kill = function (vars, target) {
		if (!vars && !target) {
			return this._enabled(false, false);
		}
		var tweens = !target ? this.getChildren(true, true, false) : this.getTweensOf(target),
		    i = tweens.length,
		    changed = false;
		while (--i > -1) {
			if (tweens[i]._kill(vars, target)) {
				changed = true;
			}
		}
		return changed;
	};

	p.clear = function (labels) {
		var tweens = this.getChildren(false, true, true),
		    i = tweens.length;
		this._time = this._totalTime = 0;
		while (--i > -1) {
			tweens[i]._enabled(false, false);
		}
		if (labels !== false) {
			this._labels = {};
		}
		return this._uncache(true);
	};

	p.invalidate = function () {
		var tween = this._first;
		while (tween) {
			tween.invalidate();
			tween = tween._next;
		}
		return gsap_TweenLite["a" /* Animation */].prototype.invalidate.call(this);;
	};

	p._enabled = function (enabled, ignoreTimeline) {
		if (enabled === this._gc) {
			var tween = this._first;
			while (tween) {
				tween._enabled(enabled, true);
				tween = tween._next;
			}
		}
		return gsap_TweenLite["d" /* SimpleTimeline */].prototype._enabled.call(this, enabled, ignoreTimeline);
	};

	p.totalTime = function (time, suppressEvents, uncapped) {
		this._forcingPlayhead = true;
		var val = gsap_TweenLite["a" /* Animation */].prototype.totalTime.apply(this, arguments);
		this._forcingPlayhead = false;
		return val;
	};

	p.duration = function (value) {
		if (!arguments.length) {
			if (this._dirty) {
				this.totalDuration(); //just triggers recalculation
			}
			return this._duration;
		}
		if (this.duration() !== 0 && value !== 0) {
			this.timeScale(this._duration / value);
		}
		return this;
	};

	p.totalDuration = function (value) {
		if (!arguments.length) {
			if (this._dirty) {
				var max = 0,
				    self = this,
				    tween = self._last,
				    prevStart = 999999999999,
				    prev,
				    end;
				while (tween) {
					prev = tween._prev; //record it here in case the tween changes position in the sequence...
					if (tween._dirty) {
						tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
					}
					if (tween._startTime > prevStart && self._sortChildren && !tween._paused && !self._calculatingDuration) {
						//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
						self._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
						self.add(tween, tween._startTime - tween._delay);
						self._calculatingDuration = 0;
					} else {
						prevStart = tween._startTime;
					}
					if (tween._startTime < 0 && !tween._paused) {
						//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
						max -= tween._startTime;
						if (self._timeline.smoothChildTiming) {
							self._startTime += tween._startTime / self._timeScale;
							self._time -= tween._startTime;
							self._totalTime -= tween._startTime;
							self._rawPrevTime -= tween._startTime;
						}
						self.shiftChildren(-tween._startTime, false, -9999999999);
						prevStart = 0;
					}
					end = tween._startTime + tween._totalDuration / tween._timeScale;
					if (end > max) {
						max = end;
					}
					tween = prev;
				}
				self._duration = self._totalDuration = max;
				self._dirty = false;
			}
			return this._totalDuration;
		}
		return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
	};

	p.paused = function (value) {
		if (value === false && this._paused) {
			//if there's a pause directly at the spot from where we're unpausing, skip it.
			var tween = this._first;
			while (tween) {
				if (tween._startTime === this._time && tween.data === "isPause") {
					tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
				}
				tween = tween._next;
			}
		}
		return gsap_TweenLite["a" /* Animation */].prototype.paused.apply(this, arguments);
	};

	p.usesFrames = function () {
		var tl = this._timeline;
		while (tl._timeline) {
			tl = tl._timeline;
		}
		return tl === gsap_TweenLite["a" /* Animation */]._rootFramesTimeline;
	};

	p.rawTime = function (wrapRepeats) {
		return wrapRepeats && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
	};

	return TimelineLite;
}, true);

var TimelineLite_TimelineLite = gsap_TweenLite["h" /* globals */].TimelineLite;

// CONCATENATED MODULE: ../node_modules/gsap/TimelineMax.js
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */




gsap_TweenLite["f" /* _gsScope */]._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function () {

	var TimelineMax = function TimelineMax(vars) {
		TimelineLite_TimelineLite.call(this, vars);
		this._repeat = this.vars.repeat || 0;
		this._repeatDelay = this.vars.repeatDelay || 0;
		this._cycle = 0;
		this._yoyo = !!this.vars.yoyo;
		this._dirty = true;
	},
	    _tinyNum = 0.00000001,
	    TweenLiteInternals = gsap_TweenLite["g" /* default */]._internals,
	    _lazyTweens = TweenLiteInternals.lazyTweens,
	    _lazyRender = TweenLiteInternals.lazyRender,
	    _globals = gsap_TweenLite["f" /* _gsScope */]._gsDefine.globals,
	    _easeNone = new gsap_TweenLite["b" /* Ease */](null, null, 1, 0),
	    p = TimelineMax.prototype = new TimelineLite_TimelineLite();

	p.constructor = TimelineMax;
	p.kill()._gc = false;
	TimelineMax.version = "2.1.2";

	p.invalidate = function () {
		this._yoyo = !!this.vars.yoyo;
		this._repeat = this.vars.repeat || 0;
		this._repeatDelay = this.vars.repeatDelay || 0;
		this._uncache(true);
		return TimelineLite_TimelineLite.prototype.invalidate.call(this);
	};

	p.addCallback = function (callback, position, params, scope) {
		return this.add(gsap_TweenLite["g" /* default */].delayedCall(0, callback, params, scope), position);
	};

	p.removeCallback = function (callback, position) {
		if (callback) {
			if (position == null) {
				this._kill(null, callback);
			} else {
				var a = this.getTweensOf(callback, false),
				    i = a.length,
				    time = this._parseTimeOrLabel(position);
				while (--i > -1) {
					if (a[i]._startTime === time) {
						a[i]._enabled(false, false);
					}
				}
			}
		}
		return this;
	};

	p.removePause = function (position) {
		return this.removeCallback(TimelineLite_TimelineLite._internals.pauseCallback, position);
	};

	p.tweenTo = function (position, vars) {
		vars = vars || {};
		var copy = { ease: _easeNone, useFrames: this.usesFrames(), immediateRender: false, lazy: false },
		    Engine = vars.repeat && _globals.TweenMax || gsap_TweenLite["g" /* default */],
		    duration,
		    p,
		    t;
		for (p in vars) {
			copy[p] = vars[p];
		}
		copy.time = this._parseTimeOrLabel(position);
		duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || 0.001;
		t = new Engine(this, duration, copy);
		copy.onStart = function () {
			t.target.paused(true);
			if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) {
				//don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
				t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
			}
			if (vars.onStart) {
				//in case the user had an onStart in the vars - we don't want to overwrite it.
				vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
			}
		};
		return t;
	};

	p.tweenFromTo = function (fromPosition, toPosition, vars) {
		vars = vars || {};
		fromPosition = this._parseTimeOrLabel(fromPosition);
		vars.startAt = { onComplete: this.seek, onCompleteParams: [fromPosition], callbackScope: this };
		vars.immediateRender = vars.immediateRender !== false;
		var t = this.tweenTo(toPosition, vars);
		t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
		return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || 0.001);
	};

	p.render = function (time, suppressEvents, force) {
		if (this._gc) {
			this._enabled(true, false);
		}
		var self = this,
		    prevTime = self._time,
		    totalDur = !self._dirty ? self._totalDuration : self.totalDuration(),
		    dur = self._duration,
		    prevTotalTime = self._totalTime,
		    prevStart = self._startTime,
		    prevTimeScale = self._timeScale,
		    prevRawPrevTime = self._rawPrevTime,
		    prevPaused = self._paused,
		    prevCycle = self._cycle,
		    tween,
		    isComplete,
		    next,
		    callback,
		    internalForce,
		    cycleDuration,
		    pauseTween,
		    curTime,
		    pauseTime;
		if (prevTime !== self._time) {
			//if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
			time += self._time - prevTime;
		}
		if (time >= totalDur - _tinyNum && time >= 0) {
			//to work around occasional floating point math artifacts.
			if (!self._locked) {
				self._totalTime = totalDur;
				self._cycle = self._repeat;
			}
			if (!self._reversed) if (!self._hasPausedChild()) {
				isComplete = true;
				callback = "onComplete";
				internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				if (self._duration === 0) if (time <= 0 && time >= -_tinyNum || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && self._first) {
					internalForce = true;
					if (prevRawPrevTime > _tinyNum) {
						callback = "onReverseComplete";
					}
				}
			}
			self._rawPrevTime = self._duration || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
			if (self._yoyo && self._cycle & 1) {
				self._time = time = 0;
			} else {
				self._time = dur;
				time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
			}
		} else if (time < _tinyNum) {
			//to work around occasional floating point math artifacts, round super small values to 0.
			if (!self._locked) {
				self._totalTime = self._cycle = 0;
			}
			self._time = 0;
			if (time > -_tinyNum) {
				time = 0;
			}
			if (prevTime !== 0 || dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !self._locked) {
				//edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
				callback = "onReverseComplete";
				isComplete = self._reversed;
			}
			if (time < 0) {
				self._active = false;
				if (self._timeline.autoRemoveChildren && self._reversed) {
					internalForce = isComplete = true;
					callback = "onReverseComplete";
				} else if (prevRawPrevTime >= 0 && self._first) {
					//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
					internalForce = true;
				}
				self._rawPrevTime = time;
			} else {
				self._rawPrevTime = dur || !suppressEvents || time || self._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (time === 0 && isComplete) {
					//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
					tween = self._first;
					while (tween && tween._startTime === 0) {
						if (!tween._duration) {
							isComplete = false;
						}
						tween = tween._next;
					}
				}
				time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
				if (!self._initted) {
					internalForce = true;
				}
			}
		} else {
			if (dur === 0 && prevRawPrevTime < 0) {
				//without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
				internalForce = true;
			}
			self._time = self._rawPrevTime = time;
			if (!self._locked) {
				self._totalTime = time;
				if (self._repeat !== 0) {
					cycleDuration = dur + self._repeatDelay;
					self._cycle = self._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
					if (self._cycle) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
						self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
					}
					self._time = self._totalTime - self._cycle * cycleDuration;
					if (self._yoyo) if (self._cycle & 1) {
						self._time = dur - self._time;
					}
					if (self._time > dur) {
						self._time = dur;
						time = dur + 0.0001; //to avoid occasional floating point rounding error
					} else if (self._time < 0) {
						self._time = time = 0;
					} else {
						time = self._time;
					}
				}
			}

			if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
				time = self._time;
				if (time >= prevTime || self._repeat && prevCycle !== self._cycle) {
					tween = self._first;
					while (tween && tween._startTime <= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
							pauseTween = tween;
						}
						tween = tween._next;
					}
				} else {
					tween = self._last;
					while (tween && tween._startTime >= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
							pauseTween = tween;
						}
						tween = tween._prev;
					}
				}
				if (pauseTween) {
					pauseTime = self._startTime + pauseTween._startTime / self._timeScale;
					if (pauseTween._startTime < dur) {
						self._time = self._rawPrevTime = time = pauseTween._startTime;
						self._totalTime = time + self._cycle * (self._totalDuration + self._repeatDelay);
					}
				}
			}
		}

		if (self._cycle !== prevCycle) if (!self._locked) {
			/*
   make sure children at the end/beginning of the timeline are rendered properly. If, for example,
   a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
   would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
   could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
   we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
   ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
   */
			var backwards = self._yoyo && (prevCycle & 1) !== 0,
			    wrap = backwards === (self._yoyo && (self._cycle & 1) !== 0),
			    recTotalTime = self._totalTime,
			    recCycle = self._cycle,
			    recRawPrevTime = self._rawPrevTime,
			    recTime = self._time;

			self._totalTime = prevCycle * dur;
			if (self._cycle < prevCycle) {
				backwards = !backwards;
			} else {
				self._totalTime += dur;
			}
			self._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

			self._rawPrevTime = dur === 0 ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
			self._cycle = prevCycle;
			self._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
			prevTime = backwards ? 0 : dur;
			self.render(prevTime, suppressEvents, dur === 0);
			if (!suppressEvents) if (!self._gc) {
				if (self.vars.onRepeat) {
					self._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
					self._locked = false;
					self._callback("onRepeat");
				}
			}
			if (prevTime !== self._time) {
				//in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
				return;
			}
			if (wrap) {
				self._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
				self._locked = true;
				prevTime = backwards ? dur + 0.0001 : -0.0001;
				self.render(prevTime, true, false);
			}
			self._locked = false;
			if (self._paused && !prevPaused) {
				//if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
				return;
			}
			self._time = recTime;
			self._totalTime = recTotalTime;
			self._cycle = recCycle;
			self._rawPrevTime = recRawPrevTime;
		}

		if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
			if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) {
				//so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
				self._callback("onUpdate");
			}
			return;
		} else if (!self._initted) {
			self._initted = true;
		}

		if (!self._active) if (!self._paused && self._totalTime !== prevTotalTime && time > 0) {
			self._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
		}

		if (prevTotalTime === 0) if (self.vars.onStart) if (self._totalTime !== 0 || !self._totalDuration) if (!suppressEvents) {
			self._callback("onStart");
		}

		curTime = self._time;
		if (curTime >= prevTime) {
			tween = self._first;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (curTime !== self._time || self._paused && !prevPaused) {
					//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
					break;
				} else if (tween._active || tween._startTime <= self._time && !tween._paused && !tween._gc) {
					if (pauseTween === tween) {
						self.pause();
						self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
					}
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
					}
				}
				tween = next;
			}
		} else {
			tween = self._last;
			while (tween) {
				next = tween._prev; //record it here because the value could change after rendering...
				if (curTime !== self._time || self._paused && !prevPaused) {
					//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
					break;
				} else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
					if (pauseTween === tween) {
						pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
						while (pauseTween && pauseTween.endTime() > self._time) {
							pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
							pauseTween = pauseTween._prev;
						}
						pauseTween = null;
						self.pause();
						self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
					}
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
					}
				}
				tween = next;
			}
		}

		if (self._onUpdate) if (!suppressEvents) {
			if (_lazyTweens.length) {
				//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
				_lazyRender();
			}
			self._callback("onUpdate");
		}
		if (callback) if (!self._locked) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) {
			//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
			if (isComplete) {
				if (_lazyTweens.length) {
					//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				if (self._timeline.autoRemoveChildren) {
					self._enabled(false, false);
				}
				self._active = false;
			}
			if (!suppressEvents && self.vars[callback]) {
				self._callback(callback);
			}
		}
	};

	p.getActive = function (nested, tweens, timelines) {
		var a = [],
		    all = this.getChildren(nested || nested == null, tweens || nested == null, !!timelines),
		    cnt = 0,
		    l = all.length,
		    i,
		    tween;
		for (i = 0; i < l; i++) {
			tween = all[i];
			if (tween.isActive()) {
				a[cnt++] = tween;
			}
		}
		return a;
	};

	p.getLabelAfter = function (time) {
		if (!time) if (time !== 0) {
			//faster than isNan()
			time = this._time;
		}
		var labels = this.getLabelsArray(),
		    l = labels.length,
		    i;
		for (i = 0; i < l; i++) {
			if (labels[i].time > time) {
				return labels[i].name;
			}
		}
		return null;
	};

	p.getLabelBefore = function (time) {
		if (time == null) {
			time = this._time;
		}
		var labels = this.getLabelsArray(),
		    i = labels.length;
		while (--i > -1) {
			if (labels[i].time < time) {
				return labels[i].name;
			}
		}
		return null;
	};

	p.getLabelsArray = function () {
		var a = [],
		    cnt = 0,
		    p;
		for (p in this._labels) {
			a[cnt++] = { time: this._labels[p], name: p };
		}
		a.sort(function (a, b) {
			return a.time - b.time;
		});
		return a;
	};

	p.invalidate = function () {
		this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
		return TimelineLite_TimelineLite.prototype.invalidate.call(this);
	};

	//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

	p.progress = function (value, suppressEvents) {
		return !arguments.length ? this._time / this.duration() || 0 : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
	};

	p.totalProgress = function (value, suppressEvents) {
		return !arguments.length ? this._totalTime / this.totalDuration() || 0 : this.totalTime(this.totalDuration() * value, suppressEvents);
	};

	p.totalDuration = function (value) {
		if (!arguments.length) {
			if (this._dirty) {
				TimelineLite_TimelineLite.prototype.totalDuration.call(this); //just forces refresh
				//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
				this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
			}
			return this._totalDuration;
		}
		return this._repeat === -1 || !value ? this : this.timeScale(this.totalDuration() / value);
	};

	p.time = function (value, suppressEvents) {
		if (!arguments.length) {
			return this._time;
		}
		if (this._dirty) {
			this.totalDuration();
		}
		var duration = this._duration,
		    cycle = this._cycle,
		    cycleDur = cycle * (duration + this._repeatDelay);
		if (value > duration) {
			value = duration;
		}
		return this.totalTime(this._yoyo && cycle & 1 ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
	};

	p.repeat = function (value) {
		if (!arguments.length) {
			return this._repeat;
		}
		this._repeat = value;
		return this._uncache(true);
	};

	p.repeatDelay = function (value) {
		if (!arguments.length) {
			return this._repeatDelay;
		}
		this._repeatDelay = value;
		return this._uncache(true);
	};

	p.yoyo = function (value) {
		if (!arguments.length) {
			return this._yoyo;
		}
		this._yoyo = value;
		return this;
	};

	p.currentLabel = function (value) {
		if (!arguments.length) {
			return this.getLabelBefore(this._time + _tinyNum);
		}
		return this.seek(value, true);
	};

	return TimelineMax;
}, true);

var TimelineMax_TimelineMax = gsap_TweenLite["h" /* globals */].TimelineMax;

// CONCATENATED MODULE: ../node_modules/gsap/AttrPlugin.js
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



var AttrPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "attr",
	API: 2,
	version: "0.6.1",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween, index) {
		var p, end;
		if (typeof target.setAttribute !== "function") {
			return false;
		}
		for (p in value) {
			end = value[p];
			if (typeof end === "function") {
				end = end(index, target);
			}
			this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
			this._overwriteProps.push(p);
		}
		return true;
	}

});


// CONCATENATED MODULE: ../node_modules/gsap/BezierPlugin.js
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */


var BezierPlugin__RAD2DEG = 180 / Math.PI,
    _r1 = [],
    _r2 = [],
    _r3 = [],
    _corProps = {},
    BezierPlugin__globals = gsap_TweenLite["f" /* _gsScope */]._gsDefine.globals,
    Segment = function Segment(a, b, c, d) {
	if (c === d) {
		//if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
		c = d - (d - b) / 1000000;
	}
	if (a === b) {
		//if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
		b = a + (c - a) / 1000000;
	}
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.da = d - a;
	this.ca = c - a;
	this.ba = b - a;
},
    _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
    cubicToQuadratic = function cubicToQuadratic(a, b, c, d) {
	var q1 = { a: a },
	    q2 = {},
	    q3 = {},
	    q4 = { c: d },
	    mab = (a + b) / 2,
	    mbc = (b + c) / 2,
	    mcd = (c + d) / 2,
	    mabc = (mab + mbc) / 2,
	    mbcd = (mbc + mcd) / 2,
	    m8 = (mbcd - mabc) / 8;
	q1.b = mab + (a - mab) / 4;
	q2.b = mabc + m8;
	q1.c = q2.a = (q1.b + q2.b) / 2;
	q2.c = q3.a = (mabc + mbcd) / 2;
	q3.b = mbcd - m8;
	q4.b = mcd + (d - mcd) / 4;
	q3.c = q4.a = (q3.b + q4.b) / 2;
	return [q1, q2, q3, q4];
},
    _calculateControlPoints = function _calculateControlPoints(a, curviness, quad, basic, correlate) {
	var l = a.length - 1,
	    ii = 0,
	    cp1 = a[0].a,
	    i,
	    p1,
	    p2,
	    p3,
	    seg,
	    m1,
	    m2,
	    mm,
	    cp2,
	    qb,
	    r1,
	    r2,
	    tl;
	for (i = 0; i < l; i++) {
		seg = a[ii];
		p1 = seg.a;
		p2 = seg.d;
		p3 = a[ii + 1].d;

		if (correlate) {
			r1 = _r1[i];
			r2 = _r2[i];
			tl = (r2 + r1) * curviness * 0.25 / (basic ? 0.5 : _r3[i] || 0.5);
			m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : r1 !== 0 ? tl / r1 : 0);
			m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : r2 !== 0 ? tl / r2 : 0);
			mm = p2 - (m1 + ((m2 - m1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
		} else {
			m1 = p2 - (p2 - p1) * curviness * 0.5;
			m2 = p2 + (p3 - p2) * curviness * 0.5;
			mm = p2 - (m1 + m2) / 2;
		}
		m1 += mm;
		m2 += mm;

		seg.c = cp2 = m1;
		if (i !== 0) {
			seg.b = cp1;
		} else {
			seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
		}

		seg.da = p2 - p1;
		seg.ca = cp2 - p1;
		seg.ba = cp1 - p1;

		if (quad) {
			qb = cubicToQuadratic(p1, cp1, cp2, p2);
			a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
			ii += 4;
		} else {
			ii++;
		}

		cp1 = m2;
	}
	seg = a[ii];
	seg.b = cp1;
	seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
	seg.da = seg.d - seg.a;
	seg.ca = seg.c - seg.a;
	seg.ba = cp1 - seg.a;
	if (quad) {
		qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
		a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
	}
},
    _parseAnchors = function _parseAnchors(values, p, correlate, prepend) {
	var a = [],
	    l,
	    i,
	    p1,
	    p2,
	    p3,
	    tmp;
	if (prepend) {
		values = [prepend].concat(values);
		i = values.length;
		while (--i > -1) {
			if (typeof (tmp = values[i][p]) === "string") if (tmp.charAt(1) === "=") {
				values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
			}
		}
	}
	l = values.length - 2;
	if (l < 0) {
		a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
		return a;
	}
	for (i = 0; i < l; i++) {
		p1 = values[i][p];
		p2 = values[i + 1][p];
		a[i] = new Segment(p1, 0, 0, p2);
		if (correlate) {
			p3 = values[i + 2][p];
			_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
			_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
		}
	}
	a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
	return a;
},
    bezierThrough = function bezierThrough(values, curviness, quadratic, basic, correlate, prepend) {
	var obj = {},
	    props = [],
	    first = prepend || values[0],
	    i,
	    p,
	    a,
	    j,
	    r,
	    l,
	    seamless,
	    last;
	correlate = typeof correlate === "string" ? "," + correlate + "," : _correlate;
	if (curviness == null) {
		curviness = 1;
	}
	for (p in values[0]) {
		props.push(p);
	}
	//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
	if (values.length > 1) {
		last = values[values.length - 1];
		seamless = true;
		i = props.length;
		while (--i > -1) {
			p = props[i];
			if (Math.abs(first[p] - last[p]) > 0.05) {
				//build in a tolerance of +/-0.05 to accommodate rounding errors.
				seamless = false;
				break;
			}
		}
		if (seamless) {
			values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
			if (prepend) {
				values.unshift(prepend);
			}
			values.push(values[1]);
			prepend = values[values.length - 3];
		}
	}
	_r1.length = _r2.length = _r3.length = 0;
	i = props.length;
	while (--i > -1) {
		p = props[i];
		_corProps[p] = correlate.indexOf("," + p + ",") !== -1;
		obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
	}
	i = _r1.length;
	while (--i > -1) {
		_r1[i] = Math.sqrt(_r1[i]);
		_r2[i] = Math.sqrt(_r2[i]);
	}
	if (!basic) {
		i = props.length;
		while (--i > -1) {
			if (_corProps[p]) {
				a = obj[props[i]];
				l = a.length - 1;
				for (j = 0; j < l; j++) {
					r = a[j + 1].da / _r2[j] + a[j].da / _r1[j] || 0;
					_r3[j] = (_r3[j] || 0) + r * r;
				}
			}
		}
		i = _r3.length;
		while (--i > -1) {
			_r3[i] = Math.sqrt(_r3[i]);
		}
	}
	i = props.length;
	j = quadratic ? 4 : 1;
	while (--i > -1) {
		p = props[i];
		a = obj[p];
		_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
		if (seamless) {
			a.splice(0, j);
			a.splice(a.length - j, j);
		}
	}
	return obj;
},
    _parseBezierData = function _parseBezierData(values, type, prepend) {
	type = type || "soft";
	var obj = {},
	    inc = type === "cubic" ? 3 : 2,
	    soft = type === "soft",
	    props = [],
	    a,
	    b,
	    c,
	    d,
	    cur,
	    i,
	    j,
	    l,
	    p,
	    cnt,
	    tmp;
	if (soft && prepend) {
		values = [prepend].concat(values);
	}
	if (values == null || values.length < inc + 1) {
		throw "invalid Bezier data";
	}
	for (p in values[0]) {
		props.push(p);
	}
	i = props.length;
	while (--i > -1) {
		p = props[i];
		obj[p] = cur = [];
		cnt = 0;
		l = values.length;
		for (j = 0; j < l; j++) {
			a = prepend == null ? values[j][p] : typeof (tmp = values[j][p]) === "string" && tmp.charAt(1) === "=" ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
			if (soft) if (j > 1) if (j < l - 1) {
				cur[cnt++] = (a + cur[cnt - 2]) / 2;
			}
			cur[cnt++] = a;
		}
		l = cnt - inc + 1;
		cnt = 0;
		for (j = 0; j < l; j += inc) {
			a = cur[j];
			b = cur[j + 1];
			c = cur[j + 2];
			d = inc === 2 ? 0 : cur[j + 3];
			cur[cnt++] = tmp = inc === 3 ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
		}
		cur.length = cnt;
	}
	return obj;
},
    _addCubicLengths = function _addCubicLengths(a, steps, resolution) {
	var inc = 1 / resolution,
	    j = a.length,
	    d,
	    d1,
	    s,
	    da,
	    ca,
	    ba,
	    p,
	    i,
	    inv,
	    bez,
	    index;
	while (--j > -1) {
		bez = a[j];
		s = bez.a;
		da = bez.d - s;
		ca = bez.c - s;
		ba = bez.b - s;
		d = d1 = 0;
		for (i = 1; i <= resolution; i++) {
			p = inc * i;
			inv = 1 - p;
			d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
			index = j * resolution + i - 1;
			steps[index] = (steps[index] || 0) + d * d;
		}
	}
},
    _parseLengthData = function _parseLengthData(obj, resolution) {
	resolution = resolution >> 0 || 6;
	var a = [],
	    lengths = [],
	    d = 0,
	    total = 0,
	    threshold = resolution - 1,
	    segments = [],
	    curLS = [],
	    //current length segments array
	p,
	    i,
	    l,
	    index;
	for (p in obj) {
		_addCubicLengths(obj[p], a, resolution);
	}
	l = a.length;
	for (i = 0; i < l; i++) {
		d += Math.sqrt(a[i]);
		index = i % resolution;
		curLS[index] = d;
		if (index === threshold) {
			total += d;
			index = i / resolution >> 0;
			segments[index] = curLS;
			lengths[index] = total;
			d = 0;
			curLS = [];
		}
	}
	return { length: total, lengths: lengths, segments: segments };
},
    BezierPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "bezier",
	priority: -1,
	version: "1.3.8",
	API: 2,
	global: true,

	//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, vars, tween) {
		this._target = target;
		if (vars instanceof Array) {
			vars = { values: vars };
		}
		this._func = {};
		this._mod = {};
		this._props = [];
		this._timeRes = vars.timeResolution == null ? 6 : parseInt(vars.timeResolution, 10);
		var values = vars.values || [],
		    first = {},
		    second = values[0],
		    autoRotate = vars.autoRotate || tween.vars.orientToBezier,
		    p,
		    isFunc,
		    i,
		    j,
		    prepend;

		this._autoRotate = autoRotate ? autoRotate instanceof Array ? autoRotate : [["x", "y", "rotation", autoRotate === true ? 0 : Number(autoRotate) || 0]] : null;
		for (p in second) {
			this._props.push(p);
		}

		i = this._props.length;
		while (--i > -1) {
			p = this._props[i];

			this._overwriteProps.push(p);
			isFunc = this._func[p] = typeof target[p] === "function";
			first[p] = !isFunc ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
			if (!prepend) if (first[p] !== values[0][p]) {
				prepend = first;
			}
		}
		this._beziers = vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft" ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, vars.type === "thruBasic", vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
		this._segCount = this._beziers[p].length;

		if (this._timeRes) {
			var ld = _parseLengthData(this._beziers, this._timeRes);
			this._length = ld.length;
			this._lengths = ld.lengths;
			this._segments = ld.segments;
			this._l1 = this._li = this._s1 = this._si = 0;
			this._l2 = this._lengths[0];
			this._curSeg = this._segments[0];
			this._s2 = this._curSeg[0];
			this._prec = 1 / this._curSeg.length;
		}

		if (autoRotate = this._autoRotate) {
			this._initialRotations = [];
			if (!(autoRotate[0] instanceof Array)) {
				this._autoRotate = autoRotate = [autoRotate];
			}
			i = autoRotate.length;
			while (--i > -1) {
				for (j = 0; j < 3; j++) {
					p = autoRotate[i][j];
					this._func[p] = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)] : false;
				}
				p = autoRotate[i][2];
				this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
				this._overwriteProps.push(p);
			}
		}
		this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
		return true;
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(v) {
		var segments = this._segCount,
		    func = this._func,
		    target = this._target,
		    notStart = v !== this._startRatio,
		    curIndex,
		    inv,
		    i,
		    p,
		    b,
		    t,
		    val,
		    l,
		    lengths,
		    curSeg;
		if (!this._timeRes) {
			curIndex = v < 0 ? 0 : v >= 1 ? segments - 1 : segments * v >> 0;
			t = (v - curIndex * (1 / segments)) * segments;
		} else {
			lengths = this._lengths;
			curSeg = this._curSeg;
			v *= this._length;
			i = this._li;
			//find the appropriate segment (if the currently cached one isn't correct)
			if (v > this._l2 && i < segments - 1) {
				l = segments - 1;
				while (i < l && (this._l2 = lengths[++i]) <= v) {}
				this._l1 = lengths[i - 1];
				this._li = i;
				this._curSeg = curSeg = this._segments[i];
				this._s2 = curSeg[this._s1 = this._si = 0];
			} else if (v < this._l1 && i > 0) {
				while (i > 0 && (this._l1 = lengths[--i]) >= v) {}
				if (i === 0 && v < this._l1) {
					this._l1 = 0;
				} else {
					i++;
				}
				this._l2 = lengths[i];
				this._li = i;
				this._curSeg = curSeg = this._segments[i];
				this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
				this._s2 = curSeg[this._si];
			}
			curIndex = i;
			//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
			v -= this._l1;
			i = this._si;
			if (v > this._s2 && i < curSeg.length - 1) {
				l = curSeg.length - 1;
				while (i < l && (this._s2 = curSeg[++i]) <= v) {}
				this._s1 = curSeg[i - 1];
				this._si = i;
			} else if (v < this._s1 && i > 0) {
				while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}
				if (i === 0 && v < this._s1) {
					this._s1 = 0;
				} else {
					i++;
				}
				this._s2 = curSeg[i];
				this._si = i;
			}
			t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
		}
		inv = 1 - t;

		i = this._props.length;
		while (--i > -1) {
			p = this._props[i];
			b = this._beziers[p][curIndex];
			val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
			if (this._mod[p]) {
				val = this._mod[p](val, target);
			}
			if (func[p]) {
				target[p](val);
			} else {
				target[p] = val;
			}
		}

		if (this._autoRotate) {
			var ar = this._autoRotate,
			    b2,
			    x1,
			    y1,
			    x2,
			    y2,
			    add,
			    conv;
			i = ar.length;
			while (--i > -1) {
				p = ar[i][2];
				add = ar[i][3] || 0;
				conv = ar[i][4] === true ? 1 : BezierPlugin__RAD2DEG;
				b = this._beziers[ar[i][0]];
				b2 = this._beziers[ar[i][1]];

				if (b && b2) {
					//in case one of the properties got overwritten.
					b = b[curIndex];
					b2 = b2[curIndex];

					x1 = b.a + (b.b - b.a) * t;
					x2 = b.b + (b.c - b.b) * t;
					x1 += (x2 - x1) * t;
					x2 += (b.c + (b.d - b.c) * t - x2) * t;

					y1 = b2.a + (b2.b - b2.a) * t;
					y2 = b2.b + (b2.c - b2.b) * t;
					y1 += (y2 - y1) * t;
					y2 += (b2.c + (b2.d - b2.c) * t - y2) * t;

					val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

					if (this._mod[p]) {
						val = this._mod[p](val, target); //for modProps
					}

					if (func[p]) {
						target[p](val);
					} else {
						target[p] = val;
					}
				}
			}
		}
	}
}),
    BezierPlugin_p = BezierPlugin.prototype;

BezierPlugin.bezierThrough = bezierThrough;
BezierPlugin.cubicToQuadratic = cubicToQuadratic;
BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
BezierPlugin.quadraticToCubic = function (a, b, c) {
	return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
};

BezierPlugin._cssRegister = function () {
	var CSSPlugin = BezierPlugin__globals.CSSPlugin;
	if (!CSSPlugin) {
		return;
	}
	var _internals = CSSPlugin._internals,
	    _parseToProxy = _internals._parseToProxy,
	    _setPluginRatio = _internals._setPluginRatio,
	    CSSPropTween = _internals.CSSPropTween;
	_internals._registerComplexSpecialProp("bezier", { parser: function parser(t, e, prop, cssp, pt, plugin) {
			if (e instanceof Array) {
				e = { values: e };
			}
			plugin = new BezierPlugin();
			var values = e.values,
			    l = values.length - 1,
			    pluginValues = [],
			    v = {},
			    i,
			    p,
			    data;
			if (l < 0) {
				return pt;
			}
			for (i = 0; i <= l; i++) {
				data = _parseToProxy(t, values[i], cssp, pt, plugin, l !== i);
				pluginValues[i] = data.end;
			}
			for (p in e) {
				v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
			}
			v.values = pluginValues;
			pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
			pt.data = data;
			pt.plugin = plugin;
			pt.setRatio = _setPluginRatio;
			if (v.autoRotate === 0) {
				v.autoRotate = true;
			}
			if (v.autoRotate && !(v.autoRotate instanceof Array)) {
				i = v.autoRotate === true ? 0 : Number(v.autoRotate);
				v.autoRotate = data.end.left != null ? [["left", "top", "rotation", i, false]] : data.end.x != null ? [["x", "y", "rotation", i, false]] : false;
			}
			if (v.autoRotate) {
				if (!cssp._transform) {
					cssp._enableTransforms(false);
				}
				data.autoRotate = cssp._target._gsTransform;
				data.proxy.rotation = data.autoRotate.rotation || 0;
				cssp._overwriteProps.push("rotation");
			}
			plugin._onInitTween(data.proxy, v, cssp._tween);
			return pt;
		} });
};

BezierPlugin_p._mod = function (lookup) {
	var op = this._overwriteProps,
	    i = op.length,
	    val;
	while (--i > -1) {
		val = lookup[op[i]];
		if (val && typeof val === "function") {
			this._mod[op[i]] = val;
		}
	}
};

BezierPlugin_p._kill = function (lookup) {
	var a = this._props,
	    p,
	    i;
	for (p in this._beziers) {
		if (p in lookup) {
			delete this._beziers[p];
			delete this._func[p];
			i = a.length;
			while (--i > -1) {
				if (a[i] === p) {
					a.splice(i, 1);
				}
			}
		}
	}
	a = this._autoRotate;
	if (a) {
		i = a.length;
		while (--i > -1) {
			if (lookup[a[i][2]]) {
				a.splice(i, 1);
			}
		}
	}
	return this._super._kill.call(this, lookup);
};


// CONCATENATED MODULE: ../node_modules/gsap/ColorPropsPlugin.js
/*!
 * VERSION: 1.5.3
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var ColorPropsPlugin__numExp = /(\d|\.)+/g,
    ColorPropsPlugin__relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
    ColorPropsPlugin__colorLookup = { aqua: [0, 255, 255],
	lime: [0, 255, 0],
	silver: [192, 192, 192],
	black: [0, 0, 0],
	maroon: [128, 0, 0],
	teal: [0, 128, 128],
	blue: [0, 0, 255],
	navy: [0, 0, 128],
	white: [255, 255, 255],
	fuchsia: [255, 0, 255],
	olive: [128, 128, 0],
	yellow: [255, 255, 0],
	orange: [255, 165, 0],
	gray: [128, 128, 128],
	purple: [128, 0, 128],
	green: [0, 128, 0],
	red: [255, 0, 0],
	pink: [255, 192, 203],
	cyan: [0, 255, 255],
	transparent: [255, 255, 255, 0] },
    ColorPropsPlugin__hue = function _hue(h, m1, m2) {
	h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
	return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
},

/**
 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
 */
ColorPropsPlugin__parseColor = function _parseColor(v, toHSL) {
	var a, r, g, b, h, s, l, max, min, d, wasHSL;
	if (!v) {
		a = ColorPropsPlugin__colorLookup.black;
	} else if (typeof v === "number") {
		a = [v >> 16, v >> 8 & 255, v & 255];
	} else {
		if (v.charAt(v.length - 1) === ",") {
			//sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
			v = v.substr(0, v.length - 1);
		}
		if (ColorPropsPlugin__colorLookup[v]) {
			a = ColorPropsPlugin__colorLookup[v];
		} else if (v.charAt(0) === "#") {
			if (v.length === 4) {
				//for shorthand like #9F0
				r = v.charAt(1);
				g = v.charAt(2);
				b = v.charAt(3);
				v = "#" + r + r + g + g + b + b;
			}
			v = parseInt(v.substr(1), 16);
			a = [v >> 16, v >> 8 & 255, v & 255];
		} else if (v.substr(0, 3) === "hsl") {
			a = wasHSL = v.match(ColorPropsPlugin__numExp);
			if (!toHSL) {
				h = Number(a[0]) % 360 / 360;
				s = Number(a[1]) / 100;
				l = Number(a[2]) / 100;
				g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
				r = l * 2 - g;
				if (a.length > 3) {
					a[3] = Number(a[3]);
				}
				a[0] = ColorPropsPlugin__hue(h + 1 / 3, r, g);
				a[1] = ColorPropsPlugin__hue(h, r, g);
				a[2] = ColorPropsPlugin__hue(h - 1 / 3, r, g);
			} else if (v.indexOf("=") !== -1) {
				//if relative values are found, just return the raw strings with the relative prefixes in place.
				return v.match(ColorPropsPlugin__relNumExp);
			}
		} else {
			a = v.match(ColorPropsPlugin__numExp) || ColorPropsPlugin__colorLookup.transparent;
		}
		a[0] = Number(a[0]);
		a[1] = Number(a[1]);
		a[2] = Number(a[2]);
		if (a.length > 3) {
			a[3] = Number(a[3]);
		}
	}
	if (toHSL && !wasHSL) {
		r = a[0] / 255;
		g = a[1] / 255;
		b = a[2] / 255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max === min) {
			h = s = 0;
		} else {
			d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
			h *= 60;
		}
		a[0] = h + 0.5 | 0;
		a[1] = s * 100 + 0.5 | 0;
		a[2] = l * 100 + 0.5 | 0;
	}
	return a;
},
    ColorPropsPlugin__formatColors = function _formatColors(s, toHSL) {
	var colors = (s + "").match(ColorPropsPlugin__colorExp) || [],
	    charIndex = 0,
	    parsed = "",
	    i,
	    color,
	    temp;
	if (!colors.length) {
		return s;
	}
	for (i = 0; i < colors.length; i++) {
		color = colors[i];
		temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
		charIndex += temp.length + color.length;
		color = ColorPropsPlugin__parseColor(color, toHSL);
		if (color.length === 3) {
			color.push(1);
		}
		parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
	}
	return parsed + s.substr(charIndex);
},
    ColorPropsPlugin_p,
    _colorStringFilter,
    ColorPropsPlugin_TweenLite = (gsap_TweenLite["f" /* _gsScope */].GreenSockGlobals || gsap_TweenLite["f" /* _gsScope */]).TweenLite,
    ColorPropsPlugin__colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
    //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

ColorPropsPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "colorProps",
	version: "1.5.3",
	priority: -1,
	API: 2,
	global: true,

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween, index) {
		var p, proxy, pt, val;
		this._target = target;
		this._proxy = proxy = (value.format + "").toUpperCase() === "NUMBER" ? {} : 0;
		for (p in value) {
			if (p !== "format") {
				if (proxy) {
					this._firstNumPT = pt = { _next: this._firstNumPT, t: target, p: p, f: typeof target[p] === "function" };
					proxy[p] = "rgb(" + ColorPropsPlugin__parseColor(!pt.f ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]()).join(",") + ")";
					val = value[p];
					if (typeof val === "function") {
						val = val(index, target);
					}
					this._addTween(proxy, p, "get", typeof val === "number" ? "rgb(" + ColorPropsPlugin__parseColor(val, false).join(",") + ")" : val, p, null, null, _colorStringFilter);
				} else {
					this._addTween(target, p, "get", value[p], p, null, null, _colorStringFilter, index);
				}
			}
		}
		return true;
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(v) {
		var pt = this._firstNumPT,
		    val;
		this._super.setRatio.call(this, v);
		while (pt) {
			val = ColorPropsPlugin__parseColor(this._proxy[pt.p], false);
			val = val[0] << 16 | val[1] << 8 | val[2];
			if (pt.f) {
				this._target[pt.p](val);
			} else {
				this._target[pt.p] = val;
			}
			pt = pt._next;
		}
	}
});

for (ColorPropsPlugin_p in ColorPropsPlugin__colorLookup) {
	ColorPropsPlugin__colorExp += "|" + ColorPropsPlugin_p + "\\b";
}
ColorPropsPlugin__colorExp = new RegExp(ColorPropsPlugin__colorExp + ")", "gi");
ColorPropsPlugin.colorStringFilter = _colorStringFilter = function _colorStringFilter(a) {
	var combined = a[0] + " " + a[1],
	    toHSL;
	ColorPropsPlugin__colorExp.lastIndex = 0;
	if (ColorPropsPlugin__colorExp.test(combined)) {
		toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
		a[0] = ColorPropsPlugin__formatColors(a[0], toHSL);
		a[1] = ColorPropsPlugin__formatColors(a[1], toHSL);
	}
};

if (!ColorPropsPlugin_TweenLite.defaultStringFilter) {
	ColorPropsPlugin_TweenLite.defaultStringFilter = ColorPropsPlugin.colorStringFilter;
}

ColorPropsPlugin.parseColor = ColorPropsPlugin__parseColor;
ColorPropsPlugin_p = ColorPropsPlugin.prototype;
ColorPropsPlugin_p._firstNumPT = null;
ColorPropsPlugin_p._kill = function (lookup) {
	var pt = this._firstNumPT,
	    prev;
	while (pt) {
		if (pt.p in lookup) {
			if (pt === ColorPropsPlugin_p._firstNumPT) {
				this._firstNumPT = pt._next;
			}
			if (prev) {
				prev._next = pt._next;
			}
		} else {
			prev = pt;
		}
		pt = pt._next;
	}
	return this._super._kill(lookup);
};


// CONCATENATED MODULE: ../node_modules/gsap/CSSPlugin.js
/*!
 * VERSION: 2.1.0
 * DATE: 2019-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



gsap_TweenLite["f" /* _gsScope */]._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function () {

	/** @constructor **/
	var CSSPlugin = function CSSPlugin() {
		gsap_TweenLite["e" /* TweenPlugin */].call(this, "css");
		this._overwriteProps.length = 0;
		this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
	},
	    _globals = gsap_TweenLite["f" /* _gsScope */]._gsDefine.globals,
	    _hasPriority,
	    //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
	_suffixMap,
	    //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
	_cs,
	    //computed style (we store this in a shared variable to conserve memory and make minification tighter
	_overwriteProps,
	    //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
	_specialProps = {},
	    p = CSSPlugin.prototype = new gsap_TweenLite["e" /* TweenPlugin */]("css");

	p.constructor = CSSPlugin;
	CSSPlugin.version = "2.1.0";
	CSSPlugin.API = 2;
	CSSPlugin.defaultTransformPerspective = 0;
	CSSPlugin.defaultSkewType = "compensated";
	CSSPlugin.defaultSmoothOrigin = true;
	p = "px"; //we'll reuse the "p" variable to keep file size down
	CSSPlugin.suffixMap = { top: p, right: p, bottom: p, left: p, width: p, height: p, fontSize: p, padding: p, margin: p, perspective: p, lineHeight: "" };

	var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
	    _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
	    _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
	    //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
	_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
	    //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
	_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
	    _opacityExp = /opacity *= *([^)]*)/i,
	    _opacityValExp = /opacity:([^;]*)/i,
	    _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
	    _rgbhslExp = /^(rgb|hsl)/,
	    _capsExp = /([A-Z])/g,
	    _camelExp = /-([a-z])/gi,
	    _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
	    //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
	_camelFunc = function _camelFunc(s, g) {
		return g.toUpperCase();
	},
	    _horizExp = /(?:Left|Right|Width)/i,
	    _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
	    _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
	    _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
	    //finds any commas that are not within parenthesis
	_complexExp = /[\s,\(]/i,
	    //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
	_DEG2RAD = Math.PI / 180,
	    _RAD2DEG = 180 / Math.PI,
	    _forcePT = {},
	    _dummyElement = { style: {} },
	    _doc = gsap_TweenLite["f" /* _gsScope */].document || { createElement: function createElement() {
			return _dummyElement;
		} },
	    _createElement = function _createElement(type, ns) {
		return ns && _doc.createElementNS ? _doc.createElementNS(ns, type) : _doc.createElement(type);
	},
	    _tempDiv = _createElement("div"),
	    _tempImg = _createElement("img"),
	    _internals = CSSPlugin._internals = { _specialProps: _specialProps },
	    //provides a hook to a few internal methods that we need to access from inside other plugins
	_agent = (gsap_TweenLite["f" /* _gsScope */].navigator || {}).userAgent || "",
	    _autoRound,
	    _reqSafariFix,
	    //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

	_isSafari,
	    _isFirefox,
	    //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
	_isSafariLT6,
	    //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
	_ieVers,
	    _supportsOpacity = function () {
		//we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
		var i = _agent.indexOf("Android"),
		    a = _createElement("a");
		_isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3);
		_isSafariLT6 = _isSafari && parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6;
		_isFirefox = _agent.indexOf("Firefox") !== -1;
		if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) {
			_ieVers = parseFloat(RegExp.$1);
		}
		if (!a) {
			return false;
		}
		a.style.cssText = "top:1px;opacity:.55;";
		return (/^0.55/.test(a.style.opacity)
		);
	}(),
	    _getIEOpacity = function _getIEOpacity(v) {
		return _opacityExp.test(typeof v === "string" ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
	},
	    _log = function _log(s) {
		//for logging messages, but in a way that won't throw errors in old versions of IE.
		if (gsap_TweenLite["f" /* _gsScope */].console) {
			console.log(s);
		}
	},
	    _target,
	    //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
	_index,
	    //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

	_prefixCSS = "",
	    //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
	_prefix = "",
	    //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

	// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
	_checkPropPrefix = function _checkPropPrefix(p, e) {
		e = e || _tempDiv;
		var s = e.style,
		    a,
		    i;
		if (s[p] !== undefined) {
			return p;
		}
		p = p.charAt(0).toUpperCase() + p.substr(1);
		a = ["O", "Moz", "ms", "Ms", "Webkit"];
		i = 5;
		while (--i > -1 && s[a[i] + p] === undefined) {}
		if (i >= 0) {
			_prefix = i === 3 ? "ms" : a[i];
			_prefixCSS = "-" + _prefix.toLowerCase() + "-";
			return _prefix + p;
		}
		return null;
	},
	    _computedStyleScope = typeof window !== "undefined" ? window : _doc.defaultView || { getComputedStyle: function getComputedStyle() {} },
	    _getComputedStyle = function _getComputedStyle(e) {
		return _computedStyleScope.getComputedStyle(e); //to avoid errors in Microsoft Edge, we need to call getComputedStyle() from a specific scope, typically window.
	},


	/**
  * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
  * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
  *
  * @param {!Object} t Target element whose style property you want to query
  * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
  * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
  * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
  * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
  * @return {?string} The current property value
  */
	_getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
		var rv;
		if (!_supportsOpacity) if (p === "opacity") {
			//several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
			return _getIEOpacity(t);
		}
		if (!calc && t.style[p]) {
			rv = t.style[p];
		} else if (cs = cs || _getComputedStyle(t)) {
			rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
		} else if (t.currentStyle) {
			rv = t.currentStyle[p];
		}
		return dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto") ? dflt : rv;
	},


	/**
  * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
  * @param {!Object} t Target element
  * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
  * @param {!number} v Value
  * @param {string=} sfx Suffix (like "px" or "%" or "em")
  * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
  * @return {number} value in pixels
  */
	_convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
		if (sfx === "px" || !sfx && p !== "lineHeight") {
			return v;
		}
		if (sfx === "auto" || !v) {
			return 0;
		}
		var horiz = _horizExp.test(p),
		    node = t,
		    style = _tempDiv.style,
		    neg = v < 0,
		    precise = v === 1,
		    pix,
		    cache,
		    time;
		if (neg) {
			v = -v;
		}
		if (precise) {
			v *= 100;
		}
		if (p === "lineHeight" && !sfx) {
			//special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
			cache = _getComputedStyle(t).lineHeight;
			t.style.lineHeight = v;
			pix = parseFloat(_getComputedStyle(t).lineHeight);
			t.style.lineHeight = cache;
		} else if (sfx === "%" && p.indexOf("border") !== -1) {
			pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
		} else {
			style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
			if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
				node = t.parentNode || _doc.body;
				if (_getStyle(node, "display").indexOf("flex") !== -1) {
					//Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
					style.position = "absolute";
				}
				cache = node._gsCache;
				time = gsap_TweenLite["g" /* default */].ticker.frame;
				if (cache && horiz && cache.time === time) {
					//performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
					return cache.width * v / 100;
				}
				style[horiz ? "width" : "height"] = v + sfx;
			} else {
				style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
			}
			node.appendChild(_tempDiv);
			pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
			node.removeChild(_tempDiv);
			if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
				cache = node._gsCache = node._gsCache || {};
				cache.time = time;
				cache.width = pix / v * 100;
			}
			if (pix === 0 && !recurse) {
				pix = _convertToPixels(t, p, v, sfx, true);
			}
		}
		if (precise) {
			pix /= 100;
		}
		return neg ? -pix : pix;
	},
	    _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
		//for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
		if (_getStyle(t, "position", cs) !== "absolute") {
			return 0;
		}
		var dim = p === "left" ? "Left" : "Top",
		    v = _getStyle(t, "margin" + dim, cs);
		return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
	},


	// @private returns at object containing ALL of the style properties in camelCase and their associated values.
	_getAllStyles = function _getAllStyles(t, cs) {
		var s = {},
		    i,
		    tr,
		    p;
		if (cs = cs || _getComputedStyle(t, null)) {
			if (i = cs.length) {
				while (--i > -1) {
					p = cs[i];
					if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
						//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
						s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
					}
				}
			} else {
				//some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
				for (i in cs) {
					if (i.indexOf("Transform") === -1 || _transformProp === i) {
						//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
						s[i] = cs[i];
					}
				}
			}
		} else if (cs = t.currentStyle || t.style) {
			for (i in cs) {
				if (typeof i === "string" && s[i] === undefined) {
					s[i.replace(_camelExp, _camelFunc)] = cs[i];
				}
			}
		}
		if (!_supportsOpacity) {
			s.opacity = _getIEOpacity(t);
		}
		tr = _getTransform(t, cs, false);
		s.rotation = tr.rotation;
		s.skewX = tr.skewX;
		s.scaleX = tr.scaleX;
		s.scaleY = tr.scaleY;
		s.x = tr.x;
		s.y = tr.y;
		if (_supports3D) {
			s.z = tr.z;
			s.rotationX = tr.rotationX;
			s.rotationY = tr.rotationY;
			s.scaleZ = tr.scaleZ;
		}
		if (s.filters) {
			delete s.filters;
		}
		return s;
	},


	// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
	_cssDif = function _cssDif(t, s1, s2, vars, forceLookup) {
		var difs = {},
		    style = t.style,
		    val,
		    p,
		    mpt;
		for (p in s2) {
			if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) if (p.indexOf("Origin") === -1) if (typeof val === "number" || typeof val === "string") {
				difs[p] = val === "auto" && (p === "left" || p === "top") ? _calculateOffset(t, p) : (val === "" || val === "auto" || val === "none") && typeof s1[p] === "string" && s1[p].replace(_NaNExp, "") !== "" ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
				if (style[p] !== undefined) {
					//for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
					mpt = new MiniPropTween(style, p, style[p], mpt);
				}
			}
		}
		if (vars) {
			for (p in vars) {
				//copy properties (except className)
				if (p !== "className") {
					difs[p] = vars[p];
				}
			}
		}
		return { difs: difs, firstMPT: mpt };
	},
	    _dimensions = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
	    _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],


	/**
  * @private Gets the width or height of an element
  * @param {!Object} t Target element
  * @param {!string} p Property name ("width" or "height")
  * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
  * @return {number} Dimension (in pixels)
  */
	_getDimension = function _getDimension(t, p, cs) {
		if ((t.nodeName + "").toLowerCase() === "svg") {
			//Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
			return (cs || _getComputedStyle(t))[p] || 0;
		} else if (t.getCTM && _isSVG(t)) {
			return t.getBBox()[p] || 0;
		}
		var v = parseFloat(p === "width" ? t.offsetWidth : t.offsetHeight),
		    a = _dimensions[p],
		    i = a.length;
		cs = cs || _getComputedStyle(t, null);
		while (--i > -1) {
			v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
			v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
		}
		return v;
	},


	// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
	_parsePosition = function _parsePosition(v, recObj) {
		if (v === "contain" || v === "auto" || v === "auto auto") {
			//note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
			return v + " ";
		}
		if (v == null || v === "") {
			v = "0 0";
		}
		var a = v.split(" "),
		    x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
		    y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1],
		    i;
		if (a.length > 3 && !recObj) {
			//multiple positions
			a = v.split(", ").join(",").split(",");
			v = [];
			for (i = 0; i < a.length; i++) {
				v.push(_parsePosition(a[i]));
			}
			return v.join(",");
		}
		if (y == null) {
			y = x === "center" ? "50%" : "0";
		} else if (y === "center") {
			y = "50%";
		}
		if (x === "center" || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) {
			//remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
			x = "50%";
		}
		v = x + " " + y + (a.length > 2 ? " " + a[2] : "");
		if (recObj) {
			recObj.oxp = x.indexOf("%") !== -1;
			recObj.oyp = y.indexOf("%") !== -1;
			recObj.oxr = x.charAt(1) === "=";
			recObj.oyr = y.charAt(1) === "=";
			recObj.ox = parseFloat(x.replace(_NaNExp, ""));
			recObj.oy = parseFloat(y.replace(_NaNExp, ""));
			recObj.v = v;
		}
		return recObj || v;
	},


	/**
  * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
  * @param {(number|string)} e End value which is typically a string, but could be a number
  * @param {(number|string)} b Beginning value which is typically a string but could be a number
  * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
  */
	_parseChange = function _parseChange(e, b) {
		if (typeof e === "function") {
			e = e(_index, _target);
		}
		return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
	},


	/**
  * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
  * @param {Object} v Value to be parsed
  * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
  * @return {number} Parsed value
  */
	_parseVal = function _parseVal(v, d) {
		if (typeof v === "function") {
			v = v(_index, _target);
		}
		var isRelative = typeof v === "string" && v.charAt(1) === "=";
		if (typeof v === "string" && v.charAt(v.length - 2) === "v") {
			//convert vw and vh into px-equivalents.
			v = (isRelative ? v.substr(0, 2) : 0) + window["inner" + (v.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100);
		}
		return v == null ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
	},


	/**
  * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
  * @param {Object} v Value to be parsed
  * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
  * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
  * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
  * @return {number} parsed angle in radians
  */
	_parseAngle = function _parseAngle(v, d, p, directionalEnd) {
		var min = 0.000001,
		    cap,
		    split,
		    dif,
		    result,
		    isRelative;
		if (typeof v === "function") {
			v = v(_index, _target);
		}
		if (v == null) {
			result = d;
		} else if (typeof v === "number") {
			result = v;
		} else {
			cap = 360;
			split = v.split("_");
			isRelative = v.charAt(1) === "=";
			dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
			if (split.length) {
				if (directionalEnd) {
					directionalEnd[p] = d + dif;
				}
				if (v.indexOf("short") !== -1) {
					dif = dif % cap;
					if (dif !== dif % (cap / 2)) {
						dif = dif < 0 ? dif + cap : dif - cap;
					}
				}
				if (v.indexOf("_cw") !== -1 && dif < 0) {
					dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
				} else if (v.indexOf("ccw") !== -1 && dif > 0) {
					dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
				}
			}
			result = d + dif;
		}
		if (result < min && result > -min) {
			result = 0;
		}
		return result;
	},
	    _colorLookup = { aqua: [0, 255, 255],
		lime: [0, 255, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, 255],
		navy: [0, 0, 128],
		white: [255, 255, 255],
		fuchsia: [255, 0, 255],
		olive: [128, 128, 0],
		yellow: [255, 255, 0],
		orange: [255, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [255, 0, 0],
		pink: [255, 192, 203],
		cyan: [0, 255, 255],
		transparent: [255, 255, 255, 0] },
	    _hue = function _hue(h, m1, m2) {
		h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
		return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
	},


	/**
  * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
  * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
  * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
  * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
  */
	_parseColor = CSSPlugin.parseColor = function (v, toHSL) {
		var a, r, g, b, h, s, l, max, min, d, wasHSL;
		if (!v) {
			a = _colorLookup.black;
		} else if (typeof v === "number") {
			a = [v >> 16, v >> 8 & 255, v & 255];
		} else {
			if (v.charAt(v.length - 1) === ",") {
				//sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
				v = v.substr(0, v.length - 1);
			}
			if (_colorLookup[v]) {
				a = _colorLookup[v];
			} else if (v.charAt(0) === "#") {
				if (v.length === 4) {
					//for shorthand like #9F0
					r = v.charAt(1);
					g = v.charAt(2);
					b = v.charAt(3);
					v = "#" + r + r + g + g + b + b;
				}
				v = parseInt(v.substr(1), 16);
				a = [v >> 16, v >> 8 & 255, v & 255];
			} else if (v.substr(0, 3) === "hsl") {
				a = wasHSL = v.match(_numExp);
				if (!toHSL) {
					h = Number(a[0]) % 360 / 360;
					s = Number(a[1]) / 100;
					l = Number(a[2]) / 100;
					g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
					r = l * 2 - g;
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
					a[0] = _hue(h + 1 / 3, r, g);
					a[1] = _hue(h, r, g);
					a[2] = _hue(h - 1 / 3, r, g);
				} else if (v.indexOf("=") !== -1) {
					//if relative values are found, just return the raw strings with the relative prefixes in place.
					return v.match(_relNumExp);
				}
			} else {
				a = v.match(_numExp) || _colorLookup.transparent;
			}
			a[0] = Number(a[0]);
			a[1] = Number(a[1]);
			a[2] = Number(a[2]);
			if (a.length > 3) {
				a[3] = Number(a[3]);
			}
		}
		if (toHSL && !wasHSL) {
			r = a[0] / 255;
			g = a[1] / 255;
			b = a[2] / 255;
			max = Math.max(r, g, b);
			min = Math.min(r, g, b);
			l = (max + min) / 2;
			if (max === min) {
				h = s = 0;
			} else {
				d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
				h *= 60;
			}
			a[0] = h + 0.5 | 0;
			a[1] = s * 100 + 0.5 | 0;
			a[2] = l * 100 + 0.5 | 0;
		}
		return a;
	},
	    _formatColors = function _formatColors(s, toHSL) {
		var colors = s.match(_colorExp) || [],
		    charIndex = 0,
		    parsed = "",
		    i,
		    color,
		    temp;
		if (!colors.length) {
			return s;
		}
		for (i = 0; i < colors.length; i++) {
			color = colors[i];
			temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
			charIndex += temp.length + color.length;
			color = _parseColor(color, toHSL);
			if (color.length === 3) {
				color.push(1);
			}
			parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
		}
		return parsed + s.substr(charIndex);
	},
	    _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

	for (p in _colorLookup) {
		_colorExp += "|" + p + "\\b";
	}
	_colorExp = new RegExp(_colorExp + ")", "gi");

	CSSPlugin.colorStringFilter = function (a) {
		var combined = a[0] + " " + a[1],
		    toHSL;
		if (_colorExp.test(combined)) {
			toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
			a[0] = _formatColors(a[0], toHSL);
			a[1] = _formatColors(a[1], toHSL);
		}
		_colorExp.lastIndex = 0;
	};

	if (!gsap_TweenLite["g" /* default */].defaultStringFilter) {
		gsap_TweenLite["g" /* default */].defaultStringFilter = CSSPlugin.colorStringFilter;
	}

	/**
  * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
  * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
  * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
  * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
  * @return {Function} formatter function
  */
	var _getFormatter = function _getFormatter(dflt, clr, collapsible, multi) {
		if (dflt == null) {
			return function (v) {
				return v;
			};
		}
		var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
		    dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
		    pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
		    sfx = dflt.charAt(dflt.length - 1) === ")" ? ")" : "",
		    delim = dflt.indexOf(" ") !== -1 ? " " : ",",
		    numVals = dVals.length,
		    dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "",
		    _formatter2;
		if (!numVals) {
			return function (v) {
				return v;
			};
		}
		if (clr) {
			_formatter2 = function formatter(v) {
				var color, vals, i, a;
				if (typeof v === "number") {
					v += dSfx;
				} else if (multi && _commasOutsideParenExp.test(v)) {
					a = v.replace(_commasOutsideParenExp, "|").split("|");
					for (i = 0; i < a.length; i++) {
						a[i] = _formatter2(a[i]);
					}
					return a.join(",");
				}
				color = (v.match(_colorExp) || [dColor])[0];
				vals = v.split(color).join("").match(_valuesExp) || [];
				i = vals.length;
				if (numVals > i--) {
					while (++i < numVals) {
						vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
					}
				}
				return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
			};
			return _formatter2;
		}
		_formatter2 = function _formatter(v) {
			var vals, a, i;
			if (typeof v === "number") {
				v += dSfx;
			} else if (multi && _commasOutsideParenExp.test(v)) {
				a = v.replace(_commasOutsideParenExp, "|").split("|");
				for (i = 0; i < a.length; i++) {
					a[i] = _formatter2(a[i]);
				}
				return a.join(",");
			}
			vals = v.match(_valuesExp) || [];
			i = vals.length;
			if (numVals > i--) {
				while (++i < numVals) {
					vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
				}
			}
			return pfx + vals.join(delim) + sfx;
		};
		return _formatter2;
	},


	/**
  * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
  * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
  * @return {Function} a formatter function
  */
	_getEdgeParser = function _getEdgeParser(props) {
		props = props.split(",");
		return function (t, e, p, cssp, pt, plugin, vars) {
			var a = (e + "").split(" "),
			    i;
			vars = {};
			for (i = 0; i < 4; i++) {
				vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
			}
			return cssp.parse(t, vars, pt, plugin);
		};
	},


	// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
	_setPluginRatio = _internals._setPluginRatio = function (v) {
		this.plugin.setRatio(v);
		var d = this.data,
		    proxy = d.proxy,
		    mpt = d.firstMPT,
		    min = 0.000001,
		    val,
		    pt,
		    i,
		    str,
		    p;
		while (mpt) {
			val = proxy[mpt.v];
			if (mpt.r) {
				val = mpt.r(val);
			} else if (val < min && val > -min) {
				val = 0;
			}
			mpt.t[mpt.p] = val;
			mpt = mpt._next;
		}
		if (d.autoRotate) {
			d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
		}
		//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
		if (v === 1 || v === 0) {
			mpt = d.firstMPT;
			p = v === 1 ? "e" : "b";
			while (mpt) {
				pt = mpt.t;
				if (!pt.type) {
					pt[p] = pt.s + pt.xs0;
				} else if (pt.type === 1) {
					str = pt.xs0 + pt.s + pt.xs1;
					for (i = 1; i < pt.l; i++) {
						str += pt["xn" + i] + pt["xs" + (i + 1)];
					}
					pt[p] = str;
				}
				mpt = mpt._next;
			}
		}
	},


	/**
  * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
  * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
  * @param {!string} p property name
  * @param {(number|string|object)} v value
  * @param {MiniPropTween=} next next MiniPropTween in the linked list
  * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
  */
	MiniPropTween = function MiniPropTween(t, p, v, next, r) {
		this.t = t;
		this.p = p;
		this.v = v;
		this.r = r;
		if (next) {
			next._prev = this;
			this._next = next;
		}
	},


	/**
  * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
  * This method returns an object that has the following properties:
  *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
  *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
  *  - firstMPT: the first MiniPropTween in the linked list
  *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
  * @param {!Object} t target object to be tweened
  * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
  * @param {!CSSPlugin} cssp The CSSPlugin instance
  * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
  * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
  * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
  * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
  */
	_parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
		var bpt = pt,
		    start = {},
		    end = {},
		    transform = cssp._transform,
		    oldForce = _forcePT,
		    i,
		    p,
		    xp,
		    mpt,
		    firstPT;
		cssp._transform = null;
		_forcePT = vars;
		pt = firstPT = cssp.parse(t, vars, pt, plugin);
		_forcePT = oldForce;
		//break off from the linked list so the new ones are isolated.
		if (shallow) {
			cssp._transform = transform;
			if (bpt) {
				bpt._prev = null;
				if (bpt._prev) {
					bpt._prev._next = null;
				}
			}
		}
		while (pt && pt !== bpt) {
			if (pt.type <= 1) {
				p = pt.p;
				end[p] = pt.s + pt.c;
				start[p] = pt.s;
				if (!shallow) {
					mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
					pt.c = 0;
				}
				if (pt.type === 1) {
					i = pt.l;
					while (--i > 0) {
						xp = "xn" + i;
						p = pt.p + "_" + xp;
						end[p] = pt.data[xp];
						start[p] = pt[xp];
						if (!shallow) {
							mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
						}
					}
				}
			}
			pt = pt._next;
		}
		return { proxy: start, end: end, firstMPT: mpt, pt: firstPT };
	},


	/**
  * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
  * CSSPropTweens have the following optional properties as well (not defined through the constructor):
  *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
  *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
  *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
  *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
  *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
  * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
  * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
  * @param {number} s Starting numeric value
  * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
  * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
  * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
  * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
  * @param {boolean=} r If true, the value(s) should be rounded
  * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
  * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
  * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
  */
	CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
		this.t = t; //target
		this.p = p; //property
		this.s = s; //starting value
		this.c = c; //change value
		this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
		if (!(t instanceof CSSPropTween)) {
			_overwriteProps.push(this.n);
		}
		this.r = !r ? r : typeof r === "function" ? r : Math.round; //round (boolean)
		this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
		if (pr) {
			this.pr = pr;
			_hasPriority = true;
		}
		this.b = b === undefined ? s : b;
		this.e = e === undefined ? s + c : e;
		if (next) {
			this._next = next;
			next._prev = this;
		}
	},
	    _addNonTweeningNumericPT = function _addNonTweeningNumericPT(target, prop, start, end, next, overwriteProp) {
		//cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
		var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
		pt.b = start;
		pt.e = pt.xs0 = end;
		return pt;
	},


	/**
  * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
  * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
  * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
  * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
  *
  * @param {!Object} t Target whose property will be tweened
  * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
  * @param {string} b Beginning value
  * @param {string} e Ending value
  * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
  * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
  * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
  * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
  * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
  * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
  * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
  */
	_parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
		//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
		b = b || dflt || "";
		if (typeof e === "function") {
			e = e(_index, _target);
		}
		pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
		e += ""; //ensures it's a string
		if (clrs && _colorExp.test(e + b)) {
			//if colors are found, normalize the formatting to rgba() or hsla().
			e = [b, e];
			CSSPlugin.colorStringFilter(e);
			b = e[0];
			e = e[1];
		}
		var ba = b.split(", ").join(",").split(" "),
		    //beginning array
		ea = e.split(", ").join(",").split(" "),
		    //ending array
		l = ba.length,
		    autoRound = _autoRound !== false,
		    i,
		    xi,
		    ni,
		    bv,
		    ev,
		    bnums,
		    enums,
		    bn,
		    hasAlpha,
		    temp,
		    cv,
		    str,
		    useHSL;
		if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
			if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) {
				//keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
				ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
				ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
			} else {
				ba = ba.join(" ").split(",").join(", ").split(" ");
				ea = ea.join(" ").split(",").join(", ").split(" ");
			}
			l = ba.length;
		}
		if (l !== ea.length) {
			//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
			ba = (dflt || "").split(" ");
			l = ba.length;
		}
		pt.plugin = plugin;
		pt.setRatio = setRatio;
		_colorExp.lastIndex = 0;
		for (i = 0; i < l; i++) {
			bv = ba[i];
			ev = ea[i] + "";
			bn = parseFloat(bv);
			//if the value begins with a number (most common). It's fine if it has a suffix like px
			if (bn || bn === 0) {
				pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1 ? Math.round : false, true);

				//if the value is a color
			} else if (clrs && _colorExp.test(bv)) {
				str = ev.indexOf(")") + 1;
				str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
				useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity;
				temp = ev; //original string value so we can look for any prefix later.
				bv = _parseColor(bv, useHSL);
				ev = _parseColor(ev, useHSL);
				hasAlpha = bv.length + ev.length > 6;
				if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
					//older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
					pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
					pt.e = pt.e.split(ea[i]).join("transparent");
				} else {
					if (!_supportsOpacity) {
						//old versions of IE don't support rgba().
						hasAlpha = false;
					}
					if (useHSL) {
						pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, false);
					} else {
						pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true).appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, Math.round);
					}

					if (hasAlpha) {
						bv = bv.length < 4 ? 1 : bv[3];
						pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
					}
				}
				_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.
			} else {
				bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

				//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
				if (!bnums) {
					pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev;

					//loop through all the numbers that are found and construct the extra values on the pt.
				} else {
					enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
					if (!enums || enums.length !== bnums.length) {
						//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
						return pt;
					}
					ni = 0;
					for (xi = 0; xi < bnums.length; xi++) {
						cv = bnums[xi];
						temp = bv.indexOf(cv, ni);
						pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && bv.substr(temp + cv.length, 2) === "px" ? Math.round : false, xi === 0);
						ni = temp + cv.length;
					}
					pt["xs" + pt.l] += bv.substr(ni);
				}
			}
		}
		//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
		if (e.indexOf("=") !== -1) if (pt.data) {
			str = pt.xs0 + pt.data.s;
			for (i = 1; i < pt.l; i++) {
				str += pt["xs" + i] + pt.data["xn" + i];
			}
			pt.e = str + pt["xs" + i];
		}
		if (!pt.l) {
			pt.type = -1;
			pt.xs0 = pt.e;
		}
		return pt.xfirst || pt;
	},
	    i = 9;

	p = CSSPropTween.prototype;
	p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
	while (--i > 0) {
		p["xn" + i] = 0;
		p["xs" + i] = "";
	}
	p.xs0 = "";
	p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;

	/**
  * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
  * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
  * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
  * @param {string=} pfx Prefix (if any)
  * @param {!number} s Starting value
  * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
  * @param {string=} sfx Suffix (if any)
  * @param {boolean=} r Round (if true).
  * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
  * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
  */
	p.appendXtra = function (pfx, s, c, sfx, r, pad) {
		var pt = this,
		    l = pt.l;
		pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "";
		if (!c) if (l !== 0 && !pt.plugin) {
			//typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
			pt["xs" + l] += s + (sfx || "");
			return pt;
		}
		pt.l++;
		pt.type = pt.setRatio ? 2 : 1;
		pt["xs" + pt.l] = sfx || "";
		if (l > 0) {
			pt.data["xn" + l] = s + c;
			pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
			pt["xn" + l] = s;
			if (!pt.plugin) {
				pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
				pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
			}
			return pt;
		}
		pt.data = { s: s + c };
		pt.rxp = {};
		pt.s = s;
		pt.c = c;
		pt.r = r;
		return pt;
	};

	/**
  * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
  * @param {!string} p Property name (like "boxShadow" or "throwProps")
  * @param {Object=} options An object containing any of the following configuration options:
  *                      - defaultValue: the default value
  *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
  *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
  *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
  *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
  *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
  *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
  *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
  *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
  */
	var SpecialProp = function SpecialProp(p, options) {
		options = options || {};
		this.p = options.prefix ? _checkPropPrefix(p) || p : p;
		_specialProps[p] = _specialProps[this.p] = this;
		this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
		if (options.parser) {
			this.parse = options.parser;
		}
		this.clrs = options.color;
		this.multi = options.multi;
		this.keyword = options.keyword;
		this.dflt = options.defaultValue;
		this.allowFunc = options.allowFunc;
		this.pr = options.priority || 0;
	},


	//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
	_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
		if (typeof options !== "object") {
			options = { parser: defaults }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
		}
		var a = p.split(","),
		    d = options.defaultValue,
		    i,
		    temp;
		defaults = defaults || [d];
		for (i = 0; i < a.length; i++) {
			options.prefix = i === 0 && options.prefix;
			options.defaultValue = defaults[i] || d;
			temp = new SpecialProp(a[i], options);
		}
	},


	//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
	_registerPluginProp = _internals._registerPluginProp = function (p) {
		if (!_specialProps[p]) {
			var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
			_registerComplexSpecialProp(p, { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
					var pluginClass = _globals.com.greensock.plugins[pluginName];
					if (!pluginClass) {
						_log("Error: " + pluginName + " js file not loaded.");
						return pt;
					}
					pluginClass._cssRegister();
					return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
				} });
		}
	};

	p = SpecialProp.prototype;

	/**
  * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
  * @param {!Object} t target element
  * @param {(string|number|object)} b beginning value
  * @param {(string|number|object)} e ending (destination) value
  * @param {CSSPropTween=} pt next CSSPropTween in the linked list
  * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
  * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
  * @return {CSSPropTween=} First CSSPropTween in the linked list
  */
	p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
		var kwd = this.keyword,
		    i,
		    ba,
		    ea,
		    l,
		    bi,
		    ei;
		//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
		if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
			ba = b.replace(_commasOutsideParenExp, "|").split("|");
			ea = e.replace(_commasOutsideParenExp, "|").split("|");
		} else if (kwd) {
			ba = [b];
			ea = [e];
		}
		if (ea) {
			l = ea.length > ba.length ? ea.length : ba.length;
			for (i = 0; i < l; i++) {
				b = ba[i] = ba[i] || this.dflt;
				e = ea[i] = ea[i] || this.dflt;
				if (kwd) {
					bi = b.indexOf(kwd);
					ei = e.indexOf(kwd);
					if (bi !== ei) {
						if (ei === -1) {
							//if the keyword isn't in the end value, remove it from the beginning one.
							ba[i] = ba[i].split(kwd).join("");
						} else if (bi === -1) {
							//if the keyword isn't in the beginning, add it.
							ba[i] += " " + kwd;
						}
					}
				}
			}
			b = ba.join(", ");
			e = ea.join(", ");
		}
		return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
	};

	/**
  * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
  * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
  * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
  * @param {!Object} t Target object whose property is being tweened
  * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
  * @param {!string} p Property name
  * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
  * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
  * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
  * @param {Object=} vars Original vars object that contains the data for parsing.
  * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
  */
	p.parse = function (t, e, p, cssp, pt, plugin, vars) {
		return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
	};

	/**
  * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
  *  1) Target object whose property should be tweened (typically a DOM element)
  *  2) The end/destination value (could be a string, number, object, or whatever you want)
  *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
  *
  * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
  *
  * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
  *      var start = target.style.width;
  *      return function(ratio) {
  *              target.style.width = (start + value * ratio) + "px";
  *              console.log("set width to " + target.style.width);
  *          }
  * }, 0);
  *
  * Then, when I do this tween, it will trigger my special property:
  *
  * TweenLite.to(element, 1, {css:{myCustomProp:100}});
  *
  * In the example, of course, we're just changing the width, but you can do anything you want.
  *
  * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
  * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
  * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
  */
	CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
		_registerComplexSpecialProp(name, { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority: priority });
	};

	//transform-related methods and properties
	CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
	var _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
	    _transformProp = _checkPropPrefix("transform"),
	    //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
	_transformPropCSS = _prefixCSS + "transform",
	    _transformOriginProp = _checkPropPrefix("transformOrigin"),
	    _supports3D = _checkPropPrefix("perspective") !== null,
	    Transform = _internals.Transform = function () {
		this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
		this.force3D = CSSPlugin.defaultForce3D === false || !_supports3D ? false : CSSPlugin.defaultForce3D || "auto";
	},
	    _SVGElement = gsap_TweenLite["f" /* _gsScope */].SVGElement,
	    _useSVGTransformAttr,

	//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

	_createSVG = function _createSVG(type, container, attributes) {
		var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
		    reg = /([a-z])([A-Z])/g,
		    p;
		for (p in attributes) {
			element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
		}
		container.appendChild(element);
		return element;
	},
	    _docElement = _doc.documentElement || {},
	    _forceSVGTransformAttr = function () {
		//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
		var force = _ieVers || /Android/i.test(_agent) && !gsap_TweenLite["f" /* _gsScope */].chrome,
		    svg,
		    rect,
		    width;
		if (_doc.createElementNS && !force) {
			//IE8 and earlier doesn't support SVG anyway
			svg = _createSVG("svg", _docElement);
			rect = _createSVG("rect", svg, { width: 100, height: 50, x: 100 });
			width = rect.getBoundingClientRect().width;
			rect.style[_transformOriginProp] = "50% 50%";
			rect.style[_transformProp] = "scaleX(0.5)";
			force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
			_docElement.removeChild(svg);
		}
		return force;
	}(),
	    _parseSVGOrigin = function _parseSVGOrigin(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
		var tm = e._gsTransform,
		    m = _getMatrix(e, true),
		    v,
		    x,
		    y,
		    xOrigin,
		    yOrigin,
		    a,
		    b,
		    c,
		    d,
		    tx,
		    ty,
		    determinant,
		    xOriginOld,
		    yOriginOld;
		if (tm) {
			xOriginOld = tm.xOrigin; //record the original values before we alter them.
			yOriginOld = tm.yOrigin;
		}
		if (!absolute || (v = absolute.split(" ")).length < 2) {
			b = e.getBBox();
			if (b.x === 0 && b.y === 0 && b.width + b.height === 0) {
				//some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
				b = { x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width: 0, height: 0 };
			}
			local = _parsePosition(local).split(" ");
			v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
		}
		decoratee.xOrigin = xOrigin = parseFloat(v[0]);
		decoratee.yOrigin = yOrigin = parseFloat(v[1]);
		if (absolute && m !== _identity2DMatrix) {
			//if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
			a = m[0];
			b = m[1];
			c = m[2];
			d = m[3];
			tx = m[4];
			ty = m[5];
			determinant = a * d - b * c;
			if (determinant) {
				//if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
				x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
				y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
				xOrigin = decoratee.xOrigin = v[0] = x;
				yOrigin = decoratee.yOrigin = v[1] = y;
			}
		}
		if (tm) {
			//avoid jump when transformOrigin is changed - adjust the x/y values accordingly
			if (skipRecord) {
				decoratee.xOffset = tm.xOffset;
				decoratee.yOffset = tm.yOffset;
				tm = decoratee;
			}
			if (smoothOrigin || smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false) {
				x = xOrigin - xOriginOld;
				y = yOrigin - yOriginOld;
				//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
				//tm.x -= x - (x * m[0] + y * m[2]);
				//tm.y -= y - (x * m[1] + y * m[3]);
				tm.xOffset += x * m[0] + y * m[2] - x;
				tm.yOffset += x * m[1] + y * m[3] - y;
			} else {
				tm.xOffset = tm.yOffset = 0;
			}
		}
		if (!skipRecord) {
			e.setAttribute("data-svg-origin", v.join(" "));
		}
	},
	    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
		//works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
		var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
		    oldParent = this.parentNode,
		    oldSibling = this.nextSibling,
		    oldCSS = this.style.cssText,
		    bbox;
		_docElement.appendChild(svg);
		svg.appendChild(this);
		this.style.display = "block";
		if (swapIfPossible) {
			try {
				bbox = this.getBBox();
				this._originalGetBBox = this.getBBox;
				this.getBBox = _getBBoxHack;
			} catch (e) {}
		} else if (this._originalGetBBox) {
			bbox = this._originalGetBBox();
		}
		if (oldSibling) {
			oldParent.insertBefore(this, oldSibling);
		} else {
			oldParent.appendChild(this);
		}
		_docElement.removeChild(svg);
		this.style.cssText = oldCSS;
		return bbox;
	},
	    _getBBox = function _getBBox(e) {
		try {
			return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
		} catch (error) {
			return _getBBoxHack.call(e, true);
		}
	},
	    _isSVG = function _isSVG(e) {
		//reports if the element is an SVG on which getBBox() actually works
		return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
	},
	    _identity2DMatrix = [1, 0, 0, 1, 0, 0],
	    _getMatrix = function _getMatrix(e, force2D) {
		var tm = e._gsTransform || new Transform(),
		    rnd = 100000,
		    style = e.style,
		    isDefault,
		    s,
		    m,
		    n,
		    dec,
		    nextSibling,
		    parent;
		if (_transformProp) {
			s = _getStyle(e, _transformPropCSS, null, true);
		} else if (e.currentStyle) {
			//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
			s = e.currentStyle.filter.match(_ieGetMatrixExp);
			s = s && s.length === 4 ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : "";
		}
		isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";
		if (_transformProp && isDefault && !e.offsetParent) {
			//note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
			//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
			n = style.display;
			style.display = "block";
			parent = e.parentNode;
			if (!parent || !e.offsetParent) {
				dec = 1; //flag
				nextSibling = e.nextSibling;
				_docElement.appendChild(e); //we must add it to the DOM in order to get values properly
			}
			s = _getStyle(e, _transformPropCSS, null, true);
			isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";
			if (n) {
				style.display = n;
			} else {
				_removeProp(style, "display");
			}
			if (dec) {
				if (nextSibling) {
					parent.insertBefore(e, nextSibling);
				} else if (parent) {
					parent.appendChild(e);
				} else {
					_docElement.removeChild(e);
				}
			}
		}
		if (tm.svg || e.getCTM && _isSVG(e)) {
			if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
				//some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
				s = style[_transformProp];
				isDefault = 0;
			}
			m = e.getAttribute("transform");
			if (isDefault && m) {
				m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
				s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
				isDefault = 0;
			}
		}
		if (isDefault) {
			return _identity2DMatrix;
		}
		//split the matrix values out into an array (m for matrix)
		m = (s || "").match(_numExp) || [];
		i = m.length;
		while (--i > -1) {
			n = Number(m[i]);
			m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -0.5 : 0.5) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
		}
		return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
	},


	/**
  * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
  * @param {!Object} t target element
  * @param {Object=} cs computed style object (optional)
  * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
  * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
  * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
  */
	_getTransform = _internals.getTransform = function (t, cs, rec, parse) {
		if (t._gsTransform && rec && !parse) {
			return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
		}
		var tm = rec ? t._gsTransform || new Transform() : new Transform(),
		    invX = tm.scaleX < 0,
		    //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
		min = 0.00002,
		    rnd = 100000,
		    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
		    defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
		    m,
		    i,
		    scaleX,
		    scaleY,
		    rotation,
		    skewX;

		tm.svg = !!(t.getCTM && _isSVG(t));
		if (tm.svg) {
			_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
			_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
		}
		m = _getMatrix(t);
		if (m !== _identity2DMatrix) {

			if (m.length === 16) {
				//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
				var a11 = m[0],
				    a21 = m[1],
				    a31 = m[2],
				    a41 = m[3],
				    a12 = m[4],
				    a22 = m[5],
				    a32 = m[6],
				    a42 = m[7],
				    a13 = m[8],
				    a23 = m[9],
				    a33 = m[10],
				    a14 = m[12],
				    a24 = m[13],
				    a34 = m[14],
				    a43 = m[11],
				    angle = Math.atan2(a32, a33),
				    t1,
				    t2,
				    t3,
				    t4,
				    cos,
				    sin;
				//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
				if (tm.zOrigin) {
					a34 = -tm.zOrigin;
					a14 = a13 * a34 - m[12];
					a24 = a23 * a34 - m[13];
					a34 = a33 * a34 + tm.zOrigin - m[14];
				}
				//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
				tm.rotationX = angle * _RAD2DEG;
				//rotationX
				if (angle) {
					cos = Math.cos(-angle);
					sin = Math.sin(-angle);
					t1 = a12 * cos + a13 * sin;
					t2 = a22 * cos + a23 * sin;
					t3 = a32 * cos + a33 * sin;
					a13 = a12 * -sin + a13 * cos;
					a23 = a22 * -sin + a23 * cos;
					a33 = a32 * -sin + a33 * cos;
					a43 = a42 * -sin + a43 * cos;
					a12 = t1;
					a22 = t2;
					a32 = t3;
				}
				//rotationY
				angle = Math.atan2(-a31, a33);
				tm.rotationY = angle * _RAD2DEG;
				if (angle) {
					cos = Math.cos(-angle);
					sin = Math.sin(-angle);
					t1 = a11 * cos - a13 * sin;
					t2 = a21 * cos - a23 * sin;
					t3 = a31 * cos - a33 * sin;
					a23 = a21 * sin + a23 * cos;
					a33 = a31 * sin + a33 * cos;
					a43 = a41 * sin + a43 * cos;
					a11 = t1;
					a21 = t2;
					a31 = t3;
				}
				//rotationZ
				angle = Math.atan2(a21, a11);
				tm.rotation = angle * _RAD2DEG;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a11 * cos + a21 * sin;
					t2 = a12 * cos + a22 * sin;
					t3 = a13 * cos + a23 * sin;
					a21 = a21 * cos - a11 * sin;
					a22 = a22 * cos - a12 * sin;
					a23 = a23 * cos - a13 * sin;
					a11 = t1;
					a12 = t2;
					a13 = t3;
				}

				if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
					//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
					tm.rotationX = tm.rotation = 0;
					tm.rotationY = 180 - tm.rotationY;
				}

				//skewX
				angle = Math.atan2(a12, a22);

				//scales
				tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5 | 0) / rnd;
				tm.scaleY = (Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5 | 0) / rnd;
				tm.scaleZ = (Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5 | 0) / rnd;
				a11 /= tm.scaleX;
				a12 /= tm.scaleY;
				a21 /= tm.scaleX;
				a22 /= tm.scaleY;
				if (Math.abs(angle) > min) {
					tm.skewX = angle * _RAD2DEG;
					a12 = 0; //unskews
					if (tm.skewType !== "simple") {
						tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
					}
				} else {
					tm.skewX = 0;
				}

				/* //for testing purposes
    var transform = "matrix3d(",
    	comma = ",",
    	zero = "0";
    a13 /= tm.scaleZ;
    a23 /= tm.scaleZ;
    a31 /= tm.scaleX;
    a32 /= tm.scaleY;
    a33 /= tm.scaleZ;
    transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
    transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
    transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
    transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
    transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
    console.log(transform);
    document.querySelector(".test").style[_transformProp] = transform;
    */

				tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
				tm.x = a14;
				tm.y = a24;
				tm.z = a34;
				if (tm.svg) {
					tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
					tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
				}
			} else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
				//sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
				var k = m.length >= 6,
				    a = k ? m[0] : 1,
				    b = m[1] || 0,
				    c = m[2] || 0,
				    d = k ? m[3] : 1;
				tm.x = m[4] || 0;
				tm.y = m[5] || 0;
				scaleX = Math.sqrt(a * a + b * b);
				scaleY = Math.sqrt(d * d + c * c);
				rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
				skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
				tm.scaleX = scaleX;
				tm.scaleY = scaleY;
				tm.rotation = rotation;
				tm.skewX = skewX;
				if (_supports3D) {
					tm.rotationX = tm.rotationY = tm.z = 0;
					tm.perspective = defaultTransformPerspective;
					tm.scaleZ = 1;
				}
				if (tm.svg) {
					tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
					tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
				}
			}
			if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
				if (invX) {
					tm.scaleX *= -1;
					tm.skewX += tm.rotation <= 0 ? 180 : -180;
					tm.rotation += tm.rotation <= 0 ? 180 : -180;
				} else {
					tm.scaleY *= -1;
					tm.skewX += tm.skewX <= 0 ? 180 : -180;
				}
			}
			tm.zOrigin = zOrigin;
			//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
			for (i in tm) {
				if (tm[i] < min) if (tm[i] > -min) {
					tm[i] = 0;
				}
			}
		}
		//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
		if (rec) {
			t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
			if (tm.svg) {
				//if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
				if (_useSVGTransformAttr && t.style[_transformProp]) {
					gsap_TweenLite["g" /* default */].delayedCall(0.001, function () {
						//if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
						_removeProp(t.style, _transformProp);
					});
				} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
					gsap_TweenLite["g" /* default */].delayedCall(0.001, function () {
						t.removeAttribute("transform");
					});
				}
			}
		}
		return tm;
	},


	//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
	_setIETransformRatio = function _setIETransformRatio(v) {
		var t = this.data,
		    //refers to the element's _gsTransform object
		ang = -t.rotation * _DEG2RAD,
		    skew = ang + t.skewX * _DEG2RAD,
		    rnd = 100000,
		    a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
		    b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
		    c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
		    d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
		    style = this.t.style,
		    cs = this.t.currentStyle,
		    filters,
		    val;
		if (!cs) {
			return;
		}
		val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
		b = -c;
		c = -val;
		filters = cs.filter;
		style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
		var w = this.t.offsetWidth,
		    h = this.t.offsetHeight,
		    clip = cs.position !== "absolute",
		    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
		    ox = t.x + w * t.xPercent / 100,
		    oy = t.y + h * t.yPercent / 100,
		    dx,
		    dy;

		//if transformOrigin is being used, adjust the offset x and y
		if (t.ox != null) {
			dx = (t.oxp ? w * t.ox * 0.01 : t.ox) - w / 2;
			dy = (t.oyp ? h * t.oy * 0.01 : t.oy) - h / 2;
			ox += dx - (dx * a + dy * b);
			oy += dy - (dx * c + dy * d);
		}

		if (!clip) {
			m += ", sizingMethod='auto expand')";
		} else {
			dx = w / 2;
			dy = h / 2;
			//translate to ensure that transformations occur around the correct origin (default is center).
			m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
		}
		if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
			style.filter = filters.replace(_ieSetMatrixExp, m);
		} else {
			style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
		}

		//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
		if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
			style.removeAttribute("filter");
		}

		//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
		if (!clip) {
			var mult = _ieVers < 8 ? 1 : -1,
			    //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
			marg,
			    prop,
			    dif;
			dx = t.ieOffsetX || 0;
			dy = t.ieOffsetY || 0;
			t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
			t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
			for (i = 0; i < 4; i++) {
				prop = _margins[i];
				marg = cs[prop];
				//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
				val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
				if (val !== t[prop]) {
					dif = i < 2 ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
				} else {
					dif = i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY;
				}
				style[prop] = (t[prop] = Math.round(val - dif * (i === 0 || i === 2 ? 1 : mult))) + "px";
			}
		}
	},


	/* translates a super small decimal to a string WITHOUT scientific notation
 _safeDecimal = function(n) {
 	var s = (n < 0 ? -n : n) + "",
 		a = s.split("e-");
 	return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
 },
 */

	_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
		var t = this.data,
		    //refers to the element's _gsTransform object
		style = this.t.style,
		    angle = t.rotation,
		    rotationX = t.rotationX,
		    rotationY = t.rotationY,
		    sx = t.scaleX,
		    sy = t.scaleY,
		    sz = t.scaleZ,
		    x = t.x,
		    y = t.y,
		    z = t.z,
		    isSVG = t.svg,
		    perspective = t.perspective,
		    force3D = t.force3D,
		    skewY = t.skewY,
		    skewX = t.skewX,
		    t1,
		    a11,
		    a12,
		    a13,
		    a21,
		    a22,
		    a23,
		    a31,
		    a32,
		    a33,
		    a41,
		    a42,
		    a43,
		    zOrigin,
		    min,
		    cos,
		    sin,
		    t2,
		    transform,
		    comma,
		    zero,
		    skew,
		    rnd;
		if (skewY) {
			//for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
			skewX += skewY;
			angle += skewY;
		}

		//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
		if (((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1 || _useSVGTransformAttr && isSVG || !_supports3D) {
			//on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

			//2D
			if (angle || skewX || isSVG) {
				angle *= _DEG2RAD;
				skew = skewX * _DEG2RAD;
				rnd = 100000;
				a11 = Math.cos(angle) * sx;
				a21 = Math.sin(angle) * sx;
				a12 = Math.sin(angle - skew) * -sy;
				a22 = Math.cos(angle - skew) * sy;
				if (skew && t.skewType === "simple") {
					//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
					t1 = Math.tan(skew - skewY * _DEG2RAD);
					t1 = Math.sqrt(1 + t1 * t1);
					a12 *= t1;
					a22 *= t1;
					if (skewY) {
						t1 = Math.tan(skewY * _DEG2RAD);
						t1 = Math.sqrt(1 + t1 * t1);
						a11 *= t1;
						a21 *= t1;
					}
				}
				if (isSVG) {
					x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
					y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
						//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
						min = this.t.getBBox();
						x += t.xPercent * 0.01 * min.width;
						y += t.yPercent * 0.01 * min.height;
					}
					min = 0.000001;
					if (x < min) if (x > -min) {
						x = 0;
					}
					if (y < min) if (y > -min) {
						y = 0;
					}
				}
				transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")";
				if (isSVG && _useSVGTransformAttr) {
					this.t.setAttribute("transform", "matrix(" + transform);
				} else {
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
					style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
				}
			} else {
				style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
			}
			return;
		}
		if (_isFirefox) {
			//Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
			min = 0.0001;
			if (sx < min && sx > -min) {
				sx = sz = 0.00002;
			}
			if (sy < min && sy > -min) {
				sy = sz = 0.00002;
			}
			if (perspective && !t.z && !t.rotationX && !t.rotationY) {
				//Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
				perspective = 0;
			}
		}
		if (angle || skewX) {
			angle *= _DEG2RAD;
			cos = a11 = Math.cos(angle);
			sin = a21 = Math.sin(angle);
			if (skewX) {
				angle -= skewX * _DEG2RAD;
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				if (t.skewType === "simple") {
					//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
					t1 = Math.tan((skewX - skewY) * _DEG2RAD);
					t1 = Math.sqrt(1 + t1 * t1);
					cos *= t1;
					sin *= t1;
					if (t.skewY) {
						t1 = Math.tan(skewY * _DEG2RAD);
						t1 = Math.sqrt(1 + t1 * t1);
						a11 *= t1;
						a21 *= t1;
					}
				}
			}
			a12 = -sin;
			a22 = cos;
		} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
			//if we're only translating and/or 2D scaling, this is faster...
			style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (sx !== 1 || sy !== 1 ? " scale(" + sx + "," + sy + ")" : "");
			return;
		} else {
			a11 = a22 = 1;
			a12 = a21 = 0;
		}
		// KEY  INDEX   AFFECTS a[row][column]
		// a11  0       rotation, rotationY, scaleX
		// a21  1       rotation, rotationY, scaleX
		// a31  2       rotationY, scaleX
		// a41  3       rotationY, scaleX
		// a12  4       rotation, skewX, rotationX, scaleY
		// a22  5       rotation, skewX, rotationX, scaleY
		// a32  6       rotationX, scaleY
		// a42  7       rotationX, scaleY
		// a13  8       rotationY, rotationX, scaleZ
		// a23  9       rotationY, rotationX, scaleZ
		// a33  10      rotationY, rotationX, scaleZ
		// a43  11      rotationY, rotationX, perspective, scaleZ
		// a14  12      x, zOrigin, svgOrigin
		// a24  13      y, zOrigin, svgOrigin
		// a34  14      z, zOrigin
		// a44  15
		// rotation: Math.atan2(a21, a11)
		// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
		// rotationX: Math.atan2(a32, a33)
		a33 = 1;
		a13 = a23 = a31 = a32 = a41 = a42 = 0;
		a43 = perspective ? -1 / perspective : 0;
		zOrigin = t.zOrigin;
		min = 0.000001; //threshold below which browsers use scientific notation which won't work.
		comma = ",";
		zero = "0";
		angle = rotationY * _DEG2RAD;
		if (angle) {
			cos = Math.cos(angle);
			sin = Math.sin(angle);
			a31 = -sin;
			a41 = a43 * -sin;
			a13 = a11 * sin;
			a23 = a21 * sin;
			a33 = cos;
			a43 *= cos;
			a11 *= cos;
			a21 *= cos;
		}
		angle = rotationX * _DEG2RAD;
		if (angle) {
			cos = Math.cos(angle);
			sin = Math.sin(angle);
			t1 = a12 * cos + a13 * sin;
			t2 = a22 * cos + a23 * sin;
			a32 = a33 * sin;
			a42 = a43 * sin;
			a13 = a12 * -sin + a13 * cos;
			a23 = a22 * -sin + a23 * cos;
			a33 = a33 * cos;
			a43 = a43 * cos;
			a12 = t1;
			a22 = t2;
		}
		if (sz !== 1) {
			a13 *= sz;
			a23 *= sz;
			a33 *= sz;
			a43 *= sz;
		}
		if (sy !== 1) {
			a12 *= sy;
			a22 *= sy;
			a32 *= sy;
			a42 *= sy;
		}
		if (sx !== 1) {
			a11 *= sx;
			a21 *= sx;
			a31 *= sx;
			a41 *= sx;
		}

		if (zOrigin || isSVG) {
			if (zOrigin) {
				x += a13 * -zOrigin;
				y += a23 * -zOrigin;
				z += a33 * -zOrigin + zOrigin;
			}
			if (isSVG) {
				//due to bugs in some browsers, we need to manage the transform-origin of SVG manually
				x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
				y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
			}
			if (x < min && x > -min) {
				x = zero;
			}
			if (y < min && y > -min) {
				y = zero;
			}
			if (z < min && z > -min) {
				z = 0; //don't use string because we calculate perspective later and need the number.
			}
		}

		//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
		transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(";
		transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31);
		transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22);
		if (rotationX || rotationY || sz !== 1) {
			//performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
			transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13);
			transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma;
		} else {
			transform += ",0,0,0,0,1,0,";
		}
		transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")";

		style[_transformProp] = transform;
	};

	p = Transform.prototype;
	p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
	p.scaleX = p.scaleY = p.scaleZ = 1;

	_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function parser(t, e, parsingProp, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) {
				return pt;
			} //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var scaleFunc = vars.scale && typeof vars.scale === "function" ? vars.scale : 0; //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
			if (scaleFunc) {
				vars.scale = scaleFunc(_index, t);
			}
			var originalGSTransform = t._gsTransform,
			    style = t.style,
			    min = 0.000001,
			    i = _transformProps.length,
			    v = vars,
			    endRotations = {},
			    transformOriginString = "transformOrigin",
			    m1 = _getTransform(t, _cs, true, v.parseTransform),
			    orig = v.transform && (typeof v.transform === "function" ? v.transform(_index, _target) : v.transform),
			    m2,
			    copy,
			    has3D,
			    hasChange,
			    dr,
			    x,
			    y,
			    matrix,
			    p;
			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
			cssp._transform = m1;
			if ("rotationZ" in v) {
				v.rotation = v.rotationZ;
			}
			if (orig && typeof orig === "string" && _transformProp) {
				//for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = orig;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				if (orig.indexOf("%") !== -1) {
					//%-based translations will fail unless we set the width/height to match the original target...
					copy.width = _getStyle(t, "width");
					copy.height = _getStyle(t, "height");
				}
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				if (m1.skewType === "simple") {
					//the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
				}
				if (m1.svg) {
					//if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
					x = m1.xOrigin;
					y = m1.yOrigin;
					m2.x -= m1.xOffset;
					m2.y -= m1.yOffset;
					if (v.transformOrigin || v.svgOrigin) {
						//if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
						orig = {};
						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
						x = orig.xOrigin;
						y = orig.yOrigin;
						m2.x -= orig.xOffset - m1.xOffset;
						m2.y -= orig.yOffset - m1.yOffset;
					}
					if (x || y) {
						matrix = _getMatrix(_tempDiv, true);
						m2.x -= x - (x * matrix[0] + y * matrix[2]);
						m2.y -= y - (x * matrix[1] + y * matrix[3]);
					}
				}
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof v === "object") {
				//for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = { scaleX: _parseVal(v.scaleX != null ? v.scaleX : v.scale, m1.scaleX),
					scaleY: _parseVal(v.scaleY != null ? v.scaleY : v.scale, m1.scaleY),
					scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
					x: _parseVal(v.x, m1.x),
					y: _parseVal(v.y, m1.y),
					z: _parseVal(v.z, m1.z),
					xPercent: _parseVal(v.xPercent, m1.xPercent),
					yPercent: _parseVal(v.yPercent, m1.yPercent),
					perspective: _parseVal(v.transformPerspective, m1.perspective) };
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof dr === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof v.x === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof v.y === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = _parseAngle(v.skewX, m1.skewX);
				m2.skewY = _parseAngle(v.skewY, m1.skewY);
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = typeof v.transformOrigin === "function" ? v.transformOrigin(_index, _target) : v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString);
				}
				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || _supports3D && has3D && m1.zOrigin) {
				//if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					if (!orig) {
						orig = (_getStyle(t, p, _cs, false, "50% 50%") + "").split(" ");
						orig = orig[0] + " " + orig[1] + " " + m1.zOrigin + "px";
					}
					orig += "";
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = (orig.length > 2 ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = !(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			if (scaleFunc) {
				vars.scale = scaleFunc;
			}
			return pt;
		}, allowFunc: true, prefix: true });

	_registerComplexSpecialProp("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: true, color: true, multi: true, keyword: "inset" });
	_registerComplexSpecialProp("clipPath", { defaultValue: "inset(0px)", prefix: true, multi: true, formatter: _getFormatter("inset(0px 0px 0px 0px)", false, true) });

	_registerComplexSpecialProp("borderRadius", { defaultValue: "0px", parser: function parser(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
			    style = t.style,
			    ea1,
			    i,
			    es2,
			    bs2,
			    bs,
			    es,
			    bn,
			    en,
			    w,
			    h,
			    esfx,
			    bsfx,
			    rel,
			    hn,
			    vn,
			    em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) {
				//if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) {
					//older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = es.charAt(1) === "=";
				if (rel) {
					en = parseInt(es.charAt(0) + "1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = hn / w * 100 + "%";
						bs2 = vn / h * 100 + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = hn / em + "em";
						bs2 = vn / em + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = parseFloat(bs) + en + esfx;
						es2 = parseFloat(bs2) + en + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix: true, formatter: _getFormatter("0px 0px 0px 0px", false, true) });
	_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function parser(t, e, p, cssp, pt, plugin) {
			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
		}, prefix: true, formatter: _getFormatter("0px 0px", false, true) });
	_registerComplexSpecialProp("backgroundPosition", { defaultValue: "0 0", parser: function parser(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
			    cs = _cs || _getComputedStyle(t, null),
			    bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
			    //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
			es = this.format(e),
			    ba,
			    ea,
			    i,
			    pct,
			    overlap,
			    src;
			if (bs.indexOf("%") !== -1 !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = bs.indexOf("%") !== -1;
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = i === 0 ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter: _parsePosition });
	_registerComplexSpecialProp("backgroundSize", { defaultValue: "0 0", formatter: function formatter(v) {
			v += ""; //ensure it's a string
			return v.substr(0, 2) === "co" ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
		} });
	_registerComplexSpecialProp("perspective", { defaultValue: "0px", prefix: true });
	_registerComplexSpecialProp("perspectiveOrigin", { defaultValue: "50% 50%", prefix: true });
	_registerComplexSpecialProp("transformStyle", { prefix: true });
	_registerComplexSpecialProp("backfaceVisibility", { prefix: true });
	_registerComplexSpecialProp("userSelect", { prefix: true });
	_registerComplexSpecialProp("margin", { parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft") });
	_registerComplexSpecialProp("padding", { parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft") });
	_registerComplexSpecialProp("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function parser(t, e, p, cssp, pt, plugin) {
			var b, cs, delim;
			if (_ieVers < 9) {
				//IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		} });
	_registerComplexSpecialProp("textShadow", { defaultValue: "0px 0px 0px #999", color: true, multi: true });
	_registerComplexSpecialProp("autoRound,strictUnits", { parser: function parser(t, e, p, cssp, pt) {
			return pt;
		} }); //just so that we can ignore these properties (not tween them)
	_registerComplexSpecialProp("border", { defaultValue: "0px solid #000", parser: function parser(t, e, p, cssp, pt, plugin) {
			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
			    end = this.format(e).split(" "),
			    esfx = end[0].replace(_suffixExp, "");
			if (esfx !== "px") {
				//if we're animating to a non-px value, we need to convert the beginning width to that unit.
				bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx;
			}
			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
		}, color: true, formatter: function formatter(v) {
			var a = v.split(" ");
			return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
		} });
	_registerComplexSpecialProp("borderWidth", { parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
	_registerComplexSpecialProp("float,cssFloat,styleFloat", { parser: function parser(t, e, p, cssp, pt, plugin) {
			var s = t.style,
			    prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		} });

	//opacity-related
	var _setIEOpacityRatio = function _setIEOpacityRatio(v) {
		var t = this.t,
		    //refers to the element's style property
		filters = t.filter || _getStyle(this.data, "filter") || "",
		    val = this.s + this.c * v | 0,
		    skip;
		if (val === 100) {
			//for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
			if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
				t.removeAttribute("filter");
				skip = !_getStyle(this.data, "filter"); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
			} else {
				t.filter = filters.replace(_alphaFilterExp, "");
				skip = true;
			}
		}
		if (!skip) {
			if (this.xn1) {
				t.filter = filters = filters || "alpha(opacity=" + val + ")"; //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
			}
			if (filters.indexOf("pacity") === -1) {
				//only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
				if (val !== 0 || !this.xn1) {
					//bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
					t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
				}
			} else {
				t.filter = filters.replace(_opacityExp, "opacity=" + val);
			}
		}
	};
	_registerComplexSpecialProp("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function parser(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
			    style = t.style,
			    isAutoAlpha = p === "autoAlpha";
			if (typeof e === "string" && e.charAt(1) === "=") {
				e = (e.charAt(0) === "-" ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
				//if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) {
				//we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, b !== 0 ? "inherit" : "hidden", e === 0 ? "hidden" : "inherit");
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		} });

	var _removeProp = function _removeProp(s, p) {
		if (p) {
			if (s.removeProperty) {
				if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
					//Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
					p = "-" + p;
				}
				s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
			} else {
				//note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
				s.removeAttribute(p);
			}
		}
	},
	    _setClassNameRatio = function _setClassNameRatio(v) {
		this.t._gsClassPT = this;
		if (v === 1 || v === 0) {
			this.t.setAttribute("class", v === 0 ? this.b : this.e);
			var mpt = this.data,
			    //first MiniPropTween
			s = this.t.style;
			while (mpt) {
				if (!mpt.v) {
					_removeProp(s, mpt.p);
				} else {
					s[mpt.p] = mpt.v;
				}
				mpt = mpt._next;
			}
			if (v === 1 && this.t._gsClassPT === this) {
				this.t._gsClassPT = null;
			}
		} else if (this.t.getAttribute("class") !== this.e) {
			this.t.setAttribute("class", this.e);
		}
	};
	_registerComplexSpecialProp("className", { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "",
			    //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
			cssText = t.style.cssText,
			    difData,
			    bs,
			    cnpt,
			    cnptLookup,
			    mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = e.charAt(1) !== "=" ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + (e.charAt(0) === "+" ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		} });

	var _setClearPropsRatio = function _setClearPropsRatio(v) {
		if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
			//this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
			var s = this.t.style,
			    transformParse = _specialProps.transform.parse,
			    a,
			    p,
			    i,
			    clearTransform,
			    transform;
			if (this.e === "all") {
				s.cssText = "";
				clearTransform = true;
			} else {
				a = this.e.split(" ").join("").split(",");
				i = a.length;
				while (--i > -1) {
					p = a[i];
					if (_specialProps[p]) {
						if (_specialProps[p].parse === transformParse) {
							clearTransform = true;
						} else {
							p = p === "transformOrigin" ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
						}
					}
					_removeProp(s, p);
				}
			}
			if (clearTransform) {
				_removeProp(s, _transformProp);
				transform = this.t._gsTransform;
				if (transform) {
					if (transform.svg) {
						this.t.removeAttribute("data-svg-origin");
						this.t.removeAttribute("transform");
					}
					delete this.t._gsTransform;
				}
			}
		}
	};
	_registerComplexSpecialProp("clearProps", { parser: function parser(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		} });

	p = "bezier,throwProps,physicsProps,physics2D".split(",");
	i = p.length;
	while (i--) {
		_registerPluginProp(p[i]);
	}

	p = CSSPlugin.prototype;
	p._firstPT = p._lastParsedTransform = p._transform = null;

	//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
	p._onInitTween = function (target, vars, tween, index) {
		if (!target.nodeType) {
			//css is only for dom elements
			return false;
		}
		this._target = _target = target;
		this._tween = tween;
		this._vars = vars;
		_index = index;
		_autoRound = vars.autoRound;
		_hasPriority = false;
		_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
		_cs = _getComputedStyle(target, "");
		_overwriteProps = this._overwriteProps;
		var style = target.style,
		    v,
		    pt,
		    pt2,
		    first,
		    last,
		    next,
		    zIndex,
		    tpt,
		    threeD;
		if (_reqSafariFix) if (style.zIndex === "") {
			v = _getStyle(target, "zIndex", _cs);
			if (v === "auto" || v === "") {
				//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
				this._addLazySet(style, "zIndex", 0);
			}
		}

		if (typeof vars === "string") {
			first = style.cssText;
			v = _getAllStyles(target, _cs);
			style.cssText = first + ";" + vars;
			v = _cssDif(target, v, _getAllStyles(target)).difs;
			if (!_supportsOpacity && _opacityValExp.test(vars)) {
				v.opacity = parseFloat(RegExp.$1);
			}
			vars = v;
			style.cssText = first;
		}

		if (vars.className) {
			//className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
			this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
		} else {
			this._firstPT = pt = this.parse(target, vars, null);
		}

		if (this._transformType) {
			threeD = this._transformType === 3;
			if (!_transformProp) {
				style.zoom = 1; //helps correct an IE issue.
			} else if (_isSafari) {
				_reqSafariFix = true;
				//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
				if (style.zIndex === "") {
					zIndex = _getStyle(target, "zIndex", _cs);
					if (zIndex === "auto" || zIndex === "") {
						this._addLazySet(style, "zIndex", 0);
					}
				}
				//Setting WebkitBackfaceVisibility corrects 3 bugs:
				// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
				// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
				// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
				//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
				if (_isSafariLT6) {
					this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
				}
			}
			pt2 = pt;
			while (pt2 && pt2._next) {
				pt2 = pt2._next;
			}
			tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
			this._linkCSSP(tpt, null, pt2);
			tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
			tpt.data = this._transform || _getTransform(target, _cs, true);
			tpt.tween = tween;
			tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
			_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
		}

		if (_hasPriority) {
			//reorders the linked list in order of pr (priority)
			while (pt) {
				next = pt._next;
				pt2 = first;
				while (pt2 && pt2.pr > pt.pr) {
					pt2 = pt2._next;
				}
				if (pt._prev = pt2 ? pt2._prev : last) {
					pt._prev._next = pt;
				} else {
					first = pt;
				}
				if (pt._next = pt2) {
					pt2._prev = pt;
				} else {
					last = pt;
				}
				pt = next;
			}
			this._firstPT = first;
		}
		return true;
	};

	p.parse = function (target, vars, pt, plugin) {
		var style = target.style,
		    p,
		    sp,
		    bn,
		    en,
		    bs,
		    es,
		    bsfx,
		    esfx,
		    isStr,
		    rel;
		for (p in vars) {
			es = vars[p]; //ending value string
			sp = _specialProps[p]; //SpecialProp lookup.
			if (typeof es === "function" && !(sp && sp.allowFunc)) {
				es = es(_index, _target);
			}
			if (sp) {
				pt = sp.parse(target, es, p, this, pt, plugin, vars);
			} else if (p.substr(0, 2) === "--") {
				//for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
				this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
				continue;
			} else {
				bs = _getStyle(target, p, _cs) + "";
				isStr = typeof es === "string";
				if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es)) {
					//Opera uses background: to define color sometimes in addition to backgroundColor:
					if (!isStr) {
						es = _parseColor(es);
						es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")";
					}
					pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
				} else if (isStr && _complexExp.test(es)) {
					pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
				} else {
					bn = parseFloat(bs);
					bsfx = bn || bn === 0 ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

					if (bs === "" || bs === "auto") {
						if (p === "width" || p === "height") {
							bn = _getDimension(target, p, _cs);
							bsfx = "px";
						} else if (p === "left" || p === "top") {
							bn = _calculateOffset(target, p, _cs);
							bsfx = "px";
						} else {
							bn = p !== "opacity" ? 0 : 1;
							bsfx = "";
						}
					}

					rel = isStr && es.charAt(1) === "=";
					if (rel) {
						en = parseInt(es.charAt(0) + "1", 10);
						es = es.substr(2);
						en *= parseFloat(es);
						esfx = es.replace(_suffixExp, "");
					} else {
						en = parseFloat(es);
						esfx = isStr ? es.replace(_suffixExp, "") : "";
					}

					if (esfx === "") {
						esfx = p in _suffixMap ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
					}

					es = en || en === 0 ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
					//if the beginning/ending suffixes don't match, normalize them...
					if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) {
						//note: if the beginning value (bn) is 0, we don't need to convert units!
						bn = _convertToPixels(target, p, bn, bsfx);
						if (esfx === "%") {
							bn /= _convertToPixels(target, p, 100, "%") / 100;
							if (vars.strictUnits !== true) {
								//some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
								bs = bn + "%";
							}
						} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
							bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
						} else if (esfx !== "px") {
							en = _convertToPixels(target, p, en, esfx);
							esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
						}
						if (rel) if (en || en === 0) {
							es = en + bn + esfx; //the changes we made affect relative calculations, so adjust the end value here.
						}
					}

					if (rel) {
						en += bn;
					}

					if ((bn || bn === 0) && (en || en === 0)) {
						//faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
						pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && (esfx === "px" || p === "zIndex"), 0, bs, es);
						pt.xs0 = esfx;
						//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
					} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
						_log("invalid " + p + " tween value: " + vars[p]);
					} else {
						pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
						pt.xs0 = es === "none" && (p === "display" || p.indexOf("Style") !== -1) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
						//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
					}
				}
			}
			if (plugin) if (pt && !pt.plugin) {
				pt.plugin = plugin;
			}
		}
		return pt;
	};

	//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
	p.setRatio = function (v) {
		var pt = this._firstPT,
		    min = 0.000001,
		    val,
		    str,
		    i;
		//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
		if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
			while (pt) {
				if (pt.type !== 2) {
					if (pt.r && pt.type !== -1) {
						val = pt.r(pt.s + pt.c);
						if (!pt.type) {
							pt.t[pt.p] = val + pt.xs0;
						} else if (pt.type === 1) {
							//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
							i = pt.l;
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn" + i] + pt["xs" + (i + 1)];
							}
							pt.t[pt.p] = str;
						}
					} else {
						pt.t[pt.p] = pt.e;
					}
				} else {
					pt.setRatio(v);
				}
				pt = pt._next;
			}
		} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
			while (pt) {
				val = pt.c * v + pt.s;
				if (pt.r) {
					val = pt.r(val);
				} else if (val < min) if (val > -min) {
					val = 0;
				}
				if (!pt.type) {
					pt.t[pt.p] = val + pt.xs0;
				} else if (pt.type === 1) {
					//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
					i = pt.l;
					if (i === 2) {
						pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
					} else if (i === 3) {
						pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
					} else if (i === 4) {
						pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
					} else if (i === 5) {
						pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
					} else {
						str = pt.xs0 + val + pt.xs1;
						for (i = 1; i < pt.l; i++) {
							str += pt["xn" + i] + pt["xs" + (i + 1)];
						}
						pt.t[pt.p] = str;
					}
				} else if (pt.type === -1) {
					//non-tweening value
					pt.t[pt.p] = pt.xs0;
				} else if (pt.setRatio) {
					//custom setRatio() for things like SpecialProps, external plugins, etc.
					pt.setRatio(v);
				}
				pt = pt._next;
			}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
		} else {
			while (pt) {
				if (pt.type !== 2) {
					pt.t[pt.p] = pt.b;
				} else {
					pt.setRatio(v);
				}
				pt = pt._next;
			}
		}
	};

	/**
  * @private
  * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
  * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
  * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
  * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
  * doesn't have any transform-related properties of its own. You can call this method as many times as you
  * want and it won't create duplicate CSSPropTweens.
  *
  * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
  */
	p._enableTransforms = function (threeD) {
		this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
		this._transformType = !(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3) ? 3 : 2;
	};

	var lazySet = function lazySet(v) {
		this.t[this.p] = this.e;
		this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
	};
	/** @private Gives us a way to set a value on the first render (and only the first render). **/
	p._addLazySet = function (t, p, v) {
		var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
		pt.e = v;
		pt.setRatio = lazySet;
		pt.data = this;
	};

	/** @private **/
	p._linkCSSP = function (pt, next, prev, remove) {
		if (pt) {
			if (next) {
				next._prev = pt;
			}
			if (pt._next) {
				pt._next._prev = pt._prev;
			}
			if (pt._prev) {
				pt._prev._next = pt._next;
			} else if (this._firstPT === pt) {
				this._firstPT = pt._next;
				remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
			}
			if (prev) {
				prev._next = pt;
			} else if (!remove && this._firstPT === null) {
				this._firstPT = pt;
			}
			pt._next = next;
			pt._prev = prev;
		}
		return pt;
	};

	p._mod = function (lookup) {
		var pt = this._firstPT;
		while (pt) {
			if (typeof lookup[pt.p] === "function") {
				//only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
				pt.r = lookup[pt.p];
			}
			pt = pt._next;
		}
	};

	//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
	p._kill = function (lookup) {
		var copy = lookup,
		    pt,
		    p,
		    xfirst;
		if (lookup.autoAlpha || lookup.alpha) {
			copy = {};
			for (p in lookup) {
				//copy the lookup so that we're not changing the original which may be passed elsewhere.
				copy[p] = lookup[p];
			}
			copy.opacity = 1;
			if (copy.autoAlpha) {
				copy.visibility = 1;
			}
		}
		if (lookup.className && (pt = this._classNamePT)) {
			//for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
			xfirst = pt.xfirst;
			if (xfirst && xfirst._prev) {
				this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
			} else if (xfirst === this._firstPT) {
				this._firstPT = pt._next;
			}
			if (pt._next) {
				this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
			}
			this._classNamePT = null;
		}
		pt = this._firstPT;
		while (pt) {
			if (pt.plugin && pt.plugin !== p && pt.plugin._kill) {
				//for plugins that are registered with CSSPlugin, we should notify them of the kill.
				pt.plugin._kill(lookup);
				p = pt.plugin;
			}
			pt = pt._next;
		}
		return gsap_TweenLite["e" /* TweenPlugin */].prototype._kill.call(this, copy);
	};

	//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
	var _getChildStyles = function _getChildStyles(e, props, targets) {
		var children, i, child, type;
		if (e.slice) {
			i = e.length;
			while (--i > -1) {
				_getChildStyles(e[i], props, targets);
			}
			return;
		}
		children = e.childNodes;
		i = children.length;
		while (--i > -1) {
			child = children[i];
			type = child.type;
			if (child.style) {
				props.push(_getAllStyles(child));
				if (targets) {
					targets.push(child);
				}
			}
			if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
				_getChildStyles(child, props, targets);
			}
		}
	};

	/**
  * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
  * and then compares the style properties of all the target's child elements at the tween's start and end, and
  * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
  * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
  * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
  * is because it creates entirely new tweens that may have completely different targets than the original tween,
  * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
  * and it would create other problems. For example:
  *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
  *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
  *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
  *
  * @param {Object} target object to be tweened
  * @param {number} Duration in seconds (or frames for frames-based tweens)
  * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
  * @return {Array} An array of TweenLite instances
  */
	CSSPlugin.cascadeTo = function (target, duration, vars) {
		var tween = gsap_TweenLite["g" /* default */].to(target, duration, vars),
		    results = [tween],
		    b = [],
		    e = [],
		    targets = [],
		    _reservedProps = gsap_TweenLite["g" /* default */]._internals.reservedProps,
		    i,
		    difs,
		    p,
		    from;
		target = tween._targets || tween.target;
		_getChildStyles(target, b, targets);
		tween.render(duration, true, true);
		_getChildStyles(target, e);
		tween.render(0, true, true);
		tween._enabled(true);
		i = targets.length;
		while (--i > -1) {
			difs = _cssDif(targets[i], b[i], e[i]);
			if (difs.firstMPT) {
				difs = difs.difs;
				for (p in vars) {
					if (_reservedProps[p]) {
						difs[p] = vars[p];
					}
				}
				from = {};
				for (p in difs) {
					from[p] = b[i][p];
				}
				results.push(gsap_TweenLite["g" /* default */].fromTo(targets[i], duration, from, difs));
			}
		}
		return results;
	};

	gsap_TweenLite["e" /* TweenPlugin */].activate([CSSPlugin]);
	return CSSPlugin;
}, true);

var CSSPlugin_CSSPlugin = gsap_TweenLite["h" /* globals */].CSSPlugin;

// CONCATENATED MODULE: ../node_modules/gsap/CSSRulePlugin.js
/*!
 * VERSION: 0.6.8
 * DATE: 2019-02-22
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */




gsap_TweenLite["f" /* _gsScope */]._gsDefine("plugins.CSSRulePlugin", ["plugins.TweenPlugin", "TweenLite", "plugins.CSSPlugin"], function () {

	/** @constructor **/
	var CSSRulePlugin = function CSSRulePlugin() {
		gsap_TweenLite["e" /* TweenPlugin */].call(this, "cssRule");
		this._overwriteProps.length = 0;
	},
	    _doc = gsap_TweenLite["f" /* _gsScope */].document,
	    _superSetRatio = CSSPlugin_CSSPlugin.prototype.setRatio,
	    p = CSSRulePlugin.prototype = new CSSPlugin_CSSPlugin();

	p._propName = "cssRule";
	p.constructor = CSSRulePlugin;
	CSSRulePlugin.version = "0.6.8";
	CSSRulePlugin.API = 2;

	/**
  * Searches the style sheets in the document for a particular selector like ".myClass" or "a" or "a:hover" or ":after" and
  * returns a reference to that style sheet (or an array of them in the case of a pseudo selector like ":after"). Then you
  * can animate the individual properties of the style sheet.
  *
  * @param {!string} selector a string describing the selector, like ".myClass" or "a" or "a:hover" or ":after"
  * @return a reference to the style sheet (or an array of them in the case of a pseudo selector). If none was found, null is returned (or an empty array for a pseudo selector)
  */
	CSSRulePlugin.getRule = function (selector) {
		var ruleProp = _doc.all ? "rules" : "cssRules",
		    ss = _doc.styleSheets,
		    i = ss.length,
		    pseudo = selector.charAt(0) === ":",
		    j,
		    curSS,
		    cs,
		    a;
		selector = (pseudo ? "" : ",") + selector.split("::").join(":").toLowerCase() + ","; //note: old versions of IE report tag name selectors as upper case, so we just change everything to lowercase.
		if (pseudo) {
			a = [];
		}
		while (--i > -1) {
			//Firefox may throw insecure operation errors when css is loaded from other domains, so try/catch.
			try {
				curSS = ss[i][ruleProp];
				if (!curSS) {
					continue;
				}
				j = curSS.length;
			} catch (e) {
				console.log(e);
				continue;
			}
			while (--j > -1) {
				cs = curSS[j];
				if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector) !== -1) {
					//note: IE adds an extra ":" to pseudo selectors, so .myClass:after becomes .myClass::after, so we need to strip the extra one out.
					if (pseudo) {
						a.push(cs.style);
					} else {
						return cs.style;
					}
				}
			}
		}
		return a;
	};

	// @private gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
	p._onInitTween = function (target, value, tween) {
		if (target.cssText === undefined) {
			return false;
		}
		var div = target._gsProxy = target._gsProxy || _doc.createElement("div");
		this._ss = target;
		this._proxy = div.style;
		div.style.cssText = target.cssText;
		CSSPlugin_CSSPlugin.prototype._onInitTween.call(this, div, value, tween); //we just offload all the work to the regular CSSPlugin and then copy the cssText back over to the rule in the setRatio() method. This allows us to have all of the updates to CSSPlugin automatically flow through to CSSRulePlugin instead of having to maintain both
		return true;
	};

	// @private gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
	p.setRatio = function (v) {
		_superSetRatio.call(this, v);
		var proxy = this._proxy,
		    ss = this._ss,
		    i = proxy.length;
		while (--i > -1) {
			ss[proxy[i]] = proxy[proxy[i]];
		}
	};

	gsap_TweenLite["e" /* TweenPlugin */].activate([CSSRulePlugin]);
	return CSSRulePlugin;
}, true);

var CSSRulePlugin_CSSRulePlugin = gsap_TweenLite["h" /* globals */].CSSRulePlugin;

// CONCATENATED MODULE: ../node_modules/gsap/DirectionalRotationPlugin.js
/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var DirectionalRotationPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "directionalRotation",
	version: "0.3.1",
	API: 2,

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween, index) {
		if (typeof value !== "object") {
			value = { rotation: value };
		}
		this.finals = {};
		var cap = value.useRadians === true ? Math.PI * 2 : 360,
		    min = 0.000001,
		    p,
		    v,
		    start,
		    end,
		    dif,
		    split;
		for (p in value) {
			if (p !== "useRadians") {
				end = value[p];
				if (typeof end === "function") {
					end = end(index, target);
				}
				split = (end + "").split("_");
				v = split[0];
				start = parseFloat(typeof target[p] !== "function" ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]());
				end = this.finals[p] = typeof v === "string" && v.charAt(1) === "=" ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
				dif = end - start;
				if (split.length) {
					v = split.join("_");
					if (v.indexOf("short") !== -1) {
						dif = dif % cap;
						if (dif !== dif % (cap / 2)) {
							dif = dif < 0 ? dif + cap : dif - cap;
						}
					}
					if (v.indexOf("_cw") !== -1 && dif < 0) {
						dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
					} else if (v.indexOf("ccw") !== -1 && dif > 0) {
						dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
					}
				}
				if (dif > min || dif < -min) {
					this._addTween(target, p, start, start + dif, p);
					this._overwriteProps.push(p);
				}
			}
		}
		return true;
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(ratio) {
		var pt;
		if (ratio !== 1) {
			this._super.setRatio.call(this, ratio);
		} else {
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](this.finals[pt.p]);
				} else {
					pt.t[pt.p] = this.finals[pt.p];
				}
				pt = pt._next;
			}
		}
	}

});

DirectionalRotationPlugin._autoCSS = true;


// CONCATENATED MODULE: ../node_modules/gsap/EaselPlugin.js
/*!
 * VERSION: 0.2.2
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var EaselPlugin__numExp = /(\d|\.)+/g,
    _ColorFilter,
    _ColorMatrixFilter,
    _colorProps = ["redMultiplier", "greenMultiplier", "blueMultiplier", "alphaMultiplier", "redOffset", "greenOffset", "blueOffset", "alphaOffset"],
    EaselPlugin__colorLookup = { aqua: [0, 255, 255],
	lime: [0, 255, 0],
	silver: [192, 192, 192],
	black: [0, 0, 0],
	maroon: [128, 0, 0],
	teal: [0, 128, 128],
	blue: [0, 0, 255],
	navy: [0, 0, 128],
	white: [255, 255, 255],
	fuchsia: [255, 0, 255],
	olive: [128, 128, 0],
	yellow: [255, 255, 0],
	orange: [255, 165, 0],
	gray: [128, 128, 128],
	purple: [128, 0, 128],
	green: [0, 128, 0],
	red: [255, 0, 0],
	pink: [255, 192, 203],
	cyan: [0, 255, 255],
	transparent: [255, 255, 255, 0] },
    EaselPlugin__parseColor = function _parseColor(color) {
	if (color === "" || color == null || color === "none") {
		return EaselPlugin__colorLookup.transparent;
	} else if (EaselPlugin__colorLookup[color]) {
		return EaselPlugin__colorLookup[color];
	} else if (typeof color === "number") {
		return [color >> 16, color >> 8 & 255, color & 255];
	} else if (color.charAt(0) === "#") {
		if (color.length === 4) {
			//for shorthand like #9F0
			color = "#" + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2) + color.charAt(3) + color.charAt(3);
		}
		color = parseInt(color.substr(1), 16);
		return [color >> 16, color >> 8 & 255, color & 255];
	}
	return color.match(EaselPlugin__numExp) || EaselPlugin__colorLookup.transparent;
},
    EaselPlugin__parseColorFilter = function _parseColorFilter(t, v, pg) {
	if (!_ColorFilter) {
		_ColorFilter = gsap_TweenLite["f" /* _gsScope */].ColorFilter || gsap_TweenLite["f" /* _gsScope */].createjs.ColorFilter;
		if (!_ColorFilter) {
			throw "EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.";
		}
	}
	var filters = t.filters || [],
	    i = filters.length,
	    c,
	    s,
	    e,
	    a,
	    p;
	while (--i > -1) {
		if (filters[i] instanceof _ColorFilter) {
			s = filters[i];
			break;
		}
	}
	if (!s) {
		s = new _ColorFilter();
		filters.push(s);
		t.filters = filters;
	}
	e = s.clone();
	if (v.tint != null) {
		c = EaselPlugin__parseColor(v.tint);
		a = v.tintAmount != null ? Number(v.tintAmount) : 1;
		e.redOffset = Number(c[0]) * a;
		e.greenOffset = Number(c[1]) * a;
		e.blueOffset = Number(c[2]) * a;
		e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
	} else {
		for (p in v) {
			if (p !== "exposure") if (p !== "brightness") {
				e[p] = Number(v[p]);
			}
		}
	}
	if (v.exposure != null) {
		e.redOffset = e.greenOffset = e.blueOffset = 255 * (Number(v.exposure) - 1);
		e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
	} else if (v.brightness != null) {
		a = Number(v.brightness) - 1;
		e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
		e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
	}
	i = 8;
	while (--i > -1) {
		p = _colorProps[i];
		if (s[p] !== e[p]) {
			pg._addTween(s, p, s[p], e[p], "easel_colorFilter");
		}
	}
	pg._overwriteProps.push("easel_colorFilter");
	if (!t.cacheID) {
		throw "EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. " + t;
	}
},
    _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    _lumR = 0.212671,
    _lumG = 0.715160,
    _lumB = 0.072169,
    _applyMatrix = function _applyMatrix(m, m2) {
	if (!(m instanceof Array) || !(m2 instanceof Array)) {
		return m2;
	}
	var temp = [],
	    i = 0,
	    z = 0,
	    y,
	    x;
	for (y = 0; y < 4; y++) {
		for (x = 0; x < 5; x++) {
			z = x === 4 ? m[i + 4] : 0;
			temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
		}
		i += 5;
	}
	return temp;
},
    _setSaturation = function _setSaturation(m, n) {
	if (isNaN(n)) {
		return m;
	}
	var inv = 1 - n,
	    r = inv * _lumR,
	    g = inv * _lumG,
	    b = inv * _lumB;
	return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
},
    _colorize = function _colorize(m, color, amount) {
	if (isNaN(amount)) {
		amount = 1;
	}
	var c = EaselPlugin__parseColor(color),
	    r = c[0] / 255,
	    g = c[1] / 255,
	    b = c[2] / 255,
	    inv = 1 - amount;
	return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
},
    _setHue = function _setHue(m, n) {
	if (isNaN(n)) {
		return m;
	}
	n *= Math.PI / 180;
	var c = Math.cos(n),
	    s = Math.sin(n);
	return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
},
    _setContrast = function _setContrast(m, n) {
	if (isNaN(n)) {
		return m;
	}
	n += 0.01;
	return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
},
    EaselPlugin__parseColorMatrixFilter = function _parseColorMatrixFilter(t, v, pg) {
	if (!_ColorMatrixFilter) {
		_ColorMatrixFilter = gsap_TweenLite["f" /* _gsScope */].ColorMatrixFilter || gsap_TweenLite["f" /* _gsScope */].createjs.ColorMatrixFilter;
		if (!_ColorMatrixFilter) {
			throw "EaselPlugin error: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.";
		}
	}
	var filters = t.filters || [],
	    i = filters.length,
	    matrix,
	    startMatrix,
	    s;
	while (--i > -1) {
		if (filters[i] instanceof _ColorMatrixFilter) {
			s = filters[i];
			break;
		}
	}
	if (!s) {
		s = new _ColorMatrixFilter(_idMatrix.slice());
		filters.push(s);
		t.filters = filters;
	}
	startMatrix = s.matrix;
	matrix = _idMatrix.slice();
	if (v.colorize != null) {
		matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
	}
	if (v.contrast != null) {
		matrix = _setContrast(matrix, Number(v.contrast));
	}
	if (v.hue != null) {
		matrix = _setHue(matrix, Number(v.hue));
	}
	if (v.saturation != null) {
		matrix = _setSaturation(matrix, Number(v.saturation));
	}

	i = matrix.length;
	while (--i > -1) {
		if (matrix[i] !== startMatrix[i]) {
			pg._addTween(startMatrix, i, startMatrix[i], matrix[i], "easel_colorMatrixFilter");
		}
	}

	pg._overwriteProps.push("easel_colorMatrixFilter");
	if (!t.cacheID) {
		throw "EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. " + t;
	}

	pg._matrix = startMatrix;
};

var EaselPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "easel",
	priority: -1,
	version: "0.2.2",
	API: 2,

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween, index) {
		this._target = target;
		var p, pt, tint, colorMatrix, end, labels, i;
		for (p in value) {

			end = value[p];
			if (typeof end === "function") {
				end = end(index, target);
			}
			if (p === "colorFilter" || p === "tint" || p === "tintAmount" || p === "exposure" || p === "brightness") {
				if (!tint) {
					EaselPlugin__parseColorFilter(target, value.colorFilter || value, this);
					tint = true;
				}
			} else if (p === "saturation" || p === "contrast" || p === "hue" || p === "colorize" || p === "colorizeAmount") {
				if (!colorMatrix) {
					EaselPlugin__parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);
					colorMatrix = true;
				}
			} else if (p === "frame") {
				this._firstPT = pt = { _next: this._firstPT, t: target, p: "gotoAndStop", s: target.currentFrame, f: true, n: "frame", pr: 0, type: 0, m: Math.round };
				if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
					for (i = 0; i < labels.length; i++) {
						if (labels[i].label === end) {
							end = labels[i].position;
						}
					}
				}
				pt.c = typeof end === "number" ? end - pt.s : parseFloat((end + "").split("=").join(""));
				if (pt._next) {
					pt._next._prev = pt;
				}
			} else if (target[p] != null) {
				this._firstPT = pt = { _next: this._firstPT, t: target, p: p, f: typeof target[p] === "function", n: p, pr: 0, type: 0 };
				pt.s = !pt.f ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
				pt.c = typeof end === "number" ? end - pt.s : typeof end === "string" ? parseFloat(end.split("=").join("")) : 0;

				if (pt._next) {
					pt._next._prev = pt;
				}
			}
		}
		return true;
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(v) {
		var pt = this._firstPT,
		    min = 0.000001,
		    val;
		while (pt) {
			val = pt.c * v + pt.s;
			if (pt.m) {
				val = pt.m(val, pt.t);
			} else if (val < min && val > -min) {
				val = 0;
			}
			if (pt.f) {
				pt.t[pt.p](val);
			} else {
				pt.t[pt.p] = val;
			}
			pt = pt._next;
		}
		if (this._target.cacheID) {
			this._target.updateCache();
		}
	}

});


// CONCATENATED MODULE: ../node_modules/gsap/EndArrayPlugin.js
/*!
 * VERSION: 0.1.3
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



var EndArrayPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "endArray",
	API: 2,
	version: "0.1.3",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween) {
		var i = value.length,
		    a = this.a = [],
		    start,
		    end;
		this.target = target;
		this._mod = 0;
		if (!i) {
			return false;
		}
		while (--i > -1) {
			start = target[i];
			end = value[i];
			if (start !== end) {
				a.push({ i: i, s: start, c: end - start });
			}
		}
		return true;
	},

	mod: function mod(lookup) {
		if (typeof lookup.endArray === "function") {
			this._mod = lookup.endArray;
		}
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(ratio) {
		var target = this.target,
		    a = this.a,
		    i = a.length,
		    mod = this._mod,
		    e,
		    val;
		if (mod) {
			while (--i > -1) {
				e = a[i];
				target[e.i] = mod(e.s + e.c * ratio, target);
			}
		} else {
			while (--i > -1) {
				e = a[i];
				val = e.s + e.c * ratio;
				target[e.i] = val < 0.000001 && val > -0.000001 ? 0 : val;
			}
		}
	}

});


// CONCATENATED MODULE: ../node_modules/gsap/ModifiersPlugin.js
/*!
 * VERSION: 0.0.4
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



var _cssRatioSetter = function _cssRatioSetter(pt, cssp, mod) {
	//Takes an individual CSSPropTween and converts it into a type:2 that has a setRatio that does everything the regular CSSPlugin.setRatio() method does but applying the mod() too. We do this to keep the main CSSPlugin.setRatio() as fast as possible (the vast majority of times, no mod() will be necessary)
	var type = pt.type,
	    oldSetRatio = pt.setRatio,
	    tween = cssp._tween,
	    target = cssp._target;
	pt.type = 2;
	pt.m = mod;
	pt.setRatio = function (v) {
		var min = 0.000001,
		    val,
		    str,
		    i;
		if (v === 1 && (tween._time === tween._duration || tween._time === 0)) {

			if (type !== 2) {
				if (pt.r && type !== -1) {
					val = Math.round(pt.s + pt.c);
					if (!type) {
						pt.t[pt.p] = mod.call(tween, val + pt.xs0, target, tween);
					} else if (type === 1) {
						str = pt.xs0 + val + pt.xs1;
						for (i = 1; i < pt.l; i++) {
							str += pt["xn" + i] + pt["xs" + (i + 1)];
						}
						pt.t[pt.p] = mod.call(tween, str, target, tween);
					}
				} else {
					pt.t[pt.p] = mod.call(tween, pt.e, target, tween);
				}
			} else {
				oldSetRatio.call(pt, v);
			}
		} else if (v || !(tween._time === tween._duration || tween._time === 0) || tween._rawPrevTime === -0.000001) {
			val = pt.c * v + pt.s;
			if (pt.r) {
				val = Math.round(val);
			} else if (val < min) if (val > -min) {
				val = 0;
			}
			if (!type) {
				pt.t[pt.p] = mod.call(tween, val + pt.xs0, target, tween);
			} else if (type === 1) {
				str = pt.xs0 + val + pt.xs1;
				for (i = 1; i < pt.l; i++) {
					str += pt["xn" + i] + pt["xs" + (i + 1)];
				}
				pt.t[pt.p] = mod.call(tween, str, target, tween);
			} else if (type === -1) {
				//non-tweening value
				pt.t[pt.p] = mod.call(tween, pt.xs0, target, tween);
			} else if (oldSetRatio) {
				oldSetRatio.call(pt, v);
			}
		} else {
			if (type !== 2) {
				pt.t[pt.p] = mod.call(tween, pt.b, target, tween);
			} else {
				oldSetRatio.call(pt, v);
			}
		}
	};
},
    _modCSS = function _modCSS(lookup, cssp) {
	var pt = cssp._firstPT,
	    hasBezier = lookup.rotation && cssp._overwriteProps.join("").indexOf("bezier") !== -1; //when a Bezier tween is applying autoRotation, it's a very special case we need to handle differently.
	if (lookup.scale) {
		lookup.scaleX = lookup.scaleY = lookup.scale;
	} else if (lookup.rotationZ) {
		lookup.rotation = lookup.rotationZ;
	}
	while (pt) {
		if (typeof lookup[pt.p] === "function") {
			_cssRatioSetter(pt, cssp, lookup[pt.p]);
		} else if (hasBezier && pt.n === "bezier" && pt.plugin._overwriteProps.join("").indexOf("rotation") !== -1) {
			pt.data.mod = lookup.rotation;
		}
		pt = pt._next;
	}
},
    ModifiersPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "modifiers",
	version: "0.0.4",
	API: 2,

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween) {
		this._tween = tween;
		this._vars = value;
		return true;
	},

	initAll: function initAll() {
		var tween = this._tween,
		    lookup = this._vars,
		    mpt = this,
		    pt = tween._firstPT,
		    val,
		    next;
		//initAll() gets called for each and every ModifiersPlugin instance in a tween, so if there are multiple targets, there will be multiple instances. Since we're ripping through the whole tween (and all the PropTweens), we only need to run this code ONCE. So we're setting a toggle on the first PropTween that just tells us if we've done it already. We don't set it on the tween instance because if it gets invalidated, we don't want to have to track this property and reset it. PropTweens get blown away when a tween is invalidated.
		if (pt._modInitted) {
			return false;
		} else {
			pt._modInitted = 1;
		}
		while (pt) {
			next = pt._next; //record here, because it may get removed
			val = lookup[pt.n];
			if (pt.pg) {
				if (pt.t._propName === "css") {
					//handle CSSPlugin uniquely (for performance, due to the fact that the values almost always are a concatenation of numbers and strings, like suffixes, and we don't want to slow down the regular CSSPlugin setRatio() performance with conditional checks for if the value needs to be modded, so we pull any modding prop out and change it to a type:2 one that simply calls a setRatio() method where we encapsulate the modding and update all together. That way, it says in the main CSSProp linked list and just has some custom logic applied to it inside its setRatio())
					_modCSS(lookup, pt.t);
				} else if (pt.t !== mpt) {
					//don't run modProps on modProps :)
					val = lookup[pt.t._propName];
					pt.t._tween = tween;
					pt.t._mod(typeof val === "object" ? val : lookup);
				}
			} else if (typeof val === "function") {
				if (pt.f === 2 && pt.t) {
					//a blob (text containing multiple numeric values)
					pt.t._applyPT.m = val;
					pt.t._tween = tween;
				} else {
					this._add(pt.t, pt.p, pt.s, pt.c, val);
					//remove from linked list
					if (next) {
						next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = next;
					} else if (tween._firstPT === pt) {
						tween._firstPT = next;
					}
					pt._next = pt._prev = null;
					tween._propLookup[pt.n] = mpt;
				}
			}
			pt = next;
		}
		return false;
	}

}),
    ModifiersPlugin_p = ModifiersPlugin.prototype;

ModifiersPlugin_p._add = function (target, p, s, c, mod) {
	this._addTween(target, p, s, s + c, p, mod);
	this._overwriteProps.push(p);
};

ModifiersPlugin_p = gsap_TweenLite["f" /* _gsScope */]._gsDefine.globals.TweenLite.version.split(".");
if (Number(ModifiersPlugin_p[0]) <= 1 && Number(ModifiersPlugin_p[1]) < 19 && gsap_TweenLite["f" /* _gsScope */].console) {
	console.log("ModifiersPlugin requires GSAP 1.19.0 or later.");
}


// CONCATENATED MODULE: ../node_modules/gsap/PixiPlugin.js
/*!
 * VERSION: 0.2.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * PixiPlugin is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



var PixiPlugin__numExp = /(\d|\.)+/g,
    PixiPlugin__relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
    PixiPlugin__colorLookup = { aqua: [0, 255, 255],
	lime: [0, 255, 0],
	silver: [192, 192, 192],
	black: [0, 0, 0],
	maroon: [128, 0, 0],
	teal: [0, 128, 128],
	blue: [0, 0, 255],
	navy: [0, 0, 128],
	white: [255, 255, 255],
	fuchsia: [255, 0, 255],
	olive: [128, 128, 0],
	yellow: [255, 255, 0],
	orange: [255, 165, 0],
	gray: [128, 128, 128],
	purple: [128, 0, 128],
	green: [0, 128, 0],
	red: [255, 0, 0],
	pink: [255, 192, 203],
	cyan: [0, 255, 255],
	transparent: [255, 255, 255, 0] },
    PixiPlugin__hue = function _hue(h, m1, m2) {
	h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
	return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
},

/**
 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if "format" parameter is "hsl", it will populate the array with hue, saturation, and lightness values. Or if "format" is "number", it'll return a number like 0xFF0000 instead of an array. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
 * @param {(string)} format If "hsl", an hsl() or hsla() value will be returned instead of rgb() or rgba(). Or if "number", then a numeric value will be returned, like 0xFF0000. Default is rgb.
 * @return {(array|number)} An array containing red, green, and blue (and optionally alpha) in that order, or if the format parameter was "hsl", the array will contain hue, saturation and lightness (and optionally alpha) in that order. Or if "format" is defined as "number", it'll return a number like 0xFF0000. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and "format" is "hsl".
 */
PixiPlugin__parseColor = function _parseColor(v, format) {
	var toHSL = format === "hsl",
	    a,
	    r,
	    g,
	    b,
	    h,
	    s,
	    l,
	    max,
	    min,
	    d,
	    wasHSL;
	if (!v) {
		a = PixiPlugin__colorLookup.black;
	} else if (typeof v === "number") {
		a = [v >> 16, v >> 8 & 255, v & 255];
	} else {
		if (v.charAt(v.length - 1) === ",") {
			//sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
			v = v.substr(0, v.length - 1);
		}
		if (PixiPlugin__colorLookup[v]) {
			a = PixiPlugin__colorLookup[v];
		} else if (v.charAt(0) === "#") {
			if (v.length === 4) {
				//for shorthand like #9F0
				r = v.charAt(1);
				g = v.charAt(2);
				b = v.charAt(3);
				v = "#" + r + r + g + g + b + b;
			}
			v = parseInt(v.substr(1), 16);
			a = [v >> 16, v >> 8 & 255, v & 255];
		} else if (v.substr(0, 3) === "hsl") {
			a = wasHSL = v.match(PixiPlugin__numExp);
			if (!toHSL) {
				h = Number(a[0]) % 360 / 360;
				s = Number(a[1]) / 100;
				l = Number(a[2]) / 100;
				g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
				r = l * 2 - g;
				if (a.length > 3) {
					a[3] = Number(v[3]);
				}
				a[0] = PixiPlugin__hue(h + 1 / 3, r, g);
				a[1] = PixiPlugin__hue(h, r, g);
				a[2] = PixiPlugin__hue(h - 1 / 3, r, g);
			} else if (v.indexOf("=") !== -1) {
				//if relative values are found, just return the raw strings with the relative prefixes in place.
				return v.match(PixiPlugin__relNumExp);
			}
		} else {
			a = v.match(PixiPlugin__numExp) || PixiPlugin__colorLookup.transparent;
		}
		a[0] = Number(a[0]);
		a[1] = Number(a[1]);
		a[2] = Number(a[2]);
		if (a.length > 3) {
			a[3] = Number(a[3]);
		}
	}
	if (toHSL && !wasHSL) {
		r = a[0] / 255;
		g = a[1] / 255;
		b = a[2] / 255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max === min) {
			h = s = 0;
		} else {
			d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
			h *= 60;
		}
		a[0] = h + 0.5 | 0;
		a[1] = s * 100 + 0.5 | 0;
		a[2] = l * 100 + 0.5 | 0;
	}
	return format === "number" ? a[0] << 16 | a[1] << 8 | a[2] : a;
},
    PixiPlugin__formatColors = function _formatColors(s, toHSL) {
	var colors = (s + "").match(PixiPlugin__colorExp) || [],
	    charIndex = 0,
	    parsed = "",
	    i,
	    color,
	    temp;
	if (!colors.length) {
		return s;
	}
	for (i = 0; i < colors.length; i++) {
		color = colors[i];
		temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
		charIndex += temp.length + color.length;
		color = PixiPlugin__parseColor(color, toHSL ? "hsl" : "rgb");
		if (color.length === 3) {
			color.push(1);
		}
		parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
	}
	return parsed + s.substr(charIndex);
},
    PixiPlugin__colorStringFilter,
    PixiPlugin_TweenLite = (gsap_TweenLite["f" /* _gsScope */].GreenSockGlobals || gsap_TweenLite["f" /* _gsScope */]).TweenLite,
    PixiPlugin__colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
    //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

PixiPlugin__idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    PixiPlugin__lumR = 0.212671,
    PixiPlugin__lumG = 0.715160,
    PixiPlugin__lumB = 0.072169,
    PixiPlugin__applyMatrix = function _applyMatrix(m, m2) {
	var temp = [],
	    i = 0,
	    z = 0,
	    y,
	    x;
	for (y = 0; y < 4; y++) {
		for (x = 0; x < 5; x++) {
			z = x === 4 ? m[i + 4] : 0;
			temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
		}
		i += 5;
	}
	return temp;
},
    PixiPlugin__setSaturation = function _setSaturation(m, n) {
	var inv = 1 - n,
	    r = inv * PixiPlugin__lumR,
	    g = inv * PixiPlugin__lumG,
	    b = inv * PixiPlugin__lumB;
	return PixiPlugin__applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
},
    PixiPlugin__colorize = function _colorize(m, color, amount) {
	var c = PixiPlugin__parseColor(color),
	    r = c[0] / 255,
	    g = c[1] / 255,
	    b = c[2] / 255,
	    inv = 1 - amount;
	return PixiPlugin__applyMatrix([inv + amount * r * PixiPlugin__lumR, amount * r * PixiPlugin__lumG, amount * r * PixiPlugin__lumB, 0, 0, amount * g * PixiPlugin__lumR, inv + amount * g * PixiPlugin__lumG, amount * g * PixiPlugin__lumB, 0, 0, amount * b * PixiPlugin__lumR, amount * b * PixiPlugin__lumG, inv + amount * b * PixiPlugin__lumB, 0, 0, 0, 0, 0, 1, 0], m);
},
    PixiPlugin__setHue = function _setHue(m, n) {
	n *= Math.PI / 180;
	var c = Math.cos(n),
	    s = Math.sin(n);
	return PixiPlugin__applyMatrix([PixiPlugin__lumR + c * (1 - PixiPlugin__lumR) + s * -PixiPlugin__lumR, PixiPlugin__lumG + c * -PixiPlugin__lumG + s * -PixiPlugin__lumG, PixiPlugin__lumB + c * -PixiPlugin__lumB + s * (1 - PixiPlugin__lumB), 0, 0, PixiPlugin__lumR + c * -PixiPlugin__lumR + s * 0.143, PixiPlugin__lumG + c * (1 - PixiPlugin__lumG) + s * 0.14, PixiPlugin__lumB + c * -PixiPlugin__lumB + s * -0.283, 0, 0, PixiPlugin__lumR + c * -PixiPlugin__lumR + s * -(1 - PixiPlugin__lumR), PixiPlugin__lumG + c * -PixiPlugin__lumG + s * PixiPlugin__lumG, PixiPlugin__lumB + c * (1 - PixiPlugin__lumB) + s * PixiPlugin__lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
},
    PixiPlugin__setContrast = function _setContrast(m, n) {
	return PixiPlugin__applyMatrix([n, 0, 0, 0, 0.5 * (1 - n), 0, n, 0, 0, 0.5 * (1 - n), 0, 0, n, 0, 0.5 * (1 - n), 0, 0, 0, 1, 0], m);
},
    PixiPlugin__getFilter = function _getFilter(t, type) {
	var filterClass = gsap_TweenLite["f" /* _gsScope */].PIXI.filters[type],
	    filters = t.filters || [],
	    i = filters.length,
	    filter;
	if (!filterClass) {
		throw "PixiPlugin error: " + type + " isn't present.";
	}
	while (--i > -1) {
		if (filters[i] instanceof filterClass) {
			return filters[i];
		}
	}
	filter = new filterClass();
	if (type === "BlurFilter") {
		filter.blur = 0;
	}
	filters.push(filter);
	t.filters = filters;
	return filter;
},
    _addColorMatrixFilterCacheTween = function _addColorMatrixFilterCacheTween(p, pg, cache, vars) {
	//we cache the ColorMatrixFilter components in a _gsColorMatrixFilter object attached to the target object so that it's easy to grab the current value at any time.
	pg._addTween(cache, p, cache[p], vars[p], p);
	pg._overwriteProps.push(p);
},
    PixiPlugin__applyBrightnessToMatrix = function _applyBrightnessToMatrix(brightness, matrix) {
	var temp = new gsap_TweenLite["f" /* _gsScope */].PIXI.filters.ColorMatrixFilter();
	temp.matrix = matrix;
	temp.brightness(brightness, true);
	return temp.matrix;
},
    _CMFdefaults = { contrast: 1, saturation: 1, colorizeAmount: 0, colorize: "rgb(255,255,255)", hue: 0, brightness: 1 },
    PixiPlugin__parseColorMatrixFilter = function _parseColorMatrixFilter(t, v, pg) {
	var filter = PixiPlugin__getFilter(t, "ColorMatrixFilter"),
	    cache = t._gsColorMatrixFilter = t._gsColorMatrixFilter || { contrast: 1, saturation: 1, colorizeAmount: 0, colorize: "rgb(255,255,255)", hue: 0, brightness: 1 },
	    combine = v.combineCMF && !("colorMatrixFilter" in v && !v.colorMatrixFilter),
	    i,
	    matrix,
	    startMatrix;
	startMatrix = filter.matrix;
	if (v.resolution) {
		filter.resolution = v.resolution;
	}
	if (v.matrix && v.matrix.length === startMatrix.length) {
		matrix = v.matrix;
		if (cache.contrast !== 1) {
			_addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
		}
		if (cache.hue) {
			_addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
		}
		if (cache.brightness !== 1) {
			_addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
		}
		if (cache.colorizeAmount) {
			_addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);
			_addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
		}
		if (cache.saturation !== 1) {
			_addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
		}
	} else {
		matrix = PixiPlugin__idMatrix.slice();
		if (v.contrast != null) {
			matrix = PixiPlugin__setContrast(matrix, Number(v.contrast));
			_addColorMatrixFilterCacheTween("contrast", pg, cache, v);
		} else if (cache.contrast !== 1) {
			if (combine) {
				matrix = PixiPlugin__setContrast(matrix, cache.contrast);
			} else {
				_addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
			}
		}
		if (v.hue != null) {
			matrix = PixiPlugin__setHue(matrix, Number(v.hue));
			_addColorMatrixFilterCacheTween("hue", pg, cache, v);
		} else if (cache.hue) {
			if (combine) {
				matrix = PixiPlugin__setHue(matrix, cache.hue);
			} else {
				_addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
			}
		}
		if (v.brightness != null) {
			matrix = PixiPlugin__applyBrightnessToMatrix(Number(v.brightness), matrix);
			_addColorMatrixFilterCacheTween("brightness", pg, cache, v);
		} else if (cache.brightness !== 1) {
			if (combine) {
				matrix = PixiPlugin__applyBrightnessToMatrix(cache.brightness, matrix);
			} else {
				_addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
			}
		}
		if (v.colorize != null) {
			v.colorizeAmount = "colorizeAmount" in v ? Number(v.colorizeAmount) : 1;
			matrix = PixiPlugin__colorize(matrix, v.colorize, v.colorizeAmount);
			_addColorMatrixFilterCacheTween("colorize", pg, cache, v);
			_addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, v);
		} else if (cache.colorizeAmount) {
			if (combine) {
				matrix = PixiPlugin__colorize(matrix, cache.colorize, cache.colorizeAmount);
			} else {
				_addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);
				_addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
			}
		}
		if (v.saturation != null) {
			matrix = PixiPlugin__setSaturation(matrix, Number(v.saturation));
			_addColorMatrixFilterCacheTween("saturation", pg, cache, v);
		} else if (cache.saturation !== 1) {
			if (combine) {
				matrix = PixiPlugin__setSaturation(matrix, cache.saturation);
			} else {
				_addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
			}
		}
	}
	i = matrix.length;
	while (--i > -1) {
		if (matrix[i] !== startMatrix[i]) {
			pg._addTween(startMatrix, i, startMatrix[i], matrix[i], "colorMatrixFilter");
		}
	}
	pg._overwriteProps.push("colorMatrixFilter");
},
    _addColorTween = function _addColorTween(target, p, value, colorSetter, plugin) {
	var pt = colorSetter._firstPT = { _next: colorSetter._firstPT, t: target, p: p, proxy: {}, f: typeof target[p] === "function" };
	pt.proxy[p] = "rgb(" + PixiPlugin__parseColor(!pt.f ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]()).join(",") + ")";
	plugin._addTween(pt.proxy, p, "get", typeof value === "number" ? "rgb(" + PixiPlugin__parseColor(value, false).join(",") + ")" : value, p, null, null, PixiPlugin__colorStringFilter);
},


//to improve performance, when a color is sensed, we hijack the setRatio() method of the plugin instance with a new function that this method spits back. This is a special method that handles parsing color values on-the-fly and turns them into numeric values which PixiJS requires. In other words, instead of "rgb(255, 0, 0)", PixiJS wants 0xFF0000. This also works with hsl() values.
_buildColorSetter = function _buildColorSetter(tween, plugin) {
	var setRatio = plugin.setRatio,
	    //save the original (super) setRatio() function
	func = function func(v) {
		var pt = func._firstPT,
		    val;
		setRatio.call(plugin, v);
		while (pt) {
			val = PixiPlugin__parseColor(pt.proxy[pt.p], "number");
			if (pt.f) {
				pt.t[pt.p](val);
			} else {
				pt.t[pt.p] = val;
			}
			pt = pt._next;
		}
		if (func.graphics) {
			//in order for PixiJS to actually redraw GraphicsData, we've gotta increment the "dirty" and "clearDirty" values. If we don't do this, the values will be tween properly, but not rendered.
			func.graphics.dirty++;
			func.graphics.clearDirty++;
		}
	};
	plugin.setRatio = func;
	return func;
},
    PixiPlugin__colorProps = { tint: 1, lineColor: 1, fillColor: 1 },
    _xyContexts = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
    _contexts = { x: "position", y: "position", tileX: "tilePosition", tileY: "tilePosition" },
    _colorMatrixFilterProps = { colorMatrixFilter: 1, saturation: 1, contrast: 1, hue: 1, colorize: 1, colorizeAmount: 1, brightness: 1, combineCMF: 1 },
    PixiPlugin__DEG2RAD = Math.PI / 180,
    _degreesToRadians = function _degreesToRadians(value) {
	return typeof value === "string" && value.charAt(1) === "=" ? value.substr(0, 2) + parseFloat(value.substr(2)) * PixiPlugin__DEG2RAD : value * PixiPlugin__DEG2RAD;
},
    PixiPlugin_i,
    PixiPlugin_p;

//context setup...
for (PixiPlugin_i = 0; PixiPlugin_i < _xyContexts.length; PixiPlugin_i++) {
	PixiPlugin_p = _xyContexts[PixiPlugin_i];
	_contexts[PixiPlugin_p + "X"] = PixiPlugin_p;
	_contexts[PixiPlugin_p + "Y"] = PixiPlugin_p;
}

//color parsing setup...
for (PixiPlugin_p in PixiPlugin__colorLookup) {
	PixiPlugin__colorExp += "|" + PixiPlugin_p + "\\b";
}
PixiPlugin__colorExp = new RegExp(PixiPlugin__colorExp + ")", "gi");
PixiPlugin__colorStringFilter = function _colorStringFilter(a) {
	var combined = a[0] + " " + a[1],
	    toHSL;
	PixiPlugin__colorExp.lastIndex = 0;
	if (PixiPlugin__colorExp.test(combined)) {
		toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
		a[0] = PixiPlugin__formatColors(a[0], toHSL);
		a[1] = PixiPlugin__formatColors(a[1], toHSL);
	}
};

if (!PixiPlugin_TweenLite.defaultStringFilter) {
	PixiPlugin_TweenLite.defaultStringFilter = PixiPlugin__colorStringFilter;
}

var PixiPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "pixi",
	priority: 0,
	API: 2,
	global: true,
	version: "0.2.1",

	init: function init(target, values, tween, index) {
		if (!target instanceof gsap_TweenLite["f" /* _gsScope */].PIXI.DisplayObject) {
			return false;
		}
		var context, axis, value, colorMatrix, filter, p, padding, colorSetter, i, data, pt;
		for (p in values) {
			context = _contexts[p];
			value = values[p];
			if (typeof value === "function") {
				value = value(index || 0, target);
			}
			if (context) {
				axis = p.charAt(p.length - 1).toLowerCase().indexOf("x") !== -1 ? "x" : "y";
				this._addTween(target[context], axis, target[context][axis], context === "skew" ? _degreesToRadians(value) : value, p);
			} else if (p === "scale" || p === "anchor" || p === "pivot" || p === "tileScale") {
				this._addTween(target[p], "x", target[p].x, value, p + "X");
				this._addTween(target[p], "y", target[p].y, value, p + "Y");
			} else if (p === "rotation") {
				//PIXI expects rotation in radians, but as a convenience we let folks define it in degrees and we do the conversion.
				this._addTween(target, p, target.rotation, _degreesToRadians(value), p);
			} else if (_colorMatrixFilterProps[p]) {
				if (!colorMatrix) {
					PixiPlugin__parseColorMatrixFilter(target, values.colorMatrixFilter || values, this);
					colorMatrix = true;
				}
			} else if (p === "blur" || p === "blurX" || p === "blurY" || p === "blurPadding") {
				filter = PixiPlugin__getFilter(target, "BlurFilter");
				this._addTween(filter, p, filter[p], value, p);
				if (values.blurPadding !== 0) {
					padding = values.blurPadding || Math.max(filter[p], value) * 2;
					i = target.filters.length;
					while (--i > -1) {
						target.filters[i].padding = Math.max(target.filters[i].padding, padding); //if we don't expand the padding on all the filters, it can look clipped.
					}
				}
			} else if (PixiPlugin__colorProps[p]) {
				if (!colorSetter) {
					colorSetter = _buildColorSetter(tween, this);
				}
				if ((p === "lineColor" || p === "fillColor") && target instanceof gsap_TweenLite["f" /* _gsScope */].PIXI.Graphics) {
					data = target.graphicsData;
					i = data.length;
					while (--i > -1) {
						_addColorTween(data[i], p, value, colorSetter, this);
					}
					colorSetter.graphics = target;
				} else {
					_addColorTween(target, p, value, colorSetter, this);
				}
			} else if (p === "autoAlpha") {
				this._firstPT = pt = { t: { setRatio: function setRatio() {
							target.visible = !!target.alpha;
						} }, p: "setRatio", s: 0, c: 1, f: 1, pg: 0, n: "visible", pr: 0, m: 0, _next: this._firstPT };
				if (pt._next) {
					pt._next._prev = pt;
				}
				this._addTween(target, "alpha", target.alpha, value, "alpha");
				this._overwriteProps.push("alpha", "visible");
			} else {
				this._addTween(target, p, target[p], value, p);
			}
			this._overwriteProps.push(p);
		}
		return true;
	}
});

PixiPlugin.colorProps = PixiPlugin__colorProps;
PixiPlugin.parseColor = PixiPlugin__parseColor;
PixiPlugin.formatColors = PixiPlugin__formatColors;
PixiPlugin.colorStringFilter = PixiPlugin__colorStringFilter;


// CONCATENATED MODULE: ../node_modules/gsap/RoundPropsPlugin.js
/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var RoundPropsPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "roundProps",
	version: "1.7.0",
	priority: -1,
	API: 2,

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween) {
		this._tween = tween;
		return true;
	}

}),
    _getRoundFunc = function _getRoundFunc(v) {
	//pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
	var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
	return function (n) {
		return (Math.round(n / v) * v * p | 0) / p;
	};
},
    _roundLinkedList = function _roundLinkedList(node, mod) {
	while (node) {
		if (!node.f && !node.blob) {
			node.m = mod || Math.round;
		}
		node = node._next;
	}
},
    RoundPropsPlugin_p = RoundPropsPlugin.prototype;

RoundPropsPlugin_p._onInitAllProps = function () {
	var tween = this._tween,
	    rp = tween.vars.roundProps,
	    lookup = {},
	    rpt = tween._propLookup.roundProps,
	    pt,
	    next,
	    i,
	    p;
	if (typeof rp === "object" && !rp.push) {
		for (p in rp) {
			lookup[p] = _getRoundFunc(rp[p]);
		}
	} else {
		if (typeof rp === "string") {
			rp = rp.split(",");
		}
		i = rp.length;
		while (--i > -1) {
			lookup[rp[i]] = Math.round;
		}
	}

	for (p in lookup) {
		pt = tween._firstPT;
		while (pt) {
			next = pt._next; //record here, because it may get removed
			if (pt.pg) {
				pt.t._mod(lookup);
			} else if (pt.n === p) {
				if (pt.f === 2 && pt.t) {
					//a blob (text containing multiple numeric values)
					_roundLinkedList(pt.t._firstPT, lookup[p]);
				} else {
					this._add(pt.t, p, pt.s, pt.c, lookup[p]);
					//remove from linked list
					if (next) {
						next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = next;
					} else if (tween._firstPT === pt) {
						tween._firstPT = next;
					}
					pt._next = pt._prev = null;
					tween._propLookup[p] = rpt;
				}
			}
			pt = next;
		}
	}
	return false;
};

RoundPropsPlugin_p._add = function (target, p, s, c, mod) {
	this._addTween(target, p, s, s + c, p, mod || Math.round);
	this._overwriteProps.push(p);
};


// CONCATENATED MODULE: ../node_modules/gsap/ScrollToPlugin.js
/*!
 * VERSION: 1.9.2
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var ScrollToPlugin__doc = (gsap_TweenLite["f" /* _gsScope */].document || {}).documentElement,
    _window = gsap_TweenLite["f" /* _gsScope */],
    ScrollToPlugin__max = function _max(element, axis) {
	var dim = axis === "x" ? "Width" : "Height",
	    scroll = "scroll" + dim,
	    client = "client" + dim,
	    body = document.body;
	return element === _window || element === ScrollToPlugin__doc || element === body ? Math.max(ScrollToPlugin__doc[scroll], body[scroll]) - (_window["inner" + dim] || ScrollToPlugin__doc[client] || body[client]) : element[scroll] - element["offset" + dim];
},
    ScrollToPlugin__unwrapElement = function _unwrapElement(value) {
	if (typeof value === "string") {
		value = TweenLite.selector(value);
	}
	if (value.length && value !== _window && value[0] && value[0].style && !value.nodeType) {
		value = value[0];
	}
	return value === _window || value.nodeType && value.style ? value : null;
},
    _buildGetter = function _buildGetter(e, axis) {
	//pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
	var p = "scroll" + (axis === "x" ? "Left" : "Top");
	if (e === _window) {
		if (e.pageXOffset != null) {
			p = "page" + axis.toUpperCase() + "Offset";
		} else if (ScrollToPlugin__doc[p] != null) {
			e = ScrollToPlugin__doc;
		} else {
			e = document.body;
		}
	}
	return function () {
		return e[p];
	};
},
    _getOffset = function _getOffset(element, container) {
	var rect = ScrollToPlugin__unwrapElement(element).getBoundingClientRect(),
	    b = document.body,
	    isRoot = !container || container === _window || container === b,
	    cRect = isRoot ? { top: ScrollToPlugin__doc.clientTop - (window.pageYOffset || ScrollToPlugin__doc.scrollTop || b.scrollTop || 0), left: ScrollToPlugin__doc.clientLeft - (window.pageXOffset || ScrollToPlugin__doc.scrollLeft || b.scrollLeft || 0) } : container.getBoundingClientRect(),
	    offsets = { x: rect.left - cRect.left, y: rect.top - cRect.top };
	if (!isRoot && container) {
		//only add the current scroll position if it's not the window/body.
		offsets.x += _buildGetter(container, "x")();
		offsets.y += _buildGetter(container, "y")();
	}
	return offsets;
	/*	PREVIOUS
 var rect = _unwrapElement(element).getBoundingClientRect(),
 	isRoot = (!container || container === _window || container === document.body),
 	cRect = (isRoot ? _doc : container).getBoundingClientRect(),
 	offsets = {x: rect.left - cRect.left, y: rect.top - cRect.top};
 if (!isRoot && container) { //only add the current scroll position if it's not the window/body.
 	offsets.x += _buildGetter(container, "x")();
 	offsets.y += _buildGetter(container, "y")();
 }
 return offsets;
 */
},
    ScrollToPlugin__parseVal = function _parseVal(value, target, axis, currentVal) {
	var type = typeof value;
	return !isNaN(value) ? parseFloat(value) : type === "string" && value.charAt(1) === "=" ? parseInt(value.charAt(0) + "1", 10) * parseFloat(value.substr(2)) + currentVal : value === "max" ? ScrollToPlugin__max(target, axis) : Math.min(ScrollToPlugin__max(target, axis), _getOffset(value, target)[axis]);
},
    ScrollToPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "scrollTo",
	API: 2,
	global: true,
	version: "1.9.2",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween) {
		this._wdw = target === _window;
		this._target = target;
		this._tween = tween;
		if (typeof value !== "object") {
			value = { y: value }; //if we don't receive an object as the parameter, assume the user intends "y".
			if (typeof value.y === "string" && value.y !== "max" && value.y.charAt(1) !== "=") {
				value.x = value.y;
			}
		} else if (value.nodeType) {
			value = { y: value, x: value };
		}
		this.vars = value;
		this._autoKill = value.autoKill !== false;
		this.getX = _buildGetter(target, "x");
		this.getY = _buildGetter(target, "y");
		this.x = this.xPrev = this.getX();
		this.y = this.yPrev = this.getY();
		if (value.x != null) {
			this._addTween(this, "x", this.x, ScrollToPlugin__parseVal(value.x, target, "x", this.x) - (value.offsetX || 0), "scrollTo_x", true);
			this._overwriteProps.push("scrollTo_x");
		} else {
			this.skipX = true;
		}
		if (value.y != null) {
			this._addTween(this, "y", this.y, ScrollToPlugin__parseVal(value.y, target, "y", this.y) - (value.offsetY || 0), "scrollTo_y", true);
			this._overwriteProps.push("scrollTo_y");
		} else {
			this.skipY = true;
		}
		return true;
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(v) {
		this._super.setRatio.call(this, v);

		var x = this._wdw || !this.skipX ? this.getX() : this.xPrev,
		    y = this._wdw || !this.skipY ? this.getY() : this.yPrev,
		    yDif = y - this.yPrev,
		    xDif = x - this.xPrev,
		    threshold = ScrollToPlugin.autoKillThreshold;

		if (this.x < 0) {
			//can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
			this.x = 0;
		}
		if (this.y < 0) {
			this.y = 0;
		}
		if (this._autoKill) {
			//note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
			if (!this.skipX && (xDif > threshold || xDif < -threshold) && x < ScrollToPlugin__max(this._target, "x")) {
				this.skipX = true; //if the user scrolls separately, we should stop tweening!
			}
			if (!this.skipY && (yDif > threshold || yDif < -threshold) && y < ScrollToPlugin__max(this._target, "y")) {
				this.skipY = true; //if the user scrolls separately, we should stop tweening!
			}
			if (this.skipX && this.skipY) {
				this._tween.kill();
				if (this.vars.onAutoKill) {
					this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []);
				}
			}
		}
		if (this._wdw) {
			_window.scrollTo(!this.skipX ? this.x : x, !this.skipY ? this.y : y);
		} else {
			if (!this.skipY) {
				this._target.scrollTop = this.y;
			}
			if (!this.skipX) {
				this._target.scrollLeft = this.x;
			}
		}
		this.xPrev = this.x;
		this.yPrev = this.y;
	}

}),
    ScrollToPlugin_p = ScrollToPlugin.prototype;

ScrollToPlugin.max = ScrollToPlugin__max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
ScrollToPlugin.autoKillThreshold = 7;

ScrollToPlugin_p._kill = function (lookup) {
	if (lookup.scrollTo_x) {
		this.skipX = true;
	}
	if (lookup.scrollTo_y) {
		this.skipY = true;
	}
	return this._super._kill.call(this, lookup);
};


// CONCATENATED MODULE: ../node_modules/gsap/TextPlugin.js
/*!
 * VERSION: 0.6.2
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



var _getText = function _getText(e) {
	var type = e.nodeType,
	    result = "";
	if (type === 1 || type === 9 || type === 11) {
		if (typeof e.textContent === "string") {
			return e.textContent;
		} else {
			for (e = e.firstChild; e; e = e.nextSibling) {
				result += _getText(e);
			}
		}
	} else if (type === 3 || type === 4) {
		return e.nodeValue;
	}
	return result;
},
    _emoji = "[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D]|[\uD800-\uDBFF][\uDC00-\uDFFF]",
    _emojiExp = new RegExp(_emoji),
    _emojiAndCharsExp = new RegExp(_emoji + "|.", "g"),
    _emojiSafeSplit = function _emojiSafeSplit(text, delimiter) {
	return (delimiter === "" || !delimiter) && _emojiExp.test(text) ? text.match(_emojiAndCharsExp) : text.split(delimiter || "");
},

/* //previous emoji-related splitting. New method above is faster and more concise.
_emojiStart = 0xD800,
_emojiEnd = 0xDBFF,
_emojiLowStart = 0xDC00,
_emojiRegionStart = 0x1F1E6,
_emojiRegionEnd = 0x1F1FF,
_emojiModStart = 0x1f3fb,
_emojiModEnd = 0x1f3ff,
_emojiPairCode = function(s) {
	return ((s.charCodeAt(0) - _emojiStart) << 10) + (s.charCodeAt(1) - _emojiLowStart) + 0x10000;
},
_emojiSafeSplit = function(text, delimiter) { //like calling String.split(delimiter) except that it keeps emoji characters together.
	if (delimiter !== "") {
		return text.split(delimiter);
	}
	var l = text.length,
		a = [],
		character, i, emojiPair1, emojiPair2, j;
	for (i = 0; i < l; i++) {
		character = text.charAt(i);
		if ((character.charCodeAt(0) >= _emojiStart && character.charCodeAt(0) <= _emojiEnd) || (text.charCodeAt(i+1) >= 0xFE00 && text.charCodeAt(i+1) <= 0xFE0F)) { //special emoji characters use 2 or 4 unicode characters that we must keep together.
			emojiPair1 = _emojiPairCode(text.substr(i, 2));
			emojiPair2 = _emojiPairCode(text.substr(i + 2, 2));
			j = ((emojiPair1 >= _emojiRegionStart && emojiPair1 <= _emojiRegionEnd && emojiPair2 >= _emojiRegionStart && emojiPair2 <= _emojiRegionEnd) || (emojiPair2 >= _emojiModStart && emojiPair2 <= _emojiModEnd)) ? 4 : 2;
			a.push(text.substr(i, j));
			i += j - 1;
		} else {
			a.push(character);
		}
	}
	return a;
},
*/
TextPlugin = gsap_TweenLite["f" /* _gsScope */]._gsDefine.plugin({
	propName: "text",
	API: 2,
	version: "0.6.2",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function init(target, value, tween, index) {
		var i = target.nodeName.toUpperCase(),
		    shrt;
		if (typeof value === "function") {
			value = value(index, target);
		}
		this._svg = target.getBBox && (i === "TEXT" || i === "TSPAN");
		if (!("innerHTML" in target) && !this._svg) {
			return false;
		}
		this._target = target;
		if (typeof value !== "object") {
			value = { value: value };
		}
		if (value.value === undefined) {
			this._text = this._original = [""];
			return true;
		}
		this._delimiter = value.delimiter || "";
		this._original = _emojiSafeSplit(_getText(target).replace(/\s+/g, " "), this._delimiter);
		this._text = _emojiSafeSplit(value.value.replace(/\s+/g, " "), this._delimiter);
		this._runBackwards = tween.vars.runBackwards === true;
		if (this._runBackwards) {
			i = this._original;
			this._original = this._text;
			this._text = i;
		}
		if (typeof value.newClass === "string") {
			this._newClass = value.newClass;
			this._hasClass = true;
		}
		if (typeof value.oldClass === "string") {
			this._oldClass = value.oldClass;
			this._hasClass = true;
		}
		i = this._original.length - this._text.length;
		shrt = i < 0 ? this._original : this._text;
		this._fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");
		if (i < 0) {
			i = -i;
		}
		while (--i > -1) {
			shrt.push(this._fillChar);
		}
		return true;
	},

	//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set: function set(ratio) {
		if (ratio > 1) {
			ratio = 1;
		} else if (ratio < 0) {
			ratio = 0;
		}
		if (this._runBackwards) {
			ratio = 1 - ratio;
		}
		var l = this._text.length,
		    i = ratio * l + 0.5 | 0,
		    applyNew,
		    applyOld,
		    str;
		if (this._hasClass) {
			applyNew = this._newClass && i !== 0;
			applyOld = this._oldClass && i !== l;
			str = (applyNew ? "<span class='" + this._newClass + "'>" : "") + this._text.slice(0, i).join(this._delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + this._oldClass + "'>" : "") + this._delimiter + this._original.slice(i).join(this._delimiter) + (applyOld ? "</span>" : "");
		} else {
			str = this._text.slice(0, i).join(this._delimiter) + this._delimiter + this._original.slice(i).join(this._delimiter);
		}
		if (this._svg) {
			//SVG text elements don't have an "innerHTML" in Microsoft browsers.
			this._target.textContent = str;
		} else {
			this._target.innerHTML = this._fillChar === "&nbsp;" && str.indexOf("  ") !== -1 ? str.split("  ").join("&nbsp;&nbsp;") : str;
		}
	}

}),
    TextPlugin_p = TextPlugin.prototype;

TextPlugin_p._newClass = TextPlugin_p._oldClass = TextPlugin_p._delimiter = "";


// CONCATENATED MODULE: ../node_modules/gsap/Draggable.js
/*!
 * VERSION: 0.17.1
 * DATE: 2019-02-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */




gsap_TweenLite["f" /* _gsScope */]._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function () {

	var _tempVarsXY = { css: {}, data: "_draggable" },
	    //speed optimization - we reuse the same vars object for x/y TweenLite.set() calls to minimize garbage collection tasks and improve performance.
	_tempVarsX = { css: {}, data: "_draggable" },
	    _tempVarsY = { css: {}, data: "_draggable" },
	    _tempVarsRotation = { css: {} },
	    _globals = gsap_TweenLite["f" /* _gsScope */]._gsDefine.globals,
	    _tempEvent = {},
	    //for populating with pageX/pageY in old versions of IE
	_emptyFunc = function _emptyFunc() {
		return false;
	},
	    _dummyElement = { style: {}, appendChild: _emptyFunc, removeChild: _emptyFunc },
	    _doc = gsap_TweenLite["f" /* _gsScope */].document || { createElement: function createElement() {
			return _dummyElement;
		} },
	    _docElement = _doc.documentElement || {},
	    _createElement = function _createElement(type) {
		return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
	},
	    _tempDiv = _createElement("div"),
	    _emptyArray = [],
	    _RAD2DEG = 180 / Math.PI,
	    _max = 999999999999999,
	    _getTime = Date.now || function () {
		return new Date().getTime();
	},
	    _isOldIE = !!(!_doc.addEventListener && _doc.all),
	    _placeholderDiv = _doc.createElement("div"),
	    _renderQueue = [],
	    _lookup = {},
	    //when a Draggable is created, the target gets a unique _gsDragID property that allows gets associated with the Draggable instance for quick lookups in Draggable.get(). This avoids circular references that could cause gc problems.
	_lookupCount = 0,
	    _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
	    _dragCount = 0,
	    //total number of elements currently being dragged
	_prefix,
	    _isMultiTouching,
	    _isAndroid = gsap_TweenLite["f" /* _gsScope */].navigator && gsap_TweenLite["f" /* _gsScope */].navigator.userAgent.toLowerCase().indexOf("android") !== -1,
	    //Android handles touch events in an odd way and it's virtually impossible to "feature test" so we resort to UA sniffing
	_lastDragTime = 0,
	    _temp1 = {},
	    // a simple object we reuse and populate (usually x/y properties) to conserve memory and improve performance.
	_windowProxy = {},
	    //memory/performance optimization - we reuse this object during autoScroll to store window-related bounds/offsets.
	_supportsPassive,
	    _slice = function _slice(a) {
		//don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
		if (typeof a === "string") {
			a = gsap_TweenLite["g" /* default */].selector(a);
		}
		if (!a || a.nodeType) {
			//if it's not an array, wrap it in one.
			return [a];
		}
		var b = [],
		    l = a.length,
		    i;
		for (i = 0; i !== l; b.push(a[i++])) {}
		return b;
	},
	    _copy = function _copy(obj, factor) {
		var copy = {},
		    p;
		if (factor) {
			for (p in obj) {
				copy[p] = obj[p] * factor;
			}
		} else {
			for (p in obj) {
				copy[p] = obj[p];
			}
		}
		return copy;
	},
	    ThrowPropsPlugin,
	    _renderQueueTick = function _renderQueueTick() {
		var i = _renderQueue.length;
		while (--i > -1) {
			_renderQueue[i]();
		}
	},
	    _addToRenderQueue = function _addToRenderQueue(func) {
		_renderQueue.push(func);
		if (_renderQueue.length === 1) {
			gsap_TweenLite["g" /* default */].ticker.addEventListener("tick", _renderQueueTick, this, false, 1);
		}
	},
	    _removeFromRenderQueue = function _removeFromRenderQueue(func) {
		var i = _renderQueue.length;
		while (--i > -1) {
			if (_renderQueue[i] === func) {
				_renderQueue.splice(i, 1);
			}
		}
		gsap_TweenLite["g" /* default */].to(_renderQueueTimeout, 0, { overwrite: "all", delay: 15, onComplete: _renderQueueTimeout, data: "_draggable" }); //remove the "tick" listener only after the render queue is empty for 15 seconds (to improve performance). Adding/removing it constantly for every click/touch wouldn't deliver optimal speed, and we also don't want the ticker to keep calling the render method when things are idle for long periods of time (we want to improve battery life on mobile devices).
	},
	    _renderQueueTimeout = function _renderQueueTimeout() {
		if (!_renderQueue.length) {
			gsap_TweenLite["g" /* default */].ticker.removeEventListener("tick", _renderQueueTick);
		}
	},
	    _extend = function _extend(obj, defaults) {
		var p;
		for (p in defaults) {
			if (obj[p] === undefined) {
				obj[p] = defaults[p];
			}
		}
		return obj;
	},
	    _getDocScrollTop = function _getDocScrollTop() {
		return window.pageYOffset != null ? window.pageYOffset : _doc.scrollTop != null ? _doc.scrollTop : _docElement.scrollTop || _doc.body.scrollTop || 0;
	},
	    _getDocScrollLeft = function _getDocScrollLeft() {
		return window.pageXOffset != null ? window.pageXOffset : _doc.scrollLeft != null ? _doc.scrollLeft : _docElement.scrollLeft || _doc.body.scrollLeft || 0;
	},
	    _addScrollListener = function _addScrollListener(e, callback) {
		_addListener(e, "scroll", callback);
		if (!_isRoot(e.parentNode)) {
			_addScrollListener(e.parentNode, callback);
		}
	},
	    _removeScrollListener = function _removeScrollListener(e, callback) {
		_removeListener(e, "scroll", callback);
		if (!_isRoot(e.parentNode)) {
			_removeScrollListener(e.parentNode, callback);
		}
	},
	    _isRoot = function _isRoot(e) {
		return !!(!e || e === _docElement || e === _doc || e === _doc.body || e === window || !e.nodeType || !e.parentNode);
	},
	    _getMaxScroll = function _getMaxScroll(element, axis) {
		var dim = axis === "x" ? "Width" : "Height",
		    scroll = "scroll" + dim,
		    client = "client" + dim,
		    body = _doc.body;
		return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], body[scroll]) - (window["inner" + dim] || _docElement[client] || body[client]) : element[scroll] - element[client]);
	},
	    _recordMaxScrolls = function _recordMaxScrolls(e) {
		//records _gsMaxScrollX and _gsMaxScrollY properties for the element and all ancestors up the chain so that we can cap it, otherwise dragging beyond the edges with autoScroll on can endlessly scroll.
		var isRoot = _isRoot(e),
		    x = _getMaxScroll(e, "x"),
		    y = _getMaxScroll(e, "y");
		if (isRoot) {
			e = _windowProxy;
		} else {
			_recordMaxScrolls(e.parentNode);
		}
		e._gsMaxScrollX = x;
		e._gsMaxScrollY = y;
		e._gsScrollX = e.scrollLeft || 0;
		e._gsScrollY = e.scrollTop || 0;
	},


	//just used for IE8 and earlier to normalize events and populate pageX/pageY
	_populateIEEvent = function _populateIEEvent(e, preventDefault) {
		e = e || window.event;
		_tempEvent.pageX = e.clientX + _doc.body.scrollLeft + _docElement.scrollLeft;
		_tempEvent.pageY = e.clientY + _doc.body.scrollTop + _docElement.scrollTop;
		if (preventDefault) {
			e.returnValue = false;
		}
		return _tempEvent;
	},


	//grabs the first element it finds (and we include the window as an element), so if it's selector text, it'll feed that value to TweenLite.selector, if it's a jQuery object or some other selector engine's result, it'll grab the first one, and same for an array. If the value doesn't contain a DOM element, it'll just return null.
	_unwrapElement = function _unwrapElement(value) {
		if (!value) {
			return value;
		}
		if (typeof value === "string") {
			value = gsap_TweenLite["g" /* default */].selector(value);
		}
		if (value.length && value !== window && value[0] && value[0].style && !value.nodeType) {
			value = value[0];
		}
		return value === window || value.nodeType && value.style ? value : null;
	},
	    _checkPrefix = function _checkPrefix(e, p) {
		var s = e.style,
		    capped,
		    i,
		    a;
		if (s[p] === undefined) {
			a = ["O", "Moz", "ms", "Ms", "Webkit"];
			i = 5;
			capped = p.charAt(0).toUpperCase() + p.substr(1);
			while (--i > -1 && s[a[i] + capped] === undefined) {}
			if (i < 0) {
				return "";
			}
			_prefix = i === 3 ? "ms" : a[i];
			p = _prefix + capped;
		}
		return p;
	},
	    _setStyle = function _setStyle(e, p, value) {
		var s = e.style;
		if (!s) {
			return;
		}
		if (s[p] === undefined) {
			p = _checkPrefix(e, p);
		}
		if (value == null) {
			if (s.removeProperty) {
				s.removeProperty(p.replace(/([A-Z])/g, "-$1").toLowerCase());
			} else {
				//note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
				s.removeAttribute(p);
			}
		} else if (s[p] !== undefined) {
			s[p] = value;
		}
	},
	    _computedStyleScope = typeof window !== "undefined" ? window : _doc.defaultView || { getComputedStyle: function getComputedStyle() {} },
	    _getComputedStyle = function _getComputedStyle(e, s) {
		return _computedStyleScope.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e, s); //the "host" stuff helps to accommodate ShadowDom objects.
	},
	    _horizExp = /(?:Left|Right|Width)/i,
	    _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
	    _convertToPixels = function _convertToPixels(t, p, v, sfx, recurse) {
		if (sfx === "px" || !sfx) {
			return v;
		}
		if (sfx === "auto" || !v) {
			return 0;
		}
		var horiz = _horizExp.test(p),
		    node = t,
		    style = _tempDiv.style,
		    neg = v < 0,
		    pix;
		if (neg) {
			v = -v;
		}
		if (sfx === "%" && p.indexOf("border") !== -1) {
			pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
		} else {
			style.cssText = "border:0 solid red;position:" + _getStyle(t, "position", true) + ";line-height:0;";
			if (sfx === "%" || !node.appendChild) {
				node = t.parentNode || _doc.body;
				style[horiz ? "width" : "height"] = v + sfx;
			} else {
				style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
			}
			node.appendChild(_tempDiv);
			pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
			node.removeChild(_tempDiv);
			if (pix === 0 && !recurse) {
				pix = _convertToPixels(t, p, v, sfx, true);
			}
		}
		return neg ? -pix : pix;
	},
	    _calculateOffset = function _calculateOffset(t, p) {
		//for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
		if (_getStyle(t, "position", true) !== "absolute") {
			return 0;
		}
		var dim = p === "left" ? "Left" : "Top",
		    v = _getStyle(t, "margin" + dim, true);
		return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), (v + "").replace(_suffixExp, "")) || 0);
	},
	    _getStyle = function _getStyle(element, prop, keepUnits) {
		var rv = (element._gsTransform || {})[prop],
		    cs;
		if (rv || rv === 0) {
			return rv;
		} else if (element.style && element.style[prop]) {
			//shadow dom elements don't have "style".
			rv = element.style[prop];
		} else if (cs = _getComputedStyle(element)) {
			rv = cs.getPropertyValue(prop.replace(/([A-Z])/g, "-$1").toLowerCase());
			rv = rv || cs.length ? rv : cs[prop]; //Opera behaves VERY strangely - length is usually 0 and cs[prop] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
		} else if (element.currentStyle) {
			rv = element.currentStyle[prop];
		}
		if (rv === "auto" && (prop === "top" || prop === "left")) {
			rv = _calculateOffset(element, prop);
		}
		return keepUnits ? rv : parseFloat(rv) || 0;
	},
	    _dispatchEvent = function _dispatchEvent(instance, type, callbackName) {
		var vars = instance.vars,
		    callback = vars[callbackName],
		    listeners = instance._listeners[type];
		if (typeof callback === "function") {
			callback.apply(vars[callbackName + "Scope"] || vars.callbackScope || instance, vars[callbackName + "Params"] || [instance.pointerEvent]);
		}
		if (listeners) {
			instance.dispatchEvent(type);
		}
	},
	    _getBounds = function _getBounds(obj, context) {
		//accepts any of the following: a DOM element, jQuery object, selector text, or an object defining bounds as {top, left, width, height} or {minX, maxX, minY, maxY}. Returns an object with left, top, width, and height properties.
		var e = _unwrapElement(obj),
		    top,
		    left,
		    offset;
		if (!e) {
			if (obj.left !== undefined) {
				offset = _getOffsetTransformOrigin(context); //the bounds should be relative to the origin
				return { left: obj.left - offset.x, top: obj.top - offset.y, width: obj.width, height: obj.height };
			}
			left = obj.min || obj.minX || obj.minRotation || 0;
			top = obj.min || obj.minY || 0;
			return { left: left, top: top, width: (obj.max || obj.maxX || obj.maxRotation || 0) - left, height: (obj.max || obj.maxY || 0) - top };
		}
		return _getElementBounds(e, context);
	},
	    _svgBorderFactor,
	    _svgBorderScales,
	    _svgScrollOffset,
	    _hasBorderBug,
	    _hasReparentBug,
	    //some browsers, like Chrome 49, alter the offsetTop/offsetLeft/offsetParent of elements when a non-identity transform is applied.
	_setEnvironmentVariables = function _setEnvironmentVariables() {
		//some browsers factor the border into the SVG coordinate space, some don't (like Firefox). Some apply transforms to them, some don't. We feature-detect here so we know how to handle the border(s). We can't do this immediately - we must wait for the document.body to exist.
		if (!_doc.createElementNS) {
			_svgBorderFactor = 0;
			_svgBorderScales = false;
			return;
		}
		var div = _createElement("div"),
		    svg = _doc.createElementNS("http://www.w3.org/2000/svg", "svg"),
		    wrapper = _createElement("div"),
		    style = div.style,
		    parent = _doc.body || _docElement,
		    isFlex = _getStyle(parent, "display", true) === "flex",
		    //Firefox bug causes getScreenCTM() to return null when parent is display:flex and the element isn't rendered inside the window (like if it's below the scroll position)
		matrix,
		    e1,
		    point,
		    oldValue;
		if (_doc.body && _transformProp) {
			style.position = "absolute";
			parent.appendChild(wrapper);
			wrapper.appendChild(div);
			oldValue = div.offsetParent;
			wrapper.style[_transformProp] = "rotate(1deg)";
			_hasReparentBug = div.offsetParent === oldValue;
			wrapper.style.position = "absolute";
			style.height = "10px";
			oldValue = div.offsetTop;
			wrapper.style.border = "5px solid red";
			_hasBorderBug = oldValue !== div.offsetTop; //some browsers, like Firefox 38, cause the offsetTop/Left to be affected by a parent's border.
			parent.removeChild(wrapper);
		}
		style = svg.style;
		svg.setAttributeNS(null, "width", "400px");
		svg.setAttributeNS(null, "height", "400px");
		svg.setAttributeNS(null, "viewBox", "0 0 400 400");
		style.display = "block";
		style.boxSizing = "border-box";
		style.border = "0px solid red";
		style.transform = "none";
		// in some browsers (like certain flavors of Android), the getScreenCTM() matrix is contaminated by the scroll position. We can run some logic here to detect that condition, but we ended up not needing this because we found another workaround using getBoundingClientRect().
		div.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;";
		parent.appendChild(div);
		div.appendChild(svg);
		point = svg.createSVGPoint().matrixTransform(svg.getScreenCTM());
		e1 = point.y;
		div.scrollTop = 100;
		point.x = point.y = 0;
		point = point.matrixTransform(svg.getScreenCTM());
		_svgScrollOffset = e1 - point.y < 100.1 ? 0 : e1 - point.y - 150;
		div.removeChild(svg);
		parent.removeChild(div);
		// -- end _svgScrollOffset calculation.
		parent.appendChild(svg);
		if (isFlex) {
			parent.style.display = "block"; //Firefox bug causes getScreenCTM() to return null when parent is display:flex and the element isn't rendered inside the window (like if it's below the scroll position)
		}
		matrix = svg.getScreenCTM();
		e1 = matrix.e;
		style.border = "50px solid red";
		matrix = svg.getScreenCTM();
		if (e1 === 0 && matrix.e === 0 && matrix.f === 0 && matrix.a === 1) {
			//Opera has a bunch of bugs - it doesn't adjust the x/y of the matrix, nor does it scale when box-sizing is border-box but it does so elsewhere; to get the correct behavior we set _svgBorderScales to true.
			_svgBorderFactor = 1;
			_svgBorderScales = true;
		} else {
			_svgBorderFactor = e1 !== matrix.e ? 1 : 0;
			_svgBorderScales = matrix.a !== 1;
		}
		if (isFlex) {
			parent.style.display = "flex";
		}
		parent.removeChild(svg);
	},
	    _supports3D = _checkPrefix(_tempDiv, "perspective") !== "",


	// start matrix and point conversion methods...
	_transformOriginProp = _checkPrefix(_tempDiv, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
	    _transformProp = _checkPrefix(_tempDiv, "transform"),
	    _transformPropCSS = _transformProp.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
	    _point1 = {},
	    //we reuse _point1 and _point2 objects inside matrix and point conversion methods to conserve memory and minimize garbage collection tasks.
	_point2 = {},
	    _SVGElement = gsap_TweenLite["f" /* _gsScope */].SVGElement,
	    _isSVG = function _isSVG(e) {
		return !!(_SVGElement && typeof e.getBBox === "function" && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM));
	},
	    _isIE10orBelow = gsap_TweenLite["f" /* _gsScope */].navigator && (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(gsap_TweenLite["f" /* _gsScope */].navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(gsap_TweenLite["f" /* _gsScope */].navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
	    //Ideally we'd avoid user agent sniffing, but there doesn't seem to be a way to feature-detect and sense a border-related bug that only affects IE10 and IE9.
	_tempTransforms = [],
	    _tempElements = [],
	    _getSVGOffsets = function _getSVGOffsets(e) {
		//SVG elements don't always report offsetTop/offsetLeft/offsetParent at all (I'm looking at you, Firefox 29 and Android), so we have to do some work to manufacture those values. You can pass any SVG element and it'll spit back an object with offsetTop, offsetLeft, offsetParent, scaleX, and scaleY properties. We need the scaleX and scaleY to handle the way SVG can resize itself based on the container.
		if (!e.getBoundingClientRect || !e.parentNode || !_transformProp) {
			return { offsetTop: 0, offsetLeft: 0, scaleX: 1, scaleY: 1, offsetParent: _docElement };
		}
		if (Draggable.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === gsap_TweenLite["g" /* default */].ticker.frame) {
			//performance optimization. Assume that if the offsets are requested again on the same tick, we can just feed back the values we already calculated (no need to keep recalculating until another tick elapses).
			return e._dCache;
		}
		var curElement = e,
		    cache = _cache(e),
		    eRect,
		    parentRect,
		    offsetParent,
		    cs,
		    m,
		    i,
		    point1,
		    point2,
		    borderWidth,
		    borderHeight,
		    width,
		    height;
		cache.lastUpdate = gsap_TweenLite["g" /* default */].ticker.frame;
		if (e.getBBox && !cache.isSVGRoot) {
			//if it's a nested/child SVG element, we must find the parent SVG canvas and measure the offset from there.
			curElement = e.parentNode;
			eRect = e.getBBox();
			while (curElement && (curElement.nodeName + "").toLowerCase() !== "svg") {
				curElement = curElement.parentNode;
			}
			cs = _getSVGOffsets(curElement);
			cache.offsetTop = eRect.y * cs.scaleY;
			cache.offsetLeft = eRect.x * cs.scaleX;
			cache.scaleX = cs.scaleX;
			cache.scaleY = cs.scaleY;
			cache.offsetParent = curElement || _docElement;
			return cache;
		}
		//only root SVG elements continue here...
		offsetParent = cache.offsetParent;
		if (offsetParent === _doc.body) {
			offsetParent = _docElement; //avoids problems with margins/padding on the body
		}
		//walk up the ancestors and record any non-identity transforms (and reset them to "none") until we reach the offsetParent. We must do this so that the getBoundingClientRect() is accurate for measuring the offsetTop/offsetLeft. We'll revert the values later...
		_tempElements.length = _tempTransforms.length = 0;
		while (curElement && curElement.parentNode) {
			m = _getStyle(curElement, _transformProp, true);
			if (m !== "matrix(1, 0, 0, 1, 0, 0)" && m !== "none" && m !== "translate3d(0px, 0px, 0px)") {
				_tempElements.push(curElement);
				_tempTransforms.push(curElement.style[_transformProp]);
				curElement.style[_transformProp] = "none";
			}
			curElement = curElement.parentNode;
		}
		parentRect = offsetParent.getBoundingClientRect();
		m = e.getScreenCTM();

		point2 = e.createSVGPoint();
		point1 = point2.matrixTransform(m);
		cache.scaleX = Math.sqrt(m.a * m.a + m.b * m.b);
		cache.scaleY = Math.sqrt(m.d * m.d + m.c * m.c);
		if (_svgBorderFactor === undefined) {
			_setEnvironmentVariables();
		}
		if (cache.borderBox && !_svgBorderScales && e.getAttribute("width")) {
			//some browsers (like Safari) don't properly scale the matrix to accommodate the border when box-sizing is border-box, so we must calculate it here...
			cs = _getComputedStyle(e) || {};
			borderWidth = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth) || 0;
			borderHeight = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth) || 0;
			width = parseFloat(cs.width) || 0;
			height = parseFloat(cs.height) || 0;
			cache.scaleX *= (width - borderWidth) / width;
			cache.scaleY *= (height - borderHeight) / height;
		}
		if (_svgScrollOffset) {
			//some browsers (like Chrome for Android) have bugs in the way getScreenCTM() is reported (it doesn't factor in scroll position), so we must revert to a more expensive technique for calculating offsetTop/Left.
			eRect = e.getBoundingClientRect();
			cache.offsetLeft = eRect.left - parentRect.left;
			cache.offsetTop = eRect.top - parentRect.top;
		} else {
			cache.offsetLeft = point1.x - parentRect.left;
			cache.offsetTop = point1.y - parentRect.top;
		}
		cache.offsetParent = offsetParent;
		i = _tempElements.length;
		while (--i > -1) {
			_tempElements[i].style[_transformProp] = _tempTransforms[i];
		}
		return cache;
	},
	    _getOffsetTransformOrigin = function _getOffsetTransformOrigin(e, decoratee) {
		//returns the x/y position of the transformOrigin of the element, in its own local coordinate system (pixels), offset from the top left corner.
		decoratee = decoratee || {};
		if (!e || e === _docElement || !e.parentNode || e === window) {
			return { x: 0, y: 0 };
		}
		var cs = _getComputedStyle(e),
		    v = _transformOriginProp && cs ? cs.getPropertyValue(_transformOriginProp) : "50% 50%",
		    a = v.split(" "),
		    x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
		    y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1];
		if (y === "center" || y == null) {
			y = "50%";
		}
		if (x === "center" || isNaN(parseFloat(x))) {
			//remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
			x = "50%";
		}
		if (e.getBBox && _isSVG(e)) {
			//SVG elements must be handled in a special way because their origins are calculated from the top left.
			if (!e._gsTransform) {
				gsap_TweenLite["g" /* default */].set(e, { x: "+=0", overwrite: false }); //forces creation of the _gsTransform where we store all the transform components including xOrigin and yOrigin for SVG elements, as of GSAP 1.15.0 which also takes care of calculating the origin from the upper left corner of the SVG canvas.
				if (e._gsTransform.xOrigin === undefined) {
					console.log("Draggable requires at least GSAP 1.17.0");
				}
			}
			v = e.getBBox();
			decoratee.x = e._gsTransform.xOrigin - v.x;
			decoratee.y = e._gsTransform.yOrigin - v.y;
		} else {
			if (e.getBBox && (x + y).indexOf("%") !== -1) {
				//Firefox doesn't report offsetWidth/height on <svg> elements.
				e = e.getBBox();
				e = { offsetWidth: e.width, offsetHeight: e.height };
			}
			decoratee.x = x.indexOf("%") !== -1 ? e.offsetWidth * parseFloat(x) / 100 : parseFloat(x);
			decoratee.y = y.indexOf("%") !== -1 ? e.offsetHeight * parseFloat(y) / 100 : parseFloat(y);
		}
		return decoratee;
	},
	    _cache = function _cache(e) {
		//computes some important values and stores them in a _dCache object attached to the element itself so that we can optimize performance
		if (Draggable.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === gsap_TweenLite["g" /* default */].ticker.frame) {
			//performance optimization. Assume that if the offsets are requested again on the same tick, we can just feed back the values we already calculated (no need to keep recalculating until another tick elapses).
			return e._dCache;
		}
		var cache = e._dCache = e._dCache || {},
		    cs = _getComputedStyle(e),
		    isSVG = e.getBBox && _isSVG(e),
		    isSVGRoot = (e.nodeName + "").toLowerCase() === "svg",
		    curSVG;
		cache.isSVG = isSVG;
		cache.isSVGRoot = isSVGRoot;
		cache.borderBox = cs.boxSizing === "border-box";
		cache.computedStyle = cs;
		if (isSVGRoot) {
			//some browsers don't report parentNode on SVG elements.
			curSVG = e.parentNode || _docElement;
			curSVG.insertBefore(_tempDiv, e);
			cache.offsetParent = _tempDiv.offsetParent || _docElement; //in some cases, Firefox still reports offsetParent as null.
			curSVG.removeChild(_tempDiv);
		} else if (isSVG) {
			curSVG = e.parentNode;
			while (curSVG && (curSVG.nodeName + "").toLowerCase() !== "svg") {
				//offsetParent is always the SVG canvas for SVG elements.
				curSVG = curSVG.parentNode;
			}
			cache.offsetParent = curSVG;
		} else {
			cache.offsetParent = e.offsetParent;
		}
		return cache;
	},
	    _getOffset2DMatrix = function _getOffset2DMatrix(e, offsetOrigin, parentOffsetOrigin, zeroOrigin, isBase) {
		//"isBase" helps us discern context - it should only be true when the element is the base one (the one at which we're starting to walk up the chain). It only matters in cases when it's an <svg> element itself because that's a case when we don't apply scaling.
		if (e === window || !e || !e.style || !e.parentNode) {
			return [1, 0, 0, 1, 0, 0];
		}
		var cache = e._dCache || _cache(e),
		    parent = e.parentNode,
		    parentCache = parent._dCache || _cache(parent),
		    cs = cache.computedStyle,
		    parentOffsetParent = cache.isSVG ? parentCache.offsetParent : parent.offsetParent,
		    m,
		    isRoot,
		    offsets,
		    rect,
		    t,
		    sx,
		    sy,
		    offsetX,
		    offsetY,
		    parentRect,
		    borderTop,
		    borderLeft,
		    borderTranslateX,
		    borderTranslateY;
		m = cache.isSVG && (e.style[_transformProp] + "").indexOf("matrix") !== -1 ? e.style[_transformProp] : cs ? cs.getPropertyValue(_transformPropCSS) : e.currentStyle ? e.currentStyle[_transformProp] : "1,0,0,1,0,0"; //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
		if (e.getBBox && (e.getAttribute("transform") + "").indexOf("matrix") !== -1) {
			//SVG can store transform data in its "transform" attribute instead of the CSS, so look for that here (only accept matrix()).
			m = e.getAttribute("transform");
		}
		m = (m + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0];
		if (m.length > 6) {
			m = [m[0], m[1], m[4], m[5], m[12], m[13]];
		}
		if (zeroOrigin) {
			m[4] = m[5] = 0;
		} else if (cache.isSVG && (t = e._gsTransform) && (t.xOrigin || t.yOrigin)) {
			//SVGs handle origin very differently. Factor in GSAP's handling of origin values here:
			m[0] = parseFloat(m[0]);
			m[1] = parseFloat(m[1]);
			m[2] = parseFloat(m[2]);
			m[3] = parseFloat(m[3]);
			m[4] = parseFloat(m[4]) - (t.xOrigin - (t.xOrigin * m[0] + t.yOrigin * m[2]));
			m[5] = parseFloat(m[5]) - (t.yOrigin - (t.xOrigin * m[1] + t.yOrigin * m[3]));
		}
		if (offsetOrigin) {
			if (_svgBorderFactor === undefined) {
				_setEnvironmentVariables();
			}
			offsets = cache.isSVG || cache.isSVGRoot ? _getSVGOffsets(e) : e;
			if (cache.isSVG) {
				//don't just rely on "instanceof _SVGElement" because if the SVG is embedded via an object tag, it won't work (SVGElement is mapped to a different object))
				rect = e.getBBox();
				parentRect = parentCache.isSVGRoot ? { x: 0, y: 0 } : parent.getBBox();
				offsets = { offsetLeft: rect.x - parentRect.x, offsetTop: rect.y - parentRect.y, offsetParent: cache.offsetParent };
			} else if (cache.isSVGRoot) {
				borderTop = parseInt(cs.borderTopWidth, 10) || 0;
				borderLeft = parseInt(cs.borderLeftWidth, 10) || 0;
				borderTranslateX = (m[0] - _svgBorderFactor) * borderLeft + m[2] * borderTop;
				borderTranslateY = m[1] * borderLeft + (m[3] - _svgBorderFactor) * borderTop;

				sx = offsetOrigin.x;
				sy = offsetOrigin.y;
				offsetX = sx - (sx * m[0] + sy * m[2]); //accommodate the SVG root's transforms when the origin isn't in the top left.
				offsetY = sy - (sx * m[1] + sy * m[3]);

				m[4] = parseFloat(m[4]) + offsetX;
				m[5] = parseFloat(m[5]) + offsetY;
				offsetOrigin.x -= offsetX;
				offsetOrigin.y -= offsetY;
				sx = offsets.scaleX;
				sy = offsets.scaleY;
				if (!isBase) {
					//when getting the matrix for a root <svg> element itself (NOT in the context of an SVG element that's nested inside of it like a <path>), we do NOT apply the scaling!
					offsetOrigin.x *= sx;
					offsetOrigin.y *= sy;
				}
				m[0] *= sx;
				m[1] *= sy;
				m[2] *= sx;
				m[3] *= sy;
				if (!_isIE10orBelow) {
					offsetOrigin.x += borderTranslateX;
					offsetOrigin.y += borderTranslateY;
				}
				if (parentOffsetParent === _doc.body && offsets.offsetParent === _docElement) {
					//to avoid issues with margin/padding on the <body>, we always set the offsetParent to _docElement in the _getSVGOffsets() function but there's a condition we check later in this function for (parentOffsetParent === offsets.offsetParent) which would fail if we don't run this logic. In other words, parentOffsetParent may be <body> and the <svg>'s offsetParent is also <body> but artificially set to _docElement to avoid margin/padding issues.
					parentOffsetParent = _docElement;
				}
			} else if (!_hasBorderBug && e.offsetParent) {
				offsetOrigin.x += parseInt(_getStyle(e.offsetParent, "borderLeftWidth"), 10) || 0;
				offsetOrigin.y += parseInt(_getStyle(e.offsetParent, "borderTopWidth"), 10) || 0;
			}
			isRoot = parent === _docElement || parent === _doc.body;
			m[4] = Number(m[4]) + offsetOrigin.x + (offsets.offsetLeft || 0) - parentOffsetOrigin.x - (isRoot ? 0 : parent.scrollLeft || 0);
			m[5] = Number(m[5]) + offsetOrigin.y + (offsets.offsetTop || 0) - parentOffsetOrigin.y - (isRoot ? 0 : parent.scrollTop || 0);
			if (parent && _getStyle(e, "position", true) === "fixed") {
				//fixed position elements should factor in the scroll position of the document.
				m[4] += _getDocScrollLeft();
				m[5] += _getDocScrollTop();
				parent = parent.offsetParent;
				while (parent) {
					m[4] -= parent.offsetLeft;
					m[5] -= parent.offsetTop;
					parent = parent.offsetParent;
				}
			} else if (parent && parent !== _docElement && parentOffsetParent === offsets.offsetParent && !parentCache.isSVG && (!_hasReparentBug || _getOffset2DMatrix(parent).join("") === "100100")) {
				offsets = parentCache.isSVGRoot ? _getSVGOffsets(parent) : parent;
				m[4] -= offsets.offsetLeft || 0;
				m[5] -= offsets.offsetTop || 0;
				if (!_hasBorderBug && parentCache.offsetParent && !cache.isSVG && !cache.isSVGRoot) {
					m[4] -= parseInt(_getStyle(parentCache.offsetParent, "borderLeftWidth"), 10) || 0;
					m[5] -= parseInt(_getStyle(parentCache.offsetParent, "borderTopWidth"), 10) || 0;
				}
			}
		}
		return m;
	},
	    _getConcatenatedMatrix = function _getConcatenatedMatrix(e, invert) {
		if (!e || e === window || !e.parentNode) {
			return [1, 0, 0, 1, 0, 0];
		}
		//note: we keep reusing _point1 and _point2 in order to minimize memory usage and garbage collection chores.
		var originOffset = _getOffsetTransformOrigin(e, _point1),
		    parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, _point2),
		    m = _getOffset2DMatrix(e, originOffset, parentOriginOffset, false, !invert),
		    a,
		    b,
		    c,
		    d,
		    tx,
		    ty,
		    m2,
		    determinant;
		while ((e = e.parentNode) && e.parentNode && e !== _docElement) {
			originOffset = parentOriginOffset;
			parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, originOffset === _point1 ? _point2 : _point1);
			m2 = _getOffset2DMatrix(e, originOffset, parentOriginOffset);
			a = m[0];
			b = m[1];
			c = m[2];
			d = m[3];
			tx = m[4];
			ty = m[5];
			m[0] = a * m2[0] + b * m2[2];
			m[1] = a * m2[1] + b * m2[3];
			m[2] = c * m2[0] + d * m2[2];
			m[3] = c * m2[1] + d * m2[3];
			m[4] = tx * m2[0] + ty * m2[2] + m2[4];
			m[5] = tx * m2[1] + ty * m2[3] + m2[5];
		}
		if (invert) {
			a = m[0];
			b = m[1];
			c = m[2];
			d = m[3];
			tx = m[4];
			ty = m[5];
			determinant = a * d - b * c;
			m[0] = d / determinant;
			m[1] = -b / determinant;
			m[2] = -c / determinant;
			m[3] = a / determinant;
			m[4] = (c * ty - d * tx) / determinant;
			m[5] = -(a * ty - b * tx) / determinant;
		}
		return m;
	},
	    _localToGlobal = function _localToGlobal(e, p, fromTopLeft, decoratee) {
		e = _unwrapElement(e);
		var m = _getConcatenatedMatrix(e, false),
		    x = p.x,
		    y = p.y;
		if (fromTopLeft) {
			_getOffsetTransformOrigin(e, p);
			x -= p.x;
			y -= p.y;
		}
		decoratee = decoratee === true ? p : decoratee || {};
		decoratee.x = x * m[0] + y * m[2] + m[4];
		decoratee.y = x * m[1] + y * m[3] + m[5];
		return decoratee;
	},
	    _localizePoint = function _localizePoint(p, localToGlobal, globalToLocal) {
		var x = p.x * localToGlobal[0] + p.y * localToGlobal[2] + localToGlobal[4],
		    y = p.x * localToGlobal[1] + p.y * localToGlobal[3] + localToGlobal[5];
		p.x = x * globalToLocal[0] + y * globalToLocal[2] + globalToLocal[4];
		p.y = x * globalToLocal[1] + y * globalToLocal[3] + globalToLocal[5];
		return p;
	},
	    _getElementBounds = function _getElementBounds(e, context, fromTopLeft) {
		if (!(e = _unwrapElement(e))) {
			return null;
		}
		context = _unwrapElement(context);
		var isSVG = e.getBBox && _isSVG(e),
		    origin,
		    left,
		    right,
		    top,
		    bottom,
		    mLocalToGlobal,
		    mGlobalToLocal,
		    p1,
		    p2,
		    p3,
		    p4,
		    bbox,
		    width,
		    height,
		    cache,
		    borderLeft,
		    borderTop,
		    viewBox,
		    viewBoxX,
		    viewBoxY,
		    computedDimensions,
		    cs;
		if (e === window) {
			top = _getDocScrollTop();
			left = _getDocScrollLeft();
			right = left + (_docElement.clientWidth || e.innerWidth || _doc.body.clientWidth || 0);
			bottom = top + ((e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _doc.body.clientHeight || 0); //some browsers (like Firefox) ignore absolutely positioned elements, and collapse the height of the documentElement, so it could be 8px, for example, if you have just an absolutely positioned div. In that case, we use the innerHeight to resolve this.
		} else if (context === undefined || context === window) {
			return e.getBoundingClientRect();
		} else {
			origin = _getOffsetTransformOrigin(e);
			left = -origin.x;
			top = -origin.y;
			if (isSVG) {
				bbox = e.getBBox();
				width = bbox.width;
				height = bbox.height;
			} else if ((e.nodeName + "").toLowerCase() !== "svg" && e.offsetWidth) {
				//Chrome dropped support for "offsetWidth" on SVG elements
				width = e.offsetWidth;
				height = e.offsetHeight;
			} else {
				computedDimensions = _getComputedStyle(e);
				width = parseFloat(computedDimensions.width);
				height = parseFloat(computedDimensions.height);
			}
			right = left + width;
			bottom = top + height;
			if (e.nodeName.toLowerCase() === "svg" && !_isOldIE) {
				//root SVG elements are a special beast because they have 2 types of scaling - transforms on themselves as well as the stretching of the SVG canvas itself based on the outer size and the viewBox. If, for example, the SVG's viewbox is "0 0 100 100" but the CSS is set to width:200px; height:200px, that'd make it appear at 2x scale even though the element itself has no CSS transforms but the offsetWidth/offsetHeight are based on that css, not the viewBox so we need to adjust them accordingly.
				cache = _getSVGOffsets(e);
				cs = cache.computedStyle || {};
				viewBox = (e.getAttribute("viewBox") || "0 0").split(" ");
				viewBoxX = parseFloat(viewBox[0]);
				viewBoxY = parseFloat(viewBox[1]);
				borderLeft = parseFloat(cs.borderLeftWidth) || 0;
				borderTop = parseFloat(cs.borderTopWidth) || 0;
				left /= cache.scaleX;
				top /= cache.scaleY;
				right = left + width - (width - (width - borderLeft) / cache.scaleX - viewBoxX);
				bottom = top + height - (height - (height - borderTop) / cache.scaleY - viewBoxY);
				left -= borderLeft / cache.scaleX - viewBoxX;
				top -= borderTop / cache.scaleY - viewBoxY;
				if (computedDimensions) {
					//when we had to use computed styles, factor in the border now.
					right += (parseFloat(cs.borderRightWidth) + borderLeft) / cache.scaleX;
					bottom += (borderTop + parseFloat(cs.borderBottomWidth)) / cache.scaleY;
				}
			}
		}
		if (e === context) {
			return { left: left, top: top, width: right - left, height: bottom - top };
		}
		mLocalToGlobal = _getConcatenatedMatrix(e);
		mGlobalToLocal = _getConcatenatedMatrix(context, true);
		p1 = _localizePoint({ x: left, y: top }, mLocalToGlobal, mGlobalToLocal);
		p2 = _localizePoint({ x: right, y: top }, mLocalToGlobal, mGlobalToLocal);
		p3 = _localizePoint({ x: right, y: bottom }, mLocalToGlobal, mGlobalToLocal);
		p4 = _localizePoint({ x: left, y: bottom }, mLocalToGlobal, mGlobalToLocal);
		left = Math.min(p1.x, p2.x, p3.x, p4.x);
		top = Math.min(p1.y, p2.y, p3.y, p4.y);
		_temp1.x = _temp1.y = 0;
		if (fromTopLeft) {
			_getOffsetTransformOrigin(context, _temp1);
		}
		return { left: left + _temp1.x, top: top + _temp1.y, width: Math.max(p1.x, p2.x, p3.x, p4.x) - left, height: Math.max(p1.y, p2.y, p3.y, p4.y) - top };
	},

	// end matrix and point conversion methods


	_isArrayLike = function _isArrayLike(e) {
		return e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? true : false; //could be an array of jQuery objects too, so accommodate that.
	},
	    _flattenArray = function _flattenArray(a) {
		var result = [],
		    l = a.length,
		    i,
		    e,
		    j;
		for (i = 0; i < l; i++) {
			e = a[i];
			if (_isArrayLike(e)) {
				j = e.length;
				for (j = 0; j < e.length; j++) {
					result.push(e[j]);
				}
			} else if (e && e.length !== 0) {
				result.push(e);
			}
		}
		return result;
	},
	    _isTouchDevice = typeof window !== "undefined" && "ontouchstart" in _docElement && "orientation" in window,
	    _touchEventLookup = function (types) {
		//we create an object that makes it easy to translate touch event types into their "pointer" counterparts if we're in a browser that uses those instead. Like IE10 uses "MSPointerDown" instead of "touchstart", for example.
		var standard = types.split(","),
		    converted = (_tempDiv.onpointerdown !== undefined ? "pointerdown,pointermove,pointerup,pointercancel" : _tempDiv.onmspointerdown !== undefined ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
		    obj = {},
		    i = 4;
		while (--i > -1) {
			obj[standard[i]] = converted[i];
			obj[converted[i]] = standard[i];
		}
		//to avoid problems in iOS 9, test to see if the browser supports the "passive" option on addEventListener().
		try {
			_docElement.addEventListener("test", null, Object.defineProperty({}, "passive", {
				get: function get() {
					_supportsPassive = 1;
				}
			}));
		} catch (e) {}
		return obj;
	}("touchstart,touchmove,touchend,touchcancel"),
	    _addListener = function _addListener(element, type, func, capture) {
		if (element.addEventListener) {
			var touchType = _touchEventLookup[type];
			capture = capture || (_supportsPassive ? { passive: false } : null);
			element.addEventListener(touchType || type, func, capture);
			if (touchType && type !== touchType) {
				//some browsers actually support both, so must we.
				element.addEventListener(type, func, capture);
			}
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, func);
		}
	},
	    _removeListener = function _removeListener(element, type, func) {
		if (element.removeEventListener) {
			var touchType = _touchEventLookup[type];
			element.removeEventListener(touchType || type, func);
			if (touchType && type !== touchType) {
				element.removeEventListener(type, func);
			}
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, func);
		}
	},
	    _hasTouchID = function _hasTouchID(list, ID) {
		var i = list.length;
		while (--i > -1) {
			if (list[i].identifier === ID) {
				return true;
			}
		}
		return false;
	},
	    _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(e) {
		_isMultiTouching = e.touches && _dragCount < e.touches.length;
		_removeListener(e.target, "touchend", _onMultiTouchDocumentEnd);
	},
	    _onMultiTouchDocument = function _onMultiTouchDocument(e) {
		_isMultiTouching = e.touches && _dragCount < e.touches.length;
		_addListener(e.target, "touchend", _onMultiTouchDocumentEnd);
	},
	    _parseThrowProps = function _parseThrowProps(draggable, snap, max, min, factor, forceZeroVelocity) {
		var vars = {},
		    a,
		    i,
		    l;
		if (snap) {
			if (factor !== 1 && snap instanceof Array) {
				//some data must be altered to make sense, like if the user passes in an array of rotational values in degrees, we must convert it to radians. Or for scrollLeft and scrollTop, we invert the values.
				vars.end = a = [];
				l = snap.length;
				if (typeof snap[0] === "object") {
					//if the array is populated with objects, like points ({x:100, y:200}), make copies before multiplying by the factor, otherwise we'll mess up the originals and the user may reuse it elsewhere.
					for (i = 0; i < l; i++) {
						a[i] = _copy(snap[i], factor);
					}
				} else {
					for (i = 0; i < l; i++) {
						a[i] = snap[i] * factor;
					}
				}
				max += 1.1; //allow 1.1 pixels of wiggle room when snapping in order to work around some browser inconsistencies in the way bounds are reported which can make them roughly a pixel off. For example, if "snap:[-$('#menu').width(), 0]" was defined and #menu had a wrapper that was used as the bounds, some browsers would be one pixel off, making the minimum -752 for example when snap was [-753,0], thus instead of snapping to -753, it would snap to 0 since -753 was below the minimum.
				min -= 1.1;
			} else if (typeof snap === "function") {
				vars.end = function (value) {
					var result = snap.call(draggable, value),
					    copy,
					    p;
					if (factor !== 1) {
						if (typeof result === "object") {
							copy = {};
							for (p in result) {
								copy[p] = result[p] * factor;
							}
							result = copy;
						} else {
							result *= factor;
						}
					}
					return result; //we need to ensure that we can scope the function call to the Draggable instance itself so that users can access important values like maxX, minX, maxY, minY, x, and y from within that function.
				};
			} else {
				vars.end = snap;
			}
		}
		if (max || max === 0) {
			vars.max = max;
		}
		if (min || min === 0) {
			vars.min = min;
		}
		if (forceZeroVelocity) {
			vars.velocity = 0;
		}
		return vars;
	},
	    _isClickable = function _isClickable(e) {
		//sometimes it's convenient to mark an element as clickable by adding a data-clickable="true" attribute (in which case we won't preventDefault() the mouse/touch event). This method checks if the element is an <a>, <input>, or <button> or has an onclick or has the data-clickable or contentEditable attribute set to true (or any of its parent elements).
		var data;
		return !e || !e.getAttribute || e.nodeName === "BODY" ? false : (data = e.getAttribute("data-clickable")) === "true" || data !== "false" && (e.onclick || _clickableTagExp.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? true : _isClickable(e.parentNode);
	},
	    _setSelectable = function _setSelectable(elements, selectable) {
		var i = elements.length,
		    e;
		while (--i > -1) {
			e = elements[i];
			e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
			_setStyle(e, "userSelect", selectable ? "text" : "none");
		}
	},
	    _addPaddingBR = function () {
		//this function is in charge of analyzing browser behavior related to padding. It sets the _addPaddingBR to true if the browser doesn't normally factor in the bottom or right padding on the element inside the scrolling area, and it sets _addPaddingLeft to true if it's a browser that requires the extra offset (offsetLeft) to be added to the paddingRight (like Opera).
		var div = _doc.createElement("div"),
		    child = _doc.createElement("div"),
		    childStyle = child.style,
		    parent = _doc.body || _tempDiv,
		    val;
		childStyle.display = "inline-block";
		childStyle.position = "relative";
		div.style.cssText = child.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden";
		div.appendChild(child);
		parent.appendChild(div);
		val = child.offsetHeight + 18 > div.scrollHeight; //div.scrollHeight should be child.offsetHeight + 20 because of the 10px of padding on each side, but some browsers ignore one side. We allow a 2px margin of error.
		parent.removeChild(div);
		return val;
	}(),


	//The ScrollProxy class wraps an element's contents into another div (we call it "content") that we either add padding when necessary or apply a translate3d() transform in order to overscroll (scroll past the boundaries). This allows us to simply set the scrollTop/scrollLeft (or top/left for easier reverse-axis orientation, which is what we do in Draggable) and it'll do all the work for us. For example, if we tried setting scrollTop to -100 on a normal DOM element, it wouldn't work - it'd look the same as setting it to 0, but if we set scrollTop of a ScrollProxy to -100, it'll give the correct appearance by either setting paddingTop of the wrapper to 100 or applying a 100-pixel translateY.
	ScrollProxy = function ScrollProxy(element, vars) {
		element = _unwrapElement(element);
		vars = vars || {};
		var content = _doc.createElement("div"),
		    style = content.style,
		    node = element.firstChild,
		    offsetTop = 0,
		    offsetLeft = 0,
		    prevTop = element.scrollTop,
		    prevLeft = element.scrollLeft,
		    scrollWidth = element.scrollWidth,
		    scrollHeight = element.scrollHeight,
		    extraPadRight = 0,
		    maxLeft = 0,
		    maxTop = 0,
		    elementWidth,
		    elementHeight,
		    contentHeight,
		    nextNode,
		    transformStart,
		    transformEnd;

		if (_supports3D && vars.force3D !== false) {
			transformStart = "translate3d(";
			transformEnd = "px,0px)";
		} else if (_transformProp) {
			transformStart = "translate(";
			transformEnd = "px)";
		}

		this.scrollTop = function (value, force) {
			if (!arguments.length) {
				return -this.top();
			}
			this.top(-value, force);
		};

		this.scrollLeft = function (value, force) {
			if (!arguments.length) {
				return -this.left();
			}
			this.left(-value, force);
		};

		this.left = function (value, force) {
			if (!arguments.length) {
				return -(element.scrollLeft + offsetLeft);
			}
			var dif = element.scrollLeft - prevLeft,
			    oldOffset = offsetLeft;
			if ((dif > 2 || dif < -2) && !force) {
				//if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
				prevLeft = element.scrollLeft;
				gsap_TweenLite["g" /* default */].killTweensOf(this, true, { left: 1, scrollLeft: 1 });
				this.left(-prevLeft);
				if (vars.onKill) {
					vars.onKill();
				}
				return;
			}
			value = -value; //invert because scrolling works in the opposite direction
			if (value < 0) {
				offsetLeft = value - 0.5 | 0;
				value = 0;
			} else if (value > maxLeft) {
				offsetLeft = value - maxLeft | 0;
				value = maxLeft;
			} else {
				offsetLeft = 0;
			}
			if (offsetLeft || oldOffset) {
				if (transformStart) {
					if (!this._suspendTransforms) {
						style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
					}
				} else {
					style.left = -offsetLeft + "px";
				}
				if (offsetLeft + extraPadRight >= 0) {
					style.paddingRight = offsetLeft + extraPadRight + "px";
				}
			}
			element.scrollLeft = value | 0;
			prevLeft = element.scrollLeft; //don't merge this with the line above because some browsers adjsut the scrollLeft after it's set, so in order to be 100% accurate in tracking it, we need to ask the browser to report it.
		};

		this.top = function (value, force) {
			if (!arguments.length) {
				return -(element.scrollTop + offsetTop);
			}
			var dif = element.scrollTop - prevTop,
			    oldOffset = offsetTop;
			if ((dif > 2 || dif < -2) && !force) {
				//if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
				prevTop = element.scrollTop;
				gsap_TweenLite["g" /* default */].killTweensOf(this, true, { top: 1, scrollTop: 1 });
				this.top(-prevTop);
				if (vars.onKill) {
					vars.onKill();
				}
				return;
			}
			value = -value; //invert because scrolling works in the opposite direction
			if (value < 0) {
				offsetTop = value - 0.5 | 0;
				value = 0;
			} else if (value > maxTop) {
				offsetTop = value - maxTop | 0;
				value = maxTop;
			} else {
				offsetTop = 0;
			}
			if (offsetTop || oldOffset) {
				if (transformStart) {
					if (!this._suspendTransforms) {
						style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
					}
				} else {
					style.top = -offsetTop + "px";
				}
			}
			element.scrollTop = value | 0;
			prevTop = element.scrollTop;
		};

		this.maxScrollTop = function () {
			return maxTop;
		};

		this.maxScrollLeft = function () {
			return maxLeft;
		};

		this.disable = function () {
			node = content.firstChild;
			while (node) {
				nextNode = node.nextSibling;
				element.appendChild(node);
				node = nextNode;
			}
			if (element === content.parentNode) {
				//in case disable() is called when it's already disabled.
				element.removeChild(content);
			}
		};

		this.enable = function () {
			node = element.firstChild;
			if (node === content) {
				return;
			}
			while (node) {
				nextNode = node.nextSibling;
				content.appendChild(node);
				node = nextNode;
			}
			element.appendChild(content);
			this.calibrate();
		};

		this.calibrate = function (force) {
			var widthMatches = element.clientWidth === elementWidth,
			    x,
			    y;
			prevTop = element.scrollTop;
			prevLeft = element.scrollLeft;
			if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
				return; //no need to recalculate things if the width and height haven't changed.
			}
			if (offsetTop || offsetLeft) {
				x = this.left();
				y = this.top();
				this.left(-element.scrollLeft);
				this.top(-element.scrollTop);
			}
			//first, we need to remove any width constraints to see how the content naturally flows so that we can see if it's wider than the containing element. If so, we've got to record the amount of overage so that we can apply that as padding in order for browsers to correctly handle things. Then we switch back to a width of 100% (without that, some browsers don't flow the content correctly)
			if (!widthMatches || force) {
				style.display = "block";
				style.width = "auto";
				style.paddingRight = "0px";
				extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
				//if the content is wider than the container, we need to add the paddingLeft and paddingRight in order for things to behave correctly.
				if (extraPadRight) {
					extraPadRight += _getStyle(element, "paddingLeft") + (_addPaddingBR ? _getStyle(element, "paddingRight") : 0);
				}
			}
			style.display = "inline-block";
			style.position = "relative";
			style.overflow = "visible";
			style.verticalAlign = "top";
			style.width = "100%";
			style.paddingRight = extraPadRight + "px";
			//some browsers neglect to factor in the bottom padding when calculating the scrollHeight, so we need to add that padding to the content when that happens. Allow a 2px margin for error
			if (_addPaddingBR) {
				style.paddingBottom = _getStyle(element, "paddingBottom", true);
			}
			if (_isOldIE) {
				style.zoom = "1";
			}
			elementWidth = element.clientWidth;
			elementHeight = element.clientHeight;
			scrollWidth = element.scrollWidth;
			scrollHeight = element.scrollHeight;
			maxLeft = element.scrollWidth - elementWidth;
			maxTop = element.scrollHeight - elementHeight;
			contentHeight = content.offsetHeight;
			style.display = "block";
			if (x || y) {
				this.left(x);
				this.top(y);
			}
		};

		this.content = content;
		this.element = element;
		this._suspendTransforms = false;
		this.enable();
	},
	    Draggable = function Draggable(target, vars) {
		gsap_TweenLite["c" /* EventDispatcher */].call(this, target);
		target = _unwrapElement(target); //in case the target is a selector object or selector text
		if (!ThrowPropsPlugin) {
			ThrowPropsPlugin = _globals.com.greensock.plugins.ThrowPropsPlugin;
		}
		this.vars = vars = _copy(vars || {});
		this.target = target;
		this.x = this.y = this.rotation = 0;
		this.dragResistance = parseFloat(vars.dragResistance) || 0;
		this.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
		this.lockAxis = vars.lockAxis;
		this.autoScroll = vars.autoScroll || 0;
		this.lockedAxis = null;
		this.allowEventDefault = !!vars.allowEventDefault;
		var type = (vars.type || (_isOldIE ? "top,left" : "x,y")).toLowerCase(),
		    xyMode = type.indexOf("x") !== -1 || type.indexOf("y") !== -1,
		    rotationMode = type.indexOf("rotation") !== -1,
		    xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
		    yProp = xyMode ? "y" : "top",
		    allowX = type.indexOf("x") !== -1 || type.indexOf("left") !== -1 || type === "scroll",
		    allowY = type.indexOf("y") !== -1 || type.indexOf("top") !== -1 || type === "scroll",
		    minimumMovement = vars.minimumMovement || 2,
		    self = this,
		    triggers = _slice(vars.trigger || vars.handle || target),
		    killProps = {},
		    dragEndTime = 0,
		    checkAutoScrollBounds = false,
		    autoScrollMarginTop = vars.autoScrollMarginTop || 40,
		    autoScrollMarginRight = vars.autoScrollMarginRight || 40,
		    autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
		    autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
		    isClickable = vars.clickableTest || _isClickable,
		    clickTime = 0,
		    enabled,
		    scrollProxy,
		    startPointerX,
		    startPointerY,
		    startElementX,
		    startElementY,
		    hasBounds,
		    hasDragCallback,
		    maxX,
		    minX,
		    maxY,
		    minY,
		    tempVars,
		    cssVars,
		    touch,
		    touchID,
		    rotationOrigin,
		    dirty,
		    old,
		    snapX,
		    snapY,
		    snapXY,
		    isClicking,
		    touchEventTarget,
		    matrix,
		    interrupted,
		    startScrollTop,
		    startScrollLeft,
		    applyObj,
		    allowNativeTouchScrolling,
		    touchDragAxis,
		    isDispatching,
		    clickDispatch,
		    trustedClickDispatch,
		    onContextMenu = function onContextMenu(e) {
			//used to prevent long-touch from triggering a context menu.
			if (self.isPressed && e.which < 2) {
				self.endDrag();
			} else {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		},


		//this method gets called on every tick of TweenLite.ticker which allows us to synchronize the renders to the core engine (which is typically synchronized with the display refresh via requestAnimationFrame). This is an optimization - it's better than applying the values inside the "mousemove" or "touchmove" event handler which may get called many times inbetween refreshes.
		render = function render(suppressEvents) {
			if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
				var e = target,
				    autoScrollFactor = self.autoScroll * 15,
				    //multiplying by 15 just gives us a better "feel" speed-wise.
				parent,
				    isRoot,
				    rect,
				    pointerX,
				    pointerY,
				    changeX,
				    changeY,
				    gap;
				checkAutoScrollBounds = false;
				_windowProxy.scrollTop = window.pageYOffset != null ? window.pageYOffset : _docElement.scrollTop != null ? _docElement.scrollTop : _doc.body.scrollTop;
				_windowProxy.scrollLeft = window.pageXOffset != null ? window.pageXOffset : _docElement.scrollLeft != null ? _docElement.scrollLeft : _doc.body.scrollLeft;
				pointerX = self.pointerX - _windowProxy.scrollLeft;
				pointerY = self.pointerY - _windowProxy.scrollTop;
				while (e && !isRoot) {
					//walk up the chain and sense wherever the pointer is within 40px of an edge that's scrollable.
					isRoot = _isRoot(e.parentNode);
					parent = isRoot ? _windowProxy : e.parentNode;
					rect = isRoot ? { bottom: Math.max(_docElement.clientHeight, window.innerHeight || 0), right: Math.max(_docElement.clientWidth, window.innerWidth || 0), left: 0, top: 0 } : parent.getBoundingClientRect();
					changeX = changeY = 0;
					if (allowY) {
						gap = parent._gsMaxScrollY - parent.scrollTop;
						if (gap < 0) {
							changeY = gap;
						} else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
							checkAutoScrollBounds = true;
							changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
						} else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
							checkAutoScrollBounds = true;
							changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
						}
						if (changeY) {
							parent.scrollTop += changeY;
						}
					}
					if (allowX) {
						gap = parent._gsMaxScrollX - parent.scrollLeft;
						if (gap < 0) {
							changeX = gap;
						} else if (pointerX > rect.right - autoScrollMarginRight && gap) {
							checkAutoScrollBounds = true;
							changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
						} else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
							checkAutoScrollBounds = true;
							changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
						}
						if (changeX) {
							parent.scrollLeft += changeX;
						}
					}

					if (isRoot && (changeX || changeY)) {
						window.scrollTo(parent.scrollLeft, parent.scrollTop);
						setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
					}
					e = parent;
				}
			}
			if (dirty) {
				var x = self.x,
				    y = self.y,
				    min = 0.000001;
				if (x < min && x > -min) {
					//browsers don't handle super small decimals well.
					x = 0;
				}
				if (y < min && y > -min) {
					y = 0;
				}
				if (rotationMode) {
					self.deltaX = x - applyObj.data.rotation;
					applyObj.data.rotation = self.rotation = x;
					applyObj.setRatio(1); //note: instead of doing TweenLite.set(), as a performance optimization we skip right to the method that renders the transforms inside CSSPlugin. For old versions of IE, though, we do a normal TweenLite.set() to leverage its ability to re-reroute to an IE-specific 2D renderer.
				} else {
					if (scrollProxy) {
						if (allowY) {
							self.deltaY = y - scrollProxy.top();
							scrollProxy.top(y);
						}
						if (allowX) {
							self.deltaX = x - scrollProxy.left();
							scrollProxy.left(x);
						}
					} else if (xyMode) {
						if (allowY) {
							self.deltaY = y - applyObj.data.y;
							applyObj.data.y = y;
						}
						if (allowX) {
							self.deltaX = x - applyObj.data.x;
							applyObj.data.x = x;
						}
						applyObj.setRatio(1); //note: instead of doing TweenLite.set(), as a performance optimization we skip right to the method that renders the transforms inside CSSPlugin. For old versions of IE, though, we do a normal TweenLite.set() to leverage its ability to re-reroute to an IE-specific 2D renderer.
					} else {
						if (allowY) {
							self.deltaY = y - parseFloat(target.style.top || 0);
							target.style.top = y + "px";
						}
						if (allowX) {
							self.deltaY = x - parseFloat(target.style.left || 0);
							target.style.left = x + "px";
						}
					}
				}
				if (hasDragCallback && !suppressEvents && !isDispatching) {
					isDispatching = true; //in case onDrag has an update() call (avoid endless loop)
					_dispatchEvent(self, "drag", "onDrag");
					isDispatching = false;
				}
			}
			dirty = false;
		},


		//copies the x/y from the element (whether that be transforms, top/left, or ScrollProxy's top/left) to the Draggable's x and y (and rotation if necessary) properties so that they reflect reality and it also (optionally) applies any snapping necessary. This is used by the ThrowPropsPlugin tween in an onUpdate to ensure things are synced and snapped.
		syncXY = function syncXY(skipOnUpdate, skipSnap) {
			var x = self.x,
			    y = self.y,
			    snappedValue;
			if (!target._gsTransform && (xyMode || rotationMode)) {
				//just in case the _gsTransform got wiped, like if the user called clearProps on the transform or something (very rare), doing an x tween forces a re-parsing of the transforms and population of the _gsTransform.
				gsap_TweenLite["g" /* default */].set(target, { x: "+=0", overwrite: false, data: "_draggable" });
			}
			if (xyMode) {
				self.y = target._gsTransform.y;
				self.x = target._gsTransform.x;
			} else if (rotationMode) {
				self.x = self.rotation = target._gsTransform.rotation;
			} else if (scrollProxy) {
				self.y = scrollProxy.top();
				self.x = scrollProxy.left();
			} else {
				self.y = parseInt(target.style.top, 10) || 0;
				self.x = parseInt(target.style.left, 10) || 0;
			}
			if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
				if (snapXY) {
					_temp1.x = self.x;
					_temp1.y = self.y;
					snappedValue = snapXY(_temp1);
					if (snappedValue.x !== self.x) {
						self.x = snappedValue.x;
						dirty = true;
					}
					if (snappedValue.y !== self.y) {
						self.y = snappedValue.y;
						dirty = true;
					}
				}
				if (snapX) {
					snappedValue = snapX(self.x);
					if (snappedValue !== self.x) {
						self.x = snappedValue;
						if (rotationMode) {
							self.rotation = snappedValue;
						}
						dirty = true;
					}
				}
				if (snapY) {
					snappedValue = snapY(self.y);
					if (snappedValue !== self.y) {
						self.y = snappedValue;
					}
					dirty = true;
				}
			}
			if (dirty) {
				render(true);
			}
			if (!skipOnUpdate) {
				self.deltaX = self.x - x;
				self.deltaY = self.y - y;
				_dispatchEvent(self, "throwupdate", "onThrowUpdate");
			}
		},
		    calculateBounds = function calculateBounds() {
			var bounds, targetBounds, snap, snapIsRaw;
			hasBounds = false;
			if (scrollProxy) {
				scrollProxy.calibrate();
				self.minX = minX = -scrollProxy.maxScrollLeft();
				self.minY = minY = -scrollProxy.maxScrollTop();
				self.maxX = maxX = self.maxY = maxY = 0;
				hasBounds = true;
			} else if (!!vars.bounds) {
				bounds = _getBounds(vars.bounds, target.parentNode); //could be a selector/jQuery object or a DOM element or a generic object like {top:0, left:100, width:1000, height:800} or {minX:100, maxX:1100, minY:0, maxY:800}
				if (rotationMode) {
					self.minX = minX = bounds.left;
					self.maxX = maxX = bounds.left + bounds.width;
					self.minY = minY = self.maxY = maxY = 0;
				} else if (vars.bounds.maxX !== undefined || vars.bounds.maxY !== undefined) {
					bounds = vars.bounds;
					self.minX = minX = bounds.minX;
					self.minY = minY = bounds.minY;
					self.maxX = maxX = bounds.maxX;
					self.maxY = maxY = bounds.maxY;
				} else {
					targetBounds = _getBounds(target, target.parentNode);
					self.minX = minX = _getStyle(target, xProp) + bounds.left - targetBounds.left;
					self.minY = minY = _getStyle(target, yProp) + bounds.top - targetBounds.top;
					self.maxX = maxX = minX + (bounds.width - targetBounds.width);
					self.maxY = maxY = minY + (bounds.height - targetBounds.height);
				}
				if (minX > maxX) {
					self.minX = maxX;
					self.maxX = maxX = minX;
					minX = self.minX;
				}
				if (minY > maxY) {
					self.minY = maxY;
					self.maxY = maxY = minY;
					minY = self.minY;
				}
				if (rotationMode) {
					self.minRotation = minX;
					self.maxRotation = maxX;
				}
				hasBounds = true;
			}
			if (vars.liveSnap) {
				snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
				snapIsRaw = snap instanceof Array || typeof snap === "function";
				if (rotationMode) {
					snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
					snapY = null;
				} else {
					if (snap.points) {
						snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
					} else {
						if (allowX) {
							snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
						}
						if (allowY) {
							snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
						}
					}
				}
			}
		},
		    onThrowComplete = function onThrowComplete() {
			self.isThrowing = false;
			_dispatchEvent(self, "throwcomplete", "onThrowComplete");
		},
		    onThrowOverwrite = function onThrowOverwrite() {
			self.isThrowing = false;
		},
		    animate = function animate(throwProps, forceZeroVelocity) {
			var snap, snapIsRaw, tween, overshootTolerance;
			if (throwProps && ThrowPropsPlugin) {
				if (throwProps === true) {
					snap = vars.snap || vars.liveSnap || {};
					snapIsRaw = snap instanceof Array || typeof snap === "function";
					throwProps = { resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1) };
					if (rotationMode) {
						throwProps.rotation = _parseThrowProps(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
					} else {
						if (allowX) {
							throwProps[xProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.x || snap.left || snap.scrollLeft, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
						}
						if (allowY) {
							throwProps[yProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.y || snap.top || snap.scrollTop, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
						}
						if (snap.points || snap instanceof Array && typeof snap[0] === "object") {
							throwProps.linkedProps = xProp + "," + yProp;
							throwProps.radius = snap.radius; //note: we also disable liveSnapping while throwing if there's a "radius" defined, otherwise it looks weird to have the item thrown past a snapping point but live-snapping mid-tween. We do this by altering the onUpdateParams so that "skipSnap" parameter is true for syncXY.
						}
					}
				}
				self.isThrowing = true;
				overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
				self.tween = tween = ThrowPropsPlugin.to(scrollProxy || target, { throwProps: throwProps, data: "_draggable", ease: vars.ease || _globals.Power3.easeOut, onComplete: onThrowComplete, onOverwrite: onThrowOverwrite, onUpdate: vars.fastMode ? _dispatchEvent : syncXY, onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : _emptyArray }, Math.max(vars.minDuration || 0, vars.maxDuration || 0) || 2, !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || typeof throwProps === "object" && throwProps.resistance > 1000 ? 0 : 0.5, overshootTolerance);
				if (!vars.fastMode) {
					//to populate the end values, we just scrub the tween to the end, record the values, and then jump back to the beginning.
					if (scrollProxy) {
						scrollProxy._suspendTransforms = true; //Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
					}
					tween.render(tween.duration(), true, true);
					syncXY(true, true);
					self.endX = self.x;
					self.endY = self.y;
					if (rotationMode) {
						self.endRotation = self.x;
					}
					tween.play(0);
					syncXY(true, true);
					if (scrollProxy) {
						scrollProxy._suspendTransforms = false;
					}
				}
			} else if (hasBounds) {
				self.applyBounds();
			}
		},
		    updateMatrix = function updateMatrix(shiftStart) {
			var start = matrix || [1, 0, 0, 1, 0, 0],
			    a,
			    b,
			    c,
			    d,
			    tx,
			    ty,
			    determinant,
			    pointerX,
			    pointerY;
			matrix = _getConcatenatedMatrix(target.parentNode, true);
			if (shiftStart && self.isPressed && start.join(",") !== matrix.join(",")) {
				//if the matrix changes WHILE the element is pressed, we must adjust the startPointerX and startPointerY accordingly, so we invert the original matrix and figure out where the pointerX and pointerY were in the global space, then apply the new matrix to get the updated coordinates.
				a = start[0];
				b = start[1];
				c = start[2];
				d = start[3];
				tx = start[4];
				ty = start[5];
				determinant = a * d - b * c;
				pointerX = startPointerX * (d / determinant) + startPointerY * (-c / determinant) + (c * ty - d * tx) / determinant;
				pointerY = startPointerX * (-b / determinant) + startPointerY * (a / determinant) + -(a * ty - b * tx) / determinant;
				startPointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
				startPointerX = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
			}
			if (!matrix[1] && !matrix[2] && matrix[0] == 1 && matrix[3] == 1 && matrix[4] == 0 && matrix[5] == 0) {
				//if there are no transforms, we can optimize performance by not factoring in the matrix
				matrix = null;
			}
		},
		    recordStartPositions = function recordStartPositions() {
			var edgeTolerance = 1 - self.edgeResistance;
			updateMatrix(false);
			if (matrix) {
				startPointerX = self.pointerX * matrix[0] + self.pointerY * matrix[2] + matrix[4]; //translate to local coordinate system
				startPointerY = self.pointerX * matrix[1] + self.pointerY * matrix[3] + matrix[5];
			}
			if (dirty) {
				setPointerPosition(self.pointerX, self.pointerY);
				render(true);
			}
			if (scrollProxy) {
				calculateBounds();
				startElementY = scrollProxy.top();
				startElementX = scrollProxy.left();
			} else {
				//if the element is in the process of tweening, don't force snapping to occur because it could make it jump. Imagine the user throwing, then before it's done, clicking on the element in its inbetween state.
				if (isTweening()) {
					syncXY(true, true);
					calculateBounds();
				} else {
					self.applyBounds();
				}
				if (rotationMode) {
					rotationOrigin = self.rotationOrigin = _localToGlobal(target, { x: 0, y: 0 });
					syncXY(true, true);
					startElementX = self.x; //starting rotation (x always refers to rotation in type:"rotation", measured in degrees)
					startElementY = self.y = Math.atan2(rotationOrigin.y - self.pointerY, self.pointerX - rotationOrigin.x) * _RAD2DEG;
				} else {
					startScrollTop = target.parentNode ? target.parentNode.scrollTop || 0 : 0;
					startScrollLeft = target.parentNode ? target.parentNode.scrollLeft || 0 : 0;
					startElementY = _getStyle(target, yProp); //record the starting top and left values so that we can just add the mouse's movement to them later.
					startElementX = _getStyle(target, xProp);
				}
			}
			if (hasBounds && edgeTolerance) {
				if (startElementX > maxX) {
					startElementX = maxX + (startElementX - maxX) / edgeTolerance;
				} else if (startElementX < minX) {
					startElementX = minX - (minX - startElementX) / edgeTolerance;
				}
				if (!rotationMode) {
					if (startElementY > maxY) {
						startElementY = maxY + (startElementY - maxY) / edgeTolerance;
					} else if (startElementY < minY) {
						startElementY = minY - (minY - startElementY) / edgeTolerance;
					}
				}
			}
			self.startX = startElementX;
			self.startY = startElementY;
		},
		    isTweening = function isTweening() {
			return self.tween && self.tween.isActive();
		},
		    removePlaceholder = function removePlaceholder() {
			if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
				//_placeholderDiv just props open auto-scrolling containers so they don't collapse as the user drags left/up. We remove it after dragging (and throwing, if necessary) finishes.
				_placeholderDiv.parentNode.removeChild(_placeholderDiv);
			}
		},
		    buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
			if (min == null) {
				min = -_max;
			}
			if (max == null) {
				max = _max;
			}
			if (typeof snap === "function") {
				return function (n) {
					var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)
					return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
				};
			}
			if (snap instanceof Array) {
				return function (n) {
					var i = snap.length,
					    closest = 0,
					    absDif = _max,
					    val,
					    dif;
					while (--i > -1) {
						val = snap[i];
						dif = val - n;
						if (dif < 0) {
							dif = -dif;
						}
						if (dif < absDif && val >= min && val <= max) {
							closest = i;
							absDif = dif;
						}
					}
					return snap[closest];
				};
			}
			return isNaN(snap) ? function (n) {
				return n;
			} : function () {
				return snap * factor;
			};
		},
		    buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
			radius = radius && radius < _max ? radius * radius : _max; //so we don't have to Math.sqrt() in the functions. Performance optimization.
			if (typeof snap === "function") {
				return function (point) {
					var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
					    x = point.x,
					    y = point.y,
					    result,
					    dx,
					    dy; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)
					point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
					point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
					result = snap.call(self, point);
					if (result !== point) {
						point.x = result.x;
						point.y = result.y;
					}
					if (factor !== 1) {
						point.x *= factor;
						point.y *= factor;
					}
					if (radius < _max) {
						dx = point.x - x;
						dy = point.y - y;
						if (dx * dx + dy * dy > radius) {
							point.x = x;
							point.y = y;
						}
					}
					return point;
				};
			}
			if (snap instanceof Array) {
				return function (p) {
					var i = snap.length,
					    closest = 0,
					    minDist = _max,
					    x,
					    y,
					    point,
					    dist;
					while (--i > -1) {
						point = snap[i];
						x = point.x - p.x;
						y = point.y - p.y;
						dist = x * x + y * y;
						if (dist < minDist) {
							closest = i;
							minDist = dist;
						}
					}
					return minDist <= radius ? snap[closest] : p;
				};
			}
			return function (n) {
				return n;
			};
		},


		//called when the mouse is pressed (or touch starts)
		onPress = function onPress(e, force) {
			var i;
			if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
				//when we DON'T preventDefault() in order to accommodate touch-scrolling and the user just taps, many browsers also fire a mousedown/mouseup sequence AFTER the touchstart/touchend sequence, thus it'd result in two quick "click" events being dispatched. This line senses that condition and halts it on the subsequent mousedown.
				return;
			}
			interrupted = isTweening();
			self.pointerEvent = e;
			if (_touchEventLookup[e.type]) {
				//note: on iOS, BOTH touchmove and mousemove are dispatched, but the mousemove has pageY and pageX of 0 which would mess up the calculations and needlessly hurt performance.
				touchEventTarget = e.type.indexOf("touch") !== -1 ? e.currentTarget || e.target : _doc; //pointer-based touches (for Microsoft browsers) don't remain locked to the original target like other browsers, so we must use the document instead. The event type would be "MSPointerDown" or "pointerdown".
				_addListener(touchEventTarget, "touchend", onRelease);
				_addListener(touchEventTarget, "touchmove", onMove);
				_addListener(touchEventTarget, "touchcancel", onRelease);
				_addListener(_doc, "touchstart", _onMultiTouchDocument);
			} else {
				touchEventTarget = null;
				_addListener(_doc, "mousemove", onMove); //attach these to the document instead of the box itself so that if the user's mouse moves too quickly (and off of the box), things still work.
			}
			touchDragAxis = null;
			_addListener(_doc, "mouseup", onRelease);
			if (e && e.target) {
				_addListener(e.target, "mouseup", onRelease); //we also have to listen directly on the element because some browsers don't bubble up the event to the _doc on elements with contentEditable="true"
			}
			isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
			if (isClicking) {
				_addListener(e.target, "change", onRelease); //in some browsers, when you mousedown on a <select> element, no mouseup gets dispatched! So we listen for a "change" event instead.
				_dispatchEvent(self, "pressInit", "onPressInit");
				_dispatchEvent(self, "press", "onPress");
				_setSelectable(triggers, true); //accommodates things like inputs and elements with contentEditable="true" (otherwise user couldn't drag to select text)
				return;
			}
			allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x"; //note: in Chrome, right-clicking (for a context menu) fires onPress and it doesn't have the event.which set properly, so we must look for event.ctrlKey. If the user wants to allow context menus we should of course sense it here and not allow native touch scrolling.
			if (_isOldIE) {
				e = _populateIEEvent(e, true);
			} else if (!allowNativeTouchScrolling && !self.allowEventDefault) {
				e.preventDefault();
				if (e.preventManipulation) {
					e.preventManipulation(); //for some Microsoft browsers
				}
			}
			if (e.changedTouches) {
				//touch events store the data slightly differently
				e = touch = e.changedTouches[0];
				touchID = e.identifier;
			} else if (e.pointerId) {
				touchID = e.pointerId; //for some Microsoft browsers
			} else {
				touch = touchID = null;
			}
			_dragCount++;
			_addToRenderQueue(render); //causes the Draggable to render on each "tick" of TweenLite.ticker (performance optimization - updating values in a mousemove can cause them to happen too frequently, like multiple times between frame redraws which is wasteful, and it also prevents values from updating properly in IE8)
			startPointerY = self.pointerY = e.pageY; //record the starting x and y so that we can calculate the movement from the original in _onMouseMove
			startPointerX = self.pointerX = e.pageX;
			_dispatchEvent(self, "pressInit", "onPressInit");
			if (allowNativeTouchScrolling || self.autoScroll) {
				_recordMaxScrolls(target.parentNode);
			}
			if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
				//add a placeholder div to prevent the parent container from collapsing when the user drags the element left.
				_placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
				target.parentNode.appendChild(_placeholderDiv);
			}
			recordStartPositions();
			if (self.tween) {
				self.tween.kill();
			}
			self.isThrowing = false;
			gsap_TweenLite["g" /* default */].killTweensOf(scrollProxy || target, true, killProps); //in case the user tries to drag it before the last tween is done.
			if (scrollProxy) {
				gsap_TweenLite["g" /* default */].killTweensOf(target, true, { scrollTo: 1 }); //just in case the original target's scroll position is being tweened somewhere else.
			}
			self.tween = self.lockedAxis = null;
			if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
				target.style.zIndex = Draggable.zIndex++;
			}
			self.isPressed = true;
			hasDragCallback = !!(vars.onDrag || self._listeners.drag);
			if (!rotationMode && (vars.cursor !== false || vars.activeCursor)) {
				i = triggers.length;
				while (--i > -1) {
					_setStyle(triggers[i], "cursor", vars.activeCursor || vars.cursor || "move");
				}
			}
			_dispatchEvent(self, "press", "onPress");
		},


		//called every time the mouse/touch moves
		onMove = function onMove(e) {
			var originalEvent = e,
			    touches,
			    pointerX,
			    pointerY,
			    i,
			    dx,
			    dy;
			if (!enabled || _isMultiTouching || !self.isPressed || !e) {
				return;
			}
			self.pointerEvent = e;
			touches = e.changedTouches;
			if (touches) {
				//touch events store the data slightly differently
				e = touches[0];
				if (e !== touch && e.identifier !== touchID) {
					//Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
					i = touches.length;
					while (--i > -1 && (e = touches[i]).identifier !== touchID) {}
					if (i < 0) {
						return;
					}
				}
			} else if (e.pointerId && touchID && e.pointerId !== touchID) {
				//for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
				return;
			}
			if (_isOldIE) {
				e = _populateIEEvent(e, true);
			} else {
				if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
					//Android browsers force us to decide on the first "touchmove" event if we should allow the default (scrolling) behavior or preventDefault(). Otherwise, a "touchcancel" will be fired and then no "touchmove" or "touchend" will fire during the scrolling (no good).
					pointerX = e.pageX;
					pointerY = e.pageY;
					if (matrix) {
						i = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
						pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
						pointerX = i;
					}
					dx = Math.abs(pointerX - startPointerX);
					dy = Math.abs(pointerY - startPointerY);
					if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
						touchDragAxis = dx > dy && allowX ? "x" : "y";
						if (self.vars.lockAxisOnTouchScroll !== false) {
							self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
							if (typeof self.vars.onLockAxis === "function") {
								self.vars.onLockAxis.call(self, originalEvent);
							}
						}
						if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
							onRelease(originalEvent);
							return;
						}
					}
				}
				if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
					originalEvent.preventDefault();
					if (originalEvent.preventManipulation) {
						//for some Microsoft browsers
						originalEvent.preventManipulation();
					}
				}
			}
			if (self.autoScroll) {
				checkAutoScrollBounds = true;
			}
			setPointerPosition(e.pageX, e.pageY);
		},
		    setPointerPosition = function setPointerPosition(pointerX, pointerY) {
			var dragTolerance = 1 - self.dragResistance,
			    edgeTolerance = 1 - self.edgeResistance,
			    xChange,
			    yChange,
			    x,
			    y,
			    dif,
			    temp;

			self.pointerX = pointerX;
			self.pointerY = pointerY;
			if (rotationMode) {
				y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
				dif = self.y - y;
				if (dif > 180) {
					startElementY -= 360;
					self.y = y;
				} else if (dif < -180) {
					startElementY += 360;
					self.y = y;
				}
				if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
					self.y = y;
					x = startElementX + (startElementY - y) * dragTolerance;
				} else {
					x = startElementX;
				}
			} else {
				if (matrix) {
					temp = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
					pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
					pointerX = temp;
				}
				yChange = pointerY - startPointerY;
				xChange = pointerX - startPointerX;
				if (yChange < minimumMovement && yChange > -minimumMovement) {
					yChange = 0;
				}
				if (xChange < minimumMovement && xChange > -minimumMovement) {
					xChange = 0;
				}
				if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
					temp = self.lockedAxis;
					if (!temp) {
						self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
						if (temp && typeof self.vars.onLockAxis === "function") {
							self.vars.onLockAxis.call(self, self.pointerEvent);
						}
					}
					if (temp === "y") {
						yChange = 0;
					} else if (temp === "x") {
						xChange = 0;
					}
				}
				x = startElementX + xChange * dragTolerance;
				y = startElementY + yChange * dragTolerance;
			}

			if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
				if (snapXY) {
					_temp1.x = x;
					_temp1.y = y;
					temp = snapXY(_temp1);
					x = temp.x;
					y = temp.y;
				}
				if (snapX) {
					x = snapX(x);
				}
				if (snapY) {
					y = snapY(y);
				}
			} else if (hasBounds) {
				if (x > maxX) {
					x = maxX + (x - maxX) * edgeTolerance;
				} else if (x < minX) {
					x = minX + (x - minX) * edgeTolerance;
				}
				if (!rotationMode) {
					if (y > maxY) {
						y = maxY + (y - maxY) * edgeTolerance;
					} else if (y < minY) {
						y = minY + (y - minY) * edgeTolerance;
					}
				}
			}
			if (!rotationMode && !matrix) {
				x = Math.round(x); //helps work around an issue with some Win Touch devices
				y = Math.round(y);
			}
			if (self.x !== x || self.y !== y && !rotationMode) {
				if (rotationMode) {
					self.endRotation = self.x = self.endX = x;
					dirty = true;
				} else {
					if (allowY) {
						self.y = self.endY = y;
						dirty = true; //a flag that indicates we need to render the target next time the TweenLite.ticker dispatches a "tick" event (typically on a requestAnimationFrame) - this is a performance optimization (we shouldn't render on every move because sometimes many move events can get dispatched between screen refreshes, and that'd be wasteful to render every time)
					}
					if (allowX) {
						self.x = self.endX = x;
						dirty = true;
					}
				}
				if (!self.isDragging && self.isPressed) {
					self.isDragging = true;
					_dispatchEvent(self, "dragstart", "onDragStart");
				}
			}
		},


		//called when the mouse/touch is released
		onRelease = function onRelease(e, force) {
			if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
				//for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
				return;
			}
			self.isPressed = false;
			var originalEvent = e,
			    wasDragging = self.isDragging,
			    isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
			    placeholderDelayedCall = gsap_TweenLite["g" /* default */].delayedCall(0.001, removePlaceholder),
			    touches,
			    i,
			    syntheticEvent,
			    eventTarget,
			    syntheticClick;
			if (touchEventTarget) {
				_removeListener(touchEventTarget, "touchend", onRelease);
				_removeListener(touchEventTarget, "touchmove", onMove);
				_removeListener(touchEventTarget, "touchcancel", onRelease);
				_removeListener(_doc, "touchstart", _onMultiTouchDocument);
			} else {
				_removeListener(_doc, "mousemove", onMove);
			}
			_removeListener(_doc, "mouseup", onRelease);
			if (e && e.target) {
				_removeListener(e.target, "mouseup", onRelease);
			}
			dirty = false;
			if (isClicking && !isContextMenuRelease) {
				if (e) {
					_removeListener(e.target, "change", onRelease);
					self.pointerEvent = originalEvent;
				}
				_setSelectable(triggers, false);
				_dispatchEvent(self, "release", "onRelease");
				_dispatchEvent(self, "click", "onClick");
				isClicking = false;
				return;
			}
			_removeFromRenderQueue(render);
			if (!rotationMode) {
				i = triggers.length;
				while (--i > -1) {
					_setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? "move" : null));
				}
			}
			if (wasDragging) {
				dragEndTime = _lastDragTime = _getTime();
				self.isDragging = false;
			}
			_dragCount--;
			if (e) {
				if (_isOldIE) {
					e = _populateIEEvent(e, false);
				}
				touches = e.changedTouches;
				if (touches) {
					//touch events store the data slightly differently
					e = touches[0];
					if (e !== touch && e.identifier !== touchID) {
						//Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
						i = touches.length;
						while (--i > -1 && (e = touches[i]).identifier !== touchID) {}
						if (i < 0) {
							return;
						}
					}
				}
				self.pointerEvent = originalEvent;
				self.pointerX = e.pageX;
				self.pointerY = e.pageY;
			}
			if (isContextMenuRelease && originalEvent) {
				originalEvent.preventDefault();
				if (originalEvent.preventManipulation) {
					originalEvent.preventManipulation(); //for some Microsoft browsers
				}
				_dispatchEvent(self, "release", "onRelease");
			} else if (originalEvent && !wasDragging) {
				if (interrupted && (vars.snap || vars.bounds)) {
					//otherwise, if the user clicks on the object while it's animating to a snapped position, and then releases without moving 3 pixels, it will just stay there (it should animate/snap)
					animate(vars.throwProps);
				}
				_dispatchEvent(self, "release", "onRelease");
				if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
					//to accommodate native scrolling on Android devices, we have to immediately call onRelease() on the first touchmove event, but that shouldn't trigger a "click".
					_dispatchEvent(self, "click", "onClick");
					if (_getTime() - clickTime < 300) {
						_dispatchEvent(self, "doubleclick", "onDoubleClick");
					}
					eventTarget = originalEvent.target || originalEvent.srcElement || target; //old IE uses srcElement
					clickTime = _getTime();
					syntheticClick = function syntheticClick() {
						// some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
						if (clickTime !== clickDispatch && self.enabled() && !self.isPressed) {
							if (eventTarget.click) {
								//some browsers (like mobile Safari) don't properly trigger the click event
								eventTarget.click();
							} else if (_doc.createEvent) {
								syntheticEvent = _doc.createEvent("MouseEvents");
								syntheticEvent.initMouseEvent("click", true, true, window, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
								eventTarget.dispatchEvent(syntheticEvent);
							}
						}
					};
					if (!_isAndroid && !originalEvent.defaultPrevented) {
						//iOS Safari requires the synthetic click to happen immediately or else it simply won't work, but Android doesn't play nice.
						gsap_TweenLite["g" /* default */].delayedCall(0.00001, syntheticClick); //in addition to the iOS bug workaround, there's a Firefox issue with clicking on things like a video to play, so we must fake a click event in a slightly delayed fashion. Previously, we listened for the "click" event with "capture" false which solved the video-click-to-play issue, but it would allow the "click" event to be dispatched twice like if you were using a jQuery.click() because that was handled in the capture phase, thus we had to switch to the capture phase to avoid the double-dispatching, but do the delayed synthetic click.
					}
				}
			} else {
				animate(vars.throwProps); //will skip if throwProps isn't defined or ThrowPropsPlugin isn't loaded.
				if (!_isOldIE && !self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
					originalEvent.preventDefault();
					if (originalEvent.preventManipulation) {
						originalEvent.preventManipulation(); //for some Microsoft browsers
					}
				}
				_dispatchEvent(self, "release", "onRelease");
			}
			if (isTweening()) {
				placeholderDelayedCall.duration(self.tween.duration()); //sync the timing so that the placeholder DIV gets
			}
			if (wasDragging) {
				_dispatchEvent(self, "dragend", "onDragEnd");
			}
			return true;
		},
		    updateScroll = function updateScroll(e) {
			if (e && self.isDragging && !scrollProxy) {
				var parent = e.target || e.srcElement || target.parentNode,
				    deltaX = parent.scrollLeft - parent._gsScrollX,
				    deltaY = parent.scrollTop - parent._gsScrollY;
				if (deltaX || deltaY) {
					if (matrix) {
						startPointerX -= deltaX * matrix[0] + deltaY * matrix[2];
						startPointerY -= deltaY * matrix[3] + deltaX * matrix[1];
					} else {
						startPointerX -= deltaX;
						startPointerY -= deltaY;
					}
					parent._gsScrollX += deltaX;
					parent._gsScrollY += deltaY;
					setPointerPosition(self.pointerX, self.pointerY);
				}
			}
		},
		    onClick = function onClick(e) {
			//this was a huge pain in the neck to align all the various browsers and their behaviors. Chrome, Firefox, Safari, Opera, Android, and Microsoft Edge all handle events differently! Some will only trigger native behavior (like checkbox toggling) from trusted events. Others don't even support isTrusted, but require 2 events to flow through before triggering native behavior. Edge treats everything as trusted but also mandates that 2 flow through to trigger the correct native behavior.
			var time = _getTime(),
			    recentlyClicked = time - clickTime < 40,
			    recentlyDragged = time - dragEndTime < 40,
			    alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
			    isModern = !!e.preventDefault,
			    defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
			    alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
			    trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched; //note: Safari doesn't support isTrusted, and it won't properly execute native behavior (like toggling checkboxes) on the first synthetic "click" event - we must wait for the 2nd and treat it as trusted (but stop propagation at that point). Confusing, I know. Don't you love cross-browser compatibility challenges?
			if (isModern && (alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false)) {
				e.stopImmediatePropagation();
			}
			if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted !== alreadyDispatchedTrusted)) {
				//let the first click pass through unhindered. Let the next one only if it's trusted, then no more (stop quick-succession ones)
				if (trusted && alreadyDispatched) {
					trustedClickDispatch = clickTime;
				}
				clickDispatch = clickTime;
				return;
			}
			if (self.isPressed || recentlyDragged || recentlyClicked) {
				if (!isModern) {
					e.returnValue = false;
				} else if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
					e.preventDefault();
					if (e.preventManipulation) {
						e.preventManipulation(); //for some Microsoft browsers
					}
				}
			}
		},
		    localizePoint = function localizePoint(p) {
			return matrix ? { x: p.x * matrix[0] + p.y * matrix[2] + matrix[4], y: p.x * matrix[1] + p.y * matrix[3] + matrix[5] } : { x: p.x, y: p.y };
		};

		old = Draggable.get(this.target);
		if (old) {
			old.kill(); // avoids duplicates (an element can only be controlled by one Draggable)
		}

		//give the user access to start/stop dragging...
		this.startDrag = function (e, align) {
			var r1, r2, p1, p2;
			onPress(e || self.pointerEvent, true);
			//if the pointer isn't on top of the element, adjust things accordingly
			if (align && !self.hitTest(e || self.pointerEvent)) {
				r1 = _parseRect(e || self.pointerEvent);
				r2 = _parseRect(target);
				p1 = localizePoint({ x: r1.left + r1.width / 2, y: r1.top + r1.height / 2 });
				p2 = localizePoint({ x: r2.left + r2.width / 2, y: r2.top + r2.height / 2 });
				startPointerX -= p1.x - p2.x;
				startPointerY -= p1.y - p2.y;
			}
			if (!self.isDragging) {
				self.isDragging = true;
				_dispatchEvent(self, "dragstart", "onDragStart");
			}
		};
		this.drag = onMove;
		this.endDrag = function (e) {
			onRelease(e || self.pointerEvent, true);
		};
		this.timeSinceDrag = function () {
			return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
		};
		this.timeSinceClick = function () {
			return (_getTime() - clickTime) / 1000;
		};
		this.hitTest = function (target, threshold) {
			return Draggable.hitTest(self.target, target, threshold);
		};

		this.getDirection = function (from, diagonalThreshold) {
			//from can be "start" (default), "velocity", or an element
			var mode = from === "velocity" && ThrowPropsPlugin ? from : typeof from === "object" && !rotationMode ? "element" : "start",
			    xChange,
			    yChange,
			    ratio,
			    direction,
			    r1,
			    r2;
			if (mode === "element") {
				r1 = _parseRect(self.target);
				r2 = _parseRect(from);
			}
			xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? ThrowPropsPlugin.getVelocity(this.target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
			if (rotationMode) {
				return xChange < 0 ? "counter-clockwise" : "clockwise";
			} else {
				diagonalThreshold = diagonalThreshold || 2;
				yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? ThrowPropsPlugin.getVelocity(this.target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
				ratio = Math.abs(xChange / yChange);
				direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
				if (ratio < diagonalThreshold) {
					if (direction !== "") {
						direction += "-";
					}
					direction += yChange < 0 ? "up" : "down";
				}
			}
			return direction;
		};

		this.applyBounds = function (newBounds) {
			var x, y, forceZeroVelocity, e, parent, isRoot;
			if (newBounds && vars.bounds !== newBounds) {
				vars.bounds = newBounds;
				return self.update(true);
			}
			syncXY(true);
			calculateBounds();
			if (hasBounds) {
				x = self.x;
				y = self.y;
				if (x > maxX) {
					x = maxX;
				} else if (x < minX) {
					x = minX;
				}
				if (y > maxY) {
					y = maxY;
				} else if (y < minY) {
					y = minY;
				}
				if (self.x !== x || self.y !== y) {
					forceZeroVelocity = true;
					self.x = self.endX = x;
					if (rotationMode) {
						self.endRotation = x;
					} else {
						self.y = self.endY = y;
					}
					dirty = true;
					render(true);
					if (self.autoScroll && !self.isDragging) {
						_recordMaxScrolls(target.parentNode);
						e = target;
						_windowProxy.scrollTop = window.pageYOffset != null ? window.pageYOffset : _docElement.scrollTop != null ? _docElement.scrollTop : _doc.body.scrollTop;
						_windowProxy.scrollLeft = window.pageXOffset != null ? window.pageXOffset : _docElement.scrollLeft != null ? _docElement.scrollLeft : _doc.body.scrollLeft;
						while (e && !isRoot) {
							//walk up the chain and sense wherever the scrollTop/scrollLeft exceeds the maximum.
							isRoot = _isRoot(e.parentNode);
							parent = isRoot ? _windowProxy : e.parentNode;
							if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
								parent.scrollTop = parent._gsMaxScrollY;
							}
							if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
								parent.scrollLeft = parent._gsMaxScrollX;
							}
							e = parent;
						}
					}
				}
				if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
					animate(vars.throwProps, forceZeroVelocity);
				}
			}
			return self;
		};

		this.update = function (applyBounds, sticky, ignoreExternalChanges) {
			var x = self.x,
			    y = self.y;
			updateMatrix(!sticky);
			if (applyBounds) {
				self.applyBounds();
			} else {
				if (dirty && ignoreExternalChanges) {
					render(true);
				}
				syncXY(true);
			}
			if (sticky) {
				setPointerPosition(self.pointerX, self.pointerY);
				if (dirty) {
					render(true);
				}
			}
			if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
				recordStartPositions();
			}
			if (self.autoScroll) {
				_recordMaxScrolls(target.parentNode);
				checkAutoScrollBounds = self.isDragging;
				render(true);
			}
			if (self.autoScroll) {
				//in case reparenting occurred.
				_removeScrollListener(target, updateScroll);
				_addScrollListener(target, updateScroll);
			}
			return self;
		};

		this.enable = function (type) {
			var id, i, trigger;
			if (type !== "soft") {
				i = triggers.length;
				while (--i > -1) {
					trigger = triggers[i];
					_addListener(trigger, "mousedown", onPress);
					_addListener(trigger, "touchstart", onPress);
					_addListener(trigger, "click", onClick, true); //note: used to pass true for capture but it prevented click-to-play-video functionality in Firefox.
					if (!rotationMode && vars.cursor !== false) {
						_setStyle(trigger, "cursor", vars.cursor || "move");
					}
					_setStyle(trigger, "touchCallout", "none");
					_setStyle(trigger, "touchAction", allowX === allowY ? "none" : allowX ? "pan-y" : "pan-x");
					if (_isSVG(trigger)) {
						// a bug in chrome doesn't respect touch-action on SVG elements - it only works if we set it on the parent SVG.
						_setStyle(trigger.ownerSVGElement || trigger, "touchAction", allowX === allowY ? "none" : allowX ? "pan-y" : "pan-x");
					}
					if (!this.vars.allowContextMenu) {
						_addListener(trigger, "contextmenu", onContextMenu);
					}
				}
				_setSelectable(triggers, false);
			}
			_addScrollListener(target, updateScroll);
			enabled = true;
			if (ThrowPropsPlugin && type !== "soft") {
				ThrowPropsPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
			}
			if (scrollProxy) {
				scrollProxy.enable();
			}
			target._gsDragID = id = "d" + _lookupCount++;
			_lookup[id] = this;
			if (scrollProxy) {
				scrollProxy.element._gsDragID = id;
			}
			gsap_TweenLite["g" /* default */].set(target, { x: "+=0", overwrite: false, data: "_draggable" }); //simply ensures that there's a _gsTransform on the element.
			applyObj = {
				t: target,
				data: _isOldIE ? cssVars : target._gsTransform,
				tween: {},
				setRatio: _isOldIE ? function () {
					gsap_TweenLite["g" /* default */].set(target, tempVars);
				} : CSSPlugin_CSSPlugin._internals.setTransformRatio || CSSPlugin_CSSPlugin._internals.set3DTransformRatio
			};
			recordStartPositions();
			self.update(true);
			return self;
		};

		this.disable = function (type) {
			var dragging = self.isDragging,
			    i,
			    trigger;
			if (!rotationMode) {
				i = triggers.length;
				while (--i > -1) {
					_setStyle(triggers[i], "cursor", null);
				}
			}
			if (type !== "soft") {
				i = triggers.length;
				while (--i > -1) {
					trigger = triggers[i];
					_setStyle(trigger, "touchCallout", null);
					_setStyle(trigger, "touchAction", null);
					_removeListener(trigger, "mousedown", onPress);
					_removeListener(trigger, "touchstart", onPress);
					_removeListener(trigger, "click", onClick);
					_removeListener(trigger, "contextmenu", onContextMenu);
				}
				_setSelectable(triggers, true);
				if (touchEventTarget) {
					_removeListener(touchEventTarget, "touchcancel", onRelease);
					_removeListener(touchEventTarget, "touchend", onRelease);
					_removeListener(touchEventTarget, "touchmove", onMove);
				}
				_removeListener(_doc, "mouseup", onRelease);
				_removeListener(_doc, "mousemove", onMove);
			}
			_removeScrollListener(target, updateScroll);
			enabled = false;
			if (ThrowPropsPlugin && type !== "soft") {
				ThrowPropsPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
			}
			if (scrollProxy) {
				scrollProxy.disable();
			}
			_removeFromRenderQueue(render);
			self.isDragging = self.isPressed = isClicking = false;
			if (dragging) {
				_dispatchEvent(self, "dragend", "onDragEnd");
			}
			return self;
		};

		this.enabled = function (value, type) {
			return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
		};

		this.kill = function () {
			self.isThrowing = false;
			gsap_TweenLite["g" /* default */].killTweensOf(scrollProxy || target, true, killProps);
			self.disable();
			gsap_TweenLite["g" /* default */].set(triggers, { clearProps: "userSelect" });
			delete _lookup[target._gsDragID];
			return self;
		};

		if (type.indexOf("scroll") !== -1) {
			scrollProxy = this.scrollProxy = new ScrollProxy(target, _extend({ onKill: function onKill() {
					//ScrollProxy's onKill() gets called if/when the ScrollProxy senses that the user interacted with the scroll position manually (like using the scrollbar). IE9 doesn't fire the "mouseup" properly when users drag the scrollbar of an element, so this works around that issue.
					if (self.isPressed) {
						onRelease(null);
					}
				} }, vars));
			//a bug in many Android devices' stock browser causes scrollTop to get forced back to 0 after it is altered via JS, so we set overflow to "hidden" on mobile/touch devices (they hide the scroll bar anyway). That works around the bug. (This bug is discussed at https://code.google.com/p/android/issues/detail?id=19625)
			target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
			target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
			target = scrollProxy.content;
		}

		if (vars.force3D !== false) {
			gsap_TweenLite["g" /* default */].set(target, { force3D: true }); //improve performance by forcing a GPU layer when possible
		}
		if (rotationMode) {
			killProps.rotation = 1;
		} else {
			if (allowX) {
				killProps[xProp] = 1;
			}
			if (allowY) {
				killProps[yProp] = 1;
			}
		}
		if (rotationMode) {
			tempVars = _tempVarsRotation;
			cssVars = tempVars.css;
			tempVars.overwrite = false;
		} else if (xyMode) {
			tempVars = allowX && allowY ? _tempVarsXY : allowX ? _tempVarsX : _tempVarsY;
			cssVars = tempVars.css;
			tempVars.overwrite = false;
		}

		this.enable();
	},
	    p = Draggable.prototype = new gsap_TweenLite["c" /* EventDispatcher */]();

	p.constructor = Draggable;
	p.pointerX = p.pointerY = p.startX = p.startY = p.deltaX = p.deltaY = 0;
	p.isDragging = p.isPressed = false;
	Draggable.version = "0.17.1";
	Draggable.zIndex = 1000;

	_addListener(_doc, "touchcancel", function () {
		//some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document. Very strange indeed.
	});
	_addListener(_doc, "contextmenu", function (e) {
		var p;
		for (p in _lookup) {
			if (_lookup[p].isPressed) {
				_lookup[p].endDrag();
			}
		}
	});

	Draggable.create = function (targets, vars) {
		if (typeof targets === "string") {
			targets = gsap_TweenLite["g" /* default */].selector(targets);
		}
		var a = !targets || targets.length === 0 ? [] : _isArrayLike(targets) ? _flattenArray(targets) : [targets],
		    i = a.length;
		while (--i > -1) {
			a[i] = new Draggable(a[i], vars);
		}
		return a;
	};

	Draggable.get = function (target) {
		return _lookup[(_unwrapElement(target) || {})._gsDragID];
	};

	Draggable.timeSinceDrag = function () {
		return (_getTime() - _lastDragTime) / 1000;
	};

	var _tempRect = {},
	    //reuse to reduce garbage collection tasks
	_oldIERect = function _oldIERect(e) {
		//IE8 doesn't support getBoundingClientRect(), so we use this as a backup.
		var top = 0,
		    left = 0,
		    width,
		    height;
		e = _unwrapElement(e);
		width = e.offsetWidth;
		height = e.offsetHeight;
		while (e) {
			top += e.offsetTop;
			left += e.offsetLeft;
			e = e.offsetParent;
		}
		return { top: top, left: left, width: width, height: height };
	},
	    _parseRect = function _parseRect(e, undefined) {
		//accepts a DOM element, a mouse event, or a rectangle object and returns the corresponding rectangle with left, right, width, height, top, and bottom properties
		if (e === window) {
			_tempRect.left = _tempRect.top = 0;
			_tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _doc.body.clientWidth || 0;
			_tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _doc.body.clientHeight || 0;
			return _tempRect;
		}
		var r = e.pageX !== undefined ? { left: e.pageX - _getDocScrollLeft(), top: e.pageY - _getDocScrollTop(), right: e.pageX - _getDocScrollLeft() + 1, bottom: e.pageY - _getDocScrollTop() + 1 } : !e.nodeType && e.left !== undefined && e.top !== undefined ? e : _isOldIE ? _oldIERect(e) : _unwrapElement(e).getBoundingClientRect();
		if (r.right === undefined && r.width !== undefined) {
			r.right = r.left + r.width;
			r.bottom = r.top + r.height;
		} else if (r.width === undefined) {
			//some browsers don't include width and height properties. We can't just set them directly on r because some browsers throw errors, so create a new generic object.
			r = { width: r.right - r.left, height: r.bottom - r.top, right: r.right, left: r.left, bottom: r.bottom, top: r.top };
		}
		return r;
	};

	Draggable.hitTest = function (obj1, obj2, threshold) {
		if (obj1 === obj2) {
			return false;
		}
		var r1 = _parseRect(obj1),
		    r2 = _parseRect(obj2),
		    isOutside = r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top,
		    overlap,
		    area,
		    isRatio;
		if (isOutside || !threshold) {
			return !isOutside;
		}
		isRatio = (threshold + "").indexOf("%") !== -1;
		threshold = parseFloat(threshold) || 0;
		overlap = { left: Math.max(r1.left, r2.left), top: Math.max(r1.top, r2.top) };
		overlap.width = Math.min(r1.right, r2.right) - overlap.left;
		overlap.height = Math.min(r1.bottom, r2.bottom) - overlap.top;
		if (overlap.width < 0 || overlap.height < 0) {
			return false;
		}
		if (isRatio) {
			threshold *= 0.01;
			area = overlap.width * overlap.height;
			return area >= r1.width * r1.height * threshold || area >= r2.width * r2.height * threshold;
		}
		return overlap.width > threshold && overlap.height > threshold;
	};

	_placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;";

	return Draggable;
}, true);

var Draggable_Draggable = gsap_TweenLite["h" /* globals */].Draggable;

// CONCATENATED MODULE: ../node_modules/gsap/EasePack.js
/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



gsap_TweenLite["f" /* _gsScope */]._gsDefine("easing.Back", ["easing.Ease"], function () {

	var w = gsap_TweenLite["f" /* _gsScope */].GreenSockGlobals || gsap_TweenLite["f" /* _gsScope */],
	    gs = w.com.greensock,
	    _2PI = Math.PI * 2,
	    _HALF_PI = Math.PI / 2,
	    _class = gs._class,
	    _create = function _create(n, f) {
		var C = _class("easing." + n, function () {}, true),
		    p = C.prototype = new gsap_TweenLite["b" /* Ease */]();
		p.constructor = C;
		p.getRatio = f;
		return C;
	},
	    _easeReg = gsap_TweenLite["b" /* Ease */].register || function () {},
	    //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
	_wrap = function _wrap(name, EaseOut, EaseIn, EaseInOut, aliases) {
		var C = _class("easing." + name, {
			easeOut: new EaseOut(),
			easeIn: new EaseIn(),
			easeInOut: new EaseInOut()
		}, true);
		_easeReg(C, name);
		return C;
	},
	    EasePoint = function EasePoint(time, value, next) {
		this.t = time;
		this.v = value;
		if (next) {
			this.next = next;
			next.prev = this;
			this.c = next.v - value;
			this.gap = next.t - time;
		}
	},


	//Back
	_createBack = function _createBack(n, f) {
		var C = _class("easing." + n, function (overshoot) {
			this._p1 = overshoot || overshoot === 0 ? overshoot : 1.70158;
			this._p2 = this._p1 * 1.525;
		}, true),
		    p = C.prototype = new gsap_TweenLite["b" /* Ease */]();
		p.constructor = C;
		p.getRatio = f;
		p.config = function (overshoot) {
			return new C(overshoot);
		};
		return C;
	},
	    Back = _wrap("Back", _createBack("BackOut", function (p) {
		return (p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
	}), _createBack("BackIn", function (p) {
		return p * p * ((this._p1 + 1) * p - this._p1);
	}), _createBack("BackInOut", function (p) {
		return (p *= 2) < 1 ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
	})),


	//SlowMo
	SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
		power = power || power === 0 ? power : 0.7;
		if (linearRatio == null) {
			linearRatio = 0.7;
		} else if (linearRatio > 1) {
			linearRatio = 1;
		}
		this._p = linearRatio !== 1 ? power : 0;
		this._p1 = (1 - linearRatio) / 2;
		this._p2 = linearRatio;
		this._p3 = this._p1 + this._p2;
		this._calcEnd = yoyoMode === true;
	}, true),
	    p = SlowMo.prototype = new gsap_TweenLite["b" /* Ease */](),
	    SteppedEase,
	    ExpoScaleEase,
	    RoughEase,
	    _createElastic;

	p.constructor = SlowMo;
	p.getRatio = function (p) {
		var r = p + (0.5 - p) * this._p;
		if (p < this._p1) {
			return this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r;
		} else if (p > this._p3) {
			return this._calcEnd ? p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p; //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
		}
		return this._calcEnd ? 1 : r;
	};
	SlowMo.ease = new SlowMo(0.7, 0.7);

	p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
		return new SlowMo(linearRatio, power, yoyoMode);
	};

	//SteppedEase
	SteppedEase = _class("easing.SteppedEase", function (steps, immediateStart) {
		steps = steps || 1;
		this._p1 = 1 / steps;
		this._p2 = steps + (immediateStart ? 0 : 1);
		this._p3 = immediateStart ? 1 : 0;
	}, true);
	p = SteppedEase.prototype = new gsap_TweenLite["b" /* Ease */]();
	p.constructor = SteppedEase;
	p.getRatio = function (p) {
		if (p < 0) {
			p = 0;
		} else if (p >= 1) {
			p = 0.999999999;
		}
		return ((this._p2 * p | 0) + this._p3) * this._p1;
	};
	p.config = SteppedEase.config = function (steps, immediateStart) {
		return new SteppedEase(steps, immediateStart);
	};

	//ExpoScaleEase
	ExpoScaleEase = _class("easing.ExpoScaleEase", function (start, end, ease) {
		this._p1 = Math.log(end / start);
		this._p2 = end - start;
		this._p3 = start;
		this._ease = ease;
	}, true);
	p = ExpoScaleEase.prototype = new gsap_TweenLite["b" /* Ease */]();
	p.constructor = ExpoScaleEase;
	p.getRatio = function (p) {
		if (this._ease) {
			p = this._ease.getRatio(p);
		}
		return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
	};
	p.config = ExpoScaleEase.config = function (start, end, ease) {
		return new ExpoScaleEase(start, end, ease);
	};

	//RoughEase
	RoughEase = _class("easing.RoughEase", function (vars) {
		vars = vars || {};
		var taper = vars.taper || "none",
		    a = [],
		    cnt = 0,
		    points = (vars.points || 20) | 0,
		    i = points,
		    randomize = vars.randomize !== false,
		    clamp = vars.clamp === true,
		    template = vars.template instanceof gsap_TweenLite["b" /* Ease */] ? vars.template : null,
		    strength = typeof vars.strength === "number" ? vars.strength * 0.4 : 0.4,
		    x,
		    y,
		    bump,
		    invX,
		    obj,
		    pnt;
		while (--i > -1) {
			x = randomize ? Math.random() : 1 / points * i;
			y = template ? template.getRatio(x) : x;
			if (taper === "none") {
				bump = strength;
			} else if (taper === "out") {
				invX = 1 - x;
				bump = invX * invX * strength;
			} else if (taper === "in") {
				bump = x * x * strength;
			} else if (x < 0.5) {
				//"both" (start)
				invX = x * 2;
				bump = invX * invX * 0.5 * strength;
			} else {
				//"both" (end)
				invX = (1 - x) * 2;
				bump = invX * invX * 0.5 * strength;
			}
			if (randomize) {
				y += Math.random() * bump - bump * 0.5;
			} else if (i % 2) {
				y += bump * 0.5;
			} else {
				y -= bump * 0.5;
			}
			if (clamp) {
				if (y > 1) {
					y = 1;
				} else if (y < 0) {
					y = 0;
				}
			}
			a[cnt++] = { x: x, y: y };
		}
		a.sort(function (a, b) {
			return a.x - b.x;
		});

		pnt = new EasePoint(1, 1, null);
		i = points;
		while (--i > -1) {
			obj = a[i];
			pnt = new EasePoint(obj.x, obj.y, pnt);
		}

		this._prev = new EasePoint(0, 0, pnt.t !== 0 ? pnt : pnt.next);
	}, true);
	p = RoughEase.prototype = new gsap_TweenLite["b" /* Ease */]();
	p.constructor = RoughEase;
	p.getRatio = function (p) {
		var pnt = this._prev;
		if (p > pnt.t) {
			while (pnt.next && p >= pnt.t) {
				pnt = pnt.next;
			}
			pnt = pnt.prev;
		} else {
			while (pnt.prev && p <= pnt.t) {
				pnt = pnt.prev;
			}
		}
		this._prev = pnt;
		return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
	};
	p.config = function (vars) {
		return new RoughEase(vars);
	};
	RoughEase.ease = new RoughEase();

	//Bounce
	_wrap("Bounce", _create("BounceOut", function (p) {
		if (p < 1 / 2.75) {
			return 7.5625 * p * p;
		} else if (p < 2 / 2.75) {
			return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
		} else if (p < 2.5 / 2.75) {
			return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
		}
		return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
	}), _create("BounceIn", function (p) {
		if ((p = 1 - p) < 1 / 2.75) {
			return 1 - 7.5625 * p * p;
		} else if (p < 2 / 2.75) {
			return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
		} else if (p < 2.5 / 2.75) {
			return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
		}
		return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
	}), _create("BounceInOut", function (p) {
		var invert = p < 0.5;
		if (invert) {
			p = 1 - p * 2;
		} else {
			p = p * 2 - 1;
		}
		if (p < 1 / 2.75) {
			p = 7.5625 * p * p;
		} else if (p < 2 / 2.75) {
			p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
		} else if (p < 2.5 / 2.75) {
			p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
		} else {
			p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
		}
		return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
	}));

	//CIRC
	_wrap("Circ", _create("CircOut", function (p) {
		return Math.sqrt(1 - (p = p - 1) * p);
	}), _create("CircIn", function (p) {
		return -(Math.sqrt(1 - p * p) - 1);
	}), _create("CircInOut", function (p) {
		return (p *= 2) < 1 ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
	}));

	//Elastic
	_createElastic = function _createElastic(n, f, def) {
		var C = _class("easing." + n, function (amplitude, period) {
			this._p1 = amplitude >= 1 ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
			this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
			this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
			this._p2 = _2PI / this._p2; //precalculate to optimize
		}, true),
		    p = C.prototype = new gsap_TweenLite["b" /* Ease */]();
		p.constructor = C;
		p.getRatio = f;
		p.config = function (amplitude, period) {
			return new C(amplitude, period);
		};
		return C;
	};
	_wrap("Elastic", _createElastic("ElasticOut", function (p) {
		return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
	}, 0.3), _createElastic("ElasticIn", function (p) {
		return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
	}, 0.3), _createElastic("ElasticInOut", function (p) {
		return (p *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
	}, 0.45));

	//Expo
	_wrap("Expo", _create("ExpoOut", function (p) {
		return 1 - Math.pow(2, -10 * p);
	}), _create("ExpoIn", function (p) {
		return Math.pow(2, 10 * (p - 1)) - 0.001;
	}), _create("ExpoInOut", function (p) {
		return (p *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
	}));

	//Sine
	_wrap("Sine", _create("SineOut", function (p) {
		return Math.sin(p * _HALF_PI);
	}), _create("SineIn", function (p) {
		return -Math.cos(p * _HALF_PI) + 1;
	}), _create("SineInOut", function (p) {
		return -0.5 * (Math.cos(Math.PI * p) - 1);
	}));

	_class("easing.EaseLookup", {
		find: function find(s) {
			return gsap_TweenLite["b" /* Ease */].map[s];
		}
	}, true);

	//register the non-standard eases
	_easeReg(w.SlowMo, "SlowMo", "ease,");
	_easeReg(RoughEase, "RoughEase", "ease,");
	_easeReg(SteppedEase, "SteppedEase", "ease,");

	return Back;
}, true);

var EasePack_Back = gsap_TweenLite["h" /* globals */].Back;
var Elastic = gsap_TweenLite["h" /* globals */].Elastic;
var Bounce = gsap_TweenLite["h" /* globals */].Bounce;
var EasePack_RoughEase = gsap_TweenLite["h" /* globals */].RoughEase;
var EasePack_SlowMo = gsap_TweenLite["h" /* globals */].SlowMo;
var EasePack_SteppedEase = gsap_TweenLite["h" /* globals */].SteppedEase;
var Circ = gsap_TweenLite["h" /* globals */].Circ;
var Expo = gsap_TweenLite["h" /* globals */].Expo;
var EasePack_Sine = gsap_TweenLite["h" /* globals */].Sine;
var EasePack_ExpoScaleEase = gsap_TweenLite["h" /* globals */].ExpoScaleEase;

// CONCATENATED MODULE: ../node_modules/gsap/all.js
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/






// plugins














// utils


// easing


// bonus tools
/*
import DrawSVGPlugin from "./DrawSVGPlugin.js";
import MorphSVGPlugin from "./MorphSVGPlugin.js";
import Physics2DPlugin from "./Physics2DPlugin.js";
import PhysicsPropsPlugin from "./PhysicsPropsPlugin.js";
import ScrambleTextPlugin from "./ScrambleTextPlugin.js";
import ThrowPropsPlugin from "./ThrowPropsPlugin.js";
import GSDevTools from "./GSDevTools.js";
import SplitText from "./SplitText.js";
import CustomBounce from "./CustomBounce.js";
import CustomEase from "./CustomEase.js";
import CustomWiggle from "./CustomWiggle.js";

export {
	DrawSVGPlugin,
	MorphSVGPlugin,
	Physics2DPlugin,
	PhysicsPropsPlugin,
	ScrambleTextPlugin,
	ThrowPropsPlugin,
	GSDevTools,
	SplitText,
	CustomBounce,
	CustomEase,
	CustomWiggle
}
*/


// EXTERNAL MODULE: ../node_modules/react-device-detect/dist/index.js
var dist = __webpack_require__("JZ8C");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ../node_modules/react-plx/lib/index.js
var lib = __webpack_require__("XbF1");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./components/splash/style.scss
var splash_style = __webpack_require__("YkeT");
var splash_style_default = /*#__PURE__*/__webpack_require__.n(splash_style);

// EXTERNAL MODULE: ./components/button/style.scss
var button_style = __webpack_require__("appZ");
var button_style_default = /*#__PURE__*/__webpack_require__.n(button_style);

// CONCATENATED MODULE: ./components/button/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var button_Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.getArrowDirection = function () {
      if (_this.props.direction === 'up') {
        return button_style_default.a.arrowUp;
      }
      if (_this.props.direction === 'down') {
        return button_style_default.a.arrowDown;
      }
    };

    console.log(_this.props.name);
    _this.arrowDirection = _this.props.direction;
    return _this;
  }

  Button.prototype.componentDidMount = function componentDidMount() {};

  Button.prototype.render = function render() {
    return Object(preact_min["h"])(
      'button',
      { onClick: this.props.onButtonClick, id: this.props.name, className: button_style_default.a.scroll },
      Object(preact_min["h"])(
        'div',
        { 'class': 'buttonText' },
        this.props.text
      ),
      Object(preact_min["h"])('div', { className: this.getArrowDirection() })
    );
  };

  return Button;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// CONCATENATED MODULE: ./components/splash/svg/SvgTop.js



var _ref = Object(preact_min["h"])(
	"svg",
	{ version: "1.1", id: "Contours", x: "0px", y: "0px", viewBox: "0 0 805 41" },
	Object(preact_min["h"])(
		"g",
		null,
		Object(preact_min["h"])(
			"g",
			null,
			Object(preact_min["h"])("path", { d: "M224.9,1.1c0-0.6,0.5-1.1,1.1-1.1h12.7c6.8,0,11.8,4.6,11.7,10.5c0,4.4-3.2,7.5-5.9,9c3,1.3,7.1,4,7,9.2 c0,6.3-5.2,10.9-12.4,10.9h-13.3c-0.6,0-1.1-0.5-1.1-1.1L224.9,1.1z M239.1,34.4c3.4,0,6.1-2.6,6.1-6.1s-3.3-5.9-6.9-6h-7.8v12.1 H239.1z M238.3,17.2c3.6,0,5.8-2.6,5.8-6c0-3.5-2.2-5.8-5.8-5.8h-7.6v11.9L238.3,17.2z" }),
			Object(preact_min["h"])("path", { d: "M262.9,1.2c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,37.5c0,0.6-0.5,1.1-1.1,1.1h-3.7 c-0.6,0-1.1-0.5-1.1-1.1L262.9,1.2z" }),
			Object(preact_min["h"])("path", { d: "M282.6,1.2c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,33.3h15.3c0.6,0,1.1,0.5,1.1,1.1v3.1 c0,0.6-0.5,1.1-1.1,1.1l-20.1-0.1c-0.6,0-1.1-0.5-1.1-1.1L282.6,1.2z" }),
			Object(preact_min["h"])("path", { d: "M313.7,1.3c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,33.3h15.3c0.6,0,1.1,0.5,1.1,1.1v3.1 c0,0.6-0.5,1.1-1.1,1.1l-20.1-0.1c-0.6,0-1.1-0.5-1.1-1.1L313.7,1.3z" }),
			Object(preact_min["h"])("path", { d: "M360,1.5c0-0.6,0.5-1.1,1.1-1.1H374c7,0,12.7,5.7,12.6,12.5c0,7-5.7,12.7-12.7,12.7h-8.2v13.3c0,0.6-0.5,1.1-1.1,1.1h-3.7 c-0.6,0-1.1-0.5-1.1-1.1L360,1.5z M373.6,20.1c3.9,0,7.2-3.1,7.2-7.2c0-3.8-3.3-6.8-7.2-6.8h-7.8v14H373.6z" }),
			Object(preact_min["h"])("path", { d: "M396.5,1.6c0-0.6,0.5-1.1,1.1-1.1l22.6,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1l-17.9-0.1v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1V35l17.9,0.1c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1l-22.6-0.1 c-0.6,0-1.1-0.5-1.1-1.1V1.6z" }),
			Object(preact_min["h"])("path", { d: "M427.2,38.7l17.5-38c0.2-0.3,0.7-0.6,1-0.6h0.6c0.3,0,0.8,0.3,1,0.6l17.1,38.1c0.3,0.7-0.1,1.5-1,1.5h-3.6 c-0.7,0-1.1-0.3-1.3-0.9l-3.5-7.8l-18.5-0.1c-1.1,2.6-2.3,5.1-3.5,7.7c-0.2,0.4-0.6,0.8-1.3,0.8h-3.6 C427.3,40.2,426.9,39.4,427.2,38.7z M452.9,26.8L446,11.3h-0.3l-6.9,15.5H452.9z" }),
			Object(preact_min["h"])("path", { d: "M472.9,1.8c0-0.6,0.5-1.1,1.1-1.1h15.4c6.8,0,12.3,5.4,12.3,12.1c0,5.2-3.5,9.5-8.4,11.5l7.7,14.4c0.4,0.7,0,1.6-1,1.6 h-4.4c-0.5,0-0.8-0.3-0.9-0.5l-7.5-15h-8.5v14.4c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L472.9,1.8z M488.9,20 c3.7,0,6.9-3.1,6.9-7c0-3.7-3.2-6.7-6.9-6.8h-10.1v13.7L488.9,20z" }),
			Object(preact_min["h"])("path", { d: "M530.9,0.3c5.7,0,9.8,2,13.7,5.3c0.5,0.5,0.5,1.1,0,1.6l-2.4,2.5c-0.4,0.5-0.9,0.5-1.4,0c-2.7-2.3-6.3-3.8-9.8-3.8 c-8.1,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.1,0,7-1.6,9.7-3.7c0.5-0.4,1-0.3,1.4-0.1l2.6,2.6c0.4,0.4,0.3,1.1-0.1,1.5 c-3.9,3.7-8.7,5.5-13.8,5.4c-11.3,0-20.4-9.1-20.4-20.4C510.5,9.4,519.6,0.3,530.9,0.3z" }),
			Object(preact_min["h"])("path", { d: "M555.6,2c0-0.6,0.5-1.1,1.1-1.1L579.2,1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1l-17.9-0.1v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1v12.2l17.9,0.1c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1 l-22.6-0.1c-0.6,0-1.1-0.5-1.1-1.1V2z" })
		)
	)
);

var SvgTop = function SvgTop(props) {
	return _ref;
};

/* harmony default export */ var svg_SvgTop = (SvgTop);
// CONCATENATED MODULE: ./components/splash/svg/SvgMiddle.js



var SvgMiddle__ref = Object(preact_min["h"])(
	"svg",
	{ version: "1.1", id: "Contours", x: "0px", y: "0px", viewBox: "0 0 799.5 31.8" },
	Object(preact_min["h"])("polygon", { id: "zigzag1", points: "748.8,31.8 699,4.7 649,31.5 599.2,4.5 549.3,31.3 499.4,4.2 449.5,31 399.7,3.9 349.7,30.7 299.9,3.6 249.9,30.4 200.1,3.3 150.2,30.1 100.4,3 50.4,29.8 0,2.4 1.3,0 50.4,26.8 100.4,0 150.2,27.1 200.1,0.3 249.9,27.3 299.9,0.5 349.7,27.6 399.7,0.8 449.5,27.9 499.4,1.1 549.3,28.2 599.2,1.4 649,28.5 699,1.7 748.9,28.8 798.2,2.3 799.5,4.7 " }),
	Object(preact_min["h"])("polygon", { id: "zigzag2", points: "748.8,31.8 699,4.7 649,31.5 599.2,4.5 549.3,31.3 499.4,4.2 449.5,31 399.7,3.9 349.7,30.7 299.9,3.6 249.9,30.4 200.1,3.3 150.2,30.1 100.4,3 50.4,29.8 0,2.4 1.3,0 50.4,26.8 100.4,0 150.2,27.1 200.1,0.3 249.9,27.3 299.9,0.5 349.7,27.6 399.7,0.8 449.5,27.9 499.4,1.1 549.3,28.2 599.2,1.4 649,28.5 699,1.7 748.9,28.8 798.2,2.3 799.5,4.7 " })
);

var Svg = function Svg(props) {
	return SvgMiddle__ref;
};

/* harmony default export */ var SvgMiddle = (Svg);
// CONCATENATED MODULE: ./components/splash/svg/SvgBottom.js



var SvgBottom__ref = Object(preact_min["h"])(
	"svg",
	{ version: "1.1", id: "Contours", x: "0px", y: "0px", viewBox: "0 0 805.7 42.8" },
	Object(preact_min["h"])(
		"g",
		null,
		Object(preact_min["h"])("path", { d: "M0.3,34.3c0.5-0.7,1-1.6,1.5-2.3s1.3-1,1.9-0.4c0.3,0.3,4.7,3.9,9,3.9c3.9,0,6.4-2.4,6.4-5.2c0-3.4-2.9-5.6-8.5-7.9 C4.8,20,0.3,16.9,0.3,10.4C0.3,6,3.7-0.1,12.7,0c5.7,0,9.9,3,10.5,3.4c0.5,0.3,0.9,1.1,0.3,1.9c-0.5,0.7-1,1.5-1.4,2.1 c-0.5,0.7-1.2,1.1-2,0.6c-0.4-0.2-4.3-2.8-7.6-2.8c-4.8,0-6.4,3-6.4,5.1c0,3.2,2.5,5.2,7.2,7.1c6.6,2.7,12.1,5.8,12.1,12.7 c0,5.9-5.3,10.7-12.6,10.7c-6.9,0-11.2-3.7-12.2-4.5C0.1,35.7-0.3,35.3,0.3,34.3z" }),
		Object(preact_min["h"])("path", { d: "M36.1,1.6c0-0.6,0.5-1.1,1.1-1.1h15.4c6.8,0,12.3,5.4,12.3,12.1c0,5.2-3.5,9.5-8.4,11.5l7.7,14.4c0.4,0.7,0,1.6-1,1.6h-4.4 c-0.5,0-0.8-0.3-0.9-0.5l-7.5-15h-8.5V39c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L36.1,1.6z M52.1,19.8 c3.7,0,6.9-3.1,6.9-7c0-3.7-3.2-6.7-6.9-6.8H42v13.7L52.1,19.8z" }),
		Object(preact_min["h"])("path", { d: "M77.1,32.9c2.2,0,4,1.8,3.9,4c0,2.1-1.8,3.9-4,3.9c-2.1,0-3.9-1.8-3.9-3.9C73.2,34.7,75,32.9,77.1,32.9z" }),
		Object(preact_min["h"])("path", { d: "M124.9,0.2c5.7,0,9.8,2,13.7,5.3c0.5,0.5,0.5,1.1,0.1,1.6l-2.5,2.5c-0.4,0.5-0.9,0.5-1.4,0c-2.7-2.3-6.3-3.8-9.8-3.8 c-8.1,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.1,0,7-1.6,9.7-3.7c0.5-0.4,1-0.3,1.4-0.1l2.6,2.6c0.5,0.4,0.3,1.1-0.1,1.5 c-3.9,3.7-8.7,5.5-13.8,5.4c-11.3,0-20.4-9.1-20.4-20.4C104.4,9.3,113.5,0.2,124.9,0.2z" }),
		Object(preact_min["h"])("path", { d: "M149.5,1.9c0-0.6,0.5-1.1,1.1-1.1H166c6.8,0,12.3,5.4,12.3,12.1c0,5.2-3.5,9.5-8.4,11.5l7.7,14.4c0.4,0.7,0,1.6-1,1.6h-4.4 c-0.5,0-0.8-0.3-0.9-0.5l-7.5-15h-8.5v14.4c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L149.5,1.9z M165.5,20.1 c3.7,0,6.9-3.1,6.9-7c0-3.7-3.2-6.7-6.9-6.8h-10.1V20L165.5,20.1z" }),
		Object(preact_min["h"])("path", { d: "M190,2c0-0.6,0.5-1.1,1.1-1.1L213.7,1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1l-17.9-0.1v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1v12.2l17.9,0.1c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1l-22.6-0.1 c-0.6,0-1.1-0.5-1.1-1.1V2z" }),
		Object(preact_min["h"])("path", { d: "M220.7,39.2l17.5-38c0.2-0.3,0.7-0.6,1-0.6h0.6c0.3,0,0.8,0.3,1,0.6l17.1,38.1c0.3,0.7-0.1,1.5-1,1.5h-3.6 c-0.7,0-1.1-0.3-1.3-0.8l-3.5-7.8L230,32.1c-1.1,2.6-2.3,5.1-3.5,7.7c-0.2,0.4-0.6,0.8-1.3,0.8h-3.6 C220.8,40.7,220.4,39.9,220.7,39.2z M246.4,27.3l-6.9-15.5h-0.3l-6.9,15.5H246.4z" }),
		Object(preact_min["h"])("path", { d: "M269.8,6.5h-9.2c-0.6,0-1.1-0.5-1.1-1.1V2.2c0-0.6,0.5-1.1,1.1-1.1l24.3,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2 c0,0.6-0.5,1.1-1.1,1.1h-9.2l-0.1,33.2c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L269.8,6.5z" }),
		Object(preact_min["h"])("path", { d: "M294.9,2.3c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,37.5c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1 L294.9,2.3z" }),
		Object(preact_min["h"])("path", { d: "M309.3,2.8c-0.3-0.7,0.1-1.5,1-1.5h4c0.5,0,0.8,0.3,1,0.6l12.4,28h0.3l12.5-28c0.1-0.3,0.5-0.6,1-0.6h4 c0.8,0,1.3,0.7,1,1.5l-17.5,38c-0.2,0.3-0.5,0.6-1,0.6h-0.6c-0.4,0-0.8-0.3-1-0.6L309.3,2.8z" }),
		Object(preact_min["h"])("path", { d: "M355,2.5c0-0.6,0.5-1.1,1.1-1.1l22.6,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-17.9v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1V36h17.9c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1l-22.6-0.1 c-0.6,0-1.1-0.5-1.1-1.1V2.5z" }),
		Object(preact_min["h"])("path", { d: "M411.8,6.9h-9.2c-0.6,0-1.1-0.5-1.1-1.1V2.6c0-0.6,0.5-1.1,1.1-1.1l24.3,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2 c0,0.6-0.5,1.1-1.1,1.1h-9.2l-0.1,33.2c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L411.8,6.9z" }),
		Object(preact_min["h"])("path", { d: "M437,2.7c0-0.6,0.5-1.1,1.1-1.1l22.6,0.1c0.6,0,1.1,0.5,1.1,1.1V6c0,0.6-0.5,1.1-1.1,1.1L442.8,7v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1v12.2h17.9c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1l-22.6-0.1 c-0.6,0-1.1-0.5-1.1-1.1V2.7z" }),
		Object(preact_min["h"])("path", { d: "M490.5,1.3c5.7,0,9.8,2,13.7,5.3c0.5,0.5,0.5,1.1,0.1,1.6l-2.5,2.5c-0.4,0.5-0.9,0.5-1.4,0c-2.7-2.3-6.3-3.8-9.8-3.8 c-8.1,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.1,0,7-1.6,9.7-3.7c0.5-0.4,1-0.3,1.4-0.1l2.6,2.6c0.5,0.4,0.3,1.1-0.1,1.5 c-3.9,3.7-8.7,5.5-13.8,5.4c-11.3,0-20.4-9.1-20.4-20.4C470,10.3,479.2,1.2,490.5,1.3z" }),
		Object(preact_min["h"])("path", { d: "M515.2,3c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1v15.8l20.7,0.1V3.1c0-0.6,0.5-1.1,1.1-1.1h3.7 c0.6,0,1.1,0.5,1.1,1.1l-0.1,37.5c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1V24.2L521,24.1v16.3c0,0.6-0.5,1.1-1.1,1.1 h-3.7c-0.6,0-1.1-0.5-1.1-1.1L515.2,3z" }),
		Object(preact_min["h"])("path", { d: "M561.5,2.5c0-0.6,0.5-1,1.1-1h1.4L588.5,30h0.1l0.1-26.8c0-0.6,0.5-1.1,1.1-1.1h3.6c0.6,0,1.1,0.5,1.1,1.1l-0.1,38.1 c0,0.6-0.5,1-1.1,1h-1.5L567.3,13h-0.1l-0.1,27.6c0,0.6-0.5,1.1-1.1,1.1h-3.6c-0.6,0-1.1-0.5-1.1-1.1L561.5,2.5z" }),
		Object(preact_min["h"])("path", { d: "M625.6,1.6c11.3,0,20.3,9.2,20.3,20.5s-9.1,20.3-20.4,20.3c-11.3,0-20.3-9.1-20.3-20.4C605.2,10.7,614.2,1.6,625.6,1.6z M625.5,36.7c8.1,0,14.7-6.5,14.8-14.6c0-8-6.6-14.8-14.7-14.8c-8,0-14.7,6.7-14.7,14.7C610.8,30.1,617.4,36.7,625.5,36.7z" }),
		Object(preact_min["h"])("path", { d: "M656.9,3.4c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,33.3H678c0.6,0,1.1,0.5,1.1,1.1v3.1 c0,0.6-0.5,1.1-1.1,1.1l-20.1-0.1c-0.6,0-1.1-0.5-1.1-1.1L656.9,3.4z" }),
		Object(preact_min["h"])("path", { d: "M705,1.9c5.4,0,9.9,2,13.7,5.3c0.4,0.5,0.5,1.1,0.1,1.6c-0.9,0.9-1.7,1.7-2.6,2.7c-0.5,0.5-0.9,0.4-1.5-0.1 c-2.7-2.3-6.2-3.9-9.6-3.9c-8,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.7,0,7.9-1.7,8.5-1.9v-6.3h-5.5 c-0.6,0-1.1-0.5-1.1-1v-3.3c0-0.6,0.5-1.1,1.1-1.1h10.3c0.6,0,1,0.5,1,1.1c0,4.5,0,9.2,0,13.7c0,0.3-0.2,0.7-0.5,0.9 c0,0-5.8,3.7-14,3.7c-11.3,0-20.3-9.1-20.3-20.4C684.6,10.9,693.8,1.8,705,1.9z" }),
		Object(preact_min["h"])("path", { d: "M731.2,3.6c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1L737,41.1c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1 L731.2,3.6z" }),
		Object(preact_min["h"])("path", { d: "M748.3,36.4c0.5-0.7,1-1.6,1.5-2.3s1.3-1,1.9-0.4c0.3,0.3,4.7,3.9,9,3.9c3.9,0,6.4-2.4,6.4-5.2c0-3.4-2.9-5.6-8.5-7.9 c-5.8-2.4-10.3-5.5-10.3-12c0-4.4,3.4-10.5,12.4-10.4c5.7,0,9.9,3,10.5,3.4c0.4,0.3,0.9,1.1,0.3,1.9c-0.5,0.7-1,1.5-1.4,2.1 c-0.5,0.7-1.2,1.1-2,0.6c-0.4-0.2-4.3-2.8-7.6-2.9c-4.8,0-6.4,3-6.4,5.1c0,3.2,2.5,5.2,7.2,7.1c6.6,2.7,12.1,5.8,12.1,12.7 c0,5.9-5.3,10.7-12.6,10.7c-6.9,0-11.2-3.7-12.2-4.5C748.1,37.8,747.7,37.4,748.3,36.4z" }),
		Object(preact_min["h"])("path", { d: "M789.5,8h-9.2c-0.6,0-1.1-0.5-1.1-1.1V3.7c0-0.6,0.5-1.1,1.1-1.1l24.3,0.1c0.6,0,1.1,0.5,1.1,1.1V7c0,0.6-0.5,1.1-1.1,1.1 h-9.2l-0.1,33.2c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L789.5,8z" })
	)
);

var SvgBottom_Svg = function Svg(props) {
	return SvgBottom__ref;
};

/* harmony default export */ var SvgBottom = (SvgBottom_Svg);
// CONCATENATED MODULE: ./components/splash/index.js


function splash__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function splash__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function splash__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var parallaxDataTop = [{
  start: 0,
  end: 500,
  properties: [{
    startValue: 0,
    endValue: 0,
    property: 'translateX'
  }]
}];
var parallaxDataMiddle = [{
  start: 0,
  end: 500,
  properties: [{
    startValue: 0,
    endValue: 0,
    property: 'translateX'
  }]
}];
var parallaxDataBottom = [{
  start: 0,
  end: 500,
  properties: [{
    startValue: 0,
    endValue: 0,
    property: 'translateX'
  }]
}];
var parallaxData = [{
  start: 0,
  end: 500,
  properties: [{
    startValue: 1,
    endValue: 2,
    property: 'scale'
  }]
}];

var parallaxDataButton = [{
  start: 'self',
  end: 'about',
  properties: [{
    startValue: 0,
    endValue: 500,
    property: 'translateY'

  }]
}];

var splash__ref = Object(preact_min["h"])(
  lib_default.a,
  { parallaxData: parallaxData },
  Object(preact_min["h"])(
    lib_default.a,
    { parallaxData: parallaxDataTop },
    Object(preact_min["h"])(svg_SvgTop, null)
  ),
  Object(preact_min["h"])(
    lib_default.a,
    { parallaxData: parallaxDataMiddle },
    Object(preact_min["h"])(SvgMiddle, null)
  ),
  Object(preact_min["h"])(
    lib_default.a,
    { parallaxData: parallaxDataBottom },
    Object(preact_min["h"])(SvgBottom, null)
  )
);

var splash_Splash = function (_Component) {
  splash__inherits(Splash, _Component);

  function Splash(props) {
    splash__classCallCheck(this, Splash);

    return splash__possibleConstructorReturn(this, _Component.call(this, props));
  }

  Splash.prototype.componentDidMount = function componentDidMount() {
    var speed = '8';
    var timeline = new TimelineMax_TimelineMax({ repeat: -1 });

    timeline.fromTo('#zigzag1', speed, {
      x: '0%'
    }, {
      x: '100%',
      ease: Linear.easeNone
    }, 'playTogether');
    timeline.fromTo('#zigzag2', speed, {
      x: '-100%'
    }, {
      x: '0%',
      ease: Linear.easeNone
    }, 'playTogether');
  };

  Splash.prototype.render = function render() {
    var _this2 = this;

    var $splashClasses = splash_style_default.a.splash + ' screen';
    return Object(preact_min["h"])(
      'splash',
      { className: $splashClasses },
      splash__ref,
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: parallaxDataButton, className: 'buttonWrapper' },
        Object(preact_min["h"])(button_Button, { text: 'hi! how are you?', name: 'goToAbout', onButtonClick: function onButtonClick() {
            return _this2.props.changeScrollPosition('about');
          }, direction: 'down' })
      )
    );
  };

  return Splash;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/about/style.scss
var about_style = __webpack_require__("3CUW");
var about_style_default = /*#__PURE__*/__webpack_require__.n(about_style);

// CONCATENATED MODULE: ./components/about/index.js


function about__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function about__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function about__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var headlineParallaxData = [{
  start: 'about',
  end: 'work',
  properties: [{
    startValue: .5,
    endValue: 1,
    property: 'scale'
  }]
}];

var contentParallaxData = [{
  start: 'about',
  duration: 'about',
  properties: [{
    startValue: 0,
    endValue: 1,
    property: 'opacity'
  }]
}];

var mobileButtonParallaxData = [{
  start: 'self',
  end: 'work',
  properties: [{
    startValue: 0,
    endValue: 500,
    property: 'translateY'
  }]
}];

var buttonParallaxData = [{
  start: 'self',
  startOffset: 150,
  end: 'work',
  properties: [{
    startValue: 0,
    endValue: 500,
    property: 'translateY'
  }]
}];

var about__ref = Object(preact_min["h"])(
  'div',
  { 'class': 'headline-wrapper' },
  Object(preact_min["h"])(
    lib_default.a,
    { parallaxData: headlineParallaxData },
    Object(preact_min["h"])(
      'h1',
      null,
      'Hi! I\u2019m Bill'
    )
  )
);

var _ref2 = Object(preact_min["h"])(
  lib_default.a,
  { parallaxData: contentParallaxData },
  Object(preact_min["h"])(
    'div',
    { 'class': 'inner_content-wrapper' },
    Object(preact_min["h"])(
      'div',
      { 'class': 'inner_content-wrapper_left' },
      Object(preact_min["h"])(
        'p',
        null,
        '\u2026 and I\'m assuming you\'re a hiring manager, or a creative director, or my parents, or somebody who needs a website; you know, that type of thing. You\'re probably looking for a designer or a developer or better yet you just read an article on Creative Technologists and Google brought you here. Which brings us to the crux of the issue.'
      ),
      Object(preact_min["h"])(
        'h2',
        null,
        'WTF is a creative technologist'
      ),
      Object(preact_min["h"])(
        'p',
        null,
        'It\'s me! I\'m a Creative Technologist! I am equally adept at the creative and production phases of a project. I can dream up a product or campaign, slap together a prototype, run a UX study, iterate on designs, and write production quality webcode all by my lonesome. I\'m comfortable in all roles along the production timeline, from UX to Art Direction to Front-End Dev. Most of my experience has been in advertising, but I\'ve spent some time at tech companies too. Here\u2019s a link to my ',
        Object(preact_min["h"])(
          'a',
          { href: '#resume' },
          'resume'
        ),
        '.'
      )
    ),
    Object(preact_min["h"])(
      'div',
      { 'class': 'inner_content-wrapper_right' },
      Object(preact_min["h"])(
        'p',
        null,
        'I\'m client friendly and I\'ve spoken at a few conferences on topics ranging from ',
        Object(preact_min["h"])(
          'a',
          { href: '#' },
          'how to run a guerrilla UX study'
        ),
        ' to ',
        Object(preact_min["h"])(
          'a',
          { href: '#' },
          'automation tools for Alexa skill development'
        ),
        '.',
        Object(preact_min["h"])('br', null),
        Object(preact_min["h"])('br', null),
        'I also have a side-hustle designing and illustrating logos for small businesses. I also have a side-side hustle teaching private and group Muay Thai classes.'
      ),
      Object(preact_min["h"])(
        'h2',
        null,
        'TL ; DR \u2013 I\'m a designer / developer'
      ),
      Object(preact_min["h"])(
        'h2',
        { 'class': 'selectable-text' },
        'billwpearce at gmail dot com'
      )
    )
  )
);

var about_About = function (_Component) {
  about__inherits(About, _Component);

  function About(props) {
    about__classCallCheck(this, About);

    var _this = about__possibleConstructorReturn(this, _Component.call(this, props));

    _this.scrollToWork = function () {
      TweenMax.to(window, 1, { scrollTo: 'work' });
    };

    return _this;
  }

  About.prototype.componentDidMount = function componentDidMount() {};

  About.prototype.render = function render() {
    var _this2 = this;

    var $aboutClasses = about_style_default.a.about + ' screen';
    return Object(preact_min["h"])(
      'about',
      { className: $aboutClasses },
      about__ref,
      _ref2,
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: buttonParallaxData, className: 'buttonWrapper' },
        Object(preact_min["h"])(button_Button, { text: 'ok, let\u2019s see some work', onButtonClick: function onButtonClick() {
            return _this2.props.changeScrollPosition('work');
          }, direction: 'down', name: 'goToWork' })
      )
    );
  };

  return About;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/work/style.scss
var work_style = __webpack_require__("vJv6");
var work_style_default = /*#__PURE__*/__webpack_require__.n(work_style);

// EXTERNAL MODULE: ./components/work/tagging/style.scss
var tagging_style = __webpack_require__("0FHn");
var tagging_style_default = /*#__PURE__*/__webpack_require__.n(tagging_style);

// EXTERNAL MODULE: ./components/work/tagging/dropdown/style.scss
var dropdown_style = __webpack_require__("94oU");
var dropdown_style_default = /*#__PURE__*/__webpack_require__.n(dropdown_style);

// CONCATENATED MODULE: ./components/work/tagging/dropdown/index.js


function dropdown__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function dropdown__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var dropdown__ref = Object(preact_min["h"])(
  'option',
  null,
  'clear tags'
);

var dropdown_Dropdown = function (_Component) {
  dropdown__inherits(Dropdown, _Component);

  function Dropdown(props) {
    dropdown__classCallCheck(this, Dropdown);

    var _this = dropdown__possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleSelectChange = function (e) {
      _this.props.handleTagUpdate(e.target.value);
    };

    return _this;
  }

  Dropdown.prototype.componentDidMount = function componentDidMount() {};

  Dropdown.prototype.render = function render() {
    return Object(preact_min["h"])(
      'dropdown',
      { 'class': dropdown_style_default.a.dropdown },
      Object(preact_min["h"])(
        'select',
        { onChange: this.handleSelectChange },
        this.props.generateDropdownOptions(),
        Object(preact_min["h"])(
          'option',
          { selected: true },
          this.props.addTagCopy
        ),
        dropdown__ref
      )
    );
  };

  return Dropdown;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/work/tagging/index.js


function tagging__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tagging__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function tagging__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var tagging__ref = Object(preact_min["h"])('div', { 'class': 'tags' });

var tagging_Tagging = function (_Component) {
  tagging__inherits(Tagging, _Component);

  function Tagging(props) {
    tagging__classCallCheck(this, Tagging);

    var _this = tagging__possibleConstructorReturn(this, _Component.call(this, props));

    _this.generateDropdownOptions = function () {
      _this.dropdownOptions = [];
      for (var i = 0; i < _this.props.state.dropdownOptions.length; i++) {
        _this.dropdownOptions.push(Object(preact_min["h"])(
          'option',
          { value: _this.props.state.dropdownOptions[i] },
          _this.props.normalizeString(_this.props.state.dropdownOptions[i])
        ));
      }
      return _this.dropdownOptions;
    };

    _this.addTags = function (tag) {
      var tagStringLength = tag.length;
      var tagLength = tagStringLength * 10 > 50 ? tagStringLength * 10 : 50;
      var tagHeight = 30;
      var _setOrUnsetTag = _this.props.setOrUnsetTag;
      _this.$div = document.createElement('div');
      _this.$div.className = tag + ' tag';
      _this.$div.innerHTML = '\n    <div >\n      <div class="xtag"></div>\n      ' + _this.props.normalizeString(tag) + '\n    </div>\n    ';
      _this.$div.onclick = function () {
        _setOrUnsetTag(tag, 'unset');
        this.parentElement.removeChild(this);
      };
      _this.$tags.appendChild(_this.$div);
    };

    _this.addTagCopy = "add tag";

    _this.handleTagUpdate = function (tag) {
      if (tag == _this.addTagCopy) {
        return false;
      }
      if (tag === 'clear tags') {
        console.log("reset tags");
        return false;
      }
      _this.addTags(tag);
      _this.props.setOrUnsetTag(tag, 'set');
    };

    return _this;
  }

  Tagging.prototype.componentDidMount = function componentDidMount() {
    this.$tags = document.querySelector('.tags');
  };

  Tagging.prototype.render = function render() {
    return Object(preact_min["h"])(
      'tagging',
      { 'class': tagging_style_default.a.tagging },
      Object(preact_min["h"])(dropdown_Dropdown, { state: this.props.state, addTagCopy: this.addTagCopy, changeDropdownState: this.props.changeDropdownState, generateDropdownOptions: this.generateDropdownOptions, dropdownOptions: this.dropdownOptions, handleTagUpdate: this.handleTagUpdate, content: this.props.content }),
      tagging__ref
    );
  };

  return Tagging;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/work/index.js


function work__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function work__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function work__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var work_headlineParallaxData = [{
  start: 'work',
  duration: '100vh',
  properties: [{
    startValue: .5,
    endValue: 1,
    property: 'scale'
  }]
}];

var work_contentParallaxData = [{
  start: 'work',
  duration: '100vh',
  properties: [{
    startValue: 300,
    endValue: 0,
    property: 'translateY'
  }]
}];

var work__ref = Object(preact_min["h"])(
  lib_default.a,
  { parallaxData: work_headlineParallaxData },
  Object(preact_min["h"])(
    'h1',
    null,
    'Work'
  )
);

var work_Work = function (_Component) {
  work__inherits(Work, _Component);

  function Work(props) {
    work__classCallCheck(this, Work);

    var _this = work__possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleLinkClick = function (e) {
      console.log(e.target.id);
      _this.props.toggleState('content');
      _this.props.setContentState(e.target.id);
      _this.props.changeScrollPosition('content');
    };

    _this.setOrUnsetTag = function (tag, setOrUnset) {
      var dropDownArray = _this.props.state.dropdownOptions;
      var filtersArray = _this.props.state.filters;
      if (setOrUnset === 'set') {
        dropDownArray.splice(dropDownArray.indexOf(tag), 1);
        filtersArray.push(tag);
      }
      if (setOrUnset === 'unset') {
        filtersArray.splice(filtersArray.indexOf(tag), 1);
        dropDownArray.push(tag);
      }
      dropDownArray.sort();
      filtersArray.sort();
      // console.log(`***** \n ${setOrUnset}ting tag: ${tag} \n dropDownArray: ${dropDownArray} \n filtersArray: ${filtersArray} \n*****`);
      _this.setState({
        dropDownOptions: dropDownArray,
        filters: filtersArray
      });
      // console.log("Dropdown Options State: \n" + this.props.state.dropdownOptions);
      // console.log("Filters State: \n" + this.props.state.filters);
    };

    _this.generateGridItems = function () {
      var array = void 0;
      if (_this.props.state.filters.length <= 0) {
        // console.log("Display these projects (unfiltered): " + this.props.state.dropdownOptions);
        array = _this.props.content.projects;
      } else {
        // console.log("Display these projects (filtered): " + this.props.state.filters);
        array = _this.filterProjects(_this.props.state.filters);
      }

      var gridItems = [];
      for (var i = 0; i < array.length; i++) {
        var bgr = 'background-image: url("' + array[i].thumbNail + '");';
        var animation_delay = 'animation-delay:' + i / 100 + 's;';
        var styles = bgr + animation_delay;

        gridItems.push(Object(preact_min["h"])(
          'div',
          { style: styles, title: array[i].fullName, onClick: _this.handleLinkClick, className: array[i].name + " grid-item", id: array[i].name },
          Object(preact_min["h"])(
            'div',
            { 'class': 'backside' },
            Object(preact_min["h"])(
              'h3',
              null,
              array[i].fullName
            ),
            Object(preact_min["h"])(
              'h3',
              null,
              array[i].type
            )
          )
        ));
      }
      return gridItems;
    };

    _this.filterProjects = function (array) {
      var output = [];
      for (var i = 0; i < _this.props.content.projects.length; i++) {
        var intersection = _this.props.content.projects[i].tags.filter(function (x) {
          return array.includes(x);
        });
        if (_this.props.arraysEqual(intersection, _this.props.state.filters)) {
          // console.log("Adding the following project: " + this.props.content.projects[i].fullName);
          output.push(_this.props.content.projects[i]);
        }
      }
      return output;
    };

    _this.numberOfGridItems = _this.props.state.filters.length < 1 ? _this.props.state.dropdownOptions.length : _this.props.state.filters.length;
    return _this;
  }

  Work.prototype.componentDidMount = function componentDidMount() {};

  Work.prototype.render = function render() {
    return Object(preact_min["h"])(
      'work',
      { className: work_style_default.a.work + ' screen' },
      Object(preact_min["h"])(
        'div',
        { 'class': work_style_default.a.headlineWrapper },
        work__ref
      ),
      Object(preact_min["h"])('div', { 'class': work_style_default.a.taggingWrapper }),
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: work_contentParallaxData },
        Object(preact_min["h"])(
          'div',
          { 'class': work_style_default.a.inner_contentWrapper },
          this.generateGridItems()
        )
      )
    );
  };

  return Work;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/content/style.scss
var content_style = __webpack_require__("OswP");
var content_style_default = /*#__PURE__*/__webpack_require__.n(content_style);

// CONCATENATED MODULE: ./components/content/index.js


function content__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function content__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function content__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var content_headlineParallaxData = [{
  start: '.content-wrapper',
  duration: '100vh',
  properties: [{
    startValue: .5,
    endValue: 1,
    property: 'scale'
  }]
}];

var content_contentParallaxData = [{
  start: '.content-wrapper',
  duration: '100vh',
  properties: [{
    startValue: 0,
    endValue: 1,
    property: 'opacity'
  }]
}];

var mediaParallaxData = [{
  start: '.content-wrapper',
  duration: '100vh',
  properties: [{
    startValue: 500,
    endValue: 0,
    property: 'translateX'
  }]
}];

var content__ref = Object(preact_min["h"])(
  'span',
  { 'class': 'linkDivider' },
  ' | '
);

var content__ref2 = Object(preact_min["h"])('br', null);

var _ref3 = Object(preact_min["h"])('br', null);

var _ref4 = Object(preact_min["h"])('br', null);

var content_Content = function (_Component) {
  content__inherits(Content, _Component);

  function Content(props) {
    content__classCallCheck(this, Content);

    var _this = content__possibleConstructorReturn(this, _Component.call(this, props));

    _this.getLinks = function (array) {
      var links = [];
      for (var i = 0; i < array.length; i++) {
        links.push(Object(preact_min["h"])(
          'a',
          { 'class': 'contentLink', target: '_blank', href: array[i].link },
          array[i].text
        ));
        if (i < array.length - 1) {
          links.push(content__ref);
        };
      }
      return links;
    };

    _this.getMedia = function (array, type) {
      var media = [];
      for (var i = 0; i < array.length; i++) {
        if (type === 'img') {
          if (!array[i].cropped) {
            media.push(Object(preact_min["h"])(
              'a',
              { 'class': 'contentImageLink', href: array[i].url, target: '_blank' },
              Object(preact_min["h"])('img', { 'class': 'contentImage', src: array[i].url, alt: array[i].text })
            ));
          } else {
            media.push(Object(preact_min["h"])(
              'a',
              { 'class': 'contentImageLink', href: array[i].url, target: '_blank' },
              Object(preact_min["h"])('img', { 'class': 'contentImage', src: array[i].cropped, alt: array[i].text })
            ));
          }
        }
        if (type === 'vid') {
          media.push(Object(preact_min["h"])(
            'video',
            { 'class': 'contentImage', 'data-alt': array[i].text, controls: true },
            Object(preact_min["h"])('source', { src: array[i].url, type: 'video/mp4' })
          ));
        }
      }
      return media;
    };

    _this.scrollBackToWork = function () {
      TweenMax.to(window, 1, { scrollTo: 'work' });
    };

    return _this;
  }

  Content.prototype.componentDidMount = function componentDidMount() {};

  Content.prototype.componentWillUnmount = function componentWillUnmount() {};

  Content.prototype.render = function render() {
    var _this2 = this;

    var $contentClasses = content_style_default.a.content + ' ' + this.props.state.activeContent + ' screen';
    var content = this.props.getContentFromShortName(this.props.state.activeContentName);
    // console.log(content.links);
    this.getLinks(content.links);

    return Object(preact_min["h"])(
      'content',
      { 'class': $contentClasses },
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: content_headlineParallaxData },
        Object(preact_min["h"])(
          'h1',
          { 'class': content_style_default.a.contentHeader },
          content.fullName
        )
      ),
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: content_contentParallaxData },
        Object(preact_min["h"])(
          'div',
          { 'class': content_style_default.a.flexWrapper },
          Object(preact_min["h"])(
            'div',
            { 'class': content_style_default.a.flexLeft },
            Object(preact_min["h"])(
              'p',
              null,
              'Client: ',
              content.client,
              content__ref2,
              'Agency: ',
              content.agency,
              _ref3,
              'Role(s):',
              content.roles.map(function (name, index) {
                if (index < content.roles.length - 1) {
                  return Object(preact_min["h"])(
                    'span',
                    { key: index },
                    ' ',
                    name,
                    ','
                  );
                } else {
                  return Object(preact_min["h"])(
                    'span',
                    { key: index },
                    ' ',
                    name
                  );
                }
              }),
              _ref4,
              'Links: ',
              this.getLinks(content.links)
            )
          ),
          Object(preact_min["h"])(
            'div',
            { 'class': content_style_default.a.flexRight },
            Object(preact_min["h"])(
              'p',
              null,
              content.bodyCopy
            )
          )
        )
      ),
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: mediaParallaxData },
        Object(preact_min["h"])(
          'div',
          { 'class': content_style_default.a.mediaWrapper + ' mediaWrapper' },
          this.getMedia(content.images, 'img'),
          this.getMedia(content.videos, 'vid')
        )
      ),
      Object(preact_min["h"])(button_Button, { text: 'scroll back up to work', onButtonClick: function onButtonClick() {
          return _this2.props.changeScrollPosition('work');
        }, direction: 'up' })
    );
  };

  return Content;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/utils.js
var addListener = function addListener(elm, type, func) {
  if (typeof elm === 'string') {
    document.querySelector(elm).addEventListener(type, func, false);
    console.log("This should be an element.");
  } else if (elm === 'object') {
    elm.addEventListener(type, func, false);
  } else {}
};

var addListeners = function addListeners(elmArray, type, func) {
  for (var i = 0; i < elmArray.length; i++) {
    elmArray[i].addEventListener(type, func, false);
  }
};

var removeListener = function removeListener(elm, type, func) {
  if (typeof elm === 'string') {
    document.querySelector(elm).removeEventListener(type, func, false);
    console.log("This should be an element.");
  } else if (elm === 'object') {
    elm.removeEventListener(type, func, false);
  }
};

var removeListeners = function removeListeners(elmArray, type, func) {
  for (var i = 0; i < elmArray.length; i++) {
    elmArray[i].removeEventListener(type, func, false);
  }
};

var normalizeString = function normalizeString(string) {
  return string.replace(/_/g, ' ');
};

var checkArraysForIntersection = function checkArraysForIntersection(array1, array2) {
  array1.filter(function (person) {
    return person.age > 18;
  });
};

var arraysEqual = function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  a.sort();
  b.sort();

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
// EXTERNAL MODULE: ./components/site-contents.json
var site_contents = __webpack_require__("ZGUF");
var site_contents_default = /*#__PURE__*/__webpack_require__.n(site_contents);

// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import {Router} from 'preact-router';











var randomColor = __webpack_require__("CeLM"); // import the script

// Code-splitting is automated for routes
// import Home from '../routes/home';
// import Profile from '../routes/profile';

var app_App = function (_Component) {
  app__inherits(App, _Component);

  function App(props) {
    app__classCallCheck(this, App);

    var _this = app__possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContentFromShortName = function (shortName) {
      for (var i = 0; i < site_contents["work"].projects.length; i++) {
        if (site_contents["work"].projects[i].name.includes(shortName)) {
          return site_contents["work"].projects[i];
        };
      };
    };

    _this.activeContent = site_contents["work"].projects;

    _this.setSessionStorage = function () {
      if (!window.localStorage.bpHasVisited) {
        window.localStorage.bpHasVisited = true;
      };
    };

    _this.getSessionStorage = function () {
      if (!window.localStorage.bpHasVisited) {
        console.log("Welcome for the first time.");
        _this.setSessionStorage();
      } else {
        console.log("Welcome back.");
      }
    };

    _this.changeDropdownState = function (array) {
      _this.setState({ dropdownOptions: array });
    };

    _this.changeState = function (state) {
      var $state = state;
      var $previousState = _this.state.state;
      _this.setState({ state: $state, previousState: $previousState });
    };

    _this.setContentState = function (content) {
      _this.setState({ activeContentName: content });
    };

    _this.toggleState = function (state) {
      if (_this.state.state === 'default') {
        // Changing from the default state to the menu state
        _this.changeState(state);
      } else if (_this.state.state === state) {
        // Changing from the menu state back to default
        _this.changeState('default');
      } else {
        // Panic button
        _this.changeState('default');
      }
    };

    _this.changeScrollPosition = function (section) {
      console.log(section);
      TweenMaxBase_TweenMax.to(window, 1, { scrollTo: section, ease: Sine.easeOut, autoKill: false });
    };

    _this.setContentState = function (content) {
      _this.setState({ activeContentName: content });
    };

    _this.handleHamburgerClick = function (e) {
      _this.toggleState('menu');
    };

    _this.changeColors = function (e) {
      var $randomColor = randomColor();
      document.querySelector('svg').style.fill = $randomColor;
    };

    _this.getVisibility = function (state) {
      if (_this.state.state === state) {
        return 'enter';
      } else {
        return 'enter';
      };
    };

    _this.setState({
      section: 'splash',
      scrollPos: 0,
      state: 'default',
      dropdownOptions: site_contents["work"].tags,
      filters: [],
      activeContentName: 'dunkirk', // default
      filteredContentIndicies: []
    });
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.getSessionStorage();
    if (dist["isIOS"]) {
      document.querySelector('html').classList.add('iOS');
      document.querySelector('html').classList.add(dist["osVersion"]);
      document.querySelector('html').classList.add(dist["mobileModel"]);
      console.log(Object(dist["deviceDetect"])());
    };
    if (dist["isMobileSafari"]) {
      document.querySelector('html').classList.add('MobileSafari');
    };
    if (dist["isSafari"]) {
      document.querySelector('html').classList.add('Safari');
    };
  };

  App.prototype.componentWillUnMount = function componentWillUnMount() {};

  App.prototype.render = function render(props, state) {
    var $screen = Object(preact_min["h"])(
      'div',
      { 'class': 'screens' },
      Object(preact_min["h"])(splash_Splash, { props: this.props, changeColors: this.changeColors, changeScrollPosition: this.changeScrollPosition }),
      Object(preact_min["h"])(about_About, { changeScrollPosition: this.changeScrollPosition }),
      Object(preact_min["h"])(work_Work, { props: this.props, state: this.state, changeScrollPosition: this.changeScrollPosition, setContentState: this.setContentState, arraysEqual: arraysEqual, normalizeString: normalizeString, setState: this.setState, content: site_contents["work"], addListeners: addListeners, changeDropdownState: this.changeDropdownState, toggleState: this.toggleState })
    );

    var $content = Object(preact_min["h"])(
      'div',
      { className: this.getVisibility('content') + ' content-wrapper' },
      Object(preact_min["h"])(content_Content, { props: this.props, state: this.state, changeScrollPosition: this.changeScrollPosition, getContentFromShortName: this.getContentFromShortName, toggleState: this.toggleState })
    );

    return Object(preact_min["h"])(
      'app',
      null,
      $screen,
      $content
    );
  };

  return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index_0 = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = M;for (i = arguments.length; i-- > 2;) {
      T.push(arguments[i]);
    }t && null != t.children && (T.length || T.push(t.children), delete t.children);while (T.length) {
      if ((o = T.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        T.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === M ? l = [o] : l.push(o), n = r;
    }var a = new S();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function o(e) {
    !e.__d && (e.__d = !0) && 1 == D.push(e) && (L.debounceRendering || P)(r);
  }function r() {
    var e,
        t = D;D = [];while (e = t.pop()) {
      e.__d && C(e);
    }
  }function i(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function l(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function a(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function p(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function s(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function u(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === W.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, c, l) : e.removeEventListener(t, c, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) {
        try {
          e[t] = null == o ? "" : o;
        } catch (e) {}null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function c(e) {
    return this.__l[e.type](L.event && L.event(e) || e);
  }function _() {
    var e;while (e = E.pop()) {
      L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    V++ || (A = null != r && void 0 !== r.ownerSVGElement, H = null != e && !("__preactattr_" in e));var l = f(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --V || (H = !1, i || _()), l;
  }function f(e, t, n, o, r) {
    var i = e,
        a = A;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0))), i.__preactattr_ = !0, i;var s = t.nodeName;if ("function" == typeof s) return x(e, t, n, o);if (A = "svg" === s || "foreignObject" !== s && A, s += "", (!e || !l(e, s)) && (i = p(s, A), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0);
    }var u = i.firstChild,
        c = i.__preactattr_,
        _ = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var d = i.attributes, f = d.length; f--;) {
        c[d[f].name] = d[f].value;
      }
    }return !H && _ && 1 === _.length && "string" == typeof _[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != _[0] && (u.nodeValue = _[0]) : (_ && _.length || null != u) && h(i, _, n, o, H || null != c.dangerouslySetInnerHTML), b(i, t.attributes, c), A = a, i;
  }function h(e, t, n, o, r) {
    var l,
        a,
        p,
        u,
        c,
        _ = e.childNodes,
        d = [],
        h = {},
        v = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (v++, h[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (d[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      u = t[C], c = null;var k = u.key;if (null != k) v && void 0 !== h[k] && (c = h[k], h[k] = void 0, v--);else if (b < g) for (l = b; l < g; l++) {
        if (void 0 !== d[l] && i(a = d[l], u, r)) {
          c = a, d[l] = void 0, l === g - 1 && g--, l === b && b++;break;
        }
      }c = f(c, u, n, o), p = _[C], c && c !== e && c !== p && (null == p ? e.appendChild(c) : c === p.nextSibling ? s(p) : e.insertBefore(c, p));
    }if (v) for (var C in h) {
      void 0 !== h[C] && m(h[C], !1);
    }while (b <= g) {
      void 0 !== (c = d[g--]) && m(c, !1);
    }
  }function m(e, t) {
    var n = e._component;n ? N(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || s(e), v(e));
  }function v(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;m(e, !0), e = t;
    }
  }function b(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || u(e, o, n[o], n[o] = void 0, A);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || u(e, o, n[o], n[o] = t[o], A);
    }
  }function y(e, t, n) {
    var o,
        r = B.length;e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : (o = new k(t, n), o.constructor = e, o.render = g);while (r--) {
      if (B[r].constructor === e) return o.__b = B[r].__b, B.splice(r, 1), o;
    }return o;
  }function g(e, t, n) {
    return this.constructor(e, n);
  }function w(e, t, n, r, i) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? o(e) : C(e, 1, i)), e.__r && e.__r(e));
  }function C(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          p,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.__p || s,
          h = e.__s || u,
          v = e.__c || c,
          b = e.base,
          g = e.__b,
          x = b || g,
          k = e._component,
          U = !1,
          S = v;if (e.constructor.getDerivedStateFromProps && (u = t(t({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), b && (e.props = f, e.state = h, e.context = v, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(s, u, c), e.getChildContext && (c = t(t({}, c), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(f, h));var T,
            M,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = a(i);l = k, l && l.constructor === P && W.key == l.__k ? w(l, W, 1, c, !1) : (T = l, e._component = l = y(P, W, c), l.__b = l.__b || g, l.__u = e, w(l, W, 0, c, !1), C(l, 1, o, !0)), M = l.base;
        } else p = x, T = k, T && (p = e._component = null), (x || 1 === n) && (p && (p._component = null), M = d(p, i, c, o || !b, x && x.parentNode, !0));if (x && M !== x && l !== k) {
          var D = x.parentNode;D && M !== D && (D.replaceChild(M, x), T || (x._component = null, m(x, !1)));
        }if (T && N(T), e.base = M, M && !r) {
          var A = e,
              H = e;while (H = H.__u) {
            (A = H).base = M;
          }M._component = A, M._componentConstructor = A.constructor;
        }
      }!b || o ? E.unshift(e) : U || (e.componentDidUpdate && e.componentDidUpdate(f, h, S), L.afterUpdate && L.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }V || r || _();
    }
  }function x(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        p = r && e._componentConstructor === t.nodeName,
        s = p,
        u = a(t);while (r && !s && (r = r.__u)) {
      s = r.constructor === t.nodeName;
    }return r && s && (!o || r._component) ? (w(r, u, 3, n, o), e = r.base) : (i && !p && (N(i), e = l = null), r = y(t.nodeName, u, n), e && !r.__b && (r.__b = e, l = null), w(r, u, 1, n, o), e = r.base, l && e !== l && (l._component = null, m(l, !1))), e;
  }function N(e) {
    L.beforeUnmount && L.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? N(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, s(t), B.push(e), v(t)), e.__r && e.__r(null);
  }function k(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function U(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }var S = function S() {},
      L = {},
      T = [],
      M = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      D = [],
      E = [],
      V = 0,
      A = !1,
      H = !1,
      B = [];t(k.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), o(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), C(this, 2);
    }, render: function render() {} });var F = { h: e, createElement: e, cloneElement: n, Component: k, render: U, rerender: r, options: L }; true ? module.exports = F : self.preact = F;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "OswP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"content__3mC6F","contentHeader":"contentHeader__3838E","flexWrapper":"flexWrapper__3H597","flexLeft":"flexLeft__3LnwA","flexRight":"flexRight__3FSAa","mediaWrapper":"mediaWrapper__2qsNm"};

/***/ }),

/***/ "PWbO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _gsScope; });
/* unused harmony export TweenLite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SimpleTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Ease; });
/* unused harmony export Linear */
/* unused harmony export Power0 */
/* unused harmony export Power1 */
/* unused harmony export Power2 */
/* unused harmony export Power3 */
/* unused harmony export Power4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TweenPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EventDispatcher; });
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */

/* ES6 changes:
	- declare and export _gsScope at top.
	- set var TweenLite = the result of the main function
	- export default TweenLite at the bottom
	- return TweenLite at the bottom of the main function
	- pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
	- remove the "export to multiple environments" in Definition().
 */
var _gsScope = typeof window !== "undefined" ? window : typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : this || {};

var TweenLite = function (window) {

	"use strict";

	var _exports = {},
	    _doc = window.document,
	    _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
	if (_globals.TweenLite) {
		return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
	}
	var _namespace = function _namespace(ns) {
		var a = ns.split("."),
		    p = _globals,
		    i;
		for (i = 0; i < a.length; i++) {
			p[a[i]] = p = p[a[i]] || {};
		}
		return p;
	},
	    gs = _namespace("com.greensock"),
	    _tinyNum = 0.00000001,
	    _slice = function _slice(a) {
		//don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
		var b = [],
		    l = a.length,
		    i;
		for (i = 0; i !== l; b.push(a[i++])) {}
		return b;
	},
	    _emptyFunc = function _emptyFunc() {},
	    _isArray = function () {
		//works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
		var toString = Object.prototype.toString,
		    array = toString.call([]);
		return function (obj) {
			return obj != null && (obj instanceof Array || typeof obj === "object" && !!obj.push && toString.call(obj) === array);
		};
	}(),
	    a,
	    i,
	    p,
	    _ticker,
	    _tickerActive,
	    _defLookup = {},


	/**
  * @constructor
  * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
  * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
  * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
  * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
  *
  * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
  * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
  * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
  * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
  * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
  * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
  * sandbox the banner one like:
  *
  * <script>
  *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
  * </script>
  * <script src="js/greensock/v1.7/TweenMax.js"></script>
  * <script>
  *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
  * </script>
  * <script src="js/greensock/v1.6/TweenMax.js"></script>
  * <script>
  *     gs.TweenLite.to(...); //would use v1.7
  *     TweenLite.to(...); //would use v1.6
  * </script>
  *
  * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
  * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
  * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
  * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
  */
	Definition = function Definition(ns, dependencies, func, global) {
		this.sc = _defLookup[ns] ? _defLookup[ns].sc : []; //subclasses
		_defLookup[ns] = this;
		this.gsClass = null;
		this.func = func;
		var _classes = [];
		this.check = function (init) {
			var i = dependencies.length,
			    missing = i,
			    cur,
			    a,
			    n,
			    cl;
			while (--i > -1) {
				if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
					_classes[i] = cur.gsClass;
					missing--;
				} else if (init) {
					cur.sc.push(this);
				}
			}
			if (missing === 0 && func) {
				a = ("com.greensock." + ns).split(".");
				n = a.pop();
				cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

				//exports to multiple environments
				if (global) {
					_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
					/*
     if (typeof(module) !== "undefined" && module.exports) { //node
     	if (ns === moduleName) {
     		module.exports = _exports[moduleName] = cl;
     		for (i in _exports) {
     			cl[i] = _exports[i];
     		}
     	} else if (_exports[moduleName]) {
     		_exports[moduleName][n] = cl;
     	}
     } else if (typeof(define) === "function" && define.amd){ //AMD
     	define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
     }
     */
				}
				for (i = 0; i < this.sc.length; i++) {
					this.sc[i].check();
				}
			}
		};
		this.check(true);
	},


	//used to create Definition instances (which basically registers a class that has dependencies).
	_gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
		return new Definition(ns, dependencies, func, global);
	},


	//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
	_class = gs._class = function (ns, func, global) {
		func = func || function () {};
		_gsDefine(ns, [], function () {
			return func;
		}, global);
		return func;
	};

	_gsDefine.globals = _globals;

	/*
  * ----------------------------------------------------------------
  * Ease
  * ----------------------------------------------------------------
  */
	var _baseParams = [0, 0, 1, 1],
	    Ease = _class("easing.Ease", function (func, extraParams, type, power) {
		this._func = func;
		this._type = type || 0;
		this._power = power || 0;
		this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
	}, true),
	    _easeMap = Ease.map = {},
	    _easeReg = Ease.register = function (ease, names, types, create) {
		var na = names.split(","),
		    i = na.length,
		    ta = (types || "easeIn,easeOut,easeInOut").split(","),
		    e,
		    name,
		    j,
		    type;
		while (--i > -1) {
			name = na[i];
			e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
			j = ta.length;
			while (--j > -1) {
				type = ta[j];
				_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
			}
		}
	};

	p = Ease.prototype;
	p._calcEnd = false;
	p.getRatio = function (p) {
		if (this._func) {
			this._params[0] = p;
			return this._func.apply(null, this._params);
		}
		var t = this._type,
		    pw = this._power,
		    r = t === 1 ? 1 - p : t === 2 ? p : p < 0.5 ? p * 2 : (1 - p) * 2;
		if (pw === 1) {
			r *= r;
		} else if (pw === 2) {
			r *= r * r;
		} else if (pw === 3) {
			r *= r * r * r;
		} else if (pw === 4) {
			r *= r * r * r * r;
		}
		return t === 1 ? 1 - r : t === 2 ? r : p < 0.5 ? r / 2 : 1 - r / 2;
	};

	//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
	a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
	i = a.length;
	while (--i > -1) {
		p = a[i] + ",Power" + i;
		_easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
		_easeReg(new Ease(null, null, 2, i), p, "easeIn" + (i === 0 ? ",easeNone" : ""));
		_easeReg(new Ease(null, null, 3, i), p, "easeInOut");
	}
	_easeMap.linear = gs.easing.Linear.easeIn;
	_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


	/*
  * ----------------------------------------------------------------
  * EventDispatcher
  * ----------------------------------------------------------------
  */
	var EventDispatcher = _class("events.EventDispatcher", function (target) {
		this._listeners = {};
		this._eventTarget = target || this;
	});
	p = EventDispatcher.prototype;

	p.addEventListener = function (type, callback, scope, useParam, priority) {
		priority = priority || 0;
		var list = this._listeners[type],
		    index = 0,
		    listener,
		    i;
		if (this === _ticker && !_tickerActive) {
			_ticker.wake();
		}
		if (list == null) {
			this._listeners[type] = list = [];
		}
		i = list.length;
		while (--i > -1) {
			listener = list[i];
			if (listener.c === callback && listener.s === scope) {
				list.splice(i, 1);
			} else if (index === 0 && listener.pr < priority) {
				index = i + 1;
			}
		}
		list.splice(index, 0, { c: callback, s: scope, up: useParam, pr: priority });
	};

	p.removeEventListener = function (type, callback) {
		var list = this._listeners[type],
		    i;
		if (list) {
			i = list.length;
			while (--i > -1) {
				if (list[i].c === callback) {
					list.splice(i, 1);
					return;
				}
			}
		}
	};

	p.dispatchEvent = function (type) {
		var list = this._listeners[type],
		    i,
		    t,
		    listener;
		if (list) {
			i = list.length;
			if (i > 1) {
				list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
			}
			t = this._eventTarget;
			while (--i > -1) {
				listener = list[i];
				if (listener) {
					if (listener.up) {
						listener.c.call(listener.s || t, { type: type, target: t });
					} else {
						listener.c.call(listener.s || t);
					}
				}
			}
		}
	};

	/*
  * ----------------------------------------------------------------
  * Ticker
  * ----------------------------------------------------------------
  */
	var _reqAnimFrame = window.requestAnimationFrame,
	    _cancelAnimFrame = window.cancelAnimationFrame,
	    _getTime = Date.now || function () {
		return new Date().getTime();
	},
	    _lastUpdate = _getTime();

	//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
	a = ["ms", "moz", "webkit", "o"];
	i = a.length;
	while (--i > -1 && !_reqAnimFrame) {
		_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
		_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
	}

	_class("Ticker", function (fps, useRAF) {
		var _self = this,
		    _startTime = _getTime(),
		    _useRAF = useRAF !== false && _reqAnimFrame ? "auto" : false,
		    _lagThreshold = 500,
		    _adjustedLag = 33,
		    _tickWord = "tick",
		    //helps reduce gc burden
		_fps,
		    _req,
		    _id,
		    _gap,
		    _nextTime,
		    _tick = function _tick(manual) {
			var elapsed = _getTime() - _lastUpdate,
			    overlap,
			    dispatch;
			if (elapsed > _lagThreshold) {
				_startTime += elapsed - _adjustedLag;
			}
			_lastUpdate += elapsed;
			_self.time = (_lastUpdate - _startTime) / 1000;
			overlap = _self.time - _nextTime;
			if (!_fps || overlap > 0 || manual === true) {
				_self.frame++;
				_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
				dispatch = true;
			}
			if (manual !== true) {
				//make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
				_id = _req(_tick);
			}
			if (dispatch) {
				_self.dispatchEvent(_tickWord);
			}
		};

		EventDispatcher.call(_self);
		_self.time = _self.frame = 0;
		_self.tick = function () {
			_tick(true);
		};

		_self.lagSmoothing = function (threshold, adjustedLag) {
			if (!arguments.length) {
				//if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
				return _lagThreshold < 1 / _tinyNum;
			}
			_lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
			_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
		};

		_self.sleep = function () {
			if (_id == null) {
				return;
			}
			if (!_useRAF || !_cancelAnimFrame) {
				clearTimeout(_id);
			} else {
				_cancelAnimFrame(_id);
			}
			_req = _emptyFunc;
			_id = null;
			if (_self === _ticker) {
				_tickerActive = false;
			}
		};

		_self.wake = function (seamless) {
			if (_id !== null) {
				_self.sleep();
			} else if (seamless) {
				_startTime += -_lastUpdate + (_lastUpdate = _getTime());
			} else if (_self.frame > 10) {
				//don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
				_lastUpdate = _getTime() - _lagThreshold + 5;
			}
			_req = _fps === 0 ? _emptyFunc : !_useRAF || !_reqAnimFrame ? function (f) {
				return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
			} : _reqAnimFrame;
			if (_self === _ticker) {
				_tickerActive = true;
			}
			_tick(2);
		};

		_self.fps = function (value) {
			if (!arguments.length) {
				return _fps;
			}
			_fps = value;
			_gap = 1 / (_fps || 60);
			_nextTime = this.time + _gap;
			_self.wake();
		};

		_self.useRAF = function (value) {
			if (!arguments.length) {
				return _useRAF;
			}
			_self.sleep();
			_useRAF = value;
			_self.fps(_fps);
		};
		_self.fps(fps);

		//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
		setTimeout(function () {
			if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
				_self.useRAF(false);
			}
		}, 1500);
	});

	p = gs.Ticker.prototype = new gs.events.EventDispatcher();
	p.constructor = gs.Ticker;

	/*
  * ----------------------------------------------------------------
  * Animation
  * ----------------------------------------------------------------
  */
	var Animation = _class("core.Animation", function (duration, vars) {
		this.vars = vars = vars || {};
		this._duration = this._totalDuration = duration || 0;
		this._delay = Number(vars.delay) || 0;
		this._timeScale = 1;
		this._active = !!vars.immediateRender;
		this.data = vars.data;
		this._reversed = !!vars.reversed;

		if (!_rootTimeline) {
			return;
		}
		if (!_tickerActive) {
			//some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
			_ticker.wake();
		}

		var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
		tl.add(this, tl._time);

		if (this.vars.paused) {
			this.paused(true);
		}
	});

	_ticker = Animation.ticker = new gs.Ticker();
	p = Animation.prototype;
	p._dirty = p._gc = p._initted = p._paused = false;
	p._totalTime = p._time = 0;
	p._rawPrevTime = -1;
	p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
	p._paused = false;

	//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
	var _checkTimeout = function _checkTimeout() {
		if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) {
			//note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
			_ticker.wake();
		}
		var t = setTimeout(_checkTimeout, 2000);
		if (t.unref) {
			// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
			t.unref();
		}
	};
	_checkTimeout();

	p.play = function (from, suppressEvents) {
		if (from != null) {
			this.seek(from, suppressEvents);
		}
		return this.reversed(false).paused(false);
	};

	p.pause = function (atTime, suppressEvents) {
		if (atTime != null) {
			this.seek(atTime, suppressEvents);
		}
		return this.paused(true);
	};

	p.resume = function (from, suppressEvents) {
		if (from != null) {
			this.seek(from, suppressEvents);
		}
		return this.paused(false);
	};

	p.seek = function (time, suppressEvents) {
		return this.totalTime(Number(time), suppressEvents !== false);
	};

	p.restart = function (includeDelay, suppressEvents) {
		return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
	};

	p.reverse = function (from, suppressEvents) {
		if (from != null) {
			this.seek(from || this.totalDuration(), suppressEvents);
		}
		return this.reversed(true).paused(false);
	};

	p.render = function (time, suppressEvents, force) {
		//stub - we override this method in subclasses.
	};

	p.invalidate = function () {
		this._time = this._totalTime = 0;
		this._initted = this._gc = false;
		this._rawPrevTime = -1;
		if (this._gc || !this.timeline) {
			this._enabled(true);
		}
		return this;
	};

	p.isActive = function () {
		var tl = this._timeline,
		    //the 2 root timelines won't have a _timeline; they're always active.
		startTime = this._startTime,
		    rawTime;
		return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum;
	};

	p._enabled = function (enabled, ignoreTimeline) {
		if (!_tickerActive) {
			_ticker.wake();
		}
		this._gc = !enabled;
		this._active = this.isActive();
		if (ignoreTimeline !== true) {
			if (enabled && !this.timeline) {
				this._timeline.add(this, this._startTime - this._delay);
			} else if (!enabled && this.timeline) {
				this._timeline._remove(this, true);
			}
		}
		return false;
	};

	p._kill = function (vars, target) {
		return this._enabled(false, false);
	};

	p.kill = function (vars, target) {
		this._kill(vars, target);
		return this;
	};

	p._uncache = function (includeSelf) {
		var tween = includeSelf ? this : this.timeline;
		while (tween) {
			tween._dirty = true;
			tween = tween.timeline;
		}
		return this;
	};

	p._swapSelfInParams = function (params) {
		var i = params.length,
		    copy = params.concat();
		while (--i > -1) {
			if (params[i] === "{self}") {
				copy[i] = this;
			}
		}
		return copy;
	};

	p._callback = function (type) {
		var v = this.vars,
		    callback = v[type],
		    params = v[type + "Params"],
		    scope = v[type + "Scope"] || v.callbackScope || this,
		    l = params ? params.length : 0;
		switch (l) {//speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
			case 0:
				callback.call(scope);break;
			case 1:
				callback.call(scope, params[0]);break;
			case 2:
				callback.call(scope, params[0], params[1]);break;
			default:
				callback.apply(scope, params);
		}
	};

	//----Animation getters/setters --------------------------------------------------------

	p.eventCallback = function (type, callback, params, scope) {
		if ((type || "").substr(0, 2) === "on") {
			var v = this.vars;
			if (arguments.length === 1) {
				return v[type];
			}
			if (callback == null) {
				delete v[type];
			} else {
				v[type] = callback;
				v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
				v[type + "Scope"] = scope;
			}
			if (type === "onUpdate") {
				this._onUpdate = callback;
			}
		}
		return this;
	};

	p.delay = function (value) {
		if (!arguments.length) {
			return this._delay;
		}
		if (this._timeline.smoothChildTiming) {
			this.startTime(this._startTime + value - this._delay);
		}
		this._delay = value;
		return this;
	};

	p.duration = function (value) {
		if (!arguments.length) {
			this._dirty = false;
			return this._duration;
		}
		this._duration = this._totalDuration = value;
		this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
		if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
			this.totalTime(this._totalTime * (value / this._duration), true);
		}
		return this;
	};

	p.totalDuration = function (value) {
		this._dirty = false;
		return !arguments.length ? this._totalDuration : this.duration(value);
	};

	p.time = function (value, suppressEvents) {
		if (!arguments.length) {
			return this._time;
		}
		if (this._dirty) {
			this.totalDuration();
		}
		return this.totalTime(value > this._duration ? this._duration : value, suppressEvents);
	};

	p.totalTime = function (time, suppressEvents, uncapped) {
		if (!_tickerActive) {
			_ticker.wake();
		}
		if (!arguments.length) {
			return this._totalTime;
		}
		if (this._timeline) {
			if (time < 0 && !uncapped) {
				time += this.totalDuration();
			}
			if (this._timeline.smoothChildTiming) {
				if (this._dirty) {
					this.totalDuration();
				}
				var totalDuration = this._totalDuration,
				    tl = this._timeline;
				if (time > totalDuration && !uncapped) {
					time = totalDuration;
				}
				this._startTime = (this._paused ? this._pauseTime : tl._time) - (!this._reversed ? time : totalDuration - time) / this._timeScale;
				if (!tl._dirty) {
					//for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
					this._uncache(false);
				}
				//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
				if (tl._timeline) {
					while (tl._timeline) {
						if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
							tl.totalTime(tl._totalTime, true);
						}
						tl = tl._timeline;
					}
				}
			}
			if (this._gc) {
				this._enabled(true, false);
			}
			if (this._totalTime !== time || this._duration === 0) {
				if (_lazyTweens.length) {
					_lazyRender();
				}
				this.render(time, suppressEvents, false);
				if (_lazyTweens.length) {
					//in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
					_lazyRender();
				}
			}
		}
		return this;
	};

	p.progress = p.totalProgress = function (value, suppressEvents) {
		var duration = this.duration();
		return !arguments.length ? duration ? this._time / duration : this.ratio : this.totalTime(duration * value, suppressEvents);
	};

	p.startTime = function (value) {
		if (!arguments.length) {
			return this._startTime;
		}
		if (value !== this._startTime) {
			this._startTime = value;
			if (this.timeline) if (this.timeline._sortChildren) {
				this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
			}
		}
		return this;
	};

	p.endTime = function (includeRepeats) {
		return this._startTime + (includeRepeats != false ? this.totalDuration() : this.duration()) / this._timeScale;
	};

	p.timeScale = function (value) {
		if (!arguments.length) {
			return this._timeScale;
		}
		var pauseTime, t;
		value = value || _tinyNum; //can't allow zero because it'll throw the math off
		if (this._timeline && this._timeline.smoothChildTiming) {
			pauseTime = this._pauseTime;
			t = pauseTime || pauseTime === 0 ? pauseTime : this._timeline.totalTime();
			this._startTime = t - (t - this._startTime) * this._timeScale / value;
		}
		this._timeScale = value;
		t = this.timeline;
		while (t && t.timeline) {
			//must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
			t._dirty = true;
			t.totalDuration();
			t = t.timeline;
		}
		return this;
	};

	p.reversed = function (value) {
		if (!arguments.length) {
			return this._reversed;
		}
		if (value != this._reversed) {
			this._reversed = value;
			this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
		}
		return this;
	};

	p.paused = function (value) {
		if (!arguments.length) {
			return this._paused;
		}
		var tl = this._timeline,
		    raw,
		    elapsed;
		if (value != this._paused) if (tl) {
			if (!_tickerActive && !value) {
				_ticker.wake();
			}
			raw = tl.rawTime();
			elapsed = raw - this._pauseTime;
			if (!value && tl.smoothChildTiming) {
				this._startTime += elapsed;
				this._uncache(false);
			}
			this._pauseTime = value ? raw : null;
			this._paused = value;
			this._active = this.isActive();
			if (!value && elapsed !== 0 && this._initted && this.duration()) {
				raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
				this.render(raw, raw === this._totalTime, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
			}
		}
		if (this._gc && !value) {
			this._enabled(true, false);
		}
		return this;
	};

	/*
  * ----------------------------------------------------------------
  * SimpleTimeline
  * ----------------------------------------------------------------
  */
	var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
		Animation.call(this, 0, vars);
		this.autoRemoveChildren = this.smoothChildTiming = true;
	});

	p = SimpleTimeline.prototype = new Animation();
	p.constructor = SimpleTimeline;
	p.kill()._gc = false;
	p._first = p._last = p._recent = null;
	p._sortChildren = false;

	p.add = p.insert = function (child, position, align, stagger) {
		var prevTween, st;
		child._startTime = Number(position || 0) + child._delay;
		if (child._paused) if (this !== child._timeline) {
			//we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
			child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
		}
		if (child.timeline) {
			child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
		}
		child.timeline = child._timeline = this;
		if (child._gc) {
			child._enabled(true, true);
		}
		prevTween = this._last;
		if (this._sortChildren) {
			st = child._startTime;
			while (prevTween && prevTween._startTime > st) {
				prevTween = prevTween._prev;
			}
		}
		if (prevTween) {
			child._next = prevTween._next;
			prevTween._next = child;
		} else {
			child._next = this._first;
			this._first = child;
		}
		if (child._next) {
			child._next._prev = child;
		} else {
			this._last = child;
		}
		child._prev = prevTween;
		this._recent = child;
		if (this._timeline) {
			this._uncache(true);
		}
		return this;
	};

	p._remove = function (tween, skipDisable) {
		if (tween.timeline === this) {
			if (!skipDisable) {
				tween._enabled(false, true);
			}

			if (tween._prev) {
				tween._prev._next = tween._next;
			} else if (this._first === tween) {
				this._first = tween._next;
			}
			if (tween._next) {
				tween._next._prev = tween._prev;
			} else if (this._last === tween) {
				this._last = tween._prev;
			}
			tween._next = tween._prev = tween.timeline = null;
			if (tween === this._recent) {
				this._recent = this._last;
			}

			if (this._timeline) {
				this._uncache(true);
			}
		}
		return this;
	};

	p.render = function (time, suppressEvents, force) {
		var tween = this._first,
		    next;
		this._totalTime = this._time = this._rawPrevTime = time;
		while (tween) {
			next = tween._next; //record it here because the value could change after rendering...
			if (tween._active || time >= tween._startTime && !tween._paused && !tween._gc) {
				if (!tween._reversed) {
					tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
				} else {
					tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
				}
			}
			tween = next;
		}
	};

	p.rawTime = function () {
		if (!_tickerActive) {
			_ticker.wake();
		}
		return this._totalTime;
	};

	/*
  * ----------------------------------------------------------------
  * TweenLite
  * ----------------------------------------------------------------
  */
	var TweenLite = _class("TweenLite", function (target, duration, vars) {
		Animation.call(this, duration, vars);
		this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

		if (target == null) {
			throw "Cannot tween a null target.";
		}

		this.target = target = typeof target !== "string" ? target : TweenLite.selector(target) || target;

		var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
		    overwrite = this.vars.overwrite,
		    i,
		    targ,
		    targets;

		this._overwrite = overwrite = overwrite == null ? _overwriteLookup[TweenLite.defaultOverwrite] : typeof overwrite === "number" ? overwrite >> 0 : _overwriteLookup[overwrite];

		if ((isSelector || target instanceof Array || target.push && _isArray(target)) && typeof target[0] !== "number") {
			this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
			this._propLookup = [];
			this._siblings = [];
			for (i = 0; i < targets.length; i++) {
				targ = targets[i];
				if (!targ) {
					targets.splice(i--, 1);
					continue;
				} else if (typeof targ === "string") {
					targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
					if (typeof targ === "string") {
						targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
					}
					continue;
				} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType)) {
					//in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
					targets.splice(i--, 1);
					this._targets = targets = targets.concat(_slice(targ));
					continue;
				}
				this._siblings[i] = _register(targ, this, false);
				if (overwrite === 1) if (this._siblings[i].length > 1) {
					_applyOverwrite(targ, this, null, 1, this._siblings[i]);
				}
			}
		} else {
			this._propLookup = {};
			this._siblings = _register(target, this, false);
			if (overwrite === 1) if (this._siblings.length > 1) {
				_applyOverwrite(target, this, null, 1, this._siblings);
			}
		}
		if (this.vars.immediateRender || duration === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
			this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
			this.render(Math.min(0, -this._delay)); //in case delay is negative
		}
	}, true),
	    _isSelector = function _isSelector(v) {
		return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
	},
	    _autoCSS = function _autoCSS(vars, target) {
		var css = {},
		    p;
		for (p in vars) {
			if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
				//note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
				css[p] = vars[p];
				delete vars[p];
			}
		}
		vars.css = css;
	};

	p = TweenLite.prototype = new Animation();
	p.constructor = TweenLite;
	p.kill()._gc = false;

	//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

	p.ratio = 0;
	p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
	p._notifyPluginsOfEnabled = p._lazy = false;

	TweenLite.version = "2.1.2";
	TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
	TweenLite.defaultOverwrite = "auto";
	TweenLite.ticker = _ticker;
	TweenLite.autoSleep = 120;
	TweenLite.lagSmoothing = function (threshold, adjustedLag) {
		_ticker.lagSmoothing(threshold, adjustedLag);
	};

	TweenLite.selector = window.$ || window.jQuery || function (e) {
		var selector = window.$ || window.jQuery;
		if (selector) {
			TweenLite.selector = selector;
			return selector(e);
		}
		if (!_doc) {
			//in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
			_doc = window.document;
		}
		return !_doc ? e : _doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
	};

	var _lazyTweens = [],
	    _lazyLookup = {},
	    _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _relExp = /[\+-]=-?[\.\d]/,

	//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
	_setRatio = function _setRatio(v) {
		var pt = this._firstPT,
		    min = 0.000001,
		    val;
		while (pt) {
			val = !pt.blob ? pt.c * v + pt.s : v === 1 && this.end != null ? this.end : v ? this.join("") : this.start;
			if (pt.m) {
				val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
			} else if (val < min) if (val > -min && !pt.blob) {
				//prevents issues with converting very small numbers to strings in the browser
				val = 0;
			}
			if (!pt.f) {
				pt.t[pt.p] = val;
			} else if (pt.fp) {
				pt.t[pt.p](pt.fp, val);
			} else {
				pt.t[pt.p](val);
			}
			pt = pt._next;
		}
	},
	    _blobRound = function _blobRound(v) {
		return (v * 1000 | 0) / 1000 + "";
	},

	//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
	_blobDif = function _blobDif(start, end, filter, pt) {
		var a = [],
		    charIndex = 0,
		    s = "",
		    color = 0,
		    startNums,
		    endNums,
		    num,
		    i,
		    l,
		    nonNumbers,
		    currentNum;
		a.start = start;
		a.end = end;
		start = a[0] = start + ""; //ensure values are strings
		end = a[1] = end + "";
		if (filter) {
			filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
			start = a[0];
			end = a[1];
		}
		a.length = 0;
		startNums = start.match(_numbersExp) || [];
		endNums = end.match(_numbersExp) || [];
		if (pt) {
			pt._next = null;
			pt.blob = 1;
			a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
		}
		l = endNums.length;
		for (i = 0; i < l; i++) {
			currentNum = endNums[i];
			nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
			s += nonNumbers || !i ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
			charIndex += nonNumbers.length;
			if (color) {
				//sense rgba() values and round them.
				color = (color + 1) % 5;
			} else if (nonNumbers.substr(-5) === "rgba(") {
				color = 1;
			}
			if (currentNum === startNums[i] || startNums.length <= i) {
				s += currentNum;
			} else {
				if (s) {
					a.push(s);
					s = "";
				}
				num = parseFloat(startNums[i]);
				a.push(num);
				a._firstPT = { _next: a._firstPT, t: a, p: a.length - 1, s: num, c: (currentNum.charAt(1) === "=" ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0, f: 0, m: color && color < 4 ? Math.round : _blobRound }; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
				//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
			}
			charIndex += currentNum.length;
		}
		s += end.substr(charIndex);
		if (s) {
			a.push(s);
		}
		a.setRatio = _setRatio;
		if (_relExp.test(end)) {
			//if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
			a.end = null;
		}
		return a;
	},

	//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
	_addPropTween = function _addPropTween(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
		if (typeof end === "function") {
			end = end(index || 0, target);
		}
		var type = typeof target[prop],
		    getterName = type !== "function" ? "" : prop.indexOf("set") || typeof target["get" + prop.substr(3)] !== "function" ? prop : "get" + prop.substr(3),
		    s = start !== "get" ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
		    isRelative = typeof end === "string" && end.charAt(1) === "=",
		    pt = { t: target, p: prop, s: s, f: type === "function", pg: 0, n: overwriteProp || prop, m: !mod ? 0 : typeof mod === "function" ? mod : Math.round, pr: 0, c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0 },
		    blob;

		if (typeof s !== "number" || typeof end !== "number" && !isRelative) {
			if (funcParam || isNaN(s) || !isRelative && isNaN(end) || typeof s === "boolean" || typeof end === "boolean") {
				//a blob (string that has multiple numbers in it)
				pt.fp = funcParam;
				blob = _blobDif(s, isRelative ? parseFloat(pt.s) + pt.c + (pt.s + "").replace(/[0-9\-\.]/g, "") : end, stringFilter || TweenLite.defaultStringFilter, pt);
				pt = { t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0 }; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
			} else {
				pt.s = parseFloat(s);
				if (!isRelative) {
					pt.c = parseFloat(end) - pt.s || 0;
				}
			}
		}
		if (pt.c) {
			//only add it to the linked list if there's a change.
			if (pt._next = this._firstPT) {
				pt._next._prev = pt;
			}
			this._firstPT = pt;
			return pt;
		}
	},
	    _internals = TweenLite._internals = { isArray: _isArray, isSelector: _isSelector, lazyTweens: _lazyTweens, blobDif: _blobDif },
	    //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
	_plugins = TweenLite._plugins = {},
	    _tweenLookup = _internals.tweenLookup = {},
	    _tweenLookupNum = 0,
	    _reservedProps = _internals.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 },
	    _overwriteLookup = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
	    _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
	    _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
	    _nextGCFrame = 30,
	    _lazyRender = _internals.lazyRender = function () {
		var l = _lazyTweens.length,
		    i,
		    tween;
		_lazyLookup = {};
		for (i = 0; i < l; i++) {
			tween = _lazyTweens[i];
			if (tween && tween._lazy !== false) {
				tween.render(tween._lazy[0], tween._lazy[1], true);
				tween._lazy = false;
			}
		}
		_lazyTweens.length = 0;
	};

	_rootTimeline._startTime = _ticker.time;
	_rootFramesTimeline._startTime = _ticker.frame;
	_rootTimeline._active = _rootFramesTimeline._active = true;
	setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

	Animation._updateRoot = TweenLite.render = function () {
		var i, a, p;
		if (_lazyTweens.length) {
			//if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
			_lazyRender();
		}
		_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
		_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
		if (_lazyTweens.length) {
			_lazyRender();
		}
		if (_ticker.frame >= _nextGCFrame) {
			//dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
			_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
			for (p in _tweenLookup) {
				a = _tweenLookup[p].tweens;
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc) {
						a.splice(i, 1);
					}
				}
				if (a.length === 0) {
					delete _tweenLookup[p];
				}
			}
			//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
			p = _rootTimeline._first;
			if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
				while (p && p._paused) {
					p = p._next;
				}
				if (!p) {
					_ticker.sleep();
				}
			}
		}
	};

	_ticker.addEventListener("tick", Animation._updateRoot);

	var _register = function _register(target, tween, scrub) {
		var id = target._gsTweenID,
		    a,
		    i;
		if (!_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)]) {
			_tweenLookup[id] = { target: target, tweens: [] };
		}
		if (tween) {
			a = _tweenLookup[id].tweens;
			a[i = a.length] = tween;
			if (scrub) {
				while (--i > -1) {
					if (a[i] === tween) {
						a.splice(i, 1);
					}
				}
			}
		}
		return _tweenLookup[id].tweens;
	},
	    _onOverwrite = function _onOverwrite(overwrittenTween, overwritingTween, target, killedProps) {
		var func = overwrittenTween.vars.onOverwrite,
		    r1,
		    r2;
		if (func) {
			r1 = func(overwrittenTween, overwritingTween, target, killedProps);
		}
		func = TweenLite.onOverwrite;
		if (func) {
			r2 = func(overwrittenTween, overwritingTween, target, killedProps);
		}
		return r1 !== false && r2 !== false;
	},
	    _applyOverwrite = function _applyOverwrite(target, tween, props, mode, siblings) {
		var i, changed, curTween, l;
		if (mode === 1 || mode >= 4) {
			l = siblings.length;
			for (i = 0; i < l; i++) {
				if ((curTween = siblings[i]) !== tween) {
					if (!curTween._gc) {
						if (curTween._kill(null, target, tween)) {
							changed = true;
						}
					}
				} else if (mode === 5) {
					break;
				}
			}
			return changed;
		}
		//NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
		var startTime = tween._startTime + _tinyNum,
		    overlaps = [],
		    oCount = 0,
		    zeroDur = tween._duration === 0,
		    globalStart;
		i = siblings.length;
		while (--i > -1) {
			if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
				//ignore
			} else if (curTween._timeline !== tween._timeline) {
				globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
				if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
					overlaps[oCount++] = curTween;
				}
			} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
				overlaps[oCount++] = curTween;
			}
		}

		i = oCount;
		while (--i > -1) {
			curTween = overlaps[i];
			l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
			if (mode === 2) if (curTween._kill(props, target, tween)) {
				changed = true;
			}
			if (mode !== 2 || !curTween._firstPT && curTween._initted && l) {
				if (mode !== 2 && !_onOverwrite(curTween, tween)) {
					continue;
				}
				if (curTween._enabled(false, false)) {
					//if all property tweens have been overwritten, kill the tween.
					changed = true;
				}
			}
		}
		return changed;
	},
	    _checkOverlap = function _checkOverlap(tween, reference, zeroDur) {
		var tl = tween._timeline,
		    ts = tl._timeScale,
		    t = tween._startTime;
		while (tl._timeline) {
			t += tl._startTime;
			ts *= tl._timeScale;
			if (tl._paused) {
				return -100;
			}
			tl = tl._timeline;
		}
		t /= ts;
		return t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
	};

	//---- TweenLite instance methods -----------------------------------------------------------------------------

	p._init = function () {
		var v = this.vars,
		    op = this._overwrittenProps,
		    dur = this._duration,
		    immediate = !!v.immediateRender,
		    ease = v.ease,
		    startAt = this._startAt,
		    i,
		    initPlugins,
		    pt,
		    p,
		    startVars,
		    l;
		if (v.startAt) {
			if (startAt) {
				startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
				startAt.kill();
			}
			startVars = {};
			for (p in v.startAt) {
				//copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
				startVars[p] = v.startAt[p];
			}
			startVars.data = "isStart";
			startVars.overwrite = false;
			startVars.immediateRender = true;
			startVars.lazy = immediate && v.lazy !== false;
			startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
			startVars.onUpdate = v.onUpdate;
			startVars.onUpdateParams = v.onUpdateParams;
			startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
			this._startAt = TweenLite.to(this.target || {}, 0, startVars);
			if (immediate) {
				if (this._time > 0) {
					this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
				} else if (dur !== 0) {
					return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
				}
			}
		} else if (v.runBackwards && dur !== 0) {
			//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
			if (startAt) {
				startAt.render(-1, true);
				startAt.kill();
				this._startAt = null;
			} else {
				if (this._time !== 0) {
					//in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
					immediate = false;
				}
				pt = {};
				for (p in v) {
					//copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
					if (!_reservedProps[p] || p === "autoCSS") {
						pt[p] = v[p];
					}
				}
				pt.overwrite = 0;
				pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
				pt.lazy = immediate && v.lazy !== false;
				pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
				this._startAt = TweenLite.to(this.target, 0, pt);
				if (!immediate) {
					this._startAt._init(); //ensures that the initial values are recorded
					this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
					if (this.vars.immediateRender) {
						this._startAt = null;
					}
				} else if (this._time === 0) {
					return;
				}
			}
		}
		this._ease = ease = !ease ? TweenLite.defaultEase : ease instanceof Ease ? ease : typeof ease === "function" ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
		if (v.easeParams instanceof Array && ease.config) {
			this._ease = ease.config.apply(ease, v.easeParams);
		}
		this._easeType = this._ease._type;
		this._easePower = this._ease._power;
		this._firstPT = null;

		if (this._targets) {
			l = this._targets.length;
			for (i = 0; i < l; i++) {
				if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
					initPlugins = true;
				}
			}
		} else {
			initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
		}

		if (initPlugins) {
			TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
		}
		if (op) if (!this._firstPT) if (typeof this.target !== "function") {
			//if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
			this._enabled(false, false);
		}
		if (v.runBackwards) {
			pt = this._firstPT;
			while (pt) {
				pt.s += pt.c;
				pt.c = -pt.c;
				pt = pt._next;
			}
		}
		this._onUpdate = v.onUpdate;
		this._initted = true;
	};

	p._initProps = function (target, propLookup, siblings, overwrittenProps, index) {
		var p, i, initPlugins, plugin, pt, v;
		if (target == null) {
			return false;
		}
		if (_lazyLookup[target._gsTweenID]) {
			_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
		}

		if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) {
			//it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
			_autoCSS(this.vars, target);
		}
		for (p in this.vars) {
			v = this.vars[p];
			if (_reservedProps[p]) {
				if (v) if (v instanceof Array || v.push && _isArray(v)) if (v.join("").indexOf("{self}") !== -1) {
					this.vars[p] = v = this._swapSelfInParams(v, this);
				}
			} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

				//t - target 		[object]
				//p - property 		[string]
				//s - start			[number]
				//c - change		[number]
				//f - isFunction	[boolean]
				//n - name			[string]
				//pg - isPlugin 	[boolean]
				//pr - priority		[number]
				//m - mod           [function | 0]
				this._firstPT = pt = { _next: this._firstPT, t: plugin, p: "setRatio", s: 0, c: 1, f: 1, n: p, pg: 1, pr: plugin._priority, m: 0 };
				i = plugin._overwriteProps.length;
				while (--i > -1) {
					propLookup[plugin._overwriteProps[i]] = this._firstPT;
				}
				if (plugin._priority || plugin._onInitAllProps) {
					initPlugins = true;
				}
				if (plugin._onDisable || plugin._onEnable) {
					this._notifyPluginsOfEnabled = true;
				}
				if (pt._next) {
					pt._next._prev = pt;
				}
			} else {
				propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
			}
		}

		if (overwrittenProps) if (this._kill(overwrittenProps, target)) {
			//another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
			return this._initProps(target, propLookup, siblings, overwrittenProps, index);
		}
		if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
			this._kill(propLookup, target);
			return this._initProps(target, propLookup, siblings, overwrittenProps, index);
		}
		if (this._firstPT) if (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) {
			//zero duration tweens don't lazy render by default; everything else does.
			_lazyLookup[target._gsTweenID] = true;
		}
		return initPlugins;
	};

	p.render = function (time, suppressEvents, force) {
		var self = this,
		    prevTime = self._time,
		    duration = self._duration,
		    prevRawPrevTime = self._rawPrevTime,
		    isComplete,
		    callback,
		    pt,
		    rawPrevTime;
		if (time >= duration - _tinyNum && time >= 0) {
			//to work around occasional floating point math artifacts.
			self._totalTime = self._time = duration;
			self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
			if (!self._reversed) {
				isComplete = true;
				callback = "onComplete";
				force = force || self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
			}
			if (duration === 0) if (self._initted || !self.vars.lazy || force) {
				//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
				if (self._startTime === self._timeline._duration) {
					//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
					time = 0;
				}
				if (prevRawPrevTime < 0 || time <= 0 && time >= -_tinyNum || prevRawPrevTime === _tinyNum && self.data !== "isPause") if (prevRawPrevTime !== time) {
					//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
					force = true;
					if (prevRawPrevTime > _tinyNum) {
						callback = "onReverseComplete";
					}
				}
				self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
			}
		} else if (time < _tinyNum) {
			//to work around occasional floating point math artifacts, round super small values to 0.
			self._totalTime = self._time = 0;
			self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
			if (prevTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
				callback = "onReverseComplete";
				isComplete = self._reversed;
			}
			if (time > -_tinyNum) {
				time = 0;
			} else if (time < 0) {
				self._active = false;
				if (duration === 0) if (self._initted || !self.vars.lazy || force) {
					//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
						force = true;
					}
					self._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}
			}
			if (!self._initted || self._startAt && self._startAt.progress()) {
				//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
				force = true;
			}
		} else {
			self._totalTime = self._time = time;

			if (self._easeType) {
				var r = time / duration,
				    type = self._easeType,
				    pow = self._easePower;
				if (type === 1 || type === 3 && r >= 0.5) {
					r = 1 - r;
				}
				if (type === 3) {
					r *= 2;
				}
				if (pow === 1) {
					r *= r;
				} else if (pow === 2) {
					r *= r * r;
				} else if (pow === 3) {
					r *= r * r * r;
				} else if (pow === 4) {
					r *= r * r * r * r;
				}
				self.ratio = type === 1 ? 1 - r : type === 2 ? r : time / duration < 0.5 ? r / 2 : 1 - r / 2;
			} else {
				self.ratio = self._ease.getRatio(time / duration);
			}
		}

		if (self._time === prevTime && !force) {
			return;
		} else if (!self._initted) {
			self._init();
			if (!self._initted || self._gc) {
				//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
				return;
			} else if (!force && self._firstPT && (self.vars.lazy !== false && self._duration || self.vars.lazy && !self._duration)) {
				self._time = self._totalTime = prevTime;
				self._rawPrevTime = prevRawPrevTime;
				_lazyTweens.push(self);
				self._lazy = [time, suppressEvents];
				return;
			}
			//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
			if (self._time && !isComplete) {
				self.ratio = self._ease.getRatio(self._time / duration);
			} else if (isComplete && self._ease._calcEnd) {
				self.ratio = self._ease.getRatio(self._time === 0 ? 0 : 1);
			}
		}
		if (self._lazy !== false) {
			//in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
			self._lazy = false;
		}
		if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
			self._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
		}
		if (prevTime === 0) {
			if (self._startAt) {
				if (time >= 0) {
					self._startAt.render(time, true, force);
				} else if (!callback) {
					callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
				}
			}
			if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
				self._callback("onStart");
			}
		}
		pt = self._firstPT;
		while (pt) {
			if (pt.f) {
				pt.t[pt.p](pt.c * self.ratio + pt.s);
			} else {
				pt.t[pt.p] = pt.c * self.ratio + pt.s;
			}
			pt = pt._next;
		}

		if (self._onUpdate) {
			if (time < 0) if (self._startAt && time !== -0.0001) {
				//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
				self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
			}
			if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
				self._callback("onUpdate");
			}
		}
		if (callback) if (!self._gc || force) {
			//check _gc because there's a chance that kill() could be called in an onUpdate
			if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) {
				//-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
				self._startAt.render(time, true, force);
			}
			if (isComplete) {
				if (self._timeline.autoRemoveChildren) {
					self._enabled(false, false);
				}
				self._active = false;
			}
			if (!suppressEvents && self.vars[callback]) {
				self._callback(callback);
			}
			if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
				//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
				self._rawPrevTime = 0;
			}
		}
	};

	p._kill = function (vars, target, overwritingTween) {
		if (vars === "all") {
			vars = null;
		}
		if (vars == null) if (target == null || target === this.target) {
			this._lazy = false;
			return this._enabled(false, false);
		}
		target = typeof target !== "string" ? target || this._targets || this.target : TweenLite.selector(target) || target;
		var simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline,
		    firstPT = this._firstPT,
		    i,
		    overwrittenProps,
		    p,
		    pt,
		    propLookup,
		    changed,
		    killProps,
		    record,
		    killed;
		if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
			i = target.length;
			while (--i > -1) {
				if (this._kill(vars, target[i], overwritingTween)) {
					changed = true;
				}
			}
		} else {
			if (this._targets) {
				i = this._targets.length;
				while (--i > -1) {
					if (target === this._targets[i]) {
						propLookup = this._propLookup[i] || {};
						this._overwrittenProps = this._overwrittenProps || [];
						overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
						break;
					}
				}
			} else if (target !== this.target) {
				return false;
			} else {
				propLookup = this._propLookup;
				overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
			}

			if (propLookup) {
				killProps = vars || propLookup;
				record = vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof vars !== "object" || !vars._tempKill); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
				if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
					for (p in killProps) {
						if (propLookup[p]) {
							if (!killed) {
								killed = [];
							}
							killed.push(p);
						}
					}
					if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
						//if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
						return false;
					}
				}

				for (p in killProps) {
					if (pt = propLookup[p]) {
						if (simultaneousOverwrite) {
							//if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
							if (pt.f) {
								pt.t[pt.p](pt.s);
							} else {
								pt.t[pt.p] = pt.s;
							}
							changed = true;
						}
						if (pt.pg && pt.t._kill(killProps)) {
							changed = true; //some plugins need to be notified so they can perform cleanup tasks first
						}
						if (!pt.pg || pt.t._overwriteProps.length === 0) {
							if (pt._prev) {
								pt._prev._next = pt._next;
							} else if (pt === this._firstPT) {
								this._firstPT = pt._next;
							}
							if (pt._next) {
								pt._next._prev = pt._prev;
							}
							pt._next = pt._prev = null;
						}
						delete propLookup[p];
					}
					if (record) {
						overwrittenProps[p] = 1;
					}
				}
				if (!this._firstPT && this._initted && firstPT) {
					//if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
					this._enabled(false, false);
				}
			}
		}
		return changed;
	};

	p.invalidate = function () {
		if (this._notifyPluginsOfEnabled) {
			TweenLite._onPluginEvent("_onDisable", this);
		}
		var t = this._time;
		this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
		this._notifyPluginsOfEnabled = this._active = this._lazy = false;
		this._propLookup = this._targets ? {} : [];
		Animation.prototype.invalidate.call(this);
		if (this.vars.immediateRender) {
			this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
			this.render(t, false, this.vars.lazy !== false);
		}
		return this;
	};

	p._enabled = function (enabled, ignoreTimeline) {
		if (!_tickerActive) {
			_ticker.wake();
		}
		if (enabled && this._gc) {
			var targets = this._targets,
			    i;
			if (targets) {
				i = targets.length;
				while (--i > -1) {
					this._siblings[i] = _register(targets[i], this, true);
				}
			} else {
				this._siblings = _register(this.target, this, true);
			}
		}
		Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
		if (this._notifyPluginsOfEnabled) if (this._firstPT) {
			return TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
		}
		return false;
	};

	//----TweenLite static methods -----------------------------------------------------

	TweenLite.to = function (target, duration, vars) {
		return new TweenLite(target, duration, vars);
	};

	TweenLite.from = function (target, duration, vars) {
		vars.runBackwards = true;
		vars.immediateRender = vars.immediateRender != false;
		return new TweenLite(target, duration, vars);
	};

	TweenLite.fromTo = function (target, duration, fromVars, toVars) {
		toVars.startAt = fromVars;
		toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
		return new TweenLite(target, duration, toVars);
	};

	TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
		return new TweenLite(callback, 0, { delay: delay, onComplete: callback, onCompleteParams: params, callbackScope: scope, onReverseComplete: callback, onReverseCompleteParams: params, immediateRender: false, lazy: false, useFrames: useFrames, overwrite: 0 });
	};

	TweenLite.set = function (target, vars) {
		return new TweenLite(target, 0, vars);
	};

	TweenLite.getTweensOf = function (target, onlyActive) {
		if (target == null) {
			return [];
		}
		target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
		var i, a, j, t;
		if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
			i = target.length;
			a = [];
			while (--i > -1) {
				a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
			}
			i = a.length;
			//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
			while (--i > -1) {
				t = a[i];
				j = i;
				while (--j > -1) {
					if (t === a[j]) {
						a.splice(i, 1);
					}
				}
			}
		} else if (target._gsTweenID) {
			a = _register(target).concat();
			i = a.length;
			while (--i > -1) {
				if (a[i]._gc || onlyActive && !a[i].isActive()) {
					a.splice(i, 1);
				}
			}
		}
		return a || [];
	};

	TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
		if (typeof onlyActive === "object") {
			vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
			onlyActive = false;
		}
		var a = TweenLite.getTweensOf(target, onlyActive),
		    i = a.length;
		while (--i > -1) {
			a[i]._kill(vars, target);
		}
	};

	/*
  * ----------------------------------------------------------------
  * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
  * ----------------------------------------------------------------
  */
	var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
		this._overwriteProps = (props || "").split(",");
		this._propName = this._overwriteProps[0];
		this._priority = priority || 0;
		this._super = TweenPlugin.prototype;
	}, true);

	p = TweenPlugin.prototype;
	TweenPlugin.version = "1.19.0";
	TweenPlugin.API = 2;
	p._firstPT = null;
	p._addTween = _addPropTween;
	p.setRatio = _setRatio;

	p._kill = function (lookup) {
		var a = this._overwriteProps,
		    pt = this._firstPT,
		    i;
		if (lookup[this._propName] != null) {
			this._overwriteProps = [];
		} else {
			i = a.length;
			while (--i > -1) {
				if (lookup[a[i]] != null) {
					a.splice(i, 1);
				}
			}
		}
		while (pt) {
			if (lookup[pt.n] != null) {
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
					pt._prev = null;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
				}
			}
			pt = pt._next;
		}
		return false;
	};

	p._mod = p._roundProps = function (lookup) {
		var pt = this._firstPT,
		    val;
		while (pt) {
			val = lookup[this._propName] || pt.n != null && lookup[pt.n.split(this._propName + "_").join("")];
			if (val && typeof val === "function") {
				//some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
				if (pt.f === 2) {
					pt.t._applyPT.m = val;
				} else {
					pt.m = val;
				}
			}
			pt = pt._next;
		}
	};

	TweenLite._onPluginEvent = function (type, tween) {
		var pt = tween._firstPT,
		    changed,
		    pt2,
		    first,
		    last,
		    next;
		if (type === "_onInitAllProps") {
			//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
			while (pt) {
				next = pt._next;
				pt2 = first;
				while (pt2 && pt2.pr > pt.pr) {
					pt2 = pt2._next;
				}
				if (pt._prev = pt2 ? pt2._prev : last) {
					pt._prev._next = pt;
				} else {
					first = pt;
				}
				if (pt._next = pt2) {
					pt2._prev = pt;
				} else {
					last = pt;
				}
				pt = next;
			}
			pt = tween._firstPT = first;
		}
		while (pt) {
			if (pt.pg) if (typeof pt.t[type] === "function") if (pt.t[type]()) {
				changed = true;
			}
			pt = pt._next;
		}
		return changed;
	};

	TweenPlugin.activate = function (plugins) {
		var i = plugins.length;
		while (--i > -1) {
			if (plugins[i].API === TweenPlugin.API) {
				_plugins[new plugins[i]()._propName] = plugins[i];
			}
		}
		return true;
	};

	//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
	_gsDefine.plugin = function (config) {
		if (!config || !config.propName || !config.init || !config.API) {
			throw "illegal plugin definition.";
		}
		var propName = config.propName,
		    priority = config.priority || 0,
		    overwriteProps = config.overwriteProps,
		    map = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
		    Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
			TweenPlugin.call(this, propName, priority);
			this._overwriteProps = overwriteProps || [];
		}, config.global === true),
		    p = Plugin.prototype = new TweenPlugin(propName),
		    prop;
		p.constructor = Plugin;
		Plugin.API = config.API;
		for (prop in map) {
			if (typeof config[prop] === "function") {
				p[map[prop]] = config[prop];
			}
		}
		Plugin.version = config.version;
		TweenPlugin.activate([Plugin]);
		return Plugin;
	};

	//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
	a = window._gsQueue;
	if (a) {
		for (i = 0; i < a.length; i++) {
			a[i]();
		}
		for (p in _defLookup) {
			if (!_defLookup[p].func) {
				window.console.log("GSAP encountered missing dependency: " + p);
			}
		}
	}

	_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

	return TweenLite;
}(_gsScope, "TweenLite");

var globals = _gsScope.GreenSockGlobals;
var nonGlobals = globals.com.greensock;

var SimpleTimeline = nonGlobals.core.SimpleTimeline;
var Animation = nonGlobals.core.Animation;
var Ease = globals.Ease;
var Linear = globals.Linear;
var Power0 = Linear;
var Power1 = globals.Power1;
var Power2 = globals.Power2;
var Power3 = globals.Power3;
var Power4 = globals.Power4;
var TweenPlugin = globals.TweenPlugin;
var EventDispatcher = nonGlobals.events.EventDispatcher;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("pv+l")(module)))

/***/ }),

/***/ "XbF1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollManager = undefined;

var _windowScrollManager = __webpack_require__("eiQN");

var _windowScrollManager2 = _interopRequireDefault(_windowScrollManager);

var _Plx = __webpack_require__("qohj");

var _Plx2 = _interopRequireDefault(_Plx);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _Plx2.default;
exports.ScrollManager = _windowScrollManager2.default;

/***/ }),

/***/ "YkeT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"splash":"splash__2UqTj"};

/***/ }),

/***/ "ZGUF":
/***/ (function(module, exports) {

module.exports = {"menu":{"about":"about","work":"work","contact me":"contact me","resume":"resume"},"splash":{},"about":{"headline":"About","bodyCopy":"Hi! I'm Bill Pearce and I'm a Creative Technologist (WTF is a creative technologist). I've been working at creative agencies and tech companies for about thirteen years, wearing hats ranging from Art Director to Front-End Developer. Most recently, I worked at an internal creative agency inside Amazon, providing product and campaign solutions or clients. I split my time at Amazon working as the prototyping arm of a UX research team and as the technical guide in the advertising creative process. I can fit anywhere in the process of crafting user-centric products (UX, design, creative ideation, prototyping, development) but am most comfortable as the soft-technical arm of a small creative team. Whatever you're making, I can help you make it better!","images":{}},"resume":{"url":""},"work":{"tags":["web_development","ideation","chatbot","design","voice","ux","conversational_ux","prototyping","technical_consulting","ui_design","360_video","ar","art_direction","chatbot","development","hand_lettering","logo_design","mobile_development"],"projects":[{"visible":true,"name":"dunkirk","fullName":"Destination: Dunkirk","client":"Warner Brothers","agency":"Amazon Advertising","bodyCopy":"Destination Dunkirk is (was) a series of three choose-your-own-adventure-style episodic Alexa games. I was part of a team of three creatives / technologists and we:1)Were presented with a business problem: How do we educated users about the buildup to the story of the film Dunkirk 2) Ideated, pitched ideas to Christopher Nolan's direct team 3) Built user flow diagrams, (the copywriter) wrote the script, and oversaw the production (including illustrations, choosing voice talent, and technical direction)","thumbNail":"assets/media/work/thumbnails/dunkirk.jpg","images":[{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/dunkirk/dunkirk-01.jpg"},{"text":"A Voice User Interface doc from production.","url":"assets/media/content/dunkirk/dunkirk-02.jpg","cropped":"assets/media/content/dunkirk/dunkirk-02-cropped.jpg"}],"videos":[{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/dunkirk/dunkirk-01.mp4"}],"links":[{"text":"press","link":"https://www.makeuseof.com/tag/interactive-stories-amazon-echo/"},{"text":"press","link":"https://screenrant.com/dunkirk-movie-amazon-echo-alexa-skill/"},{"text":"interview","link":"https://soundcloud.com/richard-john-wolfenden/transmedia-storytelling-destination-dunkirk-the-alexa-skill"}],"roles":["ideation","ux","technical consulting","prototyping"],"type":["Alexa Skill"],"tags":["ideation","ux","technical_consulting","prototyping","voice","conversational_ux","chatbot"]},{"visible":true,"name":"spiderman","fullName":"Spider-Man Homecoming","client":"Sony","agency":"Amazon Advertising","bodyCopy":"Spiderman Homecoming is(was) an Alexa Skill to build buzz for the film Spiderman Homecoming. Pointed at superfans, the skill dropped a new piece of content daily. The content could be a behind the scenes interview, a joke, or a trivia fact. A simple skill with a simple goal of bringing users back every day and getting them to think Spiderman.","thumbNail":"assets/media/work/thumbnails/spiderman.jpg","images":[{"text":"Spiderman was available on all Alexa enabled devices.","url":"assets/media/content/spiderman/spiderman-01.jpg"},{"text":"A Voice User Interface doc from production.","url":"assets/media/content/spiderman/spiderman-03.jpg"}],"videos":{},"links":[{"text":"skill","link":"https://www.amazon.com/Sony-Pictures-Entertainment-Spider-Man/dp/B0711M1Z4B"},{"text":"press","link":"https://mikeshouts.com/get-spider-man-skill-on-alexa-enabled-devices/"}],"roles":["ideation","ux","technical consulting","prototyping"],"type":["Alexa Skill"],"tags":["ideation","technical_consulting","voice","chatbot"]},{"visible":true,"name":"twentyfour","fullName":"24 Legacy: Daily Mission","client":"Fox","agency":"Amazon Advertising","bodyCopy":"24 Legacy Daily Mission is(was) an Alexa Skill to build buzz for the series 24 Legacy. Pointed at superfans, the skill dropped a new daily challenge. The challenge could be to recite the alphabet backwards, or do ten push ups, all in 24 seconds.","thumbNail":"assets/media/work/thumbnails/twentyfour.png","images":[{"text":"twentyfour","url":"assets/media/content/twentyfour/twentyfour-01.jpg"},{"text":"twentyfour","url":"assets/media/content/twentyfour/twentyfour-02.jpg"}],"videos":[{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/twentyfour/twentyfour-01.mp4"}],"links":[{"text":"skill","link":"https://www.amazon.com/Fox-Home-Ent-24-Mission/dp/B01N2ATPJZ"},{"text":"press","link":"https://variety.com/2017/digital/news/fox-24-legacy-amazons-alexa-alarm-1201972472/"}],"type":["Alexa Skill"],"roles":["ideation","ux","development"],"tags":["voice","development","web_development","chatbot"]},{"visible":true,"name":"wwe","fullName":"WWe.com","client":"WWE","agency":"Code & Theory","bodyCopy":"I was part of a small team that re-did the WWE website. I did most of the front-end development of this site, mobile and desktop.","thumbNail":"assets/media/work/thumbnails/wwe.jpg","images":[{"text":"wwe","url":"assets/media/content/wwe/wwe-01.jpg"}],"videos":{},"links":[{"text":"site","link":"https://www.wwe.com/"}],"roles":["front-end development"],"type":["website"],"tags":["development","web_development","mobile_development"]},{"visible":true,"name":"spg","fullName":"SPG.com","client":"Starwood Hotels","agency":"Code & Theory","bodyCopy":"I was part of a small team that re-did the SPG Rewards redemption website. I did most of the front-end development of this site, mobile and desktop.","thumbNail":"assets/media/work/thumbnails/spg.jpg","images":[{"text":"spg","url":"assets/media/content/spg/spg-01.jpg"}],"videos":{},"links":[{"text":"waybacklink","link":"http://web.archive.org/web/20170601003220/http://www.starwoodhotels.com/preferredguest/index.html"},{"text":"press","link":"https://www.codeandtheory.com/things-we-make/starwood-preferred-guest-rewards-redemption-website"}],"roles":["front-end development"],"type":["website"],"tags":["development","web_development","mobile_development"]},{"visible":true,"name":"bernadettes","fullName":"Bernadette's","client":"Bernadette's","agency":"Freelance","bodyCopy":"Logo for a bar. The uppercase 'B' is hand lettered, the rest is type.","thumbNail":"assets/media/work/thumbnails/bernadettes.jpg","images":[{"text":"spg","url":"assets/media/content/bernadettes/bernadettes-01.jpg"},{"text":"spg","url":"assets/media/content/bernadettes/bernadettes-02.jpg"},{"text":"spg","url":"assets/media/content/bernadettes/bernadettes-03.jpg"},{"text":"spg","url":"assets/media/content/bernadettes/bernadettes-04.jpg"}],"videos":{},"links":[{"text":"site","link":"https://www.bernadettesla.com/"}],"roles":["logo design","hand lettering"],"type":["logo"],"tags":["ideation","design","logo_design","hand_lettering"]},{"visible":true,"name":"wickman","fullName":"Wickman House","client":"Wickman House","agency":"Freelance","bodyCopy":"Logo for a restaurant","thumbNail":"assets/media/work/thumbnails/wickman.jpg","images":{},"videos":{},"links":[{"text":"site","link":"http://www.wickmanhouse.com/"}],"roles":["logo design"],"type":["logo"],"tags":["ideation","design","logo_design"]},{"visible":true,"name":"tgs","fullName":"The Greatest Showman: Amazon","client":"Fox","agency":"Amazon Advertising","bodyCopy":"24 Legacy Daily Mission is(was) an Alexa Skill to build buzz for the series 24 Legacy. Pointed at superfans, the skill dropped a new daily challenge. The challenge could be to recite the alphabet backwards, or do ten push ups, all in 24 seconds.","thumbNail":"assets/media/work/thumbnails/tgs.jpg","images":[{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/tgs/tgs-01.jpg"}],"videos":[{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/tgs/tgs-01.mp4"}],"links":[{"text":"press","link":"https://bernardgolden.com/the-amazon-flywheel-prime-and-the-greatest-showman/"}],"roles":["ideation","ux","front-end development"],"type":["360 Video AR Experience"],"tags":["ideation","ux","art_direction","design","ui_design","development","web_development","ar","360_video"]},{"visible":true,"name":"afi","fullName":"American Family Insurance","client":"American Family Insurance","agency":"Amazon Advertising","bodyCopy":"24 Legacy Daily Mission is(was) an Alexa Skill to build buzz for the series 24 Legacy. Pointed at superfans, the skill dropped a new daily challenge. The challenge could be to recite the alphabet backwards, or do ten push ups, all in 24 seconds.","thumbNail":"assets/media/work/thumbnails/afi.jpg","images":[{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/afi/afi-01.jpg"}],"videos":{},"links":[{"text":"product","link":"https://www.amazon.com/adlp/amfamconnectchat"}],"roles":["ideation","prototyping"],"type":["Chatbot"],"tags":["development","web_development","ideation","ux","prototyping","chatbot","conversational_ux","development"]},{"visible":true,"name":"various","fullName":"Various, Amazon","client":"Various","agency":"Amazon Advertising","bodyCopy":"A collection of landing pages for various clients and various platforms (web, mobile, tablet, FireTV) designed and/or devloped during my time at Amazon.","thumbNail":"https://www.fillmurray.com/640/360","images":{},"videos":{},"roles":["design","development","ux"],"links":[{"text":"Amazon Advertising","link":"https://advertising.amazon.com/"}],"type":["landing pages"],"tags":["development","web_development","mobile_development","design","ui_design","art_direction"]}]}}

/***/ }),

/***/ "appZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"scroll":"scroll__10gvT","arrowDown":"arrowDown__1LJzA","pulse":"pulse__2_HFW","arrowUp":"arrowUp__1Dtgy"};

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);




var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production" !== 'production';
} catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(Portal, { vnode: vnode, container: container });
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "eiQN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var instance = null;
  var instancesCount = 0;
  var ticking = false;

  var EVENT_NAME = 'window-scroll';

  var isWindowDefined = typeof window !== 'undefined';

  // ------------------------------------------------
  // Passive events support detection
  // ------------------------------------------------
  function detectPassiveEvents() {
    if (isWindowDefined && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), because Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('TEST_PASSIVE_EVENT_SUPPORT', noop, options);
      window.removeEventListener('TEST_PASSIVE_EVENT_SUPPORT', noop, options);

      return passive;
    }

    return false;
  }

  var supportsPassiveEvents = detectPassiveEvents();

  // ------------------------------------------------
  // Custom Event detection
  // ------------------------------------------------
  var supportsCustomEvents = isWindowDefined && typeof window.CustomEvent === 'function';

  // ------------------------------------------------
  // Scroll manager
  // ------------------------------------------------
  function ScrollManager() {
    if (typeof window === 'undefined') {
      // Silently return null if it is used on server
      return null;
    }

    // Increase reference count
    instancesCount++;

    // If singleton instance exists, return it rather than creating a new one
    if (instance) {
      return instance;
    }

    // Save singleton instance
    instance = this;

    // Bind handlers
    this.handleScroll = this.handleScroll.bind(this);

    // Use passive listener when supported with fallback to capture option
    this.eventListenerOptions = supportsPassiveEvents ? { passive: true } : true;

    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll, this.eventListenerOptions);
  }

  ScrollManager.prototype.removeListener = function () {
    instancesCount--;

    // There is not components listening to our event
    if (instancesCount === 0) {
      this.destroy();
    }
  };

  ScrollManager.prototype.destroy = function () {
    // Remove event listener
    window.removeEventListener('scroll', this.handleScroll, this.eventListenerOptions);

    // Clear singleton instance and count
    instance = null;
    instancesCount = 0;
  };

  ScrollManager.prototype.getScrollPosition = function () {
    // Get scroll position, with IE fallback
    var scrollPositionY = window.scrollY || document.documentElement.scrollTop;
    var scrollPositionX = window.scrollX || document.documentElement.scrollLeft;

    // Disable overscrolling in safari
    if (scrollPositionY < 0) {
      scrollPositionY = 0;
    }
    if (scrollPositionX < 0) {
      scrollPositionX = 0;
    }

    return {
      // Alias for scrollPositionY for backwards compatibility
      scrollPosition: scrollPositionY,
      scrollPositionY: scrollPositionY,
      scrollPositionX: scrollPositionX
    };
  };

  ScrollManager.prototype.handleScroll = function () {
    // Fire the event only once per requestAnimationFrame
    if (!ticking) {
      ticking = true;

      var event;

      if (supportsCustomEvents) {
        event = new CustomEvent(EVENT_NAME, {
          detail: this.getScrollPosition()
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(EVENT_NAME, false, false, this.getScrollPosition());
      }

      window.dispatchEvent(event);

      window.requestAnimationFrame(function () {
        ticking = false;
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    ScrollManager.default = ScrollManager;
    module.exports = ScrollManager;
  } else if (true) {
    // eslint-disable-line no-undef
    // register as 'window-scroll-manager', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      // eslint-disable-line no-undef
      return ScrollManager;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.ScrollManager = ScrollManager;
  }
}).call(this);

/***/ }),

/***/ "kHgp":
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
  return 3.0 * aA1;
}

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}

function LinearEasing(x) {
  return x;
}

module.exports = function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

/***/ }),

/***/ "l262":
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "pv+l":
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "qohj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bezierEasing = __webpack_require__("kHgp");

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

var _windowScrollManager = __webpack_require__("eiQN");

var _windowScrollManager2 = _interopRequireDefault(_windowScrollManager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// Check if code is running in the browser (important for universal rendering)
var WINDOW_EXISTS = typeof window !== 'undefined';

// Regex that checks for numbers in string
// formatted as "{number}{unit}" where unit is "px", "vh", "%" or none
var START_END_DURATION_REGEX = /^-?\d+(\.\d+)?(px|vh|%)?$/;

var DEFAULT_UNIT = 'px';
var DEFAULT_ANGLE_UNIT = 'deg';
var ANGLE_PROPERTIES = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY', 'skewZ', 'hueRotate'];

var EASINGS = {
  ease: [0.25, 0.1, 0.25, 1.0],
  easeIn: [0.42, 0.0, 1.00, 1.0],
  easeOut: [0.00, 0.0, 0.58, 1.0],
  easeInOut: [0.42, 0.0, 0.58, 1.0],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutExpo: [1, 0, 0, 1],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86]
};

// Color regexes

// 0 - 199 | 200 - 249 | 250 - 255
var REGEX_0_255 = '(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])';
// 0.0 - 1.9999...
var REGEX_0_1 = '([01](\\.\\d+)?)';
// 00 - FF
var REGEX_TWO_HEX_DIGITS = '([a-f\\d]{2})';

var HEX_REGEX = new RegExp('^#' + REGEX_TWO_HEX_DIGITS + REGEX_TWO_HEX_DIGITS + REGEX_TWO_HEX_DIGITS + '$', 'i');
var RGB_REGEX = new RegExp('^rgb\\(' + REGEX_0_255 + ',' + REGEX_0_255 + ',' + REGEX_0_255 + '\\)$', 'i');
var RGBA_REGEX = new RegExp('^rgba\\(' + REGEX_0_255 + ',' + REGEX_0_255 + ',' + REGEX_0_255 + ',' + REGEX_0_1 + '\\)$', 'i');

var SCROLL_OFFSET = 50;

var RESIZE_DEBOUNCE_TIMEOUT = 150;

// CSS transform map
var TRANSFORM_MAP = {
  rotate: function rotate(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ANGLE_UNIT;
    return 'rotate(' + value + unit + ')';
  },
  rotateX: function rotateX(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ANGLE_UNIT;
    return 'rotateX(' + value + unit + ')';
  },
  rotateY: function rotateY(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ANGLE_UNIT;
    return 'rotateY(' + value + unit + ')';
  },
  rotateZ: function rotateZ(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ANGLE_UNIT;
    return 'rotateZ(' + value + unit + ')';
  },
  scale: function scale(value) {
    return 'scale(' + value + ')';
  },
  scaleX: function scaleX(value) {
    return 'scaleX(' + value + ')';
  },
  scaleY: function scaleY(value) {
    return 'scaleY(' + value + ')';
  },
  scaleZ: function scaleZ(value) {
    return 'scaleZ(' + value + ')';
  },
  skew: function skew(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'skew(' + value + unit + ')';
  },
  skewX: function skewX(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'skewX(' + value + unit + ')';
  },
  skewY: function skewY(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'skewY(' + value + unit + ')';
  },
  skewZ: function skewZ(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'skewZ(' + value + unit + ')';
  },
  translateX: function translateX(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'translateX(' + value + unit + ')';
  },
  translateY: function translateY(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'translateY(' + value + unit + ')';
  },
  translateZ: function translateZ(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'translateZ(' + value + unit + ')';
  }
};

// Order of CSS transforms matters
var ORDER_OF_TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'skew', 'skewX', 'skewY', 'skewZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ'];

// CSS properties that use color values
var COLOR_PROPERTIES = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'fill', 'stroke'];

// CSS filter map
// blur()
// brightness()
// contrast()
// grayscale()
// hue-rotate()
// invert()
// opacity() // use opacityFilter
// saturate()
// sepia()

// Not supported
// drop-shadow()
// url()
var FILTER_MAP = {
  blur: function blur(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNIT;
    return 'blur(' + value + unit + ')';
  },
  brightness: function brightness(value) {
    return 'brightness(' + value + ')';
  },
  contrast: function contrast(value) {
    return 'contrast(' + value + ')';
  },
  grayscale: function grayscale(value) {
    return 'grayscale(' + value + ')';
  },
  hueRotate: function hueRotate(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ANGLE_UNIT;
    return 'hue-rotate(' + value + unit + ')';
  },
  invert: function invert(value) {
    return 'invert(' + value + ')';
  },
  opacityFilter: function opacityFilter(value) {
    return 'opacity(' + value + ')';
  },
  saturate: function saturate(value) {
    return 'saturate(' + value + ')';
  },
  sepia: function sepia(value) {
    return 'sepia(' + value + ')';
  }
};

var FILTER_PROPERTIES = ['blur', 'brightness', 'contrast', 'grayscale', 'hueRotate', 'invert', 'opacityFilter', 'saturate', 'sepia'];

// Props to be removed from passing directly to the component element
var PROPS_TO_OMIT = ['animateWhenNotInViewport', 'children', 'className', 'freeze', 'parallaxData', 'style', 'tagName', 'onPlxStart', 'onPlxEnd'];

// Get element's top offset
function getElementTop(el) {
  var top = 0;
  var element = el;

  do {
    top += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return top;
}

// Returns CSS unit
function getUnit(property, unit) {
  var propertyUnit = unit || DEFAULT_UNIT;

  if (ANGLE_PROPERTIES.indexOf(property) >= 0) {
    propertyUnit = unit || DEFAULT_ANGLE_UNIT;
  }

  return propertyUnit;
}

// Takes string value (in px/vh/%) and returns number
function getValueInPx(value, maxScroll) {
  var floatValue = parseFloat(value);
  var unit = value.match(START_END_DURATION_REGEX)[2] || null;
  var vh = window.innerHeight / 100;
  var valueInPx = value;

  switch (unit) {
    case 'vh':
      valueInPx = vh * floatValue;
      break;
    case '%':
      valueInPx = maxScroll * floatValue / 100;
      break;
    default:
      valueInPx = floatValue;
  }

  return valueInPx;
}

// Takes start/end/duration props
// and return number (in pixels) based on prop type (number, string, dom element)
function convertPropToPixels(propName, propValue, maxScroll) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var propValueInPx = propValue;
  var isElement = propValue instanceof HTMLElement;
  var keyCodes = {
    ZERO: 48,
    NINE: 57
  };

  if (typeof propValue === 'number') {
    propValueInPx = propValue;
  } else if (START_END_DURATION_REGEX.test(propValue)) {
    propValueInPx = getValueInPx(propValue, maxScroll);
  } else if (isElement || typeof propValue === 'string' && (propValue.charCodeAt(0) < keyCodes.ZERO || propValue.charCodeAt(0) > keyCodes.NINE)) {
    var element = isElement ? propValue : document.querySelector(propValue);

    if (!element) {
      console.warn('Plx, ERROR: ' + propName + ' selector matches no elements: "' + propValue + '"'); // eslint-disable-line
      return null;
    }

    if (propName === 'start' || propName === 'end') {
      // START or END
      // Element enters the viewport
      propValueInPx = getElementTop(element) - window.innerHeight;
    } else if (propName === 'duration') {
      // DURATION
      // Height of the element
      propValueInPx = element.offsetHeight;
    }
  } else {
    console.warn('Plx, ERROR: "' + propValue + '" is not a valid ' + propName + ' value, check documenation'); // eslint-disable-line
    return null;
  }

  // Transform offset to px
  var offsetInPx = 0;

  if (typeof offset === 'number') {
    offsetInPx = offset;
  } else if (START_END_DURATION_REGEX.test(offset)) {
    offsetInPx = getValueInPx(offset, maxScroll);
  }
  // Add offset
  propValueInPx += offsetInPx;

  if (propValueInPx < 0) {
    propValueInPx = 0;
  }

  return propValueInPx;
}

// Convers color in hex format into object { r, g, b, a }
function hexToObject(hex) {
  // Convert #abc to #aabbcc
  var color = hex.length === 4 ? '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] : hex;
  var result = HEX_REGEX.exec(color);

  // Safety check, if color is in the wrong format
  if (!result) {
    console.warn('Plx, ERROR: hex color is not in the right format: "' + hex + '"'); // eslint-disable-line no-console
    return null;
  }

  // All color functions are returning { r, g, b, a } object
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1
  };
}

// Convers color in rgb format into object { r, g, b, a }
function rgbToObject(rgb) {
  var isRgba = rgb.toLowerCase().indexOf('rgba') === 0;
  var color = rgb.replace(/ /g, '');
  var result = isRgba ? RGBA_REGEX.exec(color) : RGB_REGEX.exec(color);

  // Safety check, if color is in the wrong format
  if (!result) {
    console.warn('Plx, ERROR: rgb or rgba color is not in the right format: "' + rgb + '"'); // eslint-disable-line
    return null;
  }

  // All color functions are returning { r, g, b, a } object
  return {
    r: parseInt(result[1], 10),
    g: parseInt(result[2], 10),
    b: parseInt(result[3], 10),
    a: isRgba ? parseFloat(result[4]) : 1
  };
}

// Calculates the current value for parallaxing property
function parallax(scrollPosition, start, duration, startValue, endValue, easing) {
  var min = startValue;
  var max = endValue;
  var invert = startValue > endValue;

  // Safety check, if "startValue" is in the wrong format
  if (typeof startValue !== 'number') {
    console.warn('Plx, ERROR: startValue is not a number (type: "' + (typeof endValue === 'undefined' ? 'undefined' : _typeof(endValue)) + '", value: "' + endValue + '")'); // eslint-disable-line
    return null;
  }

  // Safety check, if "endValue" is in the wrong format
  if (typeof endValue !== 'number') {
    console.warn('Plx, ERROR: endValue is not a number (type: "' + (typeof endValue === 'undefined' ? 'undefined' : _typeof(endValue)) + '", value: "' + endValue + '")'); // eslint-disable-line
    return null;
  }

  // Safety check, if "duration" is in the wrong format
  if (typeof duration !== 'number' || duration === 0) {
    console.warn('Plx, ERROR: duration is zero or not a number (type: "' + (typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) + '", value: "' + duration + '")'); // eslint-disable-line
    return null;
  }

  if (invert) {
    min = endValue;
    max = startValue;
  }

  var percentage = (scrollPosition - start) / duration;

  if (percentage > 1) {
    percentage = 1;
  } else if (percentage < 0) {
    percentage = 0;
  }

  // Apply easing
  if (easing) {
    var easingPropType = typeof easing === 'undefined' ? 'undefined' : _typeof(easing);
    if (easingPropType === 'object' && easing.length === 4) {
      percentage = (0, _bezierEasing2.default)(easing[0], easing[1], easing[2], easing[3])(percentage);
    } else if (easingPropType === 'string' && EASINGS[easing]) {
      percentage = (0, _bezierEasing2.default)(EASINGS[easing][0], EASINGS[easing][1], EASINGS[easing][2], EASINGS[easing][3])(percentage);
    } else if (easingPropType === 'function') {
      percentage = easing(percentage);
    }
  }

  var value = percentage * (max - min);

  if (invert) {
    value = max - value;
  } else {
    value += min;
  }

  return parseFloat(value.toFixed(3));
}

// Calculates current value for color parallax
function colorParallax(scrollPosition, start, duration, startValue, endValue, easing) {
  var startObject = null;
  var endObject = null;

  if (startValue[0].toLowerCase() === 'r') {
    startObject = rgbToObject(startValue);
  } else {
    startObject = hexToObject(startValue);
  }

  if (endValue[0].toLowerCase() === 'r') {
    endObject = rgbToObject(endValue);
  } else {
    endObject = hexToObject(endValue);
  }

  if (startObject && endObject) {
    var r = parallax(scrollPosition, start, duration, startObject.r, endObject.r, easing);
    var g = parallax(scrollPosition, start, duration, startObject.g, endObject.g, easing);
    var b = parallax(scrollPosition, start, duration, startObject.b, endObject.b, easing);
    var a = parallax(scrollPosition, start, duration, startObject.a, endObject.a, easing);

    return 'rgba(' + parseInt(r, 10) + ', ' + parseInt(g, 10) + ', ' + parseInt(b, 10) + ', ' + a + ')';
  }

  return null;
}

// Applies property parallax to the style object
function applyProperty(scrollPosition, propertyData, startPosition, duration, style, easing) {
  var startValue = propertyData.startValue,
      endValue = propertyData.endValue,
      property = propertyData.property,
      unit = propertyData.unit;

  // If property is one of the color properties
  // Use it's parallax method

  var isColor = COLOR_PROPERTIES.indexOf(property) > -1;
  var parallaxMethod = isColor ? colorParallax : parallax;

  // Get new CSS value
  var value = parallaxMethod(scrollPosition, startPosition, duration, startValue, endValue, easing);

  // Get transform function
  var transformMethod = TRANSFORM_MAP[property];
  var filterMethod = FILTER_MAP[property];
  var newStyle = style;

  if (transformMethod) {
    // Get CSS unit
    var propertyUnit = getUnit(property, unit);
    // Transforms, apply value to transform function
    newStyle.transform[property] = transformMethod(value, propertyUnit);
  } else if (filterMethod) {
    // Get CSS unit
    var _propertyUnit = getUnit(property, unit);
    // Filters, apply value to filter function
    newStyle.filter[property] = filterMethod(value, _propertyUnit);
  } else {
    // All other properties
    newStyle[property] = value;

    // Add unit if it is passed
    if (unit) {
      newStyle[property] += unit;
    }
  }

  return newStyle;
}

// Returns CSS classes based on animation state
function getClasses(lastSegmentScrolledBy, isInSegment, parallaxData) {
  var cssClasses = null;

  if (lastSegmentScrolledBy === null) {
    cssClasses = 'Plx--above';
  } else if (lastSegmentScrolledBy === parallaxData.length - 1 && !isInSegment) {
    cssClasses = 'Plx--below';
  } else if (lastSegmentScrolledBy !== null && isInSegment) {
    var segmentName = parallaxData[lastSegmentScrolledBy].name || lastSegmentScrolledBy;

    cssClasses = 'Plx--active Plx--in Plx--in-' + segmentName;
  } else if (lastSegmentScrolledBy !== null && !isInSegment) {
    var _segmentName = parallaxData[lastSegmentScrolledBy].name || lastSegmentScrolledBy;
    var nextSegmentName = parallaxData[lastSegmentScrolledBy + 1].name || lastSegmentScrolledBy + 1;

    cssClasses = 'Plx--active Plx--between Plx--between-' + _segmentName + '-and-' + nextSegmentName;
  }

  return cssClasses;
}

// Checks if class contains 'active'
function checkIfActive(classes) {
  return classes.includes('Plx--active');
}

// Omits "keysToOmit" from "object"
function omit(object, keysToOmit) {
  var result = {};

  Object.keys(object).forEach(function (key) {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  });

  return result;
}

// Main update function
// Returns new state object based on props and scroll position
function getNewState(scrollPosition, props, state, element) {
  var animateWhenNotInViewport = props.animateWhenNotInViewport,
      disabled = props.disabled,
      freeze = props.freeze,
      parallaxData = props.parallaxData;
  var showElement = state.showElement,
      plxStyle = state.plxStyle,
      plxStateClasses = state.plxStateClasses;

  // Do nothing if animation is disabled, frozen
  // or if element is not rendered yet

  if (freeze && showElement || !element || disabled) {
    return null;
  }

  // Check if element is in viewport
  // Small offset is added to prevent page jumping
  if (!animateWhenNotInViewport) {
    var rect = element.getBoundingClientRect();
    var isTopAboveBottomEdge = rect.top < window.innerHeight + SCROLL_OFFSET;
    var isBottomBelowTopEdge = rect.top + rect.height > -SCROLL_OFFSET;

    if (!isTopAboveBottomEdge || !isBottomBelowTopEdge) {
      return null;
    }
  }

  var newState = {};

  // Style to be applied to our element
  var newStyle = {
    transform: {},
    filter: {}
  };

  // This means "componentDidMount" did happen and that we should show our element
  if (!showElement) {
    newState.showElement = true;
  }

  var appliedProperties = [];
  var segments = [];
  var isInSegment = false;
  var lastSegmentScrolledBy = null;
  var maxScroll = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;

  var _loop = function _loop(i) {
    var _parallaxData$i = parallaxData[i],
        duration = _parallaxData$i.duration,
        easing = _parallaxData$i.easing,
        endOffset = _parallaxData$i.endOffset,
        properties = _parallaxData$i.properties,
        startOffset = _parallaxData$i.startOffset;

    var start = parallaxData[i].start === 'self' ? element : parallaxData[i].start;
    var end = parallaxData[i].end === 'self' ? element : parallaxData[i].end;

    var startInPx = convertPropToPixels('start', start, maxScroll, startOffset);
    var durationInPx = null;
    var endInPx = null;

    // End has higher priority than duration
    if (typeof end !== 'undefined') {
      endInPx = convertPropToPixels('end', end, maxScroll, endOffset);
      durationInPx = endInPx - startInPx;
    } else {
      durationInPx = convertPropToPixels('duration', duration, maxScroll);
      endInPx = startInPx + durationInPx;
    }

    // If segment is below scroll position skip it
    if (scrollPosition < startInPx) {
      return 'break';
    }

    var isScrolledByStart = scrollPosition >= startInPx;

    if (isScrolledByStart) {
      lastSegmentScrolledBy = i;
    }

    // If active segment exists, apply his properties
    if (scrollPosition >= startInPx && scrollPosition <= endInPx) {
      isInSegment = true;

      properties.forEach(function (propertyData) {
        // eslint-disable-line no-loop-func
        var property = propertyData.property;

        // Save which properties are applied to the active segment
        // So they are not re-applied for other segments

        appliedProperties.push(property);

        // Apply property style
        newStyle = applyProperty(scrollPosition, propertyData, startInPx, durationInPx, newStyle, easing);
      });
    } else {
      // Push non active segments above the scroll position to separate array
      // This way "durationInPx" and "startInPx" are not calculated again
      // and segments below scroll position are skipped in the next step
      segments.push({
        easing: easing,
        durationInPx: durationInPx,
        properties: properties,
        startInPx: startInPx
      });
    }
  };

  for (var i = 0; i < parallaxData.length; i++) {
    var _ret = _loop(i);

    if (_ret === 'break') break;
  }

  // These are only segments that are completly above scroll position
  segments.forEach(function (data) {
    var easing = data.easing,
        durationInPx = data.durationInPx,
        properties = data.properties,
        startInPx = data.startInPx;

    properties.forEach(function (propertyData) {
      var property = propertyData.property;

      // Skip propery that was changed for active segment

      if (appliedProperties.indexOf(property) > -1) {
        return;
      }

      // These styles that are the ones changed by segments
      // that are above active segment
      newStyle = applyProperty(scrollPosition, propertyData, startInPx, durationInPx, newStyle, easing);
    });
  });

  // Sort transforms by ORDER_OF_TRANSFORMS
  // as order of CSS transforms matters
  var transformsOrdered = [];

  ORDER_OF_TRANSFORMS.forEach(function (transformKey) {
    if (newStyle.transform[transformKey]) {
      transformsOrdered.push(newStyle.transform[transformKey]);
    }
  });

  // Concat transforms and add browser prefixes
  newStyle.transform = transformsOrdered.join(' ');
  newStyle.WebkitTransform = newStyle.transform;
  newStyle.MozTransform = newStyle.transform;
  newStyle.OTransform = newStyle.transform;
  newStyle.msTransform = newStyle.transform;

  var filtersArray = [];
  FILTER_PROPERTIES.forEach(function (filterKey) {
    if (newStyle.filter[filterKey]) {
      filtersArray.push(newStyle.filter[filterKey]);
    }
  });

  // Concat filters and add browser prefixes
  newStyle.filter = filtersArray.join(' ');
  newStyle.WebkitFilter = newStyle.filter;
  newStyle.MozFilter = newStyle.filter;
  newStyle.OFilter = newStyle.filter;
  newStyle.msFilter = newStyle.filter;

  // "Stupid" check if style should be updated
  if (JSON.stringify(plxStyle) !== JSON.stringify(newStyle)) {
    newState.plxStyle = newStyle;
  }

  // Adding state class
  var newPlxStateClasses = getClasses(lastSegmentScrolledBy, isInSegment, parallaxData);

  if (newPlxStateClasses !== plxStateClasses) {
    newState.plxStateClasses = newPlxStateClasses;
  }

  if (Object.keys(newState).length) {
    return newState;
  }

  return null;
}

var Plx = function (_Component) {
  _inherits(Plx, _Component);

  function Plx(props) {
    _classCallCheck(this, Plx);

    // Binding handlers
    var _this = _possibleConstructorReturn(this, (Plx.__proto__ || Object.getPrototypeOf(Plx)).call(this, props));

    _this.handleScrollChange = _this.handleScrollChange.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);

    _this.state = {
      element: null,
      showElement: false,
      plxStateClasses: '',
      plxStyle: {}
    };

    // Skipping type checking as PropTypes will give a warning if the props aren't functions
    _this.plxStartEnabled = _this.props.onPlxStart !== null;
    _this.plxEndEnabled = _this.props.onPlxEnd !== null;
    return _this;
  }

  _createClass(Plx, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get scroll manager singleton
      this.scrollManager = new _windowScrollManager2.default();
      // Add listeners
      window.addEventListener('window-scroll', this.handleScrollChange);
      window.addEventListener('resize', this.handleResize);

      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var wasActive = checkIfActive(prevState.plxStateClasses);
      var isActive = checkIfActive(this.state.plxStateClasses);
      if (prevProps !== this.props) {
        this.update();
      }
      if ((this.plxStartEnabled || this.plxEndEnabled) && prevState.plxStateClasses !== this.state.plxStateClasses) {
        if (this.plxStartEnabled && !wasActive && isActive) {
          this.props.onPlxStart();
        } else if (this.plxEndEnabled && wasActive && !isActive) {
          this.props.onPlxEnd();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var scrollManager = this.state.scrollManager;

      window.removeEventListener('window-scroll', this.handleScrollChange);
      window.removeEventListener('resize', this.handleResize);

      clearTimeout(this.resizeDebounceTimeoutID);
      this.resizeDebounceTimeoutID = null;

      if (scrollManager) {
        scrollManager.removeListener();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      var scrollPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var currentScrollPosition = scrollPosition === null ? this.scrollManager.getScrollPosition().scrollPositionY : scrollPosition;

      var newState = getNewState(currentScrollPosition, this.props, this.state, this.element);

      if (newState) {
        requestAnimationFrame(function () {
          return _this2.setState(newState);
        });
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this3 = this;

      clearTimeout(this.resizeDebounceTimeoutID);
      this.resizeDebounceTimeoutID = setTimeout(function () {
        _this3.update();
      }, RESIZE_DEBOUNCE_TIMEOUT);
    }
  }, {
    key: 'handleScrollChange',
    value: function handleScrollChange(e) {
      this.update(e.detail.scrollPositionY);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          style = _props.style,
          tagName = _props.tagName;
      var _state = this.state,
          showElement = _state.showElement,
          plxStyle = _state.plxStyle,
          plxStateClasses = _state.plxStateClasses;

      var Tag = tagName;

      var elementStyle = style;

      if (!disabled) {
        elementStyle = _extends({}, style, plxStyle, {
          // Hide element before until it is rendered
          // This prevents jumps if page is scrolled and then refreshed
          visibility: showElement ? null : 'hidden'
        });
      }

      return _react2.default.createElement(Tag, _extends({}, omit(this.props, PROPS_TO_OMIT), {
        className: 'Plx ' + plxStateClasses + ' ' + className,
        style: elementStyle,
        ref: function ref(el) {
          return _this4.element = el;
        }
      }), children);
    }
  }]);

  return Plx;
}(_react.Component);

exports.default = Plx;

var propertiesItemType = _propTypes2.default.shape({
  startValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  endValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  property: _propTypes2.default.string.isRequired,
  unit: _propTypes2.default.string
});

// Check for the universal rendering
// HTMLElement in the proptypes breaks on server
// https://github.com/Stanko/react-plx/issues/25
var SafeHTMLElement = WINDOW_EXISTS ? window.HTMLElement : {};

var parallaxDataType = _propTypes2.default.shape({
  start: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(SafeHTMLElement)]).isRequired,
  startOffset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  duration: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(SafeHTMLElement)]),
  end: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(SafeHTMLElement)]),
  endOffset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  properties: _propTypes2.default.arrayOf(propertiesItemType).isRequired,
  easing: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.func]),
  name: _propTypes2.default.string
});

Plx.propTypes = {
  animateWhenNotInViewport: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  freeze: _propTypes2.default.bool,
  parallaxData: _propTypes2.default.arrayOf(parallaxDataType),
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])),
  tagName: _propTypes2.default.string,
  onPlxStart: _propTypes2.default.func,
  onPlxEnd: _propTypes2.default.func
};

Plx.defaultProps = {
  animateWhenNotInViewport: false,
  children: null,
  className: '',
  disabled: false,
  freeze: false,
  parallaxData: [],
  style: {},
  tagName: 'div',
  onPlxStart: null,
  onPlxEnd: null
};

/***/ }),

/***/ "vJv6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"work":"work__EYp2Y","taggingWrapper":"taggingWrapper__26tFs","headlineWrapper":"headlineWrapper__1qBGE","inner_contentWrapper":"inner_contentWrapper__2WEyv"};

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map