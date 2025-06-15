/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"57105556-3770-4bf6-fcb6-839b61edf83e","author":"Lahiru Nirmal","widgets":[{"id":"equipment_right_panel","name":"equipment_right_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/asset-details.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/asset-details.scss ***!
  \******************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".dt-asset-details-layer-box-container {\n  width: 380px;\n  height: fit-content;\n  min-height: 100px;\n  position: relative;\n  border-radius: 10px;\n  padding: 10px;\n  background: rgba(30, 34, 40, 0.35);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1254901961);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(2px);\n}\n.dt-asset-details-layer-box-container .dt-asset-details-layer-box-close-button-position {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.dt-asset-details-layer-box-container .dt-asset-details-layer-box-close-button-position .dt-asset-details-layer-box-close-button {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  background-color: #1a1a1a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.dt-asset-details-layer-box-container .dt-asset-details-layer-box-close-button-position .dt-asset-details-layer-box-close-button .dt-asset-details-layer-box-close-button-icon {\n  height: 10px;\n  width: 10px;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: 50% 50%;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='121.31px' height='122.876px' viewBox='0 0 121.31 122.876' enable-background='new 0 0 121.31 122.876' xml:space='preserve'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z'/%3E%3C/g%3E%3C/svg%3E\");\n  filter: invert(100%) sepia(0%) saturate(4452%) hue-rotate(179deg) brightness(111%) contrast(74%);\n}\n.dt-asset-details-layer-box-container .dt-asset-details-layer-box-close-button-position .dt-asset-details-layer-box-close-button:hover {\n  background-color: #000000;\n}\n.dt-asset-details-layer-box-container .dt-asset-details-layer-box-close-button-position .dt-asset-details-layer-box-close-button:hover .dt-asset-details-layer-box-close-button-icon {\n  filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(353deg) brightness(101%) contrast(106%);\n}\n\n.dt-asset-details-box {\n  position: relative;\n  width: 100%;\n  height: fit-content;\n}\n.dt-asset-details-box .dt-asset-details-box-main-title-icon {\n  width: 25px;\n  height: 25px;\n}\n.dt-asset-details-box .dt-asset-details-box-main-title {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bolder;\n}\n\n.dt-asset-details-box-item-label {\n  padding-top: 10px;\n  color: #e9e9e9;\n}\n\n.dt-asset-details-box-item-value {\n  padding-left: 5px;\n  color: #FFFFFF;\n}\n\n.dt-asset-details-box-item-qr-container {\n  padding: 3px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  position: relative;\n  margin-left: 5px;\n  width: fit-content;\n  height: fit-content;\n}\n.dt-asset-details-box-item-qr-container .dt-asset-details-box-item-qr {\n  width: 40px;\n  height: 40px;\n}\n\n.dt-asset-details-fault-container {\n  width: 100%;\n  height: fit-content;\n}\n.dt-asset-details-fault-container *::-webkit-scrollbar {\n  width: 5px !important;\n}\n.dt-asset-details-fault-container *::-webkit-scrollbar-track {\n  width: 5px !important;\n  background: #424242 !important;\n}\n.dt-asset-details-fault-container *::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  width: 5px !important;\n  background: #8f8f8f !important;\n}\n.dt-asset-details-fault-container .dt-asset-details-fault-main-title {\n  padding-top: 20px;\n  padding-bottom: 5px;\n  color: #f56060;\n  font-size: 14px;\n  font-weight: bold;\n}\n.dt-asset-details-fault-container .dt-asset-details-box-fault-testname {\n  padding-bottom: 5px;\n  font-size: 14px;\n  color: #FFFFFF;\n  font-weight: bold;\n}\n.dt-asset-details-fault-container .dt-asset-details-box-fault-recomendation {\n  padding-bottom: 5px;\n  padding-top: 10px;\n  color: #afafaf;\n  font-size: 14px;\n  font-weight: bold;\n}\n.dt-asset-details-fault-container .dt-asset-details-data-list-container {\n  width: 100%;\n  max-height: 50px;\n  position: relative;\n  overflow-y: auto;\n}\n.dt-asset-details-fault-container .dt-asset-details-data-list-item-dot {\n  width: 10px;\n  height: 10px;\n  background-color: #f56060;\n  position: absolute;\n  top: 3px;\n  left: 5px;\n  border-radius: 50%;\n}\n.dt-asset-details-fault-container .dt-asset-details-data-list-item {\n  width: 100%;\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  color: #FFFFFF;\n}\n\n.dt-asset-details-box-externa-link-buttons {\n  padding: 3px 18px;\n  border-radius: 10px;\n  background-color: rgba(67, 119, 216, 0.9176470588);\n  cursor: pointer;\n  color: rgba(235, 242, 255, 0.9176470588);\n}\n.dt-asset-details-box-externa-link-buttons:hover {\n  background-color: #2365e0;\n  color: #ffffff;\n}\n\n.dt-asset-details-list-icon-container {\n  width: 25px;\n  height: 25px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(67, 119, 216, 0.9176470588);\n  cursor: pointer;\n  border-radius: 15px;\n}\n.dt-asset-details-list-icon-container .dt-asset-details-list-view-more-icon {\n  width: 11px;\n  height: 11px;\n  background-position: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  filter: invert(98%) sepia(2%) saturate(7%) hue-rotate(328deg) brightness(101%) contrast(103%);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11.113' height='11.113' viewBox='0 0 11.113 11.113'%3E%3Cpath d='M14.378,14.378H5.735V5.735h4.322V4.5H5.735A1.234,1.234,0,0,0,4.5,5.735v8.644a1.234,1.234,0,0,0,1.235,1.235h8.644a1.238,1.238,0,0,0,1.235-1.235V10.057H14.378ZM11.291,4.5V5.735h2.216L7.439,11.8l.871.871,6.069-6.069V8.822h1.235V4.5Z' transform='translate(-4.5 -4.5)' fill='%23000'/%3E%3C/svg%3E\");\n}\n.dt-asset-details-list-icon-container:hover {\n  background-color: #2365e0;\n}\n\n.dt-asset-details-column-devide {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dt-asset-details-column-devide .dt-asset-details-column {\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.dt-asset-details-full-page-devider {\n  width: 100%;\n  position: relative;\n  height: 100%;\n  display: flex;\n}\n.dt-asset-details-full-page-devider .dt-asset-details-left-panel {\n  position: relative;\n}\n.dt-asset-details-full-page-devider .dt-asset-details-right-panel {\n  flex: 1;\n  position: relative;\n}", ""]);
