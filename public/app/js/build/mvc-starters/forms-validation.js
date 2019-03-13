(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var _numOfFacts = _interopRequireDefault(require("../../controllers/forms-validation/index/num-of-facts"));

var _factNumInRange = _interopRequireDefault(require("../../controllers/forms-validation/index/fact-num-in-range"));

var _particularFactNumbers = _interopRequireDefault(require("../../controllers/forms-validation/index/particular-fact-numbers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Defining controllers
var numOfFactsController = new _numOfFacts.default();
var factNumInRangeController = new _factNumInRange.default();
var particularFactNumbersController = new _particularFactNumbers.default(); // Getting form elements

var numOfFactsForm = numOfFactsController.getView().getForm();
var factNumInRangeForm = factNumInRangeController.getView().getForm();
var particularFactNumbersForm = particularFactNumbersController.getView().getForm(); // Binding events on forms

numOfFactsForm.addEventListener('submit', function (event) {
  return numOfFactsController.validate(event);
});
factNumInRangeForm.addEventListener('submit', function (event) {
  return factNumInRangeController.validate(event);
});
particularFactNumbersForm.addEventListener('submit', function (event) {
  return particularFactNumbersController.validate(event);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzg0NmM2YWMuanMiXSwibmFtZXMiOlsibnVtT2ZGYWN0c0NvbnRyb2xsZXIiLCJOdW1PZkZhY3RzQ29udHJvbGxlciIsImZhY3ROdW1JblJhbmdlQ29udHJvbGxlciIsIkZhY3ROdW1JblJhbmdlQ29udHJvbGxlciIsInBhcnRpY3VsYXJGYWN0TnVtYmVyc0NvbnRyb2xsZXIiLCJQYXJ0aWN1bGFyRmFjdE51bWJlcnNDb250cm9sbGVyIiwibnVtT2ZGYWN0c0Zvcm0iLCJnZXRWaWV3IiwiZ2V0Rm9ybSIsImZhY3ROdW1JblJhbmdlRm9ybSIsInBhcnRpY3VsYXJGYWN0TnVtYmVyc0Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsSUFBSUMsbUJBQUosRUFBM0I7QUFDQSxJQUFJQyx3QkFBd0IsR0FBRyxJQUFJQyx1QkFBSixFQUEvQjtBQUNBLElBQUlDLCtCQUErQixHQUFHLElBQUlDLDhCQUFKLEVBQXRDLEMsQ0FFQTs7QUFDQSxJQUFJQyxjQUFjLEdBQUdOLG9CQUFvQixDQUFDTyxPQUFyQixHQUErQkMsT0FBL0IsRUFBckI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBR1Asd0JBQXdCLENBQUNLLE9BQXpCLEdBQW1DQyxPQUFuQyxFQUF6QjtBQUNBLElBQUlFLHlCQUF5QixHQUFHTiwrQkFBK0IsQ0FBQ0csT0FBaEMsR0FBMENDLE9BQTFDLEVBQWhDLEMsQ0FFQTs7QUFDQUYsY0FBYyxDQUFDSyxnQkFBZixDQUNJLFFBREosRUFFSSxVQUFDQyxLQUFEO0FBQUEsU0FBV1osb0JBQW9CLENBQUNhLFFBQXJCLENBQThCRCxLQUE5QixDQUFYO0FBQUEsQ0FGSjtBQUtBSCxrQkFBa0IsQ0FBQ0UsZ0JBQW5CLENBQ0ksUUFESixFQUVJLFVBQUNDLEtBQUQ7QUFBQSxTQUFXVix3QkFBd0IsQ0FBQ1csUUFBekIsQ0FBa0NELEtBQWxDLENBQVg7QUFBQSxDQUZKO0FBS0FGLHlCQUF5QixDQUFDQyxnQkFBMUIsQ0FDSSxRQURKLEVBRUksVUFBQ0MsS0FBRDtBQUFBLFNBQVdSLCtCQUErQixDQUFDUyxRQUFoQyxDQUF5Q0QsS0FBekMsQ0FBWDtBQUFBLENBRkoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTnVtT2ZGYWN0c0NvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvZm9ybXMtdmFsaWRhdGlvbi9pbmRleC9udW0tb2YtZmFjdHMnO1xyXG5pbXBvcnQgRmFjdE51bUluUmFuZ2VDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL2Zvcm1zLXZhbGlkYXRpb24vaW5kZXgvZmFjdC1udW0taW4tcmFuZ2UnO1xyXG5pbXBvcnQgUGFydGljdWxhckZhY3ROdW1iZXJzQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9mb3Jtcy12YWxpZGF0aW9uL2luZGV4L3BhcnRpY3VsYXItZmFjdC1udW1iZXJzJztcclxuXHJcbi8vIERlZmluaW5nIGNvbnRyb2xsZXJzXHJcbmxldCBudW1PZkZhY3RzQ29udHJvbGxlciA9IG5ldyBOdW1PZkZhY3RzQ29udHJvbGxlcjtcclxubGV0IGZhY3ROdW1JblJhbmdlQ29udHJvbGxlciA9IG5ldyBGYWN0TnVtSW5SYW5nZUNvbnRyb2xsZXI7XHJcbmxldCBwYXJ0aWN1bGFyRmFjdE51bWJlcnNDb250cm9sbGVyID0gbmV3IFBhcnRpY3VsYXJGYWN0TnVtYmVyc0NvbnRyb2xsZXI7XHJcblxyXG4vLyBHZXR0aW5nIGZvcm0gZWxlbWVudHNcclxubGV0IG51bU9mRmFjdHNGb3JtID0gbnVtT2ZGYWN0c0NvbnRyb2xsZXIuZ2V0VmlldygpLmdldEZvcm0oKTtcclxubGV0IGZhY3ROdW1JblJhbmdlRm9ybSA9IGZhY3ROdW1JblJhbmdlQ29udHJvbGxlci5nZXRWaWV3KCkuZ2V0Rm9ybSgpO1xyXG5sZXQgcGFydGljdWxhckZhY3ROdW1iZXJzRm9ybSA9IHBhcnRpY3VsYXJGYWN0TnVtYmVyc0NvbnRyb2xsZXIuZ2V0VmlldygpLmdldEZvcm0oKTtcclxuXHJcbi8vIEJpbmRpbmcgZXZlbnRzIG9uIGZvcm1zXHJcbm51bU9mRmFjdHNGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnc3VibWl0JyxcclxuICAgIChldmVudCkgPT4gbnVtT2ZGYWN0c0NvbnRyb2xsZXIudmFsaWRhdGUoZXZlbnQpXHJcbik7XHJcblxyXG5mYWN0TnVtSW5SYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdzdWJtaXQnLFxyXG4gICAgKGV2ZW50KSA9PiBmYWN0TnVtSW5SYW5nZUNvbnRyb2xsZXIudmFsaWRhdGUoZXZlbnQpXHJcbik7XHJcblxyXG5wYXJ0aWN1bGFyRmFjdE51bWJlcnNGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnc3VibWl0JywgXHJcbiAgICAoZXZlbnQpID0+IHBhcnRpY3VsYXJGYWN0TnVtYmVyc0NvbnRyb2xsZXIudmFsaWRhdGUoZXZlbnQpXHJcbik7Il19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_c846c6ac.js","/")
},{"../../controllers/forms-validation/index/fact-num-in-range":8,"../../controllers/forms-validation/index/num-of-facts":9,"../../controllers/forms-validation/index/particular-fact-numbers":10,"6r38Q7":35,"buffer":33}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview Base config
 * @namespace NikitosGolubev\Configs
 */

/**
 * Base config which determines common constants, MUST be inheritated
 * by other configs.
 */
var Config = function Config() {
  _classCallCheck(this, Config);
};

exports.default = Config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7O0lBSXFCQSxNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQmFzZSBjb25maWdcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcQ29uZmlnc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNvbmZpZyB3aGljaCBkZXRlcm1pbmVzIGNvbW1vbiBjb25zdGFudHMsIE1VU1QgYmUgaW5oZXJpdGF0ZWRcclxuICogYnkgb3RoZXIgY29uZmlncy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZyB7XHJcbiAgICBcclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\configs\\config.js","/..\\..\\configs")
},{"6r38Q7":35,"buffer":33}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Config class for 'num of facts' form
 * @uses NikitosGolubev\Configs\Config
 */
var NumOfFactsConfig =
/*#__PURE__*/
function (_Config) {
  _inherits(NumOfFactsConfig, _Config);

  function NumOfFactsConfig() {
    _classCallCheck(this, NumOfFactsConfig);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumOfFactsConfig).apply(this, arguments));
  }

  _createClass(NumOfFactsConfig, null, [{
    key: "FORM_SELECTOR",

    /**
     * Selector which specifies 'num of facts' form
     * 
     * @const
     * @static
     * @type {String}
     */
    get: function get() {
      return '.js-num-of-facts-form';
    }
    /**
     * Selector for 'category' field
     * 
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "CATEGORY_FIELD_SELECTOR",
    get: function get() {
      return '.js-num-of-facts-form__category';
    }
    /**
     * Selector for 'number of facts to parse' field
     * 
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "NUM_OF_FACTS_FIELD_SELECTOR",
    get: function get() {
      return '.js-num-of-facts-form__num-of-facts';
    }
  }]);

  return NumOfFactsConfig;
}(_config.default);

exports.default = NumOfFactsConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bS1vZi1mYWN0cy1jb25maWcuanMiXSwibmFtZXMiOlsiTnVtT2ZGYWN0c0NvbmZpZyIsIkNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7Ozt3QkFPMkI7QUFDdkIsYUFBTyx1QkFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7d0JBT3FDO0FBQ2pDLGFBQU8saUNBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7O3dCQU95QztBQUNyQyxhQUFPLHFDQUFQO0FBQ0g7Ozs7RUFoQ3lDQyxlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ29uZmlnIGZpbGUgZm9yICdudW0gb2YgZmFjdHMnIGZvcm1cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcQ29uZmlnc1xcRm9ybXNcclxuICovXHJcblxyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG4vKipcclxuICogQ29uZmlnIGNsYXNzIGZvciAnbnVtIG9mIGZhY3RzJyBmb3JtXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxDb25maWdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bU9mRmFjdHNDb25maWcgZXh0ZW5kcyBDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3RvciB3aGljaCBzcGVjaWZpZXMgJ251bSBvZiBmYWN0cycgZm9ybVxyXG4gICAgICogXHJcbiAgICAgKiBAY29uc3RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgRk9STV9TRUxFQ1RPUigpIHtcclxuICAgICAgICByZXR1cm4gJy5qcy1udW0tb2YtZmFjdHMtZm9ybSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3RvciBmb3IgJ2NhdGVnb3J5JyBmaWVsZFxyXG4gICAgICogXHJcbiAgICAgKiBAY29uc3RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgQ0FURUdPUllfRklFTERfU0VMRUNUT1IoKSB7XHJcbiAgICAgICAgcmV0dXJuICcuanMtbnVtLW9mLWZhY3RzLWZvcm1fX2NhdGVnb3J5JztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdG9yIGZvciAnbnVtYmVyIG9mIGZhY3RzIHRvIHBhcnNlJyBmaWVsZFxyXG4gICAgICogXHJcbiAgICAgKiBAY29uc3RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgTlVNX09GX0ZBQ1RTX0ZJRUxEX1NFTEVDVE9SKCkge1xyXG4gICAgICAgIHJldHVybiAnLmpzLW51bS1vZi1mYWN0cy1mb3JtX19udW0tb2YtZmFjdHMnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\configs\\forms\\num-of-facts-config.js","/..\\..\\configs\\forms")
},{"../config":2,"6r38Q7":35,"buffer":33}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validationConfig = _interopRequireDefault(require("./validation-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Config for parse validation forms
 * @uses NikitosGolubev\Configs\Validation\ValidationConfig
 */
var ParseValidationConfig =
/*#__PURE__*/
function (_ValidationConfig) {
  _inherits(ParseValidationConfig, _ValidationConfig);

  function ParseValidationConfig() {
    _classCallCheck(this, ParseValidationConfig);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParseValidationConfig).apply(this, arguments));
  }

  _createClass(ParseValidationConfig, null, [{
    key: "MIN_FACT_NUMBER",

    /**
     * Returns min value of fact number that could be parsed
     * 
     * @const
     * @static
     * @type {Integer}
     */
    get: function get() {
      return 0;
    }
    /**
     * Returns max value of fact number that could be parsed
     * 
     * @const
     * @static
     * @type {Integer}
     */

  }, {
    key: "MAX_FACT_NUMBER",
    get: function get() {
      return 9999;
    }
    /**
     * Returns max amount of numbers that could be parsed at single request
     * 
     * @const
     * @static
     * @type {Integer}
     */

  }, {
    key: "MAX_NUM_ITEMS_TO_PARSE",
    get: function get() {
      return 100;
    }
    /**
     * Message that shows to user if he has't selected the category of
     * parsed facts.
     *
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "CATEGORY_NOT_SELECTED",
    get: function get() {
      return 'Select the category';
    }
    /**
     * Number of facts to parse per single request invalid message
     *
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "NUM_OF_FACTS_INVALID",
    get: function get() {
      return "You can't parse more <b>".concat(this.MAX_NUM_ITEMS_TO_PARSE, "</b> facts and less than <b>0</b>.");
    }
  }]);

  return ParseValidationConfig;
}(_validationConfig.default);

exports.default = ParseValidationConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLXZhbGlkYXRpb24tY29uZmlnLmpzIl0sIm5hbWVzIjpbIlBhcnNlVmFsaWRhdGlvbkNvbmZpZyIsIk1BWF9OVU1fSVRFTVNfVE9fUEFSU0UiLCJWYWxpZGF0aW9uQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEscUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs7O3dCQU82QjtBQUN6QixhQUFPLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7O3dCQU82QjtBQUN6QixhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7O3dCQU9vQztBQUNoQyxhQUFPLEdBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozt3QkFRbUM7QUFDL0IsYUFBTyxxQkFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7d0JBT2tDO0FBQzlCLCtDQUFrQyxLQUFLQyxzQkFBdkM7QUFDSDs7OztFQXZEOENDLHlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQ29uZmlnIGZvciBwYXJzZSB2YWxpZGF0aW9uIGZvcm1zIFxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxWYWxpZGF0aW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IFZhbGlkYXRpb25Db25maWcgZnJvbSAnLi92YWxpZGF0aW9uLWNvbmZpZyc7XHJcblxyXG4vKipcclxuICogQ29uZmlnIGZvciBwYXJzZSB2YWxpZGF0aW9uIGZvcm1zXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxWYWxpZGF0aW9uXFxWYWxpZGF0aW9uQ29uZmlnXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVZhbGlkYXRpb25Db25maWcgZXh0ZW5kcyBWYWxpZGF0aW9uQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBtaW4gdmFsdWUgb2YgZmFjdCBudW1iZXIgdGhhdCBjb3VsZCBiZSBwYXJzZWRcclxuICAgICAqIFxyXG4gICAgICogQGNvbnN0XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7SW50ZWdlcn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBNSU5fRkFDVF9OVU1CRVIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIG1heCB2YWx1ZSBvZiBmYWN0IG51bWJlciB0aGF0IGNvdWxkIGJlIHBhcnNlZFxyXG4gICAgICogXHJcbiAgICAgKiBAY29uc3RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtJbnRlZ2VyfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IE1BWF9GQUNUX05VTUJFUigpIHtcclxuICAgICAgICByZXR1cm4gOTk5OTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgbWF4IGFtb3VudCBvZiBudW1iZXJzIHRoYXQgY291bGQgYmUgcGFyc2VkIGF0IHNpbmdsZSByZXF1ZXN0XHJcbiAgICAgKiBcclxuICAgICAqIEBjb25zdFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge0ludGVnZXJ9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgTUFYX05VTV9JVEVNU19UT19QQVJTRSgpIHtcclxuICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVzc2FnZSB0aGF0IHNob3dzIHRvIHVzZXIgaWYgaGUgaGFzJ3Qgc2VsZWN0ZWQgdGhlIGNhdGVnb3J5IG9mXHJcbiAgICAgKiBwYXJzZWQgZmFjdHMuXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IENBVEVHT1JZX05PVF9TRUxFQ1RFRCgpIHtcclxuICAgICAgICByZXR1cm4gJ1NlbGVjdCB0aGUgY2F0ZWdvcnknO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTnVtYmVyIG9mIGZhY3RzIHRvIHBhcnNlIHBlciBzaW5nbGUgcmVxdWVzdCBpbnZhbGlkIG1lc3NhZ2VcclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgTlVNX09GX0ZBQ1RTX0lOVkFMSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBZb3UgY2FuJ3QgcGFyc2UgbW9yZSA8Yj4ke3RoaXMuTUFYX05VTV9JVEVNU19UT19QQVJTRX08L2I+IGZhY3RzIGFuZCBsZXNzIHRoYW4gPGI+MDwvYj4uYDtcclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\configs\\validation\\parse-validation-config.js","/..\\..\\configs\\validation")
},{"./validation-config":5,"6r38Q7":35,"buffer":33}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Common validation config
 * @uses NikitosGolubev\Configs\Config
 */
var ValidationConfig =
/*#__PURE__*/
function (_Config) {
  _inherits(ValidationConfig, _Config);

  function ValidationConfig() {
    _classCallCheck(this, ValidationConfig);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValidationConfig).apply(this, arguments));
  }

  _createClass(ValidationConfig, null, [{
    key: "DEFAULT_SUCCESS_MESSAGE",

    /**
     * Default message, which may appear if validation succeeded
     *
     * @const
     * @static
     * @type {String}
     */
    get: function get() {
      return 'Looks good!';
    }
    /**
     * Default message, which may appear if validation failed
     *
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "DEFAULT_FAIL_MESSAGE",
    get: function get() {
      return 'Something wrong :(';
    }
    /**
     * Default message if field is empty
     *
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "EMPTY_FIELD_MESSAGE",
    get: function get() {
      return 'Field is empty';
    }
    /**
     * Default message if integer is required but user passed invalid data type
     *
     * @const
     * @static
     * @type {String}
     */

  }, {
    key: "INTEGER_REQUIRED_MESSAGE",
    get: function get() {
      return 'Pass <b>integer</b> please';
    }
  }]);

  return ValidationConfig;
}(_config.default);

exports.default = ValidationConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tY29uZmlnLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25Db25maWciLCJDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7Ozs7d0JBT3FDO0FBQ2pDLGFBQU8sYUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7d0JBT2tDO0FBQzlCLGFBQU8sb0JBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7O3dCQU9pQztBQUM3QixhQUFPLGdCQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozt3QkFPc0M7QUFDbEMsYUFBTyw0QkFBUDtBQUNIOzs7O0VBM0N5Q0MsZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IENvbW1vbiB2YWxpZGF0aW9uIGNvbmZpZ1xyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxWYWxpZGF0aW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIENvbW1vbiB2YWxpZGF0aW9uIGNvbmZpZ1xyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcQ29uZmlnc1xcQ29uZmlnXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uQ29uZmlnIGV4dGVuZHMgQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBtZXNzYWdlLCB3aGljaCBtYXkgYXBwZWFyIGlmIHZhbGlkYXRpb24gc3VjY2VlZGVkXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IERFRkFVTFRfU1VDQ0VTU19NRVNTQUdFKCkge1xyXG4gICAgICAgIHJldHVybiAnTG9va3MgZ29vZCEnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgbWVzc2FnZSwgd2hpY2ggbWF5IGFwcGVhciBpZiB2YWxpZGF0aW9uIGZhaWxlZFxyXG4gICAgICpcclxuICAgICAqIEBjb25zdFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBERUZBVUxUX0ZBSUxfTUVTU0FHRSgpIHtcclxuICAgICAgICByZXR1cm4gJ1NvbWV0aGluZyB3cm9uZyA6KCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IG1lc3NhZ2UgaWYgZmllbGQgaXMgZW1wdHlcclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgRU1QVFlfRklFTERfTUVTU0FHRSgpIHtcclxuICAgICAgICByZXR1cm4gJ0ZpZWxkIGlzIGVtcHR5JztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgbWVzc2FnZSBpZiBpbnRlZ2VyIGlzIHJlcXVpcmVkIGJ1dCB1c2VyIHBhc3NlZCBpbnZhbGlkIGRhdGEgdHlwZVxyXG4gICAgICpcclxuICAgICAqIEBjb25zdFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBJTlRFR0VSX1JFUVVJUkVEX01FU1NBR0UoKSB7XHJcbiAgICAgICAgcmV0dXJuICdQYXNzIDxiPmludGVnZXI8L2I+IHBsZWFzZSc7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\configs\\validation\\validation-config.js","/..\\..\\configs\\validation")
},{"../config":2,"6r38Q7":35,"buffer":33}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Base controller.
 * @namespace NikitosGolubev\Controllers
 */

/**
 * Base controller, which should be inheritated by other controllers.
 * Abstract class.
 */
var Controller =
/*#__PURE__*/
function () {
  function Controller(model, view) {
    _classCallCheck(this, Controller);

    try {
      if (!model || !view) {
        throw new Error('Provide "view" and "model" to controller constructor.');
      }
    } catch (e) {
      console.log("".concat(e.name, ": ").concat(e.message));
    }

    this.model = model;
    this.view = view;
  }
  /**
   * View getter
   * @returns {Object} View
   */


  _createClass(Controller, [{
    key: "getView",
    value: function getView() {
      return this.view;
    }
  }]);

  return Controller;
}();

exports.default = Controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7O0lBSXFCQSxVOzs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUJDLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3hCLFFBQUk7QUFDQSxVQUFJLENBQUNELEtBQUQsSUFBVSxDQUFDQyxJQUFmLEVBQXFCO0FBQ2pCLGNBQU0sSUFBSUMsS0FBSixDQUFVLHVEQUFWLENBQU47QUFDSDtBQUNKLEtBSkQsQ0FJRSxPQUFPQyxDQUFQLEVBQVU7QUFDUkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLENBQUMsQ0FBQ0csSUFBakIsZUFBMEJILENBQUMsQ0FBQ0ksT0FBNUI7QUFDSDs7QUFFRSxTQUFLUCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUVEOzs7Ozs7Ozs4QkFJVTtBQUFFLGFBQU8sS0FBS0EsSUFBWjtBQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEJhc2UgY29udHJvbGxlci5cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcQ29udHJvbGxlcnNcclxuICovXHJcblxyXG4vKipcclxuICogQmFzZSBjb250cm9sbGVyLCB3aGljaCBzaG91bGQgYmUgaW5oZXJpdGF0ZWQgYnkgb3RoZXIgY29udHJvbGxlcnMuXHJcbiAqIEFic3RyYWN0IGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xyXG4gICAgXHR0cnkge1xyXG4gICAgXHQgICAgaWYgKCFtb2RlbCB8fCAhdmlldykge1xyXG4gICAgXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBcInZpZXdcIiBhbmQgXCJtb2RlbFwiIHRvIGNvbnRyb2xsZXIgY29uc3RydWN0b3IuJyk7XHJcbiAgICBcdCAgICB9XHJcbiAgICBcdH0gY2F0Y2ggKGUpIHtcclxuICAgIFx0ICAgIGNvbnNvbGUubG9nKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgXHR9XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgfVxyXG4gXHJcbiAgICAvKipcclxuICAgICAqIFZpZXcgZ2V0dGVyXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBWaWV3XHJcbiAgICAgKi9cclxuICAgIGdldFZpZXcoKSB7IHJldHVybiB0aGlzLnZpZXc7IH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\controller.js","/..\\..\\controllers")
},{"6r38Q7":35,"buffer":33}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("../controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Provides API to validate forms
 * @uses NikitosGolubev\Controllers\Controller
 */
var FormsValidationController =
/*#__PURE__*/
function (_Controller) {
  _inherits(FormsValidationController, _Controller);

  function FormsValidationController(model, view) {
    _classCallCheck(this, FormsValidationController);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormsValidationController).call(this, model, view));
  }
  /**
   * Abstract method which attaches to form and validates it when some event happens
   * @param  {object} event Event Object
   */


  _createClass(FormsValidationController, [{
    key: "validate",
    value: function validate(event) {
      throw new Error('This is abstract method of interface!');
    }
  }]);

  return FormsValidationController;
}(_controller.default);

exports.default = FormsValidationController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLXZhbGlkYXRpb24tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyIiwibW9kZWwiLCJ2aWV3IiwiZXZlbnQiLCJFcnJvciIsIkNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSx5Qjs7Ozs7QUFDakIscUNBQVlDLEtBQVosRUFBbUJDLElBQW5CLEVBQXlCO0FBQUE7O0FBQUEsa0dBQVFELEtBQVIsRUFBZUMsSUFBZjtBQUF1QjtBQUVoRDs7Ozs7Ozs7NkJBSVNDLEssRUFBTztBQUNaLFlBQU0sSUFBSUMsS0FBSixDQUFVLHVDQUFWLENBQU47QUFDSDs7OztFQVRrREMsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBJbnRlcmZhY2UgZm9yIGZvcm1zIHZhbGlkYXRpb25zXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXENvbnRyb2xsZXJzXFxGb3Jtc1ZhbGlkYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBBUEkgdG8gdmFsaWRhdGUgZm9ybXNcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXENvbnRyb2xsZXJzXFxDb250cm9sbGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykgeyBzdXBlcihtb2RlbCwgdmlldyk7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFic3RyYWN0IG1ldGhvZCB3aGljaCBhdHRhY2hlcyB0byBmb3JtIGFuZCB2YWxpZGF0ZXMgaXQgd2hlbiBzb21lIGV2ZW50IGhhcHBlbnNcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgRXZlbnQgT2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGlzIGFic3RyYWN0IG1ldGhvZCBvZiBpbnRlcmZhY2UhJyk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\forms-validation\\forms-validation-controller.js","/..\\..\\controllers\\forms-validation")
},{"../controller":6,"6r38Q7":35,"buffer":33}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationController = _interopRequireDefault(require("../forms-validation-controller"));

var _factNumInRange = _interopRequireDefault(require("../../../models/forms-validation/forms-models/fact-num-in-range"));

var _factNumInRange2 = _interopRequireDefault(require("../../../views/forms-validation/forms-views/fact-num-in-range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Provides API to validate "fact numbers in range" form on index page
 * 
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Models\FormsValidation\FormsModels\FactNumInRangeModel
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\FactNumInRangeView
 */
var FactNumInRangeController =
/*#__PURE__*/
function (_FormsValidationContr) {
  _inherits(FactNumInRangeController, _FormsValidationContr);

  function FactNumInRangeController() {
    _classCallCheck(this, FactNumInRangeController);

    var model = new _factNumInRange.default();
    var view = new _factNumInRange2.default(model);
    return _possibleConstructorReturn(this, _getPrototypeOf(FactNumInRangeController).call(this, model, view));
  }
  /**
   * @see FormsValidationController validate() method
   */


  _createClass(FactNumInRangeController, [{
    key: "validate",
    value: function validate(event) {
      this.model.validate(event);
    }
  }]);

  return FactNumInRangeController;
}(_formsValidationController.default);

exports.default = FactNumInRangeController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3QtbnVtLWluLXJhbmdlLmpzIl0sIm5hbWVzIjpbIkZhY3ROdW1JblJhbmdlQ29udHJvbGxlciIsIm1vZGVsIiwiRmFjdE51bUluUmFuZ2VNb2RlbCIsInZpZXciLCJGYWN0TnVtSW5SYW5nZVZpZXciLCJldmVudCIsInZhbGlkYXRlIiwiRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPcUJBLHdCOzs7OztBQUNqQixzQ0FBYztBQUFBOztBQUNWLFFBQUlDLEtBQUssR0FBRyxJQUFJQyx1QkFBSixFQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQUlDLHdCQUFKLENBQXVCSCxLQUF2QixDQUFYO0FBRlUsaUdBR0pBLEtBSEksRUFHR0UsSUFISDtBQUliO0FBRUQ7Ozs7Ozs7NkJBR1NFLEssRUFBTztBQUNaLFdBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkQsS0FBcEI7QUFDSDs7OztFQVppREUsa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBWYWxpZGF0aW9uIGNvbnRyb2xsZXIgb2YgXCJmYWN0IG51bWJlcnMgaW4gcmFuZ2VcIiBmb3JtXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXENvbnRyb2xsZXJzXFxGb3Jtc1ZhbGlkYXRpb25cXEluZGV4XHJcbiAqL1xyXG5cclxuaW1wb3J0IEZvcm1zVmFsaWRhdGlvbkNvbnRyb2xsZXIgZnJvbSAnLi4vZm9ybXMtdmFsaWRhdGlvbi1jb250cm9sbGVyJztcclxuaW1wb3J0IEZhY3ROdW1JblJhbmdlTW9kZWwgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2Zvcm1zLXZhbGlkYXRpb24vZm9ybXMtbW9kZWxzL2ZhY3QtbnVtLWluLXJhbmdlJztcclxuaW1wb3J0IEZhY3ROdW1JblJhbmdlVmlldyBmcm9tICcuLi8uLi8uLi92aWV3cy9mb3Jtcy12YWxpZGF0aW9uL2Zvcm1zLXZpZXdzL2ZhY3QtbnVtLWluLXJhbmdlJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBBUEkgdG8gdmFsaWRhdGUgXCJmYWN0IG51bWJlcnMgaW4gcmFuZ2VcIiBmb3JtIG9uIGluZGV4IHBhZ2VcclxuICogXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb250cm9sbGVyc1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNNb2RlbHNcXEZhY3ROdW1JblJhbmdlTW9kZWxcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zVmlld3NcXEZhY3ROdW1JblJhbmdlVmlld1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjdE51bUluUmFuZ2VDb250cm9sbGVyIGV4dGVuZHMgRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgRmFjdE51bUluUmFuZ2VNb2RlbDtcclxuICAgICAgICBsZXQgdmlldyA9IG5ldyBGYWN0TnVtSW5SYW5nZVZpZXcobW9kZWwpO1xyXG4gICAgICAgIHN1cGVyKG1vZGVsLCB2aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlciB2YWxpZGF0ZSgpIG1ldGhvZFxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwudmFsaWRhdGUoZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\forms-validation\\index\\fact-num-in-range.js","/..\\..\\controllers\\forms-validation\\index")
},{"../../../models/forms-validation/forms-models/fact-num-in-range":11,"../../../views/forms-validation/forms-views/fact-num-in-range":28,"../forms-validation-controller":7,"6r38Q7":35,"buffer":33}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationController = _interopRequireDefault(require("../forms-validation-controller"));

var _numOfFacts = _interopRequireDefault(require("../../../models/forms-validation/forms-models/num-of-facts"));

var _numOfFacts2 = _interopRequireDefault(require("../../../views/forms-validation/forms-views/num-of-facts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Provides API to validate "number of facts" form on index page
 * 
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Models\FormsValidation\FormsModels\NumOfFactsModel
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\NumOfFactsView
 */
var NumOfFactsController =
/*#__PURE__*/
function (_FormsValidationContr) {
  _inherits(NumOfFactsController, _FormsValidationContr);

  function NumOfFactsController() {
    _classCallCheck(this, NumOfFactsController);

    var model = new _numOfFacts.default();
    var view = new _numOfFacts2.default(model);
    return _possibleConstructorReturn(this, _getPrototypeOf(NumOfFactsController).call(this, model, view));
  }
  /**
   * @see FormsValidationController validate() method
   */


  _createClass(NumOfFactsController, [{
    key: "validate",
    value: function validate(event) {
      this.model.validate(event);
    }
  }]);

  return NumOfFactsController;
}(_formsValidationController.default);

exports.default = NumOfFactsController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bS1vZi1mYWN0cy5qcyJdLCJuYW1lcyI6WyJOdW1PZkZhY3RzQ29udHJvbGxlciIsIm1vZGVsIiwiTnVtT2ZGYWN0c01vZGVsIiwidmlldyIsIk51bU9mRmFjdHNWaWV3IiwiZXZlbnQiLCJ2YWxpZGF0ZSIsIkZvcm1zVmFsaWRhdGlvbkNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT3FCQSxvQjs7Ozs7QUFDakIsa0NBQWM7QUFBQTs7QUFDVixRQUFJQyxLQUFLLEdBQUcsSUFBSUMsbUJBQUosRUFBWjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFJQyxvQkFBSixDQUFtQkgsS0FBbkIsQ0FBWDtBQUZVLDZGQUdKQSxLQUhJLEVBR0dFLElBSEg7QUFJYjtBQUVEOzs7Ozs7OzZCQUdTRSxLLEVBQU87QUFDWixXQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0JELEtBQXBCO0FBQ0g7Ozs7RUFaNkNFLGtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgVmFsaWRhdGlvbiBjb250cm9sbGVyIG9mIFwibnVtYmVyIG9mIGZhY3RzXCIgZm9ybVxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxDb250cm9sbGVyc1xcRm9ybXNWYWxpZGF0aW9uXFxJbmRleFxyXG4gKi9cclxuXHJcbmltcG9ydCBGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyIGZyb20gJy4uL2Zvcm1zLXZhbGlkYXRpb24tY29udHJvbGxlcic7XHJcbmltcG9ydCBOdW1PZkZhY3RzTW9kZWwgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2Zvcm1zLXZhbGlkYXRpb24vZm9ybXMtbW9kZWxzL251bS1vZi1mYWN0cyc7XHJcbmltcG9ydCBOdW1PZkZhY3RzVmlldyBmcm9tICcuLi8uLi8uLi92aWV3cy9mb3Jtcy12YWxpZGF0aW9uL2Zvcm1zLXZpZXdzL251bS1vZi1mYWN0cyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgQVBJIHRvIHZhbGlkYXRlIFwibnVtYmVyIG9mIGZhY3RzXCIgZm9ybSBvbiBpbmRleCBwYWdlXHJcbiAqIFxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcQ29udHJvbGxlcnNcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlclxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcTW9kZWxzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zTW9kZWxzXFxOdW1PZkZhY3RzTW9kZWxcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zVmlld3NcXE51bU9mRmFjdHNWaWV3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1PZkZhY3RzQ29udHJvbGxlciBleHRlbmRzIEZvcm1zVmFsaWRhdGlvbkNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IE51bU9mRmFjdHNNb2RlbDtcclxuICAgICAgICBsZXQgdmlldyA9IG5ldyBOdW1PZkZhY3RzVmlldyhtb2RlbCk7XHJcbiAgICAgICAgc3VwZXIobW9kZWwsIHZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyIHZhbGlkYXRlKCkgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC52YWxpZGF0ZShldmVudCk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\forms-validation\\index\\num-of-facts.js","/..\\..\\controllers\\forms-validation\\index")
},{"../../../models/forms-validation/forms-models/num-of-facts":12,"../../../views/forms-validation/forms-views/num-of-facts":29,"../forms-validation-controller":7,"6r38Q7":35,"buffer":33}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationController = _interopRequireDefault(require("../forms-validation-controller"));

var _particularFactNumbers = _interopRequireDefault(require("../../../models/forms-validation/forms-models/particular-fact-numbers"));

var _particularFactNumbers2 = _interopRequireDefault(require("../../../views/forms-validation/forms-views/particular-fact-numbers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Provides API to validate "particular fact numbers" form on index page
 * 
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Models\FormsValidation\FormsModels\ParticularFactNumbersModel
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\ParticularFactNumbersView
 */
var ParticularFactNumbersController =
/*#__PURE__*/
function (_FormsValidationContr) {
  _inherits(ParticularFactNumbersController, _FormsValidationContr);

  function ParticularFactNumbersController() {
    _classCallCheck(this, ParticularFactNumbersController);

    var model = new _particularFactNumbers.default();
    var view = new _particularFactNumbers2.default(model);
    return _possibleConstructorReturn(this, _getPrototypeOf(ParticularFactNumbersController).call(this, model, view));
  }
  /**
   * @see FormsValidationController validate() method
   */


  _createClass(ParticularFactNumbersController, [{
    key: "validate",
    value: function validate(event) {
      this.model.validate(event);
    }
  }]);

  return ParticularFactNumbersController;
}(_formsValidationController.default);

exports.default = ParticularFactNumbersController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY3VsYXItZmFjdC1udW1iZXJzLmpzIl0sIm5hbWVzIjpbIlBhcnRpY3VsYXJGYWN0TnVtYmVyc0NvbnRyb2xsZXIiLCJtb2RlbCIsIlBhcnRpY3VsYXJGYWN0TnVtYmVyc01vZGVsIiwidmlldyIsIlBhcnRpY3VsYXJGYWN0TnVtYmVyc1ZpZXciLCJldmVudCIsInZhbGlkYXRlIiwiRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPcUJBLCtCOzs7OztBQUNqQiw2Q0FBYztBQUFBOztBQUNWLFFBQUlDLEtBQUssR0FBRyxJQUFJQyw4QkFBSixFQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQUlDLCtCQUFKLENBQThCSCxLQUE5QixDQUFYO0FBRlUsd0dBR0pBLEtBSEksRUFHR0UsSUFISDtBQUliO0FBRUQ7Ozs7Ozs7NkJBR1NFLEssRUFBTztBQUNaLFdBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkQsS0FBcEI7QUFDSDs7OztFQVp3REUsa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBWYWxpZGF0aW9uIGNvbnRyb2xsZXIgb2YgXCJwYXJ0aWN1bGFyIGZhY3QgbnVtYmVyc1wiIGZvcm1cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcQ29udHJvbGxlcnNcXEZvcm1zVmFsaWRhdGlvblxcSW5kZXhcclxuICovXHJcblxyXG5pbXBvcnQgRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlciBmcm9tICcuLi9mb3Jtcy12YWxpZGF0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUGFydGljdWxhckZhY3ROdW1iZXJzTW9kZWwgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2Zvcm1zLXZhbGlkYXRpb24vZm9ybXMtbW9kZWxzL3BhcnRpY3VsYXItZmFjdC1udW1iZXJzJztcclxuaW1wb3J0IFBhcnRpY3VsYXJGYWN0TnVtYmVyc1ZpZXcgZnJvbSAnLi4vLi4vLi4vdmlld3MvZm9ybXMtdmFsaWRhdGlvbi9mb3Jtcy12aWV3cy9wYXJ0aWN1bGFyLWZhY3QtbnVtYmVycyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgQVBJIHRvIHZhbGlkYXRlIFwicGFydGljdWxhciBmYWN0IG51bWJlcnNcIiBmb3JtIG9uIGluZGV4IHBhZ2VcclxuICogXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb250cm9sbGVyc1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNNb2RlbHNcXFBhcnRpY3VsYXJGYWN0TnVtYmVyc01vZGVsXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxWaWV3c1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc1ZpZXdzXFxQYXJ0aWN1bGFyRmFjdE51bWJlcnNWaWV3XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWN1bGFyRmFjdE51bWJlcnNDb250cm9sbGVyIGV4dGVuZHMgRm9ybXNWYWxpZGF0aW9uQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgUGFydGljdWxhckZhY3ROdW1iZXJzTW9kZWw7XHJcbiAgICAgICAgbGV0IHZpZXcgPSBuZXcgUGFydGljdWxhckZhY3ROdW1iZXJzVmlldyhtb2RlbCk7XHJcbiAgICAgICAgc3VwZXIobW9kZWwsIHZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBGb3Jtc1ZhbGlkYXRpb25Db250cm9sbGVyIHZhbGlkYXRlKCkgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC52YWxpZGF0ZShldmVudCk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\controllers\\forms-validation\\index\\particular-fact-numbers.js","/..\\..\\controllers\\forms-validation\\index")
},{"../../../models/forms-validation/forms-models/particular-fact-numbers":13,"../../../views/forms-validation/forms-views/particular-fact-numbers":30,"../forms-validation-controller":7,"6r38Q7":35,"buffer":33}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationModel = _interopRequireDefault(require("../forms-validation-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Model for validating 'fact number in range' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 */
var FactNumInRangeModel =
/*#__PURE__*/
function (_FormsValidationModel) {
  _inherits(FactNumInRangeModel, _FormsValidationModel);

  function FactNumInRangeModel() {
    _classCallCheck(this, FactNumInRangeModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FactNumInRangeModel).call(this));
  }
  /**
   * @see FormsValidationModel validate() method
   */


  _createClass(FactNumInRangeModel, [{
    key: "validate",
    value: function validate(event) {
      console.log(event);
      event.preventDefault();
    }
  }]);

  return FactNumInRangeModel;
}(_formsValidationModel.default);

exports.default = FactNumInRangeModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3QtbnVtLWluLXJhbmdlLmpzIl0sIm5hbWVzIjpbIkZhY3ROdW1JblJhbmdlTW9kZWwiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1zVmFsaWRhdGlvbk1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEsbUI7Ozs7O0FBQ2pCLGlDQUFjO0FBQUE7O0FBQUE7QUFFYjtBQUVEOzs7Ozs7OzZCQUdTQyxLLEVBQU87QUFDWkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUEsTUFBQUEsS0FBSyxDQUFDRyxjQUFOO0FBQ0g7Ozs7RUFYNENDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgTW9kZWwgZm9yIHZhbGlkYXRpbmcgJ2ZhY3QgbnVtYmVyIGluIHJhbmdlJyBmb3JtXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXE1vZGVsc1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc01vZGVsc1xyXG4gKi9cclxuXHJcbmltcG9ydCBGb3Jtc1ZhbGlkYXRpb25Nb2RlbCBmcm9tICcuLi9mb3Jtcy12YWxpZGF0aW9uLW1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiBNb2RlbCBmb3IgdmFsaWRhdGluZyAnZmFjdCBudW1iZXIgaW4gcmFuZ2UnIGZvcm1cclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXE1vZGVsc1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc1ZhbGlkYXRpb25Nb2RlbFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjdE51bUluUmFuZ2VNb2RlbCBleHRlbmRzIEZvcm1zVmFsaWRhdGlvbk1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIEZvcm1zVmFsaWRhdGlvbk1vZGVsIHZhbGlkYXRlKCkgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\forms-validation\\forms-models\\fact-num-in-range.js","/..\\..\\models\\forms-validation\\forms-models")
},{"../forms-validation-model":14,"6r38Q7":35,"buffer":33}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationModel = _interopRequireDefault(require("../forms-validation-model"));

var _parseFactsFieldsValidationService = _interopRequireDefault(require("../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service"));

var _domService = require("../../../services/functional/client/dom-service");

var _numOfFactsConfig = _interopRequireDefault(require("../../../configs/forms/num-of-facts-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Model for validating 'num of facts' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation\ParseFactsFieldsValidationService
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\NumOfFactsConfig
 */
var NumOfFactsModel =
/*#__PURE__*/
function (_FormsValidationModel) {
  _inherits(NumOfFactsModel, _FormsValidationModel);

  function NumOfFactsModel() {
    var _this;

    _classCallCheck(this, NumOfFactsModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumOfFactsModel).call(this));
    _this.validator = new _parseFactsFieldsValidationService.default();
    _this.categoryField = (0, _domService.$)(_numOfFactsConfig.default.CATEGORY_FIELD_SELECTOR);
    _this.numOfFactsField = (0, _domService.$)(_numOfFactsConfig.default.NUM_OF_FACTS_FIELD_SELECTOR);
    return _this;
  }
  /**
   * @see FormsValidationModel validate() method
   */


  _createClass(NumOfFactsModel, [{
    key: "validate",
    value: function validate(event) {
      console.log(this.validator.validateCategory(this.categoryField));
      console.log(this.validator.validateNumOfFacts(this.numOfFactsField));
      event.preventDefault();
    }
  }]);

  return NumOfFactsModel;
}(_formsValidationModel.default);

exports.default = NumOfFactsModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bS1vZi1mYWN0cy5qcyJdLCJuYW1lcyI6WyJOdW1PZkZhY3RzTW9kZWwiLCJ2YWxpZGF0b3IiLCJQYXJzZUZhY3RzRmllbGRzVmFsaWRhdGlvblNlcnZpY2UiLCJjYXRlZ29yeUZpZWxkIiwiTnVtT2ZGYWN0c0NvbmZpZyIsIkNBVEVHT1JZX0ZJRUxEX1NFTEVDVE9SIiwibnVtT2ZGYWN0c0ZpZWxkIiwiTlVNX09GX0ZBQ1RTX0ZJRUxEX1NFTEVDVE9SIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsaWRhdGVDYXRlZ29yeSIsInZhbGlkYXRlTnVtT2ZGYWN0cyIsInByZXZlbnREZWZhdWx0IiwiRm9ybXNWYWxpZGF0aW9uTW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT3FCQSxlOzs7OztBQUNqQiw2QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixJQUFJQywwQ0FBSixFQUFqQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsbUJBQUVDLDBCQUFpQkMsdUJBQW5CLENBQXJCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixtQkFBRUYsMEJBQWlCRywyQkFBbkIsQ0FBdkI7QUFKVTtBQUtiO0FBRUQ7Ozs7Ozs7NkJBR1NDLEssRUFBTztBQUNaQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLVCxTQUFMLENBQWVVLGdCQUFmLENBQWdDLEtBQUtSLGFBQXJDLENBQVo7QUFDQU0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1QsU0FBTCxDQUFlVyxrQkFBZixDQUFrQyxLQUFLTixlQUF2QyxDQUFaO0FBQ0FFLE1BQUFBLEtBQUssQ0FBQ0ssY0FBTjtBQUNIOzs7O0VBZndDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IE1vZGVsIGZvciB2YWxpZGF0aW5nICdudW0gb2YgZmFjdHMnIGZvcm1cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcTW9kZWxzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zTW9kZWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEZvcm1zVmFsaWRhdGlvbk1vZGVsIGZyb20gJy4uL2Zvcm1zLXZhbGlkYXRpb24tbW9kZWwnO1xyXG5pbXBvcnQgUGFyc2VGYWN0c0ZpZWxkc1ZhbGlkYXRpb25TZXJ2aWNlIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL29vcC9jbGllbnQvdmFsaWRhdGlvbi9maWVsZHMtdmFsaWRhdGlvbi9wYXJzZS1mYWN0cy1maWVsZHMtdmFsaWRhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgJCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uYWwvY2xpZW50L2RvbS1zZXJ2aWNlJztcclxuaW1wb3J0IE51bU9mRmFjdHNDb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlncy9mb3Jtcy9udW0tb2YtZmFjdHMtY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBNb2RlbCBmb3IgdmFsaWRhdGluZyAnbnVtIG9mIGZhY3RzJyBmb3JtXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNWYWxpZGF0aW9uTW9kZWxcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFNlcnZpY2VzXFxPT1BcXENsaWVudFxcVmFsaWRhdGlvblxcRmllbGRzVmFsaWRhdGlvblxcUGFyc2VGYWN0c0ZpZWxkc1ZhbGlkYXRpb25TZXJ2aWNlXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcRnVuY3Rpb25hbFxcQ2xpZW50XFxEb21TZXJ2aWNlXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxGb3Jtc1xcTnVtT2ZGYWN0c0NvbmZpZ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtT2ZGYWN0c01vZGVsIGV4dGVuZHMgRm9ybXNWYWxpZGF0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBQYXJzZUZhY3RzRmllbGRzVmFsaWRhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUZpZWxkID0gJChOdW1PZkZhY3RzQ29uZmlnLkNBVEVHT1JZX0ZJRUxEX1NFTEVDVE9SKTtcclxuICAgICAgICB0aGlzLm51bU9mRmFjdHNGaWVsZCA9ICQoTnVtT2ZGYWN0c0NvbmZpZy5OVU1fT0ZfRkFDVFNfRklFTERfU0VMRUNUT1IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBGb3Jtc1ZhbGlkYXRpb25Nb2RlbCB2YWxpZGF0ZSgpIG1ldGhvZFxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlQ2F0ZWdvcnkodGhpcy5jYXRlZ29yeUZpZWxkKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0b3IudmFsaWRhdGVOdW1PZkZhY3RzKHRoaXMubnVtT2ZGYWN0c0ZpZWxkKSk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\forms-validation\\forms-models\\num-of-facts.js","/..\\..\\models\\forms-validation\\forms-models")
},{"../../../configs/forms/num-of-facts-config":3,"../../../services/functional/client/dom-service":16,"../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service":18,"../forms-validation-model":14,"6r38Q7":35,"buffer":33}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationModel = _interopRequireDefault(require("../forms-validation-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Model for validating 'particular fact numbers' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 */
var ParticularFactNumbersModel =
/*#__PURE__*/
function (_FormsValidationModel) {
  _inherits(ParticularFactNumbersModel, _FormsValidationModel);

  function ParticularFactNumbersModel() {
    _classCallCheck(this, ParticularFactNumbersModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParticularFactNumbersModel).call(this));
  }
  /**
   * @see FormsValidationModel validate() method
   */


  _createClass(ParticularFactNumbersModel, [{
    key: "validate",
    value: function validate(event) {
      console.log(event);
      event.preventDefault();
    }
  }]);

  return ParticularFactNumbersModel;
}(_formsValidationModel.default);

exports.default = ParticularFactNumbersModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY3VsYXItZmFjdC1udW1iZXJzLmpzIl0sIm5hbWVzIjpbIlBhcnRpY3VsYXJGYWN0TnVtYmVyc01vZGVsIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJGb3Jtc1ZhbGlkYXRpb25Nb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLDBCOzs7OztBQUNqQix3Q0FBYztBQUFBOztBQUFBO0FBRWI7QUFFRDs7Ozs7Ozs2QkFHU0MsSyxFQUFPO0FBQ1pDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FBLE1BQUFBLEtBQUssQ0FBQ0csY0FBTjtBQUNIOzs7O0VBWG1EQyw2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IE1vZGVsIGZvciB2YWxpZGF0aW5nICdwYXJ0aWN1bGFyIGZhY3QgbnVtYmVycycgZm9ybVxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNNb2RlbHNcclxuICovXHJcblxyXG5pbXBvcnQgRm9ybXNWYWxpZGF0aW9uTW9kZWwgZnJvbSAnLi4vZm9ybXMtdmFsaWRhdGlvbi1tb2RlbCc7XHJcblxyXG4vKipcclxuICogTW9kZWwgZm9yIHZhbGlkYXRpbmcgJ3BhcnRpY3VsYXIgZmFjdCBudW1iZXJzJyBmb3JtXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNWYWxpZGF0aW9uTW9kZWxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY3VsYXJGYWN0TnVtYmVyc01vZGVsIGV4dGVuZHMgRm9ybXNWYWxpZGF0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgRm9ybXNWYWxpZGF0aW9uTW9kZWwgdmFsaWRhdGUoKSBtZXRob2RcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGUoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\forms-validation\\forms-models\\particular-fact-numbers.js","/..\\..\\models\\forms-validation\\forms-models")
},{"../forms-validation-model":14,"6r38Q7":35,"buffer":33}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _model = _interopRequireDefault(require("../model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Abstract model for validating forms
 * @uses NikitosGolubev\Models\Model
 */
var FormsValidationModel =
/*#__PURE__*/
function (_Model) {
  _inherits(FormsValidationModel, _Model);

  function FormsValidationModel() {
    _classCallCheck(this, FormsValidationModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormsValidationModel).call(this));
  }
  /**
   * Method which is responsible for form validation
   * @param  {event} event Event Object
   * @returns {Void}
   */


  _createClass(FormsValidationModel, [{
    key: "validate",
    value: function validate(event) {
      throw new Error('This is abstract method which requires implementation.');
    }
  }]);

  return FormsValidationModel;
}(_model.default);

exports.default = FormsValidationModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLXZhbGlkYXRpb24tbW9kZWwuanMiXSwibmFtZXMiOlsiRm9ybXNWYWxpZGF0aW9uTW9kZWwiLCJldmVudCIsIkVycm9yIiwiTW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxvQjs7Ozs7QUFDakIsa0NBQWM7QUFBQTs7QUFBQTtBQUViO0FBRUQ7Ozs7Ozs7Ozs2QkFLU0MsSyxFQUFPO0FBQ1osWUFBTSxJQUFJQyxLQUFKLENBQVUsd0RBQVYsQ0FBTjtBQUNIOzs7O0VBWjZDQyxjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgQWJzdHJhY3QgbW9kZWwgZm9yIHZhbGlkYXRpbmcgZm9ybXNcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcTW9kZWxzXFxGb3Jtc1ZhbGlkYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vbW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0IG1vZGVsIGZvciB2YWxpZGF0aW5nIGZvcm1zXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxNb2RlbHNcXE1vZGVsXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jtc1ZhbGlkYXRpb25Nb2RlbCBleHRlbmRzIE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciBmb3JtIHZhbGlkYXRpb25cclxuICAgICAqIEBwYXJhbSAge2V2ZW50fSBldmVudCBFdmVudCBPYmplY3RcclxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZShldmVudCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBpcyBhYnN0cmFjdCBtZXRob2Qgd2hpY2ggcmVxdWlyZXMgaW1wbGVtZW50YXRpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\forms-validation\\forms-validation-model.js","/..\\..\\models\\forms-validation")
},{"../model":15,"6r38Q7":35,"buffer":33}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Abstract model
 * @namespace NikitosGolubev\Models
 */

/**
 * Fundamental abstract model.
 * SUBJECT - part of Observer pattern.
 */
var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    /**
     * Model observers (view objects)
     * @type {Array}
     */
    this.observers = [];
  }
  /**
   * Registers observer
   * @param  {Object} observer (view object)
   * @returns {Void}
   */


  _createClass(Model, [{
    key: "registerObserver",
    value: function registerObserver(observer) {
      this.observers.push(observer);
    }
    /**
     * Removes observer
     * @param  {Object} observer (view object)
     * @returns {Void}
     */

  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      var indexOfObserver = this.observers.indexOf(observer);

      if (indexOfObserver > -1) {
        // Removing observer
        this.observers.splice(indexOfObserver, 1);
      }
    }
    /**
     * Notifies observers sending them some data
     * @param  {Mixed} data
     * @returns {Void}
     */

  }, {
    key: "notifyObservers",
    value: function notifyObservers(data) {
      for (var i = 0; i < this.observers.length; i++) {
        this.observers[i].update(data);
      }
    }
  }]);

  return Model;
}();

exports.default = Model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwiaW5kZXhPZk9ic2VydmVyIiwiaW5kZXhPZiIsInNwbGljZSIsImRhdGEiLCJpIiwibGVuZ3RoIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0E7Ozs7SUFJcUJBLEs7OztBQUNqQixtQkFBYztBQUFBOztBQUNWOzs7O0FBSUEsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIO0FBRUQ7Ozs7Ozs7OztxQ0FLaUJDLFEsRUFBVTtBQUN2QixXQUFLRCxTQUFMLENBQWVFLElBQWYsQ0FBb0JELFFBQXBCO0FBQ0g7QUFFRDs7Ozs7Ozs7bUNBS2VBLFEsRUFBVTtBQUNyQixVQUFJRSxlQUFlLEdBQUcsS0FBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCSCxRQUF2QixDQUF0Qjs7QUFDQSxVQUFJRSxlQUFlLEdBQUcsQ0FBQyxDQUF2QixFQUEwQjtBQUN0QjtBQUNBLGFBQUtILFNBQUwsQ0FBZUssTUFBZixDQUFzQkYsZUFBdEIsRUFBdUMsQ0FBdkM7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7O29DQUtnQkcsSSxFQUFNO0FBQ2xCLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUCxTQUFMLENBQWVRLE1BQW5DLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGFBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQkUsTUFBbEIsQ0FBeUJILElBQXpCO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEFic3RyYWN0IG1vZGVsXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXE1vZGVsc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBGdW5kYW1lbnRhbCBhYnN0cmFjdCBtb2RlbC5cclxuICogU1VCSkVDVCAtIHBhcnQgb2YgT2JzZXJ2ZXIgcGF0dGVybi5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vZGVsIG9ic2VydmVycyAodmlldyBvYmplY3RzKVxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIG9ic2VydmVyXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9ic2VydmVyICh2aWV3IG9iamVjdClcclxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIG9ic2VydmVyXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9ic2VydmVyICh2aWV3IG9iamVjdClcclxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxyXG4gICAgICovXHJcbiAgICByZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xyXG4gICAgICAgIGxldCBpbmRleE9mT2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXhPZk9ic2VydmVyID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3Zpbmcgb2JzZXJ2ZXJcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKGluZGV4T2ZPYnNlcnZlciwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgb2JzZXJ2ZXJzIHNlbmRpbmcgdGhlbSBzb21lIGRhdGFcclxuICAgICAqIEBwYXJhbSAge01peGVkfSBkYXRhXHJcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cclxuICAgICAqL1xyXG4gICAgbm90aWZ5T2JzZXJ2ZXJzKGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldLnVwZGF0ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\models\\model.js","/..\\..\\models")
},{"6r38Q7":35,"buffer":33}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findParentByClassName = findParentByClassName;
exports.$$ = exports.$ = void 0;

