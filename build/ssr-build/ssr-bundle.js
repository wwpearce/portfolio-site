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

/***/ "0wvK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("69Gj");

/***/ }),

/***/ "3CUW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"about":"about__2Sv7a"};

/***/ }),

/***/ "45fX":
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

var _utils = __webpack_require__("yd8v");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__("kD/w");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__("cX2q");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    if (_scrollEvents2.default.registered.begin) {
      _scrollEvents2.default.registered.begin(to, target);
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

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

/***/ "69Gj":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("eW0v")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  exports.default = function (ComposedComponent) {
    var windowSize = function (_Component) {
      _inherits(windowSize, _Component);

      function windowSize() {
        _classCallCheck(this, windowSize);

        var _this = _possibleConstructorReturn(this, (windowSize.__proto__ || Object.getPrototypeOf(windowSize)).call(this));

        _this.state = {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
        return _this;
      }

      _createClass(windowSize, [{
        key: 'handleResize',
        value: function handleResize() {
          // set initial state
          this.setState({
            width: document.body.clientWidth,
            height: document.body.clientHeight
          });
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          // bind window resize listeners
          this._handleResize = this.handleResize.bind(this);
          window.addEventListener('resize', this._handleResize);
          setTimeout(this._handleResize, 1000);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          // clean up listeners
          window.removeEventListener('resize', this._handleResize);
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          return this.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          // pass window dimensions as props to wrapped component
          return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
            ref: function ref(c) {
              _this2.wrappedInstance = c;
            },
            windowWidth: this.state.width,
            windowHeight: this.state.height
          }));
        }
      }]);

      return windowSize;
    }(_react.Component);

    var composedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

    windowSize.displayName = 'windowSize(' + composedComponentName + ')';
    return windowSize;
  };
});

/***/ }),

/***/ "7qbT":
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

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("eW0v");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__("yd8v");

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__("JAZJ");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__("45fX");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__("T9hV");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

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

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "94oU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"dropdown__teS-4"};

/***/ }),

/***/ "9km1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__("7qbT");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

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

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', this.props, this.props.children);
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

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

/***/ "FNy/":
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = throttle;

/***/ }),

/***/ "JAZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__("FNy/");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__("lkHq");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },

  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

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
var style = __webpack_require__("yY49");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/react-scroll/modules/index.js
var modules = __webpack_require__("lB5c");
var modules_default = /*#__PURE__*/__webpack_require__.n(modules);

// EXTERNAL MODULE: ../node_modules/react-device-detect/dist/index.js
var dist = __webpack_require__("JZ8C");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/mightBeEmail.js
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return (/[^@]+@[^@]+/.test(s)
  );
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/trim.js
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/toTitleCase.js
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return trim(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/console/warn.js
function warn(s) {
  console.warn('[react-ga]', s);
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/format.js



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (mightBeEmail(s)) {
    warn('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return toTitleCase(s);
  }

  return s;
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/loadGA.js
/* harmony default export */ var loadGA = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */
});
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/console/log.js
function log(s) {
  console.info('[react-ga]', s);
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/testModeAPI.js
var gaCalls = [];
/* harmony default export */ var testModeAPI = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push(args.concat());
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});
// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/components/OutboundLink.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;return o;
  };return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink_OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return preact_compat_es["default"].createElement('a', props);
    }
  }]);

  return OutboundLink;
}(preact_compat_es["Component"]);

_defineProperty(OutboundLink_OutboundLink, "trackLink", function () {
  warn('ga tracking not enabled');
});

_defineProperty(OutboundLink_OutboundLink, "propTypes", {
  eventLabel: prop_types_default.a.string.isRequired,
  target: prop_types_default.a.string,
  to: prop_types_default.a.string,
  onClick: prop_types_default.a.func
});

_defineProperty(OutboundLink_OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null
});


// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/index.js
function esm__objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = esm__objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function esm__objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function esm__objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      esm__defineProperty(target, key, source[key]);
    });
  }return target;
}

