/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"7560c58d-dff0-486a-f87d-4982094eea4d","author":"","widgets":[{"id":"fault_right_panel","name":"fault_right_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MaintenanceSummaryWidget.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MaintenanceSummaryWidget.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".maintenance-summary-widget {\n  padding: 24px;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);\n  border-radius: 16px;\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  margin-bottom: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.maintenance-summary-widget .widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.maintenance-summary-widget .widget-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #fff;\n}\n.maintenance-summary-widget .widget-header .total-count {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.maintenance-summary-widget .widget-header .compare-btn {\n  margin-left: auto;\n  background: #42A5F5;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 16px;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: background 0.2s ease;\n}\n.maintenance-summary-widget .widget-header .compare-btn:hover {\n  background: #2196F3;\n}\n.maintenance-summary-widget .widget-header .compare-btn i {\n  font-size: 14px;\n}\n.maintenance-summary-widget .widget-subtitle {\n  margin: 0 0 20px 0;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.maintenance-summary-widget .filters {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.maintenance-summary-widget .filters .filter-group {\n  flex: 1;\n}\n.maintenance-summary-widget .filters .filter-group label {\n  display: block;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.maintenance-summary-widget .filters .filter-group .filter-select {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 14px;\n  color: #fff;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  background-size: 16px;\n  padding-right: 40px;\n}\n.maintenance-summary-widget .filters .filter-group .filter-select:hover {\n  background-color: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.maintenance-summary-widget .filters .filter-group .filter-select:focus {\n  outline: none;\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);\n}\n.maintenance-summary-widget .filters .filter-group .filter-select option {\n  background: #1a1a1a;\n  color: #fff;\n}\n.maintenance-summary-widget .status-cards {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n.maintenance-summary-widget .status-cards .status-card {\n  flex: 1;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n.maintenance-summary-widget .status-cards .status-card h3 {\n  margin: 0 0 10px 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.maintenance-summary-widget .status-cards .status-card .status-count {\n  font-size: 32px;\n  font-weight: 700;\n}\n.maintenance-summary-widget .status-cards .status-card.in-progress {\n  background: linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 107, 53, 0.05) 100%);\n  border: 1px solid rgba(255, 107, 53, 0.3);\n  color: #FF6B35;\n  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.15);\n}\n.maintenance-summary-widget .status-cards .status-card.resolved {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #10B981;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.15);\n}\n.maintenance-summary-widget .status-cards .status-card.closed {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  color: #6366F1;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.15);\n}\n.maintenance-summary-widget .pie-chart-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  position: relative;\n  overflow: visible;\n  min-height: 280px;\n  height: auto;\n  gap: 40px;\n}\n.maintenance-summary-widget .pie-chart-container .legend {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 120px;\n}\n.maintenance-summary-widget .pie-chart-container .chart-center-text {\n  pointer-events: none;\n}\n.maintenance-summary-widget .sla-breach-warning {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  background: linear-gradient(135deg, rgba(255, 59, 48, 0.15) 0%, rgba(255, 59, 48, 0.08) 100%);\n  border: 1px solid rgba(255, 59, 48, 0.3);\n  border-radius: 12px;\n  color: #FF3B30;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 30px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(255, 59, 48, 0.1);\n}\n.maintenance-summary-widget .sla-breach-warning:hover {\n  background: linear-gradient(135deg, rgba(255, 59, 48, 0.2) 0%, rgba(255, 59, 48, 0.12) 100%);\n  border-color: rgba(255, 59, 48, 0.4);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(255, 59, 48, 0.15);\n}\n.maintenance-summary-widget .sla-breach-warning i:first-child {\n  font-size: 16px;\n}\n.maintenance-summary-widget .sla-breach-warning i:last-child {\n  margin-left: auto;\n  font-size: 12px;\n}\n.maintenance-summary-widget .cwo-pwo-section h3 {\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n}\n.maintenance-summary-widget .cwo-pwo-section .chart-container {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);\n  border-radius: 16px;\n  padding: 20px 24px 10px 24px;\n  overflow: visible;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n  min-height: auto;\n  height: auto;\n}\n.maintenance-summary-widget .sla-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal {\n  background: white;\n  border-radius: 12px;\n  width: 500px;\n  max-width: 90%;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-header .close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: #666;\n  font-size: 18px;\n  transition: color 0.2s ease;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-header .close-btn:hover {\n  color: #333;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-content {\n  padding: 20px;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-content .sla-ticket {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: rgba(255, 59, 48, 0.05);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-content .sla-ticket:last-child {\n  margin-bottom: 0;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-content .sla-ticket .ticket-id {\n  font-weight: 600;\n  color: #333;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-content .sla-ticket .ticket-area {\n  color: #666;\n  font-size: 14px;\n}\n.maintenance-summary-widget .sla-modal-overlay .sla-modal .modal-content .sla-ticket .time-remaining {\n  color: #FF3B30;\n  font-weight: 500;\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SLAComplianceWidget.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SLAComplianceWidget.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".sla-compliance-cards {\n  display: flex;\n  gap: 16px;\n  margin: 16px 0;\n}\n@media (max-width: 768px) {\n  .sla-compliance-cards {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n\n.compliance-card {\n  flex: 1;\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 20px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n  position: relative;\n}\n.compliance-card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.compliance-card .card-header .card-icon {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.8;\n}\n.compliance-card .card-header .card-title {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.compliance-card .compliance-value {\n  font-size: 2.9rem;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 12px;\n}\n.compliance-card .compliance-value.cwo-value {\n  color: #4A90E2;\n}\n.compliance-card .compliance-value.pwo-value {\n  color: #10B981;\n}\n.compliance-card .compliance-status {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.compliance-card .compliance-status .status-label {\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.compliance-card .compliance-status .status-label.good {\n  background: rgba(76, 175, 80, 0.15);\n  color: #4CAF50;\n}\n.compliance-card .compliance-status .status-label.below-target {\n  background: rgba(255, 77, 79, 0.15);\n  color: #FF4D4F;\n}\n.compliance-card .compliance-status .vs-target {\n  font-size: 0.95rem;\n  color: #FF4D4F;\n  font-weight: 500;\n}\n.compliance-card .progress-bar {\n  position: relative;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.compliance-card .progress-bar .progress-current {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.8s ease;\n}\n.compliance-card .progress-bar .progress-current.cwo-progress {\n  background: linear-gradient(90deg, #4A90E2 0%, #64B5F6 100%);\n}\n.compliance-card .progress-bar .progress-current.pwo-progress {\n  background: linear-gradient(90deg, #10B981 0%, #4CAF50 100%);\n}\n.compliance-card .progress-bar .progress-target {\n  position: absolute;\n  top: -2px;\n  width: 2px;\n  height: 10px;\n  background: #F5A623;\n  border-radius: 1px;\n  transform: translateX(-50%);\n}\n.compliance-card .progress-bar .progress-target::after {\n  content: \"Target\";\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.7rem;\n  color: #F5A623;\n  white-space: nowrap;\n}\n\n.chart-type-selector {\n  display: flex;\n  gap: 8px;\n}\n.chart-type-selector .chart-type-btn {\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chart-type-selector .chart-type-btn:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.chart-type-selector .chart-type-btn.active {\n  background: rgba(74, 144, 226, 0.15);\n  border-color: rgba(74, 144, 226, 0.3);\n  color: #4A90E2;\n}\n\n.trend-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.trend-header .trend-title-section {\n  flex: 1;\n}\n.trend-header .trend-title-section .trend-title {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-color);\n  text-align: left !important;\n  margin: 0;\n}\n\n@media (max-width: 768px) {\n  .compliance-card {\n    padding: 16px;\n  }\n  .compliance-card .compliance-value {\n    font-size: 2.2rem;\n  }\n  .compliance-card .card-header {\n    margin-bottom: 12px;\n  }\n  .compliance-card .card-header .card-title {\n    font-size: 0.85rem;\n  }\n  .chart-type-selector .chart-type-btn {\n    padding: 4px 8px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .compliance-card {\n    padding: 14px;\n  }\n  .compliance-card .compliance-value {\n    font-size: 2rem;\n  }\n  .trend-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n}", ""]);
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
exports.push([module.id, ":root, .dark-mode {\n  --bg-color: rgba(20, 20, 20, 0.1);\n  --text-color: #ffffff;\n  --text-secondary: rgba(255, 255, 255, 0.9);\n  --text-muted: rgba(255, 255, 255, 0.7);\n  --glass-bg: rgba(20, 20, 20, 0.15);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --primary-blue: #4A90E2;\n  --success-green: #7ED321;\n  --warning-orange: #F5A623;\n  --purple: #BD10E0;\n  --danger-red: #FF4757;\n  --cyan: #06B6D4;\n  --green: #10B981;\n}\n\n.uxp-date-range-picker,\n.uxp-date-picker,\n.react-datepicker-popper,\n.react-datepicker__portal {\n  z-index: 10001 !important;\n}\n\n.uxp-date-picker-dropdown,\n.uxp-date-range-picker-dropdown,\n.react-datepicker__tab-loop {\n  z-index: 10002 !important;\n}\n\n.main-container {\n  width: 100%;\n  height: 100%;\n  background: var(--bg-color);\n  color: var(--text-color);\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  direction: rtl;\n}\n.main-container * {\n  direction: ltr;\n}\n\n.glass-bg-fpr {\n  background: var(--glass-bg);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  padding: 16px 14px;\n  width: 100%;\n  min-height: auto;\n  color: var(--text-color);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex: 1;\n  border-radius: 12px;\n  border: 1px solid var(--glass-border);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.main-header .header-text {\n  font-size: 1.7rem;\n  font-weight: 600;\n  color: var(--text-color);\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.main-header .header-text svg {\n  opacity: 0.9;\n}\n.main-header .header-subtitle {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  font-weight: 400;\n  display: inline-flex;\n  align-items: center;\n}\n\n.system-selector,\n.time-period-selector {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  padding: 8px 14px;\n  color: var(--text-color);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.system-selector:hover,\n.time-period-selector:hover {\n  background: var(--card-border);\n}\n.system-selector option,\n.time-period-selector option {\n  background: var(--modal-bg);\n  color: var(--text-color);\n}\n\n.compare-btn {\n  background: rgba(100, 181, 246, 0.15);\n  color: #fff;\n  border: 1px solid rgba(100, 181, 246, 0.3);\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n.compare-btn:hover {\n  background: rgba(100, 181, 246, 0.25);\n  border-color: rgba(100, 181, 246, 0.5);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n}\n\n.fault-count-section {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--card-border);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n.fault-count-section .fault-count-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.fault-count-section .fault-count-header .fault-count-title {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n.fault-count-section .fault-count-header .fault-count-average {\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n}\n.fault-count-section .fault-count-header .fault-count-average .change-percentage {\n  font-weight: 600;\n  margin-left: 8px;\n}\n.fault-count-section .fault-count-header .fault-count-average .change-percentage.positive {\n  color: var(--danger-red);\n}\n.fault-count-section .fault-count-header .fault-count-average .change-percentage.negative {\n  color: var(--success-green);\n}\n.fault-count-section .fault-display .fault-label {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n}\n.fault-count-section .fault-display .fault-value {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: var(--danger-red);\n  margin-bottom: 12px;\n  line-height: 1;\n  letter-spacing: -2px;\n}\n.fault-count-section .fault-display .fault-status {\n  font-size: 0.95rem;\n  color: var(--danger-red);\n  opacity: 0.85;\n  font-weight: 500;\n}\n\n.chart-section {\n  margin-bottom: 24px;\n}\n.chart-section .chart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.chart-section .chart-header .chart-title {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.chart-container {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 20px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n.chart-container .recharts-cartesian-grid-horizontal line,\n.chart-container .recharts-cartesian-grid-vertical line {\n  stroke: rgba(255, 255, 255, 0.08);\n}\n.chart-container .recharts-text {\n  fill: #ffffff !important;\n  opacity: 0.9;\n  font-size: 12px !important;\n}\n.chart-container .recharts-legend-wrapper .recharts-legend-item-text {\n  color: #ffffff !important;\n  opacity: 0.9;\n}\n.chart-container .recharts-legend-wrapper .recharts-default-legend {\n  padding-top: 16px !important;\n}\n.chart-container .recharts-tooltip-wrapper .recharts-default-tooltip {\n  background: rgba(20, 20, 20, 0.95) !important;\n  border: 1px solid rgba(255, 255, 255, 0.25) !important;\n  border-radius: 6px !important;\n  color: #ffffff !important;\n  padding: 8px 12px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;\n}\n.chart-container .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-item {\n  color: #ffffff !important;\n  font-size: 12px !important;\n}\n.chart-container .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-label {\n  color: #ffffff !important;\n  font-weight: 500 !important;\n  margin-bottom: 4px !important;\n}\n.chart-container .recharts-bar {\n  outline: none;\n  cursor: pointer;\n  filter: brightness(1);\n  transition: filter 0.3s ease;\n}\n.chart-container .recharts-bar:hover {\n  filter: brightness(1.2);\n}\n.chart-container .recharts-surface {\n  outline: none;\n}\n.chart-container .recharts-reference-line-line {\n  stroke: var(--primary-blue);\n  stroke-width: 2;\n  stroke-dasharray: 4 4;\n  opacity: 0.8;\n}\n.chart-container .recharts-label {\n  fill: var(--primary-blue);\n  font-size: 11px;\n  font-weight: 500;\n}\n.chart-container .recharts-rectangle {\n  transition: opacity 0.3s ease;\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1002;\n}\n.modal-overlay .uxp-date-range-picker,\n.modal-overlay .uxp-date-picker {\n  z-index: 10001 !important;\n}\n.modal-overlay .uxp-date-range-picker .uxp-date-picker-dropdown,\n.modal-overlay .uxp-date-range-picker .uxp-date-range-picker-dropdown,\n.modal-overlay .uxp-date-range-picker .react-datepicker-popper,\n.modal-overlay .uxp-date-range-picker .react-datepicker__portal,\n.modal-overlay .uxp-date-picker .uxp-date-picker-dropdown,\n.modal-overlay .uxp-date-picker .uxp-date-range-picker-dropdown,\n.modal-overlay .uxp-date-picker .react-datepicker-popper,\n.modal-overlay .uxp-date-picker .react-datepicker__portal {\n  z-index: 10002 !important;\n}\n\n.cooling-compare-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.modal-content {\n  background: var(--modal-bg);\n  border: 1px solid var(--modal-border);\n  padding: 0;\n  max-width: 600px;\n  max-height: 80vh;\n  overflow: auto;\n  backdrop-filter: blur(10px);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--glass-border);\n}\n.modal-header h3 {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.modal-close {\n  background: none;\n  border: none;\n  color: var(--text-color);\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.modal-close:hover {\n  background: var(--card-border);\n}\n\n.cooling-compare-modal-content {\n  padding: 24px;\n}\n\n.cooling-compare-section {\n  margin-bottom: 20px;\n}\n.cooling-compare-section label {\n  display: block;\n  margin-bottom: 12px;\n  color: var(--text-secondary);\n  font-size: 1.05rem;\n  font-weight: 500;\n}\n\n.cooling-select-container {\n  margin-bottom: 16px;\n}\n\n.cooling-compare-select {\n  width: 100%;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  padding: 10px 14px;\n  color: var(--text-color);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cooling-compare-select:hover, .cooling-compare-select:focus {\n  background: var(--card-border);\n  outline: none;\n}\n.cooling-compare-select option {\n  background: var(--modal-bg);\n  color: var(--text-color);\n}\n\n.cooling-compare-advanced {\n  margin-top: 16px;\n  padding: 16px;\n  background: var(--card-bg);\n  border-radius: 8px;\n  border: 1px solid var(--card-border);\n}\n\n.cooling-compare-advanced-range1,\n.cooling-compare-advanced-range2 {\n  margin-bottom: 16px;\n}\n.cooling-compare-advanced-range1 label,\n.cooling-compare-advanced-range2 label {\n  margin-bottom: 8px;\n}\n.cooling-compare-advanced-range1 .date-input,\n.cooling-compare-advanced-range2 .date-input {\n  width: 100%;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 4px;\n  padding: 8px 12px;\n  color: var(--text-color);\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.cooling-compare-advanced-range1 .date-input:focus,\n.cooling-compare-advanced-range2 .date-input:focus {\n  outline: none;\n  border-color: var(--primary-blue);\n}\n.cooling-compare-advanced-range1 .date-input::-webkit-calendar-picker-indicator,\n.cooling-compare-advanced-range2 .date-input::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n\n.cooling-compare-label-bold {\n  font-weight: 600;\n}\n\n.cooling-compare-label-margin {\n  margin-bottom: 8px;\n}\n\n.cooling-CalculateCompare-btn {\n  background: #42A5F5;\n  border: none;\n  border-radius: 6px;\n  padding: 10px 20px;\n  color: white;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.cooling-CalculateCompare-btn:hover:not(:disabled) {\n  background: #1976D2;\n  transform: translateY(-1px);\n}\n.cooling-CalculateCompare-btn:disabled {\n  background: var(--card-border);\n  cursor: not-allowed;\n  color: var(--text-muted);\n}\n\n.cooling-comparison-results {\n  margin-top: 24px;\n  padding: 20px;\n  background: var(--card-bg);\n  border-radius: 8px;\n  border: 1px solid var(--card-border);\n}\n.cooling-comparison-results h4 {\n  margin: 0 0 16px 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.cooling-results-main {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.cooling-result-comparison,\n.cooling-result-current {\n  padding: 12px;\n  background: var(--glass-bg);\n  border-radius: 6px;\n  border: 1px solid var(--glass-border);\n}\n\n.cooling-result-label {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n}\n\n.cooling-result-value {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n.cooling-result-difference {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.cooling-difference-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  background: var(--glass-bg);\n  border-radius: 6px;\n  border: 1px solid var(--glass-border);\n}\n\n.cooling-difference-label {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n\n.cooling-difference-value-container {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.cooling-difference-value {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n\n.modal-container.dt-water-compare-modal .modal-backdrop {\n  background-color: transparent !important;\n}\n.modal-container.dt-water-compare-modal .modal-panel {\n  min-width: 30%;\n  width: auto;\n  max-width: 40%;\n  height: auto;\n  max-height: 100%;\n  min-height: 50%;\n  background: rgba(0, 0, 0, 0.11) !important;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px 12px 0 0;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body {\n  padding: 16px;\n  height: 100% !important;\n  margin: 0;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  overflow-y: auto;\n  border-radius: 0 0 12px 12px;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker {\n  z-index: 10001 !important;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .uxp-date-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .uxp-date-range-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .react-datepicker-popper,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-range-picker .react-datepicker__portal,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .uxp-date-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .uxp-date-range-picker-dropdown,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .react-datepicker-popper,\n.modal-container.dt-water-compare-modal .modal-panel .modal-body .uxp-date-picker .react-datepicker__portal {\n  z-index: 10002 !important;\n}\n.modal-container.dt-water-compare-modal .modal-panel .modal-header .modal-close,\n.modal-container.dt-water-compare-modal .modal-panel .modal-header .close-btn {\n  background: transparent !important;\n}\n\n@media (max-width: 768px) {\n  .main-container {\n    padding: 10px 6px;\n  }\n  .glass-bg-fpr {\n    padding: 12px 10px;\n  }\n  .widget-container {\n    margin-bottom: 12px;\n  }\n  .widget-header {\n    padding: 12px 14px;\n  }\n  .widget-icon {\n    width: 34px;\n    height: 34px;\n  }\n  .widget-title {\n    font-size: 1.15rem;\n  }\n  .widget-content {\n    padding: 0 12px 12px;\n  }\n  .widget-controls {\n    flex-wrap: wrap;\n  }\n  .ultra-compact-metrics {\n    padding: 14px 16px;\n    gap: 12px;\n  }\n  .metric-value {\n    font-size: 2rem;\n  }\n  .system-selector,\n  .time-period-selector,\n  .compare-btn {\n    font-size: 0.85rem;\n    padding: 6px 10px;\n  }\n  .modal-content {\n    width: 95%;\n    margin: 10px;\n  }\n  .cooling-results-main,\n  .cooling-result-difference {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .modal-header {\n    padding: 16px 20px;\n  }\n  .modal-header h3 {\n    font-size: 1.1rem;\n  }\n  .cooling-compare-modal-content {\n    padding: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .widget-container {\n    margin-bottom: 10px;\n  }\n  .widget-header {\n    padding: 10px 12px;\n  }\n  .widget-icon {\n    width: 30px;\n    height: 30px;\n  }\n  .widget-title {\n    font-size: 1rem;\n  }\n  .widget-content {\n    padding: 0 10px 10px;\n  }\n  .expand-icon {\n    width: 28px;\n    height: 28px;\n  }\n  .ultra-compact-metrics {\n    padding: 12px 14px;\n    gap: 10px;\n  }\n  .metric-value {\n    font-size: 1.8rem;\n  }\n  .metric-label {\n    font-size: 0.85rem;\n  }\n  .secondary-label {\n    font-size: 0.75rem;\n  }\n  .secondary-value {\n    font-size: 0.9rem;\n  }\n  .secondary-metric {\n    min-width: 80px;\n    padding: 6px 10px;\n  }\n  .glass-bg-fpr {\n    padding: 12px 10px;\n  }\n}\n.uxp-date-range-picker .uxp-date-picker-dropdown,\n.uxp-date-range-picker .uxp-date-range-picker-dropdown,\n.uxp-date-range-picker .react-datepicker-popper,\n.uxp-date-range-picker .react-datepicker__portal,\n.uxp-date-range-picker .react-datepicker__tab-loop,\n.uxp-date-picker .uxp-date-picker-dropdown,\n.uxp-date-picker .uxp-date-range-picker-dropdown,\n.uxp-date-picker .react-datepicker-popper,\n.uxp-date-picker .react-datepicker__portal,\n.uxp-date-picker .react-datepicker__tab-loop {\n  z-index: 10002 !important;\n}\n\n.sla-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n}\n\n.sla-modal {\n  background: var(--modal-bg);\n  border: 1px solid var(--modal-border);\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 80vh;\n  overflow: auto;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n\n.sla-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--glass-border);\n}\n.sla-modal .modal-header h3 {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.close-btn {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: var(--text-color);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: scale(1.05);\n}\n.close-btn svg {\n  opacity: 0.8;\n  transition: opacity 0.2s ease;\n}\n.close-btn:hover svg {\n  opacity: 1;\n}\n\n.sla-modal .modal-content {\n  padding: 20px 24px;\n}\n\n.sla-ticket {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.sla-ticket:last-child {\n  margin-bottom: 0;\n}\n\n.ticket-id {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.9rem;\n}\n\n.ticket-area {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n\n.time-remaining {\n  color: #FF6B35;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n\n.widget-container {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 10px;\n  margin-bottom: 6px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.widget-header:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n\n.widget-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.widget-icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(74, 144, 226, 0.15);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #4A90E2;\n}\n\n.widget-title {\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: var(--text-color);\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n}\n\n.widget-header-right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.expand-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.expand-icon:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.widget-content {\n  padding: 0 20px 20px;\n  transition: all 0.3s ease;\n}\n\n.widget-controls {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.trend-section {\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  transform-origin: top;\n  margin-top: 20px;\n}\n.trend-section.collapsed {\n  max-height: 0;\n  margin-top: 0;\n  opacity: 0;\n  transform: scaleY(0);\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.trend-header {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n\n.trend-chart {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 8px;\n  padding: 14px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n.trend-chart .recharts-wrapper {\n  position: relative !important;\n  cursor: default !important;\n}\n.trend-chart .recharts-wrapper svg {\n  overflow: visible !important;\n}\n.trend-chart .recharts-cartesian-grid-horizontal line,\n.trend-chart .recharts-cartesian-grid-vertical line {\n  stroke: rgba(255, 255, 255, 0.1);\n}\n.trend-chart .recharts-text {\n  fill: #ffffff !important;\n  opacity: 0.9;\n  font-size: 12px !important;\n}\n.trend-chart .recharts-legend-wrapper .recharts-legend-item-text {\n  color: #ffffff !important;\n  font-size: 12px !important;\n}\n.trend-chart .recharts-cartesian-axis-tick-value {\n  fill: #ffffff !important;\n  font-size: 12px !important;\n}\n.trend-chart .recharts-tooltip-wrapper .recharts-default-tooltip {\n  background: rgba(15, 15, 15, 0.95) !important;\n  border: 1px solid rgba(255, 255, 255, 0.25) !important;\n  border-radius: 6px !important;\n  color: #ffffff !important;\n  font-size: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.trend-chart .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-item {\n  color: #ffffff !important;\n  font-size: 14px;\n}\n.trend-chart .recharts-tooltip-wrapper .recharts-default-tooltip .recharts-tooltip-label {\n  color: #ffffff !important;\n  font-size: 14px;\n  font-weight: 500;\n}\n.trend-chart .recharts-line-dot {\n  outline: none;\n}\n.trend-chart .recharts-active-dot {\n  outline: none;\n}\n.trend-chart .recharts-surface {\n  outline: none;\n}\n\n.ultra-compact-metrics {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin: 10px 0;\n  padding: 14px 18px;\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: 8px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);\n}\n@media (max-width: 768px) {\n  .ultra-compact-metrics {\n    flex-direction: column;\n    gap: 12px;\n    align-items: center;\n  }\n}\n\n.main-metric-card {\n  text-align: center;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n\n.metric-value {\n  font-size: 2.6rem;\n  font-weight: 700;\n  color: #4A90E2;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n\n.metric-label {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n  opacity: 0.9;\n}\n\n.secondary-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  flex: 1;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  .secondary-metrics {\n    justify-content: center;\n    gap: 16px;\n  }\n}\n\n.secondary-metric {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  flex: 1;\n  min-width: 120px;\n  max-width: 120px;\n  padding: 8px 10px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.secondary-label {\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  opacity: 0.9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.secondary-value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n.secondary-value.warning {\n  color: #FF9800;\n  font-weight: 700;\n}\n.secondary-value.positive {\n  color: #4CAF50;\n}\n.secondary-value.negative {\n  color: #F44336;\n}\n\n.glass-bg-fpr {\n  padding: 14px 12px;\n}\n\n.recharts-responsive-container .recharts-surface {\n  outline: none;\n}\n\n@media (max-width: 768px) {\n  .chart-container .recharts-responsive-container {\n    height: 220px !important;\n  }\n}\n@media (max-width: 480px) {\n  .chart-container .recharts-responsive-container {\n    height: 180px !important;\n  }\n}", ""]);
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

/***/ "./src/components/MaintenanceSummaryWidget.scss":
/*!******************************************************!*\
  !*** ./src/components/MaintenanceSummaryWidget.scss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./MaintenanceSummaryWidget.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MaintenanceSummaryWidget.scss");

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

/***/ "./src/components/MaintenanceSummaryWidget.tsx":
/*!*****************************************************!*\
  !*** ./src/components/MaintenanceSummaryWidget.tsx ***!
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
exports.MaintenanceSummaryWidget = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./MaintenanceSummaryWidget.scss */ "./src/components/MaintenanceSummaryWidget.scss");
// Import Recharts dynamically to avoid TypeScript issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } = Recharts;
const MaintenanceSummaryWidget = ({ onCompare }) => {
    const [timeRange, setTimeRange] = (0, react_1.useState)('lastMonth');
    const [selectedSystem, setSelectedSystem] = (0, react_1.useState)('All Systems');
    const [showSLAModal, setShowSLAModal] = (0, react_1.useState)(false);
    const [slaHours, setSlaHours] = (0, react_1.useState)(2);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(undefined);
    const [showTooltip, setShowTooltip] = (0, react_1.useState)(false);
    const [isGraphCollapsed, setIsGraphCollapsed] = (0, react_1.useState)(true);
    const [showCompareModal, setShowCompareModal] = (0, react_1.useState)(false);
    const [compareType, setCompareType] = (0, react_1.useState)('Last month');
    const [comparisonResult, setComparisonResult] = (0, react_1.useState)(null);
    const [range1, setRange1] = (0, react_1.useState)({ start: null, end: null });
    const [range2, setRange2] = (0, react_1.useState)({ start: null, end: null });
    // Compare options for dropdown
    const compareOptions = [
        { value: 'Last month', label: 'Last month' },
        { value: 'Last quarter', label: 'Last quarter' },
        { value: 'Last 6 months', label: 'Last 6 months' },
        { value: 'Last year', label: 'Last year' },
        { value: 'Any period vs any period', label: 'Any period vs any period' }
    ];
    // Calculate comparison function
    const calculateComparison = (compareType, _range1, _range2) => {
        // Mock comparison logic - replace with actual API call
        let mockResult;
        if (compareType === 'Last month') {
            mockResult = {
                selected: { label: 'Last Month', value: 18, unit: 'tickets' },
                current: { label: 'Current Month', value: 22, unit: 'tickets' },
                percentChange: '22.22',
                error: false
            };
        }
        else if (compareType === 'Last quarter') {
            mockResult = {
                selected: { label: 'Last Quarter', value: 45, unit: 'tickets' },
                current: { label: 'Current Period', value: 52, unit: 'tickets' },
                percentChange: '15.56',
                error: false
            };
        }
        else if (compareType === 'Last 6 months') {
            mockResult = {
                selected: { label: 'Last 6 Months', value: 88, unit: 'tickets' },
                current: { label: 'Current Period', value: 95, unit: 'tickets' },
                percentChange: '7.95',
                error: false
            };
        }
        else if (compareType === 'Last year') {
            mockResult = {
                selected: { label: 'Last Year', value: 180, unit: 'tickets' },
                current: { label: 'Current Period', value: 195, unit: 'tickets' },
                percentChange: '8.33',
                error: false
            };
        }
        else if (compareType === 'Any period vs any period') {
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
                return 'Selected Period';
            };
            mockResult = {
                selected: {
                    label: formatDateRange(range1),
                    value: 16,
                    unit: 'tickets'
                },
                current: {
                    label: formatDateRange(range2),
                    value: 20,
                    unit: 'tickets'
                },
                percentChange: '25.0',
                error: false
            };
        }
        else {
            mockResult = {
                selected: { label: compareType, value: 14, unit: 'tickets' },
                current: { label: 'Current Period', value: 22, unit: 'tickets' },
                percentChange: '57.14',
                error: false
            };
        }
        setComparisonResult(mockResult);
    };
    // Generate maintenance data based on filters
    const getMaintenanceData = () => {
        var _a;
        // Base data that changes with filters
        const baseData = {
            lastWeek: {
                'All Systems': {
                    inProgress: 3,
                    resolved: 2,
                    closed: 2,
                    cwo: [0, 1, 0, 1, 1, 0, 0],
                    pwo: [1, 0, 1, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'HVAC': {
                    inProgress: 1,
                    resolved: 1,
                    closed: 1,
                    cwo: [0, 0, 0, 1, 0, 0, 0],
                    pwo: [1, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'Lighting': {
                    inProgress: 1,
                    resolved: 1,
                    closed: 0,
                    cwo: [0, 1, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 1, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'CCTV': {
                    inProgress: 1,
                    resolved: 0,
                    closed: 1,
                    cwo: [0, 0, 0, 0, 1, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'Water': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'Others': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                }
            },
            lastMonth: {
                'All Systems': {
                    inProgress: 8,
                    resolved: 7,
                    closed: 7,
                    cwo: [3, 2, 4, 2],
                    pwo: [2, 3, 2, 4],
                    slaBreachTickets: []
                },
                'HVAC': {
                    inProgress: 3,
                    resolved: 3,
                    closed: 2,
                    cwo: [1, 1, 1, 0],
                    pwo: [1, 1, 0, 0],
                    slaBreachTickets: []
                },
                'Lighting': {
                    inProgress: 3,
                    resolved: 2,
                    closed: 3,
                    cwo: [1, 0, 2, 0],
                    pwo: [0, 1, 1, 1],
                    slaBreachTickets: []
                },
                'CCTV': {
                    inProgress: 2,
                    resolved: 2,
                    closed: 2,
                    cwo: [1, 1, 1, 2],
                    pwo: [1, 1, 1, 3],
                    slaBreachTickets: []
                },
                'Water': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0],
                    pwo: [0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'Others': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0],
                    pwo: [0, 0, 0, 0],
                    slaBreachTickets: []
                }
            },
            lastQuarter: {
                'All Systems': {
                    inProgress: 15,
                    resolved: 18,
                    closed: 20,
                    cwo: [2, 1, 1, 2, 1, 1, 2, 1, 2, 4, 3, 5, 2],
                    pwo: [1, 1, 2, 1, 2, 2, 1, 3, 2, 2, 3, 3, 1],
                    slaBreachTickets: []
                },
                'HVAC': {
                    inProgress: 5,
                    resolved: 6,
                    closed: 7,
                    cwo: [1, 0, 0, 1, 0, 0, 1, 0, 1, 2, 1, 2, 0],
                    pwo: [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                    slaBreachTickets: []
                },
                'Lighting': {
                    inProgress: 5,
                    resolved: 6,
                    closed: 7,
                    cwo: [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 2, 1],
                    pwo: [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
                    slaBreachTickets: []
                },
                'CCTV': {
                    inProgress: 5,
                    resolved: 6,
                    closed: 6,
                    cwo: [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
                    pwo: [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
                    slaBreachTickets: []
                },
                'Water': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'Others': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                }
            },
            lastYear: {
                'All Systems': {
                    inProgress: 45,
                    resolved: 52,
                    closed: 58,
                    cwo: [4, 3, 3, 4, 3, 3, 4, 3, 4, 6, 5, 7],
                    pwo: [3, 3, 4, 3, 4, 4, 3, 5, 4, 4, 5, 5],
                    slaBreachTickets: []
                },
                'HVAC': {
                    inProgress: 15,
                    resolved: 17,
                    closed: 19,
                    cwo: [2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 3],
                    pwo: [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2],
                    slaBreachTickets: []
                },
                'Lighting': {
                    inProgress: 15,
                    resolved: 18,
                    closed: 20,
                    cwo: [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2],
                    pwo: [1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1],
                    slaBreachTickets: []
                },
                'CCTV': {
                    inProgress: 15,
                    resolved: 17,
                    closed: 19,
                    cwo: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
                    pwo: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
                    slaBreachTickets: []
                },
                'Water': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                },
                'Others': {
                    inProgress: 0,
                    resolved: 0,
                    closed: 0,
                    cwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    pwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    slaBreachTickets: []
                }
            }
        };
        return ((_a = baseData[timeRange]) === null || _a === void 0 ? void 0 : _a[selectedSystem]) || baseData.lastMonth['All Systems'];
    };
    const maintenanceData = getMaintenanceData();
    const timeRangeOptions = [
        { label: 'Last Week', value: 'lastWeek' },
        { label: 'Last Month', value: 'lastMonth' },
        { label: 'Last Quarter', value: 'lastQuarter' },
        { label: 'Last Year', value: 'lastYear' }
    ];
    const systemOptions = [
        { label: 'All Systems', value: 'All Systems' },
        { label: 'HVAC', value: 'HVAC' },
        { label: 'Lighting', value: 'Lighting' },
        { label: 'CCTV', value: 'CCTV' },
        { label: 'Water', value: 'Water' },
        { label: 'Others', value: 'Others' }
    ];
    const total = maintenanceData.inProgress + maintenanceData.resolved + maintenanceData.closed;
    // Get appropriate labels based on time range
    const getChartLabels = () => {
        switch (timeRange) {
            case 'lastWeek':
                return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            case 'lastMonth':
                return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            case 'lastQuarter':
                return ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'];
            case 'lastYear':
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            default:
                return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        }
    };
    const chartLabels = getChartLabels();
    // Prepare data for pie chart
    const pieData = [
        { name: 'In Progress', value: maintenanceData.inProgress, color: '#FF6B35' },
        { name: 'Resolved', value: maintenanceData.resolved, color: '#10B981' },
        { name: 'Closed', value: maintenanceData.closed, color: '#6366F1' }
    ];
    // Prepare data for bar chart - limit to available data points
    const barData = chartLabels.slice(0, maintenanceData.cwo.length).map((label, index) => ({
        week: label,
        'Corrective Work Orders': maintenanceData.cwo[index] || 0,
        'Preventive Work Orders': maintenanceData.pwo[index] || 0
    }));
    // Custom label renderer for pie chart
    const renderCustomizedLabel = (props) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, percent, value, index } = props;
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 25;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const isActive = activeIndex === index;
        return (react_1.default.createElement('g', {}, 
        // Connecting line
        react_1.default.createElement('line', {
            x1: cx + (outerRadius + 5) * Math.cos(-midAngle * RADIAN),
            y1: cy + (outerRadius + 5) * Math.sin(-midAngle * RADIAN),
            x2: x,
            y2: y,
            stroke: pieData[index].color,
            strokeWidth: isActive ? 2 : 1,
            opacity: isActive ? 1 : 0.6,
            style: { transition: 'all 0.3s ease' }
        }), 
        // Label background
        react_1.default.createElement('rect', {
            x: x - 35,
            y: y - 15,
            width: 70,
            height: 30,
            rx: 4,
            fill: 'rgba(0, 0, 0, 0.7)',
            stroke: pieData[index].color,
            strokeWidth: isActive ? 2 : 1,
            opacity: isActive ? 1 : 0.8,
            style: { transition: 'all 0.3s ease' }
        }), 
        // Percentage text
        react_1.default.createElement('text', {
            x: x,
            y: y - 3,
            textAnchor: 'middle',
            fill: 'white',
            style: {
                fontSize: isActive ? '15px' : '13px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
            }
        }, `${(percent * 100).toFixed(0)}%`), 
        // Value text
        react_1.default.createElement('text', {
            x: x,
            y: y + 10,
            textAnchor: 'middle',
            fill: pieData[index].color,
            style: {
                fontSize: '11px',
                fontWeight: '500'
            }
        }, `${value} tickets`)));
    };
    const handleSLAClick = () => {
        setShowSLAModal(true);
    };
    return (react_1.default.createElement("div", { className: "widget-container" },
        react_1.default.createElement("div", { className: "widget-header", onClick: () => setIsGraphCollapsed(!isGraphCollapsed) },
            react_1.default.createElement("div", { className: "widget-header-left" },
                react_1.default.createElement("div", { className: "widget-icon" },
                    react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                        react_1.default.createElement("path", { d: "M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" }))),
                react_1.default.createElement("div", { className: "widget-title" },
                    "Maintenance Summary",
                    react_1.default.createElement("div", { style: {
                            marginLeft: '8px',
                            position: 'relative',
                            display: 'inline-block'
                        }, onMouseEnter: () => setShowTooltip(true), onMouseLeave: () => setShowTooltip(false), onClick: (e) => e.stopPropagation() },
                        react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", style: {
                                opacity: 0.7,
                                cursor: 'pointer'
                            } },
                            react_1.default.createElement("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" })),
                        showTooltip && (react_1.default.createElement("div", { style: {
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
                            "Ticket status breakdown by area",
                            react_1.default.createElement("div", { style: {
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
            react_1.default.createElement("div", { className: "widget-header-right" },
                react_1.default.createElement("button", { className: "compare-btn", onClick: (e) => { e.stopPropagation(); setShowCompareModal(true); } }, "Compare"),
                react_1.default.createElement("div", { className: "expand-icon" },
                    react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", style: {
                            transform: isGraphCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease'
                        } },
                        react_1.default.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))),
        react_1.default.createElement("div", { className: "widget-content" },
            react_1.default.createElement("div", { className: "widget-controls" },
                react_1.default.createElement("select", { className: "system-selector", value: selectedSystem, onChange: (e) => setSelectedSystem(e.target.value), onClick: (e) => e.stopPropagation() }, systemOptions.map(option => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
                react_1.default.createElement("select", { className: "time-period-selector", value: timeRange, onChange: (e) => setTimeRange(e.target.value), onClick: (e) => e.stopPropagation() }, timeRangeOptions.map(option => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label))))),
            react_1.default.createElement("div", { className: "trend-chart", style: { marginTop: '16px' } },
                react_1.default.createElement("div", { className: "trend-header", style: { marginBottom: '12px' } },
                    react_1.default.createElement("div", { className: "trend-title", style: { fontSize: '1.2rem', fontWeight: '500', color: 'var(--text-color)' } }, "Status Distribution")),
                react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' } },
                    react_1.default.createElement("div", { style: { flex: '0 0 auto', minWidth: '90px' } },
                        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px' } }, pieData.map((entry) => (react_1.default.createElement('div', {
                            key: entry.name,
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '12px',
                                color: 'rgba(255,255,255,0.8)'
                            }
                        }, react_1.default.createElement('span', {
                            style: {
                                display: 'inline-block',
                                width: '10px',
                                height: '10px',
                                backgroundColor: entry.color,
                                borderRadius: '2px'
                            }
                        }), react_1.default.createElement('span', {}, `${entry.name}: ${entry.value} (${((entry.value / total) * 100).toFixed(1)}%)`)))))),
                    react_1.default.createElement("div", { style: { flex: '1', display: 'flex', justifyContent: 'center' } }, react_1.default.createElement(ResponsiveContainer, { width: "100%", height: 200 }, react_1.default.createElement(PieChart, {}, react_1.default.createElement(Pie, {
                        data: pieData,
                        cx: "50%",
                        cy: "50%",
                        outerRadius: 70,
                        innerRadius: 35,
                        fill: "#8884d8",
                        dataKey: "value",
                        animationBegin: 0,
                        animationDuration: 800,
                        label: renderCustomizedLabel,
                        labelLine: false,
                        onMouseEnter: (_, index) => setActiveIndex(index),
                        onMouseLeave: () => setActiveIndex(undefined)
                    }, pieData.map((entry, index) => (react_1.default.createElement(Cell, {
                        key: `cell-${index}`,
                        fill: entry.color,
                        style: {
                            filter: activeIndex === index ? 'brightness(1.2)' :
                                activeIndex !== undefined ? 'brightness(0.8)' : 'brightness(1)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }
                    })))), react_1.default.createElement(Tooltip, {
                        contentStyle: {
                            backgroundColor: 'rgba(15, 15, 15, 0.95)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            color: '#fff'
                        },
                        itemStyle: { color: '#fff' }
                    }), 
                    // Center text
                    react_1.default.createElement('text', {
                        x: "50%",
                        y: "50%",
                        textAnchor: "middle",
                        dominantBaseline: "middle"
                    }, react_1.default.createElement('tspan', {
                        x: "50%",
                        dy: "-0.2em",
                        style: { fontSize: '20px', fontWeight: 'bold', fill: '#fff' }
                    }, total), react_1.default.createElement('tspan', {
                        x: "50%",
                        dy: "1.4em",
                        style: { fontSize: '11px', fill: 'rgba(255,255,255,0.7)' }
                    }, 'Total'))))))),
            react_1.default.createElement("div", { className: "sla-breach-warning", onClick: handleSLAClick, style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    background: 'rgba(255, 107, 53, 0.1)',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    borderRadius: '8px',
                    margin: '14px 0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '0.9rem',
                    color: '#FF6B35'
                } },
                react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                    react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
                        react_1.default.createElement("path", { d: "M1,21H23L12,2M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" })),
                    react_1.default.createElement("span", null,
                        "3 tickets expiring in ",
                        slaHours,
                        " hours")),
                react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
                    react_1.default.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }))),
            react_1.default.createElement("div", { className: `trend-section ${isGraphCollapsed ? 'collapsed' : ''}` },
                react_1.default.createElement("div", { className: "trend-header" },
                    react_1.default.createElement("div", { className: "trend-title", style: { fontSize: '1rem', fontWeight: '500', color: 'var(--text-color)' } }, "CWO & PWO Breakdown")),
                react_1.default.createElement("div", { className: "trend-chart" }, react_1.default.createElement(ResponsiveContainer, { width: "100%", height: timeRange === 'lastYear' ? 260 : 200 }, react_1.default.createElement(BarChart, {
                    data: barData,
                    margin: { top: 15, right: 20, left: 15, bottom: timeRange === 'lastYear' ? 60 : 35 }
                }, react_1.default.createElement(CartesianGrid, {
                    strokeDasharray: "2 2",
                    stroke: "rgba(255,255,255,0.2)",
                    strokeWidth: 0.8,
                    horizontal: true,
                    vertical: true
                }), react_1.default.createElement(XAxis, {
                    dataKey: "week",
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: 1.2 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1 },
                    angle: timeRange === 'lastYear' ? -45 : 0,
                    textAnchor: timeRange === 'lastYear' ? "end" : "middle",
                    height: timeRange === 'lastYear' ? 60 : 40,
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.9 },
                    tickMargin: 8
                }), react_1.default.createElement(YAxis, {
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: 1.2 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.9 },
                    tickMargin: 8,
                    width: 55
                }), react_1.default.createElement(Tooltip, {
                    contentStyle: {
                        backgroundColor: 'rgba(15, 15, 15, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        color: '#fff'
                    },
                    itemStyle: { color: '#fff' }
                }), react_1.default.createElement(Legend, {
                    wrapperStyle: {
                        paddingTop: '8px',
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.8)',
                        height: '20px'
                    },
                    iconType: 'rect',
                    height: 20
                }), react_1.default.createElement(Bar, {
                    dataKey: "Corrective Work Orders",
                    fill: "#6366F1",
                    radius: [4, 4, 0, 0]
                }), react_1.default.createElement(Bar, {
                    dataKey: "Preventive Work Orders",
                    fill: "#10B981",
                    radius: [4, 4, 0, 0]
                })))))),
        showSLAModal && (react_1.default.createElement("div", { className: "sla-modal-overlay", onClick: () => setShowSLAModal(false) },
            react_1.default.createElement("div", { className: "sla-modal", onClick: (e) => e.stopPropagation() },
                react_1.default.createElement("div", { className: "modal-header" },
                    react_1.default.createElement("h3", null, "Tickets Expiring Soon"),
                    react_1.default.createElement("button", { className: "close-btn", onClick: () => setShowSLAModal(false) },
                        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                            react_1.default.createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })))),
                react_1.default.createElement("div", { className: "modal-content" },
                    react_1.default.createElement("div", { className: "sla-ticket" },
                        react_1.default.createElement("span", { className: "ticket-id" }, "WO-2024-001"),
                        react_1.default.createElement("span", { className: "ticket-area" }, "Zone A"),
                        react_1.default.createElement("span", { className: "time-remaining" }, "1h 45m remaining")),
                    react_1.default.createElement("div", { className: "sla-ticket" },
                        react_1.default.createElement("span", { className: "ticket-id" }, "PPM-2024-015"),
                        react_1.default.createElement("span", { className: "ticket-area" }, "Zone B"),
                        react_1.default.createElement("span", { className: "time-remaining" }, "1h 30m remaining")),
                    react_1.default.createElement("div", { className: "sla-ticket" },
                        react_1.default.createElement("span", { className: "ticket-id" }, "WO-2024-003"),
                        react_1.default.createElement("span", { className: "ticket-area" }, "Zone C"),
                        react_1.default.createElement("span", { className: "time-remaining" }, "45m remaining")))))),
        react_1.default.createElement(components_1.Modal, { show: showCompareModal, onClose: () => {
                setShowCompareModal(false);
                setComparisonResult(null);
            }, title: "Compare Maintenance Summary", className: "dt-water-compare-modal" },
            react_1.default.createElement("div", { className: "cooling-compare-modal-content modal-body" },
                react_1.default.createElement("div", { className: "cooling-compare-options" },
                    react_1.default.createElement("div", { className: "cooling-compare-section" },
                        react_1.default.createElement("label", null, "Compare current period with:"),
                        react_1.default.createElement("div", { className: "cooling-select-container" },
                            react_1.default.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                    const newCompareType = e.target.value;
                                    setCompareType(newCompareType);
                                    setComparisonResult(null);
                                    setRange1({ start: null, end: null });
                                    setRange2({ start: null, end: null });
                                }, className: "cooling-compare-select" }, compareOptions.map((opt) => (react_1.default.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                        compareType === "Any period vs any period" && (react_1.default.createElement("div", { className: "cooling-compare-advanced" },
                            react_1.default.createElement("div", { className: "cooling-compare-advanced-range1" },
                                react_1.default.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Period 1:"),
                                react_1.default.createElement(components_1.DateRangePicker, { startDate: range1.start, endDate: range1.end, onChange: (startDate, endDate) => {
                                        setRange1({ start: startDate, end: endDate });
                                    } })),
                            react_1.default.createElement("div", { className: "cooling-compare-advanced-range2" },
                                react_1.default.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Period 2:"),
                                react_1.default.createElement(components_1.DateRangePicker, { startDate: range2.start, endDate: range2.end, onChange: (startDate, endDate) => {
                                        setRange2({ start: startDate, end: endDate });
                                    } })))),
                        react_1.default.createElement("div", { style: { marginTop: '16px' } },
                            react_1.default.createElement("button", { style: { background: "#42A5F5" }, className: "cooling-CalculateCompare-btn", onClick: () => calculateComparison(compareType, range1, range2), disabled: compareType === "Any period vs any period" && (!range1.start || !range1.end || !range2.start || !range2.end) }, "COMPARE"))),
                    (compareType !== "Any period vs any period" || (compareType === "Any period vs any period" && comparisonResult)) &&
                        comparisonResult &&
                        !comparisonResult.error &&
                        comparisonResult.selected &&
                        comparisonResult.current && (react_1.default.createElement("div", { className: "cooling-comparison-results" },
                        react_1.default.createElement("h4", null, "Comparison Results"),
                        react_1.default.createElement("div", { className: "cooling-results-main" },
                            react_1.default.createElement("div", { className: "cooling-result-comparison" },
                                react_1.default.createElement("div", { className: "cooling-result-label" }, comparisonResult.selected.label),
                                react_1.default.createElement("div", { className: "cooling-result-value" },
                                    comparisonResult.selected.value,
                                    " ",
                                    comparisonResult.selected.unit)),
                            react_1.default.createElement("div", { className: "cooling-result-current" },
                                react_1.default.createElement("div", { className: "cooling-result-label" }, comparisonResult.current.label),
                                react_1.default.createElement("div", { className: "cooling-result-value" },
                                    comparisonResult.current.value,
                                    " ",
                                    comparisonResult.current.unit))),
                        react_1.default.createElement("div", { className: "cooling-result-difference" },
                            react_1.default.createElement("div", { className: "cooling-difference-item" },
                                react_1.default.createElement("span", { className: "cooling-difference-label" }, "Difference"),
                                react_1.default.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                    comparisonResult.current.value - comparisonResult.selected.value > 0 ? (react_1.default.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25B2")) : comparisonResult.current.value - comparisonResult.selected.value < 0 ? (react_1.default.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                    react_1.default.createElement("span", { className: "cooling-difference-value", style: {
                                            color: comparisonResult.current.value - comparisonResult.selected.value > 0
                                                ? "#FF4D4F"
                                                : comparisonResult.current.value - comparisonResult.selected.value < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : "#fff",
                                        } },
                                        Math.abs(comparisonResult.current.value - comparisonResult.selected.value).toFixed(0),
                                        " ",
                                        comparisonResult.current.unit))),
                            react_1.default.createElement("div", { className: "cooling-difference-item" },
                                react_1.default.createElement("span", { className: "cooling-difference-label" }, "Change"),
                                react_1.default.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                    parseFloat(comparisonResult.percentChange) > 0 ? (react_1.default.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25B2")) : parseFloat(comparisonResult.percentChange) < 0 ? (react_1.default.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                    react_1.default.createElement("span", { className: "cooling-difference-value", style: {
                                            color: parseFloat(comparisonResult.percentChange) > 0
                                                ? "#FF4D4F"
                                                : parseFloat(comparisonResult.percentChange) < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : "#fff",
                                        } },
                                        Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports.MaintenanceSummaryWidget = MaintenanceSummaryWidget;


/***/ }),

/***/ "./src/components/MonthlyFaultSummaryWidget.tsx":
/*!******************************************************!*\
  !*** ./src/components/MonthlyFaultSummaryWidget.tsx ***!
  \******************************************************/
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
exports.MonthlyFaultSummaryWidget = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// Import Recharts dynamically to avoid TypeScript issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } = Recharts;
const MonthlyFaultSummaryWidget = (_props) => {
    const [selectedSystem, setSelectedSystem] = React.useState('All Systems');
    const [selectedTimePeriod, setSelectedTimePeriod] = React.useState('Past Month');
    const [showCompareModal, setShowCompareModal] = React.useState(false);
    const [compareType, setCompareType] = React.useState('Last month');
    const [comparisonResult, setComparisonResult] = React.useState(null);
    const [range1, setRange1] = React.useState({ start: null, end: null });
    const [range2, setRange2] = React.useState({ start: null, end: null });
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [isGraphCollapsed, setIsGraphCollapsed] = React.useState(true);
    // System types
    const systemTypes = ['All Systems', 'HVAC', 'Lighting', 'CCTV', 'Water', 'Others'];
    // Time periods
    const timePeriods = ['Past Month', 'Past Quarter', 'Past Half Year', 'Past Year'];
    // Compare options for dropdown
    const compareOptions = [
        { value: 'Last month', label: 'Last month' },
        { value: 'Last quarter', label: 'Last quarter' },
        { value: 'Last 6 months', label: 'Last 6 months' },
        { value: 'Last year', label: 'Last year' },
        { value: 'Any period vs any period', label: 'Any period vs any period' }
    ];
    // Calculate comparison function
    const calculateComparison = (compareType, _range1, _range2) => {
        // Mock comparison logic - replace with actual API call
        let mockResult;
        if (compareType === 'Last month') {
            mockResult = {
                selected: { label: 'Last Month', value: 15, unit: 'faults' },
                current: { label: 'Current Month', value: 20, unit: 'faults' },
                percentChange: '33.33',
                error: false
            };
        }
        else if (compareType === 'Last quarter') {
            mockResult = {
                selected: { label: 'Last Quarter', value: 45, unit: 'faults' },
                current: { label: 'Current Period', value: 52, unit: 'faults' },
                percentChange: '15.56',
                error: false
            };
        }
        else if (compareType === 'Last 6 months') {
            mockResult = {
                selected: { label: 'Last 6 Months', value: 88, unit: 'faults' },
                current: { label: 'Current Period', value: 95, unit: 'faults' },
                percentChange: '7.95',
                error: false
            };
        }
        else if (compareType === 'Last year') {
            mockResult = {
                selected: { label: 'Last Year', value: 180, unit: 'faults' },
                current: { label: 'Current Period', value: 195, unit: 'faults' },
                percentChange: '8.33',
                error: false
            };
        }
        else if (compareType === 'Any period vs any period') {
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
                return 'Selected Period';
            };
            mockResult = {
                selected: {
                    label: formatDateRange(range1),
                    value: 18,
                    unit: 'faults'
                },
                current: {
                    label: formatDateRange(range2),
                    value: 24,
                    unit: 'faults'
                },
                percentChange: '33.33',
                error: false
            };
        }
        else {
            mockResult = {
                selected: { label: compareType, value: 16, unit: 'faults' },
                current: { label: 'Current Period', value: 20, unit: 'faults' },
                percentChange: '25.0',
                error: false
            };
        }
        setComparisonResult(mockResult);
    };
    // Get fault data based on selected system and time period
    const getFaultData = () => {
        // Mock data - replace with actual API call
        const baseData = {
            'All Systems': {
                total: 20,
                average: 15.0,
                change: 33.33,
                status: 'Above average'
            },
            'HVAC': {
                total: 6,
                average: 4.2,
                change: 42.86,
                status: 'Above average'
            },
            'Lighting': {
                total: 3,
                average: 2.8,
                change: 7.14,
                status: 'Near average'
            },
            'CCTV': {
                total: 4,
                average: 3.5,
                change: 14.29,
                status: 'Above average'
            },
            'Water': {
                total: 5,
                average: 3.2,
                change: 56.25,
                status: 'Above average'
            },
            'Others': {
                total: 2,
                average: 1.3,
                change: 53.85,
                status: 'Above average'
            }
        };
        return baseData[selectedSystem] || baseData['All Systems'];
    };
    // Get weekly fault count data
    const getWeeklyData = () => {
        if (selectedTimePeriod === 'Past Month') {
            return [
                { week: 'W26', HVAC: 1, Lighting: 0, CCTV: 1, Water: 1, Others: 1 },
                { week: 'W27', HVAC: 3, Lighting: 1, CCTV: 1, Water: 2, Others: 0 },
                { week: 'W28', HVAC: 6, Lighting: 2, CCTV: 2, Water: 1, Others: 1 },
                { week: 'W29', HVAC: 5, Lighting: 2, CCTV: 2, Water: 3, Others: 0 },
                { week: 'W30', HVAC: 6, Lighting: 3, CCTV: 3, Water: 4, Others: 2 }
            ];
        }
        else if (selectedTimePeriod === 'Past Quarter') {
            return [
                { week: 'Jan', HVAC: 12, Lighting: 8, CCTV: 6, Water: 7, Others: 3 },
                { week: 'Feb', HVAC: 15, Lighting: 9, CCTV: 7, Water: 8, Others: 4 },
                { week: 'Mar', HVAC: 18, Lighting: 10, CCTV: 8, Water: 9, Others: 5 }
            ];
        }
        else if (selectedTimePeriod === 'Past Half Year') {
            return [
                { week: 'Jan', HVAC: 12, Lighting: 8, CCTV: 6, Water: 7, Others: 3 },
                { week: 'Feb', HVAC: 15, Lighting: 9, CCTV: 7, Water: 8, Others: 4 },
                { week: 'Mar', HVAC: 18, Lighting: 10, CCTV: 8, Water: 9, Others: 5 },
                { week: 'Apr', HVAC: 14, Lighting: 11, CCTV: 9, Water: 10, Others: 4 },
                { week: 'May', HVAC: 16, Lighting: 12, CCTV: 10, Water: 11, Others: 5 },
                { week: 'Jun', HVAC: 20, Lighting: 13, CCTV: 11, Water: 12, Others: 6 }
            ];
        }
        else {
            // Past Year - show quarterly data
            return [
                { week: 'Q1', HVAC: 45, Lighting: 27, CCTV: 21, Water: 24, Others: 12 },
                { week: 'Q2', HVAC: 50, Lighting: 36, CCTV: 30, Water: 33, Others: 15 },
                { week: 'Q3', HVAC: 42, Lighting: 30, CCTV: 25, Water: 28, Others: 13 },
                { week: 'Q4', HVAC: 48, Lighting: 33, CCTV: 28, Water: 31, Others: 14 }
            ];
        }
    };
    const currentFaultData = getFaultData();
    const weeklyData = getWeeklyData();
    // Colors for different systems
    const systemColors = {
        HVAC: '#FF6B35',
        Lighting: '#A855F7',
        CCTV: '#06B6D4',
        Water: '#3B82F6',
        Others: '#10B981'
    };
    return (React.createElement("div", { className: "widget-container" },
        React.createElement("div", { className: "widget-header", onClick: () => setIsGraphCollapsed(!isGraphCollapsed) },
            React.createElement("div", { className: "widget-header-left" },
                React.createElement("div", { className: "widget-icon" },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                        React.createElement("path", { d: "M19,14H17V17H14V19H17V22H19V19H22V17H19V14M12,17L7,12V10L12,15L17,10V12L12,17M12,8A1,1 0 0,1 11,7A1,1 0 0,1 12,6A1,1 0 0,1 13,7A1,1 0 0,1 12,8M12,4A5,5 0 0,0 7,9C7,10 7.5,12.5 12,18.34C12.7,17.17 13.3,16.12 13.8,15.12C14.5,15.04 15.22,15 16,15C16.25,15 16.5,15 16.75,15.03C16.37,14.05 16,13.12 15.7,12.34L17.6,11.72C17.9,12.65 18.27,13.62 18.67,14.61C19.07,14.71 19.46,14.82 19.83,14.96C19.4,13.77 19,12.7 19,12A5,5 0 0,0 14,7.3V5.2A7,7 0 0,1 21,12L20.97,12.32C20.96,12.34 20.96,12.36 20.96,12.38C20.89,12.36 20.82,12.35 20.75,12.33V12A6,6 0 0,0 15,6.7V4.4A8.1,8.1 0 0,1 21.68,8.84L21.69,8.87C21.79,9.24 21.88,9.63 21.94,10.02C22,10.36 22,10.69 22,11V12C22,12.08 22,12.16 22,12.24C21.59,12.08 21.15,12 20.68,12C20.45,12 20.23,12 20,12.03V11A9,9 0 0,0 12,2A9,9 0 0,0 4,11V12L12,20.46C12.63,19.4 13.22,18.39 13.68,17.5C14.21,17.88 14.78,18.22 15.39,18.5C14.77,19.5 14.13,20.53 13.46,21.59L12,24L10.54,21.59C4.61,12.07 2,11.1 2,9A10,10 0 0,1 12,0A10,10 0 0,1 22,9.05L21.97,9.03L21.96,9.05C21.97,9.27 21.97,9.5 21.96,9.73A9,9 0 0,0 21,7.5V7.11C21,7.07 21,7.04 21,7A9,9 0 0,0 12,1Z" }))),
                React.createElement("div", { className: "widget-title" },
                    "Monthly Fault Summary",
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
                            "Summarizes total faults reported by system each month",
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
                React.createElement("button", { className: "compare-btn", onClick: (e) => { e.stopPropagation(); setShowCompareModal(true); } }, "Compare"),
                React.createElement("div", { className: "expand-icon" },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", style: {
                            transform: isGraphCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease'
                        } },
                        React.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))),
        React.createElement("div", { className: "widget-content" },
            React.createElement("div", { className: "widget-controls" },
                React.createElement("select", { className: "system-selector", value: selectedSystem, onChange: (e) => setSelectedSystem(e.target.value), onClick: (e) => e.stopPropagation() }, systemTypes.map(system => (React.createElement("option", { key: system, value: system }, system)))),
                React.createElement("select", { className: "time-period-selector", value: selectedTimePeriod, onChange: (e) => setSelectedTimePeriod(e.target.value), onClick: (e) => e.stopPropagation() }, timePeriods.map(period => (React.createElement("option", { key: period, value: period }, period))))),
            React.createElement("div", { className: "ultra-compact-metrics" },
                React.createElement("div", { className: "main-metric-card" },
                    React.createElement("div", { className: "metric-value", style: { marginTop: selectedSystem === 'All Systems' ? '30px' : '5px', fontSize: '3.2rem' } }, currentFaultData.total),
                    React.createElement("div", { className: "metric-label", style: { fontSize: '1.2rem' } },
                        selectedSystem === 'All Systems' ? 'Total' : selectedSystem,
                        " Fault Count")),
                React.createElement("div", { className: "secondary-metrics" },
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label", style: { fontSize: '1.1rem' } }, "AVERAGE"),
                        React.createElement("span", { className: "secondary-value", style: { fontSize: '1.3rem' } }, currentFaultData.average)),
                    React.createElement("div", { className: "secondary-metric" },
                        React.createElement("span", { className: "secondary-label", style: { fontSize: '1.1rem' } }, "CHANGE"),
                        React.createElement("span", { className: `secondary-value ${currentFaultData.change > 0 ? 'negative' : 'positive'}`, style: { fontSize: '1.3rem' } },
                            currentFaultData.change > 0 ? '▲' : '▼',
                            " ",
                            Math.abs(currentFaultData.change).toFixed(1),
                            "%")),
                    React.createElement("div", { className: "secondary-metric", style: { minWidth: '160px', maxWidth: '160px', flex: 'none' } },
                        React.createElement("span", { className: "secondary-label", style: { fontSize: '1.1rem' } }, "STATUS"),
                        React.createElement("span", { className: "secondary-value warning", style: { fontSize: '1.3rem', whiteSpace: 'nowrap', overflow: 'visible' } }, currentFaultData.status)))),
            React.createElement("div", { className: `trend-section ${isGraphCollapsed ? 'collapsed' : ''}` },
                React.createElement("div", { className: "trend-header" },
                    React.createElement("div", { className: "trend-title", style: { fontSize: '1.3rem', fontWeight: '500', color: 'var(--text-color)' } },
                        "Weekly Fault Count - ",
                        selectedTimePeriod)),
                React.createElement("div", { className: "trend-chart" }, React.createElement(ResponsiveContainer, { width: "100%", height: 280 }, React.createElement(BarChart, {
                    data: weeklyData,
                    margin: { top: 20, right: 30, left: 20, bottom: 40 }
                }, React.createElement(CartesianGrid, {
                    strokeDasharray: "3 3",
                    stroke: "rgba(255,255,255,0.15)",
                    strokeWidth: 0.5
                }), React.createElement(XAxis, {
                    dataKey: "week",
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 13, opacity: 0.8 },
                    tickMargin: 6
                }), React.createElement(YAxis, {
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 13, opacity: 0.8 },
                    tickMargin: 6,
                    width: 50
                }), React.createElement(Tooltip, {
                    contentStyle: {
                        backgroundColor: 'rgba(15, 15, 15, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '14px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    },
                    itemStyle: {
                        color: '#ffffff',
                        fontSize: '14px'
                    },
                    labelStyle: {
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '500'
                    }
                }), React.createElement(Legend, {
                    wrapperStyle: {
                        paddingTop: '16px',
                        fontSize: '14px'
                    },
                    iconType: 'rect',
                    verticalAlign: 'bottom',
                    height: 36
                }), React.createElement(Bar, { dataKey: "HVAC", stackId: "a", fill: systemColors.HVAC, radius: [0, 0, 0, 0] }), React.createElement(Bar, { dataKey: "Lighting", stackId: "a", fill: systemColors.Lighting, radius: [0, 0, 0, 0] }), React.createElement(Bar, { dataKey: "CCTV", stackId: "a", fill: systemColors.CCTV, radius: [0, 0, 0, 0] }), React.createElement(Bar, { dataKey: "Water", stackId: "a", fill: systemColors.Water, radius: [0, 0, 0, 0] }), React.createElement(Bar, { dataKey: "Others", stackId: "a", fill: systemColors.Others, radius: [4, 4, 0, 0] })))))),
        React.createElement(components_1.Modal, { show: showCompareModal, onClose: () => {
                setShowCompareModal(false);
                setComparisonResult(null);
            }, title: "Compare Fault Count", className: "dt-water-compare-modal" },
            React.createElement("div", { className: "cooling-compare-modal-content modal-body" },
                React.createElement("div", { className: "cooling-compare-options" },
                    React.createElement("div", { className: "cooling-compare-section" },
                        React.createElement("label", null, "Compare current period with:"),
                        React.createElement("div", { className: "cooling-select-container" },
                            React.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                    const newCompareType = e.target.value;
                                    setCompareType(newCompareType);
                                    setComparisonResult(null);
                                    setRange1({ start: null, end: null });
                                    setRange2({ start: null, end: null });
                                }, className: "cooling-compare-select" }, compareOptions.map((opt) => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                        compareType === "Any period vs any period" && (React.createElement("div", { className: "cooling-compare-advanced" },
                            React.createElement("div", { className: "cooling-compare-advanced-range1" },
                                React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Period 1:"),
                                React.createElement(components_1.DateRangePicker, { startDate: range1.start, endDate: range1.end, onChange: (startDate, endDate) => setRange1({ start: startDate, end: endDate }) })),
                            React.createElement("div", { className: "cooling-compare-advanced-range2" },
                                React.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Period 2:"),
                                React.createElement(components_1.DateRangePicker, { startDate: range2.start, endDate: range2.end, onChange: (startDate, endDate) => setRange2({ start: startDate, end: endDate }) })))),
                        React.createElement("div", { style: { marginTop: '16px' } },
                            React.createElement("button", { style: { background: "#42A5F5" }, className: "cooling-CalculateCompare-btn", onClick: () => calculateComparison(compareType, range1, range2), disabled: compareType === "Any period vs any period" && (!range1.start || !range1.end || !range2.start || !range2.end) }, "COMPARE"))),
                    (compareType !== "Any period vs any period" || (compareType === "Any period vs any period" && comparisonResult)) &&
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
                                    comparisonResult.current.value - comparisonResult.selected.value > 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25B2")) : comparisonResult.current.value - comparisonResult.selected.value < 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                    React.createElement("span", { className: "cooling-difference-value", style: {
                                            color: comparisonResult.current.value - comparisonResult.selected.value > 0
                                                ? "#FF4D4F"
                                                : comparisonResult.current.value - comparisonResult.selected.value < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : "#fff",
                                        } },
                                        Math.abs(comparisonResult.current.value - comparisonResult.selected.value).toFixed(0),
                                        " ",
                                        comparisonResult.current.unit))),
                            React.createElement("div", { className: "cooling-difference-item" },
                                React.createElement("span", { className: "cooling-difference-label" }, "Change"),
                                React.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                    parseFloat(comparisonResult.percentChange) > 0 ? (React.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25B2")) : parseFloat(comparisonResult.percentChange) < 0 ? (React.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                    React.createElement("span", { className: "cooling-difference-value", style: {
                                            color: parseFloat(comparisonResult.percentChange) > 0
                                                ? "#FF4D4F"
                                                : parseFloat(comparisonResult.percentChange) < 0
                                                    ? "rgb(76, 175, 80)"
                                                    : "#fff",
                                        } },
                                        Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports.MonthlyFaultSummaryWidget = MonthlyFaultSummaryWidget;


