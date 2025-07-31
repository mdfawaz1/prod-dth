/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"1c738eb5-d6d8-49bd-e70b-469668288dc7","author":"fawaz","widgets":[{"id":"fault_left_panel","name":"fault_left_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

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
exports.push([module.id, ":root, .dark-mode {\n  --bg-color: rgba(20, 20, 20, 0.1);\n  --text-color: #ffffff;\n  --text-secondary: rgba(255, 255, 255, 0.9);\n  --text-muted: rgba(255, 255, 255, 0.7);\n  --glass-bg: rgba(20, 20, 20, 0.15);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --primary-blue: #4A90E2;\n  --success-green: #7ED321;\n  --warning-orange: #F5A623;\n  --purple: #BD10E0;\n}\n\n.uxp-date-range-picker,\n.uxp-date-picker,\n.react-datepicker-popper,\n.react-datepicker__portal {\n  z-index: 10001 !important;\n}\n\n.uxp-date-picker-dropdown,\n.uxp-date-range-picker-dropdown,\n.react-datepicker__tab-loop {\n  z-index: 10002 !important;\n}\n\n.main-container {\n  width: 100%;\n  height: 100%;\n  background: var(--bg-color);\n  color: var(--text-color);\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  direction: rtl;\n}\n.main-container * {\n  direction: ltr;\n}\n\n.glass-bg-fp {\n  background: var(--glass-bg);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  padding: 16px 14px;\n  width: 100%;\n  min-height: auto;\n  color: var(--text-color);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  border-radius: 12px;\n  border: 1px solid var(--glass-border);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.main-header .header-text {\n  font-size: 1.7rem;\n  font-weight: 600;\n  color: var(--text-color);\n  letter-spacing: -0.02em;\n}\n.main-header .header-subtitle {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  font-weight: 400;\n}\n\n.system-selector,\n.time-period-selector {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  padding: 8px 14px;\n  color: var(--text-color);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.system-selector:hover,\n.time-period-selector:hover {\n  background: var(--card-border);\n}\n.system-selector option,\n.time-period-selector option {\n  background: var(--modal-bg);\n  color: var(--text-color);\n}\n\n.compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n\n.metrics-section {\n  display: flex;\n  gap: 40px;\n  margin: 24px 0;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .metrics-section {\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n  }\n}\n\n.availability-circle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  flex: 0 0 auto;\n  min-height: 250px;\n}\n\n.availability-circle {\n  margin-top: 20px;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: conic-gradient(var(--primary-blue) 0deg, var(--primary-blue) 359deg, var(--progress-bg) 359deg, var(--progress-bg) 360deg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.availability-circle::before {\n  content: \"\";\n  position: absolute;\n  inset: 8px;\n  border-radius: 50%;\n  background: black;\n}\n.availability-circle .circle-content {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.availability-circle .circle-content .percentage {\n  font-size: 2.1rem;\n  font-weight: 700;\n  color: var(--text-color);\n  line-height: 1;\n}\n.availability-circle .circle-content .label {\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n\n.target-info {\n  text-align: center;\n}\n.target-info .target-label {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin-bottom: 4px;\n}\n.target-info .below-target {\n  font-size: 0.95rem;\n  color: var(--warning-orange);\n  font-weight: 500;\n}\n\n.equipment-breakdown {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 280px;\n  min-height: 250px;\n  margin-left: -20px;\n}\n.equipment-breakdown .breakdown-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 12px;\n  text-align: center;\n}\n\n.equipment-pie-chart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n  width: 100%;\n  height: 160px;\n}\n.equipment-pie-chart .recharts-pie-sector {\n  outline: none;\n}\n.equipment-pie-chart .recharts-tooltip-wrapper .recharts-default-tooltip {\n  background: rgba(20, 20, 20, 0.9) !important;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-radius: 8px !important;\n  color: #ffffff !important;\n}\n.equipment-pie-chart .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-item {\n  color: #ffffff !important;\n}\n.equipment-pie-chart .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-label {\n  color: #ffffff !important;\n}\n\n.equipment-legend {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  width: 100%;\n  max-width: 280px;\n}\n.equipment-legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n}\n.equipment-legend .legend-item .legend-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.equipment-legend .legend-item span {\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n\n.widget-section-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 32px 0 20px 0;\n  width: 100%;\n}\n.widget-section-title span {\n  padding: 0 12px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.widget-section-title .section-line {\n  height: 1px;\n  flex: 1;\n  background: linear-gradient(90deg, transparent, var(--text-color) 50%, transparent);\n  opacity: 0.2;\n}\n\n.widget-container {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 12px;\n  margin-bottom: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.widget-header:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n\n.widget-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.widget-icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(74, 144, 226, 0.15);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #4A90E2;\n}\n\n.widget-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-color);\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n\n.widget-header-right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.expand-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.expand-icon:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.widget-content {\n  padding: 0 24px 24px;\n  transition: all 0.3s ease;\n}\n\n.widget-controls {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.trend-section {\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  transform-origin: top;\n  margin-top: 24px;\n}\n.trend-section.collapsed {\n  max-height: 0;\n  margin-top: 0;\n  opacity: 0;\n  transform: scaleY(0);\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.trend-chart {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 8px;\n  padding: 16px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n.trend-chart .recharts-wrapper {\n  position: relative !important;\n  cursor: default !important;\n}\n.trend-chart .recharts-wrapper svg {\n  overflow: visible !important;\n}\n.trend-chart .recharts-cartesian-grid-horizontal line,\n.trend-chart .recharts-cartesian-grid-vertical line {\n  stroke: rgba(255, 255, 255, 0.1);\n}\n.trend-chart .recharts-text {\n  fill: #ffffff !important;\n  opacity: 0.9;\n}\n.trend-chart .recharts-legend-wrapper .recharts-legend-item-text {\n  color: #ffffff !important;\n}\n.trend-chart .recharts-cartesian-axis-tick-value {\n  fill: #ffffff !important;\n}\n.trend-chart .recharts-tooltip-wrapper .recharts-default-tooltip {\n  background: rgba(20, 20, 20, 0.9) !important;\n  border: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-radius: 8px !important;\n  color: #ffffff !important;\n}\n.trend-chart .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-item {\n  color: #ffffff !important;\n}\n.trend-chart .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-label {\n  color: #ffffff !important;\n}\n.trend-chart .recharts-line-dot {\n  outline: none;\n}\n.trend-chart .recharts-active-dot {\n  outline: none;\n}\n.trend-chart .recharts-surface {\n  outline: none;\n}\n\n@media (max-width: 768px) {\n  .main-container {\n    padding: 12px 8px;\n  }\n  .glass-bg-fp {\n    padding: 16px 12px;\n  }\n  .widget-container {\n    margin-bottom: 16px;\n  }\n  .widget-header {\n    padding: 16px 20px;\n  }\n  .widget-icon {\n    width: 36px;\n    height: 36px;\n  }\n  .widget-title {\n    font-size: 1.2rem;\n  }\n  .widget-content {\n    padding: 0 20px 20px;\n  }\n  .widget-controls {\n    flex-wrap: wrap;\n  }\n  .main-header .header-text {\n    font-size: 1.4rem;\n  }\n  .main-header .header-subtitle {\n    font-size: 0.9rem;\n  }\n  .availability-circle {\n    width: 100px;\n    height: 100px;\n  }\n  .availability-circle .circle-content .percentage {\n    font-size: 1.7rem;\n  }\n  .availability-circle .circle-content .label {\n    font-size: 0.9rem;\n  }\n  .system-selector,\n  .time-period-selector,\n  .compare-btn {\n    font-size: 0.85rem;\n    padding: 6px 10px;\n  }\n  .equipment-breakdown {\n    margin-left: 0;\n  }\n  .equipment-breakdown .breakdown-title {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .widget-container {\n    margin-bottom: 12px;\n  }\n  .widget-header {\n    padding: 14px 16px;\n  }\n  .widget-icon {\n    width: 32px;\n    height: 32px;\n  }\n  .widget-title {\n    font-size: 1.05rem;\n  }\n  .widget-content {\n    padding: 0 16px 16px;\n  }\n  .expand-icon {\n    width: 28px;\n    height: 28px;\n  }\n  .widget-section-title span {\n    font-size: 0.7rem;\n  }\n  .trend-filters {\n    flex-wrap: wrap;\n  }\n  .trend-filters .filter-btn {\n    padding: 4px 12px;\n    font-size: 0.75rem;\n  }\n  .metrics-section {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n  .main-header .header-text {\n    font-size: 1rem;\n  }\n  .main-header .header-subtitle {\n    font-size: 0.75rem;\n  }\n}\n.recharts-responsive-container .recharts-surface {\n  outline: none;\n}\n\n.equipment-legend .legend-item .legend-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n\n@media (max-width: 768px) {\n  .trend-chart .recharts-responsive-container {\n    height: 220px !important;\n  }\n  .equipment-pie-chart .recharts-responsive-container {\n    height: 160px !important;\n  }\n  .equipment-breakdown {\n    width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  .equipment-legend {\n    max-width: 100%;\n    gap: 12px;\n  }\n  .equipment-legend .legend-item {\n    font-size: 0.75rem;\n  }\n  .availability-circle-container {\n    min-height: auto;\n  }\n}\n@media (max-width: 480px) {\n  .trend-chart .recharts-responsive-container {\n    height: 200px !important;\n  }\n  .equipment-pie-chart .recharts-responsive-container {\n    height: 140px !important;\n  }\n  .equipment-legend {\n    flex-direction: column;\n    gap: 8px;\n    align-items: center;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1002;\n}\n.modal-overlay .uxp-date-range-picker,\n.modal-overlay .uxp-date-picker {\n  z-index: 10001 !important;\n}\n.modal-overlay .uxp-date-range-picker .uxp-date-picker-dropdown,\n.modal-overlay .uxp-date-range-picker .uxp-date-range-picker-dropdown,\n.modal-overlay .uxp-date-range-picker .react-datepicker-popper,\n.modal-overlay .uxp-date-range-picker .react-datepicker__portal,\n.modal-overlay .uxp-date-picker .uxp-date-picker-dropdown,\n.modal-overlay .uxp-date-picker .uxp-date-range-picker-dropdown,\n.modal-overlay .uxp-date-picker .react-datepicker-popper,\n.modal-overlay .uxp-date-picker .react-datepicker__portal {\n  z-index: 10002 !important;\n}\n\n.cooling-compare-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.modal-content {\n  background: var(--modal-bg);\n  border: 1px solid var(--modal-border);\n  border-radius: 12px;\n  padding: 0;\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  overflow: auto;\n  backdrop-filter: blur(10px);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--glass-border);\n}\n.modal-header h3 {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.modal-close {\n  background: none;\n  border: none;\n  color: var(--text-color);\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.modal-close:hover {\n  background: var(--card-border);\n}\n\n.cooling-compare-modal-content {\n  padding: 24px;\n}\n\n.cooling-compare-section {\n  margin-bottom: 20px;\n}\n.cooling-compare-section label {\n  display: block;\n  margin-bottom: 12px;\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n\n.cooling-select-container {\n  margin-bottom: 16px;\n}\n\n.cooling-compare-select {\n  width: 100%;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--text-color);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cooling-compare-select:hover, .cooling-compare-select:focus {\n  background: var(--card-border);\n  outline: none;\n}\n.cooling-compare-select option {\n  background: var(--modal-bg);\n  color: var(--text-color);\n}\n\n.cooling-compare-advanced {\n  margin-top: 16px;\n  padding: 16px;\n  background: var(--card-bg);\n  border-radius: 8px;\n  border: 1px solid var(--card-border);\n}\n\n.cooling-compare-advanced-range1,\n.cooling-compare-advanced-range2 {\n  margin-bottom: 16px;\n}\n.cooling-compare-advanced-range1 label,\n.cooling-compare-advanced-range2 label {\n  margin-bottom: 8px;\n}\n.cooling-compare-advanced-range1 .date-input,\n.cooling-compare-advanced-range2 .date-input {\n  width: 100%;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 4px;\n  padding: 8px 12px;\n  color: var(--text-color);\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.cooling-compare-advanced-range1 .date-input:focus,\n.cooling-compare-advanced-range2 .date-input:focus {\n  outline: none;\n  border-color: var(--primary-blue);\n}\n.cooling-compare-advanced-range1 .date-input::-webkit-calendar-picker-indicator,\n.cooling-compare-advanced-range2 .date-input::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n\n.cooling-compare-label-bold {\n  font-weight: 600;\n}\n\n.cooling-compare-label-margin {\n  margin-bottom: 8px;\n}\n\n.cooling-CalculateCompare-btn {\n  background: #42A5F5;\n  border: none;\n  border-radius: 6px;\n  padding: 10px 20px;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.cooling-CalculateCompare-btn:hover:not(:disabled) {\n  background: #1976D2;\n  transform: translateY(-1px);\n}\n.cooling-CalculateCompare-btn:disabled {\n  background: var(--card-border);\n  cursor: not-allowed;\n  color: var(--text-muted);\n}\n\n.cooling-comparison-results {\n  margin-top: 24px;\n  padding: 20px;\n  background: var(--card-bg);\n  border-radius: 8px;\n  border: 1px solid var(--card-border);\n}\n.cooling-comparison-results h4 {\n  margin: 0 0 16px 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.cooling-results-main {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.cooling-result-comparison,\n.cooling-result-current {\n  padding: 12px;\n  background: var(--glass-bg);\n  border-radius: 6px;\n  border: 1px solid var(--glass-border);\n}\n\n.cooling-result-label {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n}\n\n.cooling-result-value {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n.cooling-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.cooling-difference-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  background: var(--glass-bg);\n  border-radius: 6px;\n  border: 1px solid var(--glass-border);\n}\n\n.cooling-difference-label {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n\n.cooling-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.cooling-difference-value {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n\n@media (max-width: 768px) {\n  .modal-content {\n    width: 95%;\n    margin: 10px;\n  }\n  .cooling-results-main,\n  .cooling-result-difference {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .modal-header {\n    padding: 16px 20px;\n  }\n  .modal-header h3 {\n    font-size: 1.1rem;\n  }\n  .cooling-compare-modal-content {\n    padding: 20px;\n  }\n}\n.modal-container.dt-water-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.modal-container.dt-water-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px 12px 0 0;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body {\n  padding: 16px;\n  height: 100% !important;\n  margin: 0;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  overflow-y: auto;\n  border-radius: 0 0 12px 12px;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker {\n  z-index: 10001 !important;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .uxp-date-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .uxp-date-range-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .react-datepicker-popper,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .react-datepicker__portal,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .uxp-date-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .uxp-date-range-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .react-datepicker-popper,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .react-datepicker__portal {\n  z-index: 10002 !important;\n}\n\n.uxp-date-range-picker .uxp-date-picker-dropdown,\n.uxp-date-range-picker .uxp-date-range-picker-dropdown,\n.uxp-date-range-picker .react-datepicker-popper,\n.uxp-date-range-picker .react-datepicker__portal,\n.uxp-date-range-picker .react-datepicker__tab-loop,\n.uxp-date-picker .uxp-date-picker-dropdown,\n.uxp-date-picker .uxp-date-range-picker-dropdown,\n.uxp-date-picker .react-datepicker-popper,\n.uxp-date-picker .react-datepicker__portal,\n.uxp-date-picker .react-datepicker__tab-loop {\n  z-index: 10002 !important;\n}\n\n.mttf-display-section {\n  display: flex;\n  justify-content: center;\n  margin: 32px 0;\n}\n\n.mttf-main-card {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 32px 48px;\n  text-align: center;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  min-width: 320px;\n}\n\n.mttf-label {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.mttf-value {\n  font-size: 3.2rem;\n  font-weight: 700;\n  color: #4A90E2;\n  margin-bottom: 16px;\n  line-height: 1;\n}\n\n.mttf-change-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n\n.mttf-change {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.mttf-change.positive {\n  color: #7ED321;\n}\n.mttf-change.negative {\n  color: #FF4D4F;\n}\n.mttf-change .change-icon {\n  font-size: 14px;\n}\n\n.mttf-last-month {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.trend-header {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n\n.trend-filters {\n  display: flex;\n  gap: 8px;\n  background: var(--glass-bg);\n  border-radius: 8px;\n  padding: 4px;\n  border: 1px solid var(--glass-border);\n  backdrop-filter: blur(10px);\n}\n\n.filter-btn {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n}\n.filter-btn:hover {\n  background: var(--glass-border);\n  color: var(--text-color);\n}\n.filter-btn.active {\n  background: var(--primary-blue);\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .mttf-main-card {\n    padding: 24px 32px;\n    min-width: 280px;\n  }\n  .mttf-value {\n    font-size: 2.6rem;\n  }\n  .trend-filters .filter-btn {\n    padding: 6px 12px;\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 480px) {\n  .mttf-main-card {\n    padding: 20px 24px;\n    min-width: 240px;\n  }\n  .mttf-value {\n    font-size: 2.2rem;\n  }\n  .mttf-change {\n    font-size: 0.85rem;\n  }\n  .mttf-last-month {\n    font-size: 0.8rem;\n  }\n  .trend-filters {\n    flex-wrap: wrap;\n  }\n  .trend-filters .filter-btn {\n    padding: 4px 10px;\n    font-size: 0.8rem;\n  }\n}\n.resilience-display-section {\n  display: flex;\n  justify-content: space-between;\n  margin: 32px 0;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .resilience-display-section {\n    flex-direction: column;\n    gap: 16px;\n  }\n}\n\n.resilience-main-card {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 24px 32px;\n  text-align: center;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  flex: 2;\n  min-width: 250px;\n}\n\n.resilience-label {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.resilience-value {\n  font-size: 2.8rem;\n  font-weight: 700;\n  color: #4A90E2;\n  margin-bottom: 16px;\n  line-height: 1;\n}\n\n.resilience-change-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n\n.resilience-change {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.resilience-change.positive {\n  color: #7ED321;\n}\n.resilience-change.negative {\n  color: #FF4D4F;\n}\n.resilience-change .change-icon {\n  font-size: 14px;\n}\n\n.resilience-last-month {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.resilience-metrics {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n  min-width: 200px;\n}\n\n.resilience-metric-card {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 8px;\n  padding: 16px 20px;\n  text-align: center;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n  flex: 1;\n}\n\n.resilience-metric-label {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n\n.resilience-metric-value {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 4px;\n  line-height: 1;\n}\n\n.resilience-metric-period {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  opacity: 0.8;\n}\n\n@media (max-width: 768px) {\n  .resilience-main-card {\n    padding: 20px 24px;\n    min-width: 200px;\n  }\n  .resilience-value {\n    font-size: 2.4rem;\n  }\n  .resilience-metric-card {\n    padding: 14px 18px;\n  }\n  .resilience-metric-value {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 480px) {\n  .resilience-main-card {\n    padding: 16px 20px;\n    min-width: 180px;\n  }\n  .resilience-value {\n    font-size: 2rem;\n  }\n  .resilience-change {\n    font-size: 0.85rem;\n  }\n  .resilience-last-month {\n    font-size: 0.8rem;\n  }\n  .resilience-metric-card {\n    padding: 12px 16px;\n  }\n  .resilience-metric-value {\n    font-size: 1.4rem;\n  }\n  .resilience-metric-label {\n    font-size: 0.8rem;\n  }\n  .resilience-metric-period {\n    font-size: 0.75rem;\n  }\n}\n.ultra-compact-metrics {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  margin: 12px 0;\n  padding: 16px 20px;\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 10px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n@media (max-width: 768px) {\n  .ultra-compact-metrics {\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n  }\n}\n\n.main-metric-card {\n  text-align: center;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n\n.metric-value {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #4A90E2;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n\n.metric-label {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n  opacity: 0.9;\n}\n\n.secondary-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  flex: 1;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  .secondary-metrics {\n    justify-content: center;\n    gap: 16px;\n  }\n}\n\n.secondary-metric {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  flex: 1;\n  min-width: 110px;\n  max-width: 120px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.secondary-label {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  opacity: 0.9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.secondary-value {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n.secondary-value.warning {\n  color: #FF9800;\n  font-weight: 700;\n}\n.secondary-value.positive {\n  color: #4CAF50;\n}\n.secondary-value.negative {\n  color: #F44336;\n}\n\n.equipment-summary {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 17px;\n  flex: 1;\n  max-width: 200px;\n}\n@media (max-width: 768px) {\n  .equipment-summary {\n    grid-template-columns: repeat(4, 1fr);\n    max-width: 100%;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .equipment-summary {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 6px;\n  }\n}\n\n.equipment-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 12px 8px;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n  min-width: 60px;\n  min-height: 40px;\n}\n.equipment-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.equipment-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--equipment-color, #4A90E2);\n  opacity: 0.8;\n}\n\n.equipment-name {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n\n.equipment-value {\n  font-size: 1.05rem;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.widget-header {\n  padding: 16px 20px;\n}\n\n.widget-content {\n  padding: 0 16px 16px;\n}\n\n.widget-controls {\n  margin-bottom: 12px;\n}\n\n.trend-section {\n  margin-top: 8px;\n}\n\n.trend-header {\n  margin-bottom: 12px;\n}\n\n.trend-chart {\n  padding: 12px;\n}\n\n.compact-metrics-section,\n.compact-availability-container,\n.compact-availability-card,\n.availability-value,\n.availability-label,\n.availability-target,\n.equipment-progress-section,\n.equipment-progress-title,\n.equipment-progress-item,\n.equipment-progress-header,\n.equipment-progress-bar,\n.equipment-progress-fill,\n.compact-mttf-display-section,\n.compact-mttf-main-card,\n.compact-resilience-display-section,\n.compact-resilience-main-card,\n.compact-resilience-metrics,\n.compact-resilience-metric-card {\n  display: none;\n}\n\n.glass-bg-fp {\n  padding: 16px 14px;\n}\n\n@media (max-width: 768px) {\n  .ultra-compact-metrics {\n    padding: 14px 16px;\n    gap: 12px;\n  }\n  .metric-value {\n    font-size: 2rem;\n  }\n  .widget-header {\n    padding: 14px 16px;\n  }\n  .widget-content {\n    padding: 0 14px 14px;\n  }\n  .glass-bg-fp {\n    padding: 14px 12px;\n  }\n}\n@media (max-width: 480px) {\n  .ultra-compact-metrics {\n    padding: 12px 14px;\n    gap: 10px;\n  }\n  .metric-value {\n    font-size: 1.8rem;\n  }\n  .metric-label {\n    font-size: 0.85rem;\n  }\n  .secondary-label {\n    font-size: 0.75rem;\n  }\n  .secondary-value {\n    font-size: 0.9rem;\n  }\n  .secondary-metric {\n    min-width: 80px;\n    padding: 6px 10px;\n  }\n  .equipment-name {\n    font-size: 0.65rem;\n    margin-bottom: 3px;\n  }\n  .equipment-value {\n    font-size: 0.9rem;\n  }\n  .equipment-item {\n    padding: 6px 4px;\n  }\n  .widget-header {\n    padding: 12px 14px;\n  }\n  .widget-content {\n    padding: 0 12px 12px;\n  }\n}", ""]);
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

/***/ "./src/components/ResilienceWidget.tsx":
/*!*********************************************!*\
  !*** ./src/components/ResilienceWidget.tsx ***!
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
exports.ResilienceWidget = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// Import Recharts dynamically to avoid TypeScript issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } = Recharts;
const ResilienceWidget = (_props) => {
    const [selectedSystem, setSelectedSystem] = React.useState('All');
    const [selectedTrendPeriod, setSelectedTrendPeriod] = React.useState('6 Months');
    const [showComparePUEModal, setShowComparePUEModal] = React.useState(false);
    const [compareType, setCompareType] = React.useState('Last quarter monthly average');
    const [comparisonResult, setComparisonResult] = React.useState(null);
    const [range1, setRange1] = React.useState({ start: undefined, end: undefined });
    const [range2, setRange2] = React.useState({ start: undefined, end: undefined });
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [isGraphCollapsed, setIsGraphCollapsed] = React.useState(true);
    // System types
    const systemTypes = ['All', 'HVAC', 'Lighting', 'CCTV', 'Water'];
    const trendPeriods = ['6 Months', '12 Months'];
    // Compare options for dropdown
    const COPDdOptions = [
        { value: 'Last quarter monthly average', label: 'Last quarter monthly average' },
        { value: 'Last 6 months monthly average', label: 'Last 6 months monthly average' },
        { value: 'YTD monthly average', label: 'YTD monthly average' },
        { value: 'month to month', label: 'month to month' }
    ];
    // Calculate comparison function
    const calculateComparison = (compareType, _range1, _range2) => {
        // Mock comparison logic for MTTR - replace with actual API call
        let mockResult;
        if (compareType === 'Last quarter monthly average') {
            mockResult = {
                selected: { label: 'Last Quarter Average', value: 4.8, unit: 'hours' },
                current: { label: 'Current Period', value: 4.5, unit: 'hours' },
                percentChange: '-6.3',
                error: false
            };
        }
        else if (compareType === 'Last 6 months monthly average') {
            mockResult = {
                selected: { label: 'Last 6 Months Average', value: 5.2, unit: 'hours' },
                current: { label: 'Current Period', value: 4.5, unit: 'hours' },
                percentChange: '-13.5',
                error: false
            };
        }
        else if (compareType === 'YTD monthly average') {
            mockResult = {
                selected: { label: 'YTD Average', value: 5.0, unit: 'hours' },
                current: { label: 'Current Period', value: 4.5, unit: 'hours' },
                percentChange: '-10.0',
                error: false
            };
        }
        else if (compareType === 'month to month') {
            // Format dates for display
            const formatDateRange = (range) => {
                if (range && range.start && range.end) {
                    const startDate = new Date(range.start);
                    const endDate = new Date(range.end);
                    const formatDate = (date) => {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}/${month}/${year}`;
                    };
                    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
                }
                return 'Selected Month';
            };
            mockResult = {
                selected: {
                    label: formatDateRange(range1),
                    value: 5.3,
                    unit: 'hours'
                },
                current: {
                    label: formatDateRange(range2),
                    value: 4.2,
                    unit: 'hours'
                },
                percentChange: '-20.8',
                error: false
            };
        }
        else {
            mockResult = {
                selected: { label: compareType, value: 4.8, unit: 'hours' },
                current: { label: 'Current Period', value: 4.5, unit: 'hours' },
                percentChange: '-6.3',
                error: false
            };
        }
        setComparisonResult(mockResult);
    };
    // Mock MTTR data - replace with actual data from your API
    const getMTTRData = () => {
        const systemData = {
            'All': {
                mttr: 4.5,
                lastMonth: 5.2,
                change: -13.5,
                unit: 'h',
                repairEvents: 12,
                totalDowntime: 54,
                downtimeUnit: 'h'
            },
            'HVAC': {
                mttr: 3.8,
                lastMonth: 4.1,
                change: -7.3,
                unit: 'h',
                repairEvents: 3,
                totalDowntime: 11.4,
                downtimeUnit: 'h'
            },
            'Lighting': {
                mttr: 2.2,
                lastMonth: 2.8,
                change: -21.4,
                unit: 'h',
                repairEvents: 5,
                totalDowntime: 11,
                downtimeUnit: 'h'
            },
            'CCTV': {
                mttr: 6.3,
                lastMonth: 7.2,
                change: -12.5,
                unit: 'h',
                repairEvents: 2,
                totalDowntime: 12.6,
                downtimeUnit: 'h'
            },
            'Water': {
                mttr: 5.8,
                lastMonth: 5.5,
                change: 5.5,
                unit: 'h',
                repairEvents: 2,
                totalDowntime: 11.6,
                downtimeUnit: 'h'
            }
        };
        return systemData[selectedSystem] || systemData['All'];
    };
    // Format time display (convert decimal hours to hours/minutes)
    const formatMTTR = (hours) => {
        const wholeHours = Math.floor(hours);
        const minutes = Math.round((hours - wholeHours) * 60);
        if (minutes === 0) {
            return `${wholeHours}h 0m`;
        }
        return `${wholeHours}h ${minutes}m`;
    };
    const currentMTTR = getMTTRData();
    // Monthly MTTR trend data
    const getTrendData = () => {
        if (selectedTrendPeriod === '6 Months') {
            const baseData = [
                { month: 'Aug', All: 5.1, HVAC: 4.2, Lighting: 2.8, CCTV: 7.1, Water: 6.2 },
                { month: 'Sep', All: 5.3, HVAC: 4.5, Lighting: 2.6, CCTV: 7.5, Water: 5.9 },
                { month: 'Oct', All: 4.9, HVAC: 3.9, Lighting: 2.4, CCTV: 6.8, Water: 6.1 },
                { month: 'Nov', All: 4.7, HVAC: 3.8, Lighting: 2.2, CCTV: 6.5, Water: 5.8 },
                { month: 'Dec', All: 5.0, HVAC: 4.0, Lighting: 2.5, CCTV: 6.9, Water: 5.7 },
                { month: 'Jan', All: 4.5, HVAC: 3.8, Lighting: 2.2, CCTV: 6.3, Water: 5.8 }
            ];
            return baseData.map(item => ({
                month: item.month,
                mttr: item[selectedSystem]
            }));
        }
        else {
            // 12 Months data
            const baseData = [
                { month: 'Feb 23', All: 5.4, HVAC: 4.5, Lighting: 3.1, CCTV: 7.3, Water: 6.4 },
                { month: 'Mar 23', All: 5.2, HVAC: 4.3, Lighting: 2.9, CCTV: 7.0, Water: 6.1 },
                { month: 'Apr 23', All: 5.0, HVAC: 4.1, Lighting: 2.7, CCTV: 6.8, Water: 5.9 },
                { month: 'May 23', All: 4.8, HVAC: 3.9, Lighting: 2.5, CCTV: 6.6, Water: 5.7 },
                { month: 'Jun 23', All: 5.1, HVAC: 4.2, Lighting: 2.8, CCTV: 7.1, Water: 6.2 },
                { month: 'Jul 23', All: 5.3, HVAC: 4.5, Lighting: 2.6, CCTV: 7.5, Water: 5.9 },
                { month: 'Aug 23', All: 5.1, HVAC: 4.2, Lighting: 2.8, CCTV: 7.1, Water: 6.2 },
                { month: 'Sep 23', All: 5.3, HVAC: 4.5, Lighting: 2.6, CCTV: 7.5, Water: 5.9 },
                { month: 'Oct 23', All: 4.9, HVAC: 3.9, Lighting: 2.4, CCTV: 6.8, Water: 6.1 },
                { month: 'Nov 23', All: 4.7, HVAC: 3.8, Lighting: 2.2, CCTV: 6.5, Water: 5.8 },
                { month: 'Dec 23', All: 5.0, HVAC: 4.0, Lighting: 2.5, CCTV: 6.9, Water: 5.7 },
                { month: 'Jan 24', All: 4.5, HVAC: 3.8, Lighting: 2.2, CCTV: 6.3, Water: 5.8 }
            ];
            return baseData.map(item => ({
                month: item.month,
                mttr: item[selectedSystem]
            }));
        }
    };
    const trendData = getTrendData();
    return (React.createElement("div", { className: "widget-container" },
        React.createElement("div", { className: "widget-header", onClick: () => setIsGraphCollapsed(!isGraphCollapsed) },
            React.createElement("div", { className: "widget-header-left" },
                React.createElement("div", { className: "widget-icon" },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                        React.createElement("path", { d: "M12,3L2,9L12,15L22,9L12,3M12,21L2,15L12,21L22,15L12,21M12,9L4.5,13.5L12,18L19.5,13.5L12,9M5,14L12,9.5L19,14L12,18.5L5,14Z" }))),
                React.createElement("div", { className: "widget-title" },
                    "Resilience",
                    React.createElement("div", { style: {
                            marginLeft: '8px',
                            position: 'relative',
                            display: 'inline-block'
                        }, onMouseEnter: () => setShowTooltip(true), onMouseLeave: () => setShowTooltip(false), onClick: (e) => e.stopPropagation() },
                        React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", style: {
                                opacity: 0.7,
                                cursor: 'pointer'
                            } },
                            React.createElement("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" })),
                        showTooltip && (React.createElement("div", { style: {
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '8px',
                                padding: '8px 12px',
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                color: '#ffffff',
                                fontSize: '12px',
                                borderRadius: '6px',
                                whiteSpace: 'nowrap',
                                zIndex: 1000,
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                maxWidth: '250px'
                            } },
                            "Current month's data till last hour",
                            React.createElement("div", { style: {
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderBottom: '6px solid rgba(0, 0, 0, 0.9)'
                                } })))))),
            React.createElement("div", { className: "widget-header-right" },
                React.createElement("button", { className: "compare-btn", onClick: (e) => { e.stopPropagation(); setShowComparePUEModal(true); } }, "Compare"),
                React.createElement("div", { className: "expand-icon" },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", style: {
                            transform: isGraphCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease'
                        } },
                        React.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))),
        React.createElement("div", { className: "widget-content" },
            React.createElement("div", { className: "widget-controls" },
                React.createElement("select", { className: "system-selector", value: selectedSystem, onChange: (e) => setSelectedSystem(e.target.value), onClick: (e) => e.stopPropagation() }, systemTypes.map(system => (React.createElement("option", { key: system, value: system }, system))))),
            React.createElement("div", { className: "ultra-compact-metrics" },
                React.createElement("div", { className: "main-metric-card" },
                    React.createElement("div", { className: "metric-value", style: { marginTop: '30px' } }, formatMTTR(currentMTTR.mttr)),
                    React.createElement("div", { className: "metric-label" }, "Mean Time To Repair")),
                React.createElement("div", { className: "secondary-metrics" },
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "REPAIR EVENTS"),
                        React.createElement("span", { className: "secondary-value" }, currentMTTR.repairEvents)),
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "TOTAL DOWNTIME"),
                        React.createElement("span", { className: "secondary-value" }, formatMTTR(currentMTTR.totalDowntime))),
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "CHANGE"),
                        React.createElement("span", { className: `secondary-value ${currentMTTR.change <= 0 ? 'positive' : 'negative'}` },
                            currentMTTR.change <= 0 ? '▼' : '▲',
                            " ",
                            Math.abs(currentMTTR.change).toFixed(1),
                            "%")))),
            React.createElement("div", { className: `trend-section ${isGraphCollapsed ? 'collapsed' : ''}` },
                React.createElement("div", { className: "trend-header" },
                    React.createElement("div", { className: "trend-filters" }, trendPeriods.map(period => (React.createElement("button", { key: period, className: `filter-btn ${selectedTrendPeriod === period ? 'active' : ''}`, onClick: () => setSelectedTrendPeriod(period) }, period))))),
                React.createElement("div", { className: "trend-chart" }, React.createElement(ResponsiveContainer, { width: "100%", height: 140 }, React.createElement(AreaChart, {
                    data: trendData,
                    margin: { top: 10, right: 20, left: 10, bottom: 10 }
                }, React.createElement('defs', {}, React.createElement('linearGradient', { id: 'mttrGradient', x1: 0, y1: 0, x2: 0, y2: 1 }, React.createElement('stop', { offset: '0%', stopColor: '#4A90E2', stopOpacity: 0.3 }), React.createElement('stop', { offset: '95%', stopColor: '#4A90E2', stopOpacity: 0 }))), React.createElement(CartesianGrid, {
                    strokeDasharray: "3 3",
                    stroke: "rgba(255,255,255,0.15)",
                    strokeWidth: 0.5
                }), React.createElement(XAxis, {
                    dataKey: "month",
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.8 },
                    tickMargin: 6
                }), React.createElement(YAxis, {
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.8 },
                    tickMargin: 6,
                    width: 50
                }), React.createElement(Tooltip, {
                    formatter: (value) => [`${value} Hours`, 'MTTR'],
                    contentStyle: {
                        backgroundColor: 'rgba(15, 15, 15, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    },
                    itemStyle: {
                        color: '#ffffff',
                        fontSize: '12px'
                    },
                    labelStyle: {
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: '500'
                    }
                }), React.createElement(Area, {
                    type: "monotone",
                    dataKey: "mttr",
                    stroke: "#4A90E2",
                    strokeWidth: 2.5,
                    fill: "url(#mttrGradient)",
                    dot: {
                        fill: '#4A90E2',
                        strokeWidth: 2,
                        r: 3,
                        stroke: '#ffffff'
                    },
                    activeDot: {
                        r: 4,
                        stroke: '#4A90E2',
                        strokeWidth: 2,
                        fill: '#ffffff'
                    },
                    name: "MTTR (Hours)"
                }))))),
            React.createElement(components_1.Modal, { show: showComparePUEModal, onClose: () => {
                    setShowComparePUEModal(false);
                    setComparisonResult(null);
                    setRange1({ start: undefined, end: undefined });
                    setRange2({ start: undefined, end: undefined });
                }, title: "Compare MTTR Resilience", className: "dt-water-compare-modal" },
                React.createElement("div", { className: "cooling-compare-modal-content modal-body" },
                    React.createElement("div", { className: "cooling-compare-options" },
                        React.createElement("div", { className: "cooling-compare-section" },
                            React.createElement("label", null, "Compare Target MTTR with:"),
                            React.createElement("div", { className: "cooling-select-container" },
                                React.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                        const newCompareType = e.target.value;
                                        setCompareType(newCompareType);
                                        setComparisonResult(null);
                                        setRange1({ start: undefined, end: undefined });
                                        setRange2({ start: undefined, end: undefined });
                                    }, className: "cooling-compare-select" }, COPDdOptions.map((opt) => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                            compareType === "month to month" && (React.createElement("div", { className: "cooling-compare-advanced" },
                                React.createElement("div", { className: "cooling-compare-advanced-range1" },
                                    React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Month 1:"),
                                    React.createElement(components_1.DateRangePicker, { startDate: range1.start, endDate: range1.end, onChange: (startDate, endDate) => setRange1({ start: startDate, end: endDate }) })),
                                React.createElement("div", { className: "cooling-compare-advanced-range2" },
                                    React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Month 2:"),
                                    React.createElement(components_1.DateRangePicker, { startDate: range2.start, endDate: range2.end, onChange: (startDate, endDate) => setRange2({ start: startDate, end: endDate }) })))),
                            React.createElement("div", { style: { marginTop: '16px' } },
                                React.createElement("button", { style: { background: "#42A5F5" }, className: "cooling-CalculateCompare-btn", onClick: () => calculateComparison(compareType, range1, range2), disabled: compareType === "month to month" && (!range1.start || !range1.end || !range2.start || !range2.end) }, "COMPARE"))),
                        (compareType !== "month to month" || (compareType === "month to month" && comparisonResult)) &&
                            comparisonResult &&
                            !comparisonResult.error &&
                            comparisonResult.selected &&
                            comparisonResult.current && (React.createElement("div", { className: "cooling-comparison-results" },
                            React.createElement("h4", null, "Comparison Results"),
                            React.createElement("div", { className: "cooling-results-main" },
                                React.createElement("div", { className: "cooling-result-comparison" },
                                    React.createElement("div", { className: "cooling-result-label" }, comparisonResult.selected.label),
                                    React.createElement("div", { className: "cooling-result-value" },
                                        comparisonResult.selected.value,
                                        " ",
                                        comparisonResult.selected.unit)),
                                React.createElement("div", { className: "cooling-result-current" },
                                    React.createElement("div", { className: "cooling-result-label" }, comparisonResult.current.label),
                                    React.createElement("div", { className: "cooling-result-value" },
                                        comparisonResult.current.value,
                                        " ",
                                        comparisonResult.current.unit))),
                            React.createElement("div", { className: "cooling-result-difference" },
                                React.createElement("div", { className: "cooling-difference-item" },
                                    React.createElement("span", { className: "cooling-difference-label" }, "Difference"),
                                    React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                        comparisonResult.current.value - comparisonResult.selected.value < 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25BC")) : comparisonResult.current.value - comparisonResult.selected.value > 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25B2")) : null,
                                        React.createElement("span", { className: "cooling-difference-value", style: {
                                                color: comparisonResult.current.value - comparisonResult.selected.value < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : comparisonResult.current.value - comparisonResult.selected.value > 0
                                                        ? "#FF4D4F"
                                                        : "#fff",
                                            } },
                                            Math.abs(comparisonResult.current.value - comparisonResult.selected.value).toFixed(2),
                                            " ",
                                            comparisonResult.current.unit))),
                                React.createElement("div", { className: "cooling-difference-item" },
                                    React.createElement("span", { className: "cooling-difference-label" }, "Change"),
                                    React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                        parseFloat(comparisonResult.percentChange) < 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25BC")) : parseFloat(comparisonResult.percentChange) > 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25B2")) : null,
                                        React.createElement("span", { className: "cooling-difference-value", style: {
                                                color: parseFloat(comparisonResult.percentChange) < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : parseFloat(comparisonResult.percentChange) > 0
                                                        ? "#FF4D4F"
                                                        : "#fff",
                                            } },
                                            Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                            "%"))))))))))));
};
exports.ResilienceWidget = ResilienceWidget;


/***/ }),

