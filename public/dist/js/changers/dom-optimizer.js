"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var DomOptimizer=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"fixTargetBlank",value:function(){document.querySelectorAll(".js-target-blank").forEach(function(e){e.setAttribute("target","_blank")})}}]),e}();exports.domOptimizer=new DomOptimizer;