/***/ }),

/***/ "./src/components/SLAComplianceWidget.scss":
/*!*************************************************!*\
  !*** ./src/components/SLAComplianceWidget.scss ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./SLAComplianceWidget.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SLAComplianceWidget.scss");

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

/***/ "./src/components/SLAComplianceWidget.tsx":
/*!************************************************!*\
  !*** ./src/components/SLAComplianceWidget.tsx ***!
  \************************************************/
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
exports.SLAComplianceWidget = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./SLAComplianceWidget.scss */ "./src/components/SLAComplianceWidget.scss");
// Import Recharts dynamically to avoid TypeScript issues
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, ReferenceLine } = Recharts;
const SLAComplianceWidget = () => {
    const [selectedSystem, setSelectedSystem] = (0, react_1.useState)('All Systems');
    const [timeRange, setTimeRange] = (0, react_1.useState)('Month');
    const [chartType, setChartType] = (0, react_1.useState)('CWO');
    const [showCompareModal, setShowCompareModal] = (0, react_1.useState)(false);
    const [compareType, setCompareType] = (0, react_1.useState)('Last month');
    const [compareMetricType, setCompareMetricType] = (0, react_1.useState)('CWO');
    const [comparisonResult, setComparisonResult] = (0, react_1.useState)(null);
    const [range1, setRange1] = (0, react_1.useState)({ start: null, end: null });
    const [range2, setRange2] = (0, react_1.useState)({ start: null, end: null });
    const [showTooltip, setShowTooltip] = (0, react_1.useState)(false);
    const [isGraphCollapsed, setIsGraphCollapsed] = (0, react_1.useState)(true);
    // Compare options for dropdown
    const compareOptions = [
        { value: 'Last month', label: 'Last month' },
        { value: 'Last quarter', label: 'Last quarter' },
        { value: 'Last 6 months', label: 'Last 6 months' },
        { value: 'Last year', label: 'Last year' },
        { value: 'Any period vs any period', label: 'Any period vs any period' }
    ];
    // Calculate comparison function
    const calculateComparison = (compareType, _range1, _range2) => {
        // Mock comparison logic - replace with actual API call
        let mockResult;
        const metricSuffix = compareMetricType === 'CWO' ? 'CWO Compliance' : 'PWO Compliance';
        const currentValue = compareMetricType === 'CWO' ? 90.2 : 93.7;
        if (compareType === 'Last month') {
            const lastMonthValue = compareMetricType === 'CWO' ? 88.5 : 91.3;
            mockResult = {
                selected: { label: `Last Month ${metricSuffix}`, value: lastMonthValue, unit: '%' },
                current: { label: `Current Month ${metricSuffix}`, value: currentValue, unit: '%' },
                percentChange: (((currentValue - lastMonthValue) / lastMonthValue) * 100).toFixed(2),
                error: false
            };
        }
        else if (compareType === 'Last quarter') {
            const lastQuarterValue = compareMetricType === 'CWO' ? 87.3 : 90.8;
            mockResult = {
                selected: { label: `Last Quarter ${metricSuffix}`, value: lastQuarterValue, unit: '%' },
                current: { label: `Current Period ${metricSuffix}`, value: currentValue, unit: '%' },
                percentChange: (((currentValue - lastQuarterValue) / lastQuarterValue) * 100).toFixed(2),
                error: false
            };
        }
        else if (compareType === 'Last 6 months') {
            const last6MonthsValue = compareMetricType === 'CWO' ? 85.8 : 89.3;
            mockResult = {
                selected: { label: `Last 6 Months ${metricSuffix}`, value: last6MonthsValue, unit: '%' },
                current: { label: `Current Period ${metricSuffix}`, value: currentValue, unit: '%' },
                percentChange: (((currentValue - last6MonthsValue) / last6MonthsValue) * 100).toFixed(2),
                error: false
            };
        }
        else if (compareType === 'Last year') {
            const lastYearValue = compareMetricType === 'CWO' ? 84.6 : 88.1;
            mockResult = {
                selected: { label: `Last Year ${metricSuffix}`, value: lastYearValue, unit: '%' },
                current: { label: `Current Period ${metricSuffix}`, value: currentValue, unit: '%' },
                percentChange: (((currentValue - lastYearValue) / lastYearValue) * 100).toFixed(2),
                error: false
            };
        }
        else if (compareType === 'Any period vs any period') {
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
                return 'Selected Period';
            };
            const customValue1 = compareMetricType === 'CWO' ? 86.7 : 90.1;
            const customValue2 = compareMetricType === 'CWO' ? 91.3 : 94.2;
            mockResult = {
                selected: {
                    label: `${formatDateRange(range1)} ${metricSuffix}`,
                    value: customValue1,
                    unit: '%'
                },
                current: {
                    label: `${formatDateRange(range2)} ${metricSuffix}`,
                    value: customValue2,
                    unit: '%'
                },
                percentChange: (((customValue2 - customValue1) / customValue1) * 100).toFixed(2),
                error: false
            };
        }
        else {
            const defaultValue = compareMetricType === 'CWO' ? 89.1 : 92.4;
            mockResult = {
                selected: { label: `${compareType} ${metricSuffix}`, value: defaultValue, unit: '%' },
                current: { label: `Current Period ${metricSuffix}`, value: currentValue, unit: '%' },
                percentChange: (((currentValue - defaultValue) / defaultValue) * 100).toFixed(2),
                error: false
            };
        }
        setComparisonResult(mockResult);
    };
    // Generate SLA data based on filters
    const getSLAData = () => {
        var _a;
        const baseData = {
            Week: {
                'All Systems': {
                    cwoCompliance: 90.2,
                    pwoCompliance: 93.7,
                    chartData: [
                        { period: 'Mon', CWO: 89.5, PWO: 92.8, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Tue', CWO: 88.3, PWO: 94.1, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Wed', CWO: 91.2, PWO: 93.5, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Thu', CWO: 90.7, PWO: 94.8, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Fri', CWO: 92.1, PWO: 92.9, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Sat', CWO: 89.8, PWO: 95.2, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Sun', CWO: 90.2, PWO: 93.7, CWOTarget: 95, PWOTarget: 98 }
                    ]
                },
                'HVAC': {
                    cwoCompliance: 92.1,
                    pwoCompliance: 95.3,
                    chartData: [
                        { period: 'Mon', CWO: 91.5, PWO: 94.8 },
                        { period: 'Tue', CWO: 90.3, PWO: 96.1 },
                        { period: 'Wed', CWO: 93.2, PWO: 95.5 },
                        { period: 'Thu', CWO: 92.7, PWO: 96.8 },
                        { period: 'Fri', CWO: 94.1, PWO: 94.9 },
                        { period: 'Sat', CWO: 91.8, PWO: 97.2 },
                        { period: 'Sun', CWO: 92.1, PWO: 95.3 }
                    ]
                },
                'CCTV': {
                    cwoCompliance: 88.7,
                    pwoCompliance: 91.5,
                    chartData: [
                        { period: 'Mon', CWO: 87.5, PWO: 90.8 },
                        { period: 'Tue', CWO: 86.3, PWO: 92.1 },
                        { period: 'Wed', CWO: 89.2, PWO: 91.5 },
                        { period: 'Thu', CWO: 88.7, PWO: 92.8 },
                        { period: 'Fri', CWO: 90.1, PWO: 90.9 },
                        { period: 'Sat', CWO: 87.8, PWO: 93.2 },
                        { period: 'Sun', CWO: 88.7, PWO: 91.5 }
                    ]
                },
                'Lighting': {
                    cwoCompliance: 89.4,
                    pwoCompliance: 92.8,
                    chartData: [
                        { period: 'Mon', CWO: 88.5, PWO: 91.8 },
                        { period: 'Tue', CWO: 87.3, PWO: 93.1 },
                        { period: 'Wed', CWO: 90.2, PWO: 92.5 },
                        { period: 'Thu', CWO: 89.7, PWO: 93.8 },
                        { period: 'Fri', CWO: 91.1, PWO: 91.9 },
                        { period: 'Sat', CWO: 88.8, PWO: 94.2 },
                        { period: 'Sun', CWO: 89.4, PWO: 92.8 }
                    ]
                }
            },
            Month: {
                'All Systems': {
                    cwoCompliance: 90.2,
                    pwoCompliance: 93.7,
                    chartData: [
                        { period: 'Week 1', CWO: 88.5, PWO: 92.1, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Week 2', CWO: 89.8, PWO: 94.3, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Week 3', CWO: 91.2, PWO: 93.8, CWOTarget: 95, PWOTarget: 98 },
                        { period: 'Week 4', CWO: 90.2, PWO: 93.7, CWOTarget: 95, PWOTarget: 98 }
                    ]
                },
                'HVAC': {
                    cwoCompliance: 92.1,
                    pwoCompliance: 95.3,
                    chartData: [
                        { period: 'Week 1', CWO: 90.5, PWO: 94.1 },
                        { period: 'Week 2', CWO: 91.8, PWO: 96.3 },
                        { period: 'Week 3', CWO: 93.2, PWO: 95.8 },
                        { period: 'Week 4', CWO: 92.1, PWO: 95.3 }
                    ]
                },
                'CCTV': {
                    cwoCompliance: 88.7,
                    pwoCompliance: 91.5,
                    chartData: [
                        { period: 'Week 1', CWO: 86.5, PWO: 90.1 },
                        { period: 'Week 2', CWO: 87.8, PWO: 92.3 },
                        { period: 'Week 3', CWO: 89.2, PWO: 91.8 },
                        { period: 'Week 4', CWO: 88.7, PWO: 91.5 }
                    ]
                },
                'Lighting': {
                    cwoCompliance: 89.4,
                    pwoCompliance: 92.8,
                    chartData: [
                        { period: 'Week 1', CWO: 87.5, PWO: 91.1 },
                        { period: 'Week 2', CWO: 88.8, PWO: 93.3 },
                        { period: 'Week 3', CWO: 90.2, PWO: 92.8 },
                        { period: 'Week 4', CWO: 89.4, PWO: 92.8 }
                    ]
                }
            },
            Quarter: {
                'All Systems': {
                    cwoCompliance: 89.8,
                    pwoCompliance: 93.2,
                    chartData: [
                        { period: 'Jan', CWO: 87.5, PWO: 91.8 },
                        { period: 'Feb', CWO: 89.2, PWO: 93.4 },
                        { period: 'Mar', CWO: 89.8, PWO: 93.2 }
                    ]
                },
                'HVAC': {
                    cwoCompliance: 91.6,
                    pwoCompliance: 94.8,
                    chartData: [
                        { period: 'Jan', CWO: 89.5, PWO: 93.8 },
                        { period: 'Feb', CWO: 91.2, PWO: 95.4 },
                        { period: 'Mar', CWO: 91.6, PWO: 94.8 }
                    ]
                },
                'CCTV': {
                    cwoCompliance: 88.2,
                    pwoCompliance: 91.0,
                    chartData: [
                        { period: 'Jan', CWO: 85.5, PWO: 89.8 },
                        { period: 'Feb', CWO: 87.2, PWO: 91.4 },
                        { period: 'Mar', CWO: 88.2, PWO: 91.0 }
                    ]
                },
                'Lighting': {
                    cwoCompliance: 88.9,
                    pwoCompliance: 92.3,
                    chartData: [
                        { period: 'Jan', CWO: 86.5, PWO: 90.8 },
                        { period: 'Feb', CWO: 88.2, PWO: 92.9 },
                        { period: 'Mar', CWO: 88.9, PWO: 92.3 }
                    ]
                }
            },
            '6 Months': {
                'All Systems': {
                    cwoCompliance: 89.5,
                    pwoCompliance: 92.9,
                    chartData: [
                        { period: 'Jan', CWO: 87.2, PWO: 91.5 },
                        { period: 'Feb', CWO: 88.1, PWO: 92.8 },
                        { period: 'Mar', CWO: 89.4, PWO: 93.2 },
                        { period: 'Apr', CWO: 90.2, PWO: 92.7 },
                        { period: 'May', CWO: 89.8, PWO: 93.5 },
                        { period: 'Jun', CWO: 89.5, PWO: 92.9 }
                    ]
                },
                'HVAC': {
                    cwoCompliance: 91.3,
                    pwoCompliance: 94.5,
                    chartData: [
                        { period: 'Jan', CWO: 89.2, PWO: 93.5 },
                        { period: 'Feb', CWO: 90.1, PWO: 94.8 },
                        { period: 'Mar', CWO: 91.4, PWO: 95.2 },
                        { period: 'Apr', CWO: 92.2, PWO: 94.7 },
                        { period: 'May', CWO: 91.8, PWO: 95.5 },
                        { period: 'Jun', CWO: 91.3, PWO: 94.5 }
                    ]
                },
                'CCTV': {
                    cwoCompliance: 87.9,
                    pwoCompliance: 90.7,
                    chartData: [
                        { period: 'Jan', CWO: 85.2, PWO: 89.5 },
                        { period: 'Feb', CWO: 86.1, PWO: 90.8 },
                        { period: 'Mar', CWO: 87.4, PWO: 91.2 },
                        { period: 'Apr', CWO: 88.2, PWO: 90.7 },
                        { period: 'May', CWO: 87.8, PWO: 91.5 },
                        { period: 'Jun', CWO: 87.9, PWO: 90.7 }
                    ]
                },
                'Lighting': {
                    cwoCompliance: 88.6,
                    pwoCompliance: 92.0,
                    chartData: [
                        { period: 'Jan', CWO: 86.2, PWO: 90.5 },
                        { period: 'Feb', CWO: 87.1, PWO: 91.8 },
                        { period: 'Mar', CWO: 88.4, PWO: 92.2 },
                        { period: 'Apr', CWO: 89.2, PWO: 91.7 },
                        { period: 'May', CWO: 88.8, PWO: 92.5 },
                        { period: 'Jun', CWO: 88.6, PWO: 92.0 }
                    ]
                }
            },
            '12 Months': {
                'All Systems': {
                    cwoCompliance: 89.1,
                    pwoCompliance: 92.5,
                    chartData: [
                        { period: 'Q1', CWO: 87.8, PWO: 91.2 },
                        { period: 'Q2', CWO: 88.9, PWO: 92.7 },
                        { period: 'Q3', CWO: 89.5, PWO: 93.1 },
                        { period: 'Q4', CWO: 89.1, PWO: 92.5 }
                    ]
                },
                'HVAC': {
                    cwoCompliance: 90.9,
                    pwoCompliance: 94.1,
                    chartData: [
                        { period: 'Q1', CWO: 89.8, PWO: 93.2 },
                        { period: 'Q2', CWO: 90.9, PWO: 94.7 },
                        { period: 'Q3', CWO: 91.5, PWO: 95.1 },
                        { period: 'Q4', CWO: 90.9, PWO: 94.1 }
                    ]
                },
                'CCTV': {
                    cwoCompliance: 87.5,
                    pwoCompliance: 90.3,
                    chartData: [
                        { period: 'Q1', CWO: 85.8, PWO: 89.2 },
                        { period: 'Q2', CWO: 86.9, PWO: 90.7 },
                        { period: 'Q3', CWO: 87.5, PWO: 91.1 },
                        { period: 'Q4', CWO: 87.5, PWO: 90.3 }
                    ]
                },
                'Lighting': {
                    cwoCompliance: 88.2,
                    pwoCompliance: 91.6,
                    chartData: [
                        { period: 'Q1', CWO: 86.8, PWO: 90.2 },
                        { period: 'Q2', CWO: 87.9, PWO: 91.7 },
                        { period: 'Q3', CWO: 88.5, PWO: 92.1 },
                        { period: 'Q4', CWO: 88.2, PWO: 91.6 }
                    ]
                }
            }
        };
        return ((_a = baseData[timeRange]) === null || _a === void 0 ? void 0 : _a[selectedSystem]) || baseData.Month['All Systems'];
    };
    const slaData = getSLAData();
    const timeRangeOptions = [
        { label: 'Week', value: 'Week' },
        { label: 'Month', value: 'Month' },
        { label: 'Quarter', value: 'Quarter' },
        { label: '6 Months', value: '6 Months' },
        { label: '12 Months', value: '12 Months' }
    ];
    const systemOptions = [
        { label: 'All Systems', value: 'All Systems' },
        { label: 'HVAC', value: 'HVAC' },
        { label: 'CCTV', value: 'CCTV' },
        { label: 'Lighting', value: 'Lighting' }
    ];
    const chartTypeOptions = [
        { label: 'CWO', value: 'CWO' },
        { label: 'PWO', value: 'PWO' }
    ];
    return (react_1.default.createElement("div", { className: "widget-container" },
        react_1.default.createElement("div", { className: "widget-header", onClick: () => setIsGraphCollapsed(!isGraphCollapsed) },
            react_1.default.createElement("div", { className: "widget-header-left" },
                react_1.default.createElement("div", { className: "widget-icon" },
                    react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
                        react_1.default.createElement("path", { d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" }))),
                react_1.default.createElement("div", { className: "widget-title" },
                    "SLA Compliance (Respond & Resolve)",
                    react_1.default.createElement("div", { style: {
                            marginLeft: '8px',
                            position: 'relative',
                            display: 'inline-block'
                        }, onMouseEnter: () => setShowTooltip(true), onMouseLeave: () => setShowTooltip(false), onClick: (e) => e.stopPropagation() },
                        react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", style: {
                                opacity: 0.7,
                                cursor: 'pointer'
                            } },
                            react_1.default.createElement("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" })),
                        showTooltip && (react_1.default.createElement("div", { style: {
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
                                maxWidth: '360px'
                            } },
                            "Tracks response and resolution times against SLA commitments",
                            react_1.default.createElement("div", { style: {
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
            react_1.default.createElement("div", { className: "widget-header-right" },
                react_1.default.createElement("button", { className: "compare-btn", onClick: (e) => { e.stopPropagation(); setShowCompareModal(true); } }, "Compare"),
                react_1.default.createElement("div", { className: "expand-icon" },
                    react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", style: {
                            transform: isGraphCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease'
                        } },
                        react_1.default.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))),
        react_1.default.createElement("div", { className: "widget-content" },
            react_1.default.createElement("div", { className: "widget-controls" },
                react_1.default.createElement("select", { className: "system-selector", value: selectedSystem, onChange: (e) => setSelectedSystem(e.target.value), onClick: (e) => e.stopPropagation() }, systemOptions.map(option => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
                react_1.default.createElement("select", { className: "time-period-selector", value: timeRange, onChange: (e) => setTimeRange(e.target.value), onClick: (e) => e.stopPropagation() }, timeRangeOptions.map(option => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label))))),
            react_1.default.createElement("div", { className: "sla-compliance-cards" },
                react_1.default.createElement("div", { className: "compliance-card cwo-card" },
                    react_1.default.createElement("div", { className: "card-header" },
                        react_1.default.createElement("div", { className: "card-icon" },
                            react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
                                react_1.default.createElement("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }))),
                        react_1.default.createElement("span", { className: "card-title" }, "Corrective Work Orders (CWO)")),
                    react_1.default.createElement("div", { className: "compliance-value cwo-value" },
                        slaData.cwoCompliance,
                        "%"),
                    react_1.default.createElement("div", { className: "compliance-status" },
                        react_1.default.createElement("span", { className: `status-label ${slaData.cwoCompliance >= 95 ? 'good' : 'below-target'}` }, slaData.cwoCompliance >= 95 ? 'Good' : 'Below Target'),
                        react_1.default.createElement("span", { className: "vs-target" },
                            (slaData.cwoCompliance - 95).toFixed(1),
                            "% vs Target")),
                    react_1.default.createElement("div", { className: "progress-bar" },
                        react_1.default.createElement("div", { className: "progress-current cwo-progress", style: { width: `${(slaData.cwoCompliance / 95) * 100}%` } }),
                        react_1.default.createElement("div", { className: "progress-target", style: { left: '95%' } }))),
                react_1.default.createElement("div", { className: "compliance-card pwo-card" },
                    react_1.default.createElement("div", { className: "card-header" },
                        react_1.default.createElement("div", { className: "card-icon" },
                            react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
                                react_1.default.createElement("path", { d: "M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L13.5,2.5L16.17,5.17L10.58,10.76C10.22,10.54 9.8,10.38 9.35,10.35L8.8,10.3C8.4,10.2 8,10.2 7.6,10.3L7.05,10.35C6.6,10.4 6.2,10.5 5.85,10.75L4.27,9.17L2.85,10.59L4.43,12.17C4.18,12.52 4.08,12.92 4.03,13.37L3.97,13.92C3.87,14.32 3.87,14.72 3.97,15.12L4.03,15.67C4.08,16.12 4.18,16.52 4.43,16.87L2.85,18.45L4.27,19.87L5.85,18.29C6.2,18.54 6.6,18.64 7.05,18.69L7.6,18.75C8,18.85 8.4,18.85 8.8,18.75L9.35,18.69C9.8,18.64 10.2,18.54 10.55,18.29L12.13,19.87L13.55,18.45L12,16.9V15H18V13H16V11H18V9H21Z" }))),
                        react_1.default.createElement("span", { className: "card-title" }, "Preventive Work Orders (PWO)")),
                    react_1.default.createElement("div", { className: "compliance-value pwo-value" },
                        slaData.pwoCompliance,
                        "%"),
                    react_1.default.createElement("div", { className: "compliance-status" },
                        react_1.default.createElement("span", { className: `status-label ${slaData.pwoCompliance >= 98 ? 'good' : 'below-target'}` }, slaData.pwoCompliance >= 98 ? 'Good' : 'Below Target'),
                        react_1.default.createElement("span", { className: "vs-target" },
                            (slaData.pwoCompliance - 98).toFixed(1),
                            "% vs Target")),
                    react_1.default.createElement("div", { className: "progress-bar" },
                        react_1.default.createElement("div", { className: "progress-current pwo-progress", style: { width: `${(slaData.pwoCompliance / 98) * 100}%` } }),
                        react_1.default.createElement("div", { className: "progress-target", style: { left: '98%' } })))),
            react_1.default.createElement("div", { className: `trend-section ${isGraphCollapsed ? 'collapsed' : ''}` },
                react_1.default.createElement("div", { className: "trend-header" },
                    react_1.default.createElement("div", { className: "trend-title-section" },
                        react_1.default.createElement("div", { className: "trend-title", style: { fontSize: '1rem', fontWeight: '500', color: 'var(--text-color)', textAlign: 'left' } },
                            "SLA Compliance Trend - ",
                            timeRange)),
                    react_1.default.createElement("div", { className: "chart-type-selector" }, chartTypeOptions.map(option => (react_1.default.createElement("button", { key: option.value, className: `chart-type-btn ${chartType === option.value ? 'active' : ''}`, onClick: () => setChartType(option.value) }, option.label))))),
                react_1.default.createElement("div", { className: "trend-chart" }, react_1.default.createElement(ResponsiveContainer, { width: "100%", height: 200 }, react_1.default.createElement(AreaChart, {
                    data: slaData.chartData,
                    margin: { top: 15, right: 20, left: 15, bottom: 35 }
                }, react_1.default.createElement('defs', {}, react_1.default.createElement('linearGradient', { id: 'slaGradient', x1: 0, y1: 0, x2: 0, y2: 1 }, react_1.default.createElement('stop', { offset: '0%', stopColor: chartType === 'CWO' ? '#4A90E2' : '#10B981', stopOpacity: 0.3 }), react_1.default.createElement('stop', { offset: '95%', stopColor: chartType === 'CWO' ? '#4A90E2' : '#10B981', stopOpacity: 0 }))), react_1.default.createElement(CartesianGrid, {
                    strokeDasharray: "2 2",
                    stroke: "rgba(255,255,255,0.2)",
                    strokeWidth: 0.8,
                    horizontal: true,
                    vertical: true
                }), react_1.default.createElement(XAxis, {
                    dataKey: "period",
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: 1.2 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.9 },
                    tickMargin: 8
                }), react_1.default.createElement(YAxis, {
                    domain: [80, 100],
                    axisLine: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: 1.2 },
                    tickLine: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1 },
                    tick: { fill: '#ffffff', fontSize: 10, opacity: 0.9 },
                    tickFormatter: (value) => `${value}%`,
                    tickMargin: 8,
                    width: 55
                }), react_1.default.createElement(Tooltip, {
                    formatter: (value, name) => [`${value}%`, name === 'CWO' ? 'CWO Compliance' : 'PWO Compliance'],
                    contentStyle: {
                        backgroundColor: 'rgba(15, 15, 15, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        color: '#fff'
                    },
                    itemStyle: { color: '#fff' }
                }), react_1.default.createElement(ReferenceLine, {
                    y: chartType === 'CWO' ? 95 : 98,
                    stroke: "#F5A623",
                    strokeWidth: 2,
                    strokeDasharray: "5 5",
                    label: {
                        value: `Target (${chartType === 'CWO' ? '95' : '98'}%)`,
                        position: "right",
                        style: { fill: "#F5A623", fontSize: "11px", fontWeight: "500" }
                    }
                }), react_1.default.createElement(Area, {
                    type: "monotone",
                    dataKey: chartType,
                    stroke: chartType === 'CWO' ? "#4A90E2" : "#10B981",
                    strokeWidth: 2.5,
                    fill: "url(#slaGradient)",
                    dot: {
                        fill: chartType === 'CWO' ? "#4A90E2" : "#10B981",
                        strokeWidth: 2,
                        r: 4,
                        stroke: '#ffffff'
                    },
                    activeDot: {
                        r: 5,
                        stroke: chartType === 'CWO' ? "#4A90E2" : "#10B981",
                        strokeWidth: 2,
                        fill: '#ffffff'
                    }
                })))))),
        react_1.default.createElement(components_1.Modal, { show: showCompareModal, onClose: () => {
                setShowCompareModal(false);
                setComparisonResult(null);
            }, title: "Compare SLA Compliance", className: "dt-water-compare-modal" },
            react_1.default.createElement("div", { className: "cooling-compare-modal-content modal-body" },
                react_1.default.createElement("div", { className: "cooling-compare-options" },
                    react_1.default.createElement("div", { className: "cooling-compare-section" },
                        react_1.default.createElement("label", null, "Select metric to compare:"),
                        react_1.default.createElement("div", { className: "cooling-select-container" },
                            react_1.default.createElement("select", { id: "compare-metric-type", value: compareMetricType, onChange: (e) => {
                                    setCompareMetricType(e.target.value);
                                    setComparisonResult(null);
                                }, className: "cooling-compare-select" },
                                react_1.default.createElement("option", { value: "CWO" }, "CWO Compliance"),
                                react_1.default.createElement("option", { value: "PWO" }, "PWO Compliance"))),
                        react_1.default.createElement("label", { style: { marginTop: '16px' } }, "Compare current period with:"),
                        react_1.default.createElement("div", { className: "cooling-select-container" },
                            react_1.default.createElement("select", { id: "compare-type", value: compareType, onChange: (e) => {
                                    const newCompareType = e.target.value;
                                    setCompareType(newCompareType);
                                    setComparisonResult(null);
                                    setRange1({ start: null, end: null });
                                    setRange2({ start: null, end: null });
                                }, className: "cooling-compare-select" }, compareOptions.map((opt) => (react_1.default.createElement("option", { key: opt.value, value: opt.value }, opt.label))))),
                        compareType === "Any period vs any period" && (react_1.default.createElement("div", { className: "cooling-compare-advanced" },
                            react_1.default.createElement("div", { className: "cooling-compare-advanced-range1" },
                                react_1.default.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Period 1:"),
                                react_1.default.createElement(components_1.DateRangePicker, { startDate: range1.start, endDate: range1.end, onChange: (startDate, endDate) => {
                                        setRange1({ start: startDate, end: endDate });
                                    } })),
                            react_1.default.createElement("div", { className: "cooling-compare-advanced-range2" },
                                react_1.default.createElement("label", { className: "cooling-compare-label-bold cooling-compare-label-margin" }, "Period 2:"),
                                react_1.default.createElement(components_1.DateRangePicker, { startDate: range2.start, endDate: range2.end, onChange: (startDate, endDate) => {
                                        setRange2({ start: startDate, end: endDate });
                                    } })))),
                        react_1.default.createElement("div", { style: { marginTop: '16px' } },
                            react_1.default.createElement("button", { style: { background: "#42A5F5" }, className: "cooling-CalculateCompare-btn", onClick: () => calculateComparison(compareType, range1, range2), disabled: compareType === "Any period vs any period" && (!range1.start || !range1.end || !range2.start || !range2.end) }, "COMPARE"))),
                    (compareType !== "Any period vs any period" || (compareType === "Any period vs any period" && comparisonResult)) &&
                        comparisonResult &&
                        !comparisonResult.error &&
                        comparisonResult.selected &&
                        comparisonResult.current && (react_1.default.createElement("div", { className: "cooling-comparison-results" },
                        react_1.default.createElement("h4", null, "Comparison Results"),
                        react_1.default.createElement("div", { className: "cooling-results-main" },
                            react_1.default.createElement("div", { className: "cooling-result-comparison" },
                                react_1.default.createElement("div", { className: "cooling-result-label" }, comparisonResult.selected.label),
                                react_1.default.createElement("div", { className: "cooling-result-value" },
                                    comparisonResult.selected.value,
                                    " ",
                                    comparisonResult.selected.unit)),
                            react_1.default.createElement("div", { className: "cooling-result-current" },
                                react_1.default.createElement("div", { className: "cooling-result-label" }, comparisonResult.current.label),
                                react_1.default.createElement("div", { className: "cooling-result-value" },
                                    comparisonResult.current.value,
                                    " ",
                                    comparisonResult.current.unit))),
                        react_1.default.createElement("div", { className: "cooling-result-difference" },
                            react_1.default.createElement("div", { className: "cooling-difference-item" },
                                react_1.default.createElement("span", { className: "cooling-difference-label" }, "Difference"),
                                react_1.default.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                    comparisonResult.current.value - comparisonResult.selected.value > 0 ? (react_1.default.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25B2")) : comparisonResult.current.value - comparisonResult.selected.value < 0 ? (react_1.default.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                    react_1.default.createElement("span", { className: "cooling-difference-value", style: {
                                            color: comparisonResult.current.value - comparisonResult.selected.value > 0
                                                ? "rgb(76, 175, 80)"
                                                : comparisonResult.current.value - comparisonResult.selected.value < 0
                                                    ? "#FF4D4F"
                                                    : "#fff",
                                        } },
                                        Math.abs(comparisonResult.current.value - comparisonResult.selected.value).toFixed(1),
                                        " ",
                                        comparisonResult.current.unit))),
                            react_1.default.createElement("div", { className: "cooling-difference-item" },
                                react_1.default.createElement("span", { className: "cooling-difference-label" }, "Change"),
                                react_1.default.createElement("span", { className: "cooling-difference-value-container", style: { display: "flex", alignItems: "center", gap: 4 } },
                                    parseFloat(comparisonResult.percentChange) > 0 ? (react_1.default.createElement("span", { style: { color: "rgb(76, 175, 80)", fontSize: 18, marginRight: 2 } }, "\u25B2")) : parseFloat(comparisonResult.percentChange) < 0 ? (react_1.default.createElement("span", { style: { color: "#FF4D4F", fontSize: 18, marginRight: 2 } }, "\u25BC")) : null,
                                    react_1.default.createElement("span", { className: "cooling-difference-value", style: {
                                            color: parseFloat(comparisonResult.percentChange) > 0
                                                ? "rgb(76, 175, 80)"
                                                : parseFloat(comparisonResult.percentChange) < 0
                                                    ? "#FF4D4F"
                                                    : "#fff",
                                        } },
                                        Math.abs(parseFloat(comparisonResult.percentChange)).toFixed(1),
                                        "%")))))))))));
};
exports.SLAComplianceWidget = SLAComplianceWidget;


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
const MonthlyFaultSummaryWidget_1 = __webpack_require__(/*! ./components/MonthlyFaultSummaryWidget */ "./src/components/MonthlyFaultSummaryWidget.tsx");
const MaintenanceSummaryWidget_1 = __webpack_require__(/*! ./components/MaintenanceSummaryWidget */ "./src/components/MaintenanceSummaryWidget.tsx");
const SLAComplianceWidget_1 = __webpack_require__(/*! ./components/SLAComplianceWidget */ "./src/components/SLAComplianceWidget.tsx");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const Fault_right_panelWidget = (_props) => {
    const containerRef = React.useRef(null);
    return (React.createElement("div", { className: "main-container dark-mode", ref: containerRef },
        React.createElement("div", { className: "glass-bg-fpr" },
            React.createElement(MonthlyFaultSummaryWidget_1.MonthlyFaultSummaryWidget, null),
            React.createElement(MaintenanceSummaryWidget_1.MaintenanceSummaryWidget, null),
            React.createElement(SLAComplianceWidget_1.SLAComplianceWidget, null))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "fault_right_panel",
    widget: Fault_right_panelWidget,
    configs: {
        layout: {
            w: 12,
            h: 20,
            minH: 16,
            minW: 8
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "fault_right_panel",
    label: "Fault_right_panel",
    // click: () => alert("Hello"),
    component: Fault_right_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"fault_right_panel",
   component: Fault_right_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "fault_right_panel", // use all lowercase letters
    name: 'Fault_right_panel',
    description: 'Tempalte Description',
    template: Fault_right_panelWidget,
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