// Exports
module.exports = exports;


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
exports.push([module.id, ".dt-widgets-left-panel {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 15px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.dt-widgets-left-panel .dt-asset-details-layer-box-container {\n  width: 100%;\n  margin-bottom: 15px;\n}\n.dt-widgets-left-panel .dt-equipment-availability-box {\n  width: 100% !important;\n}\n.dt-widgets-left-panel .dt-equipment-availability-box .bottom-row {\n  display: flex;\n  justify-content: center;\n}\n.dt-widgets-left-panel .dt-equipment-availability-box .bottom-row .left-side {\n  margin: 0 15px;\n}\n.dt-widgets-left-panel .dt-equipment-availability-box .bottom-row .right-side {\n  margin: 0 15px;\n}", ""]);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const asset_details_1 = __importDefault(__webpack_require__(/*! ./prod/asset-details */ "./src/prod/asset-details.tsx"));
const Equipment_right_panelWidget = (props) => {
    return (React.createElement(components_1.WidgetWrapper, { className: "dt-widgets-left-panel equipment" },
        React.createElement(asset_details_1.default, { AssetKey: props.AssetKey, onClose: undefined, uxpContext: props.uxpContext })));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "equipment_right_panel",
    widget: Equipment_right_panelWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        },
        props: [
            {
                "name": "AssetKey",
                "label": "Asset",
                "type": "string",
                "placeholder": "Asset"
            }
        ]
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "normal_euipment_left_panel",
    label: "Normal_euipment_left_panel",
    // click: () => alert("Hello"),
    component: Normal_euipment_left_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"normal_euipment_left_panel",
   component: Normal_euipment_left_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "normal_euipment_left_panel", // use all lowercase letters
    name: 'Normal_euipment_left_panel',
    description: 'Tempalte Description',
    template: Normal_euipment_left_panelWidget,
    moduleId: BundleConfig.id,
    complexity: 'advanced',
    icon: ['fas', 'list'],
    expectedSchema: 'dictionary-array'
});
*/
/**
 * Enable localization
 *
 * This will enable the localization
 *
 * you can use uxpContext.$L() function
 *
 * Ex: Assume you  have a localization message in localization json
 *
 * ```
 * // localization.json
 *
 * {
 *      "uxp.my-widget.title": {
 *          "en": "This is my widget" // english translation,
 *          "ar": "<arabic tranlation >",
 *          ... here goes other translations
 *      }
 * }
 *
 * ```
 *
 *
 * thne in your widget
 *
 * ```
 * // your widget
 *
 * return <WidgetWrapper>
 *      <div class='title'>
 *          {props.uxpContext.$L('uxp.my-widget.title')}
 *      </div>
 *  </WidgetWrapper>
 *
 * ```
 *
 * /// you can have parameters as well
 * // we use `$` mark to identify params
 * // Ex: $name, $location
 *
 * ```
 * // localization.json
 *
 * {
 *      ...
 *      "uxp.my-widget.user-welcom-msg":{
 *          "en": "$userName welcome to my widget"
 *      }
 * }
 * ```
 *
 * in widget
 *
 * ```
 *      ...
 *      <div> {props.uxpContext.$L('uxp.my-widget.user-welcom-msg', {userName: "Jane Doe"})} </div>
 * ```
 *
 *
 */