/**
 * @fileOverview Module, which provides convinient methods to interract with DOM
 * @namespace NikitosGolubev\Services\Functional
 */

/**
 * Shorthand for document.querySelector()
 */
var $ = document.querySelector.bind(document);
/**
 * Shorthand for document.querySelectorAll()
 */

exports.$ = $;
var $$ = document.querySelectorAll.bind(document);
/**
 * Finding particular parent by its className and its child
 * 
 * @param  {Object} childElement
 * @param  {String} parentClassName
 * @return {Object|Boolean} DOM element OR FALSE(not found)
 */

exports.$$ = $$;

function findParentByClassName(childElement, parentClassName) {
  // If given child IS the element that should be found. (when unaware of if it's child elem or not)
  if (childElement.classList.contains(parentClassName)) return childElement;
  var parentResult = childElement.parentNode; // Getting first parent of child
  // Starting loop
  // If element doesnt contain needed className so loop next

  while (!parentResult.classList.contains(parentClassName)) {
    // If html is our parent so its something wrong here, == nothing found
    if (parentResult.tagName === "HTML") return false; // Getting next parent element

    parentResult = parentResult.parentNode;
  }

  return parentResult;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbS1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiaW5kIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZFBhcmVudEJ5Q2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50IiwicGFyZW50Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRSZXN1bHQiLCJwYXJlbnROb2RlIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQTs7O0FBR08sSUFBTUEsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJDLElBQXZCLENBQTRCRixRQUE1QixDQUFWO0FBRVA7Ozs7O0FBR08sSUFBTUcsRUFBRSxHQUFHSCxRQUFRLENBQUNJLGdCQUFULENBQTBCRixJQUExQixDQUErQkYsUUFBL0IsQ0FBWDtBQUVQOzs7Ozs7Ozs7O0FBT08sU0FBU0sscUJBQVQsQ0FBK0JDLFlBQS9CLEVBQTZDQyxlQUE3QyxFQUE4RDtBQUNqRTtBQUNBLE1BQUlELFlBQVksQ0FBQ0UsU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0NGLGVBQWhDLENBQUosRUFBc0QsT0FBT0QsWUFBUDtBQUV0RCxNQUFJSSxZQUFZLEdBQUdKLFlBQVksQ0FBQ0ssVUFBaEMsQ0FKaUUsQ0FJckI7QUFDNUM7QUFDQTs7QUFDQSxTQUFPLENBQUNELFlBQVksQ0FBQ0YsU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0NGLGVBQWhDLENBQVIsRUFBMEQ7QUFDdEQ7QUFDQSxRQUFJRyxZQUFZLENBQUNFLE9BQWIsS0FBeUIsTUFBN0IsRUFBcUMsT0FBTyxLQUFQLENBRmlCLENBR3REOztBQUNBRixJQUFBQSxZQUFZLEdBQUdBLFlBQVksQ0FBQ0MsVUFBNUI7QUFDSDs7QUFDRCxTQUFPRCxZQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBNb2R1bGUsIHdoaWNoIHByb3ZpZGVzIGNvbnZpbmllbnQgbWV0aG9kcyB0byBpbnRlcnJhY3Qgd2l0aCBET01cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcU2VydmljZXNcXEZ1bmN0aW9uYWxcclxuICovXHJcblxyXG4vKipcclxuICogU2hvcnRoYW5kIGZvciBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKClcclxuICovXHJcbmV4cG9ydCBjb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcclxuXHJcbi8qKlxyXG4gKiBTaG9ydGhhbmQgZm9yIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kaW5nIHBhcnRpY3VsYXIgcGFyZW50IGJ5IGl0cyBjbGFzc05hbWUgYW5kIGl0cyBjaGlsZFxyXG4gKiBcclxuICogQHBhcmFtICB7T2JqZWN0fSBjaGlsZEVsZW1lbnRcclxuICogQHBhcmFtICB7U3RyaW5nfSBwYXJlbnRDbGFzc05hbWVcclxuICogQHJldHVybiB7T2JqZWN0fEJvb2xlYW59IERPTSBlbGVtZW50IE9SIEZBTFNFKG5vdCBmb3VuZClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50QnlDbGFzc05hbWUoY2hpbGRFbGVtZW50LCBwYXJlbnRDbGFzc05hbWUpIHtcclxuICAgIC8vIElmIGdpdmVuIGNoaWxkIElTIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGZvdW5kLiAod2hlbiB1bmF3YXJlIG9mIGlmIGl0J3MgY2hpbGQgZWxlbSBvciBub3QpXHJcbiAgICBpZiAoY2hpbGRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhwYXJlbnRDbGFzc05hbWUpKSByZXR1cm4gY2hpbGRFbGVtZW50O1xyXG5cclxuICAgIGxldCBwYXJlbnRSZXN1bHQgPSBjaGlsZEVsZW1lbnQucGFyZW50Tm9kZTsgLy8gR2V0dGluZyBmaXJzdCBwYXJlbnQgb2YgY2hpbGRcclxuICAgIC8vIFN0YXJ0aW5nIGxvb3BcclxuICAgIC8vIElmIGVsZW1lbnQgZG9lc250IGNvbnRhaW4gbmVlZGVkIGNsYXNzTmFtZSBzbyBsb29wIG5leHRcclxuICAgIHdoaWxlICghcGFyZW50UmVzdWx0LmNsYXNzTGlzdC5jb250YWlucyhwYXJlbnRDbGFzc05hbWUpKSB7XHJcbiAgICAgICAgLy8gSWYgaHRtbCBpcyBvdXIgcGFyZW50IHNvIGl0cyBzb21ldGhpbmcgd3JvbmcgaGVyZSwgPT0gbm90aGluZyBmb3VuZFxyXG4gICAgICAgIGlmIChwYXJlbnRSZXN1bHQudGFnTmFtZSA9PT0gXCJIVE1MXCIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBHZXR0aW5nIG5leHQgcGFyZW50IGVsZW1lbnRcclxuICAgICAgICBwYXJlbnRSZXN1bHQgPSBwYXJlbnRSZXN1bHQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRSZXN1bHQ7XHJcbn0iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\functional\\client\\dom-service.js","/..\\..\\services\\functional\\client")
},{"6r38Q7":35,"buffer":33}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultFieldValidationResponseService = _interopRequireDefault(require("../../validation/validation-responses/default-field-validation-response-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base fields validation service, should be inheritated by concrete
 * fields validation services.
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationResponses\DefaultFieldValidationResponseService
 */
var FieldsValidationService =
/*#__PURE__*/
function () {
  function FieldsValidationService() {
    _classCallCheck(this, FieldsValidationService);

    /**
     * Service which produces response for field validation
     * @type {Object}
     */
    this.rb = new _defaultFieldValidationResponseService.default();
  }
  /**
   * Sets new response builder for fields validation
   * @param {Object} responseBuilder
   */


  _createClass(FieldsValidationService, [{
    key: "setResponseBuilder",
    value: function setResponseBuilder(responseBuilder) {
      this.rb = responseBuilder;
    }
    /**
     * Sets particular validator to examine fields
     * @param {Object} validator
     */

  }, {
    key: "setValidator",
    value: function setValidator(validator) {
      this.validator = validator;
    }
  }]);

  return FieldsValidationService;
}();

exports.default = FieldsValidationService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkcy12YWxpZGF0aW9uLXNlcnZpY2UuanMiXSwibmFtZXMiOlsiRmllbGRzVmFsaWRhdGlvblNlcnZpY2UiLCJyYiIsIkRlZmF1bHRGaWVsZFZhbGlkYXRpb25SZXNwb25zZVNlcnZpY2UiLCJyZXNwb25zZUJ1aWxkZXIiLCJ2YWxpZGF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7Ozs7OztBQUVBOzs7OztJQUtxQkEsdUI7OztBQUNqQixxQ0FBYztBQUFBOztBQUNWOzs7O0FBSUEsU0FBS0MsRUFBTCxHQUFVLElBQUlDLDhDQUFKLEVBQVY7QUFDSDtBQUVEOzs7Ozs7Ozt1Q0FJbUJDLGUsRUFBaUI7QUFDaEMsV0FBS0YsRUFBTCxHQUFVRSxlQUFWO0FBQ0g7QUFFRDs7Ozs7OztpQ0FJYUMsUyxFQUFXO0FBQ3BCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBCYXNlIGZpZWxkcyB2YWxpZGF0aW9uIHNlcnZpY2VcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcU2VydmljZXNcXE9PUFxcQ2xpZW50XFxWYWxpZGF0aW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IERlZmF1bHRGaWVsZFZhbGlkYXRpb25SZXNwb25zZVNlcnZpY2UgZnJvbSAnLi4vLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLXJlc3BvbnNlcy9kZWZhdWx0LWZpZWxkLXZhbGlkYXRpb24tcmVzcG9uc2Utc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQmFzZSBmaWVsZHMgdmFsaWRhdGlvbiBzZXJ2aWNlLCBzaG91bGQgYmUgaW5oZXJpdGF0ZWQgYnkgY29uY3JldGVcclxuICogZmllbGRzIHZhbGlkYXRpb24gc2VydmljZXMuXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcT09QXFxWYWxpZGF0aW9uXFxWYWxpZGF0aW9uUmVzcG9uc2VzXFxEZWZhdWx0RmllbGRWYWxpZGF0aW9uUmVzcG9uc2VTZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZHNWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXJ2aWNlIHdoaWNoIHByb2R1Y2VzIHJlc3BvbnNlIGZvciBmaWVsZCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJiID0gbmV3IERlZmF1bHRGaWVsZFZhbGlkYXRpb25SZXNwb25zZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIG5ldyByZXNwb25zZSBidWlsZGVyIGZvciBmaWVsZHMgdmFsaWRhdGlvblxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlQnVpbGRlclxyXG4gICAgICovXHJcbiAgICBzZXRSZXNwb25zZUJ1aWxkZXIocmVzcG9uc2VCdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5yYiA9IHJlc3BvbnNlQnVpbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgcGFydGljdWxhciB2YWxpZGF0b3IgdG8gZXhhbWluZSBmaWVsZHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWxpZGF0b3JcclxuICAgICAqL1xyXG4gICAgc2V0VmFsaWRhdG9yKHZhbGlkYXRvcikge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\oop\\client\\validation\\fields-validation-service.js","/..\\..\\services\\oop\\client\\validation")
},{"../../validation/validation-responses/default-field-validation-response-service":20,"6r38Q7":35,"buffer":33}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fieldsValidationService = _interopRequireDefault(require("../fields-validation-service"));

var _parseValidationConfig = _interopRequireDefault(require("../../../../../configs/validation/parse-validation-config"));

var _parseFactsValidationService = _interopRequireDefault(require("../../../validation/concrete-validation/parse-facts-validation-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Validates fields from parse facts forms group
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidationService
 * @uses NikitosGolubev\Configs\Validation\ParseValidationConfig as ValConf
 * @uses NikitosGolubev\Services\OOP\Validation\ConcreteValidation\ParseFactsValidationService
 */
var ParseFactsFieldsValidationService =
/*#__PURE__*/
function (_FieldsValidationServ) {
  _inherits(ParseFactsFieldsValidationService, _FieldsValidationServ);

  function ParseFactsFieldsValidationService() {
    var _this;

    _classCallCheck(this, ParseFactsFieldsValidationService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParseFactsFieldsValidationService).call(this));
    _this.validator = new _parseFactsValidationService.default();
    return _this;
  }
  /**
   * Validates category field (select)
   * @param  {Object} field field that should be validated
   * @return {Object} response
   */


  _createClass(ParseFactsFieldsValidationService, [{
    key: "validateCategory",
    value: function validateCategory(field) {
      if (this.validator.isEmpty(field)) {
        return this.rb.fail(field, _parseValidationConfig.default.CATEGORY_NOT_SELECTED);
      }

      return this.rb.success(field);
    }
    /**
     * Validate number of facts to parse field (text input)
     * @param  {Object} field DOM
     * @return {Object} response
     */

  }, {
    key: "validateNumOfFacts",
    value: function validateNumOfFacts(field) {
      if (this.validator.isEmpty(field)) {
        return this.rb.fail(field, _parseValidationConfig.default.EMPTY_FIELD_MESSAGE);
      } // If integer was passed


      if (!this.validator.isInt(field.value)) {
        return this.rb.fail(field, _parseValidationConfig.default.INTEGER_REQUIRED_MESSAGE);
      }

      if (!this.validator.isFitLimit(+field.value, 0, _parseValidationConfig.default.MAX_NUM_ITEMS_TO_PARSE)) {
        return this.rb.fail(field, _parseValidationConfig.default.NUM_OF_FACTS_INVALID);
      }

      return this.rb.success(field);
    }
  }]);

  return ParseFactsFieldsValidationService;
}(_fieldsValidationService.default);

exports.default = ParseFactsFieldsValidationService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLWZhY3RzLWZpZWxkcy12YWxpZGF0aW9uLXNlcnZpY2UuanMiXSwibmFtZXMiOlsiUGFyc2VGYWN0c0ZpZWxkc1ZhbGlkYXRpb25TZXJ2aWNlIiwidmFsaWRhdG9yIiwiUGFyc2VGYWN0c1ZhbGlkYXRpb25TZXJ2aWNlIiwiZmllbGQiLCJpc0VtcHR5IiwicmIiLCJmYWlsIiwiVmFsQ29uZiIsIkNBVEVHT1JZX05PVF9TRUxFQ1RFRCIsInN1Y2Nlc3MiLCJFTVBUWV9GSUVMRF9NRVNTQUdFIiwiaXNJbnQiLCJ2YWx1ZSIsIklOVEVHRVJfUkVRVUlSRURfTUVTU0FHRSIsImlzRml0TGltaXQiLCJNQVhfTlVNX0lURU1TX1RPX1BBUlNFIiwiTlVNX09GX0ZBQ1RTX0lOVkFMSUQiLCJGaWVsZHNWYWxpZGF0aW9uU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQkEsaUM7Ozs7O0FBQ2pCLCtDQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLG9DQUFKLEVBQWpCO0FBRlU7QUFHYjtBQUVEOzs7Ozs7Ozs7cUNBS2lCQyxLLEVBQU87QUFDcEIsVUFBSSxLQUFLRixTQUFMLENBQWVHLE9BQWYsQ0FBdUJELEtBQXZCLENBQUosRUFBbUM7QUFDL0IsZUFBTyxLQUFLRSxFQUFMLENBQVFDLElBQVIsQ0FBYUgsS0FBYixFQUFvQkksK0JBQVFDLHFCQUE1QixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLSCxFQUFMLENBQVFJLE9BQVIsQ0FBZ0JOLEtBQWhCLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozt1Q0FLbUJBLEssRUFBTztBQUN0QixVQUFJLEtBQUtGLFNBQUwsQ0FBZUcsT0FBZixDQUF1QkQsS0FBdkIsQ0FBSixFQUFtQztBQUMvQixlQUFPLEtBQUtFLEVBQUwsQ0FBUUMsSUFBUixDQUFhSCxLQUFiLEVBQW9CSSwrQkFBUUcsbUJBQTVCLENBQVA7QUFDSCxPQUhxQixDQUt0Qjs7O0FBQ0EsVUFBSSxDQUFDLEtBQUtULFNBQUwsQ0FBZVUsS0FBZixDQUFxQlIsS0FBSyxDQUFDUyxLQUEzQixDQUFMLEVBQXdDO0FBQ3BDLGVBQU8sS0FBS1AsRUFBTCxDQUFRQyxJQUFSLENBQWFILEtBQWIsRUFBb0JJLCtCQUFRTSx3QkFBNUIsQ0FBUDtBQUNIOztBQUVELFVBQUksQ0FBQyxLQUFLWixTQUFMLENBQWVhLFVBQWYsQ0FBMEIsQ0FBQ1gsS0FBSyxDQUFDUyxLQUFqQyxFQUF3QyxDQUF4QyxFQUEyQ0wsK0JBQVFRLHNCQUFuRCxDQUFMLEVBQWlGO0FBQzdFLGVBQU8sS0FBS1YsRUFBTCxDQUFRQyxJQUFSLENBQWFILEtBQWIsRUFBb0JJLCtCQUFRUyxvQkFBNUIsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBS1gsRUFBTCxDQUFRSSxPQUFSLENBQWdCTixLQUFoQixDQUFQO0FBQ0g7Ozs7RUF2QzBEYyxnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IFZhbGlkYXRlcyBmaWVsZHMgZnJvbSBwYXJzZSBmYWN0cyBmb3JtcyBncm91cFxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcT09QXFxDbGllbnRcXFZhbGlkYXRpb25cXEZpZWxkc1ZhbGlkYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgRmllbGRzVmFsaWRhdGlvblNlcnZpY2UgZnJvbSAnLi4vZmllbGRzLXZhbGlkYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCBWYWxDb25mIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZ3MvdmFsaWRhdGlvbi9wYXJzZS12YWxpZGF0aW9uLWNvbmZpZyc7XHJcbmltcG9ydCBQYXJzZUZhY3RzVmFsaWRhdGlvblNlcnZpY2UgZnJvbSAnLi4vLi4vLi4vdmFsaWRhdGlvbi9jb25jcmV0ZS12YWxpZGF0aW9uL3BhcnNlLWZhY3RzLXZhbGlkYXRpb24tc2VydmljZSc7XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGZpZWxkcyBmcm9tIHBhcnNlIGZhY3RzIGZvcm1zIGdyb3VwXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcT09QXFxDbGllbnRcXFZhbGlkYXRpb25cXEZpZWxkc1ZhbGlkYXRpb25TZXJ2aWNlXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxWYWxpZGF0aW9uXFxQYXJzZVZhbGlkYXRpb25Db25maWcgYXMgVmFsQ29uZlxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcU2VydmljZXNcXE9PUFxcVmFsaWRhdGlvblxcQ29uY3JldGVWYWxpZGF0aW9uXFxQYXJzZUZhY3RzVmFsaWRhdGlvblNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlRmFjdHNGaWVsZHNWYWxpZGF0aW9uU2VydmljZSBleHRlbmRzIEZpZWxkc1ZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgUGFyc2VGYWN0c1ZhbGlkYXRpb25TZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGNhdGVnb3J5IGZpZWxkIChzZWxlY3QpXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIGZpZWxkIHRoYXQgc2hvdWxkIGJlIHZhbGlkYXRlZFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUNhdGVnb3J5KGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLmlzRW1wdHkoZmllbGQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJiLmZhaWwoZmllbGQsIFZhbENvbmYuQ0FURUdPUllfTk9UX1NFTEVDVEVEKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJiLnN1Y2Nlc3MoZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgbnVtYmVyIG9mIGZhY3RzIHRvIHBhcnNlIGZpZWxkICh0ZXh0IGlucHV0KVxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCBET01cclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVOdW1PZkZhY3RzKGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLmlzRW1wdHkoZmllbGQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJiLmZhaWwoZmllbGQsIFZhbENvbmYuRU1QVFlfRklFTERfTUVTU0FHRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBpbnRlZ2VyIHdhcyBwYXNzZWRcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdG9yLmlzSW50KGZpZWxkLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYi5mYWlsKGZpZWxkLCBWYWxDb25mLklOVEVHRVJfUkVRVUlSRURfTUVTU0FHRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdG9yLmlzRml0TGltaXQoK2ZpZWxkLnZhbHVlLCAwLCBWYWxDb25mLk1BWF9OVU1fSVRFTVNfVE9fUEFSU0UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJiLmZhaWwoZmllbGQsIFZhbENvbmYuTlVNX09GX0ZBQ1RTX0lOVkFMSUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmIuc3VjY2VzcyhmaWVsZCk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\oop\\client\\validation\\fields-validation\\parse-facts-fields-validation-service.js","/..\\..\\services\\oop\\client\\validation\\fields-validation")
},{"../../../../../configs/validation/parse-validation-config":4,"../../../validation/concrete-validation/parse-facts-validation-service":19,"../fields-validation-service":17,"6r38Q7":35,"buffer":33}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validationService = _interopRequireDefault(require("../validation-service"));

var _parseValidationConfig = _interopRequireDefault(require("../../../../configs/validation/parse-validation-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Validation api particularly for parse forms
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationService
 * @uses NikitosGolubev\Configs\Validation\ParseValidationConfig as ValConf
 */
var ParseFactsValidationService =
/*#__PURE__*/
function (_ValidationService) {
  _inherits(ParseFactsValidationService, _ValidationService);

  function ParseFactsValidationService() {
    _classCallCheck(this, ParseFactsValidationService);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParseFactsValidationService).apply(this, arguments));
  }

  _createClass(ParseFactsValidationService, [{
    key: "isFactNumberAppropriate",
    value: function isFactNumberAppropriate(field) {
      if (!this.isInt(field.value)) return false;

      if (!this.isFitLimit(+field.value, _parseValidationConfig.default.MIN_FACT_NUMBER, _parseValidationConfig.default.MAX_FACT_NUMBER)) {
        return false;
      }

      return true;
    }
  }]);

  return ParseFactsValidationService;
}(_validationService.default);

exports.default = ParseFactsValidationService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLWZhY3RzLXZhbGlkYXRpb24tc2VydmljZS5qcyJdLCJuYW1lcyI6WyJQYXJzZUZhY3RzVmFsaWRhdGlvblNlcnZpY2UiLCJmaWVsZCIsImlzSW50IiwidmFsdWUiLCJpc0ZpdExpbWl0IiwiVmFsQ29uZiIsIk1JTl9GQUNUX05VTUJFUiIsIk1BWF9GQUNUX05VTUJFUiIsIlZhbGlkYXRpb25TZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLcUJBLDJCOzs7Ozs7Ozs7Ozs7OzRDQUNPQyxLLEVBQU87QUFDM0IsVUFBSSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBSyxDQUFDRSxLQUFqQixDQUFMLEVBQThCLE9BQU8sS0FBUDs7QUFDOUIsVUFBSSxDQUFDLEtBQUtDLFVBQUwsQ0FBZ0IsQ0FBQ0gsS0FBSyxDQUFDRSxLQUF2QixFQUE4QkUsK0JBQVFDLGVBQXRDLEVBQXVERCwrQkFBUUUsZUFBL0QsQ0FBTCxFQUFzRjtBQUNsRixlQUFPLEtBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7OztFQVBvREMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBWYWxpZGF0aW9uIGFwaSBwYXJ0aWN1bGFybHkgZm9yIHBhcnNlIGZvcm1zXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFNlcnZpY2VzXFxPT1BcXFZhbGlkYXRpb25cXENvbmNyZXRlVmFsaWRhdGlvblxyXG4gKi9cclxuXHJcbmltcG9ydCBWYWxpZGF0aW9uU2VydmljZSBmcm9tICcuLi92YWxpZGF0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgVmFsQ29uZiBmcm9tICcuLi8uLi8uLi8uLi9jb25maWdzL3ZhbGlkYXRpb24vcGFyc2UtdmFsaWRhdGlvbi1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRpb24gYXBpIHBhcnRpY3VsYXJseSBmb3IgcGFyc2UgZm9ybXNcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFNlcnZpY2VzXFxPT1BcXFZhbGlkYXRpb25cXFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxWYWxpZGF0aW9uXFxQYXJzZVZhbGlkYXRpb25Db25maWcgYXMgVmFsQ29uZlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VGYWN0c1ZhbGlkYXRpb25TZXJ2aWNlIGV4dGVuZHMgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG4gICAgaXNGYWN0TnVtYmVyQXBwcm9wcmlhdGUoZmllbGQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbnQoZmllbGQudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRml0TGltaXQoK2ZpZWxkLnZhbHVlLCBWYWxDb25mLk1JTl9GQUNUX05VTUJFUiwgVmFsQ29uZi5NQVhfRkFDVF9OVU1CRVIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\oop\\validation\\concrete-validation\\parse-facts-validation-service.js","/..\\..\\services\\oop\\validation\\concrete-validation")
},{"../../../../configs/validation/parse-validation-config":4,"../validation-service":22,"6r38Q7":35,"buffer":33}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validationResponseService = _interopRequireDefault(require("./validation-response-service"));

