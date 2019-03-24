"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _formsValidationModel=_interopRequireDefault(require("../forms-validation-model")),_parseFactsFieldsValidationService=_interopRequireDefault(require("../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service")),_domService=require("../../../services/functional/client/dom-service"),_numOfFactsConfig=_interopRequireDefault(require("../../../configs/forms/num-of-facts-config"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,o){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var r=_superPropBase(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(o):i.value}})(e,t,o||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var NumOfFactsModel=function(e){function r(){var e;return _classCallCheck(this,r),(e=_possibleConstructorReturn(this,_getPrototypeOf(r).call(this))).validator=new _parseFactsFieldsValidationService.default,e.categoryField=(0,_domService.$)(_numOfFactsConfig.default.CATEGORY_FIELD_SELECTOR),e.numOfFactsField=(0,_domService.$)(_numOfFactsConfig.default.NUM_OF_FACTS_FIELD_SELECTOR),e}return _inherits(r,_formsValidationModel.default),_createClass(r,[{key:"validate",value:function(e){var t=this.validator.validateCategory(this.categoryField),o=this.validator.validateNumOfFacts(this.numOfFactsField);_get(_getPrototypeOf(r.prototype),"validate",this).call(this,e,t,o)}}]),r}();exports.default=NumOfFactsModel;