// enableLocalization()


/***/ }),

/***/ "./src/prod/asset-details.scss":
/*!*************************************!*\
  !*** ./src/prod/asset-details.scss ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./asset-details.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/asset-details.scss");

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

/***/ "./src/prod/asset-details.tsx":
/*!************************************!*\
  !*** ./src/prod/asset-details.tsx ***!
  \************************************/
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
__webpack_require__(/*! ./asset-details.scss */ "./src/prod/asset-details.scss");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const AssetDetails = (props) => {
    return (React.createElement("div", { className: "dt-asset-details-layer-box-container" },
        React.createElement(BasicDetails, { AssetKey: props.AssetKey, uxpContext: props.uxpContext }),
        React.createElement(FaultDetails, { AssetKey: props.AssetKey, uxpContext: props.uxpContext }),
        React.createElement(IBMSDetails, { AssetKey: props.AssetKey, uxpContext: props.uxpContext }),
        React.createElement("div", { className: "dt-asset-details-layer-box-close-button-position" },
            React.createElement("div", { className: "dt-asset-details-layer-box-close-button", onClick: () => {
                    props.onClose();
                } },
                React.createElement("div", { className: "dt-asset-details-layer-box-close-button-icon" })))));
};
exports["default"] = AssetDetails;
const BasicDetails = (props) => {
    const [AssetID, setAssetID] = React.useState("");
    const [AssetKey, setAssetKey] = React.useState("");
    const [Brand, setBrand] = React.useState("");
    const [Model, setModel] = React.useState("");
    const [SerialNo, setSerialNo] = React.useState("");
    const [YearOfFirstAdministration, setYearOfFirstAdministration] = React.useState("");
    const [InstalledLocation, setInstalledLocation] = React.useState("");
    const [Owner, setOwner] = React.useState("");
    const [OwnerKey, setOwnerKey] = React.useState("");
    const [Supplier, setSupplier] = React.useState("");
    const [Qr, setQr] = React.useState("");
    React.useEffect(() => {
        if (props.AssetKey != null && props.AssetKey != undefined) {
            GetDetails();
        }
    }, [props.AssetKey]);
    let toast = (0, components_1.useToast)();
    function GetDetails() {
        var _a;
        (_a = props.uxpContext) === null || _a === void 0 ? void 0 : _a.executeAction("DTHardcodeData", 'AssetBasicDetails', {
            AssetKey: props.AssetKey
        }, { json: true }).then(res => {
            setAssetID(res.length > 0 ? res[0].AssetID : " ");
            setAssetKey(res.length > 0 ? res[0].AssetKey : "");
            setBrand(res.length > 0 ? res[0].Brand : " ");
            setModel(res.length > 0 ? res[0].Model : " ");
            setSerialNo(res.length > 0 ? res[0].SerialNo : " ");
            setYearOfFirstAdministration(res.length > 0 ? res[0].YearOfFirstAdministration : " ");
            setInstalledLocation(res.length > 0 ? res[0].FullName : "");
            setOwner(res.length > 0 ? res[0].OwnerID : " ");
            setOwnerKey(res.length > 0 ? res[0].OwnerKey : "");
            setSupplier(res.length > 0 ? res[0].Supplier : " ");
            setQr(res.length > 0 ? res[0].Qr : " ");
        }).catch(e => {
            console.log("except: ", e);
            toast.error("Something went wrong");
        });
    }
    return (React.createElement("div", { className: "dt-asset-details-box" },
        React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("img", { src: `/Resources/CMAT/img/uxpicons/asset-colored.svg`, className: 'dt-asset-details-box-main-title-icon' })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "dt-asset-details-box-main-title" }, AssetID))))),
        React.createElement("div", { className: "dt-asset-details-column-devide", style: { width: "100%", height: "fit-content" } },
            React.createElement("div", { className: "dt-asset-details-column", style: { width: "50%", height: "100%" } },
                React.createElement("div", { style: { width: "100%", height: "100%", position: "relative" } },
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Brand"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, Brand),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Model"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, Model),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "SerialNo"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, SerialNo),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Year Of First Administration"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, YearOfFirstAdministration))),
            React.createElement("div", { className: "dt-asset-details-column", style: { width: "50%", height: "100%" } },
                React.createElement("div", { style: { width: "100%", height: "100%", position: "relative", paddingLeft: "10px" } },
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Location"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, InstalledLocation),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Owner"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, Owner),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Supplier"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, Supplier),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "QR"),
                    React.createElement("div", { style: { position: "relative" } },
                        React.createElement("div", { style: { position: "absolute", left: "28px", top: "-15px" } },
                            React.createElement("div", { className: "dt-asset-details-box-item-qr-container" },
                                React.createElement("img", { src: Qr, className: 'dt-asset-details-box-item-qr' }))))))),
        React.createElement("div", { style: { width: "100%", height: "45px", paddingTop: "35px", position: "relative" } },
            React.createElement("table", { style: { width: "fit-content", position: "relative", float: "right" } },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: "dt-asset-details-box-externa-link-buttons", onClick: () => {
                                    window.open(`/Apps/IBMS/rt-full.json?key=2`, '_blank');
                                } }, "GUI")),
                        React.createElement("td", { style: { paddingLeft: "3px" } },
                            React.createElement("div", { className: "dt-asset-details-box-externa-link-buttons", onClick: () => {
                                    window.open(`/Apps/IBMS/points.realtime.trend.view?key=2&objecttype=IBMSEquipment&objectid=CABE-FCUW-2401-001&pointkeylist=`, '_blank');
                                } }, "Trend")),
                        React.createElement("td", { style: { paddingLeft: "3px" } },
                            React.createElement("div", { className: "dt-asset-details-box-externa-link-buttons", onClick: () => {
                                    window.open(`/Apps/SmartBIM/home?objecttype=Asset&objectid=CABE-FCUW-2401-001`, '_blank');
                                } }, "BIM"))))))));
};
const FaultDetails = (props) => {
    const [IsFault, setIsFault] = React.useState(false);
    const [TestName, setTestName] = React.useState("");
    const [FaultDescription, setFaultDescription] = React.useState([]);
    const [RecMessage, setRecMessage] = React.useState([]);
    const [MainFaultDecList, setMainFaultDecList] = React.useState([]);
    const [RecMessageList, setRecMessageList] = React.useState([]);
    React.useEffect(() => {
        if (props.AssetKey != null && props.AssetKey != undefined) {
            GetDetails();
        }
    }, [props.AssetKey]);
    let toast = (0, components_1.useToast)();
    function GetDetails() {
        var _a;
        (_a = props.uxpContext) === null || _a === void 0 ? void 0 : _a.executeAction("DTHardcodeData", 'AssetFaultDetails', {
            AssetKey: props.AssetKey
        }, { json: true }).then(res => {
            setTestName(res.length > 0 ? res[0].TestName : " ");
            setFaultDescription(res.length > 0 ? (res[0].FaultDescription).split('@@@@@') : []);
            setRecMessage(res.length > 0 ? (res[0].RecMessage).split('@@@@@') : []);
            let faults = [];
            let recoms = [];
            if (res.length > 0) {
                if (res[0].FaultDescription != "" && res[0].FaultDescription != " ") {
                    faults = (res[0].FaultDescription).split('@@@@@');
                }
                if (res[0].RecMessage != "" && res[0].RecMessage != " ") {
                    recoms = (res[0].RecMessage).split('@@@@@');
                }
            }
            CreateComponent(faults, setMainFaultDecList);
            CreateComponent(recoms, setRecMessageList);
            setIsFault(res.length > 0);
        }).catch(e => {
            console.log("except: ", e);
            toast.error("Something went wrong");
        });
    }
    function CreateComponent(list, setAttribute) {
        let rowtdarray = [];
        for (let z = 0; z < list.length; z++) {
            rowtdarray.push(React.createElement("div", { className: "dt-asset-details-full-page-devider" },
                React.createElement("div", { className: "dt-asset-details-left-panel", style: { width: "20px" } },
                    React.createElement("div", { style: { position: "relative", width: "10px", height: "10px" } },
                        React.createElement("div", { className: "dt-asset-details-data-list-item-dot" }))),
                React.createElement("div", { className: "dt-asset-details-right-panel" },
                    React.createElement("div", { className: "dt-asset-details-data-list-item" }, list[z]))));
        }
        setAttribute(rowtdarray);
    }
    return (React.createElement("div", { className: "dt-asset-details-fault-container" }, IsFault && React.createElement(React.Fragment, null,
        React.createElement("div", { className: "dt-asset-details-fault-main-title" },
            React.createElement("div", { style: { width: "fit-content", position: "relative" } },
                "Fault Detected",
                React.createElement("div", { style: { position: "absolute", right: "-32px", top: "-4px" } },
                    React.createElement("div", { title: "view", style: { cursor: "pointer" }, className: "dt-asset-details-list-icon-container", onClick: () => {
                            window.open(`/Apps/UXP/screen/fault-result-wo-details?timk=17`, '_blank');
                        } },
                        React.createElement("div", { className: "dt-asset-details-list-view-more-icon" }))))),
        React.createElement("div", { className: "dt-asset-details-box-fault-testname" }, TestName),
        React.createElement("div", { className: "dt-asset-details-data-list-container" }, MainFaultDecList.map((itembox, key) => {
            return itembox;
        })),
        React.createElement("div", { className: "dt-asset-details-box-fault-recomendation" }, "Recomendations"),
        React.createElement("div", { className: "dt-asset-details-data-list-container" }, RecMessageList.map((itembox, key) => {
            return itembox;
        })))));
};
const IBMSDetails = (props) => {
    const [IsFault, setIsFault] = React.useState(false);
    const [AlarmID, setAlarmID] = React.useState("");
    const [FaultDescription, setFaultDescription] = React.useState("");
    const [DateTime, setDateTime] = React.useState("");
    React.useEffect(() => {
        if (props.AssetKey != null && props.AssetKey != undefined) {
            GetDetails();
        }
    }, [props.AssetKey]);
    let toast = (0, components_1.useToast)();
    function GetDetails() {
        var _a;
        (_a = props.uxpContext) === null || _a === void 0 ? void 0 : _a.executeAction("DTHardcodeData", 'AssetIBMSFailDetails', {
            AssetKey: props.AssetKey
        }, { json: true }).then(res => {
            setIsFault(res.length > 0);
            setAlarmID(res.length > 0 ? res[0].AlarmID : " ");
            setFaultDescription(res.length > 0 ? res[0].Description : "");
            setDateTime(res.length > 0 ? res[0].DateTime : " ");
        }).catch(e => {
            console.log("except: ", e);
            toast.error("Something went wrong");
        });
    }
    return (React.createElement("div", { className: "dt-asset-details-fault-container", style: { height: "130px" } }, IsFault && React.createElement(React.Fragment, null,
        React.createElement("div", { className: "dt-asset-details-fault-main-title", style: { paddingTop: "20px", paddingBottom: "5px" } },
            React.createElement("div", { style: { width: "fit-content", position: "relative" } },
                "IBMS Failure Detected",
                React.createElement("div", { style: { position: "absolute", right: "-32px", top: "-4px" } },
                    React.createElement("div", { title: "view", style: { cursor: "pointer" }, className: "dt-asset-details-list-icon-container", onClick: () => {
                            window.open(`/Apps/UXP/portal/alarm-dashboard?transactionkey=4&transactionid=ALM20250410022&appkey=6&assignee=1&locationkey=15&assetkey=2&assetname=CABE-FCUW-2401-001`, '_blank');
                        } },
                        React.createElement("div", { className: "dt-asset-details-list-view-more-icon" }))))),
        React.createElement("div", { className: "dt-asset-details-column-devide", style: { width: "100%", height: "90px", marginTop: "-5px" } },
            React.createElement("div", { className: "dt-asset-details-column", style: { width: "50%", height: "100%" } },
                React.createElement("div", { style: { width: "100%", height: "100%", position: "relative" } },
                    React.createElement("div", { className: "dt-asset-details-box-item-label", style: { paddingTop: "3px" } }, "Alarm ID"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, AlarmID),
                    React.createElement("div", { className: "dt-asset-details-box-item-label" }, "Description"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, FaultDescription))),
            React.createElement("div", { className: "dt-asset-details-column", style: { width: "50%", height: "100%" } },
                React.createElement("div", { style: { width: "100%", height: "100%", position: "relative", paddingLeft: "10px" } },
                    React.createElement("div", { className: "dt-asset-details-box-item-label", style: { paddingTop: "3px" } }, "Occured Date Time"),
                    React.createElement("div", { className: "dt-asset-details-box-item-value" }, DateTime)))))));
};


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