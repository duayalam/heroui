"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRipples = _interopRequireDefault(require("react-ripples"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Alert = _ref => {
  let {
    className,
    type,
    isOpen,
    ...prompt
  } = _ref;
  const [isVisible, setIsVisible] = (0, _react.useState)(true);
  const [isOpenAlert, setIsOpen] = (0, _react.useState)(true);
  const [isAnimating, setIsAnimating] = (0, _react.useState)(false);
  const types = {
    dark: "bg-gray-800",
    black: "bg-black",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    gray: "bg-gray-500",
    teal: "bg-teal-500",
    indigo: "bg-indigo-500",
    lime: "bg-lime-500",
    emerald: "bg-emerald-500",
    fuchsia: "bg-fuchsia-500",
    violet: "bg-violet-500",
    sky: "bg-sky-500"
  };
  const closeAlert = () => {
    setIsOpen(false);
  };
  (0, _react.useEffect)(() => {
    if (isOpenAlert && isOpen) {
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
  }, [isOpenAlert, isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [isVisible && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: `p-4 text-white rounded-md m-2 ${type && types[type] ? types[type] : ''} ${className} transition-all duration-300 ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
      ...prompt,
      children: [prompt.showCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRipples.default, {
        className: "float-end w-10",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: " w-10 text-white bg-[rgba(0,0,0,0.1)]  rounded-md p-1 text-sm ",
          onClick: () => closeAlert(),
          children: "X"
        })
      }), prompt.children]
    }), " "]
  });
};
var _default = exports.default = Alert;