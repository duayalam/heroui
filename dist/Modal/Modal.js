"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTitle = exports.ModalFooter = exports.Modal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ = require("./..");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ModalTitle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
    className: "text-xl font-semibold text-gray-800 dark:text-white",
    children: children
  });
};
exports.ModalTitle = ModalTitle;
const ModalFooter = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "mt-6 flex justify-end space-x-2 dark:text-white",
    children: children
  });
};
exports.ModalFooter = ModalFooter;
const Modal = _ref3 => {
  let {
    onClose,
    isOpen,
    children
  } = _ref3;
  const [isAnimating, setIsAnimating] = (0, _react.useState)(false);
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (isOpen) {
      setIsVisible(true);
      // Pequeño timeout para asegurar que la animación se ejecute
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    } else {
      setIsAnimating(false);
      // Esperar a que termine la animación antes de ocultar
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  if (!isVisible) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: `fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isAnimating ? "bg-black bg-opacity-50 backdrop-blur-md" : "bg-black bg-opacity-0 backdrop-blur-none"}`,
    onClick: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: `bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out max-w-md w-full p-6 ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
      onClick: e => e.stopPropagation(),
      children: children
    })
  });
};
exports.Modal = Modal;