var _validationConfig = _interopRequireDefault(require("../../../../configs/validation/validation-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Default response generation for fields validation
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationResponses\ValidationResponseService
 * @uses NikitosGolubev\Configs\Validation\ValidationConfig
 */
var DefaultFieldValidationResponseService =
/*#__PURE__*/
function (_ValidationResponseSe) {
  _inherits(DefaultFieldValidationResponseService, _ValidationResponseSe);

  function DefaultFieldValidationResponseService() {
    _classCallCheck(this, DefaultFieldValidationResponseService);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultFieldValidationResponseService).call(this));
  }
  /**
   * Fields that was validated
   * @param {Object} field DOM
   */


  _createClass(DefaultFieldValidationResponseService, [{
    key: "setField",
    value: function setField(field) {
      this.response.field = field;
    }
    /**
     * @example Expected response:
     * {
     *     super.response,
     *     field: {Dom object with validated field}   
     * }
     * 
     * @see ValidationResponseService
     * @param  {field} field Field that was validated
     * @return {Object} response
     */

  }, {
    key: "build",
    value: function build(result, message, field) {
      this.setField(field);

      _get(_getPrototypeOf(DefaultFieldValidationResponseService.prototype), "build", this).call(this, result, message);

      return this.response;
    }
    /**
     * Forms success response of field validation
     * 
     * @param  {Object}  field DOM
     * @param  {Boolean|String} $message
     * @return {Object} response
     */

  }, {
    key: "success",
    value: function success(field) {
      var $message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!$message) $message = _validationConfig.default.DEFAULT_SUCCESS_MESSAGE;
      return this.build(true, $message, field);
    }
    /**
     * Forms fail response of field validation
     * 
     * @param  {Object}  field DOM
     * @param  {Boolean|String} $message
     * @return {Object} response
     */

  }, {
    key: "fail",
    value: function fail(field) {
      var $message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!$message) $message = _validationConfig.default.DEFAULT_FAIL_MESSAGE;
      return this.build(false, $message, field);
    }
  }]);

  return DefaultFieldValidationResponseService;
}(_validationResponseService.default);

