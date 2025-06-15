/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"e2bc4d08-5047-47a5-cf18-2f5901ca5d15","author":"lahiru nirmal","widgets":[{"id":"equipment_left_panel","name":"equipment_left_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EquipmentAvalability.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EquipmentAvalability.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".dt-equipment-availability-box {\n  position: relative;\n  width: 100%;\n  height: fit-content;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/RealTimeValues.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/RealTimeValues.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".dt-asset-realtime-layer-box-container {\n  width: 380px;\n  height: fit-content;\n  min-height: 100px;\n  position: relative;\n  border-radius: 10px;\n  padding: 10px;\n  background: rgba(30, 34, 40, 0.35);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1254901961);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(2px);\n}\n\n.dt-asset-realtime-box {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/trendchart.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/trendchart.scss ***!
  \***************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".trend-chart-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 15px 0px 15px;\n  background: rgba(30, 34, 40, 0.35);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1254901961);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(2px);\n  border-radius: 12px;\n}\n\n.header {\n  color: #e5e7eb;\n}\n.header .widget-heading {\n  margin: 0 0 5px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.header .widget-sub-heading {\n  font-size: 14px;\n  color: #a4a4a4;\n}\n\n.chart-container {\n  flex: 1;\n  height: 100%;\n  min-height: 300px;\n  background-color: transparent;\n  padding: 0px 10px;\n}\n.chart-container .recharts-legend-wrapper {\n  padding: 15px 0 10px;\n}\n.chart-container .recharts-legend-wrapper .recharts-default-legend {\n  color: #e5e7eb;\n}", ""]);
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
exports.push([module.id, ".dt-widgets-right-panel {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 15px;\n  overflow-y: auto;\n  scrollbar-width: none;\n}\n.dt-widgets-right-panel .trend-chart-wrapper {\n  margin-bottom: 15px;\n}\n.dt-widgets-right-panel .dt-asset-realtime-layer-box-container {\n  width: 100% !important;\n}\n\n.dt-widgets-left-panel-equipment {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 570px 10px 20px 10px;\n  overflow-y: auto;\n}\n.dt-widgets-left-panel-equipment .dt-asset-realtime-layer-box-container {\n  width: 100% !important;\n}\n.dt-widgets-left-panel-equipment .dt-widgets-left-panel-equipment-availapility-position {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 200px;\n}\n.dt-widgets-left-panel-equipment .dt-widgets-left-panel-equipment-availapility-position .dt-widgets-left-panel-equipment-availapility-container {\n  padding: 10px 10px 0px 10px;\n  position: relative;\n  width: 100%;\n  height: 200px;\n}\n.dt-widgets-left-panel-equipment .dt-widgets-left-panel-equipment-realtimechart-position {\n  position: absolute;\n  left: 0px;\n  top: 205px;\n  width: 100%;\n  height: 375px;\n}\n.dt-widgets-left-panel-equipment .dt-widgets-left-panel-equipment-realtimechart-position .dt-widgets-left-panel-equipment-realtimechart-container {\n  padding: 10px 10px 0px 10px;\n  position: relative;\n  width: 100%;\n  height: 375px;\n}", ""]);
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
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const trendchart_1 = __importDefault(__webpack_require__(/*! ./prod/trendchart */ "./src/prod/trendchart.tsx"));
const RealTimeValues_1 = __importDefault(__webpack_require__(/*! ./prod/RealTimeValues */ "./src/prod/RealTimeValues.tsx"));
const EquipmentAvalability_1 = __importDefault(__webpack_require__(/*! ./prod/EquipmentAvalability */ "./src/prod/EquipmentAvalability.tsx"));
const Equipment_left_panelWidget = (props) => {
    return (
    // <WidgetWrapper className="dt-widgets-right-panel equipment">
    //     <EquipmentAvalability AssetKey={props.AssetKey}  uxpContext={props.uxpContext}/>
    //     <RealTimeChart AssetKey={props.AssetKey} AssetID={props.AssetID} uxpContext={props.uxpContext}/>
    //     <RealTimeValues AssetKey={props.AssetKey}  uxpContext={props.uxpContext}/>
    // </WidgetWrapper>
    React.createElement("div", { className: "dt-widgets-left-panel-equipment" },
        React.createElement("div", { className: "dt-widgets-left-panel-equipment-availapility-position" },
            React.createElement("div", { className: "dt-widgets-left-panel-equipment-availapility-container" },
                React.createElement(EquipmentAvalability_1.default, { AssetKey: props.AssetKey, uxpContext: props.uxpContext }))),
        React.createElement("div", { className: "dt-widgets-left-panel-equipment-realtimechart-position" },
            React.createElement("div", { className: "dt-widgets-left-panel-equipment-realtimechart-container" },
                React.createElement(trendchart_1.default, { AssetKey: props.AssetKey, uxpContext: props.uxpContext }))),
        React.createElement("div", { style: { width: "100%", height: "100%", position: "relative" } },
            React.createElement(RealTimeValues_1.default, { AssetKey: props.AssetKey, uxpContext: props.uxpContext }))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "equipment_left_panel",
    widget: Equipment_left_panelWidget,
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
    id: "normal_euipment_right_panel",
    label: "Normal_euipment_right_panel",
    // click: () => alert("Hello"),
    component: Normal_euipment_right_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"normal_euipment_right_panel",
   component: Normal_euipment_right_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "normal_euipment_right_panel", // use all lowercase letters
    name: 'Normal_euipment_right_panel',
    description: 'Tempalte Description',
    template: Normal_euipment_right_panelWidget,
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

/***/ "./src/prod/EquipmentAvalability.scss":
/*!********************************************!*\
  !*** ./src/prod/EquipmentAvalability.scss ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./EquipmentAvalability.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EquipmentAvalability.scss");

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

/***/ "./src/prod/EquipmentAvalability.tsx":
/*!*******************************************!*\
  !*** ./src/prod/EquipmentAvalability.tsx ***!
  \*******************************************/
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
__webpack_require__(/*! ./EquipmentAvalability.scss */ "./src/prod/EquipmentAvalability.scss");
const EquipmentAvalability = (props) => {
    const [availability, setAvailability] = React.useState(null);
    const [avgDowntime, setAvgDowntime] = React.useState(null);
    const [faultFrequency, setFaultFrequency] = React.useState(null);
    //   React.useEffect(() => {
    //     if (props.AssetKey && props.uxpContext) {
    //       // Replace with actual API/service call as needed
    //       props.uxpContext
    //         .executeAction(
    //           "DTHardcodeData-Details",
    //           "EquipmentAvailability",
    //           {
    //             AssetKey: props.AssetKey,
    //           },
    //           { json: true }
    //         )
    //         .then((res) => {
    //           if (res && res.length > 0) {
    //             setAvailability(res[0].Availability ?? 92);
    //             setAvgDowntime(res[0].AvgDowntime ?? 1.5);
    //           } else {
    //             setAvailability(92);
    //             setAvgDowntime(1.5);
    //           }
    //         })
    //         .catch(() => {
    //           setAvailability(92);
    //           setAvgDowntime(1.5);
    //         });
    //     } else {
    //       setAvailability(92);
    //       setAvgDowntime(1.5);
    //     }
    //   }, [props.AssetKey, props.uxpContext]);
    React.useEffect(() => {
        if (props.AssetKey && props.uxpContext) {
            props.uxpContext
                .executeAction("DTHardcodeData-Details", "EquipmentAvailability", {
                AssetKey: props.AssetKey,
            }, { json: true })
                .then((res) => {
                var _a, _b, _c;
                if (res && res.length > 0) {
                    setAvailability((_a = res[0].Availability) !== null && _a !== void 0 ? _a : 92);
                    setAvgDowntime((_b = res[0].AvgDowntime) !== null && _b !== void 0 ? _b : 1.5);
                    setFaultFrequency((_c = res[0].FaultFrequency) !== null && _c !== void 0 ? _c : 4); // Add this line
                }
                else {
                    setAvailability(92);
                    setAvgDowntime(1.5);
                    setFaultFrequency(4); // Default value
                }
            })
                .catch(() => {
                setAvailability(92);
                setAvgDowntime(1.5);
                setFaultFrequency(4); // Default value
            });
        }
        else {
            setAvailability(92);
            setAvgDowntime(1.5);
            setFaultFrequency(4); // Default value
        }
    }, [props.AssetKey, props.uxpContext]);
    // return (
    //   // <div className="dt-asset-details-box" style={{
    //   //     background: "#23272e",
    //   //     color: "#fff",
    //   //     width: "220px",
    //   //     borderRadius: "10px",
    //   //     padding: "18px 12px",
    //   //     boxShadow: "0 2px 8px #00000040"
    //   // }}>
    //   //     {/* <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
    //   //         <img src={`${BASE_URL}/Resources/DigitalTwin/icon/settings.svg`} alt="icon" style={{ width: 22, height: 22, marginRight: 8 }} />
    //   //         <div style={{ fontSize: "16px", fontWeight: 600, lineHeight: "20px" }}>Equipment<br />Availability</div>
    //   //     </div> */}
    //   //      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
    //   //         {/* Inline SVG gear icon */}
    //   //         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
    //   //             <path d="M19.14,12.94c0-.32,0-.64,0-1s0-.68,0-1l2.11-1.65a.5.5,0,0,0,.12-.65l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7,7,0,0,0-1.7-1l-.38-2.65A.5.5,0,0,0,13,2H11a.5.5,0,0,0-.5.42l-.38,2.65a7,7,0,0,0-1.7,1l-2.49-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.65L4.86,10c0,.32,0,.64,0,1s0,.68,0,1L2.75,13.65a.5.5,0,0,0-.12.65l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7,7,0,0,0,1.7,1l.38,2.65A.5.5,0,0,0,11,22h2a.5.5,0,0,0,.5-.42l.38-2.65a7,7,0,0,0,1.7-1l2.49,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.65ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" fill="#fff"/>
    //   //         </svg>
    //   //         <div style={{ fontSize: "16px", fontWeight: 600, lineHeight: "20px" }}>Equipment<br />Availability</div>
    //   //     </div>
    //   //     <div style={{ fontSize: "38px", fontWeight: 700, color: "#36d47c", margin: "8px 0 12px 0" }}>
    //   //         {availability !== null ? `${availability}%` : "--"}
    //   //     </div>
    //   //     <div style={{
    //   //         borderTop: "1px solid #444",
    //   //         margin: "12px 0 10px 0"
    //   //     }} />
    //   //     <div style={{ color: "#b0b0b0", fontSize: "14px", marginBottom: "2px" }}>Average Downtime</div>
    //   //     <div style={{ fontSize: "28px", fontWeight: 600, color: "#fff" }}>
    //   //         {avgDowntime !== null ? `${avgDowntime} hrs` : "--"}
    //   //     </div>
    //   // </div>
    //   // <div
    //   //   className="dt-asset-details-box"
    //   //   style={{
    //   //     background: "#23272e",
    //   //     color: "#fff",
    //   //     width: "220px",
    //   //     borderRadius: "10px",
    //   //     padding: "18px 12px",
    //   //     boxShadow: "0 2px 8px #00000040",
    //   //   }}
    //   // >
    //   <div
    //     className="dt-asset-details-box"
    //     style={{
    //       background: "rgba(13, 14, 15, 0.85)", // Semi-transparent dark background
    //       color: "#fff",
    //       width: "220px",
    //       borderRadius: "10px",
    //       padding: "18px 12px",
    //       boxShadow: "0 2px 8px #00000040",
    //     }}
    //   >
    //     {/* <div
    //       style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
    //     > */}
    //     {/* Inline SVG gear icon */}
    //     {/* <svg
    //         width="22"
    //         height="22"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         style={{ marginRight: 8 }}
    //       >
    //         <path
    //           d="M19.14,12.94c0-.32,0-.64,0-1s0-.68,0-1l2.11-1.65a.5.5,0,0,0,.12-.65l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7,7,0,0,0-1.7-1l-.38-2.65A.5.5,0,0,0,13,2H11a.5.5,0,0,0-.5.42l-.38,2.65a7,7,0,0,0-1.7,1l-2.49-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.65L4.86,10c0,.32,0,.64,0,1s0,.68,0,1L2.75,13.65a.5.5,0,0,0-.12.65l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7,7,0,0,0,1.7,1l.38,2.65A.5.5,0,0,0,11,22h2a.5.5,0,0,0,.5-.42l.38-2.65a7,7,0,0,0,1.7-1l2.49,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.65ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
    //           fill="#fff"
    //         />
    //       </svg> */}
    //     <div
    //       style={{
    //         textAlign: "center",
    //         fontSize: "16px",
    //         fontWeight: 600,
    //         lineHeight: "20px",
    //       }}
    //     >
    //       {/* Equipment
    //         <br />
    //         Availability */}
    //       Equipment Availability
    //     </div>
    //     {/* </div> */}
    //     <div
    //       style={{
    //         fontSize: "38px",
    //         fontWeight: 700,
    //         color: "#36d47c",
    //         margin: "8px 0 12px 0",
    //         textAlign: "center",
    //       }}
    //     >
    //       {availability !== null ? `${availability}%` : "--"}
    //     </div>
    //     <div
    //       style={{
    //         borderTop: "1px solid #444",
    //         margin: "12px 0 10px 0",
    //       }}
    //     />
    //     {/* <div
    //       style={{
    //         color: "#b0b0b0",
    //         fontSize: "14px",
    //         marginBottom: "2px",
    //         textAlign: "center",
    //       }}
    //     >
    //       Average Downtime
    //     </div>
    //     <div
    //       style={{
    //         fontSize: "28px",
    //         fontWeight: 600,
    //         color: "#fff",
    //         textAlign: "center",
    //       }}
    //     >
    //       {avgDowntime !== null ? `${avgDowntime} hrs` : "--"}
    //     </div> */}
    //     <div
    //       style={{
    //         color: "#b0b0b0",
    //         fontSize: "14px",
    //         marginBottom: "2px",
    //         textAlign: "center",
    //       }}
    //     >
    //       Average Downtime
    //     </div>
    //     <div
    //       style={{
    //         fontSize: "28px",
    //         fontWeight: 600,
    //         color: "#fff",
    //         textAlign: "center",
    //       }}
    //     >
    //       {avgDowntime !== null ? `${avgDowntime} hrs` : "--"}
    //     </div>
    //     <div
    //       style={{
    //         color: "#b0b0b0",
    //         fontSize: "14px",
    //         margin: "12px 0 2px 0",
    //         textAlign: "center",
    //       }}
    //     >
    //       Fault Frequency
    //     </div>
    //     <div
    //       style={{
    //         fontSize: "28px",
    //         fontWeight: 600,
    //         color: "#fff",
    //         textAlign: "center",
    //       }}
    //     >
    //       {faultFrequency !== null ? `${faultFrequency} Months` : "--"}
    //     </div>
    //   </div>
    // );
    return (
    // <div
    //   className="dt-asset-details-box"
    //   style={{
    //     background: "rgba(255,255,255,0.85)", // White, semi-transparent
    //     color: "#23272e", // Dark text
    //     width: "220px",
    //     borderRadius: "10px",
    //     padding: "18px 12px",
    //     boxShadow: "0 2px 8px #00000040",
    //   }}
    // >
    //   <div
    //     style={{
    //       textAlign: "center",
    //       fontSize: "16px",
    //       fontWeight: 600,
    //       lineHeight: "20px",
    //       color: "#23272e", // Ensure dark heading
    //     }}
    //   >
    //     Equipment Availability
    //   </div>
    //   <div
    //     style={{
    //       fontSize: "38px",
    //       fontWeight: 700,
    //       color: "#36d47c", // Keep green for highlight
    //       margin: "8px 0 12px 0",
    //       textAlign: "center",
    //     }}
    //   >
    //     {availability !== null ? `${availability}%` : "--"}
    //   </div>
    //   <div
    //     style={{
    //       borderTop: "1px solid #e0e0e0",
    //       margin: "12px 0 10px 0",
    //     }}
    //   />
    //   <div
    //     style={{
    //       color: "#888", // Subtle dark gray
    //       fontSize: "14px",
    //       marginBottom: "2px",
    //       textAlign: "center",
    //     }}
    //   >
    //     Average Downtime
    //   </div>
    //   <div
    //     style={{
    //       fontSize: "28px",
    //       fontWeight: 600,
    //       color: "#23272e",
    //       textAlign: "center",
    //     }}
    //   >
    //     {avgDowntime !== null ? `${avgDowntime} hrs` : "--"}
    //   </div>
    //   <div
    //     style={{
    //       color: "#888",
    //       fontSize: "14px",
    //       margin: "12px 0 2px 0",
    //       textAlign: "center",
    //     }}
    //   >
    //     Fault Frequency
    //   </div>
    //   <div
    //     style={{
    //       fontSize: "28px",
    //       fontWeight: 600,
    //       color: "#23272e",
    //       textAlign: "center",
    //     }}
    //   >
    //     {faultFrequency !== null ? `${faultFrequency} Months` : "--"}
    //   </div>
    // </div>
    React.createElement("div", { className: "dt-equipment-availability-box", style: {
            background: "rgba(30, 34, 40, 0.35)",
            color: "#fff",
            width: '100%',
            borderRadius: 12,
            padding: "18px 12px",
            boxShadow: "0 2px 8px #00000020",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(2px)",
            marginBottom: 0
        } },
        React.createElement("div", { style: {
                textAlign: "center",
                fontSize: 16,
                fontWeight: 600,
                lineHeight: "20px",
                color: "#fff",
            } }, "Equipment Availability"),
        React.createElement("div", { style: {
                fontSize: 38,
                fontWeight: 700,
                color: "#36d47c",
                margin: "8px 0 12px 0",
                textAlign: "center",
            } }, availability !== null ? `${availability}%` : "--"),
        React.createElement("div", { style: {
                borderTop: "1px solid rgba(255,255,255,0.15)",
                margin: "12px 0 10px 0",
            } }),
        React.createElement("div", { className: "bottom-row", style: { display: "flex", justifyContent: "space-around" } },
            React.createElement("div", { className: "left-side" },
                React.createElement("div", { style: {
                        color: "#e0e0e0",
                        fontSize: 14,
                        marginBottom: 2,
                        textAlign: "center",
                    } }, "Average Downtime"),
                React.createElement("div", { style: {
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#fff",
                        textAlign: "center",
                    } }, avgDowntime !== null ? `${avgDowntime} hrs` : "--")),
            React.createElement("div", { style: {
                    borderLeft: "1px solid rgba(255,255,255,0.15)",
                    margin: "12px 0 10px 0",
                } }),
            React.createElement("div", { className: "right-side" },
                React.createElement("div", { style: {
                        color: "#e0e0e0",
                        fontSize: 14,
                        marginBottom: 2,
                        textAlign: "center",
                    } }, "Fault Frequency"),
                React.createElement("div", { style: {
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#fff",
                        textAlign: "center",
                    } }, faultFrequency !== null ? `${faultFrequency} / Month` : "--")))));
};
exports["default"] = EquipmentAvalability;


/***/ }),

/***/ "./src/prod/RealTimeValues.scss":
/*!**************************************!*\
  !*** ./src/prod/RealTimeValues.scss ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./RealTimeValues.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/RealTimeValues.scss");

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

/***/ "./src/prod/RealTimeValues.tsx":
/*!*************************************!*\
  !*** ./src/prod/RealTimeValues.tsx ***!
  \*************************************/
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
__webpack_require__(/*! ./RealTimeValues.scss */ "./src/prod/RealTimeValues.scss");
const POINTS = [
    "Valve Open/Close",
    "DDC/PLC Control for VSD",
    "Control Status",
    "Valve Position",
    "Trip/Fault",
    "High Level Alarm",
    "Low Level Alarm",
    "Supply water Temperature",
    "Return Water Temperature",
    "Water Consumption",
    "Current (I)",
    "Voltage",
    "Kilowatt",
    "Fan Speed",
];
const RealTimeValues = (props) => {
    const [pointValues, setPointValues] = React.useState({});
    //retrive data from backend
    React.useEffect(() => {
        if (props.AssetKey && props.uxpContext) {
            props.uxpContext
                .executeAction("DTHardcodeData-Details", "RealTimeTrendValues", { AssetKey: props.AssetKey }, { json: true })
                .then((res) => {
                // Map backend response to pointValues object
                let values = {};
                POINTS.forEach((pt) => {
                    const found = res.find((item) => item.PointName === pt);
                    values[pt] = found ? found.PointValue : "No Data";
                });
                setPointValues(values);
            })
                .catch(() => {
                // On error, set all to "No Data"
                let values = {};
                POINTS.forEach((pt) => (values[pt] = "No Data"));
                setPointValues(values);
            });
        }
        else {
            // If no AssetKey or context, set all to "No Data"
            let values = {};
            POINTS.forEach((pt) => (values[pt] = "No Data"));
            setPointValues(values);
        }
    }, [props.AssetKey, props.uxpContext]);
    React.useEffect(() => {
        if (props.AssetKey && props.uxpContext) {
            // Example API call, replace with actual API if available
            // props.uxpContext.executeAction("SomeProvider", "GetRealTimeValues", { AssetKey: props.AssetKey }, { json: true })
            //     .then(res => {
            //         // Map response to pointValues
            //         setPointValues(res);
            //     })
            //     .catch(() => setPointValues({}));
            // For now, set all to "No Data"
            let values = {};
            POINTS.forEach((pt) => (values[pt] = "No Data"));
            setPointValues(values);
        }
    }, [props.AssetKey, props.uxpContext]);
    // For demo: highlight "Valve Open/Close" with a green dot
    // const renderPointValue = (point: string) => {
    //     if (point === "Valve Open/Close") {
    //         return (
    //             <span>
    //                 <span style={{
    //                     display: "inline-block",
    //                     width: 10,
    //                     height: 10,
    //                     borderRadius: "50%",
    //                     background: "#36d47c",
    //                     marginRight: 6,
    //                     verticalAlign: "middle"
    //                 }}></span>
    //                 1
    //             </span>
    //         );
    //     }
    //     return pointValues[point] || "No Data";
    // };
    const renderPointValue = (point) => {
        if (point === "Valve Open/Close") {
            const value = pointValues[point] || "No Data";
            // Optional: set color based on value
            let dotColor = "#36d47c"; // green for "Open"
            if (value === "Closed" || value === "No Data")
                dotColor = "#d43636"; // red for "Closed" or "No Data"
            return (React.createElement("span", null,
                React.createElement("span", { style: {
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: dotColor,
                        marginRight: 6,
                        verticalAlign: "middle",
                    } }),
                value));
        }
        if (point === "Valve Open/Close") {
            const value = pointValues[point] || "No Data";
            let dotColor = "#36d47c"; // green for "Open"
            if (value === "Closed" || value === "No Data")
                dotColor = "#d43636"; // red for "Closed" or "No Data"
            return (React.createElement("span", null,
                React.createElement("span", { style: {
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: dotColor,
                        marginRight: 6,
                        verticalAlign: "middle",
                    } }),
                value));
        }
        if (point === "High Level Alarm" || point === "Low Level Alarm") {
            const value = pointValues[point] || "No Data";
            return (React.createElement("span", null,
                React.createElement("span", { style: {
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#d43636",
                        marginRight: 6,
                        verticalAlign: "middle",
                    } }),
                value));
        }
        return pointValues[point] || "No Data";
    };
    // return (
    //     <div className="dt-asset-details-layer-box-container" style={{ width: 340, padding: 0, transform: "none" }}>
    //         <div className="dt-asset-details-box" style={{ background: "#5d6b8c", borderRadius: 12, boxShadow: "0 2px 8px #00000040", color: "#fff", padding: 0 }}>
    //             <div style={{ fontWeight: 600, fontSize: 17, padding: "18px 22px 10px 22px", borderBottom: "1px solid #ffffff22" }}>
    //                 Real-Time Values
    //             </div>
    //             <table style={{ width: "100%", borderSpacing: 0, fontSize: 15 }}>
    //                 <thead>
    //                     <tr>
    //                         <th style={{ textAlign: "left", padding: "10px 0 6px 22px", fontWeight: 500, color: "#e0e0e0" }}>Point Name</th>
    //                         <th style={{ textAlign: "left", padding: "10px 22px 6px 0", fontWeight: 500, color: "#e0e0e0" }}>Point Value</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {POINTS.map((point, idx) => (
    //                         <tr key={point} style={{ background: idx % 2 === 0 ? "#6b7a98" : "#5d6b8c" }}>
    //                             <td style={{ padding: "7px 0 7px 22px" }}>{point}</td>
    //                             <td style={{ padding: "7px 22px 7px 0" }}>{renderPointValue(point)}</td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //             <div className="dt-asset-details-layer-box-close-button-position">
    //                 <div className="dt-asset-details-layer-box-close-button"
    //                     onClick={() => props.onClose && props.onClose()}
    //                 >
    //                     <div className="dt-asset-details-layer-box-close-button-icon"></div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    //  return (
    //     <div className="dt-asset-details-layer-box-container" style={{ width: 340, padding: 0, transform: "none" }}>
    //         <div className="dt-asset-details-box" style={{ background: "#00000087", borderRadius: 12, boxShadow: "0 2px 8px #00000040", color: "#fff", padding: 0 }}>
    //             <div style={{ fontWeight: 600, fontSize: 17, padding: "18px 22px 10px 22px", borderBottom: "1px solid #ffffff22" }}>
    //                 Real-Time Values
    //             </div>
    //             <table style={{ width: "100%", borderSpacing: 0, fontSize: 15 }}>
    //                 <thead>
    //                     <tr>
    //                         <th style={{ textAlign: "left", padding: "10px 0 6px 22px", fontWeight: 500, color: "#e0e0e0" }}>Point Name</th>
    //                         <th style={{ textAlign: "left", padding: "10px 22px 6px 0", fontWeight: 500, color: "#e0e0e0" }}>Point Value</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {POINTS.map((point, idx) => (
    //                         <tr key={point} style={{ background: idx % 2 === 0 ? "#6b7a98" : "#5d6b8c" }}>
    //                             <td style={{ padding: "7px 0 7px 22px" }}>{point}</td>
    //                             <td style={{ padding: "7px 22px 7px 0" }}>{renderPointValue(point)}</td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //             {/* Close icon removed */}
    //         </div>
    //     </div>
    // );
    return (
    // <div
    //   className="dt-asset-details-layer-box-container"
    //   style={{
    //     width: 340,
    //     padding: 0,
    //     transform: "none",
    //     background: "#00000087", // Apply background here
    //     borderRadius: 12, // Match inner box radius for seamless look
    //     boxShadow: "0 2px 8px #00000040",
    //   }}
    // >
    //   <div
    //     className="dt-asset-details-box"
    //     style={{
    //       background: "#00000087", // Keep background here too
    //       borderRadius: 12,
    //       color: "#fff",
    //       padding: 0,
    //     }}
    //   >
    React.createElement("div", { className: "dt-asset-realtime-layer-box-container", style: {
            width: "100%",
            padding: 0,
            transform: "none",
            //background: "rgba(30, 34, 40, 0.35)", // Updated background
            borderRadius: 12,
            boxShadow: "0 2px 8px #00000020",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(2px)", // Subtle blur
        } },
        React.createElement("div", { className: "dt-asset-realtime-box", style: {
                //background: "rgba(30, 34, 40, 0.35)", // Updated background
                borderRadius: 12,
                color: "#fff",
                padding: "45px 0px 0px 0px",
                position: "relative"
            } },
            React.createElement("div", { style: {
                    fontWeight: 600,
                    fontSize: 17,
                    padding: "18px 22px 10px 22px",
                    borderBottom: "1px solid #ffffff22",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%"
                } }, "Real-Time Values"),
            React.createElement("table", { style: { width: "100%", height: "100%", position: "relative", borderSpacing: 0, fontSize: 15 } },
                React.createElement("thead", { style: { height: "50px" } },
                    React.createElement("tr", null,
                        React.createElement("th", { style: {
                                textAlign: "left",
                                padding: "10px 0 6px 22px",
                                fontWeight: 500,
                                color: "#e0e0e0",
                            } }, "Point Name"),
                        React.createElement("th", { style: {
                                textAlign: "left",
                                padding: "10px 22px 6px 0",
                                fontWeight: 500,
                                color: "#e0e0e0",
                            } }, "Point Value"))),
                React.createElement("tbody", { style: { height: "fit-content" } }, POINTS.map((point, idx) => (
                // <tr
                //   key={point}
                //   style={{ background: idx % 2 === 0 ? "#00000087" : "#302f2f" }}
                // >
                React.createElement("tr", { key: point, style: {
                        background: idx % 2 === 0
                            ? "rgba(30, 34, 40, 0.35)"
                            : "rgba(30, 34, 40, 0.22)", // Slightly lighter for odd rows
                    } },
                    React.createElement("td", { style: { padding: "7px 0 7px 22px" } }, point),
                    React.createElement("td", { style: { padding: "7px 22px 7px 0" } }, renderPointValue(point))))))))));
};
exports["default"] = RealTimeValues;


/***/ }),

