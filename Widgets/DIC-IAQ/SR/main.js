/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"b2d65005-a0f2-4a21-d513-d9e086524241","author":"","widgets":[{"id":"iaq_left_panel","name":"iaq_left_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".thermal-comfort-widget {\n  width: 100%;\n  height: 100%;\n  background: rgba(15, 15, 15, 0.1529411765);\n  color: #ffffff;\n  padding: 24px;\n  overflow-y: auto;\n  font-family: -apple-system, BlinkMacSystemFont, \"Inter\", \"Segoe UI\", Roboto, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.thermal-comfort-widget * {\n  box-sizing: border-box;\n}\n.thermal-comfort-widget .hero-section {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.thermal-comfort-widget .hero-section::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 300px;\n  height: 300px;\n  background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);\n  pointer-events: none;\n}\n.thermal-comfort-widget .hero-section .hero-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.thermal-comfort-widget .hero-section .hero-header .hero-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n  opacity: 0.95;\n}\n.thermal-comfort-widget .hero-section .hero-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.thermal-comfort-widget .hero-section .hero-header .header-actions .comfort-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(52, 211, 153, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 100px;\n  border: 1px solid rgba(52, 211, 153, 0.4);\n}\n.thermal-comfort-widget .hero-section .hero-header .header-actions .comfort-badge .badge-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 6px rgba(52, 211, 153, 0.8);\n}\n.thermal-comfort-widget .hero-section .hero-header .header-actions .comfort-badge .badge-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: #34d399;\n}\n.thermal-comfort-widget .hero-section .hero-header .header-actions .expand-button {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 300;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.thermal-comfort-widget .hero-section .hero-header .header-actions .expand-button:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: scale(1.05);\n}\n.thermal-comfort-widget .hero-section .index-values {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-icon svg {\n  width: 24px;\n  height: 24px;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-icon.temperature {\n  background: rgba(96, 165, 250, 0.2);\n  color: #60a5fa;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-icon.humidity {\n  background: rgba(167, 139, 250, 0.2);\n  color: #a78bfa;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-content {\n  flex: 1;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-content .index-label {\n  display: block;\n  font-size: 12px;\n  color: #ffffff;\n  opacity: 0.6;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-content .index-value {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-content .index-value .value-number {\n  font-size: 32px;\n  font-weight: 300;\n  color: #ffffff;\n  line-height: 1;\n}\n.thermal-comfort-widget .hero-section .index-values .index-item .index-content .index-value .value-unit {\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  opacity: 0.7;\n}\n.thermal-comfort-widget .metrics-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.thermal-comfort-widget .metric-card {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n.thermal-comfort-widget .metric-card:hover {\n  background: rgba(255, 255, 255, 0.08);\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.thermal-comfort-widget .metric-card .metric-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.thermal-comfort-widget .metric-card .metric-header .metric-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.thermal-comfort-widget .metric-card .metric-header .metric-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.thermal-comfort-widget .metric-card .metric-header .metric-icon.temperature {\n  background: rgba(96, 165, 250, 0.2);\n  color: #60a5fa;\n  backdrop-filter: blur(10px);\n}\n.thermal-comfort-widget .metric-card .metric-header .metric-icon.humidity {\n  background: rgba(167, 139, 250, 0.2);\n  color: #a78bfa;\n  backdrop-filter: blur(10px);\n}\n.thermal-comfort-widget .metric-card .metric-header .metric-label {\n  font-size: 16px;\n  font-weight: 500;\n  color: #ffffff;\n  letter-spacing: -0.3px;\n  opacity: 0.9;\n}\n.thermal-comfort-widget .metric-card .metric-main {\n  margin-bottom: 20px;\n}\n.thermal-comfort-widget .metric-card .metric-main .metric-value-section .metric-current {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.thermal-comfort-widget .metric-card .metric-main .metric-value-section .metric-current .current-value {\n  font-size: 48px;\n  font-weight: 200;\n  color: #ffffff;\n  letter-spacing: -1px;\n}\n.thermal-comfort-widget .metric-card .metric-main .metric-value-section .metric-current .current-unit {\n  font-size: 24px;\n  font-weight: 300;\n  color: #ffffff;\n  opacity: 0.7;\n}\n.thermal-comfort-widget .metric-card .metric-main .metric-value-section .metric-range .range-label {\n  font-size: 13px;\n  color: #ffffff;\n  opacity: 0.5;\n  font-weight: 400;\n}\n.thermal-comfort-widget .metric-card .metric-sparkline {\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  padding-top: 16px;\n}\n.thermal-comfort-widget .metric-card .metric-sparkline .sparkline-label {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #ffffff;\n  opacity: 0.6;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.thermal-comfort-widget .metric-card .metric-sparkline .sparkline-wrapper {\n  width: 100%;\n  height: 80px;\n  position: relative;\n}\n.thermal-comfort-widget .metric-card .metric-sparkline .sparkline-wrapper .recharts-wrapper {\n  width: 100% !important;\n  height: 100% !important;\n}\n.thermal-comfort-widget .metric-card .metric-sparkline .sparkline-wrapper .recharts-surface {\n  overflow: visible;\n}\n.thermal-comfort-widget .expanded-section {\n  animation: slideDown 0.3s ease-out;\n  margin-top: 24px;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.thermal-comfort-widget .section-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 24px 0 32px;\n  position: relative;\n  width: 100%;\n}\n.thermal-comfort-widget .section-divider .divider-line {\n  flex: 1;\n  height: 1px;\n  position: relative;\n  overflow: hidden;\n}\n.thermal-comfort-widget .section-divider .divider-line.left {\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);\n}\n.thermal-comfort-widget .section-divider .divider-line.left::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 1px;\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 4px, transparent 4px, transparent 8px);\n}\n.thermal-comfort-widget .section-divider .divider-line.right {\n  background: linear-gradient(to left, transparent 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);\n}\n.thermal-comfort-widget .section-divider .divider-line.right::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 1px;\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 4px, transparent 4px, transparent 8px);\n}\n.thermal-comfort-widget .section-divider .divider-text {\n  padding: 0 24px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #ffffff;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  white-space: nowrap;\n  z-index: 1;\n}\n.thermal-comfort-widget .circular-progress {\n  position: relative;\n  display: inline-block;\n}\n.thermal-comfort-widget .circular-progress svg {\n  transform: rotate(-90deg);\n}\n.thermal-comfort-widget .circular-progress .progress-background {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.1);\n}\n.thermal-comfort-widget .circular-progress .progress-indicator {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.5s ease;\n}\n.thermal-comfort-widget .circular-progress .progress-value {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.thermal-comfort-widget .circular-progress .progress-value .value {\n  font-size: 24px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.thermal-comfort-widget .circular-progress .progress-value .percent {\n  font-size: 14px;\n  font-weight: 400;\n  color: #ffffff;\n  opacity: 0.7;\n  margin-left: 2px;\n}\n.thermal-comfort-widget .recharts-tooltip-wrapper .recharts-default-tooltip {\n  background: rgba(0, 0, 0, 0.8) !important;\n  backdrop-filter: blur(10px) !important;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-radius: 8px !important;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5) !important;\n  padding: 12px !important;\n}\n.thermal-comfort-widget .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-label {\n  color: #ffffff !important;\n  opacity: 0.9;\n}\n.thermal-comfort-widget .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-item {\n  color: #ffffff !important;\n}\n.thermal-comfort-widget .recharts-cartesian-grid-horizontal line {\n  stroke: rgba(255, 255, 255, 0.15);\n  stroke-opacity: 0.5;\n}\n.thermal-comfort-widget .recharts-text {\n  fill: #ffffff;\n  opacity: 0.6;\n}\n.thermal-comfort-widget::-webkit-scrollbar {\n  width: 8px;\n}\n.thermal-comfort-widget::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 4px;\n}\n.thermal-comfort-widget::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n}\n.thermal-comfort-widget::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n@media (max-width: 768px) {\n  .thermal-comfort-widget {\n    padding: 16px;\n  }\n  .thermal-comfort-widget .hero-section {\n    padding: 24px;\n  }\n  .thermal-comfort-widget .hero-section .index-values {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .thermal-comfort-widget .metrics-stack {\n    gap: 16px;\n  }\n  .thermal-comfort-widget .metric-card .metric-main .metric-value-section .metric-current .current-value {\n    font-size: 36px;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// Import Recharts components with type assertions to fix compatibility issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } = Recharts;
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const SparklineChart = ({ data, color, height = 80, id, LocationKey, uxpContext }) => {
    return (React.createElement("div", { className: "sparkline-wrapper" },
        React.createElement(ResponsiveContainer, { width: "100%", height: height },
            React.createElement(AreaChart, { data: data, margin: { top: 5, right: 0, left: 0, bottom: 25 } },
                React.createElement("defs", null,
                    React.createElement("linearGradient", { id: `gradient-${id}`, x1: "0", y1: "0", x2: "0", y2: "1" },
                        React.createElement("stop", { offset: "0%", stopColor: color, stopOpacity: 0.6 }),
                        React.createElement("stop", { offset: "100%", stopColor: color, stopOpacity: 0.1 }))),
                React.createElement(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.05)" }),
                React.createElement(XAxis, { dataKey: "day", axisLine: false, tickLine: false, tick: { fill: '#ffffff', fontSize: 10, opacity: 0.6 } }),
                React.createElement(YAxis, { hide: true }),
                React.createElement(Tooltip, { contentStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '6px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                        padding: '8px 12px',
                        backdropFilter: 'blur(10px)'
                    }, labelStyle: { color: '#ffffff', fontSize: 11, opacity: 0.8 }, formatter: (value) => [`${value}${id === 'temp' ? '°C' : '%'}`, ''] }),
                React.createElement(Area, { type: "monotone", dataKey: "value", stroke: color, strokeWidth: 3, fill: `url(#gradient-${id})`, dot: { r: 4, fill: color }, activeDot: { r: 6, fill: color, stroke: '#fff', strokeWidth: 2 } })))));
};
const ThermalComfortWidget = (props) => {
    const [loading, setLoading] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(true);
    // Different data based on LocationKey
    const isSiteLevel = props.LocationKey === '1';
    const isBuildingLevel = props.LocationKey === '3';
    // Site-level data (LocationKey='1')
    const siteData = {
        thermalComfortIndex: 23,
        currentTemp: 23,
        currentHumidity: 52,
        comfortStatus: "Comfortable",
        weekDataTemp: [
            { day: 'Mon', value: 22 },
            { day: 'Tue', value: 23 },
            { day: 'Wed', value: 24 },
            { day: 'Thu', value: 25 },
            { day: 'Fri', value: 24 },
            { day: 'Sat', value: 23 },
            { day: 'Sun', value: 23 }
        ],
        weekDataHumidity: [
            { day: 'Mon', value: 48 },
            { day: 'Tue', value: 50 },
            { day: 'Wed', value: 52 },
            { day: 'Thu', value: 54 },
            { day: 'Fri', value: 53 },
            { day: 'Sat', value: 51 },
            { day: 'Sun', value: 52 }
        ]
    };
    // Building-level data (LocationKey='3')
    const buildingData = {
        thermalComfortIndex: 21,
        currentTemp: 21,
        currentHumidity: 58,
        comfortStatus: "Slightly Cool",
        weekDataTemp: [
            { day: 'Mon', value: 20 },
            { day: 'Tue', value: 21 },
            { day: 'Wed', value: 20 },
            { day: 'Thu', value: 22 },
            { day: 'Fri', value: 21 },
            { day: 'Sat', value: 20 },
            { day: 'Sun', value: 21 }
        ],
        weekDataHumidity: [
            { day: 'Mon', value: 55 },
            { day: 'Tue', value: 57 },
            { day: 'Wed', value: 56 },
            { day: 'Thu', value: 60 },
            { day: 'Fri', value: 59 },
            { day: 'Sat', value: 57 },
            { day: 'Sun', value: 58 }
        ]
    };
    // Default data
    const defaultData = {
        thermalComfortIndex: 22,
        currentTemp: 22,
        currentHumidity: 56,
        comfortStatus: "Comfortable",
        weekDataTemp: [
            { day: 'Mon', value: 20 },
            { day: 'Tue', value: 22 },
            { day: 'Wed', value: 21 },
            { day: 'Thu', value: 24 },
            { day: 'Fri', value: 23 },
            { day: 'Sat', value: 21 },
            { day: 'Sun', value: 22 }
        ],
        weekDataHumidity: [
            { day: 'Mon', value: 45 },
            { day: 'Tue', value: 52 },
            { day: 'Wed', value: 48 },
            { day: 'Thu', value: 58 },
            { day: 'Fri', value: 55 },
            { day: 'Sat', value: 50 },
            { day: 'Sun', value: 56 }
        ]
    };
    // Select data based on LocationKey
    const data = isSiteLevel ? siteData : isBuildingLevel ? buildingData : defaultData;
    const { thermalComfortIndex, currentTemp, currentHumidity, comfortStatus, weekDataTemp, weekDataHumidity } = data;
    const weekDataThermal = [
        { day: 'Mon', value: 21 },
        { day: 'Tue', value: 20 },
        { day: 'Wed', value: 22 },
        { day: 'Thu', value: 24 },
        { day: 'Fri', value: 23 },
        { day: 'Sat', value: 22 },
        { day: 'Sun', value: 22 }
    ];
    React.useEffect(() => {
        if (props.LocationKey) {
            setLoading(true);
            // Location-based data logic
            // LocationKey='1' represents site data
            // LocationKey='3' represents building data
            if (props.LocationKey === '1') {
                // Fetch site-level data
                console.log('Fetching site data for:', props.LocationName);
            }
            else if (props.LocationKey === '3') {
                // Fetch building-level data
                console.log('Fetching building data for:', props.LocationName);
            }
            // Add your data fetching logic here
            setTimeout(() => setLoading(false), 1000);
        }
    }, [props.LocationKey, props.LocationName]);
    if (loading)
        return React.createElement(components_1.Loading, null);
    return (React.createElement("div", { className: "thermal-comfort-widget" },
        React.createElement("div", { className: "hero-section" },
            React.createElement("div", { className: "hero-header" },
                React.createElement("h1", { className: "hero-title" }, "Thermal Comfort Index"),
                React.createElement("div", { className: "header-actions" },
                    React.createElement("div", { className: "comfort-badge" },
                        React.createElement("span", { className: "badge-dot" }),
                        React.createElement("span", { className: "badge-text" }, comfortStatus)),
                    React.createElement("button", { className: "expand-button", onClick: () => setIsExpanded(!isExpanded) }, isExpanded ? '−' : '+'))),
            React.createElement("div", { className: "index-values" },
                React.createElement("div", { className: "index-item" },
                    React.createElement("div", { className: "index-icon temperature" },
                        React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none" },
                            React.createElement("path", { d: "M12 2v20M12 2c2.5 0 4.5 2 4.5 4.5v11c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-11C7.5 4 9.5 2 12 2z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))),
                    React.createElement("div", { className: "index-content" },
                        React.createElement("span", { className: "index-label" }, "Temperature"),
                        React.createElement("div", { className: "index-value" },
                            React.createElement("span", { className: "value-number" }, currentTemp),
                            React.createElement("span", { className: "value-unit" }, "\u00B0C")))),
                React.createElement("div", { className: "index-item" },
                    React.createElement("div", { className: "index-icon humidity" },
                        React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none" },
                            React.createElement("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
                    React.createElement("div", { className: "index-content" },
                        React.createElement("span", { className: "index-label" }, "Relative Humidity"),
                        React.createElement("div", { className: "index-value" },
                            React.createElement("span", { className: "value-number" }, currentHumidity),
                            React.createElement("span", { className: "value-unit" }, "%")))))),
        isExpanded && (React.createElement("div", { className: "expanded-section" },
            React.createElement("div", { className: "section-divider" },
                React.createElement("div", { className: "divider-line left" }),
                React.createElement("span", { className: "divider-text" }, "Detailed Metrics"),
                React.createElement("div", { className: "divider-line right" })),
            React.createElement("div", { className: "metrics-stack" },
                React.createElement("div", { className: "metric-card" },
                    React.createElement("div", { className: "metric-header" },
                        React.createElement("div", { className: "metric-icon temperature" },
                            React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none" },
                                React.createElement("path", { d: "M12 2v20M12 2c2.5 0 4.5 2 4.5 4.5v11c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-11C7.5 4 9.5 2 12 2z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))),
                        React.createElement("span", { className: "metric-label" }, "Temperature Trend")),
                    React.createElement("div", { className: "metric-main" },
                        React.createElement("div", { className: "metric-value-section" },
                            React.createElement("div", { className: "metric-current" },
                                React.createElement("span", { className: "current-value" }, currentTemp),
                                React.createElement("span", { className: "current-unit" }, "\u00B0C")),
                            React.createElement("div", { className: "metric-range" },
                                React.createElement("span", { className: "range-label" }, "Optimal: 20-24\u00B0C")))),
                    React.createElement("div", { className: "metric-sparkline" },
                        React.createElement("span", { className: "sparkline-label" }, "7 day trend"),
                        React.createElement(SparklineChart, { data: weekDataTemp, color: "#60a5fa", id: "temp", LocationKey: props.LocationKey, uxpContext: props.uxpContext }))),
                React.createElement("div", { className: "metric-card" },
                    React.createElement("div", { className: "metric-header" },
                        React.createElement("div", { className: "metric-icon humidity" },
                            React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none" },
                                React.createElement("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
                        React.createElement("span", { className: "metric-label" }, "Humidity Trend")),
                    React.createElement("div", { className: "metric-main" },
                        React.createElement("div", { className: "metric-value-section" },
                            React.createElement("div", { className: "metric-current" },
                                React.createElement("span", { className: "current-value" }, currentHumidity),
                                React.createElement("span", { className: "current-unit" }, "%")),
                            React.createElement("div", { className: "metric-range" },
                                React.createElement("span", { className: "range-label" }, "Optimal: 40-60%")))),
                    React.createElement("div", { className: "metric-sparkline" },
                        React.createElement("span", { className: "sparkline-label" }, "7 day trend"),
                        React.createElement(SparklineChart, { data: weekDataHumidity, color: "#a78bfa", id: "humidity", LocationKey: props.LocationKey, uxpContext: props.uxpContext }))))))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "iaq_left_panel",
    widget: ThermalComfortWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        },
        props: [
            {
                "name": "LocationKey",
                "label": "Location Key",
                "type": "string",
                "placeholder": "Location key"
            },
            {
                "name": "LocationName",
                "label": "Location Name",
                "type": "string",
                "placeholder": "Location Name"
            },
            {
                "name": "AssetKey",
                "label": "Asset Key",
                "type": "string",
                "placeholder": "Asset key"
            }
        ]
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "iaq_left_panel",
    label: "Iaq_left_panel",
    // click: () => alert("Hello"),
    component: ThermalComfortWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"iaq_left_panel",
   component: ThermalComfortWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "iaq_left_panel", // use all lowercase letters
    name: 'Iaq_left_panel',
    description: 'Tempalte Description',
    template: ThermalComfortWidget,
    moduleId: BundleConfig.id,
    complexity: 'advanced',
    icon: ['fas', 'list'],
    expectedSchema: 'dictionary-array'
});
*/
(0, uxp_1.enableLocalization)();


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerCustomWidgetTemplate = exports.getUrlFriendlyString = exports.enableLocalization = exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
const localization_json_1 = __importDefault(__webpack_require__(/*! ../localization.json */ "./localization.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;
function enableLocalization() {
    window.registerLocalization(localization_json_1.default);
}
exports.enableLocalization = enableLocalization;
const getUrlFriendlyString = (string, removeSlashes) => {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    const to = "aaaaaeeeeeiiiiooooouuuunc------";
    const newText = string.split('').map((letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)));
    return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/'/g, '-e') // Replace single quates with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};
exports.getUrlFriendlyString = getUrlFriendlyString;
function registerCustomWidgetTemplate(template) {
    let id = (0, exports.getUrlFriendlyString)(template.id);
    if (!template.icon)
        template.icon = ['fad', 'align-justify'];
    window.registerCustomWidgetTemplate(template);
    registerWidget({
        id: id,
        widget: template.template,
        isTemplate: true,
        isDefaultTemplate: false,
        configs: {
            layout: template.layout || { w: 10, h: 10 },
            props: [
                {
                    name: "uiProps",
                    label: "UI",
                    type: "json"
                }
            ],
            preLoader: (template === null || template === void 0 ? void 0 : template.preLoader) || 'default'
        },
        defaultProps: {
            uiProps: {},
        }
    });
}
exports.registerCustomWidgetTemplate = registerCustomWidgetTemplate;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = Recharts;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map