exports.default = DefaultFieldValidationResponseService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtZmllbGQtdmFsaWRhdGlvbi1yZXNwb25zZS1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRGaWVsZFZhbGlkYXRpb25SZXNwb25zZVNlcnZpY2UiLCJmaWVsZCIsInJlc3BvbnNlIiwicmVzdWx0IiwibWVzc2FnZSIsInNldEZpZWxkIiwiJG1lc3NhZ2UiLCJWYWxpZGF0aW9uQ29uZmlnIiwiREVGQVVMVF9TVUNDRVNTX01FU1NBR0UiLCJidWlsZCIsIkRFRkFVTFRfRkFJTF9NRVNTQUdFIiwiVmFsaWRhdGlvblJlc3BvbnNlU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtxQkEscUM7Ozs7O0FBQ2pCLG1EQUFjO0FBQUE7O0FBQUE7QUFFYjtBQUVEOzs7Ozs7Ozs2QkFJU0MsSyxFQUFPO0FBQ1osV0FBS0MsUUFBTCxDQUFjRCxLQUFkLEdBQXNCQSxLQUF0QjtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzBCQVdNRSxNLEVBQVFDLE8sRUFBU0gsSyxFQUFPO0FBQzFCLFdBQUtJLFFBQUwsQ0FBY0osS0FBZDs7QUFDQSx1R0FBWUUsTUFBWixFQUFvQkMsT0FBcEI7O0FBQ0EsYUFBTyxLQUFLRixRQUFaO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs0QkFPUUQsSyxFQUF5QjtBQUFBLFVBQWxCSyxRQUFrQix1RUFBUCxLQUFPO0FBQzdCLFVBQUksQ0FBQ0EsUUFBTCxFQUFlQSxRQUFRLEdBQUdDLDBCQUFpQkMsdUJBQTVCO0FBQ2YsYUFBTyxLQUFLQyxLQUFMLENBQVcsSUFBWCxFQUFpQkgsUUFBakIsRUFBMkJMLEtBQTNCLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7O3lCQU9LQSxLLEVBQXlCO0FBQUEsVUFBbEJLLFFBQWtCLHVFQUFQLEtBQU87QUFDMUIsVUFBSSxDQUFDQSxRQUFMLEVBQWVBLFFBQVEsR0FBR0MsMEJBQWlCRyxvQkFBNUI7QUFDZixhQUFPLEtBQUtELEtBQUwsQ0FBVyxLQUFYLEVBQWtCSCxRQUFsQixFQUE0QkwsS0FBNUIsQ0FBUDtBQUNIOzs7O0VBcEQ4RFUsa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBEZWZhdWx0IHJlc3BvbnNlIGdlbmVyYXRpb24gZm9yIGZpZWxkcyB2YWxpZGF0aW9uXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFNlcnZpY2VzXFxPT1BcXFZhbGlkYXRpb25cXFZhbGlkYXRpb25SZXNwb25zZXNcclxuICovXHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvblJlc3BvbnNlU2VydmljZSBmcm9tICcuL3ZhbGlkYXRpb24tcmVzcG9uc2Utc2VydmljZSc7XHJcbmltcG9ydCBWYWxpZGF0aW9uQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZ3MvdmFsaWRhdGlvbi92YWxpZGF0aW9uLWNvbmZpZyc7XHJcblxyXG4vKipcclxuICogRGVmYXVsdCByZXNwb25zZSBnZW5lcmF0aW9uIGZvciBmaWVsZHMgdmFsaWRhdGlvblxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcU2VydmljZXNcXE9PUFxcVmFsaWRhdGlvblxcVmFsaWRhdGlvblJlc3BvbnNlc1xcVmFsaWRhdGlvblJlc3BvbnNlU2VydmljZVxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcQ29uZmlnc1xcVmFsaWRhdGlvblxcVmFsaWRhdGlvbkNvbmZpZ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdEZpZWxkVmFsaWRhdGlvblJlc3BvbnNlU2VydmljZSBleHRlbmRzIFZhbGlkYXRpb25SZXNwb25zZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpZWxkcyB0aGF0IHdhcyB2YWxpZGF0ZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBET01cclxuICAgICAqL1xyXG4gICAgc2V0RmllbGQoZmllbGQpIHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlLmZpZWxkID0gZmllbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZXhhbXBsZSBFeHBlY3RlZCByZXNwb25zZTpcclxuICAgICAqIHtcclxuICAgICAqICAgICBzdXBlci5yZXNwb25zZSxcclxuICAgICAqICAgICBmaWVsZDoge0RvbSBvYmplY3Qgd2l0aCB2YWxpZGF0ZWQgZmllbGR9ICAgXHJcbiAgICAgKiB9XHJcbiAgICAgKiBcclxuICAgICAqIEBzZWUgVmFsaWRhdGlvblJlc3BvbnNlU2VydmljZVxyXG4gICAgICogQHBhcmFtICB7ZmllbGR9IGZpZWxkIEZpZWxkIHRoYXQgd2FzIHZhbGlkYXRlZFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBidWlsZChyZXN1bHQsIG1lc3NhZ2UsIGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZChmaWVsZCk7XHJcbiAgICAgICAgc3VwZXIuYnVpbGQocmVzdWx0LCBtZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcm1zIHN1Y2Nlc3MgcmVzcG9uc2Ugb2YgZmllbGQgdmFsaWRhdGlvblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBmaWVsZCBET01cclxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW58U3RyaW5nfSAkbWVzc2FnZVxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBzdWNjZXNzKGZpZWxkLCAkbWVzc2FnZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCEkbWVzc2FnZSkgJG1lc3NhZ2UgPSBWYWxpZGF0aW9uQ29uZmlnLkRFRkFVTFRfU1VDQ0VTU19NRVNTQUdFO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKHRydWUsICRtZXNzYWdlLCBmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtcyBmYWlsIHJlc3BvbnNlIG9mIGZpZWxkIHZhbGlkYXRpb25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgZmllbGQgRE9NXHJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufFN0cmluZ30gJG1lc3NhZ2VcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgZmFpbChmaWVsZCwgJG1lc3NhZ2UgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghJG1lc3NhZ2UpICRtZXNzYWdlID0gVmFsaWRhdGlvbkNvbmZpZy5ERUZBVUxUX0ZBSUxfTUVTU0FHRTtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZChmYWxzZSwgJG1lc3NhZ2UsIGZpZWxkKTtcclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\oop\\validation\\validation-responses\\default-field-validation-response-service.js","/..\\..\\services\\oop\\validation\\validation-responses")
},{"../../../../configs/validation/validation-config":5,"./validation-response-service":21,"6r38Q7":35,"buffer":33}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Base validation response service
 * @namespace NikitosGolubev\Services\OOP\Validation\ValidationResponses;
 */