/***/ "./src/components/SystemAvailabilityWidget.tsx":
/*!*****************************************************!*\
  !*** ./src/components/SystemAvailabilityWidget.tsx ***!
  \*****************************************************/
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
exports.SystemAvailabilityWidget = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// Import Recharts dynamically to avoid TypeScript issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } = Recharts;
const SystemAvailabilityWidget = (_props) => {
    const [selectedTimePeriod, setSelectedTimePeriod] = React.useState('7 Days');
    const [selectedSystem, setSelectedSystem] = React.useState('All');
    const [showComparePUEModal, setShowComparePUEModal] = React.useState(false);
    const [compareType, setCompareType] = React.useState('Last week');
    const [comparisonResult, setComparisonResult] = React.useState(null);
    const [range1, setRange1] = React.useState({ start: null, end: null });
    const [range2, setRange2] = React.useState({ start: null, end: null });
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [isGraphCollapsed, setIsGraphCollapsed] = React.useState(true);
    // System types
    const systemTypes = ['All', 'HVAC', 'Lighting', 'CCTV', 'Water'];
    // Compare options for dropdown
    const COPDdOptions = [
        { value: 'Last week', label: 'Last week' },
        { value: 'Last month weekly average', label: 'Last month weekly average' },
        { value: 'Last quarter weekly average', label: 'Last quarter weekly average' },
        { value: 'Last 6 Months weekly average', label: 'Last 6 Months weekly average' },
        { value: 'YTD weekly average', label: 'YTD weekly average' },
        { value: 'Availability with Target (99.99%)', label: 'Availability with Target (99.99%)' },
        { value: 'Any timeframe vs any timeframe', label: 'Any timeframe vs any timeframe' }
    ];
    // Calculate comparison function
    const calculateComparison = (compareType, _range1, _range2) => {
        // Mock comparison logic - replace with actual API call
        let mockResult;
        if (compareType === 'Last week') {
            mockResult = {
                selected: { label: 'Last Week', value: 98.12, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '0.34',
                error: false
            };
        }
        else if (compareType === 'Last month weekly average') {
            mockResult = {
                selected: { label: 'Last Month Weekly Average', value: 97.89, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '0.57',
                error: false
            };
        }
        else if (compareType === 'Last quarter weekly average') {
            mockResult = {
                selected: { label: 'Last Quarter Weekly Average', value: 98.05, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '0.41',
                error: false
            };
        }
        else if (compareType === 'Last 6 Months weekly average') {
            mockResult = {
                selected: { label: 'Last 6 Months Weekly Average', value: 97.78, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '0.68',
                error: false
            };
        }
        else if (compareType === 'YTD weekly average') {
            mockResult = {
                selected: { label: 'YTD Weekly Average', value: 98.01, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '0.45',
                error: false
            };
        }
        else if (compareType === 'Availability with Target (99.99%)') {
            mockResult = {
                selected: { label: 'Target Availability', value: 99.99, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '-1.54',
                error: false
            };
        }
        else if (compareType === 'Any timeframe vs any timeframe') {
            // Format dates for display
            const formatDateRange = (range) => {
                if (range.start && range.end) {
                    const startDate = new Date(range.start);
                    const endDate = new Date(range.end);
                    const formatDate = (date) => {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}/${month}/${year}`;
                    };
                    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
                }
                return 'Selected Timeframe';
            };
            mockResult = {
                selected: {
                    label: formatDateRange(range1),
                    value: 97.93,
                    unit: '%'
                },
                current: {
                    label: formatDateRange(range2),
                    value: 98.67,
                    unit: '%'
                },
                percentChange: '0.75',
                error: false
            };
        }
        else {
            mockResult = {
                selected: { label: compareType, value: 99.85, unit: '%' },
                current: { label: 'Current Period', value: 98.45, unit: '%' },
                percentChange: '-1.40',
                error: false
            };
        }
        setComparisonResult(mockResult);
    };
    // Mock data - replace with actual data from your API
    const getAllSystemsData = () => {
        // Different data based on time period
        const periodData = {
            '7 Days': {
                overall: 98.45,
                equipment: [
                    { name: 'HVAC', value: 99.2, color: '#4A90E2' },
                    { name: 'Lighting', value: 97.8, color: '#F5A623' },
                    { name: 'CCTV', value: 96.5, color: '#BD10E0' },
                    { name: 'Water', value: 95.3, color: '#7ED321' }
                ]
            },
            'Month': {
                overall: 97.85,
                equipment: [
                    { name: 'HVAC', value: 98.8, color: '#4A90E2' },
                    { name: 'Lighting', value: 97.2, color: '#F5A623' },
                    { name: 'CCTV', value: 96.8, color: '#BD10E0' },
                    { name: 'Water', value: 94.9, color: '#7ED321' }
                ]
            },
            'Quarter': {
                overall: 98.12,
                equipment: [
                    { name: 'HVAC', value: 99.1, color: '#4A90E2' },
                    { name: 'Lighting', value: 97.6, color: '#F5A623' },
                    { name: 'CCTV', value: 97.2, color: '#BD10E0' },
                    { name: 'Water', value: 95.8, color: '#7ED321' }
                ]
            },
            'Year': {
                overall: 97.95,
                equipment: [
                    { name: 'HVAC', value: 98.9, color: '#4A90E2' },
                    { name: 'Lighting', value: 97.4, color: '#F5A623' },
                    { name: 'CCTV', value: 97.1, color: '#BD10E0' },
                    { name: 'Water', value: 94.6, color: '#7ED321' }
                ]
            }
        };
        const currentPeriodData = periodData[selectedTimePeriod] || periodData['7 Days'];
        return Object.assign(Object.assign({}, currentPeriodData), { target: 99.99, belowTarget: Number((99.99 - currentPeriodData.overall).toFixed(2)) });
    };
    const getSystemSpecificData = (system) => {
        // Different data based on time period and system
        const systemPeriodData = {
            '7 Days': {
                'HVAC': { overall: 99.2, target: 99.99, belowTarget: 0.79 },
                'Lighting': { overall: 97.8, target: 99.99, belowTarget: 2.19 },
                'CCTV': { overall: 96.5, target: 99.99, belowTarget: 3.49 },
                'Water': { overall: 95.3, target: 99.99, belowTarget: 4.69 }
            },
            'Month': {
                'HVAC': { overall: 98.8, target: 99.99, belowTarget: 1.19 },
                'Lighting': { overall: 97.2, target: 99.99, belowTarget: 2.79 },
                'CCTV': { overall: 96.8, target: 99.99, belowTarget: 3.19 },
                'Water': { overall: 94.9, target: 99.99, belowTarget: 5.09 }
            },
            'Quarter': {
                'HVAC': { overall: 99.1, target: 99.99, belowTarget: 0.89 },
                'Lighting': { overall: 97.6, target: 99.99, belowTarget: 2.39 },
                'CCTV': { overall: 97.2, target: 99.99, belowTarget: 2.79 },
                'Water': { overall: 95.8, target: 99.99, belowTarget: 4.19 }
            },
            'Year': {
                'HVAC': { overall: 98.9, target: 99.99, belowTarget: 1.09 },
                'Lighting': { overall: 97.4, target: 99.99, belowTarget: 2.59 },
                'CCTV': { overall: 97.1, target: 99.99, belowTarget: 2.89 },
                'Water': { overall: 94.6, target: 99.99, belowTarget: 5.39 }
            }
        };
        const periodData = systemPeriodData[selectedTimePeriod] || systemPeriodData['7 Days'];
        return periodData[system] || getAllSystemsData();
    };
    const currentData = selectedSystem === 'All' ? getAllSystemsData() : getSystemSpecificData(selectedSystem);
    const getTrendData = () => {
        // Generate different data based on selected time period
        if (selectedTimePeriod === '7 Days') {
            const baseData = [
                { day: 'Mon', All: 98.5, HVAC: 99.3, Lighting: 98.1, CCTV: 96.8, Water: 95.5, target: 99.99 },
                { day: 'Tue', All: 97.8, HVAC: 98.9, Lighting: 97.2, CCTV: 96.1, Water: 94.8, target: 99.99 },
                { day: 'Wed', All: 98.9, HVAC: 99.4, Lighting: 98.5, CCTV: 97.2, Water: 95.9, target: 99.99 },
                { day: 'Thu', All: 97.2, HVAC: 98.5, Lighting: 96.8, CCTV: 95.4, Water: 93.9, target: 99.99 },
                { day: 'Fri', All: 98.6, HVAC: 99.1, Lighting: 98.2, CCTV: 96.9, Water: 95.4, target: 99.99 },
                { day: 'Sat', All: 99.1, HVAC: 99.5, Lighting: 98.7, CCTV: 97.6, Water: 96.2, target: 99.99 },
                { day: 'Sun', All: 98.45, HVAC: 99.2, Lighting: 97.8, CCTV: 96.5, Water: 95.3, target: 99.99 }
            ];
            return baseData.map(item => ({
                day: item.day,
                availability: item[selectedSystem] || item.All,
                target: item.target
            }));
        }
        else if (selectedTimePeriod === 'Month') {
            const baseData = [
                { day: 'Week 1', All: 98.2, HVAC: 99.1, Lighting: 97.8, CCTV: 97.2, Water: 95.5, target: 99.99 },
                { day: 'Week 2', All: 97.6, HVAC: 98.7, Lighting: 96.9, CCTV: 96.5, Water: 94.8, target: 99.99 },
                { day: 'Week 3', All: 97.4, HVAC: 98.5, Lighting: 96.7, CCTV: 96.2, Water: 94.2, target: 99.99 },
                { day: 'Week 4', All: 97.85, HVAC: 98.8, Lighting: 97.2, CCTV: 96.8, Water: 94.9, target: 99.99 }
            ];
            return baseData.map(item => ({
                day: item.day,
                availability: item[selectedSystem] || item.All,
                target: item.target
            }));
        }
        else if (selectedTimePeriod === 'Quarter') {
            const baseData = [
                { day: 'Jan', All: 97.8, HVAC: 98.9, Lighting: 97.2, CCTV: 96.8, Water: 95.2, target: 99.99 },
                { day: 'Feb', All: 98.3, HVAC: 99.2, Lighting: 97.8, CCTV: 97.4, Water: 96.1, target: 99.99 },
                { day: 'Mar', All: 98.12, HVAC: 99.1, Lighting: 97.6, CCTV: 97.2, Water: 95.8, target: 99.99 }
            ];
            return baseData.map(item => ({
                day: item.day,
                availability: item[selectedSystem] || item.All,
                target: item.target
            }));
        }
        else if (selectedTimePeriod === 'Year') {
            const baseData = [
                { day: 'Q1', All: 97.8, HVAC: 98.9, Lighting: 97.2, CCTV: 96.8, Water: 95.2, target: 99.99 },
                { day: 'Q2', All: 98.4, HVAC: 99.3, Lighting: 97.9, CCTV: 97.5, Water: 96.3, target: 99.99 },
                { day: 'Q3', All: 98.6, HVAC: 99.5, Lighting: 98.1, CCTV: 97.8, Water: 96.8, target: 99.99 },
                { day: 'Q4', All: 97.95, HVAC: 98.9, Lighting: 97.4, CCTV: 97.1, Water: 94.6, target: 99.99 }
            ];
            return baseData.map(item => ({
                day: item.day,
                availability: item[selectedSystem] || item.All,
                target: item.target
            }));
        }
        // Default fallback
        return [];
    };
    const trendData = getTrendData();
    return (React.createElement("div", { className: "widget-container" },
        React.createElement("div", { className: "widget-header", onClick: () => setIsGraphCollapsed(!isGraphCollapsed) },
            React.createElement("div", { className: "widget-header-left" },
                React.createElement("div", { className: "widget-icon" },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                        React.createElement("path", { d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.1,7 14,7.9 14,9C14,10.1 13.1,11 12,11C10.9,11 10,10.1 10,9C10,7.9 10.9,7 12,7M12,14C13.5,14 16,14.75 16,16.25V17H8V16.25C8,14.75 10.5,14 12,14Z" }))),
                React.createElement("div", { className: "widget-title" },
                    "System Availability",
                    React.createElement("div", { style: {
                            marginLeft: '8px',
                            position: 'relative',
                            display: 'inline-block'
                        }, onMouseEnter: () => setShowTooltip(true), onMouseLeave: () => setShowTooltip(false), onClick: (e) => e.stopPropagation() },
                        React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", style: {
                                opacity: 0.7,
                                cursor: 'pointer'
                            } },
                            React.createElement("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" })),
                        showTooltip && (React.createElement("div", { style: {
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '8px',
                                padding: '8px 12px',
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                color: '#ffffff',
                                fontSize: '12px',
                                borderRadius: '6px',
                                whiteSpace: 'nowrap',
                                zIndex: 1000,
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                maxWidth: '300px'
                            } },
                            "Current Week's Availability (Last Updated: 1 hour ago)",
                            React.createElement("div", { style: {
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderBottom: '6px solid rgba(0, 0, 0, 0.9)'
                                } })))))),
            React.createElement("div", { className: "widget-header-right" },
                React.createElement("button", { className: "compare-btn", onClick: (e) => { e.stopPropagation(); setShowComparePUEModal(true); } }, "Compare"),
                React.createElement("div", { className: "expand-icon" },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", style: {
                            transform: isGraphCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease'
                        } },
                        React.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))),
        React.createElement("div", { className: "widget-content" },
            React.createElement("div", { className: "widget-controls" },
                React.createElement("select", { className: "system-selector", value: selectedSystem, onChange: (e) => setSelectedSystem(e.target.value), onClick: (e) => e.stopPropagation() }, systemTypes.map(system => (React.createElement("option", { key: system, value: system }, system)))),
                React.createElement("select", { className: "time-period-selector", value: selectedTimePeriod, onChange: (e) => setSelectedTimePeriod(e.target.value), onClick: (e) => e.stopPropagation() },
                    React.createElement("option", { value: "7 Days" }, "7 Days"),
                    React.createElement("option", { value: "Month" }, "Month"),
                    React.createElement("option", { value: "Quarter" }, "Quarter"),
                    React.createElement("option", { value: "Year" }, "Year"))),
            React.createElement("div", { className: "ultra-compact-metrics" },
                React.createElement("div", { className: "main-metric-card" },
                    React.createElement("div", { className: "metric-value", style: { marginTop: selectedSystem === 'All' ? '30px' : '5px' } },
                        currentData.overall,
                        "%"),
                    React.createElement("div", { className: "metric-label" },
                        selectedSystem === 'All' ? 'Overall' : selectedSystem,
                        " Availability")),
                React.createElement("div", { className: "secondary-metrics" },
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "TARGET"),
                        React.createElement("span", { className: "secondary-value" },
                            currentData.target,
                            "%")),
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "BELOW TARGET"),
                        React.createElement("span", { className: "secondary-value warning" },
                            currentData.belowTarget,
                            "%"))),
                selectedSystem === 'All' && 'equipment' in currentData && Array.isArray(currentData.equipment) && (React.createElement("div", { className: "equipment-summary" }, currentData.equipment.slice(0, 4).map((item, index) => (React.createElement("div", { key: index, className: "equipment-item", style: { '--equipment-color': item.color } },
                    React.createElement("span", { className: "equipment-name" }, item.name),
                    React.createElement("span", { className: "equipment-value", style: { color: item.color } },
                        item.value,
                        "%"))))))),
            React.createElement("div", { className: `trend-section ${isGraphCollapsed ? 'collapsed' : ''}` },
                React.createElement("div", { className: "trend-chart" }, React.createElement(ResponsiveContainer, { width: "100%", height: 140 }, React.createElement(AreaChart, {
                    data: trendData,
                    margin: { top: 10, right: 20, left: 10, bottom: 10 }
                }, React.createElement('defs', {}, React.createElement('linearGradient', { id: 'availabilityGradient', x1: 0, y1: 0, x2: 0, y2: 1 }, React.createElement('stop', { offset: '0%', stopColor: '#4A90E2', stopOpacity: 0.3 }), React.createElement('stop', { offset: '95%', stopColor: '#4A90E2', stopOpacity: 0 }))), React.createElement(CartesianGrid, {
                    strokeDasharray: "3 3",
                    stroke: "rgba(255,255,255,0.15)",
                    strokeWidth: 0.5
                }), React.createElement(XAxis, {
                    dataKey: "day",
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.8 },
                    tickMargin: 6
                }), React.createElement(YAxis, {
                    domain: [96, 100],
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.8 },
                    tickFormatter: (value) => `${value}%`,
                    tickMargin: 6,
                    width: 50
                }), React.createElement(Tooltip, {
                    formatter: (value, name) => [
                        `${value}%`,
                        name === 'availability' ? 'System Availability' : 'Target'
                    ],
                    contentStyle: {
                        backgroundColor: 'rgba(15, 15, 15, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    },
                    itemStyle: {
                        color: '#ffffff',
                        fontSize: '12px'
                    },
                    labelStyle: {
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: '500'
                    }
                }), React.createElement(Line, {
                    type: "monotone",
                    dataKey: "target",
                    stroke: "#F5A623",
                    strokeWidth: 2.5,
                    strokeDasharray: "5 5",
                    dot: false,
                    name: "Target (99.99%)",
                    opacity: 1
                }), React.createElement(Area, {
                    type: "monotone",
                    dataKey: "availability",
                    stroke: "#4A90E2",
                    strokeWidth: 2.5,
                    fill: "url(#availabilityGradient)",
                    dot: {
                        fill: '#4A90E2',
                        strokeWidth: 2,
                        r: 3,
                        stroke: '#ffffff'
                    },
                    activeDot: {
                        r: 4,
                        stroke: '#4A90E2',
                        strokeWidth: 2,
                        fill: '#ffffff'
                    },
                    name: "System Availability"
                }))))),
            React.createElement(components_1.Modal, { show: showComparePUEModal, onClose: () => {
                    setShowComparePUEModal(false);
                    setComparisonResult(null);
                }, title: "Compare System Availability", className: "dt-water-compare-modal" },
                React.createElement("div", { className: "cooling-compare-modal-content modal-body" },
                    React.createElement("div", { className: "cooling-compare-options" },
                        React.createElement("div", { className: "cooling-compare-section" },
                            React.createElement("label", null, "Compare Target Availability with:"),
                            React.createElement("div", { className: "cooling-select-container" },
                                React.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                        const newCompareType = e.target.value;
                                        setCompareType(newCompareType);
                                        setComparisonResult(null);
                                        setRange1({ start: null, end: null });
                                        setRange2({ start: null, end: null });
                                    }, className: "cooling-compare-select" }, COPDdOptions.map((opt) => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                            compareType === "Any timeframe vs any timeframe" && (React.createElement("div", { className: "cooling-compare-advanced" },
                                React.createElement("div", { className: "cooling-compare-advanced-range1" },
                                    React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Timeframe 1:"),
                                    React.createElement(components_1.DateRangePicker, { startDate: range1.start, endDate: range1.end, onChange: (startDate, endDate) => setRange1({ start: startDate, end: endDate }) })),
                                React.createElement("div", { className: "cooling-compare-advanced-range2" },
                                    React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Timeframe 2:"),
                                    React.createElement(components_1.DateRangePicker, { startDate: range2.start, endDate: range2.end, onChange: (startDate, endDate) => setRange2({ start: startDate, end: endDate }) })))),
                            React.createElement("div", { style: { marginTop: '16px' } },
                                React.createElement("button", { style: { background: "#42A5F5" }, className: "cooling-CalculateCompare-btn", onClick: () => calculateComparison(compareType, range1, range2), disabled: compareType === "Any timeframe vs any timeframe" && (!range1.start || !range1.end || !range2.start || !range2.end) }, "COMPARE"))),
                        (compareType !== "Any timeframe vs any timeframe" || (compareType === "Any timeframe vs any timeframe" && comparisonResult)) &&
                            comparisonResult &&
                            !comparisonResult.error &&
                            comparisonResult.selected &&
                            comparisonResult.current && (React.createElement("div", { className: "cooling-comparison-results" },
                            React.createElement("h4", null, "Comparison Results"),
                            React.createElement("div", { className: "cooling-results-main" },
                                React.createElement("div", { className: "cooling-result-comparison" },
                                    React.createElement("div", { className: "cooling-result-label" }, comparisonResult.selected.label),
                                    React.createElement("div", { className: "cooling-result-value" },
                                        comparisonResult.selected.value,
                                        " ",
                                        comparisonResult.selected.unit)),
                                React.createElement("div", { className: "cooling-result-current" },
                                    React.createElement("div", { className: "cooling-result-label" }, comparisonResult.current.label),
                                    React.createElement("div", { className: "cooling-result-value" },
                                        comparisonResult.current.value,
                                        " ",
                                        comparisonResult.current.unit))),
                            React.createElement("div", { className: "cooling-result-difference" },
                                React.createElement("div", { className: "cooling-difference-item" },
                                    React.createElement("span", { className: "cooling-difference-label" }, "Difference"),
                                    React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                        comparisonResult.current.value - comparisonResult.selected.value > 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25B2")) : comparisonResult.current.value - comparisonResult.selected.value < 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                        React.createElement("span", { className: "cooling-difference-value", style: {
                                                color: comparisonResult.current.value - comparisonResult.selected.value > 0
                                                    ? "rgb(76, 175, 80)"
                                                    : comparisonResult.current.value - comparisonResult.selected.value < 0
                                                        ? "#FF4D4F"
                                                        : "#fff",
                                            } },
                                            Math.abs(comparisonResult.current.value - comparisonResult.selected.value).toFixed(2),
                                            " ",
                                            comparisonResult.current.unit))),
                                React.createElement("div", { className: "cooling-difference-item" },
                                    React.createElement("span", { className: "cooling-difference-label" }, "Change"),
                                    React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                        parseFloat(comparisonResult.percentChange) > 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25B2")) : parseFloat(comparisonResult.percentChange) < 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                        React.createElement("span", { className: "cooling-difference-value", style: {
                                                color: parseFloat(comparisonResult.percentChange) > 0
                                                    ? "rgb(76, 175, 80)"
                                                    : parseFloat(comparisonResult.percentChange) < 0
                                                        ? "#FF4D4F"
                                                        : "#fff",
                                            } },
                                            Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                            "%"))))))))))));
};
exports.SystemAvailabilityWidget = SystemAvailabilityWidget;


/***/ }),

/***/ "./src/components/SystemReliabilityWidget.tsx":
/*!****************************************************!*\
  !*** ./src/components/SystemReliabilityWidget.tsx ***!
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
exports.SystemReliabilityWidget = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// Import Recharts dynamically to avoid TypeScript issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } = Recharts;
const SystemReliabilityWidget = (_props) => {
    const [selectedSystem, setSelectedSystem] = React.useState('All');
    const [selectedTrendPeriod, setSelectedTrendPeriod] = React.useState('6 Months');
    const [showComparePUEModal, setShowComparePUEModal] = React.useState(false);
    const [compareType, setCompareType] = React.useState('Last quarter monthly average');
    const [comparisonResult, setComparisonResult] = React.useState(null);
    const [range1, setRange1] = React.useState({ start: null, end: null });
    const [range2, setRange2] = React.useState({ start: null, end: null });
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [isGraphCollapsed, setIsGraphCollapsed] = React.useState(true);
    // System types
    const systemTypes = ['All', 'HVAC', 'Lighting', 'CCTV', 'Water'];
    const trendPeriods = ['6 Months', '12 Months'];
    // Compare options for dropdown
    const COPDdOptions = [
        { value: 'Last quarter monthly average', label: 'Last quarter monthly average' },
        { value: 'Last 6 months monthly average', label: 'Last 6 months monthly average' },
        { value: 'Year monthly average', label: 'Year monthly average' },
        { value: 'Any month vs any month', label: 'Any month vs any month' }
    ];
    // Calculate comparison function
    const calculateComparison = (compareType, _range1, _range2) => {
        // Mock comparison logic for MTTF - replace with actual API call
        let mockResult;
        if (compareType === 'Last quarter monthly average') {
            mockResult = {
                selected: { label: 'Last Quarter Average', value: 20.8, unit: 'days' },
                current: { label: 'Current Period', value: 21.4, unit: 'days' },
                percentChange: '2.9',
                error: false
            };
        }
        else if (compareType === 'Last 6 months monthly average') {
            mockResult = {
                selected: { label: 'Last 6 Months Average', value: 19.6, unit: 'days' },
                current: { label: 'Current Period', value: 21.4, unit: 'days' },
                percentChange: '9.2',
                error: false
            };
        }
        else if (compareType === 'Year monthly average') {
            mockResult = {
                selected: { label: 'Year Average', value: 20.1, unit: 'days' },
                current: { label: 'Current Period', value: 21.4, unit: 'days' },
                percentChange: '6.5',
                error: false
            };
        }
        else if (compareType === 'Any month vs any month') {
            // Format dates for display
            const formatDateRange = (range) => {
                if (range.start && range.end) {
                    const startDate = new Date(range.start);
                    const endDate = new Date(range.end);
                    const formatDate = (date) => {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}/${month}/${year}`;
                    };
                    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
                }
                return 'Selected Month';
            };
            mockResult = {
                selected: {
                    label: formatDateRange(range1),
                    value: 22.3,
                    unit: 'days'
                },
                current: {
                    label: formatDateRange(range2),
                    value: 18.7,
                    unit: 'days'
                },
                percentChange: '-16.1',
                error: false
            };
        }
        else {
            mockResult = {
                selected: { label: compareType, value: 21.5, unit: 'days' },
                current: { label: 'Current Period', value: 21.4, unit: 'days' },
                percentChange: '-0.5',
                error: false
            };
        }
        setComparisonResult(mockResult);
    };
    // Mock MTTF data - replace with actual data from your API
    const getMTTFData = () => {
        const systemData = {
            'All': {
                current: 21.4,
                lastMonth: 20.5,
                change: 4.4,
                unit: 'd'
            },
            'HVAC': {
                current: 28.5,
                lastMonth: 26.8,
                change: 6.3,
                unit: 'd'
            },
            'Lighting': {
                current: 18.2,
                lastMonth: 19.1,
                change: -4.7,
                unit: 'd'
            },
            'CCTV': {
                current: 15.8,
                lastMonth: 14.2,
                change: 11.3,
                unit: 'd'
            },
            'Water': {
                current: 23.0,
                lastMonth: 22.0,
                change: 4.5,
                unit: 'd'
            }
        };
        return systemData[selectedSystem] || systemData['All'];
    };
    // Format time display (convert decimal days to days/hours)
    const formatMTTF = (days) => {
        const wholeDays = Math.floor(days);
        const hours = Math.round((days - wholeDays) * 24);
        if (hours === 0) {
            return `${wholeDays}d 0h`;
        }
        return `${wholeDays}d ${hours}h`;
    };
    const currentMTTF = getMTTFData();
    // Monthly MTTF trend data
    const getTrendData = () => {
        if (selectedTrendPeriod === '6 Months') {
            const baseData = [
                { month: 'Aug', All: 475, HVAC: 578, Lighting: 432, CCTV: 367, Water: 523 },
                { month: 'Sep', All: 472, HVAC: 565, Lighting: 428, CCTV: 378, Water: 518 },
                { month: 'Oct', All: 453, HVAC: 548, Lighting: 415, CCTV: 352, Water: 498 },
                { month: 'Nov', All: 440, HVAC: 535, Lighting: 398, CCTV: 341, Water: 487 },
                { month: 'Dec', All: 502, HVAC: 642, Lighting: 458, CCTV: 379, Water: 528 },
                { month: 'Jan', All: 513, HVAC: 684, Lighting: 437, CCTV: 379, Water: 552 }
            ];
            return baseData.map(item => ({
                month: item.month,
                mttf: item[selectedSystem]
            }));
        }
        else {
            const baseData = [
                { month: 'Feb 23', All: 489, HVAC: 598, Lighting: 445, CCTV: 389, Water: 535 },
                { month: 'Mar 23', All: 497, HVAC: 612, Lighting: 438, CCTV: 395, Water: 542 },
                { month: 'Apr 23', All: 476, HVAC: 589, Lighting: 422, CCTV: 371, Water: 521 },
                { month: 'May 23', All: 468, HVAC: 576, Lighting: 429, CCTV: 358, Water: 509 },
                { month: 'Jun 23', All: 475, HVAC: 583, Lighting: 441, CCTV: 362, Water: 515 },
                { month: 'Jul 23', All: 472, HVAC: 572, Lighting: 435, CCTV: 373, Water: 506 },
                { month: 'Aug 23', All: 475, HVAC: 578, Lighting: 432, CCTV: 367, Water: 523 },
                { month: 'Sep 23', All: 472, HVAC: 565, Lighting: 428, CCTV: 378, Water: 518 },
                { month: 'Oct 23', All: 453, HVAC: 548, Lighting: 415, CCTV: 352, Water: 498 },
                { month: 'Nov 23', All: 440, HVAC: 535, Lighting: 398, CCTV: 341, Water: 487 },
                { month: 'Dec 23', All: 502, HVAC: 642, Lighting: 458, CCTV: 379, Water: 528 },
                { month: 'Jan 24', All: 513, HVAC: 684, Lighting: 437, CCTV: 379, Water: 552 }
            ];
            return baseData.map(item => ({
                month: item.month,
                mttf: item[selectedSystem]
            }));
        }
    };
    const trendData = getTrendData();
    return (React.createElement("div", { className: "widget-container" },
        React.createElement("div", { className: "widget-header", onClick: () => setIsGraphCollapsed(!isGraphCollapsed) },
            React.createElement("div", { className: "widget-header-left" },
                React.createElement("div", { className: "widget-icon" },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                        React.createElement("path", { d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" }))),
                React.createElement("div", { className: "widget-title" },
                    "System Reliability \u2013 MTTF Tracker",
                    React.createElement("div", { style: {
                            marginLeft: '8px',
                            position: 'relative',
                            display: 'inline-block'
                        }, onMouseEnter: () => setShowTooltip(true), onMouseLeave: () => setShowTooltip(false), onClick: (e) => e.stopPropagation() },
                        React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", style: {
                                opacity: 0.7,
                                cursor: 'pointer'
                            } },
                            React.createElement("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" })),
                        showTooltip && (React.createElement("div", { style: {
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '8px',
                                padding: '8px 12px',
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                color: '#ffffff',
                                fontSize: '12px',
                                borderRadius: '6px',
                                whiteSpace: 'nowrap',
                                zIndex: 1000,
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                maxWidth: '320px'
                            } },
                            "Mean Time To Failure - Current month's data till last hour",
                            React.createElement("div", { style: {
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderBottom: '6px solid rgba(0, 0, 0, 0.9)'
                                } })))))),
            React.createElement("div", { className: "widget-header-right" },
                React.createElement("button", { className: "compare-btn", onClick: (e) => { e.stopPropagation(); setShowComparePUEModal(true); } }, "Compare"),
                React.createElement("div", { className: "expand-icon" },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", style: {
                            transform: isGraphCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease'
                        } },
                        React.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))),
        React.createElement("div", { className: "widget-content" },
            React.createElement("div", { className: "widget-controls" },
                React.createElement("select", { className: "system-selector", value: selectedSystem, onChange: (e) => setSelectedSystem(e.target.value), onClick: (e) => e.stopPropagation() }, systemTypes.map(system => (React.createElement("option", { key: system, value: system }, system))))),
            React.createElement("div", { className: "ultra-compact-metrics" },
                React.createElement("div", { className: "main-metric-card" },
                    React.createElement("div", { className: "metric-value" }, formatMTTF(currentMTTF.current)),
                    React.createElement("div", { className: "metric-label" }, "Mean Time To Failure")),
                React.createElement("div", { className: "secondary-metrics" },
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "Last Month"),
                        React.createElement("span", { className: "secondary-value" }, formatMTTF(currentMTTF.lastMonth))),
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label" }, "Change"),
                        React.createElement("span", { className: `secondary-value ${currentMTTF.change >= 0 ? 'positive' : 'negative'}` },
                            currentMTTF.change >= 0 ? '▲' : '▼',
                            " ",
                            Math.abs(currentMTTF.change).toFixed(1),
                            "%")))),
            React.createElement("div", { className: `trend-section ${isGraphCollapsed ? 'collapsed' : ''}` },
                React.createElement("div", { className: "trend-header" },
                    React.createElement("div", { className: "trend-filters" }, trendPeriods.map(period => (React.createElement("button", { key: period, className: `filter-btn ${selectedTrendPeriod === period ? 'active' : ''}`, onClick: () => setSelectedTrendPeriod(period) }, period))))),
                React.createElement("div", { className: "trend-chart" }, React.createElement(ResponsiveContainer, { width: "100%", height: 140 }, React.createElement(AreaChart, {
                    data: trendData,
                    margin: { top: 10, right: 20, left: 10, bottom: 10 }
                }, React.createElement('defs', {}, React.createElement('linearGradient', { id: 'mttfGradient', x1: 0, y1: 0, x2: 0, y2: 1 }, React.createElement('stop', { offset: '0%', stopColor: '#4A90E2', stopOpacity: 0.3 }), React.createElement('stop', { offset: '95%', stopColor: '#4A90E2', stopOpacity: 0 }))), React.createElement(CartesianGrid, {
                    strokeDasharray: "3 3",
                    stroke: "rgba(255,255,255,0.15)",
                    strokeWidth: 0.5
                }), React.createElement(XAxis, {
                    dataKey: "month",
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.8 },
                    tickMargin: 6
                }), React.createElement(YAxis, {
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.8 },
                    tickMargin: 6,
                    width: 50
                }), React.createElement(Tooltip, {
                    formatter: (value) => [`${value} Hours`, 'MTTF'],
                    contentStyle: {
                        backgroundColor: 'rgba(15, 15, 15, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    },
                    itemStyle: {
                        color: '#ffffff',
                        fontSize: '12px'
                    },
                    labelStyle: {
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: '500'
                    }
                }), React.createElement(Area, {
                    type: "monotone",
                    dataKey: "mttf",
                    stroke: "#4A90E2",
                    strokeWidth: 2.5,
                    fill: "url(#mttfGradient)",
                    dot: {
                        fill: '#4A90E2',
                        strokeWidth: 2,
                        r: 3,
                        stroke: '#ffffff'
                    },
                    activeDot: {
                        r: 4,
                        stroke: '#4A90E2',
                        strokeWidth: 2,
                        fill: '#ffffff'
                    },
                    name: "MTTF (Hours)"
                }))))),
            React.createElement(components_1.Modal, { show: showComparePUEModal, onClose: () => {
                    setShowComparePUEModal(false);
                    setComparisonResult(null);
                }, title: "Compare MTTF Reliability", className: "dt-water-compare-modal" },
                React.createElement("div", { className: "cooling-compare-modal-content modal-body" },
                    React.createElement("div", { className: "cooling-compare-options" },
                        React.createElement("div", { className: "cooling-compare-section" },
                            React.createElement("label", null, "Compare Target MTTF with:"),
                            React.createElement("div", { className: "cooling-select-container" },
                                React.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                        const newCompareType = e.target.value;
                                        setCompareType(newCompareType);
                                        setComparisonResult(null);
                                        setRange1({ start: null, end: null });
                                        setRange2({ start: null, end: null });
                                    }, className: "cooling-compare-select" }, COPDdOptions.map((opt) => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                            compareType === "Any month vs any month" && (React.createElement("div", { className: "cooling-compare-advanced" },
                                React.createElement("div", { className: "cooling-compare-advanced-range1" },
                                    React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Month 1:"),
                                    React.createElement(components_1.DateRangePicker, { startDate: range1.start, endDate: range1.end, onChange: (startDate, endDate) => setRange1({ start: startDate, end: endDate }) })),
                                React.createElement("div", { className: "cooling-compare-advanced-range2" },
                                    React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Month 2:"),
                                    React.createElement(components_1.DateRangePicker, { startDate: range2.start, endDate: range2.end, onChange: (startDate, endDate) => setRange2({ start: startDate, end: endDate }) })))),
                            React.createElement("div", { style: { marginTop: '16px' } },
                                React.createElement("button", { style: { background: "#42A5F5" }, className: "cooling-CalculateCompare-btn", onClick: () => calculateComparison(compareType, range1, range2), disabled: compareType === "Any month vs any month" && (!range1.start || !range1.end || !range2.start || !range2.end) }, "COMPARE"))),
                        (compareType !== "Any month vs any month" || (compareType === "Any month vs any month" && comparisonResult)) &&
                            comparisonResult &&
                            !comparisonResult.error &&
                            comparisonResult.selected &&
                            comparisonResult.current && (React.createElement("div", { className: "cooling-comparison-results" },
                            React.createElement("h4", null, "Comparison Results"),
                            React.createElement("div", { className: "cooling-results-main" },
                                React.createElement("div", { className: "cooling-result-comparison" },
                                    React.createElement("div", { className: "cooling-result-label" }, comparisonResult.selected.label),
                                    React.createElement("div", { className: "cooling-result-value" },
                                        comparisonResult.selected.value,
                                        " ",
                                        comparisonResult.selected.unit)),
                                React.createElement("div", { className: "cooling-result-current" },
                                    React.createElement("div", { className: "cooling-result-label" }, comparisonResult.current.label),
                                    React.createElement("div", { className: "cooling-result-value" },
                                        comparisonResult.current.value,
                                        " ",
                                        comparisonResult.current.unit))),
                            React.createElement("div", { className: "cooling-result-difference" },
                                React.createElement("div", { className: "cooling-difference-item" },
                                    React.createElement("span", { className: "cooling-difference-label" }, "Difference"),
                                    React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                        comparisonResult.current.value - comparisonResult.selected.value < 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25B2")) : comparisonResult.current.value - comparisonResult.selected.value > 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                        React.createElement("span", { className: "cooling-difference-value", style: {
                                                color: comparisonResult.current.value - comparisonResult.selected.value < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : comparisonResult.current.value - comparisonResult.selected.value > 0
                                                        ? "#FF4D4F"
                                                        : "#fff",
                                            } },
                                            Math.abs(comparisonResult.current.value - comparisonResult.selected.value).toFixed(2),
                                            " ",
                                            comparisonResult.current.unit))),
                                React.createElement("div", { className: "cooling-difference-item" },
                                    React.createElement("span", { className: "cooling-difference-label" }, "Change"),
                                    React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                        parseFloat(comparisonResult.percentChange) < 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25B2")) : parseFloat(comparisonResult.percentChange) > 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                        React.createElement("span", { className: "cooling-difference-value", style: {
                                                color: parseFloat(comparisonResult.percentChange) < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : parseFloat(comparisonResult.percentChange) > 0
                                                        ? "#FF4D4F"
                                                        : "#fff",
                                            } },
                                            Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                            "%"))))))))))));
};
exports.SystemReliabilityWidget = SystemReliabilityWidget;


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
const SystemAvailabilityWidget_1 = __webpack_require__(/*! ./components/SystemAvailabilityWidget */ "./src/components/SystemAvailabilityWidget.tsx");
const SystemReliabilityWidget_1 = __webpack_require__(/*! ./components/SystemReliabilityWidget */ "./src/components/SystemReliabilityWidget.tsx");
const ResilienceWidget_1 = __webpack_require__(/*! ./components/ResilienceWidget */ "./src/components/ResilienceWidget.tsx");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const Fault_left_panelWidget = (_props) => {
    const containerRef = React.useRef(null);
    return (React.createElement("div", { className: "main-container dark-mode", ref: containerRef },
        React.createElement("div", { className: "glass-bg-fp" },
            React.createElement(SystemAvailabilityWidget_1.SystemAvailabilityWidget, null),
            React.createElement("div", { style: { marginTop: '6px' } },
                React.createElement(SystemReliabilityWidget_1.SystemReliabilityWidget, null)),
            React.createElement("div", { style: { marginTop: '6px' } },
                React.createElement(ResilienceWidget_1.ResilienceWidget, null)))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "fault_left_panel",
    widget: Fault_left_panelWidget,
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
    id: "fault_left_panel",
    label: "Fault_left_panel",
    // click: () => alert("Hello"),
    component: Fault_left_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"fault_left_panel",
   component: Fault_left_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "fault_left_panel", // use all lowercase letters
    name: 'Fault_left_panel',
    description: 'Tempalte Description',
    template: Fault_left_panelWidget,
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