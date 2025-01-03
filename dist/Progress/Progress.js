"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Progress = _ref => {
  let {
    value,
    color,
    label,
    ...props
  } = _ref;
  // Lista de colores Tailwind de BG y Text
  const listColors = {
    dark: "bg-gray-800 text-white",
    blue: "bg-blue-600 text-white",
    red: "bg-red-600 text-white",
    yellow: "bg-yellow-600 text-white",
    green: "bg-green-600 text-white",
    purple: "bg-purple-600 text-white",
    orange: "bg-orange-600 text-white",
    pink: "bg-pink-600 text-white",
    gray: "bg-gray-600 text-white",
    indigo: "bg-indigo-600 text-white"
  };

  // Estado para manejar el valor con animación
  const [progress, setProgress] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "bg-gray-200 w-auto h-5 mx-3 rounded",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: `${color ? listColors[color] : ''} h-full text-center transition-all duration-500 ease-in-out rounded`,
      style: {
        width: `${progress}%`
      },
      children: label && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "inline-block overflow-hidden whitespace-nowrap text-ellipsis",
        children: [progress, "% ", label]
      })
    })
  });
};
var _default = exports.default = Progress;