/**
 * Base validation response, may be inheritated by other valid. responses
 */
var ValidationResponseService =
/*#__PURE__*/
function () {
  function ValidationResponseService() {
    _classCallCheck(this, ValidationResponseService);

    /**
     * Response storage
     * @type {Object}
     */
    this.response = {};
  }
  /**
   * Setting result of validation
   * @param {Boolean} result true - success, false - failure
   */


  _createClass(ValidationResponseService, [{
    key: "setResult",
    value: function setResult(result) {
      this.response.result = result;
    }
    /**
     * Setting message which describes validation response
     * @param {String} message
     */

  }, {
    key: "setMessage",
    value: function setMessage(message) {
      this.response.message = message;
    }
    /**
     * Building response
     *
     * @example Expected response:
     * {
     *     result: true|false,
     *     message: 'your message'
     * }
     * 
     * @param  {Boolean} result
     * @param  {String} message
     * @return {Object} validation response
     */

  }, {
    key: "build",
    value: function build(result, message) {
      this.setResult(result);
      this.setMessage(message);
      return this.response;
    }
  }]);

  return ValidationResponseService;
}();

exports.default = ValidationResponseService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tcmVzcG9uc2Utc2VydmljZS5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uUmVzcG9uc2VTZXJ2aWNlIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJtZXNzYWdlIiwic2V0UmVzdWx0Iiwic2V0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7SUFHcUJBLHlCOzs7QUFDakIsdUNBQWM7QUFBQTs7QUFDVjs7OztBQUlBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDtBQUVEOzs7Ozs7Ozs4QkFJVUMsTSxFQUFRO0FBQ2QsV0FBS0QsUUFBTCxDQUFjQyxNQUFkLEdBQXVCQSxNQUF2QjtBQUNIO0FBRUQ7Ozs7Ozs7K0JBSVdDLE8sRUFBUztBQUNoQixXQUFLRixRQUFMLENBQWNFLE9BQWQsR0FBd0JBLE9BQXhCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OzswQkFhTUQsTSxFQUFRQyxPLEVBQVM7QUFDbkIsV0FBS0MsU0FBTCxDQUFlRixNQUFmO0FBQ0EsV0FBS0csVUFBTCxDQUFnQkYsT0FBaEI7QUFDQSxhQUFPLEtBQUtGLFFBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IEJhc2UgdmFsaWRhdGlvbiByZXNwb25zZSBzZXJ2aWNlXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFNlcnZpY2VzXFxPT1BcXFZhbGlkYXRpb25cXFZhbGlkYXRpb25SZXNwb25zZXM7XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgdmFsaWRhdGlvbiByZXNwb25zZSwgbWF5IGJlIGluaGVyaXRhdGVkIGJ5IG90aGVyIHZhbGlkLiByZXNwb25zZXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25SZXNwb25zZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzcG9uc2Ugc3RvcmFnZVxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGluZyByZXN1bHQgb2YgdmFsaWRhdGlvblxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXN1bHQgdHJ1ZSAtIHN1Y2Nlc3MsIGZhbHNlIC0gZmFpbHVyZVxyXG4gICAgICovXHJcbiAgICBzZXRSZXN1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZS5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0aW5nIG1lc3NhZ2Ugd2hpY2ggZGVzY3JpYmVzIHZhbGlkYXRpb24gcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZGluZyByZXNwb25zZVxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlIEV4cGVjdGVkIHJlc3BvbnNlOlxyXG4gICAgICoge1xyXG4gICAgICogICAgIHJlc3VsdDogdHJ1ZXxmYWxzZSxcclxuICAgICAqICAgICBtZXNzYWdlOiAneW91ciBtZXNzYWdlJ1xyXG4gICAgICogfVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSByZXN1bHRcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB2YWxpZGF0aW9uIHJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKHJlc3VsdCwgbWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0UmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\oop\\validation\\validation-responses\\validation-response-service.js","/..\\..\\services\\oop\\validation\\validation-responses")
},{"6r38Q7":35,"buffer":33}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Base validation service
 * @namespace NikitosGolubev\Services\OOP\Validation;
 */

/**
 * Base validation service.
 * It's API shouldn't depend on particular fields.
 * Other words, the methods from this class may be applied
 * for validation of vast range of fields.
 */
var ValidationService =
/*#__PURE__*/
function () {
  function ValidationService() {
    _classCallCheck(this, ValidationService);
  }

  _createClass(ValidationService, [{
    key: "isEmpty",

    /**
     * Checks if fields value is set or not.
     * @param  {Object}  field DOM
     * @return {Boolean}
     */
    value: function isEmpty(field) {
      if (!field.value && !(field.value === '0' || field.value === 0)) {
        return true;
      }

      return false;
    }
    /**
     * Checks if number fits the particular limit
     * @param  {Number} number
     * @param  {Number}  $startLimit min
     * @param  {Number}  $endLimit max
     * @return {Boolean}
     */

  }, {
    key: "isFitLimit",
    value: function isFitLimit(number) {
      var $startLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -99999999;
      var $endLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 99999999;

      if (number < $startLimit || number > $endLimit) {
        return false;
      }

      return true;
    }
    /**
     * Checks if some value is an integer
     * @param  {Mixed}  val
     * @return {Boolean}
     */

  }, {
    key: "isInt",
    value: function isInt(val) {
      return Number.isInteger(+val);
    }
  }]);

  return ValidationService;
}();

exports.default = ValidationService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tc2VydmljZS5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uU2VydmljZSIsImZpZWxkIiwidmFsdWUiLCJudW1iZXIiLCIkc3RhcnRMaW1pdCIsIiRlbmRMaW1pdCIsInZhbCIsIk51bWJlciIsImlzSW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7Ozs7SUFNcUJBLGlCOzs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSyxFQUFPO0FBQ1gsVUFBSSxDQUFDQSxLQUFLLENBQUNDLEtBQVAsSUFBZ0IsRUFBRUQsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLEdBQWhCLElBQXVCRCxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsQ0FBekMsQ0FBcEIsRUFBaUU7QUFDN0QsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7OzsrQkFPV0MsTSxFQUF1RDtBQUFBLFVBQS9DQyxXQUErQyx1RUFBakMsQ0FBQyxRQUFnQztBQUFBLFVBQXRCQyxTQUFzQix1RUFBVixRQUFVOztBQUM5RCxVQUFJRixNQUFNLEdBQUdDLFdBQVQsSUFBd0JELE1BQU0sR0FBR0UsU0FBckMsRUFBZ0Q7QUFDNUMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7MEJBS01DLEcsRUFBSztBQUNQLGFBQU9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQixDQUFDRixHQUFsQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBCYXNlIHZhbGlkYXRpb24gc2VydmljZVxyXG4gKiBAbmFtZXNwYWNlIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcT09QXFxWYWxpZGF0aW9uO1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCYXNlIHZhbGlkYXRpb24gc2VydmljZS5cclxuICogSXQncyBBUEkgc2hvdWxkbid0IGRlcGVuZCBvbiBwYXJ0aWN1bGFyIGZpZWxkcy5cclxuICogT3RoZXIgd29yZHMsIHRoZSBtZXRob2RzIGZyb20gdGhpcyBjbGFzcyBtYXkgYmUgYXBwbGllZFxyXG4gKiBmb3IgdmFsaWRhdGlvbiBvZiB2YXN0IHJhbmdlIG9mIGZpZWxkcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGZpZWxkcyB2YWx1ZSBpcyBzZXQgb3Igbm90LlxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgZmllbGQgRE9NXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0VtcHR5KGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKCFmaWVsZC52YWx1ZSAmJiAhKGZpZWxkLnZhbHVlID09PSAnMCcgfHwgZmllbGQudmFsdWUgPT09IDApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgbnVtYmVyIGZpdHMgdGhlIHBhcnRpY3VsYXIgbGltaXRcclxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAkc3RhcnRMaW1pdCBtaW5cclxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICRlbmRMaW1pdCBtYXhcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRml0TGltaXQobnVtYmVyLCAkc3RhcnRMaW1pdCA9IC05OTk5OTk5OSwgJGVuZExpbWl0ID0gOTk5OTk5OTkpIHtcclxuICAgICAgICBpZiAobnVtYmVyIDwgJHN0YXJ0TGltaXQgfHwgbnVtYmVyID4gJGVuZExpbWl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgc29tZSB2YWx1ZSBpcyBhbiBpbnRlZ2VyXHJcbiAgICAgKiBAcGFyYW0gIHtNaXhlZH0gIHZhbFxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNJbnQodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoK3ZhbCk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\services\\oop\\validation\\validation-service.js","/..\\..\\services\\oop\\validation")
},{"6r38Q7":35,"buffer":33}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _failBehaviourInterface = _interopRequireDefault(require("./fail-behaviour-interface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Describes actions that should be taken by default if fields validation failed
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours\FailBehaviourInterface
 */
var DefaultFailBehaviour =
/*#__PURE__*/
function (_FailBehaviourInterfa) {
  _inherits(DefaultFailBehaviour, _FailBehaviourInterfa);

  function DefaultFailBehaviour() {
    _classCallCheck(this, DefaultFailBehaviour);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultFailBehaviour).apply(this, arguments));
  }

  _createClass(DefaultFailBehaviour, [{
    key: "fail",

    /**
     * @see FailBehaviourInterface fail() method
     * @param {Object} fieldBlock DOM object with field-block which element(-s) was validated
     * @return {Void}
     */
    value: function fail(fieldBlock) {}
  }]);

  return DefaultFailBehaviour;
}(_failBehaviourInterface.default);

exports.default = DefaultFailBehaviour;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtZmFpbC1iZWhhdmlvdXIuanMiXSwibmFtZXMiOlsiRGVmYXVsdEZhaWxCZWhhdmlvdXIiLCJmaWVsZEJsb2NrIiwiRmFpbEJlaGF2aW91ckludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLG9COzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7eUJBS0tDLFUsRUFBWSxDQUVoQjs7OztFQVI2Q0MsK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBEZWZhdWx0IEZhaWwgQmVoYXZpb3VyXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEJlaGF2aW91cnNcXEZhaWxCZWhhdmlvdXJzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEZhaWxCZWhhdmlvdXJJbnRlcmZhY2UgZnJvbSBcIi4vZmFpbC1iZWhhdmlvdXItaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIGFjdGlvbnMgdGhhdCBzaG91bGQgYmUgdGFrZW4gYnkgZGVmYXVsdCBpZiBmaWVsZHMgdmFsaWRhdGlvbiBmYWlsZWRcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEJlaGF2aW91cnNcXEZhaWxCZWhhdmlvdXJzXFxGYWlsQmVoYXZpb3VySW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0RmFpbEJlaGF2aW91ciBleHRlbmRzIEZhaWxCZWhhdmlvdXJJbnRlcmZhY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIEZhaWxCZWhhdmlvdXJJbnRlcmZhY2UgZmFpbCgpIG1ldGhvZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkQmxvY2sgRE9NIG9iamVjdCB3aXRoIGZpZWxkLWJsb2NrIHdoaWNoIGVsZW1lbnQoLXMpIHdhcyB2YWxpZGF0ZWRcclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZhaWwoZmllbGRCbG9jaykge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\behaviours\\fail-behaviours\\default-fail-behaviour.js","/..\\..\\views\\forms-validation\\behaviours\\fail-behaviours")
},{"./fail-behaviour-interface":24,"6r38Q7":35,"buffer":33}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Fail Behaviour Interface
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours;
 */

/**
 * Describes an interface, for behaviour if validation failed.
 * Strategy pattern.
 */
var FailBehaviourInterface =
/*#__PURE__*/
function () {
  function FailBehaviourInterface() {
    _classCallCheck(this, FailBehaviourInterface);
  }

  _createClass(FailBehaviourInterface, [{
    key: "fail",

    /**
     * Actions that should be performed if validation of some field failed.
     * @param {Mixed|Void} data Data which comes for providing validation response
     */
    value: function fail(data) {
      throw new Error("It's abstract method from interface. Requires implementation.");
    }
  }]);

  return FailBehaviourInterface;
}();

exports.default = FailBehaviourInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhaWwtYmVoYXZpb3VyLWludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJGYWlsQmVoYXZpb3VySW50ZXJmYWNlIiwiZGF0YSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0E7Ozs7SUFJcUJBLHNCOzs7Ozs7Ozs7O0FBQ2pCOzs7O3lCQUlLQyxJLEVBQU07QUFDUCxZQUFNLElBQUlDLEtBQUosQ0FBVSwrREFBVixDQUFOO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBGYWlsIEJlaGF2aW91ciBJbnRlcmZhY2VcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVmlld3NcXEZvcm1zVmFsaWRhdGlvblxcQmVoYXZpb3Vyc1xcRmFpbEJlaGF2aW91cnM7XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyBhbiBpbnRlcmZhY2UsIGZvciBiZWhhdmlvdXIgaWYgdmFsaWRhdGlvbiBmYWlsZWQuXHJcbiAqIFN0cmF0ZWd5IHBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlsQmVoYXZpb3VySW50ZXJmYWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQWN0aW9ucyB0aGF0IHNob3VsZCBiZSBwZXJmb3JtZWQgaWYgdmFsaWRhdGlvbiBvZiBzb21lIGZpZWxkIGZhaWxlZC5cclxuICAgICAqIEBwYXJhbSB7TWl4ZWR8Vm9pZH0gZGF0YSBEYXRhIHdoaWNoIGNvbWVzIGZvciBwcm92aWRpbmcgdmFsaWRhdGlvbiByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBmYWlsKGRhdGEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJdCdzIGFic3RyYWN0IG1ldGhvZCBmcm9tIGludGVyZmFjZS4gUmVxdWlyZXMgaW1wbGVtZW50YXRpb24uXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\behaviours\\fail-behaviours\\fail-behaviour-interface.js","/..\\..\\views\\forms-validation\\behaviours\\fail-behaviours")
},{"6r38Q7":35,"buffer":33}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _successBehaviourInterface = _interopRequireDefault(require("./success-behaviour-interface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Describes actions that should be taken by default if fields validation succeeded
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours\SuccessBehaviourInterface
 */
var DefaultSuccessBehaviour =
/*#__PURE__*/
function (_SuccessBehaviourInte) {
  _inherits(DefaultSuccessBehaviour, _SuccessBehaviourInte);

  function DefaultSuccessBehaviour() {
    _classCallCheck(this, DefaultSuccessBehaviour);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultSuccessBehaviour).apply(this, arguments));
  }

  _createClass(DefaultSuccessBehaviour, [{
    key: "success",

    /**
     * @see SuccessBehaviourInterface success() method
     * @param {Object} fieldBlock DOM object with field-block which element(-s) was validated
     * @return {Void}
     */
    value: function success(fieldBlock) {}
  }]);

  return DefaultSuccessBehaviour;
}(_successBehaviourInterface.default);

exports.default = DefaultSuccessBehaviour;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtc3VjY2Vzcy1iZWhhdmlvdXIuanMiXSwibmFtZXMiOlsiRGVmYXVsdFN1Y2Nlc3NCZWhhdmlvdXIiLCJmaWVsZEJsb2NrIiwiU3VjY2Vzc0JlaGF2aW91ckludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFUsRUFBWSxDQUVuQjs7OztFQVJnREMsa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBEZWZhdWx0IFN1Y2Nlc3MgQmVoYXZpb3VyXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEJlaGF2aW91cnNcXFN1Y2Nlc3NCZWhhdmlvdXJzXHJcbiAqL1xyXG5cclxuaW1wb3J0IFN1Y2Nlc3NCZWhhdmlvdXJJbnRlcmZhY2UgZnJvbSBcIi4vc3VjY2Vzcy1iZWhhdmlvdXItaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIGFjdGlvbnMgdGhhdCBzaG91bGQgYmUgdGFrZW4gYnkgZGVmYXVsdCBpZiBmaWVsZHMgdmFsaWRhdGlvbiBzdWNjZWVkZWRcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEJlaGF2aW91cnNcXFN1Y2Nlc3NCZWhhdmlvdXJzXFxTdWNjZXNzQmVoYXZpb3VySW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0U3VjY2Vzc0JlaGF2aW91ciBleHRlbmRzIFN1Y2Nlc3NCZWhhdmlvdXJJbnRlcmZhY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc2VlIFN1Y2Nlc3NCZWhhdmlvdXJJbnRlcmZhY2Ugc3VjY2VzcygpIG1ldGhvZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkQmxvY2sgRE9NIG9iamVjdCB3aXRoIGZpZWxkLWJsb2NrIHdoaWNoIGVsZW1lbnQoLXMpIHdhcyB2YWxpZGF0ZWRcclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHN1Y2Nlc3MoZmllbGRCbG9jaykge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\behaviours\\success-behaviours\\default-success-behaviour.js","/..\\..\\views\\forms-validation\\behaviours\\success-behaviours")
},{"./success-behaviour-interface":26,"6r38Q7":35,"buffer":33}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview Success Behaviour Interface
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours;
 */

/**
 * Describes an interface, for behaviour if validation succeeded.
 * Strategy pattern.
 */
var SuccessBehaviourInterface =
/*#__PURE__*/
function () {
  function SuccessBehaviourInterface() {
    _classCallCheck(this, SuccessBehaviourInterface);
  }

  _createClass(SuccessBehaviourInterface, [{
    key: "success",

    /**
     * Actions that should be performed if validation of some field succeeded.
     * @param {Mixed|Void} data Data which comes for providing validation response
     */
    value: function success(fieldBlock) {
      throw new Error("It's abstract method from interface. Requires implementation.");
    }
  }]);

  return SuccessBehaviourInterface;
}();

exports.default = SuccessBehaviourInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtYmVoYXZpb3VyLWludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJTdWNjZXNzQmVoYXZpb3VySW50ZXJmYWNlIiwiZmllbGRCbG9jayIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0E7Ozs7SUFJcUJBLHlCOzs7Ozs7Ozs7O0FBQ2pCOzs7OzRCQUlRQyxVLEVBQVk7QUFDaEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsK0RBQVYsQ0FBTjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgU3VjY2VzcyBCZWhhdmlvdXIgSW50ZXJmYWNlXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEJlaGF2aW91cnNcXFN1Y2Nlc3NCZWhhdmlvdXJzO1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgYW4gaW50ZXJmYWNlLCBmb3IgYmVoYXZpb3VyIGlmIHZhbGlkYXRpb24gc3VjY2VlZGVkLlxyXG4gKiBTdHJhdGVneSBwYXR0ZXJuLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VjY2Vzc0JlaGF2aW91ckludGVyZmFjZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFjdGlvbnMgdGhhdCBzaG91bGQgYmUgcGVyZm9ybWVkIGlmIHZhbGlkYXRpb24gb2Ygc29tZSBmaWVsZCBzdWNjZWVkZWQuXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfFZvaWR9IGRhdGEgRGF0YSB3aGljaCBjb21lcyBmb3IgcHJvdmlkaW5nIHZhbGlkYXRpb24gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgc3VjY2VzcyhmaWVsZEJsb2NrKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQncyBhYnN0cmFjdCBtZXRob2QgZnJvbSBpbnRlcmZhY2UuIFJlcXVpcmVzIGltcGxlbWVudGF0aW9uLlwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\behaviours\\success-behaviours\\success-behaviour-interface.js","/..\\..\\views\\forms-validation\\behaviours\\success-behaviours")
},{"6r38Q7":35,"buffer":33}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("../view"));

var _defaultFailBehaviour = _interopRequireDefault(require("./behaviours/fail-behaviours/default-fail-behaviour"));

var _defaultSuccessBehaviour = _interopRequireDefault(require("./behaviours/success-behaviours/default-success-behaviour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Responsible for showing validation result to user.
 * Observer of model.
 *
 * @uses NikitosGolubev\Views\View
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours\DefaultFailBehaviour
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours\DefaultSuccessBehaviour
 */
var FormsValidationView =
/*#__PURE__*/
function (_View) {
  _inherits(FormsValidationView, _View);

  function FormsValidationView(model) {
    var _this;

    var $failBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $successBehaviour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, FormsValidationView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormsValidationView).call(this));
    _this.model = model;
    if (!$failBehaviour) $failBehaviour = new _defaultFailBehaviour.default();
    _this.failBehaviour = $failBehaviour;
    if (!$successBehaviour) $successBehaviour = new _defaultSuccessBehaviour.default();
    _this.successBehaviour = $successBehaviour;

    _this.defineUI();

    _this.model.registerObserver(_assertThisInitialized(_this));

    return _this;
  }
  /**
   * @see View update() method
   * @param {Map} validationData Map with following structure:
   *     [[validationBlockObjDOM: validationResultBool]]
   * @return {Void}
   */


  _createClass(FormsValidationView, [{
    key: "update",
    value: function update(validationData) {}
    /**
     * Abstract method where UI for each form should be defined
     * @return {Void}
     */

  }, {
    key: "defineUI",
    value: function defineUI() {
      throw new Error("It's abstract method, which requires implementation!");
    }
  }]);

  return FormsValidationView;
}(_view.default);

