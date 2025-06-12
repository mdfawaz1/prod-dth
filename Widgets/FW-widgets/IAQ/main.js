/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"dafdbec3-d474-4b36-f992-efd17e83bc12","author":"fawaz","widgets":[{"id":"iaq","name":"iaq","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

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
exports.push([module.id, ":root {\n  --bg-color: #1a1d29;\n  --text-color: #ffffff;\n  --text-secondary: #ffffff;\n  --text-muted: #ffffff;\n  --glass-bg: rgba(26, 29, 41, 0.95);\n  --glass-border: rgba(255, 255, 255, 0.08);\n  --card-bg: #2c2f3e;\n  --card-border: rgba(255, 255, 255, 0.06);\n  --primary-color: #4a5568;\n  --secondary-color: #5a6678;\n  --accent-color: #363a4f;\n  --header-bg: #363a4f;\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);\n  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.35);\n  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.4);\n  --gradient-primary: linear-gradient(135deg, #4a5568 0%, #5a6678 100%);\n  --gradient-secondary: linear-gradient(135deg, #363a4f 0%, #4a5568 100%);\n  --gradient-success: linear-gradient(135deg, #48bb78 0%, #38a169 100%);\n  --gradient-warning: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);\n  --gradient-danger: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);\n  --gradient-info: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);\n}\n\n.dark-mode {\n  --bg-color: #151823;\n  --text-color: #ffffff;\n  --text-secondary: #ffffff;\n  --text-muted: #ffffff;\n  --glass-bg: rgba(21, 24, 35, 0.95);\n  --glass-border: rgba(255, 255, 255, 0.06);\n  --card-bg: #242837;\n  --card-border: rgba(255, 255, 255, 0.04);\n  --primary-color: #4a5568;\n  --secondary-color: #5a6678;\n  --accent-color: #2d3142;\n  --header-bg: #2d3142;\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);\n  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);\n  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.45);\n  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5);\n  --gradient-primary: linear-gradient(135deg, #4a5568 0%, #5a6678 100%);\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 53%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40%, 43% {\n    transform: translateY(-8px);\n  }\n  70% {\n    transform: translateY(-4px);\n  }\n  90% {\n    transform: translateY(-2px);\n  }\n}\n.iaq-dashboard-container {\n  width: 100%;\n  height: 100%;\n  color: var(--text-color);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Inter\", sans-serif;\n  line-height: 1.6;\n}\n\n.iaq-glass-bg {\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  padding: clamp(8px, 2vw, 16px);\n  width: 100%;\n  color: var(--text-color);\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  gap: clamp(6px, 1.2vw, 12px);\n  position: relative;\n}\n\n.icon-emoji {\n  font-size: 1.5rem;\n  display: inline-block;\n  line-height: 1;\n  font-style: normal;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n\n.dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: clamp(10px, 1.8vw, 14px);\n  border-radius: 8px;\n  margin-bottom: clamp(6px, 1.2vw, 10px);\n  flex-wrap: wrap;\n  gap: 10px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--card-border);\n}\n.dashboard-header .header-info {\n  color: #ffffff !important;\n  animation: slideInLeft 0.8s ease-out;\n  flex: 1;\n  min-width: 200px;\n}\n.dashboard-header .header-info h2 {\n  font-size: clamp(0.95rem, 2.3vw, 1.2rem);\n  font-weight: 700;\n  margin: 0 0 3px 0;\n  color: #ffffff !important;\n  letter-spacing: 0.025em;\n}\n.dashboard-header .header-info .header-subtitle {\n  font-size: clamp(0.6rem, 1.4vw, 0.7rem);\n  color: #ffffff !important;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  opacity: 0.9;\n}\n.dashboard-header .header-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-end;\n  min-width: 200px;\n}\n.dashboard-header .header-controls .header-controls-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  justify-content: flex-end;\n}\n.dashboard-header .header-controls .header-controls-row .date-range {\n  font-size: clamp(0.6rem, 1.4vw, 0.7rem);\n  color: #ffffff !important;\n  font-weight: 600;\n  padding: 5px 8px;\n  background: var(--accent-color);\n  border-radius: 6px;\n  border: 1px solid var(--card-border);\n  white-space: nowrap;\n  box-shadow: var(--shadow-sm);\n}\n.dashboard-header .header-controls .header-controls-row .theme-toggle {\n  cursor: pointer;\n  padding: 7px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  background: var(--accent-color);\n  border: 1px solid var(--card-border);\n  flex-shrink: 0;\n  box-shadow: var(--shadow-sm);\n}\n.dashboard-header .header-controls .header-controls-row .theme-toggle:hover {\n  background: var(--gradient-primary);\n  transform: scale(1.1);\n  box-shadow: var(--shadow-lg);\n}\n.dashboard-header .header-controls .header-controls-row .theme-toggle span {\n  font-size: 0.9rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.dashboard-header .header-controls .filter-buttons {\n  display: flex;\n  gap: 3px;\n  background: var(--accent-color);\n  padding: 2px;\n  border-radius: 6px;\n  border: 1px solid var(--card-border);\n  width: 100%;\n  box-shadow: var(--shadow-sm);\n}\n.dashboard-header .header-controls .filter-buttons .filter-btn {\n  padding: 5px 7px;\n  border: none;\n  background: transparent;\n  color: #ffffff !important;\n  border-radius: 4px;\n  font-size: clamp(0.55rem, 1.2vw, 0.65rem);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n  flex: 1;\n  text-align: center;\n  opacity: 0.8;\n}\n.dashboard-header .header-controls .filter-buttons .filter-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: translateY(-1px);\n  opacity: 1;\n}\n.dashboard-header .header-controls .filter-buttons .filter-btn.active {\n  background: var(--gradient-primary);\n  color: white !important;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-1px);\n  opacity: 1;\n}\n\n.widget-section-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: clamp(10px, 1.8vw, 16px) 0 clamp(6px, 1.2vw, 10px) 0;\n  width: 100%;\n  position: relative;\n}\n.widget-section-title span {\n  padding: 0 14px;\n  font-size: clamp(0.6rem, 1.2vw, 0.7rem);\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  position: relative;\n  margin-bottom: 10px;\n  z-index: 2;\n}\n.widget-section-title .section-line {\n  height: 1px;\n  flex: 1;\n  opacity: 0.3;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n}\n\n.summary-indicators-integration {\n  border-radius: 8px;\n  padding: clamp(10px, 2.2vw, 16px);\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-md);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid {\n  display: grid;\n  gap: clamp(6px, 1.5vw, 12px);\n  transition: all 0.4s ease;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid--minimal {\n  gap: clamp(5px, 1.2vw, 8px);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid--compact {\n  gap: clamp(5px, 1.3vw, 10px);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card {\n  border-radius: 6px;\n  padding: clamp(10px, 2vw, 15px);\n  display: flex;\n  align-items: center;\n  gap: clamp(8px, 1.8vw, 14px);\n  min-height: clamp(50px, 8vw, 70px);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n  animation: slideInUp 0.6s ease-out;\n  animation-fill-mode: both;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s ease;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card:hover {\n  transform: translateY(-2px) scale(1.01);\n  box-shadow: var(--shadow-lg);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card:hover::before {\n  left: 100%;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card--minimal {\n  padding: clamp(8px, 1.8vw, 12px);\n  min-height: clamp(42px, 7vw, 55px);\n  gap: clamp(6px, 1.3vw, 10px);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card--compact {\n  padding: clamp(9px, 1.9vw, 14px);\n  min-height: clamp(46px, 7.5vw, 65px);\n  gap: clamp(7px, 1.5vw, 12px);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-icon {\n  width: clamp(30px, 5.5vw, 45px);\n  height: clamp(30px, 5.5vw, 45px);\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s ease;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-icon .icon-emoji {\n  font-size: clamp(0.9rem, 2.2vw, 1.3rem);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-icon .indicator-trend {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 8px;\n  padding: 1px 3px;\n  font-size: 0.5rem;\n  font-weight: 700;\n  min-width: 26px;\n  text-align: center;\n  animation: bounce 2s infinite;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-icon .indicator-trend .trend-value.positive {\n  color: #10B981;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-icon .indicator-trend .trend-value.negative {\n  color: #EF4444;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-icon .indicator-trend .trend-value.neutral {\n  color: #6B7280;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content {\n  flex: 1;\n  min-width: 0;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content .indicator-value {\n  font-size: clamp(1.1rem, 2.8vw, 1.6rem);\n  font-weight: 800;\n  color: #ffffff !important;\n  margin-bottom: clamp(1px, 0.3vw, 3px);\n  display: flex;\n  align-items: baseline;\n  gap: clamp(2px, 0.3vw, 4px);\n  line-height: 1.1;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content .indicator-value .indicator-unit {\n  font-size: clamp(0.65rem, 1.6vw, 0.9rem);\n  font-weight: 600;\n  opacity: 0.8;\n  color: #ffffff !important;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content .indicator-label {\n  font-size: clamp(0.55rem, 1.2vw, 0.65rem);\n  font-weight: 700;\n  color: #ffffff !important;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  line-height: 1.3;\n  margin-bottom: clamp(2px, 0.6vw, 4px);\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content .indicator-details {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content .indicator-details .detail-badge {\n  background: var(--gradient-success);\n  color: white;\n  padding: 1px 5px;\n  border-radius: 6px;\n  font-size: 0.5rem;\n  font-weight: 700;\n  animation: pulse 2s infinite;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-content .indicator-details .detail-time {\n  font-size: 0.5rem;\n  color: #ffffff !important;\n  opacity: 0.6;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-sparkline {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 16px;\n  opacity: 0.6;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-sparkline--minimal, .summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-sparkline--compact {\n  height: 12px;\n}\n.summary-indicators-integration .summary-indicators .indicators-grid .indicator-card .indicator-sparkline svg {\n  width: 100%;\n  height: 100%;\n}\n\n.comfort-levels-integration {\n  margin-top: clamp(6px, 1.2vw, 10px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header {\n  border-radius: 8px;\n  padding: clamp(14px, 2.4vw, 18px);\n  color: white;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  min-height: auto;\n  border: 1px solid var(--card-border);\n}\n.comfort-levels-integration .comfort-levels .comfort-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%);\n  pointer-events: none;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-title-section {\n  z-index: 2;\n  position: relative;\n  margin-bottom: clamp(12px, 2vw, 16px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-title-section h3 {\n  font-size: clamp(0.85rem, 1.8vw, 1.1rem);\n  font-weight: 800;\n  margin: 0 0 clamp(4px, 0.9vw, 6px) 0;\n  letter-spacing: 0.025em;\n  text-transform: uppercase;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-title-section p {\n  font-size: clamp(0.6rem, 1.3vw, 0.75rem);\n  opacity: 0.9;\n  margin: 0 0 clamp(7px, 1.3vw, 11px) 0;\n  line-height: 1.4;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-title-section .view-all-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: clamp(0.6rem, 1.2vw, 0.7rem);\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: underline;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-title-section .view-all-link:hover {\n  opacity: 0.8;\n  transform: translateX(2px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-title-section .view-all-link span:first-child {\n  font-size: clamp(0.7rem, 1.5vw, 0.85rem);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics {\n  display: flex;\n  flex-direction: column;\n  gap: clamp(8px, 1.4vw, 12px);\n  z-index: 2;\n  position: relative;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric {\n  display: flex;\n  align-items: center;\n  gap: clamp(10px, 1.8vw, 14px);\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  padding: clamp(10px, 2vw, 14px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-1px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric--optimal {\n  border-left: 3px solid #10b981;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric--excellent {\n  border-left: 3px solid #06b6d4;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric--warning {\n  border-left: 3px solid #f59e0b;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon {\n  width: clamp(28px, 4.8vw, 38px);\n  height: clamp(28px, 4.8vw, 38px);\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon .icon-emoji {\n  font-size: clamp(0.85rem, 1.7vw, 1.15rem);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon .status-indicator {\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  border: 1px solid white;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon .status-indicator--optimal {\n  background: #10b981;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon .status-indicator--excellent {\n  background: #06b6d4;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon .status-indicator--warning {\n  background: #f59e0b;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-left {\n  display: flex;\n  flex-direction: column;\n  gap: clamp(2px, 0.4vw, 4px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-left .comfort-main {\n  display: flex;\n  align-items: baseline;\n  gap: clamp(5px, 1vw, 7px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-left .comfort-main .comfort-percentage {\n  font-size: clamp(1.1rem, 2.3vw, 1.5rem);\n  font-weight: 800;\n  line-height: 1;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-left .comfort-main .comfort-value {\n  font-size: clamp(0.65rem, 1.4vw, 0.85rem);\n  font-weight: 600;\n  opacity: 0.8;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-left .comfort-description {\n  font-size: clamp(0.7rem, 1.3vw, 0.8rem);\n  opacity: 0.9;\n  font-weight: 500;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-right {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: clamp(1px, 0.2vw, 2px);\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-right .comfort-label {\n  font-size: clamp(0.7rem, 1.3vw, 0.8rem);\n  opacity: 0.9;\n  line-height: 1.3;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-right .comfort-target {\n  font-size: clamp(0.7rem, 1.3vw, 0.8rem);\n  opacity: 0.7;\n  font-weight: 500;\n  color: #ffffff !important;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  background: var(--status-color, rgba(255, 255, 255, 0.3));\n  width: var(--progress, 0%);\n  border-radius: 0 0 6px 6px;\n  transition: width 1s ease-out;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric--optimal::after {\n  --status-color: #10b981;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric--excellent::after {\n  --status-color: #06b6d4;\n}\n.comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric--warning::after {\n  --status-color: #f59e0b;\n}\n@media (max-width: 768px) {\n  .comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric {\n    gap: clamp(8px, 1.4vw, 11px);\n    padding: clamp(7px, 1.6vw, 11px);\n  }\n  .comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: clamp(4px, 0.9vw, 7px);\n  }\n  .comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-info .comfort-right {\n    text-align: left;\n  }\n}\n@media (max-width: 480px) {\n  .comfort-levels-integration .comfort-levels .comfort-header {\n    padding: clamp(11px, 1.9vw, 15px);\n  }\n  .comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric {\n    gap: clamp(6px, 1.1vw, 9px);\n    padding: clamp(7px, 1.4vw, 11px);\n  }\n  .comfort-levels-integration .comfort-levels .comfort-header .comfort-metrics .comfort-metric .comfort-icon {\n    width: clamp(24px, 3.8vw, 32px);\n    height: clamp(24px, 3.8vw, 32px);\n  }\n}\n\n.occupancy-heatmap-integration {\n  margin-top: clamp(6px, 1.2vw, 10px);\n}\n.occupancy-heatmap-integration .occupancy-heatmap {\n  border-radius: 8px;\n  padding: clamp(12px, 2.4vw, 18px);\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-md);\n  backdrop-filter: blur(10px);\n  width: 100%;\n  overflow: hidden;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: clamp(10px, 1.9vw, 15px);\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-header h3 {\n  font-size: clamp(0.85rem, 1.8vw, 1.1rem);\n  font-weight: 700;\n  margin: 0;\n  color: #ffffff !important;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-header .heatmap-controls {\n  display: flex;\n  gap: clamp(5px, 1.3vw, 10px);\n  font-size: clamp(0.6rem, 1.2vw, 0.7rem);\n  color: #ffffff !important;\n  flex-wrap: wrap;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-header .heatmap-controls span {\n  font-weight: 600;\n  background: var(--accent-color);\n  padding: 2px 5px;\n  border-radius: 4px;\n  white-space: nowrap;\n  border: 1px solid var(--card-border);\n  color: #ffffff !important;\n  opacity: 0.9;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid {\n  width: 100%;\n  overflow-x: auto;\n  margin-bottom: clamp(12px, 1.9vw, 16px);\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid--simplified .occupancy-cell {\n  font-size: clamp(0.55rem, 1.1vw, 0.75rem);\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-hours-header {\n  display: grid;\n  grid-template-columns: clamp(70px, 14vw, 110px) repeat(25, minmax(22px, 1fr));\n  gap: 1px;\n  margin-bottom: 1px;\n  min-width: fit-content;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-hours-header .hour-label {\n  font-size: clamp(0.55rem, 1vw, 0.7rem);\n  font-weight: 700;\n  color: #ffffff !important;\n  text-align: center;\n  padding: clamp(4px, 0.9vw, 7px) clamp(1px, 0.2vw, 3px);\n  background: var(--accent-color);\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  opacity: 0.9;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-hours-header .hour-label:first-child {\n  background: transparent;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-row {\n  display: grid;\n  grid-template-columns: clamp(70px, 14vw, 110px) repeat(25, minmax(22px, 1fr));\n  gap: 1px;\n  margin-bottom: 1px;\n  min-width: fit-content;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-row .day-label {\n  font-size: clamp(0.65rem, 1.2vw, 0.8rem);\n  font-weight: 700;\n  color: #ffffff !important;\n  padding: clamp(6px, 1.1vw, 9px);\n  background: var(--accent-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 0 0 0 3px;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-row .day-label .day-name {\n  font-weight: 800;\n  color: #ffffff !important;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-row .day-label .day-date {\n  font-size: 0.7em;\n  opacity: 0.7;\n  color: #ffffff !important;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-row .occupancy-cell {\n  font-size: clamp(0.5rem, 0.9vw, 0.65rem);\n  font-weight: 700;\n  text-align: center;\n  padding: clamp(4px, 0.9vw, 7px) clamp(1px, 0.2vw, 3px);\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: clamp(22px, 3.8vw, 28px);\n  overflow: hidden;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-grid .heatmap-row .occupancy-cell:hover {\n  transform: scale(1.05);\n  z-index: 10;\n  position: relative;\n  box-shadow: var(--shadow-lg);\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-legend {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: clamp(7px, 1.3vw, 11px);\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-legend .legend-bar {\n  display: flex;\n  height: clamp(15px, 2.7vw, 19px);\n  width: clamp(180px, 36vw, 280px);\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-legend .legend-bar .legend-segment {\n  flex: 1;\n  position: relative;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-legend .legend-bar .legend-segment::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-legend .legend-bar .legend-segment:last-child::after {\n  display: none;\n}\n.occupancy-heatmap-integration .occupancy-heatmap .heatmap-legend .legend-labels {\n  display: flex;\n  justify-content: space-between;\n  width: clamp(180px, 36vw, 280px);\n  font-size: clamp(0.6rem, 1.2vw, 0.75rem);\n  font-weight: 700;\n  color: #ffffff !important;\n  opacity: 0.9;\n}\n\n.occupancy-0 {\n  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);\n  color: #ffffff;\n}\n\n.occupancy-25 {\n  background: linear-gradient(135deg, #bee3f8 0%, #90cdf4 100%);\n  color: #ffffff;\n}\n\n.occupancy-60 {\n  background: linear-gradient(135deg, #9ae6b4 0%, #68d391 100%);\n  color: #ffffff;\n}\n\n.occupancy-100 {\n  background: linear-gradient(135deg, #fbd38d 0%, #f6ad55 100%);\n  color: #ffffff;\n}\n\n.occupancy-110 {\n  background: linear-gradient(135deg, #fc8181 0%, #f56565 100%);\n  color: #ffffff;\n}\n\n.occupancy-200 {\n  background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%);\n  color: #ffffff;\n}\n\n.dark-mode .indicator-card .indicator-icon {\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.dark-mode .indicator-card .indicator-content .indicator-value,\n.dark-mode .indicator-card .indicator-content .indicator-label {\n  color: #ffffff !important;\n}\n.dark-mode .comfort-levels .comfort-header {\n  background: var(--gradient-primary);\n}\n.dark-mode .occupancy-0 {\n  background: linear-gradient(135deg, #334155 0%, #1e293b 100%);\n  color: #ffffff;\n}\n\n@media (max-width: 768px) {\n  .dashboard-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .dashboard-header .header-info {\n    color: #ffffff !important;\n    min-width: auto;\n    text-align: center;\n  }\n  .dashboard-header .header-controls {\n    align-items: stretch;\n    min-width: auto;\n  }\n  .dashboard-header .header-controls .header-controls-row {\n    justify-content: space-between;\n  }\n  .dashboard-header .header-controls .filter-buttons .filter-btn {\n    padding: 8px 6px;\n    font-size: clamp(0.6rem, 1.3vw, 0.7rem);\n  }\n  .summary-indicators .indicators-grid--minimal {\n    grid-template-columns: 1fr;\n  }\n  .summary-indicators .indicators-grid--compact {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .heatmap-grid .heatmap-hours-header,\n  .heatmap-grid .heatmap-row {\n    grid-template-columns: 60px repeat(25, minmax(15px, 1fr));\n  }\n  .heatmap-grid .occupancy-cell {\n    font-size: 0.4rem;\n    padding: 2px 1px;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-header .header-controls .filter-buttons {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .dashboard-header .header-controls .filter-buttons .filter-btn {\n    width: 100%;\n    text-align: center;\n    padding: 8px 12px;\n  }\n  .heatmap-legend .legend-bar,\n  .heatmap-legend .legend-labels {\n    width: 180px;\n  }\n  .day-detail-modal {\n    padding: 10px;\n  }\n  .day-detail-modal .day-detail-content {\n    min-width: auto;\n    width: calc(100vw - 20px);\n    padding: 16px;\n    max-height: calc(100vh - 20px);\n  }\n  .heatmap-grid .heatmap-hours-header,\n  .heatmap-grid .heatmap-row {\n    grid-template-columns: 50px repeat(25, minmax(12px, 1fr));\n  }\n}\n* {\n  box-sizing: border-box;\n}\n\n.indicators-grid,\n.comfort-header,\n.heatmap-grid {\n  contain: layout style;\n}\n\n.indicator-card,\n.comfort-metric,\n.occupancy-cell {\n  will-change: transform;\n}\n.indicator-card:hover,\n.comfort-metric:hover,\n.occupancy-cell:hover {\n  will-change: auto;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}", ""]);
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
// Utility function for debouncing
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
// Custom hook for responsive behavior with better breakpoints
const useResponsiveObserver = (elementRef) => {
    const [size, setSize] = React.useState({ width: 0, height: 0 });
    const resizeTimeoutRef = React.useRef();
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const resizeObserver = new ResizeObserver((entries) => {
            // Clear previous timeout
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            // Debounce the resize handling
            resizeTimeoutRef.current = setTimeout(() => {
                for (const entry of entries) {
                    const { width, height } = entry.contentRect;
                    // Only update if size actually changed significantly
                    setSize(prevSize => {
                        if (Math.abs(prevSize.width - width) > 15 || Math.abs(prevSize.height - height) > 15) {
                            return { width, height };
                        }
                        return prevSize;
                    });
                }
            }, 150); // Increased debounce for stability
        });
        resizeObserver.observe(element);
        return () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeObserver.disconnect();
        };
    }, []);
    return size;
};
// Enhanced Summary Indicators Component with better responsive logic
const SummaryIndicators = ({ uxpContext, isDarkMode }) => {
    const containerRef = React.useRef(null);
    const containerSize = useResponsiveObserver(containerRef);
    const [viewMode, setViewMode] = React.useState('full');
    const indicatorData = [
        {
            icon: "👥",
            value: "83",
            label: "MAXIMUM OCCUPANCY",
            shortLabel: "MAX OCCUPANCY",
            minLabel: "MAX",
            unit: "",
            color: "#4a5568",
            priority: 1,
            trend: "+12%"
        },
        {
            icon: "🌿",
            value: "0",
            label: "CO2 CONCENTRATION",
            shortLabel: "CO2",
            minLabel: "CO2",
            unit: "ppm",
            color: "#48bb78",
            priority: 2,
            trend: "normal"
        },
        {
            icon: "🌡️",
            value: "22.5",
            label: "AVERAGE TEMPERATURE",
            shortLabel: "TEMPERATURE",
            minLabel: "TEMP",
            unit: "°C",
            color: "#4299e1",
            priority: 3,
            trend: "-0.5°C"
        },
        {
            icon: "💧",
            value: "45%",
            label: "HUMIDITY LEVELS",
            shortLabel: "HUMIDITY",
            minLabel: "HUM",
            unit: "",
            color: "#38b2ac",
            priority: 4,
            trend: "+2%"
        },
        {
            icon: "🌪️",
            value: "Good",
            label: "IAQ INDEX RATING",
            shortLabel: "IAQ INDEX",
            minLabel: "IAQ",
            unit: "",
            color: "#f56565",
            priority: 5,
            trend: "stable"
        },
        {
            icon: "❌",
            value: "4,075",
            label: "NO-SHOWS THIS WEEK",
            shortLabel: "NO-SHOWS",
            minLabel: "NO-SHOW",
            unit: "hrs",
            color: "#ed8936",
            priority: 6,
            trend: "-15%"
        },
        {
            icon: "📊",
            value: "84.7",
            label: "BOOKING SUCCESS RATE",
            shortLabel: "BOOKING RATE",
            minLabel: "BOOK",
            unit: "%",
            color: "#68d391",
            priority: 7,
            trend: "+3.2%"
        },
        {
            icon: "📈",
            value: "29.81%",
            label: "OCCUPANCY UTILIZATION",
            shortLabel: "OCCUPANCY RATE",
            minLabel: "OCC",
            unit: "",
            color: "#63b3ed",
            priority: 8,
            trend: "+5.1%"
        },
        {
            icon: "⏰",
            value: "9.4",
            label: "AVERAGE BOOKING LENGTH",
            shortLabel: "AVG LENGTH",
            minLabel: "AVG",
            unit: "hrs",
            color: "#805ad5",
            priority: 9,
            trend: "+0.3h"
        },
        {
            icon: "⚡",
            value: "35.18%",
            label: "RESOURCE UTILIZATION",
            shortLabel: "UTILIZATION",
            minLabel: "UTIL",
            unit: "",
            color: "#fc8181",
            priority: 10,
            trend: "+2.1%"
        }
    ];
    // Better breakpoint logic
    React.useEffect(() => {
        if (containerSize.width === 0)
            return;
        let newViewMode;
        if (containerSize.width < 480) {
            newViewMode = 'minimal';
        }
        else if (containerSize.width < 900) {
            newViewMode = 'compact';
        }
        else {
            newViewMode = 'full';
        }
        setViewMode(prevMode => prevMode !== newViewMode ? newViewMode : prevMode);
    }, [containerSize.width]);
    // Better content adaptation
    const getVisibleIndicators = React.useMemo(() => {
        const sorted = [...indicatorData].sort((a, b) => a.priority - b.priority);
        switch (viewMode) {
            case 'minimal':
                return sorted.slice(0, 3); // Show only top 3 most important
            case 'compact':
                return sorted.slice(0, 6); // Show top 6
            default:
                return sorted; // Show all
        }
    }, [viewMode]);
    const getGridColumns = React.useMemo(() => {
        if (containerSize.width === 0)
            return 1;
        switch (viewMode) {
            case 'minimal':
                return containerSize.width < 350 ? 1 :
                    containerSize.width < 600 ? 2 : 3;
            case 'compact':
                return containerSize.width < 500 ? 2 :
                    containerSize.width < 750 ? 3 : 4;
            default:
                return containerSize.width < 600 ? 2 :
                    containerSize.width < 900 ? 3 :
                        containerSize.width < 1200 ? 4 : 5;
        }
    }, [viewMode, containerSize.width]);
    const visibleIndicators = getVisibleIndicators;
    const gridColumns = getGridColumns;
    return (React.createElement("div", { className: "summary-indicators", ref: containerRef },
        React.createElement("div", { className: `indicators-grid indicators-grid--${viewMode}`, style: {
                gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                '--grid-columns': gridColumns
            } }, visibleIndicators.map((item, index) => (React.createElement("div", { key: index, className: `indicator-card indicator-card--${viewMode}`, style: {
                backgroundColor: item.color,
                animationDelay: `${index * 0.1}s`
            } },
            React.createElement("div", { className: "indicator-icon" },
                React.createElement("span", { className: "icon-emoji" }, item.icon),
                viewMode === 'full' && (React.createElement("div", { className: "indicator-trend" },
                    React.createElement("span", { className: `trend-value ${item.trend.includes('+') ? 'positive' : item.trend.includes('-') ? 'negative' : 'neutral'}` }, item.trend)))),
            React.createElement("div", { className: "indicator-content" },
                React.createElement("div", { className: "indicator-value" },
                    item.value,
                    item.unit && React.createElement("span", { className: "indicator-unit" }, item.unit)),
                React.createElement("div", { className: "indicator-label" }, viewMode === 'minimal' ? item.minLabel :
                    viewMode === 'compact' ? item.shortLabel : item.label),
                viewMode === 'full' && (React.createElement("div", { className: "indicator-details" },
                    React.createElement("div", { className: "detail-badge" }, "Live"),
                    React.createElement("div", { className: "detail-time" }, "Updated 2m ago")))),
            viewMode !== 'minimal' && (React.createElement("div", { className: `indicator-sparkline indicator-sparkline--${viewMode}` },
                React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 100 30" },
                    React.createElement("path", { d: `M 0,${20 + Math.sin(index) * 5} Q 25,${15 + Math.cos(index) * 3} 50,${18 + Math.sin(index * 2) * 4} T 100,${16 + Math.cos(index * 1.5) * 3}`, stroke: "rgba(255,255,255,0.6)", strokeWidth: "2", fill: "none" }))))))))));
};
// Enhanced Comfort Levels Component with redesigned layout
const ComfortLevels = ({ uxpContext, isDarkMode }) => {
    const containerRef = React.useRef(null);
    const containerSize = useResponsiveObserver(containerRef);
    const comfortData = [
        {
            icon: "🌡️",
            percentage: "84%",
            value: "23.2°C",
            label: "Temperature Range",
            description: "of rooms",
            status: "optimal",
            details: "Temperature within 23° - 25.5°",
            target: "23-25.5°C",
            progress: "84"
        },
        {
            icon: "🌿",
            percentage: "0%",
            value: "420ppm",
            label: "CO2 Levels",
            description: "of rooms",
            status: "excellent",
            details: "CO2 within 800ppm - 1100ppm",
            target: "< 800ppm",
            progress: "0"
        },
        {
            icon: "💧",
            percentage: "32%",
            value: "45%",
            label: "Humidity Range",
            description: "of rooms",
            status: "warning",
            details: "Humidity within 40% - 65%",
            target: "40-65%",
            progress: "32"
        }
    ];
    return (React.createElement("div", { className: "comfort-levels", ref: containerRef },
        React.createElement("div", { className: "comfort-header" },
            React.createElement("div", { className: "comfort-title-section" },
                React.createElement("h3", null, "COMFORT LEVELS"),
                React.createElement("p", null, "Environmental parameters monitoring"),
                React.createElement("div", { className: "view-all-link" },
                    React.createElement("span", null, "\uD83D\uDC41\uFE0F"),
                    React.createElement("span", null, "View Details"))),
            React.createElement("div", { className: "comfort-metrics" }, comfortData.map((item, index) => (React.createElement("div", { key: index, className: `comfort-metric comfort-metric--${item.status}`, style: {
                    '--progress': `${item.progress}%`
                } },
                React.createElement("div", { className: "comfort-icon" },
                    React.createElement("span", { className: "icon-emoji" }, item.icon),
                    React.createElement("div", { className: `status-indicator status-indicator--${item.status}` })),
                React.createElement("div", { className: "comfort-info" },
                    React.createElement("div", { className: "comfort-left" },
                        React.createElement("div", { className: "comfort-main" },
                            React.createElement("div", { className: "comfort-percentage" }, item.percentage),
                            React.createElement("div", { className: "comfort-value" }, item.value)),
                        React.createElement("div", { className: "comfort-description" }, item.description)),
                    React.createElement("div", { className: "comfort-right" },
                        React.createElement("div", { className: "comfort-label" }, item.label),
                        React.createElement("div", { className: "comfort-target" }, item.details))))))))));
};
// Enhanced Occupancy Heatmap Component with better responsive modes
const OccupancyHeatmap = ({ uxpContext, isDarkMode }) => {
    const containerRef = React.useRef(null);
    const containerSize = useResponsiveObserver(containerRef);
    const [viewMode, setViewMode] = React.useState('detailed');
    const [selectedDay, setSelectedDay] = React.useState(null);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fullDays = ['Sun (06-08)', 'Mon (06-09)', 'Tue (06-10)', 'Wed (06-04)', 'Thu (06-05)', 'Fri (06-06)', 'Sat (06-07)'];
    const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', 'Peak'];
    const detailedHours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', 'Day (max)'];
    // Enhanced occupancy data with more realistic patterns
    const occupancyData = [
        // Sunday - Light weekend activity
        [0, 0, 0, 0, 0, 0, 0, 25, 40, 60, 75, 85, 90, 85, 80, 70, 60, 45, 30, 15, 10, 0, 0, 0, 90],
        // Monday - Full business day
        [0, 0, 0, 0, 0, 0, 15, 45, 75, 90, 95, 100, 110, 105, 110, 115, 120, 110, 95, 80, 60, 35, 15, 5, 120],
        // Tuesday - Busy day with meetings
        [0, 0, 0, 0, 0, 10, 30, 60, 85, 100, 120, 140, 160, 180, 200, 190, 170, 150, 120, 90, 70, 40, 20, 10, 200],
        // Wednesday - Peak day
        [0, 0, 0, 0, 0, 20, 40, 70, 95, 120, 150, 180, 200, 220, 210, 200, 180, 160, 140, 110, 80, 50, 25, 15, 220],
        // Thursday - Heavy utilization
        [0, 0, 0, 0, 5, 25, 50, 80, 110, 140, 170, 190, 200, 195, 185, 175, 165, 145, 125, 100, 75, 45, 20, 10, 200],
        // Friday - Moderate to busy
        [0, 0, 0, 0, 0, 15, 35, 65, 90, 115, 135, 150, 160, 155, 145, 130, 115, 95, 75, 55, 35, 20, 10, 0, 160],
        // Saturday - Weekend activity
        [0, 0, 0, 0, 0, 0, 10, 30, 50, 70, 85, 95, 100, 95, 85, 75, 60, 40, 25, 15, 5, 0, 0, 0, 100],
    ];
    React.useEffect(() => {
        if (containerSize.width === 0)
            return;
        let newViewMode;
        if (containerSize.width < 500) {
            newViewMode = 'summary';
        }
        else if (containerSize.width < 1100) {
            newViewMode = 'simplified';
        }
        else {
            newViewMode = 'detailed';
        }
        setViewMode(prevMode => prevMode !== newViewMode ? newViewMode : prevMode);
    }, [containerSize.width]);
    const getColorClass = (value) => {
        if (value === 0)
            return 'occupancy-0';
        if (value <= 25)
            return 'occupancy-25';
        if (value <= 60)
            return 'occupancy-60';
        if (value <= 100)
            return 'occupancy-100';
        if (value <= 110)
            return 'occupancy-110';
        return 'occupancy-200';
    };
    const getAverageOccupancy = (dayData) => {
        const workingHours = dayData.slice(8, 18); // 8am to 6pm
        return Math.round(workingHours.reduce((a, b) => a + b, 0) / workingHours.length);
    };
    const getPeakOccupancy = (dayData) => {
        return Math.max(...dayData);
    };
    if (viewMode === 'summary') {
        return (React.createElement("div", { className: "occupancy-heatmap", ref: containerRef },
            React.createElement("div", { className: "heatmap-header" },
                React.createElement("h3", null, "OCCUPANCY SUMMARY"),
                React.createElement("div", { className: "heatmap-controls" },
                    React.createElement("span", null, "Week of June 4-10, 2025"))),
            React.createElement("div", { className: "occupancy-summary-grid" }, days.map((day, index) => {
                const dayData = occupancyData[index];
                const avgOccupancy = getAverageOccupancy(dayData);
                const peakOccupancy = getPeakOccupancy(dayData);
                return (React.createElement("div", { key: index, className: `summary-day-card ${getColorClass(avgOccupancy)}`, onClick: () => setSelectedDay(index) },
                    React.createElement("div", { className: "day-name" }, day),
                    React.createElement("div", { className: "day-avg" },
                        avgOccupancy,
                        "%"),
                    React.createElement("div", { className: "day-peak" },
                        "Peak: ",
                        peakOccupancy,
                        "%"),
                    React.createElement("div", { className: "day-trend" }, avgOccupancy > 50 ? '📈' : avgOccupancy > 20 ? '📊' : '📉')));
            })),
            selectedDay !== null && (React.createElement("div", { className: "day-detail-modal", onClick: (e) => e.target === e.currentTarget && setSelectedDay(null) },
                React.createElement("div", { className: "day-detail-content" },
                    React.createElement("div", { className: "day-detail-header" },
                        React.createElement("h4", null, fullDays[selectedDay]),
                        React.createElement("button", { onClick: () => setSelectedDay(null) }, "\u2715")),
                    React.createElement("div", { className: "detail-metrics" },
                        React.createElement("div", { className: "metric" },
                            React.createElement("span", null, "Average"),
                            React.createElement("span", null,
                                getAverageOccupancy(occupancyData[selectedDay]),
                                "%")),
                        React.createElement("div", { className: "metric" },
                            React.createElement("span", null, "Peak"),
                            React.createElement("span", null,
                                getPeakOccupancy(occupancyData[selectedDay]),
                                "%"))),
                    React.createElement("div", { className: "hourly-bars" }, occupancyData[selectedDay].slice(0, 24).map((value, hourIndex) => (React.createElement("div", { key: hourIndex, className: "hour-bar" },
                        React.createElement("div", { className: `bar-fill ${getColorClass(value)}`, style: { height: `${Math.max(value / 2, 5)}%` } }),
                        React.createElement("span", { className: "hour-label" }, hours[hourIndex]))))))))));
    }
    return (React.createElement("div", { className: "occupancy-heatmap", ref: containerRef },
        React.createElement("div", { className: "heatmap-header" },
            React.createElement("h3", null, "OCCUPANCY HEATMAP"),
            React.createElement("div", { className: "heatmap-controls" },
                React.createElement("span", null, "Resource: A001"),
                React.createElement("span", null, "2025-06-04 - 2025-06-10"),
                viewMode === 'detailed' && (React.createElement(React.Fragment, null,
                    React.createElement("span", null, "PERCENTAGE"),
                    React.createElement("span", null, "COUNT"),
                    React.createElement("span", null, "Capacity: 1"))))),
        React.createElement("div", { className: `heatmap-grid heatmap-grid--${viewMode}` },
            React.createElement("div", { className: "heatmap-hours-header" }, (viewMode === 'detailed' ? detailedHours : hours).map((hour, index) => (React.createElement("div", { key: index, className: "hour-label" }, hour)))),
            days.map((day, dayIndex) => (React.createElement("div", { key: dayIndex, className: "heatmap-row" },
                React.createElement("div", { className: "day-label" },
                    React.createElement("span", { className: "day-name" }, day),
                    viewMode === 'detailed' && React.createElement("span", { className: "day-date" },
                        "(",
                        fullDays[dayIndex].split(' ')[1],
                        ")")),
                occupancyData[dayIndex].map((value, hourIndex) => (React.createElement("div", { key: hourIndex, className: `occupancy-cell ${getColorClass(value)}`, title: `${fullDays[dayIndex]} ${(viewMode === 'detailed' ? detailedHours : hours)[hourIndex]}: ${value}%`, "data-value": value }, viewMode === 'detailed' ? `${value}%` : value > 0 ? value : ''))))))),
        React.createElement("div", { className: "heatmap-legend" },
            React.createElement("div", { className: "legend-bar" },
                React.createElement("div", { className: "legend-segment occupancy-25" }),
                React.createElement("div", { className: "legend-segment occupancy-60" }),
                React.createElement("div", { className: "legend-segment occupancy-100" }),
                React.createElement("div", { className: "legend-segment occupancy-110" })),
            React.createElement("div", { className: "legend-labels" },
                React.createElement("span", null, "0-25%"),
                React.createElement("span", null, "26-60%"),
                React.createElement("span", null, "61-100%"),
                React.createElement("span", null, "100%+")))));
};
const IaqWidget = (props) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [selectedDateRange, setSelectedDateRange] = React.useState("2025-06-02 - 2025-06-09");
    const [selectedFilter, setSelectedFilter] = React.useState("ALL");
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (React.createElement("div", { className: `iaq-dashboard-container ${isDarkMode ? 'dark-mode' : 'light-mode'}` },
        React.createElement("div", { className: "iaq-glass-bg" },
            React.createElement("div", { className: "dashboard-header" },
                React.createElement("div", { className: "header-info" },
                    React.createElement("h2", null, "SUMMARY INDICATORS"),
                    React.createElement("div", { className: "header-subtitle" }, "Real-time building analytics")),
                React.createElement("div", { className: "header-controls" },
                    React.createElement("div", { className: "header-controls-row" },
                        React.createElement("span", { className: "date-range" }, selectedDateRange),
                        React.createElement("div", { className: "theme-toggle", onClick: toggleTheme, title: isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' },
                            React.createElement("span", null, isDarkMode ? '☀️' : '🌙'))),
                    React.createElement("div", { className: "filter-buttons" },
                        React.createElement("button", { className: `filter-btn ${selectedFilter === 'ALL' ? 'active' : ''}`, onClick: () => setSelectedFilter('ALL') }, "ALL"),
                        React.createElement("button", { className: `filter-btn ${selectedFilter === 'MEETING ROOMS' ? 'active' : ''}`, onClick: () => setSelectedFilter('MEETING ROOMS') }, "MEETING ROOMS"),
                        React.createElement("button", { className: `filter-btn ${selectedFilter === 'WORKSTATIONS' ? 'active' : ''}`, onClick: () => setSelectedFilter('WORKSTATIONS') }, "WORKSTATIONS")))),
            React.createElement("div", { className: "summary-indicators-integration" },
                React.createElement(SummaryIndicators, { uxpContext: props.uxpContext, isDarkMode: isDarkMode })),
            React.createElement("div", { className: "comfort-levels-integration" },
                React.createElement("div", { className: "widget-section-title" },
                    React.createElement("div", { className: "section-line" }),
                    React.createElement("span", null, "Environmental Comfort Analysis"),
                    React.createElement("div", { className: "section-line" })),
                React.createElement(ComfortLevels, { uxpContext: props.uxpContext, isDarkMode: isDarkMode })),
            React.createElement("div", { className: "occupancy-heatmap-integration" },
                React.createElement("div", { className: "widget-section-title" },
                    React.createElement("div", { className: "section-line" }),
                    React.createElement("span", null, "Occupancy Analytics"),
                    React.createElement("div", { className: "section-line" })),
                React.createElement(OccupancyHeatmap, { uxpContext: props.uxpContext, isDarkMode: isDarkMode })))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "iaq",
    widget: IaqWidget,
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
    id: "iaq",
    label: "Iaq",
    // click: () => alert("Hello"),
    component: IaqWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"iaq",
   component: IaqWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "iaq", // use all lowercase letters
    name: 'Iaq',
    description: 'Tempalte Description',
    template: IaqWidget,
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