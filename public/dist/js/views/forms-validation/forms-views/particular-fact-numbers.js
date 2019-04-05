"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _formsValidationView=_interopRequireDefault(require("../forms-validation-view")),_domService=require("../../../services/functional/client/dom-service"),_particularFactNumbersConfig=_interopRequireDefault(require("../../../configs/forms/particular-fact-numbers-config")),_parseFormsUiFactory=_interopRequireDefault(require("../../../services/oop/ui-factories/parse-forms-ui-factory"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ParticularFactNumbersView=function(e){function a(e){var t,r=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return _classCallCheck(this,a),(t=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,e,r,o))).model.registerNSObserver(_assertThisInitialized(t)),t}return _inherits(a,_formsValidationView.default),_createClass(a,[{key:"defineUI",value:function(){this.form=(0,_domService.$)(_particularFactNumbersConfig.default.FORM_SELECTOR),this.addFactNumberBtn=(0,_domService.$)(_particularFactNumbersConfig.default.ADD_FACT_NUMBER_BTN_SELECTOR),this.factNumberField=(0,_domService.$)(_particularFactNumbersConfig.default.FACT_NUMBER_FIELD_SELECTOR),this.numbersStorageBox=(0,_domService.$)(_particularFactNumbersConfig.default.NUMEBRS_STORAGE_BOX_SELECTOR),this.numbersStorageField=(0,_domService.$)(_particularFactNumbersConfig.default.NUMBERS_STORAGE_FIELD_SELECTOR),this.NSMesageContainer=(0,_domService.$)(_particularFactNumbersConfig.default.NUMBERS_STORAGE_MESSAGE_SELECTOR),this.removeNumberBtnClassName=_particularFactNumbersConfig.default.REMOVE_NUMBER_BTN_CLASS_NAME,this.numberContainerClassName=_particularFactNumbersConfig.default.NUMBER_CONTAINER_CALSS_NAME}},{key:"updateNS",value:function(e){this.addNumberToStorageField(e),this.addNumberToStorageBox(e),this.factNumberField.value=""}},{key:"removeNumber",value:function(e){this.removeNumberFromStorageField(e),this.removeNumberFromStorageBox(e)}},{key:"removeNumberFromStorageBox",value:function(e){e.parentNode.removeChild(e),this.adjustStorageBoxMessage()}},{key:"removeNumberFromStorageField",value:function(e){var t=e.getAttribute("fact-number"),r=this.getNumbersStorageArray(),o=r.indexOf(t);r.splice(o,1),this.setNumbersStorageFieldValue(r)}},{key:"addNumberToStorageBox",value:function(e){var t=_parseFormsUiFactory.default.createFactNumberElem(e);this.numbersStorageBox.appendChild(t),this.adjustStorageBoxMessage()}},{key:"addNumberToStorageField",value:function(e){var t=this.getNumbersStorageArray();t.push(e),this.setNumbersStorageFieldValue(t)}},{key:"adjustStorageBoxMessage",value:function(){var e=this.getNumbersStorageArray(),t="";if(0<e.length){var r=e.length;t=_particularFactNumbersConfig.default.genCommonStorageMessage(r)}else t=_particularFactNumbersConfig.default.NUMBERS_STORAGE_EMPTINESS_MESSAGE;this.setStorageBoxMessage(t)}},{key:"setStorageBoxMessage",value:function(e){this.NSMesageContainer.innerText=e}},{key:"getNumbersStorageArray",value:function(){var e=[];return this.numbersStorageField.value&&(e=JSON.parse(this.numbersStorageField.value)),e}},{key:"setNumbersStorageFieldValue",value:function(e){e=0<e.length?JSON.stringify(e):"",this.numbersStorageField.value=e}},{key:"getForm",value:function(){return this.form}},{key:"getAddFactNumberBtn",value:function(){return this.addFactNumberBtn}},{key:"getRemoveNumberBtnClassName",value:function(){return this.removeNumberBtnClassName}},{key:"getNumberContainerClassName",value:function(){return this.numberContainerClassName}}]),a}();exports.default=ParticularFactNumbersView;