exports.default = FormsValidationView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLXZhbGlkYXRpb24tdmlldy5qcyJdLCJuYW1lcyI6WyJGb3Jtc1ZhbGlkYXRpb25WaWV3IiwibW9kZWwiLCIkZmFpbEJlaGF2aW91ciIsIiRzdWNjZXNzQmVoYXZpb3VyIiwiRGVmYXVsdEZhaWxCZWhhdmlvdXIiLCJmYWlsQmVoYXZpb3VyIiwiRGVmYXVsdFN1Y2Nlc3NCZWhhdmlvdXIiLCJzdWNjZXNzQmVoYXZpb3VyIiwiZGVmaW5lVUkiLCJyZWdpc3Rlck9ic2VydmVyIiwidmFsaWRhdGlvbkRhdGEiLCJFcnJvciIsIlZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkEsbUI7Ozs7O0FBQ2pCLCtCQUFZQyxLQUFaLEVBQXNFO0FBQUE7O0FBQUEsUUFBbkRDLGNBQW1ELHVFQUFsQyxLQUFrQztBQUFBLFFBQTNCQyxpQkFBMkIsdUVBQVAsS0FBTzs7QUFBQTs7QUFDbEU7QUFDQSxVQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFFQSxRQUFJLENBQUNDLGNBQUwsRUFBcUJBLGNBQWMsR0FBRyxJQUFJRSw2QkFBSixFQUFqQjtBQUNyQixVQUFLQyxhQUFMLEdBQXFCSCxjQUFyQjtBQUNBLFFBQUksQ0FBQ0MsaUJBQUwsRUFBd0JBLGlCQUFpQixHQUFHLElBQUlHLGdDQUFKLEVBQXBCO0FBQ3hCLFVBQUtDLGdCQUFMLEdBQXdCSixpQkFBeEI7O0FBRUEsVUFBS0ssUUFBTDs7QUFDQSxVQUFLUCxLQUFMLENBQVdRLGdCQUFYOztBQVZrRTtBQVdyRTtBQUVEOzs7Ozs7Ozs7OzJCQU1PQyxjLEVBQWdCLENBRXRCO0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDUCxZQUFNLElBQUlDLEtBQUosd0RBQU47QUFDSDs7OztFQTlCNENDLGEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBGb3JtcyB2YWxpZGF0aW9uIHZpZXdcclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVmlld3NcXEZvcm1zVmFsaWRhdGlvblxyXG4gKi9cclxuXHJcbmltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgRGVmYXVsdEZhaWxCZWhhdmlvdXIgZnJvbSAnLi9iZWhhdmlvdXJzL2ZhaWwtYmVoYXZpb3Vycy9kZWZhdWx0LWZhaWwtYmVoYXZpb3VyJ1xyXG5pbXBvcnQgRGVmYXVsdFN1Y2Nlc3NCZWhhdmlvdXIgZnJvbSAnLi9iZWhhdmlvdXJzL3N1Y2Nlc3MtYmVoYXZpb3Vycy9kZWZhdWx0LXN1Y2Nlc3MtYmVoYXZpb3VyJ1xyXG5cclxuLyoqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBzaG93aW5nIHZhbGlkYXRpb24gcmVzdWx0IHRvIHVzZXIuXHJcbiAqIE9ic2VydmVyIG9mIG1vZGVsLlxyXG4gKlxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcVmlld3NcXFZpZXdcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEJlaGF2aW91cnNcXEZhaWxCZWhhdmlvdXJzXFxEZWZhdWx0RmFpbEJlaGF2aW91clxyXG4gKiBAdXNlcyBOaWtpdG9zR29sdWJldlxcVmlld3NcXEZvcm1zVmFsaWRhdGlvblxcQmVoYXZpb3Vyc1xcU3VjY2Vzc0JlaGF2aW91cnNcXERlZmF1bHRTdWNjZXNzQmVoYXZpb3VyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jtc1ZhbGlkYXRpb25WaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgJGZhaWxCZWhhdmlvdXIgPSBmYWxzZSwgJHN1Y2Nlc3NCZWhhdmlvdXIgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG5cclxuICAgICAgICBpZiAoISRmYWlsQmVoYXZpb3VyKSAkZmFpbEJlaGF2aW91ciA9IG5ldyBEZWZhdWx0RmFpbEJlaGF2aW91cjtcclxuICAgICAgICB0aGlzLmZhaWxCZWhhdmlvdXIgPSAkZmFpbEJlaGF2aW91cjtcclxuICAgICAgICBpZiAoISRzdWNjZXNzQmVoYXZpb3VyKSAkc3VjY2Vzc0JlaGF2aW91ciA9IG5ldyBEZWZhdWx0U3VjY2Vzc0JlaGF2aW91cjtcclxuICAgICAgICB0aGlzLnN1Y2Nlc3NCZWhhdmlvdXIgPSAkc3VjY2Vzc0JlaGF2aW91cjtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbmVVSSgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVnaXN0ZXJPYnNlcnZlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzZWUgVmlldyB1cGRhdGUoKSBtZXRob2RcclxuICAgICAqIEBwYXJhbSB7TWFwfSB2YWxpZGF0aW9uRGF0YSBNYXAgd2l0aCBmb2xsb3dpbmcgc3RydWN0dXJlOlxyXG4gICAgICogICAgIFtbdmFsaWRhdGlvbkJsb2NrT2JqRE9NOiB2YWxpZGF0aW9uUmVzdWx0Qm9vbF1dXHJcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICovXHJcbiAgICB1cGRhdGUodmFsaWRhdGlvbkRhdGEpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFic3RyYWN0IG1ldGhvZCB3aGVyZSBVSSBmb3IgZWFjaCBmb3JtIHNob3VsZCBiZSBkZWZpbmVkXHJcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICovXHJcbiAgICBkZWZpbmVVSSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEl0J3MgYWJzdHJhY3QgbWV0aG9kLCB3aGljaCByZXF1aXJlcyBpbXBsZW1lbnRhdGlvbiFgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\forms-validation-view.js","/..\\..\\views\\forms-validation")
},{"../view":31,"./behaviours/fail-behaviours/default-fail-behaviour":23,"./behaviours/success-behaviours/default-success-behaviour":25,"6r38Q7":35,"buffer":33}],28:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationView = _interopRequireDefault(require("../forms-validation-view"));

var _domService = require("../../../services/functional/client/dom-service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 */
var FactNumInRangeView =
/*#__PURE__*/
function (_FormsValidationView) {
  _inherits(FactNumInRangeView, _FormsValidationView);

  function FactNumInRangeView(model) {
    var $failBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $successBehaviour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, FactNumInRangeView);

    return _possibleConstructorReturn(this, _getPrototypeOf(FactNumInRangeView).call(this, model, $failBehaviour, $successBehaviour));
  }
  /**
   * @see FormsValidationView defineUI() method
   */


  _createClass(FactNumInRangeView, [{
    key: "defineUI",
    value: function defineUI() {
      this.form = (0, _domService.$)('.js-fact-num-in-range-form');
    }
    /**
     * Getter for 'form' element
     * @return {[type]} [description]
     */

  }, {
    key: "getForm",
    value: function getForm() {
      return this.form;
    }
  }]);

  return FactNumInRangeView;
}(_formsValidationView.default);

exports.default = FactNumInRangeView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3QtbnVtLWluLXJhbmdlLmpzIl0sIm5hbWVzIjpbIkZhY3ROdW1JblJhbmdlVmlldyIsIm1vZGVsIiwiJGZhaWxCZWhhdmlvdXIiLCIkc3VjY2Vzc0JlaGF2aW91ciIsImZvcm0iLCJGb3Jtc1ZhbGlkYXRpb25WaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEsa0I7Ozs7O0FBQ2pCLDhCQUFZQyxLQUFaLEVBQXVFO0FBQUEsUUFBbkRDLGNBQW1ELHVFQUFsQyxLQUFrQztBQUFBLFFBQTNCQyxpQkFBMkIsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQSwyRkFDN0RGLEtBRDZELEVBQ3REQyxjQURzRCxFQUN0Q0MsaUJBRHNDO0FBRXRFO0FBRUQ7Ozs7Ozs7K0JBR1c7QUFDUCxXQUFLQyxJQUFMLEdBQVksbUJBQUUsNEJBQUYsQ0FBWjtBQUNIO0FBRUQ7Ozs7Ozs7OEJBSVU7QUFBRSxhQUFPLEtBQUtBLElBQVo7QUFBbUI7Ozs7RUFoQmFDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlT3ZlcnZpZXcgVmlldyBmb3IgJ2ZhY3QgbnVtYmVyIGluIHJhbmdlJyBmb3JtXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zVmlld3NcclxuICovXHJcblxyXG5pbXBvcnQgRm9ybXNWYWxpZGF0aW9uVmlldyBmcm9tICcuLi9mb3Jtcy12YWxpZGF0aW9uLXZpZXcnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZnVuY3Rpb25hbC9jbGllbnQvZG9tLXNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxWaWV3c1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc1ZhbGlkYXRpb25WaWV3XHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcRnVuY3Rpb25hbFxcQ2xpZW50XFxEb21TZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWN0TnVtSW5SYW5nZVZpZXcgZXh0ZW5kcyBGb3Jtc1ZhbGlkYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCAgJGZhaWxCZWhhdmlvdXIgPSBmYWxzZSwgJHN1Y2Nlc3NCZWhhdmlvdXIgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsLCAkZmFpbEJlaGF2aW91ciwgJHN1Y2Nlc3NCZWhhdmlvdXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBGb3Jtc1ZhbGlkYXRpb25WaWV3IGRlZmluZVVJKCkgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIGRlZmluZVVJKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9ICQoJy5qcy1mYWN0LW51bS1pbi1yYW5nZS1mb3JtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yICdmb3JtJyBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybSgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\forms-views\\fact-num-in-range.js","/..\\..\\views\\forms-validation\\forms-views")
},{"../../../services/functional/client/dom-service":16,"../forms-validation-view":27,"6r38Q7":35,"buffer":33}],29:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationView = _interopRequireDefault(require("../forms-validation-view"));

var _domService = require("../../../services/functional/client/dom-service");

var _numOfFactsConfig = _interopRequireDefault(require("../../../configs/forms/num-of-facts-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\NumOfFactsConfig
 */
var NumOfFactsView =
/*#__PURE__*/
function (_FormsValidationView) {
  _inherits(NumOfFactsView, _FormsValidationView);

  function NumOfFactsView(model) {
    var $failBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $successBehaviour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, NumOfFactsView);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumOfFactsView).call(this, model, $failBehaviour, $successBehaviour));
  }
  /**
   * @see FormsValidationView defineUI() method
   */


  _createClass(NumOfFactsView, [{
    key: "defineUI",
    value: function defineUI() {
      this.form = (0, _domService.$)(_numOfFactsConfig.default.FORM_SELECTOR);
    }
    /**
     * Getter for 'form' element
     * @return {[type]} [description]
     */

  }, {
    key: "getForm",
    value: function getForm() {
      return this.form;
    }
  }]);

  return NumOfFactsView;
}(_formsValidationView.default);

exports.default = NumOfFactsView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bS1vZi1mYWN0cy5qcyJdLCJuYW1lcyI6WyJOdW1PZkZhY3RzVmlldyIsIm1vZGVsIiwiJGZhaWxCZWhhdmlvdXIiLCIkc3VjY2Vzc0JlaGF2aW91ciIsImZvcm0iLCJOdW1PZkZhY3RzQ29uZmlnIiwiRk9STV9TRUxFQ1RPUiIsIkZvcm1zVmFsaWRhdGlvblZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtxQkEsYzs7Ozs7QUFDakIsMEJBQVlDLEtBQVosRUFBdUU7QUFBQSxRQUFuREMsY0FBbUQsdUVBQWxDLEtBQWtDO0FBQUEsUUFBM0JDLGlCQUEyQix1RUFBUCxLQUFPOztBQUFBOztBQUFBLHVGQUM3REYsS0FENkQsRUFDdERDLGNBRHNELEVBQ3RDQyxpQkFEc0M7QUFFdEU7QUFFRDs7Ozs7OzsrQkFHVztBQUNQLFdBQUtDLElBQUwsR0FBWSxtQkFBRUMsMEJBQWlCQyxhQUFuQixDQUFaO0FBQ0g7QUFFRDs7Ozs7Ozs4QkFJVTtBQUFFLGFBQU8sS0FBS0YsSUFBWjtBQUFtQjs7OztFQWhCU0csNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBWaWV3IGZvciAnbnVtIG9mIGZhY3RzJyBmb3JtXHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zVmlld3NcclxuICovXHJcblxyXG5pbXBvcnQgRm9ybXNWYWxpZGF0aW9uVmlldyBmcm9tICcuLi9mb3Jtcy12YWxpZGF0aW9uLXZpZXcnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZnVuY3Rpb25hbC9jbGllbnQvZG9tLXNlcnZpY2UnO1xyXG5pbXBvcnQgTnVtT2ZGYWN0c0NvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWdzL2Zvcm1zL251bS1vZi1mYWN0cy1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxWaWV3c1xcRm9ybXNWYWxpZGF0aW9uXFxGb3Jtc1ZhbGlkYXRpb25WaWV3XHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxTZXJ2aWNlc1xcRnVuY3Rpb25hbFxcQ2xpZW50XFxEb21TZXJ2aWNlXHJcbiAqIEB1c2VzIE5pa2l0b3NHb2x1YmV2XFxDb25maWdzXFxGb3Jtc1xcTnVtT2ZGYWN0c0NvbmZpZ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtT2ZGYWN0c1ZpZXcgZXh0ZW5kcyBGb3Jtc1ZhbGlkYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCAgJGZhaWxCZWhhdmlvdXIgPSBmYWxzZSwgJHN1Y2Nlc3NCZWhhdmlvdXIgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsLCAkZmFpbEJlaGF2aW91ciwgJHN1Y2Nlc3NCZWhhdmlvdXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBGb3Jtc1ZhbGlkYXRpb25WaWV3IGRlZmluZVVJKCkgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIGRlZmluZVVJKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9ICQoTnVtT2ZGYWN0c0NvbmZpZy5GT1JNX1NFTEVDVE9SKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgJ2Zvcm0nIGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICovXHJcbiAgICBnZXRGb3JtKCkgeyByZXR1cm4gdGhpcy5mb3JtOyB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\forms-views\\num-of-facts.js","/..\\..\\views\\forms-validation\\forms-views")
},{"../../../configs/forms/num-of-facts-config":3,"../../../services/functional/client/dom-service":16,"../forms-validation-view":27,"6r38Q7":35,"buffer":33}],30:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formsValidationView = _interopRequireDefault(require("../forms-validation-view"));

var _domService = require("../../../services/functional/client/dom-service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 */
var ParticularFactNumbersView =
/*#__PURE__*/
function (_FormsValidationView) {
  _inherits(ParticularFactNumbersView, _FormsValidationView);

  function ParticularFactNumbersView(model) {
    var $failBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $successBehaviour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, ParticularFactNumbersView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParticularFactNumbersView).call(this, model, $failBehaviour, $successBehaviour));
  }
  /**
   * @see FormsValidationView defineUI() method
   */


  _createClass(ParticularFactNumbersView, [{
    key: "defineUI",
    value: function defineUI() {
      this.form = (0, _domService.$)('.js-particular-fact-numbers-form');
    }
    /**
     * Getter for 'form' element
     * @return {[type]} [description]
     */

  }, {
    key: "getForm",
    value: function getForm() {
      return this.form;
    }
  }]);

  return ParticularFactNumbersView;
}(_formsValidationView.default);

exports.default = ParticularFactNumbersView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY3VsYXItZmFjdC1udW1iZXJzLmpzIl0sIm5hbWVzIjpbIlBhcnRpY3VsYXJGYWN0TnVtYmVyc1ZpZXciLCJtb2RlbCIsIiRmYWlsQmVoYXZpb3VyIiwiJHN1Y2Nlc3NCZWhhdmlvdXIiLCJmb3JtIiwiRm9ybXNWYWxpZGF0aW9uVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLHlCOzs7OztBQUNqQixxQ0FBWUMsS0FBWixFQUF1RTtBQUFBLFFBQW5EQyxjQUFtRCx1RUFBbEMsS0FBa0M7QUFBQSxRQUEzQkMsaUJBQTJCLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsa0dBQzdERixLQUQ2RCxFQUN0REMsY0FEc0QsRUFDdENDLGlCQURzQztBQUV0RTtBQUVEOzs7Ozs7OytCQUdXO0FBQ1AsV0FBS0MsSUFBTCxHQUFZLG1CQUFFLGtDQUFGLENBQVo7QUFDSDtBQUVEOzs7Ozs7OzhCQUlVO0FBQUUsYUFBTyxLQUFLQSxJQUFaO0FBQW1COzs7O0VBaEJvQkMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBWaWV3IGZvciAncGFydGljdWxhciBmYWN0IG51bWJlcnMnIGZvcm1cclxuICogQG5hbWVzcGFjZSBOaWtpdG9zR29sdWJldlxcVmlld3NcXEZvcm1zVmFsaWRhdGlvblxcRm9ybXNWaWV3c1xyXG4gKi9cclxuXHJcbmltcG9ydCBGb3Jtc1ZhbGlkYXRpb25WaWV3IGZyb20gJy4uL2Zvcm1zLXZhbGlkYXRpb24tdmlldyc7XHJcbmltcG9ydCB7ICQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mdW5jdGlvbmFsL2NsaWVudC9kb20tc2VydmljZSc7XHJcblxyXG4vKipcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFZpZXdzXFxGb3Jtc1ZhbGlkYXRpb25cXEZvcm1zVmFsaWRhdGlvblZpZXdcclxuICogQHVzZXMgTmlraXRvc0dvbHViZXZcXFNlcnZpY2VzXFxGdW5jdGlvbmFsXFxDbGllbnRcXERvbVNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY3VsYXJGYWN0TnVtYmVyc1ZpZXcgZXh0ZW5kcyBGb3Jtc1ZhbGlkYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCAgJGZhaWxCZWhhdmlvdXIgPSBmYWxzZSwgJHN1Y2Nlc3NCZWhhdmlvdXIgPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsLCAkZmFpbEJlaGF2aW91ciwgJHN1Y2Nlc3NCZWhhdmlvdXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNlZSBGb3Jtc1ZhbGlkYXRpb25WaWV3IGRlZmluZVVJKCkgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIGRlZmluZVVJKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9ICQoJy5qcy1wYXJ0aWN1bGFyLWZhY3QtbnVtYmVycy1mb3JtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yICdmb3JtJyBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybSgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfVxyXG59XHJcbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\forms-validation\\forms-views\\particular-fact-numbers.js","/..\\..\\views\\forms-validation\\forms-views")
},{"../../../services/functional/client/dom-service":16,"../forms-validation-view":27,"6r38Q7":35,"buffer":33}],31:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @fileOverview View
 * @namespace NikitosGolubev\Views
 */

/**
 * Abstract view class which describes interface and common methods
 */
var View =
/*#__PURE__*/
function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "update",

    /**
     * Receives updates from Subject. (part of OBSERVER pattern).
     * 
     * @param  {Mixed} data Updated data
     */
    value: function update(data) {
      throw new Error('This is abstract method which requires implementation.');
    }
  }]);

  return View;
}();

exports.default = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImRhdGEiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7SUFHcUJBLEk7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzJCQUtPQyxJLEVBQU07QUFDVCxZQUFNLElBQUlDLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVPdmVydmlldyBWaWV3XHJcbiAqIEBuYW1lc3BhY2UgTmlraXRvc0dvbHViZXZcXFZpZXdzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0IHZpZXcgY2xhc3Mgd2hpY2ggZGVzY3JpYmVzIGludGVyZmFjZSBhbmQgY29tbW9uIG1ldGhvZHNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWNlaXZlcyB1cGRhdGVzIGZyb20gU3ViamVjdC4gKHBhcnQgb2YgT0JTRVJWRVIgcGF0dGVybikuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSAge01peGVkfSBkYXRhIFVwZGF0ZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoZGF0YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBpcyBhYnN0cmFjdCBtZXRob2Qgd2hpY2ggcmVxdWlyZXMgaW1wbGVtZW50YXRpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\views\\view.js","/..\\..\\views")
},{"6r38Q7":35,"buffer":33}],32:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
;

