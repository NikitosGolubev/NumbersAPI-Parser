"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _lodash=require("lodash");function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,s,t){return s&&_defineProperties(e.prototype,s),t&&_defineProperties(e,t),e}var ValidationResponseService=function(){function e(){_classCallCheck(this,e),this.response={}}return _createClass(e,[{key:"setResult",value:function(e){this.response.result=e}},{key:"setMessage",value:function(e){this.response.message=e}},{key:"build",value:function(e,s){return this.setResult(e),this.setMessage(s),(0,_lodash.cloneDeep)(this.response)}}]),e}();exports.default=ValidationResponseService;