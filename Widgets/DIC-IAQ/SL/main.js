/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"c33c5695-d9d0-4f28-9fbf-e1555b798b6a","author":"","widgets":[{"id":"iaq_right_panel","name":"iaq_right_panel","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

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
exports.push([module.id, "*::-webkit-scrollbar {\n  width: 5px !important;\n}\n\n*::-webkit-scrollbar-track {\n  width: 5px !important;\n  background: #424242 !important;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  width: 5px !important;\n  background: #8F8F8F !important;\n}\n\n.iaq-right-panel-container {\n  direction: rtl;\n}\n\n.iaq-right-panel-container > * {\n  direction: ltr;\n}\n\n:root {\n  --bg-color: rgba(20, 20, 20, 0.15);\n  --text-color: #fff;\n  --glass-bg: rgba(20, 20, 20, 0.15);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n  --good-color: #4caf50;\n  --warning-color: #ff9800;\n  --danger-color: #f44336;\n  --neutral-color: #64b5f6;\n  --text-primary: #FFFFFF;\n  --text-secondary: #FFFFFF;\n  --text-tertiary: rgba(255, 255, 255, 0.85);\n  --threshold-color: #ff4444;\n}\n\n.iaq-right-panel-container {\n  width: 100%;\n  height: 100%;\n  color: var(--text-color);\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.iaq-right-panel-container .iaq-metric-card-new {\n  position: relative;\n  overflow: visible !important;\n}\n.iaq-right-panel-container .iaq-metric-layout {\n  position: relative;\n  overflow: visible !important;\n}\n.iaq-right-panel-container .iaq-radial-dial {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.iaq-right-panel-container .iaq-line-chart {\n  position: relative;\n}\n.iaq-right-panel-container .iaq-chart-container {\n  position: relative;\n}\n.iaq-right-panel-container .iaq-chart-point {\n  cursor: pointer;\n}\n.iaq-right-panel-container .iaq-chart-days {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n}\n.iaq-right-panel-container .iaq-chart-days .iaq-chart-day {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.iaq-right-panel-container .iaq-chart-scale {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8px 0;\n}\n.iaq-right-panel-container .iaq-chart-scale .iaq-scale-label {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.iaq-right-panel-content {\n  padding: 20px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.iaq-metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));\n  gap: 20px;\n  padding: 4px;\n}\n\n.iaq-metric-card-new {\n  border: 1px solid var(--card-border);\n  border-radius: 16px;\n  padding: 24px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  min-height: 160px;\n}\n.iaq-metric-card-new:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n\n.iaq-metric-layout {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 100%;\n  gap: 20px;\n}\n\n.iaq-metric-left {\n  flex: 1.1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100px;\n}\n\n.iaq-metric-title-new {\n  font-size: 1.18rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  letter-spacing: 0.3px;\n  margin-bottom: 12px;\n  line-height: 1.3;\n}\n\n.iaq-metric-status-new {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.iaq-metric-status-new span {\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n\n.iaq-status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  animation: pulse 2s ease-in-out infinite;\n}\n.iaq-status-dot.good {\n  background: var(--good-color);\n}\n.iaq-status-dot.warning {\n  background: var(--warning-color);\n}\n.iaq-status-dot.danger {\n  background: var(--danger-color);\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.iaq-metric-value-new {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-top: auto;\n}\n\n.iaq-value-number {\n  font-size: 2.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1;\n}\n\n.iaq-value-unit {\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: var(--text-secondary);\n}\n\n.iaq-metric-center {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  flex: 0.7;\n  padding-left: 8px;\n}\n\n.iaq-radial-dial {\n  position: relative;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.iaq-dial-value {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n\n.iaq-metric-right {\n  flex: 1.6;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-start;\n  max-width: 250px;\n}\n\n.iaq-line-chart {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  width: 100%;\n}\n\n.iaq-chart-scale {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 90px;\n  min-width: 40px;\n}\n\n.iaq-scale-label {\n  font-size: 1rem;\n  color: var(--text-tertiary);\n  text-align: right;\n  line-height: 1;\n  font-weight: 500;\n}\n\n.iaq-chart-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.iaq-chart-days {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 8px;\n  padding: 0 16px;\n}\n\n.iaq-chart-day {\n  font-size: 0.9rem;\n  color: var(--text-tertiary);\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.2px;\n}\n\n.iaq-chart-area {\n  animation: fadeInArea 1.5s ease-out;\n}\n\n.iaq-chart-line {\n  stroke-dasharray: 250;\n  stroke-dashoffset: 250;\n  animation: drawLine 2s ease-out forwards;\n}\n\n.iaq-threshold-indicator {\n  animation: fadeInThreshold 3s ease-out forwards;\n}\n\n.iaq-threshold-vertical-line {\n  stroke-dasharray: 80;\n  stroke-dashoffset: 80;\n  animation: drawVerticalThreshold 2.5s ease-out 0.5s forwards;\n  opacity: 0;\n}\n\n.iaq-threshold-circle {\n  animation: popInThreshold 0.8s ease-out 2.8s both;\n  transform-origin: center;\n}\n.iaq-threshold-circle:hover {\n  transform: scale(1.2);\n  transition: transform 0.2s ease;\n}\n\n.iaq-chart-point {\n  animation: popIn 0.6s ease-out both;\n  transform-origin: center;\n}\n.iaq-chart-point:hover {\n  transform: scale(1.3);\n  transition: transform 0.2s ease;\n}\n\n.iaq-chart-point-glow {\n  animation: glowPulse 3s ease-in-out infinite;\n}\n\n.iaq-chart-point-highlight {\n  animation: shimmer 2s ease-in-out infinite;\n}\n\n@keyframes fadeInArea {\n  from {\n    opacity: 0;\n    transform: scaleY(0);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n}\n@keyframes drawLine {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes fadeInThreshold {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes drawVerticalThreshold {\n  0% {\n    stroke-dashoffset: 80;\n    opacity: 0;\n  }\n  30% {\n    opacity: 0.8;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0.9;\n  }\n}\n@keyframes popInThreshold {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  70% {\n    transform: scale(1.1);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes glowPulse {\n  0%, 100% {\n    opacity: 0.2;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.4;\n    transform: scale(1.1);\n  }\n}\n@keyframes shimmer {\n  0%, 100% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@media (max-width: 1600px) {\n  .iaq-metrics-grid {\n    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));\n  }\n  .iaq-metric-right {\n    max-width: 230px;\n  }\n}\n@media (max-width: 1400px) {\n  .iaq-metrics-grid {\n    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n  }\n  .iaq-metric-card-new {\n    min-height: 150px;\n  }\n  .iaq-metric-layout {\n    gap: 18px;\n  }\n  .iaq-metric-right {\n    max-width: 220px;\n  }\n  .iaq-metric-title-new {\n    font-size: 1.05rem;\n  }\n  .iaq-value-number {\n    font-size: 1.3rem;\n  }\n  .iaq-dial-value {\n    font-size: 1.7rem;\n  }\n  .iaq-scale-label {\n    font-size: 0.95rem;\n  }\n  .iaq-chart-day {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 1200px) {\n  .iaq-metrics-grid {\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 16px;\n  }\n  .iaq-metric-card-new {\n    padding: 22px;\n    min-height: 140px;\n  }\n  .iaq-metric-layout {\n    gap: 16px;\n  }\n  .iaq-metric-left {\n    min-height: 130px;\n  }\n  .iaq-metric-title-new {\n    font-size: 1rem;\n  }\n  .iaq-value-number {\n    font-size: 1.2rem;\n  }\n  .iaq-dial-value {\n    font-size: 1.6rem;\n  }\n  .iaq-metric-right {\n    max-width: 200px;\n  }\n  .iaq-scale-label {\n    font-size: 0.9rem;\n  }\n  .iaq-chart-day {\n    font-size: 0.8rem;\n  }\n  .iaq-chart-scale {\n    height: 80px;\n  }\n}\n@media (max-width: 768px) {\n  .iaq-right-panel-content {\n    padding: 16px;\n  }\n  .iaq-metrics-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .iaq-metric-card-new {\n    padding: 20px;\n    min-height: 130px;\n  }\n  .iaq-metric-layout {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n  .iaq-metric-left {\n    width: 100%;\n    min-height: auto;\n    text-align: center;\n  }\n  .iaq-metric-center {\n    justify-content: center;\n    padding-left: 0;\n  }\n  .iaq-metric-right {\n    width: 100%;\n    max-width: none;\n    align-items: center;\n  }\n  .iaq-metric-title-new {\n    font-size: 1rem;\n  }\n  .iaq-metric-status-new span {\n    font-size: 0.95rem;\n  }\n  .iaq-value-number {\n    font-size: 1.2rem;\n  }\n  .iaq-value-unit {\n    font-size: 1rem;\n  }\n  .iaq-dial-value {\n    font-size: 1.5rem;\n  }\n  .iaq-chart-scale {\n    height: 70px;\n  }\n  .iaq-scale-label {\n    font-size: 0.85rem;\n  }\n  .iaq-chart-day {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .iaq-right-panel-content {\n    padding: 12px;\n  }\n  .iaq-metric-card-new {\n    padding: 18px;\n    min-height: 120px;\n  }\n  .iaq-metric-layout {\n    gap: 14px;\n  }\n  .iaq-metric-title-new {\n    font-size: 0.95rem;\n  }\n  .iaq-value-number {\n    font-size: 1.1rem;\n  }\n  .iaq-dial-value {\n    font-size: 1.4rem;\n  }\n  .iaq-scale-label {\n    font-size: 0.8rem;\n  }\n  .iaq-chart-day {\n    font-size: 0.7rem;\n  }\n}\n.dark-mode {\n  --bg-color: rgba(20, 20, 20, 0.1);\n  --text-color: #fff;\n  --glass-bg: rgba(20, 20, 20, 0.15);\n  --glass-border: rgba(255, 255, 255, 0.18);\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --card-border: rgba(255, 255, 255, 0.08);\n  --progress-bg: rgba(255, 255, 255, 0.1);\n  --modal-bg: rgba(20, 20, 20, 0.95);\n  --modal-border: rgba(255, 255, 255, 0.1);\n}\n\n.iaq-right-panel-container *::-webkit-scrollbar {\n  width: 5px !important;\n}\n.iaq-right-panel-container *::-webkit-scrollbar-track {\n  width: 5px !important;\n  background: #424242 !important;\n}\n.iaq-right-panel-container *::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  width: 5px !important;\n  background: #8F8F8F !important;\n}\n\n.iaq-metric-card-new {\n  animation: fadeInUp 0.6s ease-out;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.iaq-metric-card-new:focus-within {\n  outline: 2px solid var(--neutral-color);\n  outline-offset: 2px;\n}\n\n@media (prefers-contrast: high) {\n  .iaq-metric-card-new {\n    border-width: 2px;\n  }\n  .iaq-status-dot {\n    border: 1px solid white;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .iaq-metric-card-new {\n    animation: none;\n    transition: none;\n  }\n  .iaq-metric-card-new:hover {\n    transform: none;\n  }\n  .iaq-radial-dial svg circle {\n    transition: none !important;\n  }\n  .iaq-chart-area,\n  .iaq-chart-line,\n  .iaq-chart-point,\n  .iaq-chart-point-glow,\n  .iaq-chart-point-highlight,\n  .iaq-threshold-indicator,\n  .iaq-threshold-vertical-line,\n  .iaq-threshold-circle,\n  .iaq-status-dot {\n    animation: none !important;\n  }\n}\n.iaq-aqi-composite {\n  border: 1px solid var(--card-border);\n  border-radius: 20px;\n  padding: 32px;\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.iaq-aqi-composite:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.iaq-aqi-composite::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: linear-gradient(90deg, var(--good-color), var(--warning-color), var(--danger-color));\n  opacity: 0.8;\n}\n\n.iaq-aqi-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n}\n\n.iaq-aqi-title {\n  flex: 1;\n}\n.iaq-aqi-title h3 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n  letter-spacing: 0.5px;\n  line-height: 1.2;\n}\n.iaq-aqi-title .iaq-aqi-helper {\n  font-size: 1rem;\n  color: var(--text-tertiary);\n  margin: 0;\n  font-weight: 400;\n  line-height: 1.4;\n}\n\n.iaq-aqi-status {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.iaq-aqi-status span {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.iaq-aqi-status .iaq-status-dot {\n  width: 12px;\n  height: 12px;\n}\n\n.iaq-aqi-content {\n  display: flex;\n  align-items: center;\n  gap: 48px;\n}\n\n.iaq-aqi-main-dial {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.iaq-aqi-score {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.iaq-aqi-score .iaq-aqi-number {\n  font-size: 2.8rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.iaq-aqi-score .iaq-aqi-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.iaq-aqi-breakdown {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.iaq-breakdown-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  letter-spacing: 0.3px;\n}\n\n.iaq-breakdown-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.iaq-breakdown-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.iaq-breakdown-label {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  min-width: 60px;\n  text-align: left;\n}\n\n.iaq-breakdown-bar {\n  flex: 1;\n  height: 12px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  overflow: hidden;\n  position: relative;\n}\n.iaq-breakdown-bar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n  animation: shimmer 2s ease-in-out infinite;\n}\n\n.iaq-breakdown-fill {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 1s ease-out;\n  position: relative;\n  z-index: 1;\n}\n.iaq-breakdown-fill::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  animation: shimmer 2s ease-in-out infinite;\n}\n\n.iaq-breakdown-value {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  min-width: 40px;\n  text-align: right;\n}\n\n@media (max-width: 1400px) {\n  .iaq-aqi-composite {\n    padding: 28px;\n  }\n  .iaq-aqi-title h3 {\n    font-size: 1.6rem;\n  }\n  .iaq-aqi-score .iaq-aqi-number {\n    font-size: 2.4rem;\n  }\n  .iaq-aqi-content {\n    gap: 40px;\n  }\n}\n@media (max-width: 1200px) {\n  .iaq-aqi-composite {\n    padding: 24px;\n  }\n  .iaq-aqi-title h3 {\n    font-size: 1.4rem;\n  }\n  .iaq-aqi-score .iaq-aqi-number {\n    font-size: 2.2rem;\n  }\n  .iaq-aqi-content {\n    gap: 32px;\n  }\n  .iaq-breakdown-title {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 768px) {\n  .iaq-aqi-composite {\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  .iaq-aqi-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .iaq-aqi-title h3 {\n    font-size: 1.3rem;\n  }\n  .iaq-aqi-content {\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n  }\n  .iaq-aqi-breakdown {\n    width: 100%;\n  }\n  .iaq-breakdown-item {\n    gap: 12px;\n  }\n  .iaq-breakdown-label {\n    min-width: 50px;\n    font-size: 0.95rem;\n  }\n  .iaq-breakdown-value {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .iaq-aqi-composite {\n    padding: 16px;\n  }\n  .iaq-aqi-title h3 {\n    font-size: 1.2rem;\n  }\n  .iaq-aqi-score .iaq-aqi-number {\n    font-size: 2rem;\n  }\n  .iaq-aqi-score .iaq-aqi-label {\n    font-size: 1rem;\n  }\n  .iaq-breakdown-title {\n    font-size: 1rem;\n  }\n  .iaq-breakdown-item {\n    gap: 10px;\n  }\n  .iaq-breakdown-label {\n    min-width: 45px;\n    font-size: 0.9rem;\n  }\n  .iaq-breakdown-value {\n    font-size: 0.95rem;\n  }\n}\n.iaq-section-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 3px 0 3px 0;\n  gap: 18px;\n}\n\n.iaq-section-line {\n  flex: 1;\n  height: 2px;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.32) 50%, rgba(255, 255, 255, 0.12) 100%);\n  border-radius: 2px;\n}\n\n.iaq-section-text {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  padding: 0 18px;\n  background: transparent;\n  white-space: nowrap;\n}", ""]);
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
const react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
// Mock data - replace with actual data fetching logic
const getAirQualityData = (locationkey) => {
    // This would normally fetch data based on locationkey
    return {
        co2Exposure: {
            title: "CO₂ (Carbon Dioxide)",
            status: "Moderate",
            value: "1200",
            unit: "ppm",
            dialValue: 60,
            maxDialValue: 100,
            chartData: [800, 950, 1100, 1200, 1050, 1150, 1000],
            chartMax: 2000,
            threshold: 1000,
            statusColor: "danger"
        },
        tvocComfort: {
            title: "TVOC (Total Volatile Organic Compounds)",
            status: "Good",
            value: "240",
            unit: "ppb",
            dialValue: 24,
            maxDialValue: 100,
            chartData: [180, 220, 200, 240, 190, 230, 210],
            chartMax: 1000,
            threshold: 500,
            statusColor: "good"
        },
        pm25Safety: {
            title: "PM₂.₅ (Particulate Matter)",
            status: "Moderate",
            value: "35",
            unit: "μg/m³",
            dialValue: 64,
            maxDialValue: 100,
            chartData: [22, 28, 35, 42, 30, 38, 32],
            chartMax: 55,
            threshold: 35,
            statusColor: "warning"
        },
        airExchange: {
            title: "Air Exchange Rate",
            status: "Adequate",
            value: "2.4",
            unit: "ACH",
            dialValue: 48,
            maxDialValue: 100,
            chartData: [3.2, 3.8, 3.1, 4.2, 3.0, 3.6, 3.4],
            chartMax: 5,
            threshold: 3.5,
            statusColor: "good"
        },
        thermalComfort: {
            title: "Thermal Comfort Index",
            status: "Comfortable",
            value: "72.5",
            unit: "°F",
            dialValue: 72,
            maxDialValue: 100,
            chartData: [75, 84, 78, 88, 76, 82, 79],
            chartMax: 100,
            threshold: 80,
            statusColor: "good"
        }
    };
};
// Calculate AQI composite score
const calculateAQI = (pm25Value, co2Value, tvocValue) => {
    // Normalize each pollutant to 0-100 scale with realistic thresholds
    // PM2.5: EPA standards - 12 μg/m³ (annual), 35 μg/m³ (24h), 55 μg/m³ (unhealthy)
    // Use 55 μg/m³ as the 100% threshold for better distribution
    const pm25Score = Math.min(100, Math.max(0, (pm25Value / 55) * 100));
    // CO2: Indoor levels - 400 ppm (outdoor), 1000 ppm (moderate), 2000 ppm (poor)
    // Use 2000 ppm as the 100% threshold for better distribution
    const co2Score = Math.min(100, Math.max(0, (co2Value / 2000) * 100));
    // TVOC: 500 ppb is considered high, 1000 ppb is very high
    // Use 1000 ppb as the 100% threshold for better distribution
    const tvocScore = Math.min(100, Math.max(0, (tvocValue / 1000) * 100));
    // Calculate weighted average (equal contribution)
    const aqiScore = (pm25Score + co2Score + tvocScore) / 3;
    // Determine status and color
    let status = "Good";
    let statusColor = "good";
    if (aqiScore >= 80) {
        status = "Poor";
        statusColor = "danger";
    }
    else if (aqiScore >= 60) {
        status = "Moderate";
        statusColor = "warning";
    }
    else if (aqiScore >= 40) {
        status = "Fair";
        statusColor = "warning";
    }
    else {
        status = "Good";
        statusColor = "good";
    }
    return {
        score: Math.round(aqiScore),
        status,
        statusColor,
        pm25Score: Math.round(pm25Score),
        co2Score: Math.round(co2Score),
        tvocScore: Math.round(tvocScore)
    };
};
const Tooltip = ({ show, content, x, y }) => {
    const [portalContainer, setPortalContainer] = React.useState(null);
    React.useEffect(() => {
        const div = document.createElement('div');
        div.className = 'tooltip-container';
        document.body.appendChild(div);
        setPortalContainer(div);
        return () => {
            document.body.removeChild(div);
        };
    }, []);
    if (!show || !portalContainer)
        return null;
    return (0, react_dom_1.createPortal)(React.createElement("div", { className: "tooltip-content", style: {
            position: 'fixed',
            left: x,
            top: y,
            transform: 'translate(-50%, -100%)',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: 99999
        } },
        content,
        React.createElement("div", { style: {
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderTop: '4px solid rgba(0, 0, 0, 0.9)'
            } })), portalContainer);
};
const RadialDial = ({ value, maxValue, color }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });
    const dialRef = React.useRef(null);
    const percentage = (value / maxValue) * 100;
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const handleMouseEnter = (e) => {
        var _a;
        const rect = (_a = dialRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (rect) {
            setTooltipPosition({
                x: rect.left + rect.width / 2,
                y: rect.top - 10
            });
            setShowTooltip(true);
        }
    };
    return (React.createElement("div", { className: "iaq-radial-dial", ref: dialRef, onMouseEnter: handleMouseEnter, onMouseLeave: () => setShowTooltip(false) },
        React.createElement(Tooltip, { show: showTooltip, content: `${Math.round(percentage)}% (${value}/${maxValue})`, x: tooltipPosition.x, y: tooltipPosition.y }),
        React.createElement("svg", { width: "90", height: "90", viewBox: "0 0 90 90" },
            React.createElement("circle", { cx: "45", cy: "45", r: radius, fill: "none", stroke: "rgba(255,255,255,0.1)", strokeWidth: "8" }),
            React.createElement("circle", { cx: "45", cy: "45", r: radius, fill: "none", stroke: color, strokeWidth: "8", strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, strokeLinecap: "round", transform: "rotate(-90 45 45)", style: {
                    transition: 'stroke-dashoffset 0.6s ease-in-out'
                } })),
        React.createElement("div", { className: "iaq-dial-value" }, value)));
};
const LineChart = ({ data, maxValue, color, threshold }) => {
    var _a, _b;
    const [activePoint, setActivePoint] = React.useState(null);
    const chartRef = React.useRef(null);
    const chartContainerRef = React.useRef(null);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const chartHeight = 90;
    const chartWidth = 180;
    const padding = 16;
    // Create smooth curve points using bezier curves
    const createSmoothPath = (points) => {
        if (points.length < 2)
            return '';
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const current = points[i];
            const next = points[i + 1];
            if (i === 1) {
                // First curve
                const cp1x = prev.x + (current.x - prev.x) * 0.3;
                const cp1y = prev.y;
                const cp2x = current.x - (current.x - prev.x) * 0.3;
                const cp2y = current.y;
                path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${current.x} ${current.y}`;
            }
            else {
                // Smooth bezier curve
                const cp1x = prev.x + (current.x - prev.x) * 0.3;
                const cp1y = prev.y + (current.y - prev.y) * 0.3;
                const cp2x = current.x - (current.x - prev.x) * 0.3;
                const cp2y = current.y - (current.y - prev.y) * 0.3;
                path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${current.x} ${current.y}`;
            }
        }
        return path;
    };
    const dataPoints = data.map((point, index) => ({
        x: (index * (chartWidth - padding * 2)) / (data.length - 1) + padding,
        y: chartHeight - padding - ((point / maxValue) * (chartHeight - padding * 2)),
        value: point
    }));
    const smoothPath = createSmoothPath(dataPoints);
    // Create area path
    const areaPath = smoothPath + ` L ${dataPoints[dataPoints.length - 1].x} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`;
    // Calculate threshold line position and intersection
    const thresholdY = threshold ? chartHeight - padding - ((threshold / maxValue) * (chartHeight - padding * 2)) : null;
    // Find intersection point with threshold
    let intersectionPoint = null;
    if (threshold && thresholdY) {
        // Find the data point that crosses the threshold
        for (let i = 0; i < dataPoints.length - 1; i++) {
            const current = dataPoints[i];
            const next = dataPoints[i + 1];
            // Check if line segment crosses the threshold
            if ((current.value <= threshold && next.value >= threshold) ||
                (current.value >= threshold && next.value <= threshold)) {
                // Calculate intersection point
                const ratio = (threshold - current.value) / (next.value - current.value);
                intersectionPoint = {
                    x: current.x + ratio * (next.x - current.x),
                    y: thresholdY
                };
                break;
            }
        }
        // If no intersection found, check if any point is close to threshold
        if (!intersectionPoint) {
            const closestPoint = dataPoints.reduce((prev, curr) => Math.abs(curr.value - threshold) < Math.abs(prev.value - threshold) ? curr : prev);
            if (Math.abs(closestPoint.value - threshold) <= threshold * 0.1) {
                intersectionPoint = {
                    x: closestPoint.x,
                    y: thresholdY
                };
            }
        }
    }
    const handlePointMouseEnter = (index, point) => {
        var _a, _b;
        const chartRect = (_a = chartRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const containerRect = (_b = chartContainerRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        if (chartRect && containerRect) {
            // Calculate the offset of the SVG within the chart container
            const svgLeft = chartRect.left - containerRect.left;
            // Calculate the actual point position in viewport coordinates
            const pointX = containerRect.left + svgLeft + point.x;
            const pointY = containerRect.top + point.y;
            setActivePoint({
                index,
                x: pointX,
                y: pointY
            });
        }
    };
    return (React.createElement("div", { className: "iaq-line-chart", ref: chartContainerRef },
        React.createElement("div", { className: "iaq-chart-scale" },
            React.createElement("div", { className: "iaq-scale-label" }, maxValue),
            React.createElement("div", { className: "iaq-scale-label" }, Math.round(maxValue * 0.5)),
            React.createElement("div", { className: "iaq-scale-label" }, "0")),
        React.createElement("div", { className: "iaq-chart-container" },
            React.createElement(Tooltip, { show: activePoint !== null, content: activePoint !== null ? (React.createElement(React.Fragment, null,
                    React.createElement("strong", null, days[activePoint.index]),
                    React.createElement("br", null),
                    dataPoints[activePoint.index].value)) : null, x: (_a = activePoint === null || activePoint === void 0 ? void 0 : activePoint.x) !== null && _a !== void 0 ? _a : 0, y: (_b = activePoint === null || activePoint === void 0 ? void 0 : activePoint.y) !== null && _b !== void 0 ? _b : 0 }),
            React.createElement("svg", { width: chartWidth, height: chartHeight, viewBox: `0 0 ${chartWidth} ${chartHeight}`, ref: chartRef },
                React.createElement("defs", null,
                    React.createElement("linearGradient", { id: `chartGradient-${color.replace('#', '')}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                        React.createElement("stop", { offset: "0%", stopColor: color, stopOpacity: "0.4" }),
                        React.createElement("stop", { offset: "50%", stopColor: color, stopOpacity: "0.2" }),
                        React.createElement("stop", { offset: "100%", stopColor: color, stopOpacity: "0.05" })),
                    React.createElement("filter", { id: `glow-${color.replace('#', '')}` },
                        React.createElement("feGaussianBlur", { stdDeviation: "2", result: "coloredBlur" }),
                        React.createElement("feMerge", null,
                            React.createElement("feMergeNode", { in: "coloredBlur" }),
                            React.createElement("feMergeNode", { in: "SourceGraphic" }))),
                    React.createElement("filter", { id: `shadow-${color.replace('#', '')}` },
                        React.createElement("feDropShadow", { dx: "0", dy: "1", stdDeviation: "1", floodColor: color, floodOpacity: "0.3" }))),
                React.createElement("defs", null,
                    React.createElement("pattern", { id: "grid", width: "24", height: "24", patternUnits: "userSpaceOnUse" },
                        React.createElement("path", { d: "M 24 0 L 0 0 0 24", fill: "none", stroke: "rgba(255,255,255,0.05)", strokeWidth: "0.5" }))),
                React.createElement("rect", { width: "100%", height: "100%", fill: "url(#grid)" }),
                React.createElement("line", { x1: padding, y1: padding, x2: chartWidth - padding, y2: padding, stroke: "rgba(255,255,255,0.1)", strokeWidth: "1", strokeDasharray: "2,2" }),
                React.createElement("line", { x1: padding, y1: chartHeight / 2, x2: chartWidth - padding, y2: chartHeight / 2, stroke: "rgba(255,255,255,0.08)", strokeWidth: "1", strokeDasharray: "2,2" }),
                React.createElement("line", { x1: padding, y1: chartHeight - padding, x2: chartWidth - padding, y2: chartHeight - padding, stroke: "rgba(255,255,255,0.1)", strokeWidth: "1", strokeDasharray: "2,2" }),
                React.createElement("path", { d: areaPath, fill: `url(#chartGradient-${color.replace('#', '')})`, className: "iaq-chart-area" }),
                React.createElement("path", { d: smoothPath, fill: "none", stroke: color, strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", filter: `url(#glow-${color.replace('#', '')})`, className: "iaq-chart-line" }),
                intersectionPoint && (React.createElement("g", { className: "iaq-threshold-indicator" },
                    React.createElement("line", { x1: intersectionPoint.x, y1: intersectionPoint.y, x2: intersectionPoint.x, y2: chartHeight - padding, stroke: "#ff4444", strokeWidth: "2", strokeDasharray: "4,3" }),
                    React.createElement("circle", { cx: intersectionPoint.x, cy: intersectionPoint.y, r: "4", fill: "#ff4444", stroke: "white", strokeWidth: "2" }))),
                dataPoints.map((point, index) => (React.createElement("g", { key: index, onMouseEnter: () => handlePointMouseEnter(index, point), onMouseLeave: () => setActivePoint(null) },
                    React.createElement("circle", { cx: point.x, cy: point.y, r: "7", fill: color, opacity: "0.2" }),
                    React.createElement("circle", { cx: point.x, cy: point.y, r: "5", fill: color, stroke: "white", strokeWidth: "2", filter: `url(#shadow-${color.replace('#', '')})`, style: {
                            transition: 'transform 0.2s',
                            transform: (activePoint === null || activePoint === void 0 ? void 0 : activePoint.index) === index ? 'scale(1.2)' : 'scale(1)'
                        } }),
                    React.createElement("circle", { cx: point.x, cy: point.y, r: "2", fill: "white", opacity: "0.8" }))))),
            React.createElement("div", { className: "iaq-chart-days" }, days.map(day => (React.createElement("span", { key: day, className: "iaq-chart-day" }, day)))))));
};
const MetricCard = ({ title, status, value, unit, dialValue, maxDialValue, chartData, chartMax, threshold, statusColor }) => {
    const getStatusColorValue = (color) => {
        switch (color) {
            case 'good': return '#4caf50';
            case 'warning': return '#ff9800';
            case 'danger': return '#f44336';
            default: return '#64b5f6';
        }
    };
    return (React.createElement("div", { className: `iaq-metric-card-new ${statusColor}` },
        React.createElement("div", { className: "iaq-metric-layout" },
            React.createElement("div", { className: "iaq-metric-left" },
                React.createElement("div", { className: "iaq-metric-title-new" }, title),
                React.createElement("div", { className: "iaq-metric-status-new" },
                    React.createElement("div", { className: `iaq-status-dot ${statusColor}` }),
                    React.createElement("span", null, status)),
                React.createElement("div", { className: "iaq-metric-value-new" },
                    React.createElement("span", { className: "iaq-value-number" }, value),
                    React.createElement("span", { className: "iaq-value-unit" }, unit))),
            React.createElement("div", { className: "iaq-metric-center" },
                React.createElement(RadialDial, { value: dialValue, maxValue: maxDialValue, color: getStatusColorValue(statusColor) })),
            React.createElement("div", { className: "iaq-metric-right" },
                React.createElement(LineChart, { data: chartData, maxValue: chartMax, color: getStatusColorValue(statusColor), threshold: threshold })))));
};
const AQICompositeScore = ({ aqiData }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });
    const dialRef = React.useRef(null);
    const percentage = aqiData.score;
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const getStatusColorValue = (color) => {
        switch (color) {
            case 'good': return '#4caf50';
            case 'warning': return '#ff9800';
            case 'danger': return '#f44336';
            default: return '#64b5f6';
        }
    };
    const handleMouseEnter = (e) => {
        var _a;
        const rect = (_a = dialRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (rect) {
            setTooltipPosition({
                x: rect.left + rect.width / 2,
                y: rect.top - 10
            });
            setShowTooltip(true);
        }
    };
    return (React.createElement("div", { className: "iaq-aqi-composite" },
        React.createElement("div", { className: "iaq-aqi-header" },
            React.createElement("div", { className: "iaq-aqi-title" },
                React.createElement("h3", null, "Indoor Air Quality Composite Score (AQI)"),
                React.createElement("p", { className: "iaq-aqi-helper" }, "Provides overview of average air quality across the site")),
            React.createElement("div", { className: "iaq-aqi-status" },
                React.createElement("div", { className: `iaq-status-dot ${aqiData.statusColor}` }),
                React.createElement("span", null, aqiData.status))),
        React.createElement("div", { className: "iaq-aqi-content" },
            React.createElement("div", { className: "iaq-aqi-main-dial", ref: dialRef, onMouseEnter: handleMouseEnter, onMouseLeave: () => setShowTooltip(false) },
                React.createElement(Tooltip, { show: showTooltip, content: `${percentage}% AQI Score`, x: tooltipPosition.x, y: tooltipPosition.y }),
                React.createElement("svg", { width: "140", height: "140", viewBox: "0 0 140 140" },
                    React.createElement("circle", { cx: "70", cy: "70", r: radius, fill: "none", stroke: "rgba(255,255,255,0.1)", strokeWidth: "12" }),
                    React.createElement("circle", { cx: "70", cy: "70", r: radius, fill: "none", stroke: getStatusColorValue(aqiData.statusColor), strokeWidth: "12", strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, strokeLinecap: "round", transform: "rotate(-90 70 70)", style: {
                            transition: 'stroke-dashoffset 0.8s ease-in-out'
                        } })),
                React.createElement("div", { className: "iaq-aqi-score" },
                    React.createElement("div", { className: "iaq-aqi-number" }, percentage),
                    React.createElement("div", { className: "iaq-aqi-label" }, "AQI"))),
            React.createElement("div", { className: "iaq-aqi-breakdown" },
                React.createElement("div", { className: "iaq-breakdown-title" }, "Pollutant Scores"),
                React.createElement("div", { className: "iaq-breakdown-items" },
                    React.createElement("div", { className: "iaq-breakdown-item" },
                        React.createElement("div", { className: "iaq-breakdown-label" }, "PM\u2082.\u2085"),
                        React.createElement("div", { className: "iaq-breakdown-bar" },
                            React.createElement("div", { className: "iaq-breakdown-fill", style: {
                                    width: `${aqiData.pm25Score}%`,
                                    backgroundColor: getStatusColorValue(aqiData.pm25Score > 60 ? 'danger' : aqiData.pm25Score > 40 ? 'warning' : 'good')
                                } })),
                        React.createElement("div", { className: "iaq-breakdown-value" }, aqiData.pm25Score)),
                    React.createElement("div", { className: "iaq-breakdown-item" },
                        React.createElement("div", { className: "iaq-breakdown-label" }, "CO\u2082"),
                        React.createElement("div", { className: "iaq-breakdown-bar" },
                            React.createElement("div", { className: "iaq-breakdown-fill", style: {
                                    width: `${aqiData.co2Score}%`,
                                    backgroundColor: getStatusColorValue(aqiData.co2Score > 60 ? 'danger' : aqiData.co2Score > 40 ? 'warning' : 'good')
                                } })),
                        React.createElement("div", { className: "iaq-breakdown-value" }, aqiData.co2Score)),
                    React.createElement("div", { className: "iaq-breakdown-item" },
                        React.createElement("div", { className: "iaq-breakdown-label" }, "TVOC"),
                        React.createElement("div", { className: "iaq-breakdown-bar" },
                            React.createElement("div", { className: "iaq-breakdown-fill", style: {
                                    width: `${aqiData.tvocScore}%`,
                                    backgroundColor: getStatusColorValue(aqiData.tvocScore > 60 ? 'danger' : aqiData.tvocScore > 40 ? 'warning' : 'good')
                                } })),
                        React.createElement("div", { className: "iaq-breakdown-value" }, aqiData.tvocScore)))))));
};
// Section title with lines
const SectionTitle = ({ title }) => (React.createElement("div", { className: "iaq-section-title" },
    React.createElement("span", { className: "iaq-section-line" }),
    React.createElement("span", { className: "iaq-section-text" }, title),
    React.createElement("span", { className: "iaq-section-line" })));
const Iaq_right_panelWidget = (props) => {
    const { locationkey } = props;
    const airQualityData = getAirQualityData(locationkey);
    // Calculate AQI composite score from PM2.5, CO2, and TVOC values
    const aqiData = calculateAQI(parseFloat(airQualityData.pm25Safety.value), parseFloat(airQualityData.co2Exposure.value), parseFloat(airQualityData.tvocComfort.value));
    return (React.createElement("div", { className: "iaq-right-panel-container" },
        React.createElement("div", { className: "iaq-right-panel-content" },
            React.createElement(SectionTitle, { title: "AIR QUALITY OVERVIEW" }),
            React.createElement(AQICompositeScore, { aqiData: aqiData }),
            React.createElement(SectionTitle, { title: "DETAILED METRICS" }),
            React.createElement("div", { className: "iaq-metrics-grid" },
                React.createElement(MetricCard, Object.assign({}, airQualityData.co2Exposure)),
                React.createElement(MetricCard, Object.assign({}, airQualityData.tvocComfort)),
                React.createElement(MetricCard, Object.assign({}, airQualityData.pm25Safety)),
                React.createElement(MetricCard, Object.assign({}, airQualityData.airExchange)),
                React.createElement(MetricCard, Object.assign({}, airQualityData.thermalComfort))))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "iaq_right_panel",
    widget: Iaq_right_panelWidget,
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
    id: "iaq_right_panel",
    label: "Iaq_right_panel",
    // click: () => alert("Hello"),
    component: Iaq_right_panelWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"iaq_right_panel",
   component: Iaq_right_panelWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "iaq_right_panel", // use all lowercase letters
    name: 'Iaq_right_panel',
    description: 'Tempalte Description',
    template: Iaq_right_panelWidget,
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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

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