(function (exports) {
  'use strict';

  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var PLUS = '+'.charCodeAt(0);
  var SLASH = '/'.charCodeAt(0);
  var NUMBER = '0'.charCodeAt(0);
  var LOWER = 'a'.charCodeAt(0);
  var UPPER = 'A'.charCodeAt(0);
  var PLUS_URL_SAFE = '-'.charCodeAt(0);
  var SLASH_URL_SAFE = '_'.charCodeAt(0);

  function decode(elt) {
    var code = elt.charCodeAt(0);
    if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'

    if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'

    if (code < NUMBER) return -1; //no match

    if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
    if (code < UPPER + 26) return code - UPPER;
    if (code < LOWER + 26) return code - LOWER + 26;
  }

  function b64ToByteArray(b64) {
    var i, j, l, tmp, placeHolders, arr;

    if (b64.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice


    var len = b64.length;
    placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

    arr = new Arr(b64.length * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

    l = placeHolders > 0 ? b64.length - 4 : b64.length;
    var L = 0;

    function push(v) {
      arr[L++] = v;
    }

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
      push((tmp & 0xFF0000) >> 16);
      push((tmp & 0xFF00) >> 8);
      push(tmp & 0xFF);
    }

    if (placeHolders === 2) {
      tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
      push(tmp & 0xFF);
    } else if (placeHolders === 1) {
      tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
      push(tmp >> 8 & 0xFF);
      push(tmp & 0xFF);
    }

    return arr;
  }

  function uint8ToBase64(uint8) {
    var i,
        extraBytes = uint8.length % 3,
        // if we have 1 byte left, pad 2 bytes
    output = "",
        temp,
        length;

    function encode(num) {
      return lookup.charAt(num);
    }

    function tripletToBase64(num) {
      return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
    } // go through the array every three bytes, we'll deal with trailing stuff later


    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output += tripletToBase64(temp);
    } // pad the end with zeros, but make sure to not forget the extra bytes


    switch (extraBytes) {
      case 1:
        temp = uint8[uint8.length - 1];
        output += encode(temp >> 2);
        output += encode(temp << 4 & 0x3F);
        output += '==';
        break;

      case 2:
        temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
        output += encode(temp >> 10);
        output += encode(temp >> 4 & 0x3F);
        output += encode(temp << 2 & 0x3F);
        output += '=';
        break;
    }

    return output;
  }

  exports.toByteArray = b64ToByteArray;
  exports.fromByteArray = uint8ToBase64;
})(typeof exports === 'undefined' ? (void 0).base64js = {} : exports);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI2NC5qcyJdLCJuYW1lcyI6WyJsb29rdXAiLCJleHBvcnRzIiwiQXJyIiwiVWludDhBcnJheSIsIkFycmF5IiwiUExVUyIsImNoYXJDb2RlQXQiLCJTTEFTSCIsIk5VTUJFUiIsIkxPV0VSIiwiVVBQRVIiLCJQTFVTX1VSTF9TQUZFIiwiU0xBU0hfVVJMX1NBRkUiLCJkZWNvZGUiLCJlbHQiLCJjb2RlIiwiYjY0VG9CeXRlQXJyYXkiLCJiNjQiLCJpIiwiaiIsImwiLCJ0bXAiLCJwbGFjZUhvbGRlcnMiLCJhcnIiLCJsZW5ndGgiLCJFcnJvciIsImxlbiIsImNoYXJBdCIsIkwiLCJwdXNoIiwidiIsInVpbnQ4VG9CYXNlNjQiLCJ1aW50OCIsImV4dHJhQnl0ZXMiLCJvdXRwdXQiLCJ0ZW1wIiwiZW5jb2RlIiwibnVtIiwidHJpcGxldFRvQmFzZTY0IiwidG9CeXRlQXJyYXkiLCJmcm9tQnl0ZUFycmF5IiwiYmFzZTY0anMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTSxHQUFHLGtFQUFiO0FBRUE7O0FBQUUsV0FBVUMsT0FBVixFQUFtQjtBQUNwQjs7QUFFQyxNQUFJQyxHQUFHLEdBQUksT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUNOQSxVQURNLEdBRU5DLEtBRko7QUFJRCxNQUFJQyxJQUFJLEdBQUssSUFBSUMsVUFBSixDQUFlLENBQWYsQ0FBYjtBQUNBLE1BQUlDLEtBQUssR0FBSSxJQUFJRCxVQUFKLENBQWUsQ0FBZixDQUFiO0FBQ0EsTUFBSUUsTUFBTSxHQUFHLElBQUlGLFVBQUosQ0FBZSxDQUFmLENBQWI7QUFDQSxNQUFJRyxLQUFLLEdBQUksSUFBSUgsVUFBSixDQUFlLENBQWYsQ0FBYjtBQUNBLE1BQUlJLEtBQUssR0FBSSxJQUFJSixVQUFKLENBQWUsQ0FBZixDQUFiO0FBQ0EsTUFBSUssYUFBYSxHQUFHLElBQUlMLFVBQUosQ0FBZSxDQUFmLENBQXBCO0FBQ0EsTUFBSU0sY0FBYyxHQUFHLElBQUlOLFVBQUosQ0FBZSxDQUFm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QUksQ0FBVCxHQUFjLElBQWYsQ0FBaEI7QUFDQUQsUUFBQUEsTUFBTSxJQUFJLElBQVY7QUFDQTs7QUFDRCxXQUFLLENBQUw7QUFDQ0MsUUFBQUEsSUFBSSxHQUFHLENBQUNILEtBQUssQ0FBQ0EsS0FBSyxDQUFDUixNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxJQUEyQixDQUE1QixJQUFrQ1EsS0FBSyxDQUFDQSxLQUFLLENBQUNSLE1BQU4sR0FBZSxDQUFoQixDQUE5QztBQUNBVSxRQUFBQSxNQUFNLElBQUlFLE1BQU0sQ0FBQ0QsSUFBSSxJQUFJLEVBQVQsQ0FBaEI7QUFDQUQsUUFBQUEsTUFBTSxJQUFJRSxNQUFNLENBQUVELElBQUksSUFBSSxDQUFULEdBQWMsSUFBZixDQUFoQjtBQUNBRCxRQUFBQSxNQUFNLElBQUlFLE1BQU0sQ0FBRUQsSUFBSSxJQUFJLENBQVQsR0FBYyxJQUFmLENBQWhCO0FBQ0FELFFBQUFBLE1BQU0sSUFBSSxHQUFWO0FBQ0E7QUFiRjs7QUFnQkEsV0FBT0EsTUFBUDtBQUNBOztBQUVEakMsRUFBQUEsT0FBTyxDQUFDc0MsV0FBUixHQUFzQnZCLGNBQXRCO0FBQ0FmLEVBQUFBLE9BQU8sQ0FBQ3VDLGFBQVIsR0FBd0JULGFBQXhCO0FBQ0EsQ0F6SEMsRUF5SEEsT0FBTzlCLE9BQVAsS0FBbUIsV0FBbkIsR0FBa0MsU0FBS3dDLFFBQUwsR0FBZ0IsRUFBbEQsR0FBd0R4QyxPQXpIeEQsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\browserify\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\..\\..\\node_modules\\browserify\\node_modules\\base64-js\\lib")
},{"6r38Q7":35,"buffer":33}],33:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var base64 = require('base64-js');

var ieee754 = require('ieee754');

exports.Buffer = Buffer;
exports.SlowBuffer = Buffer;
exports.INSPECT_MAX_BYTES = 50;
Buffer.poolSize = 8192;
/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */

Buffer._useTypedArrays = function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0);
    var arr = new Uint8Array(buf);

    arr.foo = function () {
      return 42;
    };

    return 42 === arr.foo() && typeof arr.subarray === 'function'; // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false;
  }
}();
/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */


function Buffer(subject, encoding, noZero) {
  if (!(this instanceof Buffer)) return new Buffer(subject, encoding, noZero);

  var type = _typeof(subject); // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.


  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject);

    while (subject.length % 4 !== 0) {
      subject = subject + '=';
    }
  } // Find the length


  var length;
  if (type === 'number') length = coerce(subject);else if (type === 'string') length = Buffer.byteLength(subject, encoding);else if (type === 'object') length = coerce(subject.length); // assume that object is array-like
  else throw new Error('First argument needs to be a number, array or string.');
  var buf;

  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length));
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this;
    buf.length = length;
    buf._isBuffer = true;
  }

  var i;

  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject);
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject)) buf[i] = subject.readUInt8(i);else buf[i] = subject[i];
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding);
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0;
    }
  }

  return buf;
} // STATIC METHODS
// ==============


Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer);
};

Buffer.byteLength = function (str, encoding) {
  var ret;
  str = str + '';

  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2;
      break;

    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length;
      break;

    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length;
      break;

    case 'base64':
      ret = base64ToBytes(str).length;
      break;

    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2;
      break;

    default:
      throw new Error('Unknown encoding');
  }

  return ret;
};

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' + 'list should be an Array.');

  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }

  var i;

  if (typeof totalLength !== 'number') {
    totalLength = 0;

    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length;
    }
  }

  var buf = new Buffer(totalLength);
  var pos = 0;

  for (i = 0; i < list.length; i++) {
    var item = list[i];
    item.copy(buf, pos);
    pos += item.length;
  }

  return buf;
}; // BUFFER INSTANCE METHODS
// =======================


function _hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  assert(strLen % 2 === 0, 'Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16);
    assert(!isNaN(byte), 'Invalid hex string');
    buf[offset + i] = byte;
  }

  Buffer._charsWritten = i * 2;
  return i;
}

function _utf8Write(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length);
  return charsWritten;
}

function _asciiWrite(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length);
  return charsWritten;
}

function _binaryWrite(buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length);
}

function _base64Write(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length);
  return charsWritten;
}

function _utf16leWrite(buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length);
  return charsWritten;
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {
    // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = Number(offset) || 0;
  var remaining = this.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  }

  encoding = String(encoding || 'utf8').toLowerCase();
  var ret;

  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length);
      break;

    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length);
      break;

    case 'ascii':
      ret = _asciiWrite(this, string, offset, length);
      break;

    case 'binary':
      ret = _binaryWrite(this, string, offset, length);
      break;

    case 'base64':
      ret = _base64Write(this, string, offset, length);
      break;

    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length);
      break;

    default:
      throw new Error('Unknown encoding');
  }

  return ret;
};

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this;
  encoding = String(encoding || 'utf8').toLowerCase();
  start = Number(start) || 0;
  end = end !== undefined ? Number(end) : end = self.length; // Fastpath empty strings

  if (end === start) return '';
  var ret;

  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end);
      break;

    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end);
      break;

    case 'ascii':
      ret = _asciiSlice(self, start, end);
      break;

    case 'binary':
      ret = _binarySlice(self, start, end);
      break;

    case 'base64':
      ret = _base64Slice(self, start, end);
      break;

    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end);
      break;

    default:
      throw new Error('Unknown encoding');
  }

  return ret;
};

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this;
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (!target_start) target_start = 0; // Copy 0 bytes; we're done

  if (end === start) return;
  if (target.length === 0 || source.length === 0) return; // Fatal error conditions

  assert(end >= start, 'sourceEnd < sourceStart');
  assert(target_start >= 0 && target_start < target.length, 'targetStart out of bounds');
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds');
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;
  if (target.length - target_start < end - start) end = target.length - target_start + start;
  var len = end - start;

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start];
    }
  } else {
    target._set(this.subarray(start, start + len), target_start);
  }
};

function _base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function _utf8Slice(buf, start, end) {
  var res = '';
  var tmp = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
      tmp = '';
    } else {
      tmp += '%' + buf[i].toString(16);
    }
  }

  return res + decodeUtf8Char(tmp);
}

function _asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function _binarySlice(buf, start, end) {
  return _asciiSlice(buf, start, end);
}

function _hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; i++) {
    out += toHex(buf[i]);
  }

  return out;
}

function _utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length;
  start = clamp(start, len, 0);
  end = clamp(end, len, len);

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end));
  } else {
    var sliceLen = end - start;
    var newBuf = new Buffer(sliceLen, undefined, true);

    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start];
    }

    return newBuf;
  }
}; // `get` will be removed in Node 0.13+


Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.');
  return this.readUInt8(offset);
}; // `set` will be removed in Node 0.13+


Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.');
  return this.writeUInt8(v, offset);
};

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'Trying to read beyond buffer length');
  }

  if (offset >= this.length) return;
  return this[offset];
};

function _readUInt16(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;
  var val;

  if (littleEndian) {
    val = buf[offset];
    if (offset + 1 < len) val |= buf[offset + 1] << 8;
  } else {
    val = buf[offset] << 8;
    if (offset + 1 < len) val |= buf[offset + 1];
  }

  return val;
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert);
};

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert);
};

function _readUInt32(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;
  var val;

  if (littleEndian) {
    if (offset + 2 < len) val = buf[offset + 2] << 16;
    if (offset + 1 < len) val |= buf[offset + 1] << 8;
    val |= buf[offset];
    if (offset + 3 < len) val = val + (buf[offset + 3] << 24 >>> 0);
  } else {
    if (offset + 1 < len) val = buf[offset + 1] << 16;
    if (offset + 2 < len) val |= buf[offset + 2] << 8;
    if (offset + 3 < len) val |= buf[offset + 3];
    val = val + (buf[offset] << 24 >>> 0);
  }

  return val;
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert);
};

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert);
};

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'Trying to read beyond buffer length');
  }

  if (offset >= this.length) return;
  var neg = this[offset] & 0x80;
  if (neg) return (0xff - this[offset] + 1) * -1;else return this[offset];
};

function _readInt16(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;

  var val = _readUInt16(buf, offset, littleEndian, true);

  var neg = val & 0x8000;
  if (neg) return (0xffff - val + 1) * -1;else return val;
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert);
};

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert);
};

function _readInt32(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
  }

  var len = buf.length;
  if (offset >= len) return;

  var val = _readUInt32(buf, offset, littleEndian, true);

  var neg = val & 0x80000000;
  if (neg) return (0xffffffff - val + 1) * -1;else return val;
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert);
};

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert);
};

function _readFloat(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4);
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert);
};

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert);
};

function _readDouble(buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length');
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8);
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert);
};

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert);
};

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'trying to write beyond buffer length');
    verifuint(value, 0xff);
  }

  if (offset >= this.length) return;
  this[offset] = value;
};

function _writeUInt16(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length');
    verifuint(value, 0xffff);
  }

  var len = buf.length;
  if (offset >= len) return;

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert);
};

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert);
};

function _writeUInt32(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length');
    verifuint(value, 0xffffffff);
  }

  var len = buf.length;
  if (offset >= len) return;

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert);
};

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset < this.length, 'Trying to write beyond buffer length');
    verifsint(value, 0x7f, -0x80);
  }

  if (offset >= this.length) return;
  if (value >= 0) this.writeUInt8(value, offset, noAssert);else this.writeUInt8(0xff + value + 1, offset, noAssert);
};

function _writeInt16(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length');
    verifsint(value, 0x7fff, -0x8000);
  }

  var len = buf.length;
  if (offset >= len) return;
  if (value >= 0) _writeUInt16(buf, value, offset, littleEndian, noAssert);else _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert);
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert);
};

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert);
};

function _writeInt32(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
    verifsint(value, 0x7fffffff, -0x80000000);
  }

  var len = buf.length;
  if (offset >= len) return;
  if (value >= 0) _writeUInt32(buf, value, offset, littleEndian, noAssert);else _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert);
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert);
};

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert);
};

function _writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  var len = buf.length;
  if (offset >= len) return;
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert);
};

function _writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value');
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
    assert(offset !== undefined && offset !== null, 'missing offset');
    assert(offset + 7 < buf.length, 'Trying to write beyond buffer length');
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  var len = buf.length;
  if (offset >= len) return;
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert);
}; // fill(value, start=0, end=buffer.length)


Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0;
  if (!start) start = 0;
  if (!end) end = this.length;

  if (typeof value === 'string') {
    value = value.charCodeAt(0);
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number');
  assert(end >= start, 'end < start'); // Fill 0 bytes; we're done

  if (end === start) return;
  if (this.length === 0) return;
  assert(start >= 0 && start < this.length, 'start out of bounds');
  assert(end >= 0 && end <= this.length, 'end out of bounds');

  for (var i = start; i < end; i++) {
    this[i] = value;
  }
};

Buffer.prototype.inspect = function () {
  var out = [];
  var len = this.length;

  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i]);

    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }

  return '<Buffer ' + out.join(' ') + '>';
};
/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */


Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return new Buffer(this).buffer;
    } else {
      var buf = new Uint8Array(this.length);

      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i];
      }

      return buf.buffer;
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser');
  }
}; // HELPER FUNCTIONS
// ================


function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

var BP = Buffer.prototype;
/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */

Buffer._augment = function (arr) {
  arr._isBuffer = true; // save reference to original Uint8Array get/set methods before overwriting

  arr._get = arr.get;
  arr._set = arr.set; // deprecated, will be removed in node 0.13+

  arr.get = BP.get;
  arr.set = BP.set;
  arr.write = BP.write;
  arr.toString = BP.toString;
  arr.toLocaleString = BP.toString;
  arr.toJSON = BP.toJSON;
  arr.copy = BP.copy;
  arr.slice = BP.slice;
  arr.readUInt8 = BP.readUInt8;
  arr.readUInt16LE = BP.readUInt16LE;
  arr.readUInt16BE = BP.readUInt16BE;
  arr.readUInt32LE = BP.readUInt32LE;
  arr.readUInt32BE = BP.readUInt32BE;
  arr.readInt8 = BP.readInt8;
  arr.readInt16LE = BP.readInt16LE;
  arr.readInt16BE = BP.readInt16BE;
  arr.readInt32LE = BP.readInt32LE;
  arr.readInt32BE = BP.readInt32BE;
  arr.readFloatLE = BP.readFloatLE;
  arr.readFloatBE = BP.readFloatBE;
  arr.readDoubleLE = BP.readDoubleLE;
  arr.readDoubleBE = BP.readDoubleBE;
  arr.writeUInt8 = BP.writeUInt8;
  arr.writeUInt16LE = BP.writeUInt16LE;
  arr.writeUInt16BE = BP.writeUInt16BE;
  arr.writeUInt32LE = BP.writeUInt32LE;
  arr.writeUInt32BE = BP.writeUInt32BE;
  arr.writeInt8 = BP.writeInt8;
  arr.writeInt16LE = BP.writeInt16LE;
  arr.writeInt16BE = BP.writeInt16BE;
  arr.writeInt32LE = BP.writeInt32LE;
  arr.writeInt32BE = BP.writeInt32BE;
  arr.writeFloatLE = BP.writeFloatLE;
  arr.writeFloatBE = BP.writeFloatBE;
  arr.writeDoubleLE = BP.writeDoubleLE;
  arr.writeDoubleBE = BP.writeDoubleBE;
  arr.fill = BP.fill;
  arr.inspect = BP.inspect;
  arr.toArrayBuffer = BP.toArrayBuffer;
  return arr;
}; // slice(start, end)


function clamp(index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue;
  index = ~~index; // Coerce to integer.

  if (index >= len) return len;
  if (index >= 0) return index;
  index += len;
  if (index >= 0) return index;
  return 0;
}

function coerce(length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length);
  return length < 0 ? 0 : length;
}

function isArray(subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]';
  })(subject);
}

function isArrayish(subject) {
  return isArray(subject) || Buffer.isBuffer(subject) || subject && _typeof(subject) === 'object' && typeof subject.length === 'number';
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i);
    if (b <= 0x7F) byteArray.push(str.charCodeAt(i));else {
      var start = i;
      if (b >= 0xD800 && b <= 0xDFFF) i++;
      var h = encodeURIComponent(str.slice(start, i + 1)).substr(1).split('%');

      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16));
      }
    }
  }

  return byteArray;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(str);
}

function blitBuffer(src, dst, offset, length) {
  var pos;

  for (var i = 0; i < length; i++) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
  }
}
/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */


function verifuint(value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number');
  assert(value >= 0, 'specified a negative value for writing an unsigned value');
  assert(value <= max, 'value is larger than maximum value for type');
  assert(Math.floor(value) === value, 'value has a fractional component');
}

function verifsint(value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number');
  assert(value <= max, 'value larger than maximum allowed value');
  assert(value >= min, 'value smaller than minimum allowed value');
  assert(Math.floor(value) === value, 'value has a fractional component');
}

function verifIEEE754(value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number');
  assert(value <= max, 'value larger than maximum allowed value');
  assert(value >= min, 'value smaller than minimum allowed value');
}

