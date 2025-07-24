/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"2397e5a6-d59e-4bdd-9cbd-2754bd9d3949","author":"SSI","widgets":[{"id":"EUI_right_panel","name":"EUI_right_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EnergyCostSavings/CostSavings.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EnergyCostSavings/CostSavings.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ":root {\n  --glass-bg: rgba(255, 255, 255, 0.08);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);\n  --glass-green: rgba(61, 245, 123, 0.18);\n  --glass-yellow: rgba(255, 214, 0, 0.18);\n  --glass-red: rgba(255, 76, 76, 0.18);\n  --apple-glass: rgba(255, 255, 255, 0.1);\n  --apple-border: rgba(255, 255, 255, 0.2);\n  --apple-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --bg-color: rgba(20, 20, 20, 0.15);\n  --text-color: #fff;\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --good-color: #4caf50;\n  --warning-color: #ff9800;\n  --danger-color: #f44336;\n  --neutral-color: #64b5f6;\n  --text-primary: rgba(255, 255, 255, 0.95);\n  --text-secondary: rgba(255, 255, 255, 0.85);\n  --text-tertiary: rgba(255, 255, 255, 0.75);\n}\n\n.cost-widget {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.cost-widget .cost-glass-bg {\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 24px 16px;\n  width: 100%;\n  min-height: 400px;\n  color: #fff;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.cost-widget .cost-widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.cost-widget .cost-widget-header .cost-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cost-widget .cost-widget-header .cost-header-left .cost-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  color: var(--neutral-color);\n  padding: 6px;\n  background: rgba(100, 181, 246, 0.1);\n  border-radius: 8px;\n  border: 1px solid rgba(100, 181, 246, 0.2);\n}\n.cost-widget .cost-widget-header .cost-header-left .cost-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.cost-widget .cost-widget-header .cost-header-left .cost-widget-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.cost-widget .cost-widget-header .cost-header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cost-widget .cost-widget-header .cost-header-right .cost-year-badge {\n  background: rgba(255, 255, 255, 0.15);\n  color: var(--text-primary);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  border: 1px solid var(--glass-border);\n  backdrop-filter: blur(10px);\n}\n.cost-widget .cost-widget-header .cost-header-right .cost-compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.cost-widget .cost-widget-header .cost-header-right .cost-compare-btn:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);\n}\n.cost-widget .cost-widget-header .cost-header-right .cost-compare-btn:active {\n  transform: translateY(0);\n}\n.cost-widget .cost-widget-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.cost-widget .cost-stats-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cost-widget .cost-stats-section .cost-main-stat {\n  text-align: center;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-value {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-value .cost-number {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  background-clip: text;\n  letter-spacing: 0.02em;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-value .cost-unit {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 600;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label .cost-tooltip-wrapper {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label .cost-tooltip-wrapper .cost-info-icon {\n  margin-left: 4px;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label .cost-tooltip-wrapper .cost-info-icon:hover {\n  opacity: 1;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label .cost-tooltip-wrapper .cost-tooltip-content {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.85);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 0.95rem;\n  color: #fff;\n  white-space: normal;\n  max-width: 400px;\n  word-break: break-word;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  font-weight: normal;\n  text-align: center;\n  margin-bottom: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  width: max-content;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label .cost-tooltip-wrapper .cost-tooltip-content::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 5px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;\n}\n.cost-widget .cost-stats-section .cost-main-stat .cost-stat-label .cost-tooltip-wrapper:hover .cost-tooltip-content {\n  opacity: 1;\n  visibility: visible;\n}\n.cost-widget .cost-chart-container {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 16px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.cost-widget .cost-chart-container .cost-chart-header {\n  margin-bottom: 16px;\n}\n.cost-widget .cost-chart-container .cost-chart-header .cost-chart-para {\n  font-size: 1.3rem;\n  color: #fff;\n  margin: 0;\n  line-height: 1.4;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.cost-widget .cost-chart-container .cost-chart-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #fff;\n  margin: 0 0 8px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.cost-widget .cost-bottom-stats {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  margin: 16px 0;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  padding: 16px 24px;\n  text-align: center;\n  flex: 0 1 auto;\n  min-width: 160px;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number .cost-tooltip-wrapper {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number .cost-tooltip-wrapper .cost-info-icon {\n  width: 14px;\n  height: 14px;\n  opacity: 0.8;\n  transition: opacity 0.2s ease;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number .cost-tooltip-wrapper .cost-info-icon:hover {\n  opacity: 1;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number .cost-tooltip-wrapper .cost-tooltip-content {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 0.95rem;\n  color: #fff;\n  white-space: normal;\n  max-width: 300px;\n  word-break: break-word;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  font-weight: normal;\n  text-align: center;\n  margin-bottom: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  width: max-content;\n  max-width: 300px;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number .cost-tooltip-wrapper .cost-tooltip-content::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 5px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-number .cost-tooltip-wrapper:hover .cost-tooltip-content {\n  opacity: 1;\n  visibility: visible;\n}\n.cost-widget .cost-bottom-stats .cost-stat-card .cost-stat-label {\n  font-size: 1.4rem;\n  color: #fff;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.cost-advanced-comparison {\n  margin-top: 20px;\n}\n.cost-advanced-comparison .cost-date-range {\n  margin-bottom: 20px;\n}\n.cost-advanced-comparison .cost-date-range label {\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.modal-container.dt-cost-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.modal-container.dt-cost-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.modal-container.dt-cost-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  color: #fff !important;\n  font-size: 1.4rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.02em !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px 12px 0 0 !important;\n}\n.modal-container.dt-cost-compare-modal .modal-panel .modal-body {\n  padding: 16px !important;\n  height: 100% !important;\n  margin: 0 !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  overflow-y: auto !important;\n  border-radius: 0 0 12px 12px !important;\n}\n\n.cost-modal-glass-effect .modal-container.dt-cost-compare-modal .modal-panel {\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.cost-modal-glass-effect .modal-container.dt-cost-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  color: #fff !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n}\n.cost-modal-glass-effect .modal-container.dt-cost-compare-modal .modal-panel .modal-body {\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n}\n\n.cost-compare-content .cost-compare-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-compare-select {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  padding-right: 40px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-compare-select:focus {\n  outline: none;\n  border-color: var(--neutral-color);\n  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);\n  z-index: 1000;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-compare-select option {\n  background: rgba(20, 20, 20, 0.95) !important;\n  color: #fff !important;\n  padding: 8px 12px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: none;\n  backdrop-filter: blur(10px);\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-compare-select option:hover {\n  background: rgba(100, 181, 246, 0.2) !important;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-compare-select option:checked {\n  background: rgba(100, 181, 246, 0.3) !important;\n  color: #fff !important;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-clear-btn {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cost-compare-content .cost-compare-options .cost-compare-section .cost-select-container .cost-clear-btn:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.1);\n}\n.cost-compare-content .cost-compare-options .cost-calculate-btn {\n  background: linear-gradient(135deg, var(--neutral-color) 0%, #42a5f5 100%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cost-compare-content .cost-compare-options .cost-calculate-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(100, 181, 246, 0.3);\n}\n.cost-compare-content .cost-compare-options .cost-calculate-btn:active {\n  transform: translateY(0);\n}\n.cost-compare-content .cost-compare-options .cost-calculate-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.cost-compare-content .cost-comparison-results {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.cost-compare-content .cost-comparison-results h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main .cost-result-comparison,\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main .cost-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main .cost-result-comparison .cost-result-label,\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main .cost-result-current .cost-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main .cost-result-comparison .cost-result-value,\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-main .cost-result-current .cost-result-value {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-label {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value {\n  font-weight: 600;\n  font-size: 14px;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value-container .cost-arrow-up {\n  color: rgb(244, 67, 54);\n  font-size: 0;\n  font-weight: 900;\n  text-shadow: 0 0 8px rgba(244, 67, 54, 0.5);\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value-container .cost-arrow-up::before {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid rgb(244, 67, 54);\n  filter: drop-shadow(0 0 4px rgba(244, 67, 54, 0.5));\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value-container .cost-arrow-down {\n  color: rgb(76, 175, 80);\n  font-size: 0;\n  font-weight: 900;\n  text-shadow: 0 0 8px rgba(76, 175, 80, 0.5);\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value-container .cost-arrow-down::before {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid rgb(76, 175, 80);\n  filter: drop-shadow(0 0 4px rgba(76, 175, 80, 0.5));\n}\n.cost-compare-content .cost-comparison-results .cost-results-compact .cost-result-difference .cost-difference-item .cost-difference-value-container .cost-difference-value {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cost-legend-container {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  margin-top: 12px;\n  padding: 0 16px;\n  justify-content: center;\n}\n\n.cost-legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.cost-legend-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n.cost-legend-text {\n  font-size: 1.1rem;\n  color: #fff;\n  font-weight: 600;\n}\n\n.cost-graph-dot {\n  stroke: #fff !important;\n  stroke-width: 2px !important;\n  r: 6 !important;\n  filter: drop-shadow(0 2px 6px rgba(100, 181, 246, 0.25));\n  opacity: 1 !important;\n  z-index: 2;\n}\n\n.cost-graph-active-dot {\n  stroke: #fff !important;\n  stroke-width: 2px !important;\n  r: 8 !important;\n  fill: #64b5f6 !important;\n  filter: drop-shadow(0 4px 12px rgba(100, 181, 246, 0.35));\n  opacity: 1 !important;\n  z-index: 3;\n}\n\n@media (max-width: 768px) {\n  .cost-widget .cost-glass-bg {\n    padding: 16px 12px;\n  }\n  .cost-widget .cost-widget-header {\n    margin-bottom: 16px;\n  }\n  .cost-widget .cost-widget-header .cost-header-left .cost-icon {\n    width: 28px;\n    height: 28px;\n  }\n  .cost-widget .cost-widget-header .cost-header-left .cost-widget-title {\n    font-size: 1.3rem;\n  }\n  .cost-widget .cost-widget-header .cost-header-right .cost-year-badge {\n    font-size: 0.8rem;\n    padding: 4px 8px;\n  }\n  .cost-widget .cost-widget-header .cost-header-right .cost-compare-btn {\n    font-size: 0.8rem;\n    padding: 4px 8px;\n  }\n  .cost-widget .cost-widget-content {\n    gap: 16px;\n  }\n  .cost-widget .cost-stats-section .cost-main-stat .cost-stat-value .cost-number {\n    font-size: 2.5rem;\n  }\n  .cost-widget .cost-stats-section .cost-main-stat .cost-stat-value .cost-unit {\n    font-size: 1.3rem;\n  }\n  .cost-bottom-stats {\n    gap: 8px;\n  }\n  .cost-bottom-stats .cost-stat-card {\n    padding: 12px 8px;\n  }\n  .cost-bottom-stats .cost-stat-card .cost-stat-number {\n    font-size: 1.3rem;\n  }\n  .cost-bottom-stats .cost-stat-card .cost-stat-label {\n    font-size: 0.7rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .cost-widget .cost-glass-bg {\n    background: var(--glass-bg);\n  }\n}\n@media (prefers-contrast: high) {\n  .cost-widget .cost-glass-bg {\n    border: 2px solid var(--glass-border);\n  }\n  .cost-widget .cost-stats-section .cost-main-stat .cost-stat-value .cost-number {\n    -webkit-text-fill-color: var(--text-primary);\n    background: none;\n  }\n}\n.cost-compare-select {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: #fff;\n  font-size: 1.2rem !important;\n  font-weight: 500;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n  background-size: 16px;\n  padding-right: 32px;\n}\n.cost-compare-select option {\n  background: #1a1a1a;\n  color: #fff;\n  font-size: 1.2rem;\n  padding: 8px;\n}\n\n.costt-custom-tooltip {\n  background: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(8px);\n  border-radius: 10px;\n  padding: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 150;\n  min-width: 100px;\n  color: #fff;\n  font-size: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n\n.cost-stat-number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n\n.tooltip-value {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.cost-tooltip-wrapper {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 6px;\n  cursor: pointer;\n}\n\n.cost-info-icon {\n  color: #FFD600;\n  font-size: 1rem;\n  margin-left: 2px;\n  vertical-align: middle;\n}\n\n.cost-tooltip-wrapper .costt-custom-tooltip,\n.cost-tooltip-content {\n  position: absolute;\n  bottom: 120%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 14px;\n  color: #fff;\n  font-size: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s;\n  white-space: normal;\n  min-width: 180px;\n  max-width: 340px;\n  word-break: break-word;\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.cost-tooltip-wrapper:hover .costt-custom-tooltip,\n.cost-tooltip-wrapper:hover .cost-tooltip-content {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.cost-tooltip-wrapper.left .costt-custom-tooltip,\n.cost-tooltip-wrapper.left .cost-tooltip-content {\n  left: auto;\n  right: 0;\n  transform: none;\n}\n\n.costt-custom-tooltip .tooltip-year {\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.costt-custom-tooltip .tooltip-value {\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.costt-custom-tooltip .tooltip-threshold {\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-top: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/HVACEfficiency/HVACEfficiency.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/HVACEfficiency/HVACEfficiency.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".he-widget {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.he-widget .heFootprintWidgetRedesigned {\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 1rem 1.5rem;\n  margin-top: 20px;\n  width: 100%;\n  min-height: 400px;\n  color: #fff;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.he-widget .heFootprintWidgetRedesigned .he-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  position: relative;\n  display: flex;\n  gap: 12px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-kpi-value {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  background-clip: text;\n  letter-spacing: 0.02em;\n}\n.he-widget .heFootprintWidgetRedesigned .he-kpi-unit {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-kpi-unit-inline {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 600;\n  margin-left: 6px;\n  opacity: 1;\n  vertical-align: baseline;\n}\n.he-widget .heFootprintWidgetRedesigned .he-kpi-info {\n  color: #fff;\n  font-weight: 600;\n  margin-top: 2px;\n  font-size: 1.5rem;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 16px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-chart-header {\n  margin-bottom: 24px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-chart-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #fff;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  margin: 0 0 8px 0;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-chart-header .he-chart-description {\n  font-size: 1.3rem;\n  color: #fff;\n  margin: 0;\n  line-height: 1.4;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-legend {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  margin-top: 4px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-legend-color {\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  border-radius: 50%;\n  border: 1px solid;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-legend-threshold {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.he-widget .heFootprintWidgetRedesigned .he-chart-container .he-legend-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #fff;\n}\n.he-widget .heFootprintWidgetRedesigned .HVAC-custom-tooltip {\n  background: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(8px);\n  border-radius: 10px;\n  padding: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 150;\n  min-width: 100px;\n  color: #fff;\n  font-size: 14px;\n  box-shadow: \"0 4px 20px rgba(0,0,0,0.3)\";\n}\n.he-widget .heFootprintWidgetRedesigned .HVAC-custom-tooltip .tooltip-year,\n.he-widget .heFootprintWidgetRedesigned .HVAC-custom-tooltip .tooltip-value {\n  color: #fff;\n}\n@media (max-width: 600px) {\n  .he-widget .heFootprintWidgetRedesigned {\n    padding: 18px 4px 12px 4px;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-kpi-value {\n    font-size: 2rem;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-kpi-unit-inline {\n    font-size: 0.95rem;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-chart-section {\n    padding: 12px 2px 8px 2px;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-chart-section .he-chart-container {\n    height: 180px;\n  }\n}\n@media (max-width: 400px) {\n  .he-widget .heFootprintWidgetRedesigned .he-header .he-title {\n    font-size: 1.1rem;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-kpi-value {\n    font-size: 1.3rem;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-chart-section .he-chart-title {\n    font-size: 0.95rem;\n  }\n  .he-widget .heFootprintWidgetRedesigned .he-legend .he-legend-item {\n    font-size: 0.85rem;\n    padding: 5px 8px;\n  }\n}\n\n.he-has-tooltip {\n  position: relative;\n  cursor: default;\n}\n\n.he-tooltip {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 120%;\n  transform: translateX(-50%);\n  background: #222;\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 14px;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 10;\n}\n\n.he-has-tooltip:hover .he-tooltip {\n  display: block;\n}\n\n@keyframes widget-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.98) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes title-pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes stat-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes value-bounce {\n  0% {\n    transform: scale(0.9);\n  }\n  60% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes chart-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes alert-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes dot-pulse {\n  0% {\n    transform: scale(0.7);\n    opacity: 0.5;\n  }\n  60% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 700px) {\n  .heFootprintWidgetRedesigned {\n    padding: 1rem 0.3rem;\n    max-width: 99vw;\n  }\n  .he-header {\n    gap: 0.25rem;\n  }\n  .he-stats {\n    flex-direction: column;\n    gap: 0.7rem;\n    align-items: center;\n  }\n  .he-stat {\n    min-width: 90vw;\n    max-width: 99vw;\n    width: 100%;\n    margin-bottom: 0.7rem;\n  }\n  .he-chart-section {\n    padding: 0.5rem 0.1rem 0.1rem 0.1rem;\n  }\n}\n.he-compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.he-compare-btn:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);\n}\n.he-compare-btn:active {\n  transform: translateY(0);\n}\n\n.he-glass-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(30, 32, 50, 0.6);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(20px);\n}\n\n.he-glass-modal {\n  background: rgba(255, 255, 255, 0.35);\n  border-radius: 24px;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  padding: 2.5rem 2rem 2rem 2rem;\n  min-width: 370px;\n  max-width: 95vw;\n  backdrop-filter: blur(18px) saturate(180%);\n  border: 1.5px solid rgba(255, 255, 255, 0.18);\n  color: #fff;\n  position: relative;\n}\n\n.he-compare-modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.he-compare-modal-content .he-compare-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 1.2rem;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section .he-select-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section .he-select-container .he-compare-select {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  padding-right: 40px;\n  color: var(--text-primary);\n  font-size: 1.2rem;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section .he-select-container .he-compare-select:focus {\n  outline: none;\n  border-color: var(--neutral-color);\n  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);\n  z-index: 1000;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section .he-select-container .he-compare-select option {\n  background: rgba(20, 20, 20, 0.95) !important;\n  color: #fff !important;\n  padding: 8px 12px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: none;\n  backdrop-filter: blur(10px);\n  font-size: 1.2rem;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section .he-select-container .he-compare-select option:hover {\n  background: rgba(100, 181, 246, 0.2) !important;\n}\n.he-compare-modal-content .he-compare-options .he-compare-section .he-select-container .he-compare-select option:checked {\n  background: rgba(100, 181, 246, 0.3) !important;\n  color: #fff !important;\n}\n\n.he-CalculateCompare-btn {\n  background: linear-gradient(135deg, var(--neutral-color) 0%, #42a5f5 100%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.he-CalculateCompare-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(100, 181, 246, 0.3);\n}\n.he-CalculateCompare-btn:active {\n  transform: translateY(0);\n}\n.he-CalculateCompare-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.he-compare-block {\n  background: rgba(255, 255, 255, 0.18);\n  border-radius: 18px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  padding: 1.2em 1.5em;\n  min-width: 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #fff;\n  backdrop-filter: blur(8px);\n}\n\n.he-compare-label {\n  font-size: 1rem;\n  opacity: 0.8;\n  margin-bottom: 0.3em;\n}\n\n.he-compare-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n}\n\n.he-compare-percent {\n  font-size: 1.3rem;\n  font-weight: 700;\n  align-self: center;\n  margin-top: 0.5em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.he-ompare-results-better {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 2.5rem;\n  position: relative;\n  min-height: 145px;\n}\n\n.he-compare-block {\n  background: rgba(255, 255, 255, 0.18);\n  border-radius: 18px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  padding: 1.2em 1.5em;\n  min-width: 140px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #fff;\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.18);\n  transition: box-shadow 0.2s, border 0.2s;\n}\n\n.he-compare-block:hover {\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.16);\n  border: 1.5px solid rgba(255, 255, 255, 0.3333333333);\n}\n\n.he-compare-percent-badge {\n  position: absolute;\n  left: 50%;\n  align-self: flex-end;\n  transform: translateX(-50%);\n  min-width: 70px;\n  padding: 0.6em 1.4em;\n  border-radius: 999px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  z-index: 2;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  letter-spacing: 0.01em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n}\n\n.he-comparison-results {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.he-comparison-results h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.he-comparison-results .he-results-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.he-comparison-results .he-results-main .he-result-comparison,\n.he-comparison-results .he-results-main .he-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.he-comparison-results .he-results-main .he-result-comparison .he-result-label,\n.he-comparison-results .he-results-main .he-result-current .he-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.he-comparison-results .he-results-main .he-result-comparison .he-result-value,\n.he-comparison-results .he-results-main .he-result-current .he-result-value {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.he-comparison-results .he-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.he-comparison-results .he-result-difference .he-difference-item {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 12px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n}\n.he-comparison-results .he-result-difference .he-difference-item .he-difference-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.95;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n}\n.he-comparison-results .he-result-difference .he-difference-item .he-difference-value {\n  font-weight: 600;\n  font-size: 14px;\n}\n.he-comparison-results .he-result-difference .he-difference-item .he-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.he-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.he-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.he-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  color: #fff !important;\n  font-size: 1.4rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.02em !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px 12px 0 0 !important;\n}\n.he-compare-modal .modal-panel .modal-body {\n  padding: 16px !important;\n  height: 100%;\n  margin: 0 !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  overflow-y: auto !important;\n  border-radius: 0 0 12px 12px !important;\n}\n\n.he-title-icon-bg {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(33, 150, 243, 0.1);\n  border: 1px solid rgba(33, 150, 243, 0.2);\n}\n\n.he-title-icon {\n  color: #90caf9;\n}\n\n.he-kpi-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1.1rem 1.3rem 0.9rem 1.3rem;\n}\n\n.he-kpi-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.he-kpi-info-flex {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.he-has-tooltip-flex {\n  display: inline-flex;\n  align-items: center;\n}\n\n.he-tooltip-icon {\n  margin-left: 2px;\n}\n\n.he-compare-specific-day {\n  margin-bottom: 16px;\n}\n\n.he-compare-label-bold {\n  font-weight: 600;\n}\n\n.he-compare-label-margin {\n  margin-right: 8px;\n}\n\n.he-compare-advanced {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.he-compare-advanced-range1 {\n  margin-bottom: 8px;\n}\n\n.he-difference-value-diff {\n  color: #fff;\n}\n\n.he-difference-value-diff.positive {\n  color: #ff4d4f;\n}\n.he-difference-value-diff.negative {\n  color: #00e396;\n}\n\n.he-difference-value-change {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #fff;\n}\n\n.he-difference-arrow-up {\n  color: #ff4d4f;\n  font-size: 18px;\n  margin-right: 2px;\n}\n\n.he-difference-arrow-down {\n  color: #00e396;\n  font-size: 18px;\n  margin-right: 2px;\n}\n\n@media (max-width: 700px) {\n  .energy-consumption-results-compact {\n    padding: 0 2vw;\n  }\n  .energy-consumption-results-compact .energy-snapshot-result-main {\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n  }\n  .energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-comparison,\n  .energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-current {\n    min-width: 90vw;\n    max-width: 99vw;\n    width: 100%;\n    margin-bottom: 0.7rem;\n  }\n  .energy-consumption-results-compact .energy-snapshot-result-difference {\n    grid-template-columns: 1fr;\n    gap: 8px;\n    width: 100%;\n  }\n  .energy-consumption-results-compact .energy-snapshot-difference-item {\n    min-width: 90vw;\n    max-width: 99vw;\n    width: 100%;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/LightingPowerDensity/LightingPowerDensity.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/LightingPowerDensity/LightingPowerDensity.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".lp-widget {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.lp-widget .lpFootprintWidgetRedesigned {\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 1rem 1.5rem;\n  margin-top: 20px;\n  width: 100%;\n  min-height: 400px;\n  color: #fff;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  position: relative;\n  display: flex;\n  gap: 12px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-kpi-value {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  background-clip: text;\n  letter-spacing: 0.02em;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-kpi-unit {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-kpi-unit-inline {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 600;\n  margin-left: 6px;\n  opacity: 1;\n  vertical-align: baseline;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-kpi-info {\n  color: #fff;\n  font-weight: 600;\n  margin-top: 2px;\n  font-size: 1.5rem;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 16px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-chart-header {\n  margin-bottom: 24px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-chart-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #fff;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  margin: 0 0 8px 0;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-chart-header .lp-chart-description {\n  font-size: 1.3rem;\n  color: #fff;\n  margin: 0;\n  line-height: 1.4;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-legend {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  margin-top: 4px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-legend-color {\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  border-radius: 50%;\n  border: 1px solid;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-legend-threshold {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-chart-container .lp-legend-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #fff;\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-custom-tooltip {\n  background: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(8px);\n  border-radius: 10px;\n  padding: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 150;\n  min-width: 100px;\n  color: #fff;\n  font-size: 14px;\n  box-shadow: \"0 4px 20px rgba(0,0,0,0.3)\";\n}\n.lp-widget .lpFootprintWidgetRedesigned .lp-custom-tooltip .tooltip-year,\n.lp-widget .lpFootprintWidgetRedesigned .lp-custom-tooltip .tooltip-value {\n  color: #fff;\n}\n@media (max-width: 600px) {\n  .lp-widget .lpFootprintWidgetRedesigned {\n    padding: 18px 4px 12px 4px;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-kpi-value {\n    font-size: 2rem;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-kpi-unit-inline {\n    font-size: 0.95rem;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-chart-section {\n    padding: 12px 2px 8px 2px;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-chart-section .lp-chart-container {\n    height: 180px;\n  }\n}\n@media (max-width: 400px) {\n  .lp-widget .lpFootprintWidgetRedesigned .lp-header .lp-title {\n    font-size: 1.1rem;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-kpi-value {\n    font-size: 1.3rem;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-chart-section .lp-chart-title {\n    font-size: 0.95rem;\n  }\n  .lp-widget .lpFootprintWidgetRedesigned .lp-legend .lp-legend-item {\n    font-size: 0.85rem;\n    padding: 5px 8px;\n  }\n}\n\n.lp-has-tooltip {\n  position: relative;\n  cursor: default;\n}\n\n.lp-tooltip {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 120%;\n  transform: translateX(-50%);\n  background: #222;\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 14px;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 10;\n}\n\n.lp-has-tooltip:hover .lp-tooltip {\n  display: block;\n}\n\n@keyframes widget-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.98) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes title-pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes stat-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes value-bounce {\n  0% {\n    transform: scale(0.9);\n  }\n  60% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes chart-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes alert-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes dot-pulse {\n  0% {\n    transform: scale(0.7);\n    opacity: 0.5;\n  }\n  60% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 700px) {\n  .lpFootprintWidgetRedesigned {\n    padding: 1rem 0.3rem;\n    max-width: 99vw;\n  }\n  .lp-header {\n    gap: 0.25rem;\n  }\n  .lp-stats {\n    flex-direction: column;\n    gap: 0.7rem;\n    align-items: center;\n  }\n  .lp-stat {\n    min-width: 90vw;\n    max-width: 99vw;\n    width: 100%;\n    margin-bottom: 0.7rem;\n  }\n  .lp-chart-section {\n    padding: 0.5rem 0.1rem 0.1rem 0.1rem;\n  }\n}\n.lp-compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.lp-compare-btn:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);\n}\n.lp-compare-btn:active {\n  transform: translateY(0);\n}\n\n.lp-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.lp-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.lp-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  color: #fff !important;\n  font-size: 1.4rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.02em !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px 12px 0 0 !important;\n}\n.lp-compare-modal .modal-panel .modal-body {\n  padding: 16px !important;\n  height: 100% !important;\n  margin: 0 !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  overflow-y: auto !important;\n  border-radius: 0 0 12px 12px !important;\n}\n\n.lp-compare-modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.lp-compare-modal-content .lp-compare-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 1.2rem;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section .lp-select-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section .lp-select-container .lp-compare-select {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  padding-right: 40px;\n  color: var(--text-primary);\n  font-size: 1.2rem;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section .lp-select-container .lp-compare-select:focus {\n  outline: none;\n  border-color: var(--neutral-color);\n  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);\n  z-index: 1000;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section .lp-select-container .lp-compare-select option {\n  background: rgba(20, 20, 20, 0.95) !important;\n  color: #fff !important;\n  padding: 8px 12px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: none;\n  backdrop-filter: blur(10px);\n  font-size: 1.2rem;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section .lp-select-container .lp-compare-select option:hover {\n  background: rgba(100, 181, 246, 0.2) !important;\n}\n.lp-compare-modal-content .lp-compare-options .lp-compare-section .lp-select-container .lp-compare-select option:checked {\n  background: rgba(100, 181, 246, 0.3) !important;\n  color: #fff !important;\n}\n\n.lp-CalculateCompare-btn {\n  background: linear-gradient(135deg, var(--neutral-color) 0%, #42a5f5 100%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.lp-CalculateCompare-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(100, 181, 246, 0.3);\n}\n.lp-CalculateCompare-btn:active {\n  transform: translateY(0);\n}\n.lp-CalculateCompare-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.lp-comparison-results {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.lp-comparison-results h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.lp-comparison-results .lp-results-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.lp-comparison-results .lp-results-main .lp-result-comparison,\n.lp-comparison-results .lp-results-main .lp-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.lp-comparison-results .lp-results-main .lp-result-comparison .lp-result-label,\n.lp-comparison-results .lp-results-main .lp-result-current .lp-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.lp-comparison-results .lp-results-main .lp-result-comparison .lp-result-value,\n.lp-comparison-results .lp-results-main .lp-result-current .lp-result-value {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.lp-comparison-results .lp-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.lp-comparison-results .lp-result-difference .lp-difference-item {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 12px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n}\n.lp-comparison-results .lp-result-difference .lp-difference-item .lp-difference-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.95;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n}\n.lp-comparison-results .lp-result-difference .lp-difference-item .lp-difference-value {\n  font-weight: 600;\n  font-size: 14px;\n}\n.lp-comparison-results .lp-result-difference .lp-difference-item .lp-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.lp-title-icon-bg {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(33, 150, 243, 0.1);\n  border: 1px solid rgba(33, 150, 243, 0.2);\n}\n\n.lp-title-icon {\n  color: #90caf9;\n}\n\n.lp-kpi-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1.1rem 1.3rem 0.9rem 1.3rem;\n}\n\n.lp-kpi-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.lp-kpi-info-flex {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.lp-has-tooltip-flex {\n  display: inline-flex;\n  align-items: center;\n}\n\n.lp-tooltip-icon {\n  margin-left: 2px;\n}\n\n.lp-compare-specific-day {\n  margin-bottom: 16px;\n}\n\n.lp-compare-label-bold {\n  font-weight: 600;\n}\n\n.lp-compare-label-margin {\n  margin-right: 8px;\n}\n\n.lp-compare-advanced {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.lp-compare-advanced-range1 {\n  margin-bottom: 8px;\n}\n\n.lp-difference-value-diff {\n  color: #fff;\n}\n\n.lp-difference-value-diff.positive {\n  color: #ff4d4f;\n}\n.lp-difference-value-diff.negative {\n  color: #00e396;\n}\n\n.lp-difference-value-change {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #fff;\n}\n\n.lp-difference-arrow-up {\n  color: #ff4d4f;\n  font-size: 18px;\n  margin-right: 2px;\n}\n\n.lp-difference-arrow-down {\n  color: #00e396;\n  font-size: 18px;\n  margin-right: 2px;\n}", ""]);
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
exports.push([module.id, ".EUI-widgets-right-panel {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}", ""]);
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
const HVACEfficiency_1 = __importDefault(__webpack_require__(/*! ./prod/HVACEfficiency/HVACEfficiency */ "./src/prod/HVACEfficiency/HVACEfficiency.tsx"));
const LightingPowerDensity_1 = __importDefault(__webpack_require__(/*! ./prod/LightingPowerDensity/LightingPowerDensity */ "./src/prod/LightingPowerDensity/LightingPowerDensity.tsx"));
const CostSavings_1 = __importDefault(__webpack_require__(/*! ./prod/EnergyCostSavings/CostSavings */ "./src/prod/EnergyCostSavings/CostSavings.tsx"));
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const EUI_right_panelWidget = (props) => {
    return (React.createElement("div", { className: "EUI-widgets-right-panel" },
        React.createElement("div", { style: { width: "100%", height: "100%", position: "relative" } },
            React.createElement("div", { style: { width: "100%", height: "598px", position: "relative", marginBottom: "20px" } },
                React.createElement(CostSavings_1.default, { LocationKey: props.LocationKey, uxpContext: props.uxpContext })),
            React.createElement("div", { style: { width: "100%", height: "550px", position: "relative", marginBottom: "20px" } },
                React.createElement(HVACEfficiency_1.default, { LocationKey: props.LocationKey, uxpContext: props.uxpContext })),
            React.createElement("div", { style: { width: "100%", height: "500px", position: "relative" } },
                React.createElement(LightingPowerDensity_1.default, { LocationKey: props.LocationKey, uxpContext: props.uxpContext })))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "EUI_right_panel",
    widget: EUI_right_panelWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "EUI_right_panel",
    label: "EUI_right_panel",
    // click: () => alert("Hello"),
    component: EUI_right_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"EUI_right_panel",
   component: EUI_right_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "EUI_right_panel", // use all lowercase letters
    name: 'EUI_right_panel',
    description: 'Tempalte Description',
    template: EUI_right_panelWidget,
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

/***/ "./src/prod/EnergyCostSavings/CostSavings.scss":
/*!*****************************************************!*\
  !*** ./src/prod/EnergyCostSavings/CostSavings.scss ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./CostSavings.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EnergyCostSavings/CostSavings.scss");

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

/***/ "./src/prod/EnergyCostSavings/CostSavings.tsx":
/*!****************************************************!*\
  !*** ./src/prod/EnergyCostSavings/CostSavings.tsx ***!
  \****************************************************/
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
const react_1 = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// import BundleConfig from '../bundle.json';
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
__webpack_require__(/*! ./CostSavings.scss */ "./src/prod/EnergyCostSavings/CostSavings.scss");
const CostSavings = (props) => {
    const [showCompareModal, setShowCompareModal] = (0, react_1.useState)(false);
    const [compareOption, setCompareOption] = (0, react_1.useState)('week-average');
    const [comparisonResults, setComparisonResults] = (0, react_1.useState)(null);
    const [range1, setRange1] = (0, react_1.useState)({ start: null, end: null });
    const [range2, setRange2] = (0, react_1.useState)({ start: null, end: null });
    // Define mock data directly in the code
    const mockCurrentYearData = [
        { year: 2021, value: 410 },
        { year: 2022, value: 390 },
        { year: 2023, value: 370 },
        { year: 2024, value: 350 },
        { year: 2025, value: 340 }
    ];
    // Optionally, define a mock waterUsageIntensity object if needed for date-based lookups
    const mockWaterUsageIntensity = {
        '2025': {
            '01': { '1': 340, '2': 342, '3': 338, '4': 345 },
            '02': { '1': 335, '2': 337, '3': 339, '4': 341 }
        },
        '2024': {
            '01': { '1': 350, '2': 352, '3': 348, '4': 355 },
            '02': { '1': 345, '2': 347, '3': 349, '4': 351 }
        }
    };
    // Use mockCurrentYearData instead of mockData.currentYearData
    const currentData = mockCurrentYearData;
    const currentValue = currentData[currentData.length - 1].value;
    const unit = '%';
    // Calculate baseline as last year's value and target as baseline -5%
    const lastYearValue = currentData[currentData.length - 2].value; // 2024 value (410)
    const BASELINE = lastYearValue;
    const TARGET = Math.round(BASELINE * 0.95); // 5% reduction
    // Calculate sustainability metrics
    const calculateMetrics = () => {
        const currentYear = currentData[currentData.length - 1]; // 2025 data
        const previousYear = currentData[currentData.length - 2]; // 2024 data
        const yearOverYearChange = currentYear.value - previousYear.value;
        const yearOverYearPercent = ((yearOverYearChange / previousYear.value) * 100);
        const targetProgress = Math.max(0, Math.min(100, ((BASELINE - currentYear.value) / (BASELINE - TARGET)) * 100));
        return {
            yearOverYearChange,
            yearOverYearPercent,
            targetProgress,
            isImproving: yearOverYearChange < 0,
            reachedTarget: currentYear.value <= TARGET
        };
    };
    const metrics = calculateMetrics();
    // Helper function to format numbers with commas
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    // Helper function to get intensity from JSON or random value
    const getIntensityForDate = (dateStr) => {
        const date = new Date(dateStr);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString();
        // Check if data exists in mockWaterUsageIntensity
        const yearData = mockWaterUsageIntensity[year];
        if (yearData && yearData[month] && yearData[month][day]) {
            return yearData[month][day];
        }
        // Return random value if not found
        return Math.floor(Math.random() * (500 - 300 + 1)) + 300;
    };
    // Helper function to calculate intensity for a date range
    const calculateIntensityForRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let totalIntensity = 0;
        let dayCount = 0;
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            totalIntensity += getIntensityForDate(dateStr);
            dayCount++;
        }
        return Math.round(totalIntensity / dayCount); // Return average for intensity
    };
    // Helper function to calculate year-to-date average for a given year
    const calculateYearToDateAverage = (year) => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        // If comparing with current year, use up to today
        // If comparing with past year, use up to same date in that year
        const endMonth = year === currentYear ? currentMonth : currentMonth;
        const endDay = year === currentYear ? currentDay : currentDay;
        const startDate = new Date(year, 0, 1); // January 1st of the year
        const endDate = new Date(year, endMonth - 1, endDay); // Up to today's date in that year
        return calculateIntensityForRange(startDate, endDate);
    };
    // Helper function to get comparison data
    const getComparisonData = () => {
        const currentYear = new Date().getFullYear();
        let currentPeriodIntensity = currentValue; // Current year's intensity
        let comparisonPeriodIntensity = 0;
        let comparisonLabel = '';
        switch (compareOption) {
            case 'week-average':
                comparisonLabel = 'Last Week Cost';
                break;
            case 'month-average':
                comparisonLabel = 'Last Month Average Weekly Cost';
                break;
            case 'quarter-average':
                comparisonLabel = 'Last Quarter Average Weekly Cost';
                break;
            case 'yearly-average':
                comparisonLabel = 'This Yearly Average Weekly Cost';
                break;
            case 'advanced-comparison':
                if (range1.start && range1.end && range2.start && range2.end) {
                    const period1Intensity = calculateIntensityForRange(range1.start, range1.end);
                    const period2Intensity = calculateIntensityForRange(range2.start, range2.end);
                    currentPeriodIntensity = period2Intensity; // Current period is now on the right
                    comparisonPeriodIntensity = period1Intensity; // Comparison period is now on the left
                    comparisonLabel = `${range1.start.toLocaleDateString()} to ${range1.end.toLocaleDateString()}`;
                }
                break;
        }
        const absoluteDifference = currentPeriodIntensity - comparisonPeriodIntensity;
        const percentageChange = comparisonPeriodIntensity > 0
            ? ((absoluteDifference / comparisonPeriodIntensity) * 100)
            : 0;
        return {
            currentPeriodIntensity,
            comparisonPeriodIntensity,
            absoluteDifference,
            percentageChange,
            comparisonLabel
        };
    };
    // Comparison filter options
    const filterOptions = [
        { value: 'week-average', label: 'Last Week Cost', mockKey: 'week-average' },
        { value: 'month-average', label: 'Last Month Average Weekly Cost', mockKey: 'month-average' },
        { value: 'quarter-average', label: 'Last Quarter Average Weekly Cost', mockKey: 'quarter-average' },
        { value: 'yearly-average', label: 'This Yearly Average Weekly Cost', mockKey: 'yearly-average' },
    ];
    // Mock values for each comparison type
    const mockHistoricalAverages = {
        'week-average': 410,
        'month-average': 420,
        'quarter-average': 415,
        'yearly-average': 430,
    };
    // Calculate and set comparison result
    function calculateComparison(type, advRange1, advRange2) {
        var _a;
        const activeCompareType = type || compareOption;
        let selected, current;
        if (activeCompareType !== 'advanced-comparison') {
            const opt = filterOptions.find(o => o.value === activeCompareType);
            selected = {
                label: opt ? opt.label : activeCompareType,
                value: (_a = mockHistoricalAverages[activeCompareType]) !== null && _a !== void 0 ? _a : 0,
                unit: unit,
            };
            current = {
                label: 'Current Week',
                value: currentValue,
                unit: unit,
            };
        }
        else {
            const actualRange1 = advRange1 || range1;
            const actualRange2 = advRange2 || range2;
            if (!actualRange1.start || !actualRange1.end || !actualRange2.start || !actualRange2.end) {
                setComparisonResults({ error: 'Please select valid start and end dates for both ranges.' });
                return;
            }
            selected = {
                label: `${actualRange1.start.toLocaleDateString()} to ${actualRange1.end.toLocaleDateString()}`,
                value: calculateIntensityForRange(actualRange1.start, actualRange1.end),
                unit: unit,
            };
            current = {
                label: `${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
                value: calculateIntensityForRange(actualRange2.start, actualRange2.end),
                unit: unit,
            };
        }
        const percentChange = selected && current && selected.value !== 0
            ? (((current.value - selected.value) / selected.value) * 100).toFixed(1)
            : '0.0';
        setComparisonResults({ selected, current, percentChange, error: undefined });
    }
    // Handle comparison calculation
    const handleCompare = () => {
        if (!compareOption) {
            setComparisonResults(null);
            return;
        }
        calculateComparison(compareOption);
    };
    // Clear comparison
    const clearComparison = () => {
        setCompareOption('');
        setComparisonResults(null);
        setRange1({ start: null, end: null });
        setRange2({ start: null, end: null });
    };
    // Replace CustomTooltip with the following:
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const value = payload[0].value;
            const diff = value - targetCost;
            const percent = ((diff / targetCost) * 100);
            const isBetter = value < targetCost;
            const color = isBetter ? '#4CAF50' : '#FF4444';
            const arrow = isBetter ? '▼' : '▲';
            return (React.createElement("div", { className: "costt-custom-tooltip" },
                React.createElement("div", { className: "tooltip-year" }, label),
                React.createElement("div", { className: "tooltip-value" },
                    "$ ",
                    value.toFixed(2)),
                React.createElement("div", { className: "tooltip-threshold" },
                    "Target Cost: $ ",
                    targetCost.toFixed(2)),
                React.createElement("div", { style: { color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 } },
                    arrow,
                    " $ ",
                    Math.abs(diff).toFixed(2),
                    " (",
                    Math.abs(percent).toFixed(1),
                    "%) vs Target")));
        }
        return null;
    };
    // Custom dot for chart with enhanced styling
    const renderDot = (props) => {
        const { cx, cy } = props;
        return (React.createElement("g", null,
            React.createElement("circle", { cx: cx, cy: cy, r: 6, fill: "#64b5f6", stroke: "#fff", strokeWidth: 2, className: "cost-graph-dot" })));
    };
    // Custom active dot for chart
    const renderActiveDot = (props) => {
        const { cx, cy } = props;
        return (React.createElement("g", null,
            React.createElement("circle", { cx: cx, cy: cy, r: 8, fill: "#64b5f6", stroke: "#fff", strokeWidth: 2, className: "cost-graph-active-dot" })));
    };
    // MOCK DATA for current month (no API calls)
    const targetCost = 500;
    // Update weekData to include WK5
    const weekData = [
        { week: 'Week 1', actual: 400 },
        { week: 'Week 2', actual: 420 },
        { week: 'Week 3', actual: 410 },
        { week: 'Week 4', actual: 430 },
        { week: 'Week 5', actual: 415 }
    ];
    // Prepare chart data
    const currentMonthWeekwiseData = weekData.map(w => ({ week: w.week, value: w.actual }));
    // Calculate stats (average for the month)
    const totalActual = weekData.reduce((sum, w) => sum + w.actual, 0);
    const avgActual = totalActual / weekData.length;
    const avgCostSavingPercent = ((targetCost - avgActual) / targetCost) * 100;
    const avgAbsoluteSaving = targetCost - avgActual;
    // Show result for the selected option when the modal is opened or compareOption changes
    (0, react_1.useEffect)(() => {
        if (showCompareModal && compareOption !== 'advanced-comparison') {
            calculateComparison(compareOption);
        }
    }, [showCompareModal, compareOption]);
    return (React.createElement("div", { className: "cost-widget" },
        React.createElement("div", { className: "cost-glass-bg" },
            React.createElement("div", { className: "cost-widget-header" },
                React.createElement("div", { className: "cost-header-left" },
                    React.createElement("div", { className: "cost-icon" },
                        React.createElement("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHTklEQVR4nO1baYwURRQuDzQoHhy7897sAoqgiDEmGqMinvFAiQmJmigerCEommCCougff3jEIxoFUbwRRQ2g8YxKQJedV727ympMNCqK/FCMYAIsKsd2FZR53TUHw85MT0/X7Br3S/rPpKbfq1ev3t1CDGAAA3ANQzhKZXCqkni/lrhcE6zWEruUxF+Ch/B7LbFTE65QhI9pgukmkz5e/FdhjDjQJ5ykCOYrgt+0RBPnUYSblYSXFaWvMN9NOKQszY7GlBXizfXbaRFM57AjNeG9imBjwSb2aglfKYnPaIkz/QyebdY0jTOtDUNy/2ttGMK/sdB4A0riQk3wdfjf3Hs2KcIHTWdTs+gFSuIlwVqCT0W9YWjUUCXxASVhW27ThJ9rmWoxXqox9nv5VL30TVrimqwwlIRdSsKTxe9VHl7aJwJQEq5UEv+wzO1WhM8a2XBc0nT4nUric4qgxwq5W0uYZYw4oE8EYII7B+9mT1wRLjbtzU3O6balRyqCpbnrQdjG16KuAuihplOUhF/tqa/zPThX1BlKpi5QhOtDHvBPRfBoXQSgMjBZEW63xukd0zr6aNFHMHL4EYrgrX28h0sBaMJpinBPaORgrqgzTHvzMN4gxxCFj5KonAtAEVymCP2AGMF00QfoodRJfADlYwdYmjhh30tPVAQ77MnfGNNw/V4x8JGoNeG8su/qSB3jE55W6jFdeFhNmy2G+SI9PB/YwB0iBpTEx6uI/p4Q/QlK4jJr7d+M838+EUWwJeLm9xoPx4v+Ak0w3W7+J7MydXisd0iYFTn+J1gp+gtM4GJwMxuduH6eozSb6UVTfy81RfQXqDB1ZbVcHPsdhBdXcffXcxbpwHvN14T3VB3mKol/K4KdpbKvKNASP4ye/sYzsOVgusSgrPcyHXBi5D8qCQ9bt7QwNvH25rGVfHaB+/vHVURp03C2Yy9FY3y5OIjdHjNvqHFMfMLwVBXqv0g4gs0iNafRpmvoUZUZz8Bkq5KrajSg3VEF0NPeeLJwCFuCM1xbqLhYSXgjZCzVEpugxNnRXR9+xt6CiyrBk4EG1rzg8XB8QZQ3SVH6Io4qq+cn1RIpTzCh2wpcHzMSZ/NsyTlFjm78qns49a2ap/bmYWESBzvNx2MPLb1Qpk+wp7JWxISScLmrzdtTfC8OXzZzNIpS55deRDijVuuvJX7i7PQJtpi2ERiHL64j2qt9V0WXoQlnxCHCd7awkpv4k8FrRUzY4iof7pLSiwje50V+Bs6LQyQoZztTfVwhaoCfSZ1h39VZRgC4lhdxzl0tAfaxHD26UX3cFNco5/gjHGU1YEPJRcoWLSIFDEXQEuY4u/sZnFrL5gMBtDcPtsL8q5wAtoQCEIOqJcAps5PNS3xNJAB28eH7YHfpTRBuiisArs8nr/qwMakcoUAAu0ouUraRGecKxIEiWFDm3u/lsDwpWgVXYHtFNTY1JEGRGeKky7bUSqj+84nS82C01aqfSy7SBCsrRksJQXmpC8tsfgMnVEnS86nxzPD9IEszJeFpy8TMJIn3SovghRKqv8fFAeQDIXi5YhanHObnDB52KFUp5hKWC5pcbq9YefJ5QCFc9I0LJnLMeKkpvas+rEu8sVEU5PkSzym5yLSKg3nIIaihyZFp4QiK8PVe7r32ZfoshwMcmiPVii5eE64ImCK4xQkz7c2DORrr5fQfEY77G1rCB5GNhSbwXDCjPLhqP/Un/LZsoaJG2I4y05kWtZ63na8Bd2OTZwbfLrL6fk8bniocgWOanPpH7W4pW9FVEl91MNCwc18NgPuEQwSNkdC7LIjO6JqmcXYQwk/SKusM3FCk/l1x8o6oYEPOPQfWgKqjW004j6WWncJKAprwowKjt9vFFSuEInix1vZewnMG6Bec/t3CIdilBnefYEc9ptcqgsPrvNUHj5Mh4Qihq4UfreWvrjHqCuHkaGCMdrgehOY+oBV2h0tBR4ZpbYBg/idkarZwiFw+I2EbG/PEVcsvN6DUljq21/9lYELQKSZY7WIGIAvtpa+xPl8nWUzJIZj1L1+95ZbaBNELuD/PAhSOoAmuDsb4wun0W90QkSALkhdVPLDIXaG+mBzVHt6en0WAOe4IybwArBCW8TcCoo/AoS0XOHIH4iiB208AiuAhJWFrtsbG5S1RZwR+nuAHe/W6uSnrnKi2Agi++qDGMZrwy1wFV+IS7r645oGbo+zm8uPy4JUyvk4FIGxlVxPcyb7dakMPN1i5zZ40bd4kh+bZZCqoKRDM5SKOqBd0kQDyzKVHBqdip7btTPFq7jLX0tMzrThCS7ieq9VZIxdaenjFZcWqsgC89MTSWSR/KZafDwoDoOCjqYVcbOGhS47NC5svbEhZiGFNMtViGyadBcFTENhw1TpO4zZRd6MltlbqHPFXYFx94eIHp6PVtsQK4opuW0C5zmUM4RR8R30PTre+ehFfDbbe3BWy1ntr8AQjtbAqSGEzcBs3Mup6vwcwAPG/xL/strSEGpYxlQAAAABJRU5ErkJggg==", alt: "cheap-2", width: 24, height: 24, style: { verticalAlign: 'middle' } })),
                    React.createElement("h2", { className: "cost-widget-title" }, "Energy Cost Savings")),
                React.createElement("div", { className: "cost-header-right" },
                    React.createElement("button", { className: "cost-compare-btn", onClick: () => setShowCompareModal(!showCompareModal) }, "Compare"))),
            React.createElement("div", { className: "cost-widget-content" },
                React.createElement("div", { className: "cost-bottom-stats" },
                    React.createElement("div", { className: "cost-stat-card" },
                        React.createElement("div", { className: "cost-stat-label" },
                            `Weekly Cost Savings of `,
                            React.createElement("span", { style: { color: avgCostSavingPercent >= 0 ? 'rgb(76, 175, 80)' : 'rgb(244, 67, 54)' } },
                                avgCostSavingPercent.toFixed(1),
                                "%"),
                            ` Compared to Weekly Budget`,
                            React.createElement("div", null,
                                React.createElement("span", { className: "cost-tooltip-wrapper" },
                                    React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", className: "he-tooltip-icon", xmlns: "http://www.w3.org/2000/svg" },
                                        React.createElement("circle", { cx: "10", cy: "10", r: "9", stroke: "#D1D5DB", strokeWidth: "2", fill: "none" }),
                                        React.createElement("rect", { x: "9", y: "8", width: "2", height: "6", rx: "1", fill: "#D1D5DB" }),
                                        React.createElement("rect", { x: "9", y: "5", width: "2", height: "2", rx: "1", fill: "#D1D5DB" })),
                                    React.createElement("span", { className: "costt-custom-tooltip" },
                                        React.createElement("div", { className: "tooltip-value" }, "Cost Savings % = (Target cost \u2013 Actual cost )/target *100"),
                                        React.createElement("div", { className: "tooltip-threshold" }, "Target Cost till date = Weekly cost / 7 * Till day")))))),
                    React.createElement("div", { className: "cost-stat-card" },
                        React.createElement("div", { className: "cost-stat-label" },
                            `Absolute Saving of `,
                            React.createElement("span", { style: { color: avgAbsoluteSaving >= 0 ? 'rgb(76, 175, 80)' : 'rgb(244, 67, 54)' } },
                                "SGD ",
                                avgAbsoluteSaving.toFixed(0)),
                            ` Compared to Weekly Budget`,
                            React.createElement("div", null,
                                React.createElement("span", { className: "cost-tooltip-wrapper left" },
                                    React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", className: "he-tooltip-icon", xmlns: "http://www.w3.org/2000/svg" },
                                        React.createElement("circle", { cx: "10", cy: "10", r: "9", stroke: "#D1D5DB", strokeWidth: "2", fill: "none" }),
                                        React.createElement("rect", { x: "9", y: "8", width: "2", height: "6", rx: "1", fill: "#D1D5DB" }),
                                        React.createElement("rect", { x: "9", y: "5", width: "2", height: "2", rx: "1", fill: "#D1D5DB" })),
                                    React.createElement("span", { className: "costt-custom-tooltip" },
                                        React.createElement("div", { className: "tooltip-value" }, "Absolute saving = Target cost \u2013 actual cost"),
                                        React.createElement("div", { className: "tooltip-threshold" }, "Target Cost till date = Weekly cost / 7 * Till day"))))))),
                React.createElement("div", { className: "cost-chart-container" },
                    React.createElement("div", { className: "cost-chart-header" },
                        React.createElement("h3", null, "Weekly Trend"),
                        React.createElement("p", { className: "cost-chart-para" }, "Hover over lines to see detailed information")),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 180 },
                        React.createElement(recharts_1.LineChart, { data: currentMonthWeekwiseData, margin: { top: 20, right: 10, left: -20, bottom: 5 } },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "week", stroke: "rgba(255,255,255,0.8)", tick: { fill: 'rgba(255,255,255,0.8)', fontSize: 12 }, axisLine: { stroke: 'rgba(255,255,255,0.3)' } }),
                            React.createElement(recharts_1.YAxis, { stroke: "rgba(255,255,255,0.8)", tick: { fill: 'rgba(255,255,255,0.8)', fontSize: 12 }, axisLine: { stroke: 'rgba(255,255,255,0.3)' }, label: { value: '$', angle: -90, position: 'insideLeft', fill: '#fff', fontSize: '1.1rem', fontWeight: 600, dy: -10 } }),
                            React.createElement(recharts_1.Tooltip, { content: React.createElement(CustomTooltip, null), cursor: false }),
                            React.createElement(recharts_1.ReferenceLine, { y: targetCost, stroke: "#4CAF50", strokeDasharray: "5 5", strokeWidth: 2 }),
                            React.createElement(recharts_1.Line, { type: "monotone", dataKey: "value", stroke: "#64b5f6", strokeWidth: 3, dot: renderDot, activeDot: renderActiveDot, isAnimationActive: false }))),
                    React.createElement("div", { className: "cost-legend-container" },
                        React.createElement("div", { className: "cost-legend-item" },
                            React.createElement("div", { className: "cost-legend-dot", style: { backgroundColor: 'rgb(76, 175, 80)' } }),
                            React.createElement("span", { className: "cost-legend-text" }, "Target")))))),
        React.createElement(components_1.Modal, { show: showCompareModal, onOpen: () => { }, onClose: () => setShowCompareModal(false), title: "Compare Cost Savings", className: "dt-cost-compare-modal" },
            React.createElement("div", { className: "cost-compare-content" },
                React.createElement("div", { className: "cost-compare-options" },
                    React.createElement("div", { className: "cost-compare-section" },
                        React.createElement("label", null, "This Week Weekly Cost Comparison With "),
                        React.createElement("div", { className: "cost-select-container" },
                            React.createElement("select", { value: compareOption, onChange: (e) => {
                                    setCompareOption(e.target.value);
                                    setComparisonResults(null);
                                    setRange1({ start: null, end: null });
                                    setRange2({ start: null, end: null });
                                    if (e.target.value !== 'advanced-comparison') {
                                        setTimeout(() => calculateComparison(e.target.value), 0);
                                    }
                                }, className: "cost-compare-select" },
                                filterOptions.map(opt => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))),
                                React.createElement("option", { value: "advanced-comparison" }, "Advance compare")),
                            compareOption && compareOption !== "" && (React.createElement("button", { className: "cost-clear-btn", onClick: clearComparison, title: "Clear selection" }, "\u00D7")))),
                    compareOption === 'advanced-comparison' && (React.createElement("div", { className: "cost-advanced-comparison" },
                        React.createElement("div", { className: "cost-date-range" },
                            React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Range 1:"),
                            React.createElement(components_1.DateRangePicker, { title: "Select First Range", startDate: range1.start ? new Date(range1.start) : undefined, endDate: range1.end ? new Date(range1.end) : undefined, onChange: (start, end) => {
                                    setRange1({
                                        start: start ? new Date(start) : null,
                                        end: end ? new Date(end) : null,
                                    });
                                } })),
                        React.createElement("div", { className: "cost-date-range" },
                            React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Range 2:"),
                            React.createElement(components_1.DateRangePicker, { title: "Select Second Range", startDate: range2.start ? new Date(range2.start) : undefined, endDate: range2.end ? new Date(range2.end) : undefined, onChange: (start, end) => {
                                    setRange2({
                                        start: start ? new Date(start) : null,
                                        end: end ? new Date(end) : null,
                                    });
                                } })))),
                    compareOption === 'advanced-comparison' && (React.createElement("button", { className: "cost-calculate-btn", onClick: () => {
                            calculateComparison('advanced-comparison', range1, range2);
                        }, disabled: !range1.start || !range1.end || !range2.start || !range2.end }, "Compare"))),
                comparisonResults && !comparisonResults.error && comparisonResults.selected && comparisonResults.current && (React.createElement("div", { className: "cost-comparison-results" },
                    React.createElement("h4", null, "Comparison Results"),
                    React.createElement("div", { className: "cost-results-compact" },
                        React.createElement("div", { className: "cost-result-main" },
                            React.createElement("div", { className: "cost-result-comparison" },
                                React.createElement("div", { className: "cost-result-label" }, comparisonResults.selected.label),
                                React.createElement("div", { className: "cost-result-value" },
                                    formatNumber(comparisonResults.selected.value),
                                    " ",
                                    comparisonResults.selected.unit)),
                            React.createElement("div", { className: "cost-result-current" },
                                React.createElement("div", { className: "cost-result-label" }, comparisonResults.current.label),
                                React.createElement("div", { className: "cost-result-value" },
                                    formatNumber(comparisonResults.current.value),
                                    " ",
                                    comparisonResults.current.unit))),
                        React.createElement("div", { className: "cost-result-difference" },
                            React.createElement("div", { className: "cost-difference-item" },
                                React.createElement("span", { className: "cost-difference-label" }, "Difference"),
                                React.createElement("span", { className: "cost-difference-value-container" },
                                    comparisonResults.current.value - comparisonResults.selected.value < 0 ? (React.createElement("span", { className: "cost-arrow-down" }, "\u2193")) : comparisonResults.current.value - comparisonResults.selected.value > 0 ? (React.createElement("span", { className: "cost-arrow-up" }, "\u2191")) : null,
                                    React.createElement("span", { className: "cost-difference-value", style: {
                                            color: comparisonResults.current.value - comparisonResults.selected.value < 0
                                                ? 'rgb(76, 175, 80)'
                                                : comparisonResults.current.value - comparisonResults.selected.value > 0
                                                    ? 'rgb(244, 67, 54)'
                                                    : '#fff'
                                        } },
                                        formatNumber(Math.abs(comparisonResults.current.value - comparisonResults.selected.value)),
                                        " ",
                                        comparisonResults.current.unit))),
                            React.createElement("div", { className: "cost-difference-item" },
                                React.createElement("span", { className: "cost-difference-label" }, "Change"),
                                React.createElement("span", { className: "cost-difference-value-container" },
                                    parseFloat(comparisonResults.percentChange) < 0 ? (React.createElement("span", { className: "cost-arrow-down" }, "\u2193")) : parseFloat(comparisonResults.percentChange) > 0 ? (React.createElement("span", { className: "cost-arrow-up" }, "\u2191")) : null,
                                    React.createElement("span", { className: "cost-difference-value", style: {
                                            color: parseFloat(comparisonResults.percentChange) < 0
                                                ? 'rgb(76, 175, 80)'
                                                : parseFloat(comparisonResults.percentChange) > 0
                                                    ? 'rgb(244, 67, 54)'
                                                    : '#fff'
                                        } },
                                        Math.abs(parseFloat(comparisonResults.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports["default"] = CostSavings;


/***/ }),

/***/ "./src/prod/HVACEfficiency/HVACEfficiency.scss":
/*!*****************************************************!*\
  !*** ./src/prod/HVACEfficiency/HVACEfficiency.scss ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./HVACEfficiency.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/HVACEfficiency/HVACEfficiency.scss");

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

/***/ "./src/prod/HVACEfficiency/HVACEfficiency.tsx":
/*!****************************************************!*\
  !*** ./src/prod/HVACEfficiency/HVACEfficiency.tsx ***!
  \****************************************************/
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
exports.HVACEfficiencyWidget = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
__webpack_require__(/*! ./HVACEfficiency.scss */ "./src/prod/HVACEfficiency/HVACEfficiency.scss");
// import mockCarbonData from './mockCarbonData';
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// Update mock data structure to match the chart needs
const mockWeeklyEfficiency = [
    { week: "Week 1", efficiency: 0.8 },
    { week: "Week 2", efficiency: 0.9 },
    { week: "Week 3", efficiency: 1.2 },
    { week: "Week 4", efficiency: 1.25 },
    { week: "Week 5", efficiency: 0.84 },
];
// Mock historical averages for comparison
const mockHistoricalAverages = {
    last_week: 0.95,
    last_month_weekly: 1.05,
    last_quarter_weekly: 1.1,
    last_6_months_weekly: 1.0,
    last_year_weekly: 1.15,
};
// Helper to calculate average for a mock range (for Advance Compare)
function mockAverageForRange(start, end) {
    // Just return a random value between 0.8 and 1.2 for demo
    return (0.8 + Math.random() * 0.4).toFixed(2);
}
const THRESHOLD = 1.1;
// Keep existing CustomTooltip component for consistency in tooltips
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const value = payload[0].value;
        const diff = value - THRESHOLD;
        const percent = (diff / THRESHOLD) * 100;
        const isBetter = value < THRESHOLD;
        const color = isBetter ? "#4caf50" : "#ff4444";
        const arrow = isBetter ? "▼" : "▲";
        return (React.createElement("div", { className: "HVAC-custom-tooltip" },
            React.createElement("div", { className: "tooltip-year" }, label),
            React.createElement("div", { className: "tooltip-value" },
                value.toFixed(2),
                " kW / ton"),
            React.createElement("div", { className: "tooltip-threshold" },
                "Threshold: ",
                THRESHOLD.toFixed(2),
                " kW / ton"),
            React.createElement("div", { style: {
                    color,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                } },
                arrow,
                " ",
                Math.abs(diff).toFixed(2),
                " kW / ton (",
                Math.abs(percent).toFixed(1),
                "%) vs Threshold")));
    }
    return null;
};
const HVACEfficiencyWidget = (props) => {
    const [currentValue, setCurrentValue] = React.useState(0.95); //mock current value
    const [showCompareHVACModal, setShowCompareHVACModal] = React.useState(false);
    const HvavDdOptions = [
        { label: "Last Week Average", value: "Last_Week_Average" },
        { label: "Last Month Weekly Average", value: "Last_Month_Average" },
        { label: "Last Quarter Weekly Average", value: "Last_Quarter_Average" },
        { label: "Last Six Month Weekly Average", value: "Last_6_Month_Average" },
        { label: "Last Year Weekly Average", value: "Last_Year_Average" },
        { label: "Advanced Comparison", value: "Advanced Comparison" },
    ];
    const [compareType, setCompareType] = React.useState(HvavDdOptions[0].value);
    const [specificDate, setSpecificDate] = React.useState("");
    const [range1, setRange1] = React.useState({ start: null, end: null });
    const [range2, setRange2] = React.useState({ start: null, end: null });
    const [comparisonResult, setComparisonResult] = React.useState(null);
    React.useEffect(() => {
        // Only run if the modal is shown and we haven't calculated results yet
        // This prevents recalculating every time the component renders if results are already there
        if (showCompareHVACModal && !comparisonResult) {
            // Trigger the comparison for the default selected type
            calculateComparison(compareType);
        }
    }, [
        showCompareHVACModal,
        compareType,
        calculateComparison,
        comparisonResult,
    ]); // Dependencies
    //  function calculateComparison(
    //     type?: string, // The selected compareType, passed directly
    //     advRange1?: { start: Date | null; end: Date | null }, // For Advanced Comparison
    //     advRange2?: { start: Date | null; end: Date | null } // For Advanced Comparison
    // ) {
    //     let selected;
    //     let current;
    //     let error: string | undefined = undefined; // Initialize error status
    //     const activeCompareType = type || compareType; // 'compareType' is your state variable
    //     // --- MOCK DATA FOR HISTORICAL AVERAGES ---
    //     const mockHistoricalAverages: { [key: string]: number } = {
    //         Last_Week_Average: 1.1,
    //         Last_Month_Average: 0.88,
    //         Last_Quarter_Average: 0.98,
    //         Last_6_Month_Average: 0.92,
    //         Last_Year_Average: 1.2,
    //     };
    //     // --- END MOCK DATA ---
    //     // For all comparison types EXCEPT "Advanced Comparison"
    //     if (activeCompareType !== "Advanced Comparison") {
    //         selected = {
    //             label:
    //                 HvavDdOptions.find((opt) => opt.value === activeCompareType)?.label ||
    //                 activeCompareType,
    //             value: mockHistoricalAverages[activeCompareType] ?? 0, // Get value from mock data
    //             unit: "kW / ton",
    //         };
    //         // The "Current Week" average is static for these comparisons
    //         current = { label: "Current Week", value: 0.95, unit: "kW / ton" };
    //     } else {
    //         // activeCompareType === "Advanced Comparison"
    //         // Use passed advanced ranges first, then fall back to state variables
    //         const actualRange1 = advRange1 || range1; // 'range1' is your state variable
    //         const actualRange2 = advRange2 || range2; // 'range2' is your state variable
    //         // Only validate if dates are actually selected, not the duration or time alignment
    //         if (
    //             !actualRange1.start ||
    //             !actualRange1.end ||
    //             !actualRange2.start ||
    //             !actualRange2.end
    //         ) {
    //             // Set an error if ranges are not fully selected
    //             error = "Please select valid start and end dates for both ranges.";
    //             selected = null;
    //             current = null;
    //         } else {
    //             // --- REMOVED: DURATION AND TIME ALIGNMENT VALIDATION ---
    //             // const duration1 = actualRange1.end.getTime() - actualRange1.start.getTime();
    //             // const duration2 = actualRange2.end.getTime() - actualRange2.start.getTime();
    //             // if (duration1 !== duration2) { ... } // This is removed
    //             // const timeAStart = actualRange1.start.toTimeString().slice(0, 8); ... // This is removed
    //             // --- END REMOVED ---
    //             // In a real application, you would calculate the actual average for these ranges
    //             // using your data. For now, keeping mock values.
    //             selected = {
    //                 label: `Range 1: ${actualRange1.start.toLocaleDateString()} to ${actualRange1.end.toLocaleDateString()}`,
    //                 value: 1.05, // Mock value for Range 1
    //                 unit: "kW / ton",
    //             };
    //             current = {
    //                 label: `Range 2: ${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
    //                 value: 0.97, // Mock value for Range 2
    //                 unit: "kW / ton",
    //             };
    //         }
    //     }
    //     // Calculate percent change only if both values are valid and there's no overall error
    //     const percentChange =
    //         selected &&
    //         current &&
    //         typeof selected.value === 'number' && // Ensure selected.value is a number
    //         selected.value !== 0 &&
    //         !error
    //             ? (((current.value - selected.value) / selected.value) * 100).toFixed(1)
    //             : "0.0";
    //     // Set the comparison result, including any error message
    //     setComparisonResult({ selected, current, percentChange, error });
    // }
    function calculateComparison(type, // The selected compareType, passed directly
    advRange1, // For Advanced Comparison
    advRange2 // For Advanced Comparison
    ) {
        var _a, _b;
        let selected;
        let current;
        let error = undefined; // Initialize error status
        const activeCompareType = type || compareType; // 'compareType' is your state variable
        // --- MOCK DATA FOR HISTORICAL AVERAGES ---
        const mockHistoricalAverages = {
            Last_Week_Average: 1.1,
            Last_Month_Average: 0.88,
            Last_Quarter_Average: 0.98,
            Last_6_Month_Average: 0.92,
            Last_Year_Average: 1.2,
        };
        // --- END MOCK DATA ---
        // For all comparison types EXCEPT "Advanced Comparison"
        if (activeCompareType !== "Advanced Comparison") {
            selected = {
                label: ((_a = HvavDdOptions.find((opt) => opt.value === activeCompareType)) === null || _a === void 0 ? void 0 : _a.label) ||
                    activeCompareType,
                value: (_b = mockHistoricalAverages[activeCompareType]) !== null && _b !== void 0 ? _b : 0,
                unit: "kW / ton",
            };
            // The "Current Week" average is static for these comparisons
            current = { label: "Current Week", value: 0.95, unit: "kW / ton" };
        }
        else {
            // activeCompareType === "Advanced Comparison"
            // Use passed advanced ranges first, then fall back to state variables
            const actualRange1 = advRange1 || range1; // 'range1' is your state variable
            const actualRange2 = advRange2 || range2; // 'range2' is your state variable
            // Only validate if dates are actually selected, not the duration or time alignment
            if (!actualRange1.start ||
                !actualRange1.end ||
                !actualRange2.start ||
                !actualRange2.end) {
                // Set an error if ranges are not fully selected
                error = "Please select valid start and end dates for both ranges.";
                selected = null;
                current = null;
            }
            else {
                selected = {
                    label: `Range 1: ${actualRange1.start.toLocaleDateString()} to ${actualRange1.end.toLocaleDateString()}`,
                    value: 1.05,
                    unit: "kW / ton",
                };
                current = {
                    label: `Range 2: ${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
                    value: 0.97,
                    unit: "kW / ton",
                };
            }
        }
        // Calculate percent change only if both values are valid and there's no overall error
        const percentChange = selected &&
            current &&
            typeof selected.value === 'number' && // Ensure selected.value is a number
            selected.value !== 0 &&
            !error
            ? (((current.value - selected.value) / selected.value) * 100).toFixed(1)
            : "0.0";
        // Set the comparison result, including any error message
        setComparisonResult({ selected, current, percentChange, error });
    }
    const handleModalOpen = React.useCallback(() => {
        setShowCompareHVACModal(true);
    }, []);
    // Render
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "he-widget" },
            React.createElement("div", { className: "heFootprintWidgetRedesigned" },
                React.createElement("div", { className: "he-header", style: { marginBottom: 18 } },
                    React.createElement("h2", { className: "he-title he-title-flex" },
                        React.createElement("div", { className: "he-title-icon-bg" },
                            React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "#ffd600", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", style: { verticalAlign: "middle" } },
                                React.createElement("circle", { cx: "12", cy: "12", r: "2" }),
                                React.createElement("path", { d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" }))),
                        "HVAC Efficiency"),
                    React.createElement("button", { className: "he-compare-btn", onClick: handleModalOpen }, "Compare")),
                React.createElement("div", { className: "he-kpi-block" },
                    React.createElement("span", { className: "he-kpi-row" },
                        React.createElement("span", { className: "he-kpi-value" }, currentValue),
                        React.createElement("span", { className: "he-kpi-unit-inline" }, "kW / ton")),
                    React.createElement("span", { className: "he-kpi-info he-kpi-info-flex" },
                        "Current Week Average",
                        React.createElement("span", { className: "he-has-tooltip he-has-tooltip-flex" },
                            React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", className: "he-tooltip-icon", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("circle", { cx: "10", cy: "10", r: "9", stroke: "#d1d5db", strokeWidth: "2", fill: "none" }),
                                React.createElement("rect", { x: "9", y: "8", width: "2", height: "6", rx: "1", fill: "#d1d5db" }),
                                React.createElement("rect", { x: "9", y: "5", width: "2", height: "2", rx: "1", fill: "#d1d5db" })),
                            React.createElement("span", { className: "he-tooltip" },
                                "Current Week Average = ",
                                React.createElement("br", null),
                                "Power Input ( kW ) / ",
                                React.createElement("br", null),
                                "Cooling Output ( tons )")))),
                React.createElement("div", { className: "he-chart-container" },
                    React.createElement("div", { className: "he-chart-header" },
                        React.createElement("h3", null, "Weekly Trend"),
                        React.createElement("p", { className: "he-chart-description" }, "Hover over bars to see detailed information")),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 240 },
                        React.createElement(recharts_1.BarChart, { data: mockWeeklyEfficiency, margin: { top: 10, right: 10, left: 0, bottom: 0 } },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "week", stroke: "#fff", tick: { fill: "#fff", fontSize: 14 }, tickLine: { stroke: "#fff" } }),
                            React.createElement(recharts_1.YAxis, { stroke: "#fff", tick: { fill: "#fff", fontSize: 14 }, tickLine: { stroke: "#fff" }, domain: [0, 1.4], width: 50, label: {
                                    value: "kW / ton",
                                    angle: -90,
                                    position: "insideLeft",
                                    fill: "#fff",
                                    fontSize: 13.2,
                                } }),
                            React.createElement(recharts_1.Tooltip, { content: React.createElement(CustomTooltip, null), cursor: false }),
                            React.createElement(recharts_1.ReferenceLine, { y: THRESHOLD, stroke: "#4caf50", strokeDasharray: "6 3", strokeWidth: 2, ifOverflow: "visible" }),
                            React.createElement(recharts_1.Bar, { dataKey: "efficiency", fill: "#42a5f5", radius: [6, 6, 0, 0], maxBarSize: 48 }))),
                    React.createElement("div", { className: "he-legend" },
                        React.createElement("div", { className: "he-legend-item" },
                            React.createElement("span", { className: "he-legend-color he-legend-threshold" }),
                            React.createElement("span", { className: "he-legend-label" }, "Threshold")))),
                React.createElement(components_1.Modal, { show: showCompareHVACModal, onClose: () => {
                        setShowCompareHVACModal(false);
                        setComparisonResult(null);
                    }, title: "Compare HVAC Efficiency", className: "he-compare-modal" },
                    React.createElement("div", { className: "he-compare-modal-content" },
                        React.createElement("div", { className: "he-compare-options" },
                            React.createElement("div", { className: "he-compare-section" },
                                React.createElement("label", null,
                                    "Compare current weeks average HVAC efficiency with:",
                                    " "),
                                React.createElement("div", { className: "he-select-container" },
                                    React.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                            const newCompareType = e.target.value;
                                            setCompareType(newCompareType);
                                            setComparisonResult(null); // <-- NEW: Clear results when comparison type changes
                                            // --- NEW: Reset date ranges when compare type changes ---
                                            setRange1({ start: null, end: null });
                                            setRange2({ start: null, end: null });
                                            // Only trigger comparison immediately if NOT Advanced Comparison
                                            if (newCompareType !== "Advanced Comparison") {
                                                // For all other options, calculate immediately
                                                //   calculateComparison(newCompareType);
                                                calculateComparison(newCompareType, undefined, undefined);
                                            }
                                            // If Advanced Comparison, don't auto-trigger, wait for button click
                                        }, className: "he-compare-select" }, HvavDdOptions.map((opt) => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                                compareType === "Advanced Comparison" && (React.createElement("div", { className: "he-compare-advanced" },
                                    React.createElement("div", { className: "he-compare-advanced-range1" },
                                        React.createElement("label", { className: "he-compare-label-bold he-compare-label-margin" }, "Range 1:"),
                                        React.createElement(components_1.DateRangePicker, { title: "Select First Range", startDate: range1.start ? new Date(range1.start) : undefined, endDate: range1.end ? new Date(range1.end) : undefined, onChange: (start, end) => setRange1({
                                                start: start ? new Date(start) : null,
                                                end: end ? new Date(end) : null,
                                            }) })),
                                    React.createElement("div", { className: "he-compare-advanced-range2" },
                                        React.createElement("label", { className: "he-compare-label-bold he-compare-label-margin" }, "Range 2:"),
                                        React.createElement(components_1.DateRangePicker, { title: "Select Second Range", startDate: range2.start ? new Date(range2.start) : undefined, endDate: range2.end ? new Date(range2.end) : undefined, onChange: (start, end) => setRange2({
                                                start: start ? new Date(start) : null,
                                                end: end ? new Date(end) : null,
                                            }) })),
                                    React.createElement("button", { style: { background: "#42a5f5" }, className: "he-CalculateCompare-btn", onClick: () => calculateComparison("Advanced Comparison", range1, range2), disabled: !range1.start ||
                                            !range1.end ||
                                            !range2.start ||
                                            !range2.end }, "COMPARE"))))),
                        (compareType !== "Advanced Comparison" ||
                            (compareType === "Advanced Comparison" && comparisonResult)) &&
                            comparisonResult &&
                            !comparisonResult.error &&
                            comparisonResult.selected &&
                            comparisonResult.current && (React.createElement("div", { className: "he-comparison-results" },
                            React.createElement("h4", null, "Comparison Results"),
                            React.createElement("div", { className: "he-results-main" },
                                React.createElement("div", { className: "he-result-comparison" },
                                    React.createElement("div", { className: "he-result-label" }, comparisonResult.selected.label),
                                    React.createElement("div", { className: "he-result-value" },
                                        comparisonResult.selected.value,
                                        " ",
                                        comparisonResult.selected.unit)),
                                React.createElement("div", { className: "he-result-current" },
                                    React.createElement("div", { className: "he-result-label" }, comparisonResult.current.label),
                                    React.createElement("div", { className: "he-result-value" },
                                        comparisonResult.current.value,
                                        " ",
                                        comparisonResult.current.unit))),
                            React.createElement("div", { className: "he-result-difference" },
                                React.createElement("div", { className: "he-difference-item" },
                                    React.createElement("span", { className: "he-difference-label" }, "Difference"),
                                    React.createElement("span", { className: "he-difference-value-container", style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                        } },
                                        comparisonResult.current.value -
                                            comparisonResult.selected.value <
                                            0 ? (React.createElement("span", { style: {
                                                color: "rgb(76, 175, 80)",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25BC")) : comparisonResult.current.value -
                                            comparisonResult.selected.value >
                                            0 ? (React.createElement("span", { style: {
                                                color: "#ff4d4f",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25B2")) : null,
                                        React.createElement("span", { className: "he-difference-value", style: {
                                                color: comparisonResult.current.value -
                                                    comparisonResult.selected.value <
                                                    0
                                                    ? "rgb(76, 175, 80)"
                                                    : comparisonResult.current.value -
                                                        comparisonResult.selected.value >
                                                        0
                                                        ? "#ff4d4f"
                                                        : "#fff",
                                            } },
                                            Math.abs(comparisonResult.current.value -
                                                comparisonResult.selected.value).toFixed(2),
                                            " ",
                                            comparisonResult.current.unit))),
                                React.createElement("div", { className: "he-difference-item" },
                                    React.createElement("span", { className: "he-difference-label" }, "Change"),
                                    React.createElement("span", { className: "he-difference-value-container", style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                        } },
                                        parseFloat(comparisonResult.percentChange) < 0 ? (React.createElement("span", { style: {
                                                color: "rgb(76, 175, 80)",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25BC")) : parseFloat(comparisonResult.percentChange) > 0 ? (React.createElement("span", { style: {
                                                color: "#ff4d4f",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25B2")) : null,
                                        React.createElement("span", { className: "he-difference-value", style: {
                                                color: parseFloat(comparisonResult.percentChange) < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : parseFloat(comparisonResult.percentChange) >
                                                        0
                                                        ? "#ff4d4f"
                                                        : "#fff",
                                            } },
                                            Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                            "%"))))))))))));
};
exports.HVACEfficiencyWidget = HVACEfficiencyWidget;
exports["default"] = exports.HVACEfficiencyWidget;


/***/ }),

/***/ "./src/prod/LightingPowerDensity/LightingPowerDensity.scss":
/*!*****************************************************************!*\
  !*** ./src/prod/LightingPowerDensity/LightingPowerDensity.scss ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LightingPowerDensity.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/LightingPowerDensity/LightingPowerDensity.scss");

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

/***/ "./src/prod/LightingPowerDensity/LightingPowerDensity.tsx":
/*!****************************************************************!*\
  !*** ./src/prod/LightingPowerDensity/LightingPowerDensity.tsx ***!
  \****************************************************************/
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
exports.LightingPowerDensityWidget = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
__webpack_require__(/*! ./LightingPowerDensity.scss */ "./src/prod/LightingPowerDensity/LightingPowerDensity.scss");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const mockWeeklyDensity = [
    { week: "Week 1", density: 8.5 },
    { week: "Week 2", density: 9.2 },
    { week: "Week 3", density: 10.1 },
    { week: "Week 4", density: 11.3 },
    { week: "Week 5", density: 9.7 },
];
const mockHistoricalAverages = {
    last_week: 9.5,
    last_month_weekly: 10.2,
    last_quarter_weekly: 10.8,
    last_6_months_weekly: 9.9,
    last_year_weekly: 11.1,
};
const THRESHOLD = 10;
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const value = payload[0].value;
        const diff = value - THRESHOLD;
        const percent = (diff / THRESHOLD) * 100;
        const isBetter = value < THRESHOLD;
        const color = isBetter ? "#4caf50" : "#ff4444";
        const arrow = isBetter ? "▼" : "▲";
        return (React.createElement("div", { className: "lp-custom-tooltip" },
            React.createElement("div", { className: "tooltip-year" }, label),
            React.createElement("div", { className: "tooltip-value" },
                value.toFixed(2),
                " W / m\u00B2"),
            React.createElement("div", { className: "tooltip-threshold" },
                "Threshold: ",
                THRESHOLD.toFixed(2),
                " W / m\u00B2"),
            React.createElement("div", { style: {
                    color,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                } },
                arrow,
                " ",
                Math.abs(diff).toFixed(2),
                " W / m\u00B2 (",
                Math.abs(percent).toFixed(1),
                "%) vs Threshold")));
    }
    return null;
};
const LightingPowerDensityWidget = (props) => {
    const [currentValue, setCurrentValue] = React.useState(9.0); // mock current value
    const [showCompareLPModal, setShowCompareLPModal] = React.useState(false);
    const [containerWidth, setContainerWidth] = React.useState(0);
    const LPDDdOptions = [
        { label: "Last Week Average", value: "Last_Week_Average" },
        { label: "Last Month Weeky Average", value: "Last_Month_Average" },
        { label: "Last Quarter Weekly Average", value: "Last_Quarter_Average" },
        { label: "Last Six Month Weekly Average", value: "Last_6_Month_Average" },
        { label: "Last Year Weekly Average", value: "Last_Year_Average" },
        { label: "Advanced Comparison", value: "Advanced Comparison" },
    ];
    const [compareType, setCompareType] = React.useState(LPDDdOptions[0].value);
    const [specificDate, setSpecificDate] = React.useState("");
    const [range1, setRange1] = React.useState({ start: null, end: null });
    const [range2, setRange2] = React.useState({ start: null, end: null });
    const [comparisonResult, setComparisonResult] = React.useState(null);
    const mockAverages = {
        Last_Week_Average: 9.5,
        Last_Month_Average: 10.2,
        Last_Quarter_Average: 10.8,
        Last_6_Month_Average: 9.9,
        Last_Year_Average: 11.1,
    };
    function calculateComparison(type, // The selected compareType, passed directly
    advRange1, // For Advanced Comparison
    advRange2 // For Advanced Comparison
    ) {
        var _a, _b;
        let selected;
        let current;
        let error = undefined; // Initialize error status
        const activeCompareType = type || compareType; // 'compareType' is your state variable
        // --- MOCK DATA FOR HISTORICAL AVERAGES ---
        const mockHistoricalAverages = {
            Last_Week_Average: 1.1,
            Last_Month_Average: 0.88,
            Last_Quarter_Average: 0.98,
            Last_6_Month_Average: 0.92,
            Last_Year_Average: 1.2,
        };
        // --- END MOCK DATA ---
        // For all comparison types EXCEPT "Advanced Comparison"
        if (activeCompareType !== "Advanced Comparison") {
            selected = {
                label: ((_a = LPDDdOptions.find((opt) => opt.value === activeCompareType)) === null || _a === void 0 ? void 0 : _a.label) ||
                    activeCompareType,
                value: (_b = mockHistoricalAverages[activeCompareType]) !== null && _b !== void 0 ? _b : 0,
                unit: "W / m²",
            };
            // The "Current Week" average is static for these comparisons
            current = { label: "Current Week", value: 0.95, unit: "W/m²" };
        }
        else {
            // activeCompareType === "Advanced Comparison"
            const actualRange1 = advRange1 || range1; // 'range1' is your state variable
            const actualRange2 = advRange2 || range2; // 'range2' is your state variable
            // --- VALIDATION: Only check if dates are actually selected, NOT duration or time alignment ---
            if (!actualRange1.start ||
                !actualRange1.end ||
                !actualRange2.start ||
                !actualRange2.end) {
                error = "Please select valid start and end dates for both ranges.";
                selected = null;
                current = null;
            }
            else {
                selected = {
                    label: `Range 1: ${actualRange1.start.toLocaleDateString()} to ${actualRange1.end.toLocaleDateString()}`,
                    value: 1.05,
                    unit: "W / m²",
                };
                current = {
                    label: `Range 2: ${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
                    value: 0.97,
                    unit: "W / m²",
                };
            }
        }
        // Calculate percent change only if both values are valid and there's no error
        const percentChange = selected &&
            current &&
            typeof selected.value === "number" && // Ensure selected.value is a number
            selected.value !== 0 &&
            !error // Only calculate if no error
            ? (((current.value - selected.value) / selected.value) * 100).toFixed(1)
            : "0.0";
        // Set the comparison result, including any error message
        setComparisonResult({ selected, current, percentChange, error }); // error can now be undefined or a string
    }
    React.useEffect(() => {
        // Only run if the modal is shown and we haven't calculated results yet
        // This prevents recalculating every time the component renders if results are already there
        if (showCompareLPModal && !comparisonResult) {
            // Trigger the comparison for the default selected type
            calculateComparison(compareType);
        }
    }, [showCompareLPModal, compareType, calculateComparison, comparisonResult]); // Dependencies
    const handleModalOpen = React.useCallback(() => {
        setShowCompareLPModal(true);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "lp-widget" },
            React.createElement("div", { className: "lpFootprintWidgetRedesigned" },
                React.createElement("div", { className: "lp-header", style: { marginBottom: 18 } },
                    React.createElement("h2", { className: "lp-title lp-title-flex" },
                        React.createElement("div", { className: "lp-title-icon-bg" },
                            React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "#ffd600", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", style: { verticalAlign: "middle" } },
                                React.createElement("path", { d: "M9 18h6" }),
                                React.createElement("path", { d: "M10 22h4" }),
                                React.createElement("path", { d: "M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5-.5.2-.5.7-.5 1.5v1a1 1 0 0 1-2 0v-1c0-.8 0-1.3-.5-1.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" }))),
                        "Lighting Power Density"),
                    React.createElement("button", { className: "lp-compare-btn", onClick: handleModalOpen }, "Compare")),
                React.createElement("div", { className: "lp-kpi-block" },
                    React.createElement("span", { className: "lp-kpi-row" },
                        React.createElement("span", { className: "lp-kpi-value" }, currentValue),
                        React.createElement("span", { className: "lp-kpi-unit-inline" }, "W / m\u00B2")),
                    React.createElement("span", { className: "lp-kpi-info lp-kpi-info-flex" },
                        "Current Week Average",
                        React.createElement("span", { className: "lp-has-tooltip lp-has-tooltip-flex" },
                            React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", className: "lp-tooltip-icon", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("circle", { cx: "10", cy: "10", r: "9", stroke: "#d1d5db", strokeWidth: "2", fill: "none" }),
                                React.createElement("rect", { x: "9", y: "8", width: "2", height: "6", rx: "1", fill: "#d1d5db" }),
                                React.createElement("rect", { x: "9", y: "5", width: "2", height: "2", rx: "1", fill: "#d1d5db" })),
                            React.createElement("span", { className: "lp-tooltip" },
                                "LPD ( W / m\u00B2 ) = ",
                                React.createElement("br", null),
                                " Total Lighting Power Consumption ( W )",
                                React.createElement("br", null),
                                " / Gross Floor Area ( m\u00B2 )")))),
                React.createElement("div", { className: "lp-chart-container" },
                    React.createElement("div", { className: "lp-chart-header" },
                        React.createElement("h3", null, "Weekly Trend"),
                        React.createElement("p", { className: "lp-chart-description" }, "Hover over lines to see detailed information")),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: containerWidth < 400 ? 180 : 240 },
                        React.createElement(recharts_1.LineChart, { data: mockWeeklyDensity, margin: { top: 10, right: 10, left: 0, bottom: 0 } },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "week", stroke: "#fff", tick: { fill: "#fff", fontSize: 14 }, tickLine: { stroke: "#fff" } }),
                            React.createElement(recharts_1.YAxis, { stroke: "#fff", tick: { fill: "#fff", fontSize: 14 }, tickLine: { stroke: "#fff" }, domain: [6, 14], width: 50, label: {
                                    value: "W / m²",
                                    angle: -90,
                                    position: "insideLeft",
                                    fill: "#fff",
                                    fontSize: 13.2,
                                } }),
                            React.createElement(recharts_1.Tooltip, { content: React.createElement(CustomTooltip, null), cursor: false }),
                            React.createElement(recharts_1.ReferenceLine, { y: THRESHOLD, stroke: "#4caf50", strokeDasharray: "6 3", strokeWidth: 2, ifOverflow: "visible" }),
                            React.createElement(recharts_1.Line, { type: "monotone", dataKey: "density", stroke: "#64b5f6", strokeWidth: 3, dot: {
                                    r: 6,
                                    fill: "#64b5f6",
                                    stroke: "#fff",
                                    strokeWidth: 2,
                                }, activeDot: { r: 8 } }))),
                    React.createElement("div", { className: "lp-legend" },
                        React.createElement("div", { className: "lp-legend-item" },
                            React.createElement("span", { className: "lp-legend-color lp-legend-threshold" }),
                            React.createElement("span", { className: "lp-legend-label" }, "Threshold")))),
                React.createElement(components_1.Modal, { show: showCompareLPModal, onClose: () => {
                        setShowCompareLPModal(false), setComparisonResult(null);
                    }, title: "Compare Lighting Power Density", className: "lp-compare-modal" },
                    React.createElement("div", { className: "lp-compare-modal-content" },
                        React.createElement("div", { className: "lp-compare-options" },
                            React.createElement("div", { className: "lp-compare-section" },
                                React.createElement("label", null, "Compare current weeks average LPD with:"),
                                React.createElement("div", { className: "lp-select-container" },
                                    React.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                            const newCompareType = e.target.value;
                                            setCompareType(newCompareType);
                                            setComparisonResult(null); // <-- NEW: Clear results when comparison type changes
                                            // --- NEW: Reset date ranges when compare type changes ---
                                            setRange1({ start: null, end: null });
                                            setRange2({ start: null, end: null });
                                            // Only trigger comparison immediately if NOT Advanced Comparison
                                            if (newCompareType !== "Advanced Comparison") {
                                                // For all other options, calculate immediately
                                                //   calculateComparison(newCompareType);
                                                calculateComparison(newCompareType, undefined, undefined);
                                            }
                                            // If Advanced Comparison, don't auto-trigger, wait for button click
                                        }, className: "lp-compare-select" }, LPDDdOptions.map((opt) => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                                compareType === "Any specific day" && (React.createElement("div", { className: "lp-compare-specific-day" },
                                    React.createElement("label", { htmlFor: "specific-date", className: "lp-compare-label-bold lp-compare-label-margin" }, "Select Date:"),
                                    React.createElement(components_1.DatePicker, { title: "Select Date", date: specificDate, onChange: (date) => setSpecificDate(date instanceof Date
                                            ? date.toISOString().slice(0, 10)
                                            : "") }))),
                                compareType === "Advanced Comparison" && (React.createElement("div", { className: "lp-compare-advanced" },
                                    React.createElement("div", { className: "lp-compare-advanced-range1" },
                                        React.createElement("label", { className: "lp-compare-label-bold lp-compare-label-margin" }, "Range 1:"),
                                        React.createElement(components_1.DateRangePicker, { title: "Select First Range", startDate: range1.start ? new Date(range1.start) : undefined, endDate: range1.end ? new Date(range1.end) : undefined, onChange: (start, end) => setRange1({
                                                start: start ? new Date(start) : null,
                                                end: end ? new Date(end) : null,
                                            }) })),
                                    React.createElement("div", { className: "lp-compare-advanced-range2" },
                                        React.createElement("label", { className: "lp-compare-label-bold lp-compare-label-margin" }, "Range 2:"),
                                        React.createElement(components_1.DateRangePicker, { title: "Select Second Range", startDate: range2.start ? new Date(range2.start) : undefined, endDate: range2.end ? new Date(range2.end) : undefined, onChange: (start, end) => setRange2({
                                                start: start ? new Date(start) : null,
                                                end: end ? new Date(end) : null,
                                            }) })),
                                    React.createElement("button", { style: { background: "#42a5f5" }, className: "lp-CalculateCompare-btn", onClick: () => calculateComparison("Advanced Comparison", range1, range2), disabled: !compareType ||
                                            (compareType === "Advanced Comparison" &&
                                                (!range1.start ||
                                                    !range1.end ||
                                                    !range2.start ||
                                                    !range2.end)) }, "COMPARE"))))),
                        comparisonResult &&
                            comparisonResult.selected &&
                            comparisonResult.current && (React.createElement("div", { className: "lp-comparison-results" },
                            React.createElement("h4", null, "Comparison Results"),
                            React.createElement("div", { className: "lp-results-main" },
                                React.createElement("div", { className: "lp-result-comparison" },
                                    React.createElement("div", { className: "lp-result-label" }, comparisonResult.selected.label),
                                    React.createElement("div", { className: "lp-result-value" },
                                        comparisonResult.selected.value,
                                        " ",
                                        comparisonResult.selected.unit)),
                                React.createElement("div", { className: "lp-result-current" },
                                    React.createElement("div", { className: "lp-result-label" }, comparisonResult.current.label),
                                    React.createElement("div", { className: "lp-result-value" },
                                        comparisonResult.current.value,
                                        " ",
                                        comparisonResult.current.unit))),
                            React.createElement("div", { className: "lp-result-difference" },
                                React.createElement("div", { className: "lp-difference-item" },
                                    React.createElement("span", { className: "lp-difference-label" }, "Difference"),
                                    React.createElement("span", { className: "lp-difference-value-container", style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                        } },
                                        comparisonResult.current.value -
                                            comparisonResult.selected.value <
                                            0 ? (React.createElement("span", { style: {
                                                color: "rgb(76, 175, 80)",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25BC")) : comparisonResult.current.value -
                                            comparisonResult.selected.value >
                                            0 ? (React.createElement("span", { style: {
                                                color: "#ff4d4f",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25B2")) : null,
                                        React.createElement("span", { className: "lp-difference-value", style: {
                                                color: comparisonResult.current.value -
                                                    comparisonResult.selected.value <
                                                    0
                                                    ? "rgb(76, 175, 80)"
                                                    : comparisonResult.current.value -
                                                        comparisonResult.selected.value >
                                                        0
                                                        ? "#ff4d4f"
                                                        : "#fff",
                                            } },
                                            Math.abs(comparisonResult.current.value -
                                                comparisonResult.selected.value).toFixed(2),
                                            " ",
                                            comparisonResult.current.unit))),
                                React.createElement("div", { className: "lp-difference-item" },
                                    React.createElement("span", { className: "lp-difference-label" }, "Change"),
                                    React.createElement("span", { className: "lp-difference-value-container", style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                        } },
                                        parseFloat(comparisonResult.percentChange) < 0 ? (React.createElement("span", { style: {
                                                color: "rgb(76, 175, 80)",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25BC")) : parseFloat(comparisonResult.percentChange) > 0 ? (React.createElement("span", { style: {
                                                color: "#ff4d4f",
                                                fontSize: 18,
                                                marginRight: 2,
                                            } }, "\u25B2")) : null,
                                        React.createElement("span", { className: "lp-difference-value", style: {
                                                color: parseFloat(comparisonResult.percentChange) < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : parseFloat(comparisonResult.percentChange) >
                                                        0
                                                        ? "#ff4d4f"
                                                        : "#fff",
                                            } },
                                            Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                            "%"))))))))))));
};
exports.LightingPowerDensityWidget = LightingPowerDensityWidget;
exports["default"] = exports.LightingPowerDensityWidget;


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