/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"8d4f078b-1cd9-4f92-bfcf-db95a62fa11c","author":"SSI","widgets":[{"id":"energy_left_panel","name":"energy_left_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EnergyUseIntensity/EUI.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EnergyUseIntensity/EUI.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ":root {\n  --glass-bg: rgba(255, 255, 255, 0.08);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);\n  --glass-green: rgba(61, 245, 123, 0.18);\n  --glass-yellow: rgba(255, 214, 0, 0.18);\n  --glass-red: rgba(255, 76, 76, 0.18);\n  --apple-glass: rgba(255, 255, 255, 0.1);\n  --apple-border: rgba(255, 255, 255, 0.2);\n  --apple-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --bg-color: rgba(20, 20, 20, 0.15);\n  --text-color: #fff;\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --good-color: #4caf50;\n  --warning-color: #ff9800;\n  --danger-color: #f44336;\n  --neutral-color: #64b5f6;\n  --text-primary: rgba(255, 255, 255, 0.95);\n  --text-secondary: rgba(255, 255, 255, 0.85);\n  --text-tertiary: rgba(255, 255, 255, 0.75);\n}\n\n.eui-widget {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.eui-widget .eui-glass-bg {\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 24px 16px;\n  width: 100%;\n  min-height: 400px;\n  color: #fff;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.eui-widget .eui-widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.eui-widget .eui-widget-header .eui-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.eui-widget .eui-widget-header .eui-header-left .eui-icon {\n  width: 32px;\n  height: 32px;\n  color: var(--neutral-color);\n  padding: 6px;\n  background: rgba(100, 181, 246, 0.1);\n  border-radius: 8px;\n  border: 1px solid rgba(100, 181, 246, 0.2);\n}\n.eui-widget .eui-widget-header .eui-header-left .eui-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.eui-widget .eui-widget-header .eui-header-left .eui-widget-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.eui-widget .eui-widget-header .eui-header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.eui-widget .eui-widget-header .eui-header-right .eui-year-badge {\n  background: rgba(255, 255, 255, 0.15);\n  color: var(--text-primary);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  border: 1px solid var(--glass-border);\n  backdrop-filter: blur(10px);\n}\n.eui-widget .eui-widget-header .eui-header-right .eui-compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.eui-widget .eui-widget-header .eui-header-right .eui-compare-btn:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);\n}\n.eui-widget .eui-widget-header .eui-header-right .eui-compare-btn:active {\n  transform: translateY(0);\n}\n.eui-widget .eui-widget-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.eui-widget .eui-stats-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.eui-widget .eui-stats-section .eui-main-stat {\n  text-align: center;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-value {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-value .eui-number {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  background-clip: text;\n  letter-spacing: 0.02em;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-value .eui-unit {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 600;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label .eui-tooltip-wrapper {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label .eui-tooltip-wrapper .eui-info-icon {\n  margin-left: 4px;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label .eui-tooltip-wrapper .eui-info-icon:hover {\n  opacity: 1;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label .eui-tooltip-wrapper .eui-tooltip-content {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.85);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.9);\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  font-weight: normal;\n  text-align: center;\n  margin-bottom: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label .eui-tooltip-wrapper .eui-tooltip-content::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 5px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;\n}\n.eui-widget .eui-stats-section .eui-main-stat .eui-stat-label .eui-tooltip-wrapper:hover .eui-tooltip-content {\n  opacity: 1;\n  visibility: visible;\n}\n.eui-widget .eui-chart-container {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 16px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.eui-widget .eui-chart-container .eui-chart-header {\n  margin-bottom: 24px;\n}\n.eui-widget .eui-chart-container .eui-chart-header .eui-chart-para {\n  font-size: 1.3rem;\n  color: #fff;\n  margin: 0;\n  line-height: 1.4;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.eui-widget .eui-chart-container .eui-chart-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #fff;\n  margin: 0 0 8px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.eui-widget .eui-bottom-stats {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  margin: 16px 0;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  padding: 16px 24px;\n  text-align: center;\n  flex: 0 1 auto;\n  min-width: 160px;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number .eui-tooltip-wrapper {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number .eui-tooltip-wrapper .eui-info-icon {\n  width: 14px;\n  height: 14px;\n  opacity: 0.8;\n  transition: opacity 0.2s ease;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number .eui-tooltip-wrapper .eui-info-icon:hover {\n  opacity: 1;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number .eui-tooltip-wrapper .eui-tooltip-content {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  font-weight: normal;\n  text-align: center;\n  margin-bottom: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  width: max-content;\n  max-width: 300px;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number .eui-tooltip-wrapper .eui-tooltip-content::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 5px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number .eui-tooltip-wrapper:hover .eui-tooltip-content {\n  opacity: 1;\n  visibility: visible;\n}\n.eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-label {\n  font-size: 1.3rem;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.eui-advanced-comparison {\n  margin-top: 20px;\n}\n.eui-advanced-comparison .eui-date-range {\n  margin-bottom: 20px;\n}\n.eui-advanced-comparison .eui-date-range label {\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.modal-container.dt-eui-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.modal-container.dt-eui-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.modal-container.dt-eui-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  color: #fff !important;\n  font-size: 1.4rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.02em !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px 12px 0 0 !important;\n}\n.modal-container.dt-eui-compare-modal .modal-panel .modal-body {\n  padding: 16px !important;\n  height: 100% !important;\n  margin: 0 !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  overflow-y: auto !important;\n  border-radius: 0 0 12px 12px !important;\n}\n\n.eui-modal-glass-effect .modal-container.dt-eui-compare-modal .modal-panel {\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.eui-modal-glass-effect .modal-container.dt-eui-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  color: #fff !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n}\n.eui-modal-glass-effect .modal-container.dt-eui-compare-modal .modal-panel .modal-body {\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n}\n\n.eui-compare-content .eui-compare-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-compare-select {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  padding-right: 40px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-compare-select:focus {\n  outline: none;\n  border-color: var(--neutral-color);\n  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);\n  z-index: 1000;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-compare-select option {\n  background: rgba(20, 20, 20, 0.95) !important;\n  color: #fff !important;\n  padding: 8px 12px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: none;\n  backdrop-filter: blur(10px);\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-compare-select option:hover {\n  background: rgba(100, 181, 246, 0.2) !important;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-compare-select option:checked {\n  background: rgba(100, 181, 246, 0.3) !important;\n  color: #fff !important;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-clear-btn {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.eui-compare-content .eui-compare-options .eui-compare-section .eui-select-container .eui-clear-btn:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.1);\n}\n.eui-compare-content .eui-compare-options .eui-calculate-btn {\n  background: linear-gradient(135deg, var(--neutral-color) 0%, #42a5f5 100%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.eui-compare-content .eui-compare-options .eui-calculate-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(100, 181, 246, 0.3);\n}\n.eui-compare-content .eui-compare-options .eui-calculate-btn:active {\n  transform: translateY(0);\n}\n.eui-compare-content .eui-compare-options .eui-calculate-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.eui-compare-content .eui-comparison-results {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.eui-compare-content .eui-comparison-results h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main .eui-result-comparison,\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main .eui-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main .eui-result-comparison .eui-result-label,\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main .eui-result-current .eui-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main .eui-result-comparison .eui-result-value,\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-main .eui-result-current .eui-result-value {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-label {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value {\n  font-weight: 600;\n  font-size: 14px;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value-container .eui-arrow-up {\n  color: rgb(244, 67, 54);\n  font-size: 0;\n  font-weight: 900;\n  text-shadow: 0 0 8px rgba(244, 67, 54, 0.5);\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value-container .eui-arrow-up::before {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid rgb(244, 67, 54);\n  filter: drop-shadow(0 0 4px rgba(244, 67, 54, 0.5));\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value-container .eui-arrow-down {\n  color: rgb(76, 175, 80);\n  font-size: 0;\n  font-weight: 900;\n  text-shadow: 0 0 8px rgba(76, 175, 80, 0.5);\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value-container .eui-arrow-down::before {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid rgb(76, 175, 80);\n  filter: drop-shadow(0 0 4px rgba(76, 175, 80, 0.5));\n}\n.eui-compare-content .eui-comparison-results .eui-results-compact .eui-result-difference .eui-difference-item .eui-difference-value-container .eui-difference-value {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.eui-legend-container {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  padding: 0 16px;\n  justify-content: center;\n}\n\n.eui-legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.eui-legend-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n.eui-legend-text {\n  font-size: 1.1rem;\n  color: #fff;\n  font-weight: 600;\n}\n\n.eui-graph-dot {\n  stroke: #fff !important;\n  stroke-width: 2px !important;\n  r: 6 !important;\n  filter: drop-shadow(0 2px 6px rgba(100, 181, 246, 0.25));\n  opacity: 1 !important;\n  z-index: 2;\n}\n\n.eui-graph-active-dot {\n  stroke: #fff !important;\n  stroke-width: 2px !important;\n  r: 8 !important;\n  fill: #64b5f6 !important;\n  filter: drop-shadow(0 4px 12px rgba(100, 181, 246, 0.35));\n  opacity: 1 !important;\n  z-index: 3;\n}\n\n@media (max-width: 768px) {\n  .eui-widget .eui-glass-bg {\n    padding: 16px 12px;\n  }\n  .eui-widget .eui-widget-header {\n    margin-bottom: 16px;\n  }\n  .eui-widget .eui-widget-header .eui-header-left .eui-icon {\n    width: 28px;\n    height: 28px;\n  }\n  .eui-widget .eui-widget-header .eui-header-left .eui-widget-title {\n    font-size: 1.3rem;\n  }\n  .eui-widget .eui-widget-header .eui-header-right .eui-year-badge {\n    font-size: 0.8rem;\n    padding: 4px 8px;\n  }\n  .eui-widget .eui-widget-header .eui-header-right .eui-compare-btn {\n    font-size: 0.8rem;\n    padding: 4px 8px;\n  }\n  .eui-widget .eui-widget-content {\n    gap: 16px;\n  }\n  .eui-widget .eui-stats-section .eui-main-stat .eui-stat-value .eui-number {\n    font-size: 2.5rem;\n  }\n  .eui-widget .eui-stats-section .eui-main-stat .eui-stat-value .eui-unit {\n    font-size: 1.3rem;\n  }\n  .eui-widget .eui-bottom-stats {\n    gap: 8px;\n  }\n  .eui-widget .eui-bottom-stats .eui-stat-card {\n    padding: 12px 8px;\n  }\n  .eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-number {\n    font-size: 1.3rem;\n  }\n  .eui-widget .eui-bottom-stats .eui-stat-card .eui-stat-label {\n    font-size: 0.7rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .eui-widget .eui-glass-bg {\n    background: var(--glass-bg);\n  }\n}\n@media (prefers-contrast: high) {\n  .eui-widget .eui-glass-bg {\n    border: 2px solid var(--glass-border);\n  }\n  .eui-widget .eui-stats-section .eui-main-stat .eui-stat-value .eui-number {\n    -webkit-text-fill-color: var(--text-primary);\n    background: none;\n  }\n}\n.eui-compare-select {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: #fff;\n  font-size: 1.2rem !important;\n  font-weight: 500;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n  background-size: 16px;\n  padding-right: 32px;\n}\n.eui-compare-select option {\n  background: #1a1a1a;\n  color: #fff;\n  font-size: 1.2rem;\n  padding: 8px;\n}\n\n.eui-chart-container .recharts-bar-rectangle:hover rect {\n  fill: #64b5f6 !important;\n  background: transparent !important;\n  opacity: 1 !important;\n}\n\n.eui-custom-tooltip {\n  background: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(8px);\n  border-radius: 10px;\n  padding: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 150;\n  min-width: 100px;\n  color: #fff;\n  font-size: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n\n.eui-custom-tooltip .tooltip-year {\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.eui-custom-tooltip .tooltip-value {\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.eui-custom-tooltip .tooltip-target {\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 600;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/PeakDemand/PeakDemand.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/PeakDemand/PeakDemand.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ":root {\n  --glass-bg: rgba(255, 255, 255, 0.08);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);\n  --glass-green: rgba(61, 245, 123, 0.18);\n  --glass-yellow: rgba(255, 214, 0, 0.18);\n  --glass-red: rgba(255, 76, 76, 0.18);\n  --apple-glass: rgba(255, 255, 255, 0.1);\n  --apple-border: rgba(255, 255, 255, 0.2);\n  --apple-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --bg-color: rgba(20, 20, 20, 0.15);\n  --text-color: #fff;\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --good-color: #4caf50;\n  --warning-color: #ff9800;\n  --danger-color: #f44336;\n  --neutral-color: #64b5f6;\n  --text-primary: rgba(255, 255, 255, 0.95);\n  --text-secondary: rgba(255, 255, 255, 0.85);\n  --text-tertiary: rgba(255, 255, 255, 0.75);\n}\n\n.peak-widget {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.peak-widget .peak-glass-bg {\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 24px 16px;\n  width: 100%;\n  min-height: 400px;\n  color: #fff;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.peak-widget .peak-widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.peak-widget .peak-widget-header .peak-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.peak-widget .peak-widget-header .peak-header-left .peak-icon {\n  width: 32px;\n  height: 32px;\n  color: var(--neutral-color);\n  padding: 6px;\n  background: rgba(100, 181, 246, 0.1);\n  border-radius: 8px;\n  border: 1px solid rgba(100, 181, 246, 0.2);\n}\n.peak-widget .peak-widget-header .peak-header-left .peak-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.peak-widget .peak-widget-header .peak-header-left .peak-widget-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.peak-widget .peak-widget-header .peak-header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.peak-widget .peak-widget-header .peak-header-right .peak-compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.peak-widget .peak-widget-header .peak-header-right .peak-compare-btn:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);\n}\n.peak-widget .peak-widget-header .peak-header-right .peak-compare-btn:active {\n  transform: translateY(0);\n}\n.peak-widget .peak-widget-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n.peak-widget .peak-stats-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.peak-widget .peak-stats-section .peak-main-stat {\n  text-align: center;\n}\n.peak-widget .peak-stats-section .peak-main-stat .peak-stat-value {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.peak-widget .peak-stats-section .peak-main-stat .peak-stat-value .peak-number {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  background-clip: text;\n  letter-spacing: 0.02em;\n}\n.peak-widget .peak-stats-section .peak-main-stat .peak-stat-value .peak-unit {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.peak-widget .peak-stats-section .peak-main-stat .peak-stat-label {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 600;\n}\n.peak-widget .peak-chart-container {\n  background: transparent !important;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  padding: 16px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.peak-widget .peak-chart-container .peak-chart-header {\n  margin-bottom: 24px;\n}\n.peak-widget .peak-chart-container .peak-chart-header .peak-chart-para {\n  font-size: 1.3rem;\n  color: #fff;\n  margin: 0;\n  line-height: 1.4;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.peak-widget .peak-chart-container .peak-chart-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #fff;\n  margin: 0 0 8px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.peak-widget .peak-bottom-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 8px;\n}\n.peak-widget .peak-bottom-stats .peak-stat-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 16px 12px;\n  text-align: center;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.peak-widget .peak-bottom-stats .peak-stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.peak-widget .peak-bottom-stats .peak-stat-card .peak-stat-number {\n  font-size: 1.7rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n  letter-spacing: 0.02em;\n}\n.peak-widget .peak-bottom-stats .peak-stat-card .peak-stat-label {\n  font-size: 1.3rem;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.modal-container.dt-water-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.modal-container.dt-water-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px 12px 0 0;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body {\n  padding: 16px;\n  height: 100% !important;\n  margin: 0;\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  overflow-y: auto;\n  border-radius: 0 0 12px 12px;\n}\n\n.peak-compare-content .peak-compare-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container .peak-compare-select {\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: #fff;\n  font-size: 1.2rem !important;\n  font-weight: 500;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n  background-size: 16px;\n  padding-right: 32px;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container .peak-compare-select option {\n  background: #1a1a1a;\n  color: #fff;\n  font-size: 1.2rem;\n  padding: 8px;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container .peak-compare-select option:hover {\n  background: rgba(100, 181, 246, 0.2) !important;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container .peak-compare-select option:checked {\n  background: rgba(100, 181, 246, 0.3) !important;\n  color: #fff !important;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container .peak-clear-btn {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.peak-compare-content .peak-compare-options .peak-compare-section .peak-select-container .peak-clear-btn:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.1);\n}\n.peak-compare-content .peak-compare-options .peak-calculate-btn {\n  background: linear-gradient(135deg, var(--neutral-color) 0%, #42a5f5 100%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.peak-compare-content .peak-compare-options .peak-calculate-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(100, 181, 246, 0.3);\n}\n.peak-compare-content .peak-compare-options .peak-calculate-btn:active {\n  transform: translateY(0);\n}\n.peak-compare-content .peak-compare-options .peak-calculate-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.peak-compare-content .peak-comparison-results {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.peak-compare-content .peak-comparison-results h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main .peak-result-comparison,\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main .peak-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main .peak-result-comparison .peak-result-label,\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main .peak-result-current .peak-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main .peak-result-comparison .peak-result-value,\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-main .peak-result-current .peak-result-value {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-difference .peak-difference-item {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-difference .peak-difference-item:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-difference .peak-difference-item .peak-difference-label {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.peak-compare-content .peak-comparison-results .peak-results-compact .peak-result-difference .peak-difference-item .peak-difference-value {\n  font-weight: 700;\n  font-size: 14px;\n}\n\n.peak-custom-tooltip {\n  background: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(8px);\n  border-radius: 10px;\n  padding: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 150;\n  min-width: 100px;\n  color: #fff;\n  font-size: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n\n.peak-custom-tooltip .tooltip-year,\n.peak-custom-tooltip .tooltip-value {\n  color: #fff;\n}\n\n.peak-specific-day {\n  margin-top: 20px;\n}\n.peak-specific-day label {\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.peak-advanced-comparison {\n  margin-top: 20px;\n}\n.peak-advanced-comparison .peak-date-range {\n  margin-bottom: 20px;\n}\n.peak-advanced-comparison .peak-date-range label {\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.peak-difference-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.peak-difference-item .peak-difference-label {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  opacity: 0.9;\n}\n.peak-difference-item .peak-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.peak-difference-item .peak-difference-value-container .peak-arrow-up {\n  color: rgb(244, 67, 54);\n  font-size: 0;\n  font-weight: 900;\n  text-shadow: 0 0 8px rgba(244, 67, 54, 0.5);\n}\n.peak-difference-item .peak-difference-value-container .peak-arrow-up::before {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid rgb(244, 67, 54);\n  filter: drop-shadow(0 0 4px rgba(244, 67, 54, 0.5));\n}\n.peak-difference-item .peak-difference-value-container .peak-arrow-down {\n  color: rgb(76, 175, 80);\n  font-size: 0;\n  font-weight: 900;\n  text-shadow: 0 0 8px rgba(76, 175, 80, 0.5);\n}\n.peak-difference-item .peak-difference-value-container .peak-arrow-down::before {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid rgb(76, 175, 80);\n  filter: drop-shadow(0 0 4px rgba(76, 175, 80, 0.5));\n}\n.peak-difference-item .peak-difference-value-container .peak-difference-value {\n  font-weight: 800;\n  font-size: 16px;\n}\n\n.wc-graph-dot {\n  stroke: #fff !important;\n  stroke-width: 2px !important;\n  r: 6 !important;\n  filter: drop-shadow(0 2px 6px rgba(100, 181, 246, 0.25));\n  opacity: 1 !important;\n  z-index: 2;\n}\n\n.wc-graph-active-dot {\n  stroke: #fff !important;\n  stroke-width: 2px !important;\n  r: 8 !important;\n  fill: #64b5f6 !important;\n  filter: drop-shadow(0 4px 12px rgba(100, 181, 246, 0.35));\n  opacity: 1 !important;\n  z-index: 3;\n}\n\n@media (max-width: 768px) {\n  .peak-widget .peak-glass-bg {\n    padding: 16px 12px;\n  }\n  .peak-widget .peak-widget-header {\n    margin-bottom: 16px;\n  }\n  .peak-widget .peak-widget-header .peak-header-left .peak-icon {\n    width: 28px;\n    height: 28px;\n  }\n  .peak-widget .peak-widget-header .peak-header-left .peak-widget-title {\n    font-size: 1.3rem;\n  }\n  .peak-widget .peak-widget-header .peak-header-right .peak-compare-btn {\n    font-size: 0.8rem;\n    padding: 4px 8px;\n  }\n  .peak-widget .peak-widget-content {\n    gap: 16px;\n  }\n  .peak-widget .peak-stats-section .peak-main-stat .peak-stat-value .peak-number {\n    font-size: 2.5rem;\n  }\n  .peak-widget .peak-stats-section .peak-main-stat .peak-stat-value .peak-unit {\n    font-size: 1.3rem;\n  }\n  .peak-widget .peak-bottom-stats {\n    gap: 8px;\n  }\n  .peak-widget .peak-bottom-stats .peak-stat-card {\n    padding: 12px 8px;\n  }\n  .peak-widget .peak-bottom-stats .peak-stat-card .peak-stat-number {\n    font-size: 1.3rem;\n  }\n  .peak-widget .peak-bottom-stats .peak-stat-card .peak-stat-label {\n    font-size: 0.7rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .peak-widget .peak-glass-bg {\n    background: var(--glass-bg);\n  }\n}\n@media (prefers-contrast: high) {\n  .peak-widget .peak-glass-bg {\n    border: 2px solid var(--glass-border);\n  }\n  .peak-widget .peak-stats-section .peak-main-stat .peak-stat-value .peak-number {\n    -webkit-text-fill-color: var(--text-primary);\n    background: none;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/energysnapshot/energysnapshot.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/energysnapshot/energysnapshot.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".energy-snapshot-widget {\n  padding: 24px 16px !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  border: 1.5px solid rgba(255, 255, 255, 0.18);\n  padding: 0rem 1.5rem;\n  padding-top: 1rem;\n  margin-bottom: 1.5rem;\n  color: #fff;\n  margin: auto;\n  transition: box-shadow 0.3s;\n  position: relative;\n  animation: widget-fade-in 1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes widget-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.98) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.energy-snapshot-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.energy-snapshot-title {\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  animation: title-pop 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes title-pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.energy-snapshot-stats {\n  display: flex;\n  gap: 1.5rem;\n  font-size: 1.1rem;\n  margin-top: 0.5rem;\n  justify-content: center;\n  align-items: stretch;\n  flex-wrap: wrap;\n}\n\n.energy-snapshot-stat {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 18px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 1.1rem 1.3rem 0.9rem 1.3rem;\n  min-width: 140px;\n  min-height: 90px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n  animation: stat-fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n\n.energy-snapshot-stat:hover {\n  background: rgba(255, 255, 255, 0.18);\n  box-shadow: 0 4px 18px rgba(255, 255, 255, 0.1);\n}\n\n@keyframes stat-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.energy-snapshot-stat-value {\n  font-size: 1.7rem;\n  font-weight: 700;\n  color: #fff;\n  margin: 0.2rem 0 0.1rem 0;\n  letter-spacing: 0.01em;\n  transition: color 0.3s;\n  animation: value-bounce 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes value-bounce {\n  0% {\n    transform: scale(0.9);\n  }\n  60% {\n    transform: scale(1.08);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.energy-snapshot-percent {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-left: 0.5rem;\n  color: #4caf50;\n  transition: color 0.3s;\n}\n\n.energy-snapshot-percent.negative {\n  color: #ff4d4f;\n}\n\n.energy-snapshot-chart {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 1rem 0.5rem 0.5rem 0.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  animation: chart-fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.energy-snapshot-chart .es-chart-header {\n  margin-bottom: 24px;\n}\n.energy-snapshot-chart .es-chart-header .es-chart-para {\n  font-size: 1.3rem;\n  color: #fff;\n  margin: 0;\n  line-height: 1.4;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.energy-snapshot-chart .es-chart-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #fff;\n  margin: 0 0 8px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n@keyframes chart-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.energy-snapshot-alerts {\n  height: 95px;\n  max-height: 95px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background: linear-gradient(90deg, rgba(255, 80, 80, 0.28) 0%, rgba(255, 80, 80, 0) 100%);\n  border-left: 4px solid #ff4d4f;\n  border-radius: 14px;\n  padding: 0.85rem 1.2rem;\n  color: #ffffff;\n  font-size: 1rem;\n  animation: alert-fade-in 1.1s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(255, 80, 80, 0.08);\n  position: relative;\n}\n\n@keyframes alert-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Chart line/point animation (Recharts will animate, but add a pulse on update) */\n.recharts-line-dot {\n  animation: dot-pulse 1.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes dot-pulse {\n  0% {\n    transform: scale(0.7);\n    opacity: 0.5;\n  }\n  60% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.scrollable-alerts {\n  height: 120px;\n  max-height: 120px;\n  padding-right: 0;\n}\n\n.energy-snapshot-alerts ul {\n  list-style: none;\n  padding-left: 0;\n  margin: 0 8px 0 8px;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n}\n\n.energy-snapshot-alerts li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 0.5em 1.2em;\n  box-shadow: 0 0 8px 0 rgba(255, 77, 79, 0.2);\n  transition: box-shadow 0.2s, background 0.2s;\n  width: 95%;\n  max-width: 98%;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 32px;\n}\n\n.energy-snapshot-alerts li span {\n  text-align: center;\n}\n\n@keyframes tooltip-pop {\n  from {\n    opacity: 0;\n    transform: scale(0.92) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.energy-snapshot-alert-marker {\n  filter: drop-shadow(0 0 6px #ff4d4f);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1333333333);\n  padding: 2px;\n}\n\n.compare-btn-energysnapshot {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.compare-btn-energysnapshot:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);\n}\n.compare-btn-energysnapshot:active {\n  transform: translateY(0);\n}\n\n.glass-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(30, 32, 50, 0.25);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(4px);\n}\n\n.glass-modal {\n  background: rgba(255, 255, 255, 0.13);\n  border-radius: 24px;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  padding: 2.5rem 2rem 2rem 2rem;\n  min-width: 370px;\n  max-width: 95vw;\n  backdrop-filter: blur(18px) saturate(180%);\n  border: 1.5px solid rgba(255, 255, 255, 0.18);\n  color: #fff;\n  position: relative;\n}\n\n.compare-modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.compare-results {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 2rem;\n  margin-bottom: 1.2rem;\n}\n\n.compare-block {\n  background: rgba(255, 255, 255, 0.18);\n  border-radius: 18px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  padding: 1.2em 1.5em;\n  min-width: 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #fff;\n  backdrop-filter: blur(8px);\n}\n\n.compare-label {\n  font-size: 1rem;\n  opacity: 0.8;\n  margin-bottom: 0.3em;\n}\n\n.compare-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n}\n\n.compare-percent {\n  font-size: 1.3rem;\n  font-weight: 700;\n  align-self: center;\n  margin-top: 0.5em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.calculate-btn,\n.close-btn-energysnapshot {\n  background: rgba(255, 255, 255, 0.18);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6em 1.5em;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #fff;\n  margin-right: 0.5em;\n  margin-left: 0.5em;\n  margin-bottom: 0.2em;\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  backdrop-filter: blur(8px);\n}\n\n.calculate-btn:hover,\n.close-btn-energysnapshot {\n  background: rgba(255, 255, 255, 0.28);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);\n}\n\n.compare-results-better {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 2.5rem;\n  position: relative;\n  min-height: 145px;\n}\n\n.compare-block {\n  background: rgba(255, 255, 255, 0.18);\n  border-radius: 18px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  padding: 1.2em 1.5em;\n  min-width: 140px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #fff;\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.18);\n  transition: box-shadow 0.2s, border 0.2s;\n}\n\n.compare-block:hover {\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.16);\n  border: 1.5px solid rgba(255, 255, 255, 0.3333333333);\n}\n\n.compare-percent-badge {\n  position: absolute;\n  left: 50%;\n  align-self: flex-end;\n  transform: translateX(-50%);\n  min-width: 70px;\n  padding: 0.6em 1.4em;\n  border-radius: 999px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  z-index: 2;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  letter-spacing: 0.01em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n}\n\n.energy-comparison-results {\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.energy-comparison-results .energy-results-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.energy-comparison-results .energy-results-main .energy-result-block {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 15px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.energy-comparison-results .energy-results-main .energy-result-block .energy-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.energy-comparison-results .energy-results-main .energy-result-block .energy-result-value {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n}\n.energy-comparison-results .energy-results-main .energy-result-comparison {\n  border-left: 3px solid rgba(255, 255, 255, 0.3);\n}\n.energy-comparison-results .energy-results-main .energy-result-current {\n  border-right: 3px solid #4caf50;\n}\n.energy-comparison-results .energy-result-difference {\n  display: flex;\n  gap: 12px;\n  justify-content: space-around;\n}\n.energy-comparison-results .energy-result-difference .energy-difference-item {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 12px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n}\n.energy-comparison-results .energy-result-difference .energy-difference-item .energy-difference-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.95;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n}\n.energy-comparison-results .energy-result-difference .energy-difference-item .energy-difference-value {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n@media (max-width: 700px) {\n  .energy-snapshot-widget {\n    padding: 1rem 0.3rem;\n    max-width: 99vw;\n  }\n  .energy-snapshot-header {\n    gap: 0.25rem;\n  }\n  .energy-snapshot-stats {\n    flex-direction: column;\n    gap: 0.7rem;\n    align-items: center;\n  }\n  .energy-snapshot-stat {\n    min-width: 90vw;\n    max-width: 99vw;\n    width: 100%;\n    margin-bottom: 0.7rem;\n  }\n  .energy-snapshot-chart {\n    padding: 0.5rem 0.1rem 0.1rem 0.1rem;\n  }\n}\n.modal-container.energy-snapshot-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.modal-container.energy-snapshot-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n.modal-container.energy-snapshot-compare-modal .modal-panel .modal-header {\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px 12px 0 0;\n}\n.modal-container.energy-snapshot-compare-modal .modal-panel .modal-body {\n  padding: 16px !important;\n  height: 100%;\n  margin: 0 !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  overflow-y: auto !important;\n  border-radius: 0 0 12px 12px !important;\n}\n\n.energy-snapshot-compare-content .energy-snapshot-compare-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-compare-select {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  padding-right: 40px;\n  color: #fff;\n  font-size: 1.2rem;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-compare-select:focus {\n  outline: none;\n  border-color: #64b5f6;\n  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);\n  z-index: 1000;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-compare-select option {\n  background: rgba(20, 20, 20, 0.95) !important;\n  color: #fff !important;\n  padding: 8px 12px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: none;\n  backdrop-filter: blur(10px);\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-compare-select option:hover {\n  background: rgba(100, 181, 246, 0.2) !important;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-compare-select option:checked {\n  background: rgba(100, 181, 246, 0.3) !important;\n  color: #fff !important;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-clear-btn {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #fff;\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-compare-section .energy-snapshot-select-container .energy-snapshot-clear-btn:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-calculate-btn {\n  background: linear-gradient(135deg, var(--neutral-color) 0%, #42a5f5 100%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-calculate-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(100, 181, 246, 0.3);\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-calculate-btn:active {\n  transform: translateY(0);\n}\n.energy-snapshot-compare-content .energy-snapshot-compare-options .energy-snapshot-calculate-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-comparison,\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 15px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-comparison .energy-snapshot-result-label,\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-current .energy-snapshot-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-comparison .energy-snapshot-result-value,\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-current .energy-snapshot-result-value {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-comparison {\n  border-left: 3px solid rgba(255, 255, 255, 0.3);\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-current {\n  border-right: 3px solid #4caf50;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-difference {\n  display: flex;\n  gap: 12px;\n  justify-content: space-around;\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 12px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item .energy-snapshot-difference-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.95;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n}\n.energy-snapshot-compare-content .energy-snapshot-comparison-results .energy-snapshot-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item .energy-snapshot-difference-value {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.energy-consumption-results-compact .energy-snapshot-result-main {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-comparison,\n.energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-current {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 15px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-comparison .energy-snapshot-result-label,\n.energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-current .energy-snapshot-result-label {\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.8;\n}\n.energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-comparison .energy-snapshot-result-value,\n.energy-consumption-results-compact .energy-snapshot-result-main .energy-snapshot-result-current .energy-snapshot-result-value {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n}\n.energy-consumption-results-compact .energy-snapshot-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.energy-consumption-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.energy-consumption-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.energy-consumption-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item .energy-snapshot-difference-label {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.energy-consumption-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item .energy-snapshot-difference-value {\n  font-weight: 700;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.energy-consumption-results-compact .energy-snapshot-result-difference .energy-snapshot-difference-item .energy-snapshot-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.glass-modal {\n  min-width: 50%;\n  width: auto;\n  max-width: 100%;\n  min-height: 50%;\n  height: auto;\n  max-height: 100%;\n  background: rgba(255, 255, 255, 0.05) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  border-radius: 12px !important;\n}\n\n.glass-modal .modal-body {\n  padding: 16px !important;\n  height: 100%;\n  margin: 0 !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n  overflow-y: auto !important;\n  border-radius: 0 0 12px 12px !important;\n}", ""]);
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
exports.push([module.id, ".dt-widgets-left-panel-site-sus {\n  padding: 15px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n*::-webkit-scrollbar {\n  width: 5px !important;\n}\n\n*::-webkit-scrollbar-track {\n  width: 5px !important;\n  background: #424242 !important;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  width: 5px !important;\n  background: #8F8F8F !important;\n}\n\n.dt-widgets-left-panel-site-sus {\n  direction: rtl;\n}\n\n.dt-widgets-left-panel-site-sus > * {\n  direction: ltr;\n}", ""]);
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
const PeakDemand_1 = __importDefault(__webpack_require__(/*! ./prod/PeakDemand/PeakDemand */ "./src/prod/PeakDemand/PeakDemand.tsx"));
const EUI_1 = __importDefault(__webpack_require__(/*! ./prod/EnergyUseIntensity/EUI */ "./src/prod/EnergyUseIntensity/EUI.tsx"));
const EnergySnapshot_1 = __importDefault(__webpack_require__(/*! ./prod/energysnapshot/EnergySnapshot */ "./src/prod/energysnapshot/EnergySnapshot.tsx"));
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const energy_left_panel = (props) => {
    return (
    // <WidgetWrapper>
    //     <TitleBar title='Left_panel'>
    //         <FilterPanel>
    //         </FilterPanel>
    //     </TitleBar>
    // </WidgetWrapper>
    React.createElement("div", { className: "dt-widgets-left-panel-site-sus" },
        React.createElement("div", { style: { width: "100%", height: "100%", position: "relative" } },
            React.createElement("div", { style: { width: "100%", height: "350", position: "relative", marginBottom: "20px" } },
                React.createElement(EnergySnapshot_1.default, { LocationKey: props.LocationKey, uxpContext: props.uxpContext })),
            React.createElement("div", { style: { width: "100%", height: "350", position: "relative", marginBottom: "20px" } },
                React.createElement(PeakDemand_1.default, { LocationKey: props.LocationKey, uxpContext: props.uxpContext })),
            React.createElement("div", { style: { width: "100%", height: "350", position: "relative", marginBottom: "20px" } },
                React.createElement(EUI_1.default, { LocationKey: props.LocationKey, uxpContext: props.uxpContext })))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "energy_left_panel",
    widget: energy_left_panel,
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
            }
        ]
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "left_panel",
    label: "Left_panel",
    // click: () => alert("Hello"),
    component: Left_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"left_panel",
   component: Left_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "left_panel", // use all lowercase letters
    name: 'Left_panel',
    description: 'Tempalte Description',
    template: Left_panelWidget,
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

/***/ "./src/prod/EnergyUseIntensity/EUI.scss":
/*!**********************************************!*\
  !*** ./src/prod/EnergyUseIntensity/EUI.scss ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./EUI.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/EnergyUseIntensity/EUI.scss");

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

/***/ "./src/prod/EnergyUseIntensity/EUI.tsx":
/*!*********************************************!*\
  !*** ./src/prod/EnergyUseIntensity/EUI.tsx ***!
  \*********************************************/
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
__webpack_require__(/*! ./EUI.scss */ "./src/prod/EnergyUseIntensity/EUI.scss");
const EUI = (props) => {
    const [showCompareModal, setShowCompareModal] = (0, react_1.useState)(false);
    const [compareOption, setCompareOption] = (0, react_1.useState)('last-week');
    const [comparisonResults, setComparisonResults] = (0, react_1.useState)(null);
    const [range1, setRange1] = (0, react_1.useState)({ start: null, end: null });
    const [range2, setRange2] = (0, react_1.useState)({ start: null, end: null });
    // Remove all references to mockData and mockData.json
    // Define mock data for chartData and modalData directly in the code
    // Replace chartData with weekly data for WK 1 to WK 5
    const chartData = [
        { week: 'Week 1', value: 3.2 },
        { week: 'Week 2', value: 3.4 },
        { week: 'Week 3', value: 3.1 },
        { week: 'Week 4', value: 3.8 },
        { week: 'Week 5', value: 3.5 }
    ];
    const modalData = chartData;
    const currentValue = modalData[modalData.length - 1].value;
    const unit = 'kWh / m² / week';
    // Calculate baseline as last year's value and target as baseline -5%
    const lastYearValue = modalData[modalData.length - 2].value;
    const BASELINE = lastYearValue;
    // Set the chart and modal range and target
    const CHART_MIN = 0;
    const CHART_MAX = 5;
    const BAR_MIN = 3;
    const BAR_MAX = 4;
    const TARGET = 3.5;
    // --- Add weekly data for a month (e.g., January) ---
    const WEEKLY_TARGET = 3.35;
    const weeklyUnit = 'kWh / m² / week';
    // Mock data for comparison filters
    const mockComparisonAverages = {
        lastWeek: 3.38,
        lastMonth: 3.42,
        lastQuarter: 3.36,
        last6Months: 3.44,
        lastYear: 3.41
    };
    // Calculate sustainability metrics
    const calculateMetrics = () => {
        const currentYear = modalData[modalData.length - 1]; // 2025 data
        const previousYear = modalData[modalData.length - 2]; // 2024 data
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
        // Return a random value in the 3-4 range
        return Math.random() * (4 - 3) + 3;
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
            case 'last-week':
                comparisonLabel = 'Last week average';
                comparisonPeriodIntensity = mockComparisonAverages.lastWeek;
                break;
            case 'last-month':
                comparisonLabel = 'Last month weekly average';
                comparisonPeriodIntensity = mockComparisonAverages.lastMonth;
                break;
            case 'last-quarter':
                comparisonLabel = 'Last quarter weekly average';
                comparisonPeriodIntensity = mockComparisonAverages.lastQuarter;
                break;
            case 'last-6-months':
                comparisonLabel = 'Last 6 months weekly average';
                comparisonPeriodIntensity = mockComparisonAverages.last6Months;
                break;
            case 'last-year':
                comparisonLabel = 'Last year weekly average';
                comparisonPeriodIntensity = mockComparisonAverages.lastYear;
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
    // Handle comparison calculation
    const handleCompare = () => {
        if (!compareOption) {
            setComparisonResults(null);
            return;
        }
        const results = getComparisonData();
        setComparisonResults(results);
    };
    // Clear comparison
    const clearComparison = () => {
        setCompareOption('');
        setComparisonResults(null);
        setRange1({ start: null, end: null });
        setRange2({ start: null, end: null });
    };
    // Enhanced tooltip with detailed sustainability insights
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const value = payload[0].value;
            const diff = value - (TARGET);
            const percent = ((diff / TARGET) * 100);
            const isBetter = value < TARGET;
            const color = isBetter ? '#4CAF50' : '#FF4444';
            const arrow = isBetter ? '▼' : '▲';
            return (React.createElement("div", { className: "eui-custom-tooltip" },
                React.createElement("div", { className: "tooltip-year", style: { fontSize: '1.1rem', fontWeight: 600 } }, label),
                React.createElement("div", { className: "tooltip-value", style: { fontSize: '1.2rem', fontWeight: 700 } },
                    value.toFixed(2),
                    " kWh / m\u00B2 / week"),
                React.createElement("div", { className: "tooltip-target", style: { fontSize: '1.1rem', fontWeight: 600 } }, `Target: ${TARGET.toFixed(2)} kWh / m² / week`),
                React.createElement("div", { style: { color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, fontSize: '1.1rem', marginTop: 4 } },
                    arrow,
                    " ",
                    Math.abs(diff).toFixed(2),
                    " kWh / m\u00B2 / week (",
                    Math.abs(percent).toFixed(1),
                    "%) vs Target")));
        }
        return null;
    };
    // Custom dot for chart with enhanced styling
    const renderDot = (props) => {
        const { cx, cy, payload } = props;
        const color = payload.value <= TARGET ? 'rgb(76, 175, 80)' : payload.value >= BASELINE ? 'rgb(255, 152, 0)' : '#6EC6FF';
        return (React.createElement("g", null,
            React.createElement("circle", { cx: cx, cy: cy, r: 6, fill: color, stroke: "#fff", strokeWidth: 2, className: "eui-graph-dot" })));
    };
    // Custom active dot for chart
    const renderActiveDot = (props) => {
        const { cx, cy, payload } = props;
        const color = payload.value <= TARGET ? 'rgb(76, 175, 80)' : payload.value >= BASELINE ? 'rgb(255, 152, 0)' : '#6EC6FF';
        return (React.createElement("g", null,
            React.createElement("circle", { cx: cx, cy: cy, r: 8, fill: color, stroke: "#fff", strokeWidth: 2, className: "eui-graph-active-dot" })));
    };
    // Custom label for the ReferenceLine
    const TargetLabel = (props) => (React.createElement("text", { x: props.viewBox.x + 10, y: props.viewBox.y, fill: "#4CAF50", fontSize: 12, alignmentBaseline: "middle" }, `Target (${WEEKLY_TARGET})`));
    // Comparison filter options
    const filterOptions = [
        { value: 'last-week', label: 'Last week average', mockKey: 'lastWeek' },
        { value: 'last-month', label: 'Last month weekly average', mockKey: 'lastMonth' },
        { value: 'last-quarter', label: 'Last quarter weekly average', mockKey: 'lastQuarter' },
        { value: 'last-6-months', label: 'Last 6 months weekly average', mockKey: 'last6Months' },
        { value: 'last-year', label: 'Last year weekly average', mockKey: 'lastYear' },
    ];
    // Calculate and set comparison result
    function calculateComparison(type, advRange1, advRange2) {
        var _a;
        const activeCompareType = type || compareOption;
        let selected, current;
        const mockHistoricalAverages = {
            'last-week': mockComparisonAverages.lastWeek,
            'last-month': mockComparisonAverages.lastMonth,
            'last-quarter': mockComparisonAverages.lastQuarter,
            'last-6-months': mockComparisonAverages.last6Months,
            'last-year': mockComparisonAverages.lastYear,
        };
        if (activeCompareType !== 'advanced-comparison') {
            const opt = filterOptions.find(o => o.value === activeCompareType);
            selected = {
                label: opt ? opt.label : activeCompareType,
                value: (_a = mockHistoricalAverages[activeCompareType]) !== null && _a !== void 0 ? _a : 0,
                unit: 'kWh / m² / week',
            };
            current = {
                label: 'Current Week',
                value: currentValue,
                unit: 'kWh / m² / week',
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
                value: 3.25,
                unit: 'kWh / m² / week',
            };
            current = {
                label: `${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
                value: 3.40,
                unit: 'kWh / m² / week',
            };
        }
        const percentChange = selected && current && selected.value !== 0
            ? (((current.value - selected.value) / selected.value) * 100).toFixed(1)
            : '0.0';
        setComparisonResults({ selected, current, percentChange, error: undefined });
    }
    // Show result for the selected option when the modal is opened or compareOption changes
    React.useEffect(() => {
        if (showCompareModal && compareOption !== 'advanced-comparison') {
            calculateComparison(compareOption);
        }
    }, [showCompareModal, compareOption]);
    return (React.createElement("div", { className: "eui-widget" },
        React.createElement("div", { className: "eui-glass-bg" },
            React.createElement("div", { className: "eui-widget-header" },
                React.createElement("div", { className: "eui-header-left" },
                    React.createElement("div", { className: "eui-icon" },
                        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "#FFD600", "stroke-width": "2" }),
                            React.createElement("path", { d: "M13 2L6 14H11V22L18 10H13V2Z", fill: "#FFD600" }))),
                    React.createElement("h2", { className: "eui-widget-title" }, "Energy Use Intensity")),
                React.createElement("div", { className: "eui-header-right" },
                    React.createElement("button", { className: "eui-compare-btn", onClick: () => setShowCompareModal(!showCompareModal) }, "Compare"))),
            React.createElement("div", { className: "eui-widget-content" },
                React.createElement("div", { className: "eui-stats-section" },
                    React.createElement("div", { className: "eui-main-stat" },
                        React.createElement("div", { className: "eui-stat-value" },
                            React.createElement("span", { className: "eui-number", style: { color: '#fff' } }, "3.40"),
                            React.createElement("span", { className: "eui-unit" }, " kWh / m\u00B2 / week")),
                        React.createElement("div", { className: "eui-stat-label" }, "Weekly Average till last hour"))),
                React.createElement("div", { className: "eui-chart-container" },
                    React.createElement("div", { className: "eui-chart-header" },
                        React.createElement("h3", null, "Weekly Trend"),
                        React.createElement("p", { className: "eui-chart-para" }, "Hover over bars to see detailed information")),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 180 },
                        React.createElement(recharts_1.BarChart, { data: chartData, margin: { top: 20, right: 20, left: 0, bottom: 5 }, barCategoryGap: "30%" // space between bars
                            , barGap: 8 },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "week", stroke: "rgba(255,255,255,0.8)", tick: { fill: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600 }, axisLine: { stroke: 'rgba(255,255,255,0.3)' } }),
                            React.createElement(recharts_1.YAxis, { stroke: "rgba(255,255,255,0.8)", tick: { fill: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600 }, axisLine: { stroke: 'rgba(255,255,255,0.3)' }, domain: [CHART_MIN, CHART_MAX], ticks: [0, 1, 2, 3, 4, 5], label: { value: unit, angle: -90, position: 'center', fill: '#fff', fontSize: '1.1rem', fontWeight: 600 } }),
                            React.createElement(recharts_1.Tooltip, { content: React.createElement(CustomTooltip, null), formatter: (value) => `${value} ${weeklyUnit}`, labelFormatter: label => `Week: ${label}`, contentStyle: {
                                    background: 'rgba(30,30,30,0.95)',
                                    border: '1px solid #4CAF50',
                                    borderRadius: 8,
                                    color: '#fff',
                                    fontWeight: 600
                                }, cursor: false }),
                            React.createElement(recharts_1.ReferenceLine, { y: TARGET, stroke: "#4CAF50", strokeDasharray: "5 5", strokeWidth: 2 }),
                            React.createElement(recharts_1.Bar, { dataKey: "value", fill: "rgb(66, 165, 245)", radius: [6, 6, 0, 0], barSize: 40, style: { filter: 'drop-shadow(0 2px 8px rgba(66,165,245,0.25))' } }))),
                    React.createElement("div", { className: "eui-legend-container" },
                        React.createElement("div", { className: "eui-legend-item" },
                            React.createElement("div", { className: "eui-legend-dot", style: { backgroundColor: '#4CAF50' } }),
                            React.createElement("span", { className: "eui-legend-text" }, "Target")))))),
        React.createElement(components_1.Modal, { show: showCompareModal, onOpen: () => { }, onClose: () => setShowCompareModal(false), title: "Compare Energy Use Intensity", className: "dt-eui-compare-modal" },
            React.createElement("div", { className: "eui-compare-content" },
                React.createElement("div", { className: "eui-compare-options" },
                    React.createElement("div", { className: "eui-compare-section" },
                        React.createElement("label", null, "Compare This Week Average EUI With: "),
                        React.createElement("div", { className: "eui-select-container" },
                            React.createElement("select", { value: compareOption, onChange: (e) => {
                                    setCompareOption(e.target.value);
                                    setComparisonResults(null);
                                    setRange1({ start: null, end: null });
                                    setRange2({ start: null, end: null });
                                    if (e.target.value !== 'advanced-comparison') {
                                        setTimeout(() => calculateComparison(e.target.value), 0);
                                    }
                                }, className: "eui-compare-select" },
                                filterOptions.map(opt => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))),
                                React.createElement("option", { value: "advanced-comparison" }, "Advance compare")),
                            React.createElement("span", { className: "eui-dropdown-arrow", style: { position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' } },
                                React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    React.createElement("path", { d: "M7 10l5 5 5-5", stroke: "#888", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))))),
                    compareOption === 'advanced-comparison' && (React.createElement("div", { className: "eui-advanced-comparison" },
                        React.createElement("div", { className: "eui-date-range" },
                            React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Range 1:"),
                            React.createElement(components_1.DateRangePicker, { title: "Select First Range", startDate: range1.start ? new Date(range1.start) : undefined, endDate: range1.end ? new Date(range1.end) : undefined, onChange: (start, end) => {
                                    setRange1({
                                        start: start ? new Date(start) : null,
                                        end: end ? new Date(end) : null,
                                    });
                                } })),
                        React.createElement("div", { className: "eui-date-range" },
                            React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Range 2:"),
                            React.createElement(components_1.DateRangePicker, { title: "Select Second Range", startDate: range2.start ? new Date(range2.start) : undefined, endDate: range2.end ? new Date(range2.end) : undefined, onChange: (start, end) => {
                                    setRange2({
                                        start: start ? new Date(start) : null,
                                        end: end ? new Date(end) : null,
                                    });
                                } })))),
                    compareOption === 'advanced-comparison' && (React.createElement("button", { className: "eui-calculate-btn", onClick: () => calculateComparison('advanced-comparison', range1, range2), disabled: !range1.start || !range1.end || !range2.start || !range2.end }, "Compare"))),
                comparisonResults && !comparisonResults.error && comparisonResults.selected && comparisonResults.current && (React.createElement("div", { className: "eui-comparison-results" },
                    React.createElement("h4", null, "Comparison Results"),
                    React.createElement("div", { className: "eui-results-compact" },
                        React.createElement("div", { className: "eui-result-main" },
                            React.createElement("div", { className: "eui-result-comparison" },
                                React.createElement("div", { className: "eui-result-label" },
                                    compareOption === 'advanced-comparison' ? 'Range 1: ' : '',
                                    comparisonResults.selected.label),
                                React.createElement("div", { className: "eui-result-value" },
                                    formatNumber(comparisonResults.selected.value),
                                    " ",
                                    comparisonResults.selected.unit)),
                            React.createElement("div", { className: "eui-result-current" },
                                React.createElement("div", { className: "eui-result-label" },
                                    compareOption === 'advanced-comparison' ? 'Range 2: ' : '',
                                    comparisonResults.current.label),
                                React.createElement("div", { className: "eui-result-value" },
                                    formatNumber(comparisonResults.current.value),
                                    " ",
                                    comparisonResults.current.unit))),
                        React.createElement("div", { className: "eui-result-difference" },
                            React.createElement("div", { className: "eui-difference-item" },
                                React.createElement("span", { className: "eui-difference-label" }, "Difference"),
                                React.createElement("span", { className: "eui-difference-value-container" },
                                    comparisonResults.current.value - comparisonResults.selected.value < 0 ? (React.createElement("span", { className: "eui-arrow-down" }, "\u2193")) : comparisonResults.current.value - comparisonResults.selected.value > 0 ? (React.createElement("span", { className: "eui-arrow-up" }, "\u2191")) : null,
                                    React.createElement("span", { className: "eui-difference-value", style: {
                                            color: comparisonResults.current.value - comparisonResults.selected.value < 0
                                                ? 'rgb(76, 175, 80)'
                                                : comparisonResults.current.value - comparisonResults.selected.value > 0
                                                    ? 'rgb(244, 67, 54)'
                                                    : '#fff'
                                        } },
                                        Math.abs(comparisonResults.current.value - comparisonResults.selected.value).toFixed(2),
                                        " ",
                                        comparisonResults.current.unit))),
                            React.createElement("div", { className: "eui-difference-item" },
                                React.createElement("span", { className: "eui-difference-label" }, "Change"),
                                React.createElement("span", { className: "eui-difference-value-container" },
                                    parseFloat(comparisonResults.percentChange) < 0 ? (React.createElement("span", { className: "eui-arrow-down" }, "\u2193")) : parseFloat(comparisonResults.percentChange) > 0 ? (React.createElement("span", { className: "eui-arrow-up" }, "\u2191")) : null,
                                    React.createElement("span", { className: "eui-difference-value", style: {
                                            color: parseFloat(comparisonResults.percentChange) < 0
                                                ? 'rgb(76, 175, 80)'
                                                : parseFloat(comparisonResults.percentChange) > 0
                                                    ? 'rgb(244, 67, 54)'
                                                    : '#fff'
                                        } },
                                        Math.abs(parseFloat(comparisonResults.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports["default"] = EUI;


/***/ }),

/***/ "./src/prod/PeakDemand/PeakDemand.scss":
/*!*********************************************!*\
  !*** ./src/prod/PeakDemand/PeakDemand.scss ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./PeakDemand.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/PeakDemand/PeakDemand.scss");

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

/***/ "./src/prod/PeakDemand/PeakDemand.tsx":
/*!********************************************!*\
  !*** ./src/prod/PeakDemand/PeakDemand.tsx ***!
  \********************************************/
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
__webpack_require__(/*! ./PeakDemand.scss */ "./src/prod/PeakDemand/PeakDemand.scss");
const PeakDemand = (props) => {
    const [showCompareModal, setShowCompareModal] = (0, react_1.useState)(false);
    const [compareOption, setCompareOption] = (0, react_1.useState)('yesterday');
    const [period1Start, setPeriod1Start] = (0, react_1.useState)('');
    const [period1End, setPeriod1End] = (0, react_1.useState)('');
    const [period2Start, setPeriod2Start] = (0, react_1.useState)('');
    const [period2End, setPeriod2End] = (0, react_1.useState)('');
    const [comparisonResults, setComparisonResults] = (0, react_1.useState)(null);
    const [selectedDates1, setSelectedDates1] = (0, react_1.useState)([]);
    const [selectedDates2, setSelectedDates2] = (0, react_1.useState)([]);
    const [specificDate, setSpecificDate] = (0, react_1.useState)('');
    const [range1, setRange1] = (0, react_1.useState)({ start: null, end: null });
    const [range2, setRange2] = (0, react_1.useState)({ start: null, end: null });
    // Mock data for chart (7-day trend)
    const peakDataWithTime = [
        { day: 'Mon', value: 1850, time: '14:30' },
        { day: 'Tue', value: 2000, time: '15:45' },
        { day: 'Wed', value: 1800, time: '13:20' },
        { day: 'Thu', value: 2200, time: '16:10' },
        { day: 'Fri', value: 2100, time: '14:55' },
        { day: 'Sat', value: 1950, time: '12:30' },
        { day: 'Sun', value: 2050, time: '11:15' }
    ];
    // Mock data for modal comparison (example values)
    const mockComparisonAverages = {
        week: 2000,
        month: 2100,
        quarter: 2150,
        year: 2050
    };
    // Use data from JSON
    const waterData = peakDataWithTime;
    const currentDay = 'Sun';
    const currentData = waterData.find((d) => d.day === currentDay);
    // Calculate weekly statistics
    const weeklyStats = {
        total: waterData.reduce((sum, day) => sum + day.value, 0),
        average: Math.round(waterData.reduce((sum, day) => sum + day.value, 0) / waterData.length),
        highest: Math.max(...waterData.map((day) => day.value)),
        lowest: Math.min(...waterData.map((day) => day.value))
    };
    // Helper function to format numbers with commas
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    // Helper function to get consumption from JSON or random value
    const getConsumptionForDate = (dateStr) => {
        const date = new Date(dateStr);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString();
        // Check if data exists in JSON
        if (typeof window.mockData !== 'undefined' && window.mockData.waterConsumption) {
            const yearData = window.mockData.waterConsumption[year];
            if (yearData && yearData[month] && yearData[month][day]) {
                return yearData[month][day];
            }
        }
        // Return random value if not found
        return Math.floor(Math.random() * (3500 - 2000 + 1)) + 2000;
    };
    // Helper function to calculate consumption for a date range
    const calculateConsumptionForRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let totalConsumption = 0;
        let dayCount = 0;
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            totalConsumption += getConsumptionForDate(dateStr);
            dayCount++;
        }
        return totalConsumption;
    };
    // Helper function to calculate consumption for multiple selected dates
    const calculateConsumptionForSelectedDates = (dates) => {
        return dates.reduce((total, dateStr) => {
            return total + getConsumptionForDate(dateStr);
        }, 0);
    };
    // Helper function to get comparison data (for modal)
    const getComparisonData = () => {
        const today = new Date();
        let currentPeriodConsumption = 2200; // Example: today's consumption
        let comparisonPeriodConsumption = 0;
        // Map filter values to labels
        const filterLabels = {
            'yesterday': 'Yesterday peak demand',
            'any-specific-day': 'Any specific day peak demand',
            'week-average': 'Last Week Average peak demand',
            'month-average': 'Last Month Average peak demand',
            'quarter-average': 'Last Quarter Average peak demand',
            'yearly-average': 'This Yearly Average peak demand',
        };
        let comparisonLabel = '';
        switch (compareOption) {
            case 'yesterday':
                comparisonPeriodConsumption = 2100;
                comparisonLabel = filterLabels['yesterday'];
                break;
            case 'any-specific-day':
                if (specificDate) {
                    comparisonPeriodConsumption = 2000;
                    comparisonLabel = specificDate;
                }
                else {
                    comparisonPeriodConsumption = 0;
                    comparisonLabel = 'Select a date';
                }
                break;
            case 'week-average':
                comparisonPeriodConsumption = mockComparisonAverages.week;
                comparisonLabel = filterLabels['week-average'];
                break;
            case 'month-average':
                comparisonPeriodConsumption = mockComparisonAverages.month;
                comparisonLabel = filterLabels['month-average'];
                break;
            case 'quarter-average':
                comparisonPeriodConsumption = mockComparisonAverages.quarter;
                comparisonLabel = filterLabels['quarter-average'];
                break;
            case 'yearly-average':
                comparisonPeriodConsumption = mockComparisonAverages.year;
                comparisonLabel = filterLabels['yearly-average'];
                break;
            case 'advanced-comparison':
                if (range1.start && range1.end && range2.start && range2.end) {
                    const period1Consumption = 2000; // mock value
                    const period2Consumption = 2100; // mock value
                    currentPeriodConsumption = period2Consumption;
                    comparisonPeriodConsumption = period1Consumption;
                    comparisonLabel = `${range1.start.toLocaleDateString()} to ${range1.end.toLocaleDateString()}`;
                }
                break;
            default:
                comparisonLabel = filterLabels[compareOption] || '';
        }
        const absoluteDifference = currentPeriodConsumption - comparisonPeriodConsumption;
        const percentageChange = comparisonPeriodConsumption > 0
            ? ((absoluteDifference / comparisonPeriodConsumption) * 100)
            : 0;
        return {
            currentPeriodConsumption,
            comparisonPeriodConsumption,
            absoluteDifference,
            percentageChange,
            comparisonLabel
        };
    };
    // Handle comparison calculation
    const handleCompare = () => {
        if (!compareOption) {
            setComparisonResults(null);
            return;
        }
        const results = getComparisonData();
        console.log('Comparison Results:', results);
        setComparisonResults(results);
    };
    // Clear comparison
    const clearComparison = () => {
        setCompareOption('');
        setComparisonResults(null);
        setPeriod1Start('');
        setPeriod1End('');
        setPeriod2Start('');
        setPeriod2End('');
        setSelectedDates1([]);
        setSelectedDates2([]);
        setSpecificDate('');
        setRange1({ start: null, end: null });
        setRange2({ start: null, end: null });
    };
    // Handle date selection for multiple dates
    const handleDateSelection = (dateStr, period) => {
        const setSelectedDates = period === 'period1' ? setSelectedDates1 : setSelectedDates2;
        const selectedDates = period === 'period1' ? selectedDates1 : selectedDates2;
        if (selectedDates.includes(dateStr)) {
            setSelectedDates(selectedDates.filter(date => date !== dateStr));
        }
        else {
            setSelectedDates([...selectedDates, dateStr]);
        }
    };
    // Generate calendar dates for current month
    const generateCalendarDates = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        const dates = [];
        for (let d = new Date(startDate); d <= lastDay; d.setDate(d.getDate() + 1)) {
            dates.push(d.toISOString().split('T')[0]);
        }
        return dates;
    };
    // Custom dot component with blue color for all points
    const CustomDot = (props) => {
        const { cx, cy, payload } = props;
        const color = '#64b5f6'; // Blue for all points
        return (React.createElement("circle", { cx: cx, cy: cy, r: 6, className: "wc-graph-dot", fill: color, stroke: "#fff", strokeWidth: 2 }));
    };
    // Helper function to format time as 12-hour with am/pm
    const formatTime12Hour = (timeStr) => {
        if (!timeStr)
            return '';
        const [hourStr, minuteStr] = timeStr.split(":");
        let hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);
        const ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        if (hour === 0)
            hour = 12;
        return `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
    };
    // Custom tooltip to show day, value, and time
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const value = payload[0].value;
            const time = payload[0].payload && payload[0].payload.time ? payload[0].payload.time : null;
            const diff = value - THRESHOLD;
            const percent = ((diff / THRESHOLD) * 100);
            const isBetter = value < THRESHOLD;
            const color = isBetter ? '#4CAF50' : '#FF4444';
            const arrow = isBetter ? '▼' : '▲';
            return (React.createElement("div", { className: "peak-custom-tooltip" },
                React.createElement("div", { className: "tooltip-year" }, label),
                time && React.createElement("div", { className: "tooltip-time" },
                    "Time: ",
                    formatTime12Hour(time)),
                React.createElement("div", { className: "tooltip-value" },
                    value.toFixed(2),
                    " kW"),
                React.createElement("div", { className: "tooltip-threshold" },
                    "Threshold: ",
                    THRESHOLD.toFixed(2),
                    " kW"),
                React.createElement("div", { style: { color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 } },
                    arrow,
                    " ",
                    Math.abs(diff).toFixed(2),
                    " kW (",
                    Math.abs(percent).toFixed(1),
                    "%) vs Threshold")));
        }
        return null;
    };
    // Custom labels for ReferenceLines
    const Label348 = (props) => (React.createElement("text", { x: props.viewBox.x + 5, y: props.viewBox.y - 5, fill: "#4CAF50", fontSize: 12, alignmentBaseline: "middle" }, "34.8"));
    const Label580 = (props) => (React.createElement("text", { x: props.viewBox.x + 5, y: props.viewBox.y - 5, fill: "#F44336", fontSize: 12, alignmentBaseline: "middle" }, "58.0"));
    const Label65 = (props) => (React.createElement("text", { x: props.viewBox.x + 5, y: props.viewBox.y - 5, fill: "#FFA500", fontSize: 12, alignmentBaseline: "middle" }, "65"));
    // Set current day (e.g., 'Thu') to 2200, others to values in 1800-2100 range
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const peakData = [
        { day: 'Mon', value: 1850 },
        { day: 'Tue', value: 2000 },
        { day: 'Wed', value: 1800 },
        { day: 'Thu', value: 2200 },
        { day: 'Fri', value: 2100 },
        { day: 'Sat', value: 1950 },
        { day: 'Sun', value: 2050 }
    ];
    const paddedWaterData = peakData;
    const THRESHOLD = 2300;
    // Custom XAxis tick to show only day (remove time below bar)
    const CustomXAxisTick = (props) => {
        const { x, y, payload } = props;
        return (React.createElement("g", { transform: `translate(${x},${y})` },
            React.createElement("text", { x: 0, y: 10, textAnchor: "middle", fill: "#fff", fontSize: 14 }, payload.value)));
    };
    // Comparison filter options
    const filterOptions = [
        { value: 'yesterday', label: 'Yesterday peak demand', mockKey: 'yesterday' },
        { value: 'any-specific-day', label: 'Any specific day peak demand', mockKey: 'any-specific-day' },
        { value: 'week-average', label: 'Last Week Average peak demand', mockKey: 'week' },
        { value: 'month-average', label: 'Last Month Average peak demand', mockKey: 'month' },
        { value: 'quarter-average', label: 'Last Quarter Average peak demand', mockKey: 'quarter' },
        { value: 'yearly-average', label: 'This Yearly Average peak demand', mockKey: 'year' },
    ];
    // Mock values for each comparison type
    const mockHistoricalAverages = {
        'yesterday': 2100,
        'any-specific-day': 2000,
        'week': mockComparisonAverages.week,
        'month': mockComparisonAverages.month,
        'quarter': mockComparisonAverages.quarter,
        'year': mockComparisonAverages.year,
    };
    // Calculate and set comparison result
    function calculateComparison(type, advRange1, advRange2, specific) {
        var _a;
        const activeCompareType = type || compareOption;
        let selected, current;
        if (activeCompareType === 'advanced-comparison') {
            const actualRange1 = advRange1 || range1;
            const actualRange2 = advRange2 || range2;
            if (!actualRange1.start || !actualRange1.end || !actualRange2.start || !actualRange2.end) {
                setComparisonResults({ error: 'Please select valid start and end dates for both ranges.' });
                return;
            }
            selected = {
                label: `${actualRange1.start.toLocaleDateString()} to ${actualRange1.end.toLocaleDateString()}`,
                value: 2000,
                unit: 'kW',
            };
            current = {
                label: `${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
                value: 2100,
                unit: 'kW',
            };
        }
        else if (activeCompareType === 'any-specific-day') {
            if (!specific && !specificDate) {
                setComparisonResults({ error: 'Please select a date.' });
                return;
            }
            selected = {
                label: specific || specificDate,
                value: mockHistoricalAverages['any-specific-day'],
                unit: 'kW',
            };
            current = {
                label: 'Current Period',
                value: 2200,
                unit: 'kW',
            };
        }
        else {
            const opt = filterOptions.find(o => o.value === activeCompareType);
            selected = {
                label: opt ? opt.label : activeCompareType,
                value: (_a = mockHistoricalAverages[opt ? opt.mockKey : 'week']) !== null && _a !== void 0 ? _a : 0,
                unit: 'kW',
            };
            current = {
                label: 'Current Period',
                value: 2200,
                unit: 'kW',
            };
        }
        const percentChange = selected && current && selected.value !== 0
            ? (((current.value - selected.value) / selected.value) * 100).toFixed(1)
            : '0.0';
        setComparisonResults({ selected, current, percentChange, error: undefined });
    }
    // On mount and when compareOption changes, show result for the selected option (except advanced/any-specific-day)
    React.useEffect(() => {
        if (compareOption !== 'advanced-comparison' && compareOption !== 'any-specific-day') {
            calculateComparison(compareOption);
        }
    }, [compareOption]);
    // Show result for the selected option when the modal is opened
    React.useEffect(() => {
        if (showCompareModal && compareOption !== 'advanced-comparison' && compareOption !== 'any-specific-day') {
            calculateComparison(compareOption);
        }
    }, [showCompareModal]);
    return (React.createElement("div", { className: "peak-widget" },
        React.createElement("div", { className: "peak-glass-bg" },
            React.createElement("div", { className: "peak-widget-header" },
                React.createElement("div", { className: "peak-header-left" },
                    React.createElement("div", { className: "peak-icon" },
                        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("polygon", { points: "2,22 12,6 22,22", fill: "#FFD600" }),
                            React.createElement("polygon", { points: "9,18 12,13 15,18", fill: "#FFF59D" }))),
                    React.createElement("h2", { className: "peak-widget-title" }, "Peak Demand")),
                React.createElement("div", { className: "peak-header-right" },
                    React.createElement("button", { className: "peak-compare-btn", onClick: () => setShowCompareModal(!showCompareModal) }, "Compare"))),
            React.createElement("div", { className: "peak-widget-content" },
                React.createElement("div", { className: "peak-stats-section" },
                    React.createElement("div", { className: "peak-main-stat" },
                        React.createElement("div", { className: "peak-stat-value" },
                            React.createElement("span", { className: "peak-number", style: { color: '#fff' } }, "2200"),
                            React.createElement("span", { className: "peak-unit" }, " KW")),
                        React.createElement("div", { className: "peak-stat-label" },
                            "Todays peak demand",
                            currentData && currentData.time && (React.createElement("span", { style: { display: 'block', fontSize: '1.1rem', color: 'white', fontWeight: 500 } },
                                "(Peak Time: ",
                                formatTime12Hour(currentData.time),
                                ")"))))),
                React.createElement("div", { className: "peak-chart-container", style: {} },
                    React.createElement("div", { className: "peak-chart-header" },
                        React.createElement("h3", null, "Last 7 Days Trend"),
                        React.createElement("p", { className: "peak-chart-para" }, "Hover over bars to see detailed information")),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 180 },
                        React.createElement(recharts_1.BarChart, { data: peakDataWithTime, margin: { top: 20, right: 20, left: 0, bottom: 15 }, barCategoryGap: "30%", barGap: 8 },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "day", tick: React.createElement(CustomXAxisTick, null), axisLine: { stroke: 'rgba(255,255,255,0.3)' } }),
                            React.createElement(recharts_1.YAxis, { stroke: "rgba(255,255,255,0.8)", tick: { fill: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600 }, axisLine: { stroke: 'rgba(255,255,255,0.3)' }, domain: [0, 2400], ticks: [0, 500, 1500, 2400], label: { value: 'kW', angle: -90, position: 'insideLeft', fill: '#fff', fontSize: '1.1rem', fontWeight: 600, dy: -10 } }),
                            React.createElement(recharts_1.Tooltip, { formatter: (value) => `${value} kW`, labelFormatter: label => `Day: ${label}`, content: React.createElement(CustomTooltip, null), contentStyle: {
                                    background: 'rgba(30,30,30,0.95)',
                                    border: '1px solid #4CAF50',
                                    borderRadius: 8,
                                    color: '#fff',
                                    fontWeight: 600
                                }, cursor: false }),
                            React.createElement(recharts_1.Bar, { dataKey: "value", fill: "rgb(66, 165, 245)", radius: [6, 6, 0, 0], barSize: 40, style: { filter: 'drop-shadow(0 2px 8px rgba(66,165,245,0.25))' } }),
                            React.createElement(recharts_1.ReferenceLine, { y: 2300, stroke: "#4CAF50", strokeDasharray: "4 4", strokeWidth: 2 }))),
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                        React.createElement("span", { style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                color: '#fff',
                            } },
                            React.createElement("span", { style: {
                                    display: 'inline-block',
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    background: '#4CAF50',
                                    marginRight: 8
                                } }),
                            "Threshold"))))),
        React.createElement(components_1.Modal, { show: showCompareModal, onOpen: () => { setComparisonResults(null); }, onClose: () => setShowCompareModal(false), title: "Compare Peak Demand", className: "dt-water-compare-modal" },
            React.createElement("div", { className: "peak-compare-content" },
                React.createElement("div", { className: "peak-compare-options" },
                    React.createElement("div", { className: "peak-compare-section" },
                        React.createElement("label", null, "Compare Todays Peak Demand With: "),
                        React.createElement("div", { className: "peak-select-container" },
                            React.createElement("select", { value: compareOption, onChange: (e) => {
                                    setCompareOption(e.target.value);
                                    setComparisonResults(null);
                                    setRange1({ start: null, end: null });
                                    setRange2({ start: null, end: null });
                                    setSpecificDate('');
                                    if (e.target.value !== 'advanced-comparison' && e.target.value !== 'any-specific-day') {
                                        setTimeout(() => calculateComparison(e.target.value), 0);
                                    }
                                }, className: "peak-compare-select" },
                                filterOptions.map(opt => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))),
                                React.createElement("option", { value: "advanced-comparison" }, "Advance compare")))),
                    compareOption === 'any-specific-day' && (React.createElement("div", { className: "peak-specific-day" },
                        React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Select Date:"),
                        React.createElement(components_1.DatePicker, { title: "Select Date", date: specificDate, onChange: (date) => {
                                const dateStr = date instanceof Date
                                    ? date.toISOString().slice(0, 10)
                                    : date;
                                setSpecificDate(dateStr);
                            } }))),
                    compareOption === 'advanced-comparison' && (React.createElement("div", { className: "peak-advanced-comparison" },
                        React.createElement("div", { className: "peak-date-range" },
                            React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Range 1:"),
                            React.createElement(components_1.DateRangePicker, { title: "Select First Range", startDate: range1.start ? new Date(range1.start) : undefined, endDate: range1.end ? new Date(range1.end) : undefined, onChange: (start, end) => {
                                    setRange1({
                                        start: start ? new Date(start) : null,
                                        end: end ? new Date(end) : null,
                                    });
                                } })),
                        React.createElement("div", { className: "peak-date-range" },
                            React.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: 'block' } }, "Range 2:"),
                            React.createElement(components_1.DateRangePicker, { title: "Select Second Range", startDate: range2.start ? new Date(range2.start) : undefined, endDate: range2.end ? new Date(range2.end) : undefined, onChange: (start, end) => {
                                    setRange2({
                                        start: start ? new Date(start) : null,
                                        end: end ? new Date(end) : null,
                                    });
                                } })))),
                    (compareOption === 'advanced-comparison' || compareOption === 'any-specific-day') && (React.createElement("button", { className: "peak-calculate-btn", onClick: () => {
                            if (compareOption === 'advanced-comparison') {
                                calculateComparison('advanced-comparison', range1, range2);
                            }
                            else if (compareOption === 'any-specific-day') {
                                calculateComparison('any-specific-day', undefined, undefined, specificDate);
                            }
                        }, disabled: (compareOption === 'advanced-comparison' && (!range1.start || !range1.end || !range2.start || !range2.end)) ||
                            (compareOption === 'any-specific-day' && !specificDate) }, "Compare"))),
                comparisonResults && !comparisonResults.error && comparisonResults.selected && comparisonResults.current && (React.createElement("div", { className: "peak-comparison-results" },
                    React.createElement("h4", null, "Comparison Results"),
                    React.createElement("div", { className: "peak-results-compact" },
                        React.createElement("div", { className: "peak-result-main" },
                            React.createElement("div", { className: "peak-result-comparison" },
                                React.createElement("div", { className: "peak-result-label", style: { color: compareOption === 'advanced-comparison' ? 'white' : undefined, fontSize: compareOption === 'advanced-comparison' ? '1rem' : undefined } },
                                    compareOption === 'advanced-comparison' ? 'Range 1: ' : '',
                                    comparisonResults.selected.label),
                                React.createElement("div", { className: "peak-result-value" },
                                    formatNumber(comparisonResults.selected.value),
                                    " ",
                                    comparisonResults.selected.unit)),
                            React.createElement("div", { className: "peak-result-current" },
                                React.createElement("div", { className: "peak-result-label" },
                                    compareOption === 'advanced-comparison' ? 'Range 2: ' : '',
                                    comparisonResults.current.label),
                                React.createElement("div", { className: "peak-result-value" },
                                    formatNumber(comparisonResults.current.value),
                                    " ",
                                    comparisonResults.current.unit))),
                        React.createElement("div", { className: "peak-result-difference" },
                            React.createElement("div", { className: "peak-difference-item" },
                                React.createElement("span", { className: "peak-difference-label" }, "Difference"),
                                React.createElement("span", { className: "peak-difference-value-container" },
                                    comparisonResults.current.value - comparisonResults.selected.value < 0 ? (React.createElement("span", { className: "peak-arrow-down" }, "\u2193")) : comparisonResults.current.value - comparisonResults.selected.value > 0 ? (React.createElement("span", { className: "peak-arrow-up" }, "\u2191")) : null,
                                    React.createElement("span", { className: "peak-difference-value", style: {
                                            color: comparisonResults.current.value - comparisonResults.selected.value < 0
                                                ? 'rgb(76, 175, 80)'
                                                : comparisonResults.current.value - comparisonResults.selected.value > 0
                                                    ? 'rgb(244, 67, 54)'
                                                    : '#fff'
                                        } },
                                        formatNumber(Math.abs(comparisonResults.current.value - comparisonResults.selected.value)),
                                        " ",
                                        comparisonResults.current.unit))),
                            React.createElement("div", { className: "peak-difference-item" },
                                React.createElement("span", { className: "peak-difference-label" }, "Change"),
                                React.createElement("span", { className: "peak-difference-value-container" },
                                    parseFloat(comparisonResults.percentChange) < 0 ? (React.createElement("span", { className: "peak-arrow-down" }, "\u2193")) : parseFloat(comparisonResults.percentChange) > 0 ? (React.createElement("span", { className: "peak-arrow-up" }, "\u2191")) : null,
                                    React.createElement("span", { className: "peak-difference-value", style: {
                                            color: parseFloat(comparisonResults.percentChange) < 0
                                                ? 'rgb(76, 175, 80)'
                                                : parseFloat(comparisonResults.percentChange) > 0
                                                    ? 'rgb(244, 67, 54)'
                                                    : '#fff'
                                        } },
                                        Math.abs(parseFloat(comparisonResults.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports["default"] = PeakDemand;


/***/ }),

/***/ "./src/prod/energysnapshot/EnergySnapshot.tsx":
/*!****************************************************!*\
  !*** ./src/prod/energysnapshot/EnergySnapshot.tsx ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./energysnapshot.scss */ "./src/prod/energysnapshot/energysnapshot.scss");
// @ts-ignore
const mockData_json_1 = __importDefault(__webpack_require__(/*! ./mockData.json */ "./src/prod/energysnapshot/mockData.json"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
// Comparison mock data (to be replaced with API later)
const comparisonMockData = {
    Yesterday: { label: "Yesterday", value: 1200, unit: "kWh" },
    "Any specific day": { label: "2025-07-10", value: 1100, unit: "kWh" },
    "Last Week Average": { label: "Last Week Avg", value: 1300, unit: "kWh" },
    "Last Month Average": { label: "Last Month Avg", value: 1250, unit: "kWh" },
    "Last Quarter Average": {
        label: "Last Quarter Avg",
        value: 1280,
        unit: "kWh",
    },
    "This Yearly Average": { label: "Yearly Avg", value: 1275, unit: "kWh" },
};
const EnergySnapshotWidget = (props) => {
    const data = mockData_json_1.default;
    const [showConsumptionChange, setShowConsumptionChange] = (0, react_1.useState)(false);
    const [showCostChange, setShowCostChange] = (0, react_1.useState)(false);
    const [selectedAlertId, setSelectedAlertId] = (0, react_1.useState)(null);
    const [popover, setPopover] = (0, react_1.useState)(null);
    const alertListRef = (0, react_1.useRef)(null);
    const alertItemRefs = (0, react_1.useRef)({});
    const [showCompareModal, setShowCompareModal] = (0, react_1.useState)(false);
    const [compareType, setCompareType] = (0, react_1.useState)("Yesterday");
    const [comparisonResult, setComparisonResult] = (0, react_1.useState)(null);
    const [specificDate, setSpecificDate] = (0, react_1.useState)("");
    const [range1, setRange1] = (0, react_1.useState)({ start: null, end: null });
    const [range2, setRange2] = (0, react_1.useState)({ start: null, end: null });
    const [hasComparedSpecificDay, setHasComparedSpecificDay] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        var _a;
        if (selectedAlertId && alertItemRefs.current[selectedAlertId]) {
            (_a = alertItemRefs.current[selectedAlertId]) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [selectedAlertId]);
    if (!data || !data.current || !data.previous)
        return react_1.default.createElement("div", null, "No data available");
    // Calculate % change
    const percentChange = data.previous.totalConsumption
        ? ((data.current.totalConsumption - data.previous.totalConsumption) /
            data.previous.totalConsumption) *
            100
        : 0;
    const costPercentChange = data.previous.totalCost
        ? ((data.current.totalCost - data.previous.totalCost) /
            data.previous.totalCost) *
            100
        : 0;
    // Prepare chart data: merge current and previous by hour
    const chartData = (data.current.hourly || []).map((cur, idx) => {
        const prev = (data.previous.hourly || [])[idx];
        return {
            hour: cur.hour,
            Today: cur.consumption,
            Yesterday: prev && typeof prev.consumption === "number" ? prev.consumption : 0,
            TodayCost: cur.cost,
            YesterdayCost: prev && typeof prev.cost === "number" ? prev.cost : 0,
        };
    });
    // Custom Tooltip for Chart
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length > 1) {
            const today = payload[0].value;
            const yesterday = payload[1].value;
            const todayCost = payload[0].payload.TodayCost;
            const yesterdayCost = payload[0].payload.YesterdayCost;
            const change = yesterday ? ((today - yesterday) / yesterday) * 100 : 0;
            const costChange = yesterdayCost
                ? ((todayCost - yesterdayCost) / yesterdayCost) * 100
                : 0;
            const isGood = change < 0;
            const triangle = change > 0 ? (react_1.default.createElement("span", { style: {
                    color: "#ff4d4f",
                    marginRight: 4,
                    fontSize: 16,
                    filter: "drop-shadow(0 0 4px #ff4d4f88)",
                } }, "\u25B2")) : (react_1.default.createElement("span", { style: {
                    color: "rgb(76, 175, 80)",
                    marginRight: 4,
                    fontSize: 16,
                    filter: "drop-shadow(0 0 4px #4CAF5088)",
                } }, "\u25BC"));
            return (react_1.default.createElement("div", { style: {
                    background: "rgba(0, 0, 0, 0.9)",
                    borderRadius: 12,
                    padding: "1rem 1.2rem",
                    // boxShadow:
                    // 	change < 0
                    // 		? "0 0 16px 2px #4CAF5088, 0 4px 18px rgba(0,0,0,0.18)"
                    // 		: change > 0
                    // 		? "0 0 16px 2px #ff4d4f88, 0 4px 18px rgba(0,0,0,0.18)"
                    // 		: "0 4px 18px rgba(0,0,0,0.18)",
                    color: "#fff",
                    minWidth: 180,
                    fontSize: 14,
                    // border:
                    // 	change < 0
                    // 		? "2px solid #4CAF50"
                    // 		: change > 0
                    // 		? "2px solid #ff4d4f"
                    // 		: "2px solid #8884",
                    // animation: "tooltip-pop 0.3s",
                } },
                react_1.default.createElement("div", { style: { fontWeight: 700, marginBottom: 4 } }, label),
                react_1.default.createElement("div", { style: { marginBottom: 4 } },
                    react_1.default.createElement("span", { style: { color: "#fff" } }, "Today: "),
                    today,
                    " ",
                    data.unit),
                react_1.default.createElement("div", { style: { marginBottom: 4 } },
                    react_1.default.createElement("span", { style: { color: "rgb(76, 175, 80)" } }, "Yesterday: "),
                    yesterday,
                    " ",
                    data.unit),
                react_1.default.createElement("div", { style: { marginBottom: 4, display: "flex", alignItems: "center" } },
                    react_1.default.createElement("b", null, "Change: "),
                    react_1.default.createElement("span", { style: {
                            marginLeft: 6,
                            display: "flex",
                            alignItems: "center",
                            color: change < 0
                                ? "rgb(76, 175, 80)"
                                : change > 0
                                    ? "#ff4d4f"
                                    : "#fff",
                            fontWeight: 700,
                        } },
                        triangle,
                        change === 0
                            ? "0.0%"
                            : change > 0
                                ? "+" + change.toFixed(1) + "%"
                                : Math.abs(change).toFixed(1) + "%")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("b", null, "Cost: "),
                    react_1.default.createElement("span", { style: { color: "#fff" } },
                        todayCost,
                        " ",
                        data.costUnit),
                    yesterdayCost !== undefined && (react_1.default.createElement("span", { style: {
                            marginLeft: 8,
                            fontSize: 13,
                            color: costChange < 0
                                ? "rgb(76, 175, 80)"
                                : costChange > 0
                                    ? "#ff4d4f"
                                    : "#fff",
                            textShadow: costChange < 0
                                ? "0 0 6px #4CAF5088"
                                : costChange > 0
                                    ? "0 0 6px #ff4d4f88"
                                    : "none",
                        } },
                        "(",
                        costChange === 0
                            ? "0.0%"
                            : costChange > 0
                                ? "+" + costChange.toFixed(1) + "%"
                                : Math.abs(costChange).toFixed(1) + "%",
                        ")")))));
        }
        return null;
    };
    // Helper: get alert for a given hour and which line (today/yesterday)
    function getAlertForHourAndLine(alerts, hour, currentDate, previousDate) {
        if (!alerts)
            return null;
        return alerts
            .map((alert) => {
            const alertDate = new Date(alert.timestamp);
            const alertHour = alertDate.getHours().toString().padStart(2, "0") + ":00";
            const alertDay = alertDate.toISOString().substring(0, 10);
            if (alertHour === hour) {
                if (alertDay === currentDate)
                    return Object.assign(Object.assign({}, alert), { line: "Today" });
                if (alertDay === previousDate)
                    return Object.assign(Object.assign({}, alert), { line: "Yesterday" });
            }
            return null;
        })
            .filter(Boolean);
    }
    // Alert icon SVG
    const AlertIcon = ({ color = "#ff4d4f", size = 18 }) => (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", style: { display: "inline", verticalAlign: "middle" } },
        react_1.default.createElement("circle", { cx: "10", cy: "10", r: "9", stroke: color, strokeWidth: "2", fill: "#fff2" }),
        react_1.default.createElement("path", { d: "M10 6v4", stroke: color, strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("circle", { cx: "10", cy: "14", r: "1", fill: color })));
    // Custom dot for alert markers
    function renderCustomDot(lineKey, alerts, currentDate, previousDate, selectedAlertId, setSelectedAlertId, setPopover) {
        return function CustomDot(props) {
            const { cx, cy, payload } = props;
            const hour = payload.hour;
            const alertsForHour = getAlertForHourAndLine(alerts, hour, currentDate, previousDate);
            const alert = alertsForHour && alertsForHour.find((a) => a.line === lineKey);
            const isSelected = alert && selectedAlertId === alert.timestamp + "-" + alert.line;
            let color = "#ff4d4f";
            if (alert) {
                switch (alert.type) {
                    case "spike":
                        color = "#ff4d4f";
                        break;
                    case "drop":
                        color = "rgb(76, 175, 80)";
                        break;
                    case "cost":
                        color = "rgb(255, 152, 0)";
                        break;
                    default:
                        color = "#ff4d4f";
                }
            }
            const highlightColor = color;
            return (react_1.default.createElement("g", null,
                react_1.default.createElement("circle", { cx: cx, cy: cy, r: props.r, fill: lineKey === "Today" ? "#ffe066" : "rgb(76, 175, 80)", stroke: "#222", strokeWidth: 1 }),
                alert && (react_1.default.createElement("g", { style: { cursor: "pointer" }, onClick: (e) => {
                        e.stopPropagation();
                        setSelectedAlertId(alert.timestamp + "-" + alert.line);
                    }, onMouseEnter: (e) => {
                        // Position alert tooltip exactly where custom tooltip ends
                        // The custom tooltip appears above the data point, so we position below it
                        setPopover({
                            x: cx,
                            y: cy + 40,
                            alert,
                        });
                    }, onMouseLeave: () => setPopover(null) },
                    react_1.default.createElement("circle", { cx: cx, cy: cy - 18, r: isSelected ? 13 : 10, fill: "#fff2", stroke: isSelected ? highlightColor : color, strokeWidth: isSelected ? 3 : 2, filter: isSelected ? `drop-shadow(0 0 8px ${highlightColor})` : "" }),
                    react_1.default.createElement("text", { x: cx, y: cy - 12, textAnchor: "middle", fontSize: 18, fill: isSelected ? highlightColor : color, fontWeight: isSelected ? 700 : 400 }, "!")))));
        };
    }
    // Utility: format timestamp as relative time
    function formatRelativeTime(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
        // Handle negative time differences (future dates)
        if (diff < 0) {
            const absDiff = Math.abs(diff);
            if (absDiff < 60)
                return `in ${absDiff} sec${absDiff !== 1 ? "s" : ""}`;
            if (absDiff < 3600)
                return `in ${Math.floor(absDiff / 60)} min${Math.floor(absDiff / 60) !== 1 ? "s" : ""}`;
            if (absDiff < 86400)
                return `in ${Math.floor(absDiff / 3600)} hour${Math.floor(absDiff / 3600) !== 1 ? "s" : ""}`;
            return date.toLocaleDateString();
        }
        // Handle past dates (normal case)
        if (diff < 60)
            return `${diff} sec${diff !== 1 ? "s" : ""} ago`;
        if (diff < 3600)
            return `${Math.floor(diff / 60)} min${Math.floor(diff / 60) !== 1 ? "s" : ""} ago`;
        if (diff < 86400)
            return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) !== 1 ? "s" : ""} ago`;
        return date.toLocaleDateString();
    }
    const calculateComparison = react_1.default.useCallback((typeParam, specificDateParam, range1Param, range2Param) => {
        let selected = null;
        let current = null;
        let error = undefined;
        const activeCompareType = typeParam || compareType;
        if (activeCompareType === "") {
            // Handle the initial "Select comparison type..." option
            setComparisonResult(null); // Clear results if "empty" type is selected
            return;
        }
        if (activeCompareType === "Any specific day") {
            const dateToCompare = specificDateParam || specificDate; // Use passed date or state date
            if (!dateToCompare) {
            }
            else {
                selected = { label: specificDate, value: 1100, unit: "kWh" };
                current = {
                    label: "Today",
                    value: data.current.totalConsumption,
                    unit: data.unit,
                };
            }
        }
        else if (activeCompareType === "Advanced Comparison") {
            const actualRange1 = range1Param || range1;
            const actualRange2 = range2Param || range2;
            if (!actualRange1.start ||
                !actualRange1.end ||
                !actualRange2.start ||
                !actualRange2.end) {
                error = "Please select valid start and end dates for both ranges.";
            }
            else {
                const duration1 = actualRange1.end.getTime() - actualRange1.start.getTime();
                const duration2 = actualRange2.end.getTime() - actualRange2.start.getTime();
                if (duration1 !== duration2) {
                    error =
                        "Timeframe lengths must be identical for Advanced Comparison.";
                    console.error("Advanced Comparison Error: Timeframe lengths must be identical.");
                }
                else {
                    // Optional: Time alignment warning
                    const timeAStart = actualRange1.start.toTimeString().slice(0, 8);
                    const timeBStart = actualRange2.start.toTimeString().slice(0, 8);
                    if (timeAStart !== timeBStart) {
                        console.warn("Advanced Comparison Warning: Start times do not align (HH:MM:SS). Consider selecting matching times for better comparison.");
                    }
                    selected = {
                        label: `Range 1: ${actualRange1.start.toLocaleDateString()} to ${actualRange1.end.toLocaleDateString()}`,
                        value: 1200,
                        unit: "kWh",
                    };
                    current = {
                        label: `Range 2: ${actualRange2.start.toLocaleDateString()} to ${actualRange2.end.toLocaleDateString()}`,
                        value: 1250,
                        unit: "kWh",
                    };
                }
            }
        }
        else {
            // Handles "Yesterday", "Last Week Average", etc.
            const mockDataKey = activeCompareType;
            selected = comparisonMockData[mockDataKey]; // Use your provided comparisonMockData
            current = {
                label: "Today",
                value: data.current.totalConsumption,
                unit: data.unit,
            };
        }
        let percentChange = "0.0";
        if (selected &&
            current &&
            typeof selected.value === "number" &&
            selected.value !== 0 &&
            !error) {
            percentChange = (((current.value - selected.value) / selected.value) *
                100).toFixed(1);
        }
        setComparisonResult({ selected, current, percentChange, error });
    }, [compareType]);
    // --- useEffect to trigger default comparison on modal open ---
    (0, react_1.useEffect)(() => {
        // Only run if modal is shown, no results calculated, and compareType is a valid auto-update option
        if (showCompareModal &&
            !comparisonResult &&
            compareType !== "Advanced Comparison" &&
            compareType !== "") {
            if (compareType === "Any specific day") {
                // Pass the current default specificDate for initial load if 'Any specific day' is default
                calculateComparison(compareType, specificDate, undefined, undefined);
            }
            else {
                calculateComparison(compareType, undefined, undefined, undefined);
            }
        }
    }, [
        showCompareModal,
        compareType,
        specificDate,
        calculateComparison,
        comparisonResult,
    ]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "energy-snapshot-widget", style: { position: "relative" } },
            react_1.default.createElement("div", { className: "energy-snapshot-header", style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: 0,
                } },
                react_1.default.createElement("div", { style: { flex: 1, textAlign: "left" } },
                    react_1.default.createElement("div", { className: "energy-snapshot-title", style: { display: "flex", alignItems: "center", gap: "8px" } },
                        react_1.default.createElement("div", { style: {
                                width: "32px",
                                height: "32px",
                                // backgroundColor: "#90caf9",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(100, 181, 246, 0.1)",
                                border: "1px solid rgba(100, 181, 246, 0.2)",
                            } },
                            react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "M11 1L3 10H9L9 19L17 10H11L11 1Z", fill: "#FFD600" }))),
                        "Energy Snapshot")),
                react_1.default.createElement("div", { style: { flex: 0, textAlign: "right" } },
                    react_1.default.createElement("button", { className: "compare-btn-energysnapshot", onClick: () => setShowCompareModal(true) }, "Compare"))),
            react_1.default.createElement("div", { className: "energy-snapshot-stats" },
                react_1.default.createElement("div", { className: "energy-snapshot-stat", onMouseEnter: () => setShowConsumptionChange(true), onMouseLeave: () => setShowConsumptionChange(false), style: { position: "relative" } },
                    react_1.default.createElement("span", { style: { fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#fff" } }, "Consumption"),
                    react_1.default.createElement("span", { className: "energy-snapshot-stat-value", style: { fontSize: "clamp(1.2rem, 4vw, 2.1rem)" } },
                        data.current.totalConsumption,
                        " ",
                        data.unit),
                    react_1.default.createElement("span", { style: { fontSize: "clamp(0.8rem, 1.5vw, 1rem)", opacity: 0.7 } }, "Today"),
                    showConsumptionChange && (react_1.default.createElement("div", { className: "stat-tooltip", style: {
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            marginTop: 8,
                            background: "rgba(0, 0, 0, 0.9)",
                            color: "#fff",
                            padding: "0.7rem 1.1rem",
                            borderRadius: 12,
                            boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                            fontSize: 14,
                            zIndex: 10,
                            // border:
                            // 	percentChange < 0
                            // 		? "2px solid #4CAF50"
                            // 		: percentChange > 0
                            // 		? "2px solid #ff4d4f"
                            // 		: "2px solid #8884",
                            // animation: "tooltip-pop 0.3s",
                            width: 220,
                            minWidth: 220,
                            maxWidth: 220,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "color 0.3s ease-in, box-shadow 0.3s ease-in, border 0.3s ease-in, transform 0.3s ease-in",
                        } },
                        react_1.default.createElement("span", { style: { fontWeight: 700 } },
                            "Change in Total Consumption",
                            " ",
                            react_1.default.createElement("span", { style: { fontWeight: 400 } }, "(vs yesterday)"),
                            ":"),
                        react_1.default.createElement("span", { style: {
                                color: percentChange < 0
                                    ? "rgb(76, 175, 80)"
                                    : percentChange > 0
                                        ? "#ff4d4f"
                                        : "#fff",
                                fontWeight: 700,
                                display: "flex",
                                alignItems: "center",
                                marginLeft: 6,
                                transition: "color 0.3s ease-in, transform 0.3s ease-in",
                            } },
                            percentChange > 0 && (react_1.default.createElement("span", { style: {
                                    color: "#ff4d4f",
                                    fontSize: 16,
                                    marginRight: 2,
                                    filter: "drop-shadow(0 0 4px #ff4d4f88)",
                                    transition: "color 0.3s ease-in, transform 0.3s ease-in",
                                } }, "\u25B2")),
                            percentChange < 0 && (react_1.default.createElement("span", { style: {
                                    color: "rgb(76, 175, 80)",
                                    fontSize: 16,
                                    marginRight: 2,
                                    filter: "drop-shadow(0 0 4px #4CAF5088)",
                                    transition: "color 0.3s ease-in, transform 0.3s ease-in",
                                } }, "\u25BC")),
                            percentChange === 0
                                ? "0.0%"
                                : percentChange > 0
                                    ? "+" + percentChange.toFixed(1) + "%"
                                    : Math.abs(percentChange).toFixed(1) + "%")))),
                react_1.default.createElement("div", { className: "energy-snapshot-stat", onMouseEnter: () => setShowCostChange(true), onMouseLeave: () => setShowCostChange(false), style: { position: "relative" } },
                    react_1.default.createElement("span", { style: { fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#fff" } }, "Cost"),
                    react_1.default.createElement("span", { className: "energy-snapshot-stat-value", style: { fontSize: "clamp(1.2rem, 4vw, 2.1rem)" } },
                        data.current.totalCost,
                        " ",
                        data.costUnit),
                    react_1.default.createElement("span", { style: { fontSize: "clamp(0.8rem, 1.5vw, 1rem)", opacity: 0.7 } }, "Today"),
                    showCostChange && (react_1.default.createElement("div", { className: "stat-tooltip", style: {
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            marginTop: 8,
                            background: "rgba(0, 0, 0, 0.9)",
                            color: "#fff",
                            padding: "0.7rem 1.1rem",
                            borderRadius: 12,
                            boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                            fontSize: 14,
                            zIndex: 10,
                            // border:
                            // 	costPercentChange < 0
                            // 		? "2px solid #4CAF50"
                            // 		: costPercentChange > 0
                            // 		? "2px solid #ff4d4f"
                            // 		: "2px solid #8884",
                            // animation: "tooltip-pop 0.3s",
                            width: 220,
                            minWidth: 220,
                            maxWidth: 220,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "color 0.3s ease-in, box-shadow 0.3s ease-in, border 0.3s ease-in, transform 0.3s ease-in",
                        } },
                        react_1.default.createElement("span", { style: { fontWeight: 700 } },
                            "Change in Total Cost",
                            " ",
                            react_1.default.createElement("span", { style: { fontWeight: 400 } }, "(vs yesterday)"),
                            ":"),
                        react_1.default.createElement("span", { style: {
                                color: costPercentChange < 0
                                    ? "rgb(76, 175, 80)"
                                    : costPercentChange > 0
                                        ? "#ff4d4f"
                                        : "#fff",
                                fontWeight: 700,
                                display: "flex",
                                alignItems: "center",
                                marginLeft: 6,
                                transition: "color 0.3s ease-in, transform 0.3s ease-in",
                            } },
                            costPercentChange > 0 && (react_1.default.createElement("span", { style: {
                                    color: "#ff4d4f",
                                    fontSize: 16,
                                    marginRight: 2,
                                    filter: "drop-shadow(0 0 4px #ff4d4f88)",
                                    transition: "color 0.3s ease-in, transform 0.3s ease-in",
                                } }, "\u25B2")),
                            costPercentChange < 0 && (react_1.default.createElement("span", { style: {
                                    color: "rgb(76, 175, 80)",
                                    fontSize: 16,
                                    marginRight: 2,
                                    filter: "drop-shadow(0 0 4px #4CAF5088)",
                                    transition: "color 0.3s ease-in, transform 0.3s ease-in",
                                } }, "\u25BC")),
                            costPercentChange === 0
                                ? "0.0%"
                                : costPercentChange > 0
                                    ? "+" + costPercentChange.toFixed(1) + "%"
                                    : Math.abs(costPercentChange).toFixed(1) + "%"))))),
            react_1.default.createElement("div", { className: "energy-snapshot-chart", style: { minHeight: 220, position: "relative", overflow: "visible" } },
                react_1.default.createElement("div", { className: "es-chart-container", style: { padding: "16px" } },
                    react_1.default.createElement("div", { className: "es-chart-header" },
                        react_1.default.createElement("h3", null, "Hourly Trend"),
                        react_1.default.createElement("p", { className: "es-chart-para" }, "Hover over bars to see detailed information"))),
                react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: window.innerWidth < 700 ? 180 : 260 },
                    react_1.default.createElement(recharts_1.LineChart, { data: chartData, margin: { top: 10, right: 10, left: 0, bottom: 0 } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3", opacity: 0.15 }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "hour", stroke: "#fff", tick: {
                                fill: "#fff",
                                opacity: 0.8,
                                fontSize: window.innerWidth < 700 ? 10 : 12,
                            } }),
                        react_1.default.createElement(recharts_1.YAxis, { stroke: "#fff", tick: {
                                fill: "#fff",
                                opacity: 0.8,
                                fontSize: window.innerWidth < 700 ? 10 : 12,
                            } }),
                        !popover && react_1.default.createElement(recharts_1.Tooltip, { content: react_1.default.createElement(CustomTooltip, null) }),
                        react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "Today", stroke: "#ffe066", strokeWidth: 3, dot: renderCustomDot("Today", data.alerts, data.current.from.substring(0, 10), data.previous.from.substring(0, 10), selectedAlertId, setSelectedAlertId, setPopover), activeDot: { r: window.innerWidth < 700 ? 5 : 6 }, isAnimationActive: true }),
                        react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "Yesterday", stroke: "#4CAF50", strokeWidth: 2, dot: renderCustomDot("Yesterday", data.alerts, data.current.from.substring(0, 10), data.previous.from.substring(0, 10), selectedAlertId, setSelectedAlertId, setPopover), isAnimationActive: true }))),
                react_1.default.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 18,
                        marginTop: 8,
                        marginBottom: 8,
                    } },
                    react_1.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                        react_1.default.createElement("span", { style: {
                                width: 12,
                                height: 12,
                                background: "#ffe066",
                                borderRadius: "50%",
                                display: "inline-block",
                            } }),
                        react_1.default.createElement("span", { style: { fontSize: "1.1rem", color: "#fff", fontWeight: 600 } }, "Today")),
                    react_1.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                        react_1.default.createElement("span", { style: {
                                width: 12,
                                height: 12,
                                background: "#4CAF50",
                                borderRadius: "50%",
                                display: "inline-block",
                            } }),
                        react_1.default.createElement("span", { style: { fontSize: "1.1rem", color: "#fff", fontWeight: 600 } }, "Yesterday")))),
            data.alerts && data.alerts.length > 0 && (react_1.default.createElement("div", { className: "energy-snapshot-alerts scrollable-alerts", id: "alert-list-container", style: { position: "relative" } },
                react_1.default.createElement("strong", { style: { display: "block", marginBottom: 8 } }, "Alerts:"),
                react_1.default.createElement("ul", { ref: alertListRef, style: {
                        margin: 0,
                        paddingLeft: 0,
                        maxHeight: 180,
                        overflowY: "auto",
                        listStyle: "none",
                        // Removed vertical centering to ensure first item is always visible
                        display: "block",
                        height: "100%",
                    } }, data.alerts.map((alert, idx) => {
                    let icon, color;
                    switch (alert.type) {
                        case "spike":
                            icon = react_1.default.createElement(AlertIcon, { color: "#ff4d4f", size: 20 });
                            color = "#ff4d4f";
                            break;
                        case "drop":
                            icon = react_1.default.createElement(AlertIcon, { color: "rgb(76, 175, 80)", size: 20 });
                            color = "rgb(76, 175, 80)";
                            break;
                        case "cost":
                            icon = react_1.default.createElement(AlertIcon, { color: "rgb(255, 152, 0)", size: 20 });
                            color = "rgb(255, 152, 0)";
                            break;
                        default:
                            icon = react_1.default.createElement(AlertIcon, { color: "#fff", size: 20 });
                            color = "#fff";
                    }
                    // Use same logic as chart for alertId
                    const alertDate = new Date(alert.timestamp);
                    const alertHour = alertDate.getUTCHours().toString().padStart(2, "0") + ":00";
                    const currentDate = data.current.from.substring(0, 10);
                    const previousDate = data.previous.from.substring(0, 10);
                    let alertLine = null;
                    const alertDay = alertDate.toISOString().substring(0, 10);
                    if (alertHour && alertDay === currentDate)
                        alertLine = "Today";
                    if (alertHour && alertDay === previousDate)
                        alertLine = "Yesterday";
                    const alertId = alert.timestamp + "-" + alertLine;
                    const isSelected = selectedAlertId === alertId;
                    return (react_1.default.createElement("li", { key: idx, ref: (el) => {
                            if (isSelected)
                                alertItemRefs.current[alertId] = el;
                        }, onClick: () => setSelectedAlertId(alertId), style: {
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: 8,
                            background: isSelected
                                ? "rgba(255,224,102,0.18)"
                                : "rgba(255,255,255,0.07)",
                            borderRadius: 8,
                            boxShadow: `0 0 8px 0 ${color}33`,
                            border: isSelected ? "2px solid #ffd700" : "none",
                            cursor: "pointer",
                            transition: "background 0.2s, border 0.2s",
                            width: "95%",
                            maxWidth: "98%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            minHeight: 48,
                        } },
                        react_1.default.createElement("span", { style: { marginRight: 14, marginTop: 2 } }, icon),
                        react_1.default.createElement("div", { style: { flex: 1 } },
                            react_1.default.createElement("div", { style: {
                                    fontWeight: 700,
                                    color: "#fff",
                                    fontSize: 16,
                                    marginBottom: 2,
                                } }, "Alert"),
                            react_1.default.createElement("div", { style: { color: "#fff", fontSize: 15, marginBottom: 2 } }, alert.description),
                            react_1.default.createElement("div", { style: { color: "#bfc6d1", fontSize: 13, marginTop: 2 } }, formatRelativeTime(alert.timestamp)))));
                })))),
            popover && (react_1.default.createElement("div", { style: {
                    position: "absolute",
                    left: popover.x,
                    top: popover.y,
                    background: "rgba(0, 0, 0, 0.9)",
                    color: "#fff",
                    borderRadius: 10,
                    padding: 14,
                    fontSize: 14,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    // border: `2px solid ${
                    // 	popover.alert.type === "spike"
                    // 		? "#ff4d4f"
                    // 		: popover.alert.type === "drop"
                    // 		? "rgb(76, 175, 80)"
                    // 		: popover.alert.type === "cost"
                    // 		? "rgb(255, 152, 0)"
                    // 		: "#fff"
                    // }`,
                    minWidth: 180,
                    zIndex: 150,
                    pointerEvents: "auto",
                    transform: "translateX(-50%)",
                    animation: "tooltip-pop 0.3s",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                } },
                react_1.default.createElement("div", { style: {
                        fontWeight: 700,
                        marginBottom: 4,
                        display: "flex",
                        alignItems: "center",
                    } },
                    react_1.default.createElement("span", { style: { marginRight: 8 } },
                        popover.alert.type === "spike" && (react_1.default.createElement(AlertIcon, { color: "#ff4d4f", size: 18 })),
                        popover.alert.type === "drop" && (react_1.default.createElement(AlertIcon, { color: "rgb(76, 175, 80)", size: 18 })),
                        popover.alert.type === "cost" && (react_1.default.createElement(AlertIcon, { color: "rgb(255, 152, 0)", size: 18 }))),
                    "Alert"),
                react_1.default.createElement("div", { style: { marginBottom: 2 } }, popover.alert.description),
                react_1.default.createElement("div", { style: { color: "#bfc6d1", fontSize: 13, marginTop: 2 } }, formatRelativeTime(popover.alert.timestamp))))),
        react_1.default.createElement(components_1.Modal, { className: "energy-snapshot-compare-modal", title: "Compare Energy Usage", show: showCompareModal, onClose: () => {
                setShowCompareModal(false);
                setComparisonResult(null); // Clear results on modal close
            } },
            react_1.default.createElement("div", { className: "energy-snapshot-compare-content" },
                react_1.default.createElement("div", { className: "energy-snapshot-compare-options" },
                    react_1.default.createElement("div", { className: "energy-snapshot-compare-section" },
                        react_1.default.createElement("label", null, "Compare Today's energy consuption with:"),
                        react_1.default.createElement("div", { className: "energy-snapshot-select-container" },
                            react_1.default.createElement("select", { value: compareType, onChange: (e) => {
                                    const newCompareType = e.target.value;
                                    setCompareType(newCompareType);
                                    setComparisonResult(null); // Clear previous results
                                    setHasComparedSpecificDay(false); // Reset compare flag on type change
                                    // Reset specificDate to yesterday when type changes
                                    setSpecificDate(newCompareType === "Any specific day" ? "" : new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10));
                                    setRange1({ start: null, end: null }); // Reset ranges
                                    setRange2({ start: null, end: null }); // Reset ranges
                                    // Trigger immediate calculation for non-advanced and non-empty types
                                    if (newCompareType !== "Advanced Comparison" &&
                                        newCompareType !== "" &&
                                        newCompareType !== "Any specific day") {
                                        calculateComparison(newCompareType, undefined, undefined, undefined);
                                    }
                                }, className: "energy-snapshot-compare-select" },
                                react_1.default.createElement("option", { value: "" }, "Select comparison type..."),
                                react_1.default.createElement("option", { value: "Yesterday" }, "Yesterday"),
                                react_1.default.createElement("option", { value: "Any specific day" }, "Any Specific Day"),
                                react_1.default.createElement("option", { value: "Last Week Average" }, "Week Average"),
                                react_1.default.createElement("option", { value: "Last Month Average" }, "Month Average"),
                                react_1.default.createElement("option", { value: "Last Quarter Average" }, "Quarter Average"),
                                react_1.default.createElement("option", { value: "This Yearly Average" }, "Yearly Average"),
                                react_1.default.createElement("option", { value: "Advanced Comparison" }, "Advanced Comparison")))),
                    compareType === "Any specific day" && (react_1.default.createElement("div", { className: "energy-snapshot-specific-day" },
                        react_1.default.createElement("label", { style: { fontWeight: 600, marginBottom: 8, display: "block", fontSize: "14px" } }, "Select Date:"),
                        react_1.default.createElement(components_1.DatePicker, { title: "Select Date", date: specificDate, onChange: (date) => {
                                const newDate = date instanceof Date
                                    ? date.toISOString().slice(0, 10)
                                    : "";
                                setSpecificDate(newDate); // Update state
                                setHasComparedSpecificDay(false); // Reset compare flag on date change
                                // Do NOT trigger comparison immediately
                            } }))),
                    compareType === "Advanced Comparison" && (react_1.default.createElement("div", { className: "energy-snapshot-advanced-comparison" },
                        react_1.default.createElement("div", { className: "energy-snapshot-date-range" },
                            react_1.default.createElement("label", { style: {
                                    fontWeight: 600,
                                    marginBottom: 8,
                                    display: "block",
                                } }, "Range 1:"),
                            react_1.default.createElement(components_1.DateRangePicker, { title: "Select First Range", startDate: range1.start ? new Date(range1.start) : undefined, endDate: range1.end ? new Date(range1.end) : undefined, onChange: (start, end) => setRange1({
                                    start: start ? new Date(start) : null,
                                    end: end ? new Date(end) : null,
                                }) })),
                        react_1.default.createElement("div", { className: "energy-snapshot-date-range" },
                            react_1.default.createElement("label", { style: {
                                    fontWeight: 600,
                                    marginBottom: 8,
                                    display: "block",
                                } }, "Range 2:"),
                            react_1.default.createElement(components_1.DateRangePicker, { title: "Select Second Range", startDate: range2.start ? new Date(range2.start) : undefined, endDate: range2.end ? new Date(range2.end) : undefined, onChange: (start, end) => setRange2({
                                    start: start ? new Date(start) : null,
                                    end: end ? new Date(end) : null,
                                }) })))),
                    (compareType === "Any specific day" ||
                        compareType === "Advanced Comparison") && (react_1.default.createElement("button", { className: "energy-snapshot-calculate-btn", 
                        // Preserving inline styles
                        style: { background: "#42a5f5" }, onClick: () => {
                            if (compareType === "Any specific day") {
                                setHasComparedSpecificDay(true);
                                calculateComparison("Any specific day", specificDate, undefined, undefined);
                            }
                            else {
                                calculateComparison("Advanced Comparison", undefined, range1, range2);
                            }
                        }, disabled: (compareType === "Any specific day" && !specificDate) || // Disable for specific day if no date
                            (compareType === "Advanced Comparison" && // Disable for advanced if ranges incomplete
                                (!range1.start ||
                                    !range1.end ||
                                    !range2.start ||
                                    !range2.end)) }, "Compare"))),
                comparisonResult && comparisonResult.error && (react_1.default.createElement("p", { style: { color: "red", marginTop: "10px", textAlign: "center" } }, comparisonResult.error)),
                ((compareType !== "Advanced Comparison" && compareType !== "Any specific day") ||
                    (compareType === "Advanced Comparison" && comparisonResult) ||
                    (compareType === "Any specific day" && comparisonResult && hasComparedSpecificDay)) &&
                    compareType !== "" &&
                    comparisonResult &&
                    !comparisonResult.error &&
                    comparisonResult.selected &&
                    comparisonResult.current && (react_1.default.createElement("div", { className: "energy-snapshot-comparison-results" },
                    react_1.default.createElement("h4", null, "Comparison Results"),
                    react_1.default.createElement("div", { className: "energy-consumption-results-compact" },
                        react_1.default.createElement("div", { className: "energy-snapshot-result-main" },
                            react_1.default.createElement("div", { className: "energy-snapshot-result-comparison" },
                                react_1.default.createElement("div", { className: "energy-snapshot-result-label" }, comparisonResult.selected.label),
                                react_1.default.createElement("div", { className: "energy-snapshot-result-value" },
                                    comparisonResult.selected.value,
                                    " ",
                                    comparisonResult.selected.unit)),
                            react_1.default.createElement("div", { className: "energy-snapshot-result-current" },
                                react_1.default.createElement("div", { className: "energy-snapshot-result-label" }, comparisonResult.current.label),
                                react_1.default.createElement("div", { className: "energy-snapshot-result-value" },
                                    comparisonResult.current.value,
                                    " ",
                                    comparisonResult.current.unit))),
                        react_1.default.createElement("div", { className: "energy-snapshot-result-difference" },
                            react_1.default.createElement("div", { className: "energy-snapshot-difference-item" },
                                react_1.default.createElement("span", { className: "energy-snapshot-difference-label" }, "Difference"),
                                react_1.default.createElement("span", { className: "energy-snapshot-difference-value-container", style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    } },
                                    comparisonResult.current.value -
                                        comparisonResult.selected.value <
                                        0 ? (react_1.default.createElement("span", { style: {
                                            color: "rgb(76, 175, 80)",
                                            fontSize: 18,
                                            marginRight: 2,
                                        } }, "\u25BC")) : comparisonResult.current.value -
                                        comparisonResult.selected.value >
                                        0 ? (react_1.default.createElement("span", { style: {
                                            color: "#ff4d4f",
                                            fontSize: 18,
                                            marginRight: 2,
                                        } }, "\u25B2")) : null,
                                    react_1.default.createElement("span", { className: "energy-snapshot-difference-value", style: {
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
                            react_1.default.createElement("div", { className: "energy-snapshot-difference-item" },
                                react_1.default.createElement("span", { className: "energy-snapshot-difference-label" }, "Change"),
                                react_1.default.createElement("span", { className: "energy-snapshot-difference-value-container", style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    } },
                                    parseFloat(comparisonResult.percentChange) < 0 ? (react_1.default.createElement("span", { style: {
                                            color: "rgb(76, 175, 80)",
                                            fontSize: 18,
                                            marginRight: 2,
                                        } }, "\u25BC")) : parseFloat(comparisonResult.percentChange) > 0 ? (react_1.default.createElement("span", { style: {
                                            color: "#ff4d4f",
                                            fontSize: 18,
                                            marginRight: 2,
                                        } }, "\u25B2")) : null,
                                    react_1.default.createElement("span", { className: "energy-snapshot-difference-value", style: {
                                            color: parseFloat(comparisonResult.percentChange) < 0
                                                ? "rgb(76, 175, 80)"
                                                : parseFloat(comparisonResult.percentChange) > 0
                                                    ? "#ff4d4f"
                                                    : "#fff",
                                        } },
                                        Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports["default"] = EnergySnapshotWidget;
// Add animation for tooltip pop
const style = document.createElement("style");
style.innerHTML = `
@keyframes tooltip-pop {
  from { opacity: 0; transform: scale(0.92) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
`;
document.head.appendChild(style);


/***/ }),

/***/ "./src/prod/energysnapshot/energysnapshot.scss":
/*!*****************************************************!*\
  !*** ./src/prod/energysnapshot/energysnapshot.scss ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./energysnapshot.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prod/energysnapshot/energysnapshot.scss");

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

/***/ "./src/prod/energysnapshot/mockData.json":
/*!***********************************************!*\
  !*** ./src/prod/energysnapshot/mockData.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"unit":"kWh","costUnit":"SGD","current":{"from":"2025-07-15T00:00:00","to":"2025-07-15T10:00:00","totalConsumption":1250,"totalCost":320.5,"hourly":[{"hour":"00:00","consumption":50,"cost":12.5},{"hour":"01:00","consumption":48,"cost":12},{"hour":"02:00","consumption":52,"cost":13},{"hour":"03:00","consumption":49,"cost":12.2},{"hour":"04:00","consumption":51,"cost":12.8},{"hour":"05:00","consumption":53,"cost":13.3},{"hour":"06:00","consumption":54,"cost":13.5},{"hour":"07:00","consumption":56,"cost":14},{"hour":"08:00","consumption":60,"cost":15},{"hour":"09:00","consumption":62,"cost":15.5},{"hour":"10:00","consumption":65,"cost":16.2}]},"previous":{"from":"2025-07-14T00:00:00","to":"2025-07-14T10:00:00","totalConsumption":1320,"totalCost":340,"hourly":[{"hour":"00:00","consumption":55,"cost":13.5},{"hour":"01:00","consumption":50,"cost":12.5},{"hour":"02:00","consumption":54,"cost":13.5},{"hour":"03:00","consumption":52,"cost":13},{"hour":"04:00","consumption":53,"cost":13.2},{"hour":"05:00","consumption":56,"cost":14},{"hour":"06:00","consumption":58,"cost":14.5},{"hour":"07:00","consumption":60,"cost":15},{"hour":"08:00","consumption":63,"cost":15.8},{"hour":"09:00","consumption":64,"cost":16},{"hour":"10:00","consumption":65,"cost":16.5}]},"alerts":[{"type":"spike","timestamp":"2025-07-15T03:00:00","description":"Unusual spike detected in energy usage"},{"type":"drop","timestamp":"2025-07-15T07:15:00","description":"Sudden drop in consumption"},{"type":"cost","timestamp":"2025-07-15T08:30:00","description":"Cost exceeded threshold"},{"type":"spike","timestamp":"2025-07-15T09:00:00","description":"Another spike detected at end of period"}],"spikesLast24Hours":[{"timestamp":"2025-07-15T03:00:00","value":180},{"timestamp":"2025-07-14T22:45:00","value":200}]}');

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