function assert(test, message) {
  if (!test) throw new Error(message || 'Failed assertion');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJhc2U2NCIsInJlcXVpcmUiLCJpZWVlNzU0IiwiZXhwb3J0cyIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJJTlNQRUNUX01BWF9CWVRFUyIsInBvb2xTaXplIiwiX3VzZVR5cGVkQXJyYXlzIiwiYnVmIiwiQXJyYXlCdWZmZXIiLCJhcnIiLCJVaW50OEFycmF5IiwiZm9vIiwic3ViYXJyYXkiLCJlIiwic3ViamVjdCIsImVuY29kaW5nIiwibm9aZXJvIiwidHlwZSIsInN0cmluZ3RyaW0iLCJsZW5ndGgiLCJjb2VyY2UiLCJieXRlTGVuZ3RoIiwiRXJyb3IiLCJfYXVnbWVudCIsIl9pc0J1ZmZlciIsImkiLCJfc2V0IiwiaXNBcnJheWlzaCIsImlzQnVmZmVyIiwicmVhZFVJbnQ4Iiwid3JpdGUiLCJpc0VuY29kaW5nIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJiIiwidW5kZWZpbmVkIiwic3RyIiwicmV0IiwidXRmOFRvQnl0ZXMiLCJiYXNlNjRUb0J5dGVzIiwiY29uY2F0IiwibGlzdCIsInRvdGFsTGVuZ3RoIiwiYXNzZXJ0IiwiaXNBcnJheSIsInBvcyIsIml0ZW0iLCJjb3B5IiwiX2hleFdyaXRlIiwic3RyaW5nIiwib2Zmc2V0IiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwiYnl0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaXNOYU4iLCJfY2hhcnNXcml0dGVuIiwiX3V0ZjhXcml0ZSIsImNoYXJzV3JpdHRlbiIsImJsaXRCdWZmZXIiLCJfYXNjaWlXcml0ZSIsImFzY2lpVG9CeXRlcyIsIl9iaW5hcnlXcml0ZSIsIl9iYXNlNjRXcml0ZSIsIl91dGYxNmxlV3JpdGUiLCJ1dGYxNmxlVG9CeXRlcyIsInByb3RvdHlwZSIsImlzRmluaXRlIiwic3dhcCIsInRvU3RyaW5nIiwic3RhcnQiLCJlbmQiLCJzZWxmIiwiX2hleFNsaWNlIiwiX3V0ZjhTbGljZSIsIl9hc2NpaVNsaWNlIiwiX2JpbmFyeVNsaWNlIiwiX2Jhc2U2NFNsaWNlIiwiX3V0ZjE2bGVTbGljZSIsInRvSlNPTiIsImRhdGEiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsIl9hcnIiLCJ0YXJnZXQiLCJ0YXJnZXRfc3RhcnQiLCJzb3VyY2UiLCJsZW4iLCJmcm9tQnl0ZUFycmF5IiwicmVzIiwidG1wIiwiTWF0aCIsIm1pbiIsImRlY29kZVV0ZjhDaGFyIiwiZnJvbUNoYXJDb2RlIiwib3V0IiwidG9IZXgiLCJieXRlcyIsImNsYW1wIiwic2xpY2VMZW4iLCJuZXdCdWYiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0IiwidiIsIndyaXRlVUludDgiLCJub0Fzc2VydCIsIl9yZWFkVUludDE2IiwibGl0dGxlRW5kaWFuIiwidmFsIiwicmVhZFVJbnQxNkxFIiwicmVhZFVJbnQxNkJFIiwiX3JlYWRVSW50MzIiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50OCIsIm5lZyIsIl9yZWFkSW50MTYiLCJyZWFkSW50MTZMRSIsInJlYWRJbnQxNkJFIiwiX3JlYWRJbnQzMiIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJfcmVhZEZsb2F0IiwicmVhZCIsInJlYWRGbG9hdExFIiwicmVhZEZsb2F0QkUiLCJfcmVhZERvdWJsZSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsInZhbHVlIiwidmVyaWZ1aW50IiwiX3dyaXRlVUludDE2IiwiaiIsIndyaXRlVUludDE2TEUiLCJ3cml0ZVVJbnQxNkJFIiwiX3dyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludDgiLCJ2ZXJpZnNpbnQiLCJfd3JpdGVJbnQxNiIsIndyaXRlSW50MTZMRSIsIndyaXRlSW50MTZCRSIsIl93cml0ZUludDMyIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiX3dyaXRlRmxvYXQiLCJ2ZXJpZklFRUU3NTQiLCJ3cml0ZUZsb2F0TEUiLCJ3cml0ZUZsb2F0QkUiLCJfd3JpdGVEb3VibGUiLCJ3cml0ZURvdWJsZUxFIiwid3JpdGVEb3VibGVCRSIsImZpbGwiLCJjaGFyQ29kZUF0IiwiaW5zcGVjdCIsImpvaW4iLCJ0b0FycmF5QnVmZmVyIiwiYnVmZmVyIiwidHJpbSIsInJlcGxhY2UiLCJCUCIsIl9nZXQiLCJ0b0xvY2FsZVN0cmluZyIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwiY2VpbCIsIk9iamVjdCIsIm4iLCJieXRlQXJyYXkiLCJwdXNoIiwiaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInNwbGl0IiwiYyIsImhpIiwibG8iLCJ0b0J5dGVBcnJheSIsInNyYyIsImRzdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImVyciIsIm1heCIsImZsb29yIiwidGVzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBT0EsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUFwQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUVBRSxPQUFPLENBQUNDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0FELE9BQU8sQ0FBQ0UsVUFBUixHQUFxQkQsTUFBckI7QUFDQUQsT0FBTyxDQUFDRyxpQkFBUixHQUE0QixFQUE1QjtBQUNBRixNQUFNLENBQUNHLFFBQVAsR0FBa0IsSUFBbEI7QUFFQTs7Ozs7O0FBS0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUEwQixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJO0FBQ0YsUUFBSUMsR0FBRyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxVQUFKLENBQWVILEdBQWYsQ0FBVjs7QUFDQUUsSUFBQUEsR0FBRyxDQUFDRSxHQUFKLEdBQVUsWUFBWTtBQUFFLGFBQU8sRUFBUDtBQUFXLEtBQW5DOztBQUNBLFdBQU8sT0FBT0YsR0FBRyxDQUFDRSxHQUFKLEVBQVAsSUFDSCxPQUFPRixHQUFHLENBQUNHLFFBQVgsS0FB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LENBQUMsT0FBTzJGLEtBQVAsS0FBaUIsUUFBbEIsRUFBNEIsdUNBQTVCLENBQU47QUFDQTNGLEVBQUFBLE1BQU0sQ0FBQzJGLEtBQUssSUFBSXFELEdBQVYsRUFBZSx5Q0FBZixDQUFOO0FBQ0FoSixFQUFBQSxNQUFNLENBQUMyRixLQUFLLElBQUl2QyxHQUFWLEVBQWUsMENBQWYsQ0FBTjtBQUNEOztBQUVELFNBQVNwRCxNQUFULENBQWlCa0osSUFBakIsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQzlCLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE1BQU0sSUFBSXZLLEtBQUosQ0FBVXdLLE9BQU8sSUFBSSxrQkFBckIsQ0FBTjtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cbiJdfQ==
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\browserify\\node_modules\\buffer\\index.js","/..\\..\\..\\..\\node_modules\\browserify\\node_modules\\buffer")
},{"6r38Q7":35,"base64-js":32,"buffer":33,"ieee754":34}],34:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJyZWFkIiwiYnVmZmVyIiwib2Zmc2V0IiwiaXNMRSIsIm1MZW4iLCJuQnl0ZXMiLCJlIiwibSIsImVMZW4iLCJlTWF4IiwiZUJpYXMiLCJuQml0cyIsImkiLCJkIiwicyIsIk5hTiIsIkluZmluaXR5IiwiTWF0aCIsInBvdyIsIndyaXRlIiwidmFsdWUiLCJjIiwicnQiLCJhYnMiLCJpc05hTiIsImZsb29yIiwibG9nIiwiTE4yIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLENBQUNDLElBQVIsR0FBZSxVQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDQyxNQUF0QyxFQUE4QztBQUMzRCxNQUFJQyxDQUFKLEVBQU9DLENBQVA7QUFDQSxNQUFJQyxJQUFJLEdBQUlILE1BQU0sR0FBRyxDQUFWLEdBQWVELElBQWYsR0FBc0IsQ0FBakM7QUFDQSxNQUFJSyxJQUFJLEdBQUcsQ0FBQyxLQUFLRCxJQUFOLElBQWMsQ0FBekI7QUFDQSxNQUFJRSxLQUFLLEdBQUdELElBQUksSUFBSSxDQUFwQjtBQUNBLE1BQUlFLEtBQUssR0FBRyxDQUFDLENBQWI7QUFDQSxNQUFJQyxDQUFDLEdBQUdULElBQUksR0FBSUUsTUFBTSxHQUFHLENBQWIsR0FBa0IsQ0FBOUI7QUFDQSxNQUFJUSxDQUFDLEdBQUdWLElBQUksR0FBRyxDQUFDLENBQUosR0FBUSxDQUFwQjtBQUNBLE1BQUlXLENBQUMsR0FBR2IsTUFBTSxDQUFDQyxNQUFNLEdBQUdVLENBQVYsQ0FBZDtBQUVBQSxFQUFBQSxDQUFDLElBQUlDLENBQUw7QUFFQVAsRUFBQUEsQ0FBQyxHQUFHUSxDQUFDLEdBQUksQ0FBQyxLQUFNLENBQUNILEtBQVIsSUFBa0IsQ0FBM0I7QUFDQUcsRUFBQUEsQ0FBQyxLQUFNLENBQUNILEtBQVI7QUFDQUEsRUFBQUEsS0FBSyxJQUFJSCxJQUFUOztBQUNBLFNBQU9HLEtBQUssR0FBRyxDQUFmLEVBQWtCTCxDQUFDLEdBQUlBLENBQUMsR0FBRyxHQUFMLEdBQVlMLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHVSxDQUFWLENBQXRCLEVBQW9DQSxDQUFDLElBQUlDLENBQXpDLEVBQTRDRixLQUFLLElBQUksQ0FBdkUsRUFBMEUsQ0FBRTs7QUFFNUVKLEVBQUFBLENBQUMsR0FBR0QsQ0FBQyxHQUFJLENBQUMsS0FBTSxDQUFDSyxLQUFSLElBQWtCLENBQTNCO0FBQ0FMLEVBQUFBLENBQUMsS0FBTSxDQUFDSyxLQUFSO0FBQ0FBLEVBQUFBLEtBQUssSUFBSVAsSUFBVDs7QUFDQSxTQUFPTyxLQUFLLEdBQUcsQ0FBZixFQUFrQkosQ0FBQyxHQUFJQSxDQUFDLEdBQUcsR0FBTCxHQUFZTixNQUFNLENBQUNDLE1BQU0sR0FBR1UsQ0FBVixDQUF0QixFQUFvQ0EsQ0FBQyxJQUFJQyxDQUF6QyxFQUE0Q0YsS0FBSyxJQUFJLENBQXZFLEVBQTBFLENBQUU7O0FBRTVFLE1BQUlMLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEEsSUFBQUEsQ0FBQyxHQUFHLElBQUlJLEtBQVI7QUFDRCxHQUZELE1BRU8sSUFBSUosQ0FBQyxLQUFLRyxJQUFWLEVBQWdCO0FBQ3JCLFdBQU9GLENBQUMsR0FBR1EsR0FBSCxHQUFVLENBQUNELENBQUMsR0FBRyxDQUFDLENBQUosR0FBUSxDQUFWLElBQWVFLFFBQWpDO0FBQ0QsR0FGTSxNQUVBO0FBQ0xULElBQUFBLENBQUMsR0FBR0EsQ0FBQyxHQUFHVSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlkLElBQVosQ0FBUjtBQUNBRSxJQUFBQSxDQUFDLEdBQUdBLENBQUMsR0FBR0ksS0FBUjtBQUNEOztBQUNELFNBQU8sQ0FBQ0ksQ0FBQyxHQUFHLENBQUMsQ0FBSixHQUFRLENBQVYsSUFBZVAsQ0FBZixHQUFtQlUsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZWixDQUFDLEdBQUdGLElBQWhCLENBQTFCO0FBQ0QsQ0EvQkQ7O0FBaUNBTCxPQUFPLENBQUNvQixLQUFSLEdBQWdCLFVBQVVsQixNQUFWLEVBQWtCbUIsS0FBbEIsRUFBeUJsQixNQUF6QixFQUFpQ0MsSUFBakMsRUFBdUNDLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRSxNQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVWMsQ0FBVjtBQUNBLE1BQUliLElBQUksR0FBSUgsTUFBTSxHQUFHLENBQVYsR0FBZUQsSUFBZixHQUFzQixDQUFqQztBQUNBLE1BQUlLLElBQUksR0FBRyxDQUFDLEtBQUtELElBQU4sSUFBYyxDQUF6QjtBQUNBLE1BQUlFLEtBQUssR0FBR0QsSUFBSSxJQUFJLENBQXBCO0FBQ0EsTUFBSWEsRUFBRSxHQUFJbEIsSUFBSSxLQUFLLEVBQVQsR0FBY2EsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBYixJQUFtQkQsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBYixDQUFqQyxHQUFvRCxDQUE5RDtBQUNBLE1BQUlOLENBQUMsR0FBR1QsSUFBSSxHQUFHLENBQUgsR0FBUUUsTUFBTSxHQUFHLENBQTdCO0FBQ0EsTUFBSVEsQ0FBQyxHQUFHVixJQUFJLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FBcEI7QUFDQSxNQUFJVyxDQUFDLEdBQUdNLEtBQUssR0FBRyxDQUFSLElBQWNBLEtBQUssS0FBSyxDQUFWLElBQWUsSUFBSUEsS0FBSixHQUFZLENBQXpDLEdBQThDLENBQTlDLEdBQWtELENBQTFEO0FBRUFBLEVBQUFBLEtBQUssR0FBR0gsSUFBSSxDQUFDTSxHQUFMLENBQVNILEtBQVQsQ0FBUjs7QUFFQSxNQUFJSSxLQUFLLENBQUNKLEtBQUQsQ0FBTCxJQUFnQkEsS0FBSyxLQUFLSixRQUE5QixFQUF3QztBQUN0Q1QsSUFBQUEsQ0FBQyxHQUFHaUIsS0FBSyxDQUFDSixLQUFELENBQUwsR0FBZSxDQUFmLEdBQW1CLENBQXZCO0FBQ0FkLElBQUFBLENBQUMsR0FBR0csSUFBSjtBQUNELEdBSEQsTUFHTztBQUNMSCxJQUFBQSxDQUFDLEdBQUdXLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLEdBQUwsQ0FBU04sS0FBVCxJQUFrQkgsSUFBSSxDQUFDVSxHQUFsQyxDQUFKOztBQUNBLFFBQUlQLEtBQUssSUFBSUMsQ0FBQyxHQUFHSixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQ1osQ0FBYixDQUFSLENBQUwsR0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckNBLE1BQUFBLENBQUM7QUFDRGUsTUFBQUEsQ0FBQyxJQUFJLENBQUw7QUFDRDs7QUFDRCxRQUFJZixDQUFDLEdBQUdJLEtBQUosSUFBYSxDQUFqQixFQUFvQjtBQUNsQlUsTUFBQUEsS0FBSyxJQUFJRSxFQUFFLEdBQUdELENBQWQ7QUFDRCxLQUZELE1BRU87QUFDTEQsTUFBQUEsS0FBSyxJQUFJRSxFQUFFLEdBQUdMLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJUixLQUFoQixDQUFkO0FBQ0Q7O0FBQ0QsUUFBSVUsS0FBSyxHQUFHQyxDQUFSLElBQWEsQ0FBakIsRUFBb0I7QUFDbEJmLE1BQUFBLENBQUM7QUFDRGUsTUFBQUEsQ0FBQyxJQUFJLENBQUw7QUFDRDs7QUFFRCxRQUFJZixDQUFDLEdBQUdJLEtBQUosSUFBYUQsSUFBakIsRUFBdUI7QUFDckJGLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0FELE1BQUFBLENBQUMsR0FBR0csSUFBSjtBQUNELEtBSEQsTUFHTyxJQUFJSCxDQUFDLEdBQUdJLEtBQUosSUFBYSxDQUFqQixFQUFvQjtBQUN6QkgsTUFBQUEsQ0FBQyxHQUFHLENBQUVhLEtBQUssR0FBR0MsQ0FBVCxHQUFjLENBQWYsSUFBb0JKLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWWQsSUFBWixDQUF4QjtBQUNBRSxNQUFBQSxDQUFDLEdBQUdBLENBQUMsR0FBR0ksS0FBUjtBQUNELEtBSE0sTUFHQTtBQUNMSCxNQUFBQSxDQUFDLEdBQUdhLEtBQUssR0FBR0gsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZUixLQUFLLEdBQUcsQ0FBcEIsQ0FBUixHQUFpQ08sSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZZCxJQUFaLENBQXJDO0FBQ0FFLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRixJQUFJLElBQUksQ0FBZixFQUFrQkgsTUFBTSxDQUFDQyxNQUFNLEdBQUdVLENBQVYsQ0FBTixHQUFxQkwsQ0FBQyxHQUFHLElBQXpCLEVBQStCSyxDQUFDLElBQUlDLENBQXBDLEVBQXVDTixDQUFDLElBQUksR0FBNUMsRUFBaURILElBQUksSUFBSSxDQUEzRSxFQUE4RSxDQUFFOztBQUVoRkUsRUFBQUEsQ0FBQyxHQUFJQSxDQUFDLElBQUlGLElBQU4sR0FBY0csQ0FBbEI7QUFDQUMsRUFBQUEsSUFBSSxJQUFJSixJQUFSOztBQUNBLFNBQU9JLElBQUksR0FBRyxDQUFkLEVBQWlCUCxNQUFNLENBQUNDLE1BQU0sR0FBR1UsQ0FBVixDQUFOLEdBQXFCTixDQUFDLEdBQUcsSUFBekIsRUFBK0JNLENBQUMsSUFBSUMsQ0FBcEMsRUFBdUNQLENBQUMsSUFBSSxHQUE1QyxFQUFpREUsSUFBSSxJQUFJLENBQTFFLEVBQTZFLENBQUU7O0FBRS9FUCxFQUFBQSxNQUFNLENBQUNDLE1BQU0sR0FBR1UsQ0FBVCxHQUFhQyxDQUFkLENBQU4sSUFBMEJDLENBQUMsR0FBRyxHQUE5QjtBQUNELENBbEREIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIl19
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\ieee754\\index.js","/..\\..\\..\\..\\node_modules\\ieee754")
},{"6r38Q7":35,"buffer":33}],35:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

// shim for using process in browser
var process = module.exports = {};

process.nextTick = function () {
  var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
  var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

  if (canSetImmediate) {
    return function (f) {
      return window.setImmediate(f);
    };
  }

  if (canPost) {
    var queue = [];
    window.addEventListener('message', function (ev) {
      var source = ev.source;

      if ((source === window || source === null) && ev.data === 'process-tick') {
        ev.stopPropagation();

        if (queue.length > 0) {
          var fn = queue.shift();
          fn();
        }
      }
    }, true);
    return function nextTick(fn) {
      queue.push(fn);
      window.postMessage('process-tick', '*');
    };
  }

  return function nextTick(fn) {
    setTimeout(fn, 0);
  };
}();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
  throw new Error('process.binding is not supported');
}; // TODO(shtylman)


process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXIuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJuZXh0VGljayIsImNhblNldEltbWVkaWF0ZSIsIndpbmRvdyIsInNldEltbWVkaWF0ZSIsImNhblBvc3QiLCJwb3N0TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmIiwicXVldWUiLCJldiIsInNvdXJjZSIsImRhdGEiLCJzdG9wUHJvcGFnYXRpb24iLCJsZW5ndGgiLCJmbiIsInNoaWZ0IiwicHVzaCIsInNldFRpbWVvdXQiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2Iiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYmluZGluZyIsIm5hbWUiLCJFcnJvciIsImN3ZCIsImNoZGlyIiwiZGlyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUFGLE9BQU8sQ0FBQ0csUUFBUixHQUFvQixZQUFZO0FBQzVCLE1BQUlDLGVBQWUsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQ25CQSxNQUFNLENBQUNDLFlBRFY7QUFFQSxNQUFJQyxPQUFPLEdBQUcsT0FBT0YsTUFBUCxLQUFrQixXQUFsQixJQUNYQSxNQUFNLENBQUNHLFdBREksSUFDV0gsTUFBTSxDQUFDSSxnQkFEaEM7O0FBSUEsTUFBSUwsZUFBSixFQUFxQjtBQUNqQixXQUFPLFVBQVVNLENBQVYsRUFBYTtBQUFFLGFBQU9MLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkksQ0FBcEIsQ0FBUDtBQUErQixLQUFyRDtBQUNIOztBQUVELE1BQUlILE9BQUosRUFBYTtBQUNULFFBQUlJLEtBQUssR0FBRyxFQUFaO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVUcsRUFBVixFQUFjO0FBQzdDLFVBQUlDLE1BQU0sR0FBR0QsRUFBRSxDQUFDQyxNQUFoQjs7QUFDQSxVQUFJLENBQUNBLE1BQU0sS0FBS1IsTUFBWCxJQUFxQlEsTUFBTSxLQUFLLElBQWpDLEtBQTBDRCxFQUFFLENBQUNFLElBQUgsS0FBWSxjQUExRCxFQUEwRTtBQUN0RUYsUUFBQUEsRUFBRSxDQUFDRyxlQUFIOztBQUNBLFlBQUlKLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGNBQUlDLEVBQUUsR0FBR04sS0FBSyxDQUFDTyxLQUFOLEVBQVQ7QUFDQUQsVUFBQUEsRUFBRTtBQUNMO0FBQ0o7QUFDSixLQVRELEVBU0csSUFUSDtBQVdBLFdBQU8sU0FBU2QsUUFBVCxDQUFrQmMsRUFBbEIsRUFBc0I7QUFDekJOLE1BQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXRixFQUFYO0FBQ0FaLE1BQUFBLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQixjQUFuQixFQUFtQyxHQUFuQztBQUNILEtBSEQ7QUFJSDs7QUFFRCxTQUFPLFNBQVNMLFFBQVQsQ0FBa0JjLEVBQWxCLEVBQXNCO0FBQ3pCRyxJQUFBQSxVQUFVLENBQUNILEVBQUQsRUFBSyxDQUFMLENBQVY7QUFDSCxHQUZEO0FBR0gsQ0FqQ2tCLEVBQW5COztBQW1DQWpCLE9BQU8sQ0FBQ3FCLEtBQVIsR0FBZ0IsU0FBaEI7QUFDQXJCLE9BQU8sQ0FBQ3NCLE9BQVIsR0FBa0IsSUFBbEI7QUFDQXRCLE9BQU8sQ0FBQ3VCLEdBQVIsR0FBYyxFQUFkO0FBQ0F2QixPQUFPLENBQUN3QixJQUFSLEdBQWUsRUFBZjs7QUFFQSxTQUFTQyxJQUFULEdBQWdCLENBQUU7O0FBRWxCekIsT0FBTyxDQUFDMEIsRUFBUixHQUFhRCxJQUFiO0FBQ0F6QixPQUFPLENBQUMyQixXQUFSLEdBQXNCRixJQUF0QjtBQUNBekIsT0FBTyxDQUFDNEIsSUFBUixHQUFlSCxJQUFmO0FBQ0F6QixPQUFPLENBQUM2QixHQUFSLEdBQWNKLElBQWQ7QUFDQXpCLE9BQU8sQ0FBQzhCLGNBQVIsR0FBeUJMLElBQXpCO0FBQ0F6QixPQUFPLENBQUMrQixrQkFBUixHQUE2Qk4sSUFBN0I7QUFDQXpCLE9BQU8sQ0FBQ2dDLElBQVIsR0FBZVAsSUFBZjs7QUFFQXpCLE9BQU8sQ0FBQ2lDLE9BQVIsR0FBa0IsVUFBVUMsSUFBVixFQUFnQjtBQUM5QixRQUFNLElBQUlDLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBbkMsT0FBTyxDQUFDb0MsR0FBUixHQUFjLFlBQVk7QUFBRSxTQUFPLEdBQVA7QUFBWSxDQUF4Qzs7QUFDQXBDLE9BQU8sQ0FBQ3FDLEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFFBQU0sSUFBSUgsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
}).call(this,require("6r38Q7"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\..\\node_modules\\process\\browser.js","/..\\..\\..\\..\\node_modules\\process")
},{"6r38Q7":35,"buffer":33}]},{},[1])