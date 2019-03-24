"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _formsValidationModel=_interopRequireDefault(require("../forms-validation-model")),_parseFactsFieldsValidationService=_interopRequireDefault(require("../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service")),_domService=require("../../../services/functional/client/dom-service"),_factNumInRangeConfig=_interopRequireDefault(require("../../../configs/forms/fact-num-in-range-config"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=_superPropBase(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var FactNumInRangeModel=function(e){function l(){var e;return _classCallCheck(this,l),(e=_possibleConstructorReturn(this,_getPrototypeOf(l).call(this))).validator=new _parseFactsFieldsValidationService.default,e.categoryField=(0,_domService.$)(_factNumInRangeConfig.default.CATEGORY_FIELD_SELECTOR),e.fromField=(0,_domService.$)(_factNumInRangeConfig.default.FROM_FIELD_SELECTOR),e.toField=(0,_domService.$)(_factNumInRangeConfig.default.TO_FIELD_SELECTOR),e}return _inherits(l,_formsValidationModel.default),_createClass(l,[{key:"validate",value:function(e){var t,r=this.validator.validateCategory(this.categoryField),o=this.validator.validateFactNumber(this.fromField,"TO field"),i=this.validator.validateFactNumber(this.toField,"FROM field"),n={};o.result&&i.result&&(n=this.validator.validateFactNumberInRangeDifference(this.fromField,this.toField));var a=[r,o,i];0<Object.keys(n).length&&a.push(n),(t=_get(_getPrototypeOf(l.prototype),"validate",this)).call.apply(t,[this,e].concat(a))}}]),l}();exports.default=FactNumInRangeModel;