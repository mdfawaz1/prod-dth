/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"dae5149f-653c-4ed0-ca89-20fd8e03a42c","author":"fawaz","widgets":[{"id":"comforty","name":"comforty","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

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
exports.push([module.id, "/* Theme variables */\n:root {\n  --bg-color: rgba(255, 255, 255, 0.1);\n  --text-color: #222;\n  --glass-bg: rgba(255, 255, 255, 0.2);\n  --glass-border: rgba(0, 0, 0, 0.1);\n  --card-bg: rgba(255, 255, 255, 0.15);\n  --card-border: rgba(0, 0, 0, 0.12);\n  --progress-bg: rgba(0, 0, 0, 0.1);\n  --modal-bg: rgba(255, 255, 255, 0.95);\n  --modal-border: rgba(0, 0, 0, 0.1);\n  --section-title-color: #222;\n  --temp-color: #1a73e8;\n  --humidity-color: #0f9d58;\n  --font-size: 1rem;\n  /* Widget specific colors - more vibrant */\n  --meter-bg: #e0e0e0;\n  --temp-meter-fill: #1a73e8;\n  --humidity-meter-fill: #0f9d58;\n  --down-arrow: #ea4335;\n  --up-arrow: #0f9d58;\n  --circle-border: rgba(0, 0, 0, 0.1);\n  --table-border: rgba(0, 0, 0, 0.1);\n  --very-high-density: #ea4335;\n  --high-density: #f9ab00;\n  --medium-density: #fbbc04;\n  --low-density: #0f9d58;\n  --chart-line-1: #1a73e8;\n  --chart-line-2: #ea4335;\n  --chart-line-3: #0f9d58;\n  /* Percentage based colors */\n  --low-percentage-color: #34A853;\n  --medium-percentage-color: #FBBC05;\n  --high-percentage-color: #F9AB00;\n  --critical-percentage-color: #EA4335;\n}\n\n.dark-mode {\n  --bg-color: rgba(20, 20, 20, 0.9);\n  --text-color: #fff;\n  --glass-bg: rgba(30, 30, 30, 0.85);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --card-bg: rgba(40, 40, 40, 0.85);\n  --card-border: rgba(255, 255, 255, 0.12);\n  --progress-bg: rgba(255, 255, 255, 0.15);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --section-title-color: #fff;\n  --temp-color: #4285F4;\n  --humidity-color: #34A853;\n  /* Widget specific colors in dark mode - more vibrant */\n  --meter-bg: rgba(80, 80, 80, 0.5);\n  --circle-border: rgba(255, 255, 255, 0.25);\n  --table-border: rgba(255, 255, 255, 0.15);\n  --temp-meter-fill: #4285F4;\n  --humidity-meter-fill: #34A853;\n  --chart-line-1: #4285F4;\n  --chart-line-2: #EA4335;\n  --chart-line-3: #34A853;\n}\n\n/* Main container styles */\n.main-container {\n  width: 100%;\n  height: 100%;\n  color: var(--text-color);\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: var(--font-size);\n}\n\n.glass-bg {\n  padding: 24px 16px;\n  width: 100%;\n  min-height: 400px;\n  color: var(--text-color);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  gap: 24px;\n}\n\n/* Header section */\n.header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n\n.widget-title-container {\n  flex: 1;\n  text-align: center;\n}\n\n.header-section .widget-title {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-color);\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0;\n}\n\n.theme-toggle {\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.theme-toggle i {\n  font-size: 16px;\n  color: var(--text-color);\n}\n.theme-toggle:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.05);\n}\n\n.building-selector {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.building-name {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n\n/* Section title styling */\n.widget-section-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  width: 100%;\n}\n.widget-section-title span {\n  padding: 0 12px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--section-title-color);\n  opacity: 0.85;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.widget-section-title .section-line {\n  height: 1px;\n  flex: 1;\n  background: linear-gradient(90deg, transparent, var(--text-color) 50%, transparent);\n  opacity: 0.25;\n}\n\n/* Common widget section styling */\n.widget-section {\n  background: var(--card-bg);\n  border-radius: 10px;\n  backdrop-filter: blur(10px);\n  padding: 12px;\n  margin-bottom: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  border: 1px solid var(--card-border);\n  transition: all 0.3s ease;\n}\n.widget-section:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n\n/* Temperature widget section specific styling */\n.temperature-section {\n  background: linear-gradient(135deg, rgba(26, 115, 232, 0.05) 0%, rgba(66, 133, 244, 0.15) 100%);\n  border-left: 3px solid var(--temp-color);\n}\n\n/* Humidity widget section specific styling */\n.humidity-section {\n  background: linear-gradient(135deg, rgba(15, 157, 88, 0.05) 0%, rgba(52, 168, 83, 0.15) 100%);\n  border-left: 3px solid var(--humidity-color);\n}\n\n/* Distribution widget section specific styling */\n.distribution-section {\n  background: linear-gradient(135deg, rgba(66, 133, 244, 0.05) 0%, rgba(26, 115, 232, 0.15) 100%);\n  border-left: 3px solid var(--chart-line-1);\n}\n\n.distribution-icon {\n  background: var(--chart-line-1);\n  box-shadow: 0 0 10px rgba(66, 133, 244, 0.4);\n}\n\n/* Widget header styling */\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 12px;\n}\n\n.widget-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--temp-color);\n  color: white;\n  box-shadow: 0 0 10px rgba(26, 115, 232, 0.4);\n}\n.widget-icon i {\n  font-size: 14px;\n}\n\n.humidity-icon {\n  background: var(--humidity-color);\n  box-shadow: 0 0 10px rgba(15, 157, 88, 0.4);\n}\n\n/* Temperature widget styling */\n.temperature-widget, .humidity-widget {\n  width: 100%;\n}\n\n.widget-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n  text-align: center;\n  letter-spacing: 1px;\n}\n\n.temperature-widget .widget-title {\n  color: var(--temp-color);\n  text-shadow: 0 0 5px rgba(26, 115, 232, 0.2);\n}\n\n.humidity-widget .widget-title {\n  color: var(--humidity-color);\n  text-shadow: 0 0 5px rgba(15, 157, 88, 0.2);\n}\n\n.distribution-widget .widget-title {\n  color: var(--chart-line-1);\n  text-shadow: 0 0 5px rgba(66, 133, 244, 0.2);\n}\n\n/* Meter bars styling */\n.meter-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 14px;\n}\n\n.meter-label {\n  width: 100px;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.meter-bars {\n  flex: 1;\n  height: 24px;\n  background: var(--meter-bg);\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.meter-filled {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  border-radius: 12px;\n  background: var(--temp-meter-fill);\n  background: linear-gradient(90deg, rgba(26, 115, 232, 0.8) 0%, rgb(26, 115, 232) 100%);\n  box-shadow: 0 0 6px rgba(26, 115, 232, 0.4);\n  /* Percentage-based color variations */\n}\n.meter-filled.low-percentage {\n  background: linear-gradient(90deg, rgba(52, 168, 83, 0.8) 0%, rgb(52, 168, 83) 100%);\n  box-shadow: 0 0 6px rgba(52, 168, 83, 0.4);\n}\n.meter-filled.medium-percentage {\n  background: linear-gradient(90deg, rgba(251, 188, 5, 0.8) 0%, rgb(251, 188, 5) 100%);\n  box-shadow: 0 0 6px rgba(251, 188, 5, 0.4);\n}\n.meter-filled.high-percentage {\n  background: linear-gradient(90deg, rgba(249, 171, 0, 0.8) 0%, rgb(249, 171, 0) 100%);\n  box-shadow: 0 0 6px rgba(249, 171, 0, 0.4);\n}\n.meter-filled.critical-percentage {\n  background: linear-gradient(90deg, rgba(234, 67, 53, 0.8) 0%, rgb(234, 67, 53) 100%);\n  box-shadow: 0 0 6px rgba(234, 67, 53, 0.4);\n}\n\n.humidity-bars .meter-filled {\n  background: var(--humidity-meter-fill);\n  background: linear-gradient(90deg, rgba(15, 157, 88, 0.8) 0%, rgb(15, 157, 88) 100%);\n  box-shadow: 0 0 6px rgba(15, 157, 88, 0.4);\n}\n\n.meter-value {\n  width: 60px;\n  text-align: right;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin-left: 10px;\n}\n\n/* Humidity visual elements */\n.humidity-visual {\n  display: flex;\n  justify-content: space-around;\n  backdrop-filter: blur(10px);\n  height: 140px;\n  margin-bottom: 12px;\n  align-items: flex-end;\n}\n\n.humidity-bars-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 60px;\n  height: 100%;\n}\n\n.humidity-percentage-bar {\n  width: 100%;\n  background: linear-gradient(180deg, var(--humidity-color) 0%, rgba(15, 157, 88, 0.7) 100%);\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 8px;\n  box-shadow: 0 0 10px rgba(15, 157, 88, 0.3);\n  transition: height 0.5s ease;\n  /* Percentage-based color variations */\n}\n.humidity-percentage-bar.low-percentage {\n  background: linear-gradient(180deg, var(--low-percentage-color) 0%, rgba(52, 168, 83, 0.7) 100%);\n  box-shadow: 0 0 10px rgba(52, 168, 83, 0.3);\n}\n.humidity-percentage-bar.medium-percentage {\n  background: linear-gradient(180deg, var(--medium-percentage-color) 0%, rgba(251, 188, 5, 0.7) 100%);\n  box-shadow: 0 0 10px rgba(251, 188, 5, 0.3);\n}\n.humidity-percentage-bar.high-percentage {\n  background: linear-gradient(180deg, var(--high-percentage-color) 0%, rgba(249, 171, 0, 0.7) 100%);\n  box-shadow: 0 0 10px rgba(249, 171, 0, 0.3);\n}\n.humidity-percentage-bar.critical-percentage {\n  background: linear-gradient(180deg, var(--critical-percentage-color) 0%, rgba(234, 67, 53, 0.7) 100%);\n  box-shadow: 0 0 10px rgba(234, 67, 53, 0.3);\n}\n\n.humidity-value {\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.humidity-label {\n  margin-top: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n/* Circle charts styling */\n.circle-charts {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 16px;\n  margin-bottom: 12px;\n}\n\n.circle-chart {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 4px solid var(--temp-meter-fill);\n  box-sizing: border-box;\n  box-shadow: 0 0 15px rgba(26, 115, 232, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.humidity-chart {\n  border-color: var(--humidity-meter-fill);\n  box-shadow: 0 0 15px rgba(15, 157, 88, 0.3);\n}\n\n.chart-percentage {\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: var(--text-color);\n}\n\n.chart-label, .chart-range, .chart-type {\n  font-size: 0.75rem;\n  margin-top: 2px;\n}\n\n.chart-change {\n  position: absolute;\n  bottom: -24px;\n  font-size: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 500;\n}\n.chart-change i.fa-arrow-down {\n  color: var(--down-arrow);\n}\n.chart-change i.fa-arrow-up {\n  color: var(--up-arrow);\n}\n\n.comparison-label {\n  text-align: center;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin-top: 24px;\n  font-weight: 500;\n}\n\n/* Temperature distribution chart */\n.distribution-widget {\n  width: 100%;\n}\n\n.time-range {\n  font-size: 0.8rem;\n  opacity: 0.7;\n  text-align: center;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n\n.chart-container {\n  width: 100%;\n  height: 200px;\n  background: var(--card-bg);\n  border-radius: 8px;\n  backdrop-filter: blur(10px);\n  position: relative;\n  overflow: hidden;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n/* Actual chart styles */\n.chart-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.chart-grid-line {\n  flex: 1;\n  border-top: 1px dashed rgba(128, 128, 128, 0.2);\n}\n\n.chart-y-axis {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: var(--text-color);\n  opacity: 0.7;\n}\n\n.chart-x-axis {\n  position: absolute;\n  left: 40px;\n  right: 20px;\n  bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: var(--text-color);\n  opacity: 0.7;\n}\n\n.temp-line {\n  position: absolute;\n  left: 40px;\n  right: 20px;\n  height: 2px;\n  top: 50px;\n  background: none;\n  border-top: 2px solid var(--chart-line-1);\n  z-index: 10;\n}\n\n.temp-line-2 {\n  top: 130px;\n  border-top: 2px solid var(--chart-line-2);\n}\n\n.temp-line-3 {\n  top: 200px;\n  border-top: 2px solid var(--chart-line-3);\n}\n\n.temp-point {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--chart-line-1);\n  margin-left: -3px;\n  margin-top: -3px;\n  z-index: 20;\n}\n\n.temp-point-2 {\n  background: var(--chart-line-2);\n}\n\n.temp-point-3 {\n  background: var(--chart-line-3);\n}\n\n.chart-legend {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.legend-item {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  gap: 9px;\n}\n\n.legend-color {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n}\n\n.legend-color-1 {\n  background: var(--chart-line-1);\n}\n\n.legend-color-2 {\n  background: var(--chart-line-2);\n}\n\n.legend-color-3 {\n  background: var(--chart-line-3);\n}\n\n/* Space utilization widget */\n.space-widget {\n  width: 100%;\n}\n\n.space-controls {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  align-items: center;\n}\n\n.view-controls {\n  display: flex;\n  border-radius: 4px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.control-btn {\n  border: none;\n  background: transparent;\n  color: var(--text-color);\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.control-btn.active {\n  background: var(--card-bg);\n  font-weight: 600;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);\n}\n.control-btn:hover:not(.active) {\n  background: rgba(128, 128, 128, 0.1);\n}\n\n.display-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.nav-btn {\n  background: transparent;\n  border: none;\n  color: var(--text-color);\n  cursor: pointer;\n  font-size: 0.8rem;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.nav-btn:hover {\n  background: var(--card-bg);\n  transform: scale(1.05);\n}\n\n.display-label {\n  font-size: 0.8rem;\n  background: var(--card-bg);\n  padding: 5px 14px;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  font-weight: 500;\n}\n\n.level-selector {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 4px;\n  background: var(--card-bg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.level-selector:hover {\n  background: rgba(128, 128, 128, 0.1);\n}\n\n.space-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.space-table th, .space-table td {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid var(--table-border);\n}\n.space-table th {\n  font-weight: 600;\n  opacity: 0.85;\n}\n.space-table tr:hover td {\n  background: rgba(128, 128, 128, 0.05);\n}\n\n.percentage-badge {\n  background: #333;\n  color: white;\n  padding: 3px 10px;\n  border-radius: 12px;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 500;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.density-legend {\n  display: flex;\n  gap: 16px;\n  margin-top: 24px;\n  flex-wrap: wrap;\n}\n\n.density-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  background: rgba(128, 128, 128, 0.1);\n  padding: 6px 12px;\n  border-radius: 16px;\n}\n\n.density-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n}\n\n.very-high .density-dot {\n  background: var(--very-high-density);\n}\n\n.high .density-dot {\n  background: var(--high-density);\n}\n\n.medium .density-dot {\n  background: var(--medium-density);\n}\n\n.low .density-dot {\n  background: var(--low-density);\n}\n\n/* Responsive styling */\n@media (max-width: 768px) {\n  .circle-charts {\n    flex-direction: column;\n    align-items: center;\n    gap: 48px;\n    margin-bottom: 48px;\n  }\n  .header-section {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .meter-label {\n    width: 80px;\n  }\n  .humidity-visual {\n    height: 150px;\n  }\n}\n@media (max-width: 480px) {\n  .widget-section-title span {\n    font-size: 0.7rem;\n  }\n  .meter-label {\n    width: 70px;\n    font-size: 0.8rem;\n  }\n  .meter-value {\n    width: 50px;\n    font-size: 0.8rem;\n  }\n  .humidity-bars-container {\n    width: 50px;\n  }\n}", ""]);
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
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const ComfortyWidget = (props) => {
    // Theme management
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const containerRef = React.useRef(null);
    const resizeTimeoutRef = React.useRef();
    // Get building name from props or use default
    const buildingName = props.LocationName || "Demo Building";
    // Mock data for temperature widget
    const temperatureData = {
        airCon: { value: 23, rooms: 90, range: "21-26 °C", change: -4 },
        chiller: { value: 13, rooms: 44, range: "13-15 °C", change: 0 },
        nonAirCon: { value: 26, rooms: 100, range: "25-34 °C", change: 0 }
    };
    // Mock data for humidity widget
    const humidityData = {
        airCon: { value: 51, rooms: 80, range: "45-65 %", change: 2 },
        chiller: { value: 66, rooms: 78, range: "60-75 %", change: 0 },
        nonAirCon: { value: 89, rooms: 0, range: "45-88 %", change: 0 }
    };
    // Helper function to determine color based on percentage
    const getColorClass = (percentage) => {
        if (percentage <= 30)
            return "low-percentage";
        if (percentage <= 60)
            return "medium-percentage";
        if (percentage <= 85)
            return "high-percentage";
        return "critical-percentage";
    };
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    const updateFontSize = React.useCallback((container) => {
        const containerWidth = container.offsetWidth;
        const minWidth = 200;
        const maxWidth = 400;
        const minFontSize = 0.75;
        const maxFontSize = 4.2;
        let fontSize = minFontSize;
        if (containerWidth > minWidth) {
            fontSize = minFontSize + (maxFontSize - minFontSize) *
                Math.min(1, (containerWidth - minWidth) / (maxWidth - minWidth));
        }
        container.style.setProperty('--font-size', `${fontSize}rem`);
    }, []);
    React.useEffect(() => {
        if (!containerRef.current)
            return;
        const resizeObserver = new ResizeObserver((entries) => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeTimeoutRef.current = setTimeout(() => {
                for (const entry of entries) {
                    updateFontSize(entry.target);
                }
            }, 100); // 100ms debounce
        });
        updateFontSize(containerRef.current);
        resizeObserver.observe(containerRef.current);
        return () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeObserver.disconnect();
        };
    }, [updateFontSize]);
    return (React.createElement("div", { className: `main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`, ref: containerRef },
        React.createElement("div", { className: "glass-bg" },
            React.createElement("div", { className: "header-section" },
                React.createElement("div", { className: "widget-title-container" },
                    React.createElement("div", { className: "widget-title" },
                        "IAQ LEVEL SUMMARY - ",
                        buildingName)),
                React.createElement("div", { className: "theme-toggle", onClick: toggleTheme },
                    React.createElement("i", { className: `fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}` }))),
            React.createElement("div", { className: "widget-section temperature-section" },
                React.createElement("div", { className: "widget-section-title" },
                    React.createElement("div", { className: "section-line" }),
                    React.createElement("span", null,
                        "IAQ LEVEL SUMMARY - ",
                        buildingName),
                    React.createElement("div", { className: "section-line" })),
                React.createElement("div", { className: "temperature-widget" },
                    React.createElement("div", { className: "widget-header" },
                        React.createElement("h3", { className: "widget-title" }, "TEMPERATURE"),
                        React.createElement("div", { className: "widget-icon" },
                            React.createElement("i", { className: "fas fa-thermometer-half" }))),
                    React.createElement("div", { className: "temperature-grid" },
                        React.createElement("div", { className: "meter-row" },
                            React.createElement("div", { className: "meter-label" }, "Air Con"),
                            React.createElement("div", { className: "meter-bars" },
                                React.createElement("div", { className: `meter-filled ${getColorClass(40)}`, style: { width: '40%' } })),
                            React.createElement("div", { className: "meter-value" },
                                temperatureData.airCon.value,
                                "\u00B0C")),
                        React.createElement("div", { className: "meter-row" },
                            React.createElement("div", { className: "meter-label" }, "Chiller"),
                            React.createElement("div", { className: "meter-bars" },
                                React.createElement("div", { className: `meter-filled ${getColorClass(25)}`, style: { width: '25%' } })),
                            React.createElement("div", { className: "meter-value" },
                                temperatureData.chiller.value,
                                "\u00B0C")),
                        React.createElement("div", { className: "meter-row" },
                            React.createElement("div", { className: "meter-label" }, "Non-Air Con"),
                            React.createElement("div", { className: "meter-bars" },
                                React.createElement("div", { className: `meter-filled ${getColorClass(95)}`, style: { width: '95%' } })),
                            React.createElement("div", { className: "meter-value" },
                                temperatureData.nonAirCon.value,
                                "\u00B0C")),
                        React.createElement("div", { className: "circle-charts" },
                            React.createElement("div", { className: "circle-chart" },
                                React.createElement("div", { className: "chart-percentage" },
                                    temperatureData.airCon.rooms,
                                    "%"),
                                React.createElement("div", { className: "chart-label" }, "Rooms"),
                                React.createElement("div", { className: "chart-range" }, temperatureData.airCon.range),
                                React.createElement("div", { className: "chart-type" }, "Air Con"),
                                React.createElement("div", { className: "chart-change" },
                                    React.createElement("i", { className: `fas fa-arrow-${temperatureData.airCon.change < 0 ? 'down' : 'up'}` }),
                                    Math.abs(temperatureData.airCon.change),
                                    "%")),
                            React.createElement("div", { className: "circle-chart" },
                                React.createElement("div", { className: "chart-percentage" },
                                    temperatureData.chiller.rooms,
                                    "%"),
                                React.createElement("div", { className: "chart-label" }, "Rooms"),
                                React.createElement("div", { className: "chart-range" }, temperatureData.chiller.range),
                                React.createElement("div", { className: "chart-type" }, "Chiller"),
                                React.createElement("div", { className: "chart-change" },
                                    React.createElement("i", { className: `fas fa-arrow-${temperatureData.chiller.change < 0 ? 'down' : 'up'}` }),
                                    Math.abs(temperatureData.chiller.change),
                                    "%")),
                            React.createElement("div", { className: "circle-chart" },
                                React.createElement("div", { className: "chart-percentage" },
                                    temperatureData.nonAirCon.rooms,
                                    "%"),
                                React.createElement("div", { className: "chart-label" }, "Rooms"),
                                React.createElement("div", { className: "chart-range" }, temperatureData.nonAirCon.range),
                                React.createElement("div", { className: "chart-type" }, "Non-Air Con"),
                                React.createElement("div", { className: "chart-change" },
                                    React.createElement("i", { className: `fas fa-arrow-${temperatureData.nonAirCon.change < 0 ? 'down' : 'up'}` }),
                                    Math.abs(temperatureData.nonAirCon.change),
                                    "%"))),
                        React.createElement("div", { className: "comparison-label" }, "COMPARISON AGAINST PREVIOUS HOUR")))),
            React.createElement("div", { className: "widget-section humidity-section" },
                React.createElement("div", { className: "widget-section-title" },
                    React.createElement("div", { className: "section-line" }),
                    React.createElement("span", null,
                        "IAQ LEVEL SUMMARY - ",
                        buildingName),
                    React.createElement("div", { className: "section-line" })),
                React.createElement("div", { className: "humidity-widget" },
                    React.createElement("div", { className: "widget-header" },
                        React.createElement("h3", { className: "widget-title" }, "HUMIDITY"),
                        React.createElement("div", { className: "widget-icon humidity-icon" },
                            React.createElement("i", { className: "fas fa-tint" }))),
                    React.createElement("div", { className: "humidity-grid" },
                        React.createElement("div", { className: "humidity-visual" },
                            React.createElement("div", { className: "humidity-bars-container" },
                                React.createElement("div", { className: `humidity-percentage-bar ${getColorClass(humidityData.airCon.value)}`, style: { height: `${humidityData.airCon.value}%` } },
                                    React.createElement("span", { className: "humidity-value" },
                                        humidityData.airCon.value,
                                        "%")),
                                React.createElement("div", { className: "humidity-label" }, "Air Con")),
                            React.createElement("div", { className: "humidity-bars-container" },
                                React.createElement("div", { className: `humidity-percentage-bar ${getColorClass(humidityData.chiller.value)}`, style: { height: `${humidityData.chiller.value}%` } },
                                    React.createElement("span", { className: "humidity-value" },
                                        humidityData.chiller.value,
                                        "%")),
                                React.createElement("div", { className: "humidity-label" }, "Chiller")),
                            React.createElement("div", { className: "humidity-bars-container" },
                                React.createElement("div", { className: `humidity-percentage-bar ${getColorClass(humidityData.nonAirCon.value)}`, style: { height: `${humidityData.nonAirCon.value}%` } },
                                    React.createElement("span", { className: "humidity-value" },
                                        humidityData.nonAirCon.value,
                                        "%")),
                                React.createElement("div", { className: "humidity-label" }, "Non-Air Con"))),
                        React.createElement("div", { className: "circle-charts" },
                            React.createElement("div", { className: "circle-chart humidity-chart" },
                                React.createElement("div", { className: "chart-percentage" },
                                    humidityData.airCon.rooms,
                                    "%"),
                                React.createElement("div", { className: "chart-label" }, "Rooms"),
                                React.createElement("div", { className: "chart-range" }, humidityData.airCon.range),
                                React.createElement("div", { className: "chart-type" }, "Air Con"),
                                React.createElement("div", { className: "chart-change" },
                                    React.createElement("i", { className: `fas fa-arrow-${humidityData.airCon.change < 0 ? 'down' : 'up'}` }),
                                    Math.abs(humidityData.airCon.change),
                                    "%")),
                            React.createElement("div", { className: "circle-chart humidity-chart" },
                                React.createElement("div", { className: "chart-percentage" },
                                    humidityData.chiller.rooms,
                                    "%"),
                                React.createElement("div", { className: "chart-label" }, "Rooms"),
                                React.createElement("div", { className: "chart-range" }, humidityData.chiller.range),
                                React.createElement("div", { className: "chart-type" }, "Chiller"),
                                React.createElement("div", { className: "chart-change" },
                                    React.createElement("i", { className: `fas fa-arrow-${humidityData.chiller.change < 0 ? 'down' : 'up'}` }),
                                    Math.abs(humidityData.chiller.change),
                                    "%")),
                            React.createElement("div", { className: "circle-chart humidity-chart" },
                                React.createElement("div", { className: "chart-percentage" },
                                    humidityData.nonAirCon.rooms,
                                    "%"),
                                React.createElement("div", { className: "chart-label" }, "Rooms"),
                                React.createElement("div", { className: "chart-range" }, humidityData.nonAirCon.range),
                                React.createElement("div", { className: "chart-type" }, "Non-Air Con"),
                                React.createElement("div", { className: "chart-change" },
                                    React.createElement("i", { className: `fas fa-arrow-${humidityData.nonAirCon.change < 0 ? 'down' : 'up'}` }),
                                    Math.abs(humidityData.nonAirCon.change),
                                    "%"))),
                        React.createElement("div", { className: "comparison-label" }, "COMPARISON AGAINST PREVIOUS HOUR")))),
            React.createElement("div", { className: "widget-section distribution-section" },
                React.createElement("div", { className: "widget-section-title" },
                    React.createElement("div", { className: "section-line" }),
                    React.createElement("span", null,
                        "CATEGORY WISE TEMPERATURE DISTRIBUTION - ",
                        buildingName),
                    React.createElement("div", { className: "section-line" })),
                React.createElement("div", { className: "distribution-widget" },
                    React.createElement("div", { className: "widget-header" },
                        React.createElement("h3", { className: "widget-title" }, "TEMPERATURE DISTRIBUTION"),
                        React.createElement("div", { className: "widget-icon distribution-icon" },
                            React.createElement("i", { className: "fas fa-chart-line" }))),
                    React.createElement("div", { className: "time-range" }, "From 6/10/2025, 12:00:00 AM- To 6/10/2025, 11:33:55 PM- [Day]"),
                    React.createElement("div", { className: "chart-container" },
                        React.createElement("div", { className: "chart-grid" },
                            React.createElement("div", { className: "chart-grid-line" }),
                            React.createElement("div", { className: "chart-grid-line" }),
                            React.createElement("div", { className: "chart-grid-line" }),
                            React.createElement("div", { className: "chart-grid-line" }),
                            React.createElement("div", { className: "chart-grid-line" }),
                            React.createElement("div", { className: "chart-grid-line" })),
                        React.createElement("div", { className: "chart-y-axis" },
                            React.createElement("div", null, "30\u00B0C"),
                            React.createElement("div", null, "25\u00B0C"),
                            React.createElement("div", null, "20\u00B0C"),
                            React.createElement("div", null, "15\u00B0C"),
                            React.createElement("div", null, "10\u00B0C")),
                        React.createElement("div", { className: "chart-x-axis" },
                            React.createElement("div", null, "00:00"),
                            React.createElement("div", null, "03:00"),
                            React.createElement("div", null, "06:00"),
                            React.createElement("div", null, "09:00"),
                            React.createElement("div", null, "12:00"),
                            React.createElement("div", null, "15:00"),
                            React.createElement("div", null, "18:00"),
                            React.createElement("div", null, "21:00"),
                            React.createElement("div", null, "23:00")),
                        React.createElement("div", { className: "temp-line" },
                            React.createElement("div", { className: "temp-point", style: { left: '0%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '12.5%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '25%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '37.5%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '50%', top: '2px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '62.5%', top: '2px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '75%', top: '2px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '87.5%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point", style: { left: '100%', top: '0px' } })),
                        React.createElement("div", { className: "temp-line temp-line-2" },
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '0%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '12.5%', top: '-2px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '25%', top: '2px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '37.5%', top: '1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '50%', top: '-1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '62.5%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '75%', top: '1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '87.5%', top: '-1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-2", style: { left: '100%', top: '0px' } })),
                        React.createElement("div", { className: "temp-line temp-line-3" },
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '0%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '12.5%', top: '1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '25%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '37.5%', top: '-1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '50%', top: '1px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '62.5%', top: '2px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '75%', top: '0px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '87.5%', top: '-2px' } }),
                            React.createElement("div", { className: "temp-point temp-point-3", style: { left: '100%', top: '0px' } })),
                        React.createElement("div", { className: "chart-legend" },
                            React.createElement("div", { className: "legend-item" },
                                React.createElement("div", { className: "legend-color legend-color-1" }),
                                React.createElement("div", null, "Non-AIRCON - Temperature")),
                            React.createElement("div", { className: "legend-item" },
                                React.createElement("div", { className: "legend-color legend-color-2" }),
                                React.createElement("div", null, "AIRCON - Temperature")),
                            React.createElement("div", { className: "legend-item" },
                                React.createElement("div", { className: "legend-color legend-color-3" }),
                                React.createElement("div", null, "Chiller - Temperature")))))))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "comforty",
    widget: ComfortyWidget,
    configs: {
        layout: {
            w: 12,
            h: 24,
            minH: 12,
            minW: 6
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "comforty",
    label: "Comforty",
    // click: () => alert("Hello"),
    component: ComfortyWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"comforty",
   component: ComfortyWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "comforty", // use all lowercase letters
    name: 'Comforty',
    description: 'Tempalte Description',
    template: ComfortyWidget,
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