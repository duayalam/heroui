"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Select = _ref => {
  let {
    options,
    searchable = false,
    placeholder = "Selecciona una opción",
    size,
    ...props
  } = _ref;
  const [searchTerm, setSearchTerm] = (0, _react.useState)("");
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [selected, setSelected] = (0, _react.useState)(null);

  // Filtrar opciones si la búsqueda está habilitada
  const filteredOptions = searchable ? options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase())) : options;

  // Cambiar la opción seleccionada
  const handleSelect = option => {
    setSelected(option);
    setSearchTerm(option.label);
    setIsOpen(false);
  };
  var sizes = {
    sm: "px-3 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3"
  };
  if (size) {
    size = sizes[size];
  } else {
    size = sizes.md;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative w-64",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      value: searchable ? searchTerm : selected?.label || "",
      onChange: searchable ? e => setSearchTerm(e.target.value) : undefined,
      onFocus: () => setIsOpen(true),
      onBlur: () => setIsOpen(false),
      className: `w-full ${size} border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600`,
      placeholder: placeholder,
      readOnly: !searchable // Hace el input solo lectura si no es searchable
    }), isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",
      children: filteredOptions.length > 0 ? filteredOptions.map(option => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: `${size} text-gray-800 cursor-pointer hover:bg-indigo-100`,
        onMouseDown: () => handleSelect(option),
        children: option.label
      }, option.value)) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: `${size} text-gray-500`,
        children: "No hay opciones disponibles"
      })
    })]
  });
};
var _default = exports.default = Select;