function esm__defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function esm__typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    esm__typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    esm__typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return esm__typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var esm_internalGa = function internalGa() {
  var _window;

  if (_testMode) return testModeAPI.ga.apply(testModeAPI, arguments);
  if (typeof window === 'undefined') return false;
  if (!window.ga) return warn('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return format(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof esm_internalGa === 'function') {
    if (typeof command !== 'string') {
      warn('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) esm_internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        esm_internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    warn('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    esm_internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    esm_internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!options || options.standardImplementation !== true) loadGA(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (esm__typeof(config) !== 'object') {
        warn('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    esm_internalGa.apply(void 0, args);

    if (_debug) {
      log('called ga(\'arguments\');');
      log("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    warn('`fieldsObject` is required in .set()');
    return;
  }

  if (esm__typeof(fieldsObject) !== 'object') {
    warn('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    warn('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    log('called ga(\'set\', fieldsObject);');
    log("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    log('called ga(\'send\', fieldObject);');
    log("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    log("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    warn('path is required in .pageview()');
    return;
  }

  var path = trim(rawPath);

  if (path === '') {
    warn('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', esm__objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      log("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    warn('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = removeLeadingSlash(trim(rawModalName));

  if (modalName === '') {
    warn('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      log("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      warn('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function esm_event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = esm__objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      warn('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        warn('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        warn('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        warn('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          warn('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        warn('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var esm_plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        warn('`name` is required in .require()');
        return;
      }

      var name = trim(rawName);

      if (name === '') {
        warn('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (esm__typeof(options) !== 'object') {
          warn('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          warn('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          log("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          log("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        warn('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        warn('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            log("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    warn('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      warn('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
OutboundLink_OutboundLink.origTrackLink = OutboundLink_OutboundLink.trackLink;
OutboundLink_OutboundLink.trackLink = outboundLink;
var esm_OutboundLink = OutboundLink_OutboundLink;
var esm_testModeAPI = testModeAPI;
/* harmony default export */ var esm = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: esm_event,
  exception: exception,
  plugin: esm_plugin,
  outboundLink: outboundLink,
  OutboundLink: esm_OutboundLink,
  testModeAPI: testModeAPI
});
// EXTERNAL MODULE: ../node_modules/react-plx/lib/index.js
var lib = __webpack_require__("XbF1");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/react-window-size/index.js
var react_window_size = __webpack_require__("0wvK");
var react_window_size_default = /*#__PURE__*/__webpack_require__.n(react_window_size);

// EXTERNAL MODULE: ./components/splash/style.scss
var splash_style = __webpack_require__("YkeT");
var splash_style_default = /*#__PURE__*/__webpack_require__.n(splash_style);

// EXTERNAL MODULE: ./components/button/style.scss
var button_style = __webpack_require__("appZ");
var button_style_default = /*#__PURE__*/__webpack_require__.n(button_style);

// CONCATENATED MODULE: ./components/button/index.js


function button__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function button__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function button__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var button_Button = function (_Component) {
  button__inherits(Button, _Component);

  function Button(props) {
    button__classCallCheck(this, Button);

    var _this = button__possibleConstructorReturn(this, _Component.call(this, props));

    _this.getArrowDirection = function () {
      if (_this.props.direction === 'up') {
        return button_style_default.a.arrowUp;
      }
      if (_this.props.direction === 'down') {
        return button_style_default.a.arrowDown;
      }
    };

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


// CONCATENATED MODULE: ./components/splash/svg/SvgTop.js



var SvgTop__ref = Object(preact_min["h"])(
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
	return SvgTop__ref;
};

/* harmony default export */ var svg_SvgTop = (SvgTop);
// CONCATENATED MODULE: ./components/splash/svg/SvgMiddle.js



var SvgMiddle__ref = Object(preact_min["h"])(
	"svg",
	{ version: "1.1", "class": "ContoursMiddle", x: "0px", y: "0px", viewBox: "0 0 799.5 31.8", style: "animation: ticker linear infinite; animation-duration: 8s;" },
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
	{ version: "1.1", id: "Contours", x: "0px", y: "0px", viewBox: "0 0 701.3 42.6" },
	Object(preact_min["h"])(
		"g",
		null,
		Object(preact_min["h"])("path", { d: "M20.5,0c5.7,0,9.8,2,13.7,5.3c0.5,0.5,0.5,1.1,0.1,1.6l-2.5,2.5c-0.4,0.5-0.9,0.5-1.4,0c-2.7-2.3-6.3-3.8-9.8-3.8 c-8.1,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.1,0,7-1.6,9.7-3.7c0.5-0.4,1-0.3,1.4-0.1l2.6,2.6c0.5,0.4,0.3,1.1-0.1,1.5 c-3.9,3.7-8.7,5.5-13.8,5.4C9.1,40.7,0,31.6,0,20.3C0,9.1,9.1,0,20.5,0z" }),
		Object(preact_min["h"])("path", { d: "M45.1,1.7c0-0.6,0.5-1.1,1.1-1.1h15.4c6.8,0,12.3,5.4,12.3,12.1c0,5.2-3.5,9.5-8.4,11.5l7.7,14.4c0.4,0.7,0,1.6-1,1.6h-4.4 c-0.5,0-0.8-0.3-0.9-0.5l-7.5-15h-8.5v14.4c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L45.1,1.7z M61.1,19.9 c3.7,0,6.9-3.1,6.9-7c0-3.7-3.2-6.7-6.9-6.8H51v13.7L61.1,19.9z" }),
		Object(preact_min["h"])("path", { d: "M85.6,1.8c0-0.6,0.5-1.1,1.1-1.1l22.6,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1L91.4,6.1v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1H91.4v12.2l17.9,0.1c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1l-22.6-0.1 c-0.6,0-1.1-0.5-1.1-1.1L85.6,1.8L85.6,1.8z" }),
		Object(preact_min["h"])("path", { d: "M116.3,39l17.5-38c0.2-0.3,0.7-0.6,1-0.6h0.6c0.3,0,0.8,0.3,1,0.6l17.1,38.1c0.3,0.7-0.1,1.5-1,1.5h-3.6 c-0.7,0-1.1-0.3-1.3-0.8l-3.5-7.8l-18.5-0.1c-1.1,2.6-2.3,5.1-3.5,7.7c-0.2,0.4-0.6,0.8-1.3,0.8h-3.6C116.4,40.5,116,39.7,116.3,39 z M142,27.1l-6.9-15.5h-0.3l-6.9,15.5H142z" }),
		Object(preact_min["h"])("path", { d: "M165.4,6.3h-9.2c-0.6,0-1.1-0.5-1.1-1.1V2c0-0.6,0.5-1.1,1.1-1.1L180.5,1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1 h-9.2l-0.1,33.2c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L165.4,6.3z" }),
		Object(preact_min["h"])("path", { d: "M190.5,2.1c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,37.5c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1 L190.5,2.1z" }),
		Object(preact_min["h"])("path", { d: "M204.9,2.6c-0.3-0.7,0.1-1.5,1-1.5h4c0.5,0,0.8,0.3,1,0.6l12.4,28h0.3l12.5-28c0.1-0.3,0.5-0.6,1-0.6h4 c0.8,0,1.3,0.7,1,1.5l-17.5,38c-0.2,0.3-0.5,0.6-1,0.6H223c-0.4,0-0.8-0.3-1-0.6L204.9,2.6z" }),
		Object(preact_min["h"])("path", { d: "M250.6,2.3c0-0.6,0.5-1.1,1.1-1.1l22.6,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-17.9v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1v12.2h17.9c0.6,0,1.1,0.5,1.1,1.1V40c0,0.6-0.5,1.1-1.1,1.1L251.7,41 c-0.6,0-1.1-0.5-1.1-1.1V2.3z" }),
		Object(preact_min["h"])("path", { d: "M307.4,6.7h-9.2c-0.6,0-1.1-0.5-1.1-1.1V2.4c0-0.6,0.5-1.1,1.1-1.1l24.3,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2 c0,0.6-0.5,1.1-1.1,1.1h-9.2L313.2,40c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L307.4,6.7z" }),
		Object(preact_min["h"])("path", { d: "M332.6,2.5c0-0.6,0.5-1.1,1.1-1.1l22.6,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1l-17.9-0.1v11.5h15.1 c0.6,0,1.1,0.5,1.1,1.1v3.2c0,0.6-0.5,1.1-1.1,1.1h-15.1v12.2h17.9c0.6,0,1.1,0.5,1.1,1.1v3.1c0,0.6-0.5,1.1-1.1,1.1l-22.6-0.1 c-0.6,0-1.1-0.5-1.1-1.1L332.6,2.5L332.6,2.5z" }),
		Object(preact_min["h"])("path", { d: "M386.1,1.1c5.7,0,9.8,2,13.7,5.3c0.5,0.5,0.5,1.1,0.1,1.6l-2.5,2.5c-0.4,0.5-0.9,0.5-1.4,0c-2.7-2.3-6.3-3.8-9.8-3.8 c-8.1,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.1,0,7-1.6,9.7-3.7c0.5-0.4,1-0.3,1.4-0.1l2.6,2.6c0.5,0.4,0.3,1.1-0.1,1.5 c-3.9,3.7-8.7,5.5-13.8,5.4c-11.3,0-20.4-9.1-20.4-20.4C365.6,10.1,374.8,1,386.1,1.1z" }),
		Object(preact_min["h"])("path", { d: "M410.8,2.8c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1v15.8l20.7,0.1V2.9c0-0.6,0.5-1.1,1.1-1.1h3.7 c0.6,0,1.1,0.5,1.1,1.1l-0.1,37.5c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1V24l-20.7-0.1v16.3c0,0.6-0.5,1.1-1.1,1.1 h-3.7c-0.6,0-1.1-0.5-1.1-1.1L410.8,2.8z" }),
		Object(preact_min["h"])("path", { d: "M457.1,2.3c0-0.6,0.5-1,1.1-1h1.4l24.5,28.5h0.1L484.3,3c0-0.6,0.5-1.1,1.1-1.1h3.6c0.6,0,1.1,0.5,1.1,1.1L490,41.1 c0,0.6-0.5,1-1.1,1h-1.5l-24.5-29.3h-0.1l-0.1,27.6c0,0.6-0.5,1.1-1.1,1.1H458c-0.6,0-1.1-0.5-1.1-1.1L457.1,2.3z" }),
		Object(preact_min["h"])("path", { d: "M521.2,1.4c11.3,0,20.3,9.2,20.3,20.5s-9.1,20.3-20.4,20.3c-11.3,0-20.3-9.1-20.3-20.4C500.8,10.5,509.8,1.4,521.2,1.4z M521.1,36.5c8.1,0,14.7-6.5,14.8-14.6c0-8-6.6-14.8-14.7-14.8c-8,0-14.7,6.7-14.7,14.7C506.4,29.9,513,36.5,521.1,36.5z" }),
		Object(preact_min["h"])("path", { d: "M552.5,3.2c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,33.3h15.3c0.6,0,1.1,0.5,1.1,1.1v3.1 c0,0.6-0.5,1.1-1.1,1.1l-20.1-0.1c-0.6,0-1.1-0.5-1.1-1.1L552.5,3.2z" }),
		Object(preact_min["h"])("path", { d: "M600.6,1.7c5.4,0,9.9,2,13.7,5.3c0.4,0.5,0.5,1.1,0.1,1.6c-0.9,0.9-1.7,1.7-2.6,2.7c-0.5,0.5-0.9,0.4-1.5-0.1 c-2.7-2.3-6.2-3.9-9.6-3.9c-8,0-14.2,6.7-14.2,14.7c0,7.9,6.1,14.7,14.2,14.7c4.7,0,7.9-1.7,8.5-1.9v-6.3h-5.5 c-0.6,0-1.1-0.5-1.1-1v-3.3c0-0.6,0.5-1.1,1.1-1.1H614c0.6,0,1,0.5,1,1.1c0,4.5,0,9.2,0,13.7c0,0.3-0.2,0.7-0.5,0.9 c0,0-5.8,3.7-14,3.7c-11.3,0-20.3-9.1-20.3-20.4C580.2,10.7,589.4,1.6,600.6,1.7z" }),
		Object(preact_min["h"])("path", { d: "M626.8,3.4c0-0.6,0.5-1.1,1.1-1.1h3.7c0.6,0,1.1,0.5,1.1,1.1l-0.1,37.5c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1 L626.8,3.4z" }),
		Object(preact_min["h"])("path", { d: "M643.9,36.2c0.5-0.7,1-1.6,1.5-2.3s1.3-1,1.9-0.4c0.3,0.3,4.7,3.9,9,3.9c3.9,0,6.4-2.4,6.4-5.2c0-3.4-2.9-5.6-8.5-7.9 c-5.8-2.4-10.3-5.5-10.3-12c0-4.4,3.4-10.5,12.4-10.4c5.7,0,9.9,3,10.5,3.4c0.4,0.3,0.9,1.1,0.3,1.9c-0.5,0.7-1,1.5-1.4,2.1 c-0.5,0.7-1.2,1.1-2,0.6c-0.4-0.2-4.3-2.8-7.6-2.9c-4.8,0-6.4,3-6.4,5.1c0,3.2,2.5,5.2,7.2,7.1c6.6,2.7,12.1,5.8,12.1,12.7 c0,5.9-5.3,10.7-12.6,10.7c-6.9,0-11.2-3.7-12.2-4.5C643.7,37.6,643.3,37.2,643.9,36.2z" }),
		Object(preact_min["h"])("path", { d: "M685.1,7.8h-9.2c-0.6,0-1.1-0.5-1.1-1.1V3.5c0-0.6,0.5-1.1,1.1-1.1l24.3,0.1c0.6,0,1.1,0.5,1.1,1.1v3.2 c0,0.6-0.5,1.1-1.1,1.1H691l-0.1,33.2c0,0.6-0.5,1.1-1.1,1.1h-3.7c-0.6,0-1.1-0.5-1.1-1.1L685.1,7.8z" })
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












var height = 500; // default

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
    endValue: height,
    property: 'translateY'

  }]
}];

var splash__ref = Object(preact_min["h"])(svg_SvgTop, null);

var splash__ref2 = Object(preact_min["h"])(SvgMiddle, null);

var splash__ref3 = Object(preact_min["h"])(SvgMiddle, null);

var _ref4 = Object(preact_min["h"])(SvgBottom, null);

var splash_Splash = function (_Component) {
  splash__inherits(Splash, _Component);

  function Splash(props) {
    splash__classCallCheck(this, Splash);

    var _this = splash__possibleConstructorReturn(this, _Component.call(this, props));

    _this.getRandomInt = function (max) {
      return Math.floor(Math.random() * Math.floor(max));
    };

    _this.handleClick = function (e) {
      var contours = document.querySelectorAll('.ContoursMiddle');
      for (var i = 0; i < contours.length; i++) {
        if (contours[i].style.animationPlayState == 'running') {
          contours[i].style.animationPlayState = 'paused';
        } else {
          contours[i].style.animationPlayState = 'running';
        }
      }
    };

    return _this;
  }

  Splash.prototype.componentDidMount = function componentDidMount() {
    height = this.windowHeight / 2;
  };

  Splash.prototype.render = function render() {
    var _this2 = this;

    var $splashClasses = splash_style_default.a.splash + ' screen';
    return Object(preact_min["h"])(
      'splash',
      { className: $splashClasses },
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: parallaxData, className: 'splashParallaxWrapper' },
        splash__ref,
        Object(preact_min["h"])(
          'div',
          { 'class': 'squiggleWrapper', onClick: this.handleClick, title: 'Is this annoying? You can click to toggle animation on/off.' },
          splash__ref2,
          splash__ref3
        ),
        _ref4
      ),
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








var about_height = 500; // default

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

var buttonParallaxData = [{
  start: 'self',
  startOffset: 150,
  end: 'work',
  properties: [{
    startValue: 0,
    endValue: about_height,
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

var about__ref2 = Object(preact_min["h"])(
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
        '\u2026and I\'m assuming you\'re a technical director, or a creative director, or somebody who needs a website; you know, that type of thing. You\'re probably looking for a designer or a developer or both or better yet, you just read an article on Creative Technologists and Google brought you here. Which brings us to what may be your first question\u2026'
      ),
      Object(preact_min["h"])(
        'h2',
        { 'class': 'wtf' },
        'WTF is a creative technologist???'
      ),
      Object(preact_min["h"])(
        'p',
        null,
        'It\'s me! I\'m a Creative Technologist! I am a creative thinker from a technical POV. Equally adept at the creative and production phases of a project, I can dream up a product or campaign, put together a prototype, run a UX study, iterate on designs, and write production quality webcode all by my lonesome. I\'m comfortable in all roles along the production timeline, from UX to Art Director to Front-End Developer. Most of my experience has been in advertising, but I\'ve spent some time at a big tech company too. Here\u2019s a link to my ',
        Object(preact_min["h"])(
          'a',
          { href: 'assets/docs/resume_bill-pearce.pdf', target: '_blank' },
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
        'I\'m client friendly and I\'ve spoken at a few conferences. Here\'s a video of two of my talks: ',
        Object(preact_min["h"])(
          'a',
          { target: '_blank', href: 'assets/media/about/videos/wdc2018-ux.mp4' },
          'Guerilla-Style User Research'
        ),
        ' & ',
        Object(preact_min["h"])(
          'a',
          { target: '_blank', href: 'assets/media/about/videos/dtsummit2017-alexa.mp4' },
          'Thou Shalt Not Skill Without a Build Process'
        ),
        '. If you\'re not sick of the sound of my voice yet, here\'s a few videos of me explaining some IoT projects I\'ve done (I swear these were for work): ',
        Object(preact_min["h"])(
          'a',
          { target: '_blank', href: 'assets/media/about/videos/ABC Prototype - Dr Pepper_1.mp4' },
          'Arduino Beverage Coozy'
        ),
        ' & ',
        Object(preact_min["h"])(
          'a',
          { target: '_blank', href: 'assets/media/about/videos/Bill_FoodButton.mp4' },
          'The Office Food Button'
        ),
        '.',
        Object(preact_min["h"])('br', null),
        Object(preact_min["h"])('br', null),
        'I also have a few side-businesses in which I design and illustrate logos (there\'s a few in the work section) and teach ',
        Object(preact_min["h"])(
          'a',
          { href: 'https://en.wikipedia.org/wiki/Muay_Thai' },
          'Thai boxing'
        ),
        '. I am usually pretty good about not mixing those two up so don\'t feel like I\'m gonna head kick you if you ask me for a logo (unless you step out on the bill (jk!)).',
        Object(preact_min["h"])('br', null),
        Object(preact_min["h"])('br', null),
        'Don\'t be shy if you wanna reach out!'
      ),
      Object(preact_min["h"])(
        'h4',
        { 'class': 'selectable-text' },
        'billwpearce at gmail dot com'
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'socialLinkWrapper' },
        Object(preact_min["h"])(
          'a',
          { href: 'https://www.linkedin.com/in/billwpearce/', target: '_blank' },
          'linkedin'
        ),
        ' | ',
        Object(preact_min["h"])(
          'a',
          { href: 'https://github.com/wwpearce', target: '_blank' },
          'github'
        )
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

    console.log(react_window_size_default.a);
    return _this;
  }

  About.prototype.componentDidMount = function componentDidMount() {
    about_height = this.windowHeight / 2;
  };

  About.prototype.render = function render() {
    var _this2 = this;

    var $aboutClasses = about_style_default.a.about + ' screen';
    return Object(preact_min["h"])(
      'about',
      { className: $aboutClasses },
      about__ref,
      about__ref2,
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: buttonParallaxData, className: 'buttonWrapper' },
        Object(preact_min["h"])(button_Button, { text: 'ok bill, let\u2019s see some work', onButtonClick: function onButtonClick() {
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
      // this.props.toggleState('content');
      console.log(document.querySelector('content').classList);
      document.querySelector('.content-wrapper').classList.add('enter');
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

var content__ref2 = Object(preact_min["h"])(
  'h5',
  null,
  'Client(s):'
);

var content__ref3 = Object(preact_min["h"])(
  'h5',
  null,
  'Agency:'
);

var content__ref4 = Object(preact_min["h"])(
  'h5',
  null,
  'Role(s):'
);

var _ref5 = Object(preact_min["h"])(
  'h5',
  null,
  'Links:'
);

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
              Object(preact_min["h"])('img', { 'class': 'contentImage', src: array[i].url, alt: array[i].text }),
              Object(preact_min["h"])(
                'div',
                { 'class': 'contentInfo' },
                Object(preact_min["h"])(
                  'h4',
                  null,
                  array[i].text
                )
              )
            ));
          } else {
            media.push(Object(preact_min["h"])(
              'a',
              { 'class': 'contentImageLink', href: array[i].url, target: '_blank' },
              Object(preact_min["h"])('img', { 'class': 'contentImage', src: array[i].cropped, alt: array[i].text }),
              Object(preact_min["h"])(
                'div',
                { 'class': 'contentInfo' },
                Object(preact_min["h"])(
                  'h4',
                  null,
                  array[i].text
                )
              )
            ));
          }
        }
        if (type === 'vid') {
          media.push(Object(preact_min["h"])(
            'video',
            { 'class': 'contentVideo', 'data-alt': array[i].text, controls: true },
            Object(preact_min["h"])('source', { src: array[i].url, type: 'video/mp4' })
          ));
        }
      }
      return media;
    };

    _this.getVideo = function (object) {
      return Object(preact_min["h"])(
        'video',
        { 'class': 'contentVideo', 'data-alt': object.text, controls: true },
        Object(preact_min["h"])('source', { src: object.url, type: 'video/mp4' })
      );
    };

    _this.getBodyCopy = function (bodyCopy) {
      var html = [];
      var headers = ['The UX:', 'My Part:', 'Of Note:'];
      if (Array.isArray(bodyCopy)) {
        for (var i = 0; i < bodyCopy.length; i++) {
          html.push(Object(preact_min["h"])(
            'div',
            null,
            Object(preact_min["h"])(
              'h5',
              null,
              headers[i]
            ),
            Object(preact_min["h"])(
              'p',
              null,
              bodyCopy[i]
            )
          ));
        }
      } else {
        html.push(Object(preact_min["h"])(
          'p',
          null,
          bodyCopy
        ));
      }
      return html;
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

    var $contentClasses = content_style_default.a.content + ' ' + this.props.state.activeContentName + ' screen';
    var content = this.props.state.activeContent;
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
              'div',
              null,
              content__ref2,
              ' ',
              content.client
            ),
            Object(preact_min["h"])(
              'div',
              null,
              content__ref3,
              ' ',
              content.agency
            ),
            Object(preact_min["h"])(
              'div',
              null,
              content__ref4,
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
              })
            ),
            Object(preact_min["h"])(
              'div',
              null,
              _ref5,
              ' ',
              this.getLinks(content.links)
            )
          ),
          Object(preact_min["h"])(
            'div',
            { 'class': content_style_default.a.flexRight },
            this.getBodyCopy(content.bodyCopy)
          )
        )
      ),
      Object(preact_min["h"])(
        lib_default.a,
        { parallaxData: mediaParallaxData },
        Object(preact_min["h"])(
          'div',
          { 'class': content_style_default.a.mediaWrapper + ' mediaWrapper' },
          Object(preact_min["h"])(
            'h3',
            null,
            dist["isMobile"] ? "Tap" : "Click",
            ' to open image in new tab'
          ),
          this.getMedia(content.images, 'img')
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
      var offset = document.querySelector(section).offsetTop;
      modules["animateScroll"].scrollTo(offset);
    };

    _this.setContentState = function (contentName) {
      _this.setState({
        activeContentName: contentName,
        activeContent: _this.getContentFromShortName(contentName)
      });
      console.log(_this.state);
    };

    _this.handleHamburgerClick = function (e) {
      _this.toggleState('menu');
    };

    _this.initializeReactGA = function () {
      esm.initialize('UA-141037958-1');
      esm.pageview('/homepage');
    };

    _this.setState({
      section: 'splash',
      scrollPos: 0,
      state: 'default',
      dropdownOptions: site_contents["work"].tags,
      filters: [],
      activeContentName: 'dunkirk', // default
      activeContent: site_contents["work"].projects[0], // default
      filteredContentIndicies: []
    });
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.getSessionStorage();
    this.initializeReactGA();
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
      Object(preact_min["h"])(work_Work, { props: this.props, state: this.state, changeScrollPosition: this.changeScrollPosition, getContentFromShortName: this.getContentFromShortName, setContentState: this.setContentState, arraysEqual: arraysEqual, normalizeString: normalizeString, setState: this.setState, content: site_contents["work"], addListeners: addListeners, changeDropdownState: this.changeDropdownState, toggleState: this.toggleState })
    );

    var $content = Object(preact_min["h"])(
      'div',
      { className: 'content-wrapper' },
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

/***/ "MILo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "N2wP":
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

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("eW0v");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__("45fX");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "ORnL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__("7qbT");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

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

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement('a', _this.props, _this.props.children);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "OswP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"content__3mC6F","contentHeader":"contentHeader__3838E","flexWrapper":"flexWrapper__3H597","flexLeft":"flexLeft__3LnwA","flexRight":"flexRight__3FSAa","mediaWrapper":"mediaWrapper__2qsNm"};

/***/ }),

/***/ "RGc6":
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

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__("N2wP");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement('div', _extends({}, newProps, { ref: function ref(el) {
          _this2.props.parentBindings.domNode = el;
        } }), this.props.children);
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "SWjV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__("lkHq");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "T9hV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__("lkHq");

var _utils = __webpack_require__("yd8v");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

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
module.exports = {"splash":"splash__2UqTj","ticker":"ticker__1qbS8"};

/***/ }),

/***/ "ZGUF":
/***/ (function(module, exports) {

module.exports = {"menu":{"about":"about","work":"work","contact me":"contact me","resume":"resume"},"splash":{},"about":{"headline":"About","bodyCopy":"Hi! I'm Bill Pearce and I'm a Creative Technologist (WTF is a creative technologist). I've been working at creative agencies and tech companies for about thirteen years, wearing hats ranging from Art Director to Front-End Developer. Most recently, I worked at an internal creative agency inside Amazon, providing product and campaign solutions or clients. I split my time at Amazon working as the prototyping arm of a UX research team and as the technical guide in the advertising creative process. I can fit anywhere in the process of crafting user-centric products (UX, design, creative ideation, prototyping, development) but am most comfortable as the soft-technical arm of a small creative team. Whatever you're making, I can help you make it better!","images":{}},"resume":{"url":""},"work":{"tags":["web_development","ideation","chatbot","design","voice","ux","conversational_ux","prototyping","technical_consulting","ui_design","360_video","ar","art_direction","chatbot","development","hand_lettering","logo_design","mobile_development"],"projects":[{"visible":true,"name":"dunkirk","fullName":"Destination: Dunkirk","client":"Warner Brothers","agency":"Amazon Advertising","bodyCopy":["Users of Destination: Dunkirk were given three episodic, choose-your-own-adventure-style audio games. This Alexa Skill  told the story leading up to the film Dunkirk, giving user the option of playing as a foot soldier, tank-commander, or pilot. Users chose from a list of possible actions to navigate the story tree.","I was part of a three person team who ideated, wrote outlines and scripts, built prototypes, pitched, evaluated voice-over, sounds, illustrations, and oversaw technical production.","First episodic game for Alexa, worked directly with Christopher Nolan's team"],"thumbNail":"assets/media/work/thumbnails/dunkirk.jpg","images":[{"text":"Destination: Dunkirk was available on all Alexa Enabled devices.","url":"assets/media/content/dunkirk/dunkirk-01.jpg"}],"video":{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"assets/media/content/dunkirk/dunkirk-01.mp4"},"links":[{"text":"user flow","link":"//billwpearce.com/assets/media/content/dunkirk/dunkirk-02.jpg"},{"text":"video","link":"//billwpearce.com/assets/media/content/dunkirk/dunkirk-01.mp4"},{"text":"press","link":"//screenrant.com/dunkirk-movie-amazon-echo-alexa-skill/"}],"roles":["ideation","ux","technical consulting","prototyping"],"type":["Alexa Skill"],"tags":["ideation","ux","technical_consulting","prototyping","voice","conversational_ux","chatbot"]},{"visible":true,"name":"tgs","fullName":"The Greatest Showman","client":"Fox","agency":"Amazon Advertising","bodyCopy":["Lucky users who received a branded The Greatest Showman box from their regular Amazon orders were invited to scan the box using the Amazon app. Scanning the box takes users to a custom, mobile-only 360 video experience accessible only via scan.","I was the creative lead of a two person team who tackled the mobile 360 experience. We came up with the idea to leverage scanning on boxes, connected the 360 experience, and made all creative assets save for the 360 video. I wrote the front-end code for the mobile site.","First mobile-only site to come out of Amazon Advertising, first use of scanning on boxes"],"thumbNail":"assets/media/work/thumbnails/tgs.jpg","images":[{"text":"User flow illustrating how the user scans the box to access the mobile site.","url":"assets/media/content/tgs/tgs-01.jpg"}],"video":{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"//billwpearce.com/assets/media/content/tgs/tgs-01.mp4"},"links":[{"text":"video","link":"assets/media/content/tgs/tgs-01.mp4"},{"text":"press","link":"//bernardgolden.com/the-amazon-flywheel-prime-and-the-greatest-showman/"}],"roles":["ideation","ux","front-end development"],"type":["360 Video AR Experience"],"tags":["ideation","ux","art_direction","design","ui_design","development","web_development","ar","360_video"]},{"visible":true,"name":"spiderman","fullName":"Spider-Man Homecoming","client":"Sony","agency":"Amazon Advertising","bodyCopy":["Spider-man superfans are invited to add this Alexa Skill to their daily schedule and are rewarded with a unique piece of content, every day, for thirty days, leading up to the release of Spider-man: Homecoming. Content varied from jokes and Spider-man facts (as told by Alexa), cast interviews, and more!","I was the creative lead and ran ideation, UX, pitched the idea, and oversaw technical production.","4/5 stars"],"thumbNail":"assets/media/work/thumbnails/spiderman.jpg","images":[{"text":"Promo image from the campaign, which ran on the Amazon homepage.","url":"assets/media/content/spiderman/spiderman-01.jpg"}],"video":{},"links":[{"text":"skill","link":"//www.amazon.com/Sony-Pictures-Entertainment-Spider-Man/dp/B0711M1Z4B"},{"text":"user flow","link":"//billwpearce.com/assets/media/content/spiderman/spiderman-03.jpg"},{"text":"press","link":"//mikeshouts.com/get-spider-man-skill-on-alexa-enabled-devices/"}],"roles":["ideation","ux","technical consulting","prototyping"],"type":["Alexa Skill"],"tags":["ideation","technical_consulting","voice","chatbot"]},{"visible":true,"name":"afi","fullName":"American Family Insurance","client":"American Family Insurance","agency":"Amazon Advertising","bodyCopy":["Amazon users are presented with a quick and easy way to get an insurance quote online. Leveraging a chatbot and our access to internal Amazon data, users can get a quote for renters insurance in a snap.","I led a two person creative tech team that come up with the concept, built a prototype, pitched, and won the business.","The idea came out of the creative tech team and was pushed through to sale without being touched by a creative director. Due to internal Amazon rules and regulations, the chatbot was created to exploit a loophole and take the conversation off of Amazon.com property, while still being on an Amazon page."],"thumbNail":"assets/media/work/thumbnails/afi.jpg","images":[{"text":"The AFI chatbot lives inside of a landing page on Amazon.com","url":"assets/media/content/afi/afi-01.jpg"}],"video":{},"links":[{"text":"product","link":"//www.amazon.com/adlp/amfamconnectchat"},{"text":"video","link":"assets/media/content/afi/afi.mp4"}],"roles":["ideation","prototyping"],"type":["Chatbot"],"tags":["development","web_development","ideation","ux","prototyping","chatbot","conversational_ux","development"]},{"visible":true,"name":"twentyfour","fullName":"24 Legacy: Daily Mission","client":"Fox","agency":"Amazon Advertising","bodyCopy":["Fans of the show 24 were invited to use this daily content skill and receive a different 24 second challenge every day. These challenges had a tounge-in-cheek quality to them and could range from reciting the alphabet in 24 seconds to brushing your teeth in 24 seconds.","I sketched out the UX and coded the skill. All content was provided.","3.5/5 stars, first daily content skill from Amazon Advertising"],"thumbNail":"assets/media/work/thumbnails/twentyfour.png","images":[{"text":"Promo image from the campaign, which ran on the Amazon homepage.","url":"assets/media/content/twentyfour/twentyfour-01.jpg"}],"video":{"text":"Destination Dunkirk was available on all Alexa enabled devices.","url":"//billwpearce.com/assets/media/content/twentyfour/twentyfour-01.mp4"},"links":[{"text":"skill","link":"//www.amazon.com/Fox-Home-Ent-24-Mission/dp/B01N2ATPJZ"},{"text":"user-flow","link":"//http:billwpearce.com/assets/media/content/twentyfour/twentyfour-02.jpg"},{"text":"video","link":"//http:billwpearce.com/assets/media/content/twentyfour/twentyfour-01.mp4"},{"text":"press","link":"//variety.com/2017/digital/news/fox-24-legacy-amazons-alexa-alarm-1201972472/"}],"type":["Alexa Skill"],"roles":["ideation","ux","development"],"tags":["voice","development","web_development","chatbot"]},{"visible":true,"name":"wwe","fullName":"WWe.com","client":"WWE","agency":"Code & Theory","bodyCopy":"I was part of a small team that re-did the WWE website. I did most of the front-end development / theming of this site, mobile and desktop. This site was built with Drupal. No developers were body slammed during the production of this site.","thumbNail":"assets/media/work/thumbnails/wwe.jpg","images":[{"text":"wwe.com","url":"assets/media/content/wwe/wwe-01.jpg"}],"video":{},"links":[{"text":"site","link":"//www.wwe.com/"}],"roles":["front-end development"],"type":["website"],"tags":["development","web_development","mobile_development"]},{"visible":true,"name":"spg","fullName":"SPG.com","client":"Starwood Hotels","agency":"Code & Theory","bodyCopy":"I ran the front-end development for the redesign of SPG.com, which was a points redemption site for Starwood Hotels. I ran the front-end development of this site, including supervising two other developers. This site was written in Java and uses JSPs.","thumbNail":"assets/media/work/thumbnails/spg.jpg","images":[{"text":"spg","url":"assets/media/content/spg/spg-01.jpg"}],"video":{},"links":[{"text":"waybacklink","link":"//web.archive.org/web/20170601003220///www.starwoodhotels.com/preferredguest/index.html"},{"text":"press","link":"//www.codeandtheory.com/things-we-make/starwood-preferred-guest-rewards-redemption-website"}],"roles":["front-end development"],"type":["website"],"tags":["development","web_development","mobile_development"]},{"visible":true,"name":"bernadettes","fullName":"Bernadette’s","client":"Bernadette’s","agency":"Freelance","bodyCopy":"Bernadette’s is a bar in downtown Los Angeles. The uppercase “B” is hand-lettered and the rest is type. I made a badge for square collateral needs.","thumbNail":"assets/media/work/thumbnails/bernadettes.jpg","images":[{"text":"In the wild.","url":"assets/media/content/bernadettes/bernadettes-02.jpg"},{"text":"","url":"assets/media/content/bernadettes/bernadettes-01.jpg"}],"video":{},"links":[{"text":"site","link":"//www.bernadettesla.com/"}],"roles":["logo design","hand lettering"],"type":["logo"],"tags":["ideation","design","logo_design","hand_lettering"]}]}}

/***/ }),

/***/ "appZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"scroll":"scroll__10gvT","arrowDown":"arrowDown__1LJzA","pulse":"pulse__2_HFW","arrowUp":"arrowUp__1Dtgy"};

/***/ }),

/***/ "cX2q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

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

/***/ "f+fx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

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

var React = __webpack_require__("eW0v");
var ReactDOM = __webpack_require__("eW0v");

var utils = __webpack_require__("yd8v");
var scrollSpy = __webpack_require__("JAZJ");
var defaultScroller = __webpack_require__("45fX");
var PropTypes = __webpack_require__("5D9O");
var scrollHash = __webpack_require__("T9hV");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "kD/w":
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

var _utils = __webpack_require__("yd8v");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__("MILo");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__("SWjV");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__("cX2q");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return Math.max(containerElement.scrollHeight, containerElement.offsetHeight, containerElement.clientHeight);
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

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

/***/ "lB5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__("ORnL");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__("9km1");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__("RGc6");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__("45fX");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__("cX2q");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__("JAZJ");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__("kD/w");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__("7qbT");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__("N2wP");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__("f+fx");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "lkHq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
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

/***/ }),

/***/ "yd8v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
    // remove hash
    : loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map