/***/ "./src/prod/trendchart.scss":
/*!**********************************!*\
  !*** ./src/prod/trendchart.scss ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./trendchart.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/trendchart.scss");

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

/***/ "./src/prod/trendchart.tsx":
/*!*********************************!*\
  !*** ./src/prod/trendchart.tsx ***!
  \*********************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
;
__webpack_require__(/*! ./trendchart.scss */ "./src/prod/trendchart.scss");
const RealTimeChart = (props) => {
    const [data, setData] = (0, react_1.useState)([]);
    const { uxpContext, AssetKey } = props;
    const [AssetID, setAssetID] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        if (props.AssetKey != "" && props.AssetKey != null && props.AssetKey != undefined) {
            getAssetDetails();
        }
    }, [props.AssetKey]);
    function getAssetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            uxpContext.executeAction("DTHardcodeData", "AssetBasicDetails", {
                AssetKey: AssetKey,
            }, { json: true })
                .then((res) => {
                setAssetID(res.length > 0 ? res[0].AssetID : "");
            })
                .catch((e) => {
                console.log(e);
            });
        });
    }
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            getAllData(); // Refresh from backend every 2 seconds
        }, 2000);
        getAllData(); // Initial load
        return () => clearInterval(interval);
    }, []);
    function getAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            uxpContext.executeAction("EnergyDashboard", "TrendData", {
                AssetKey: AssetKey,
            }, { json: true })
                .then((res) => {
                var _a, _b, _c;
                if (!res || res.length === 0)
                    return;
                const newPoint = {
                    time: res[0].time || new Date().toLocaleTimeString(),
                    seriesA: (_a = res[0].seriesA) !== null && _a !== void 0 ? _a : 0,
                    seriesB: (_b = res[0].seriesB) !== null && _b !== void 0 ? _b : 0,
                    seriesC: (_c = res[0].seriesC) !== null && _c !== void 0 ? _c : 0,
                };
                setData(prevData => [...prevData, newPoint].slice(-20)); // Keep only last 20
            })
                .catch((e) => {
                console.log(e);
            });
        });
    }
    return (react_1.default.createElement("div", { className: "trend-chart-wrapper dark-mode" },
        react_1.default.createElement("div", { className: "header" },
            react_1.default.createElement("h2", { className: "widget-heading" },
                "Real-time Trends - ",
                AssetID)),
        react_1.default.createElement("div", { className: "chart-container" },
            react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 300 },
                react_1.default.createElement(recharts_1.LineChart, { data: data },
                    react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "#555" }),
                    react_1.default.createElement(recharts_1.XAxis, { dataKey: "time", stroke: "#ccc", tick: { fill: '#ccc' } }),
                    react_1.default.createElement(recharts_1.YAxis, { stroke: "#ccc", tick: { fill: '#ccc' } }),
                    react_1.default.createElement(recharts_1.Tooltip, { contentStyle: { backgroundColor: "#222", borderColor: "#555" }, labelStyle: { color: "#fff" }, itemStyle: { color: "#fff" } }),
                    react_1.default.createElement(recharts_1.Legend, { layout: "horizontal", verticalAlign: "top", align: "center" }),
                    react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "seriesA", stroke: "#00cc00", dot: { r: 1 }, name: "Supply Air Temp" }),
                    react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "seriesB", stroke: "#ff0000", dot: { r: 1 }, name: "Return Air Temperature" }))))));
};
exports["default"] = RealTimeChart;


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