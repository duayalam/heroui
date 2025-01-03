"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRipples = _interopRequireDefault(require("react-ripples"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = _ref => {
  let {
    color,
    size,
    className,
    ...props
  } = _ref;
  var buttonDefault = "rounded m-1 ";

  //COLORES
  var colors = {
    white: "bg-gray-200 text-gray-600",
    dark: "bg-gray-800 text-white",
    blue: "bg-blue-600 text-white",
    red: "bg-red-500 text-white",
    green: "bg-green-500 text-white"
  };
  //TAMAÑOS
  var sizes = {
    sm: "px-3 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3"
  };
  if (color) {
    buttonDefault += colors[color] + " ";
  } else {
    buttonDefault += " ";
  }
  if (size) {
    buttonDefault += sizes[size] + " ";
  } else {
    buttonDefault += sizes.md + " ";
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRipples.default, {
    className: `rounded backdrop-opacity-5`,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: `${buttonDefault} ${className ? className : ''}`,
      ...props,
      children: props.children
    })
  });
};
var _default = exports.default = Button;