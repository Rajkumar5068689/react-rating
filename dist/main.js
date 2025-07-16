"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * CustomRating - Number-based rating component for priority or task scoring
 *
 * Props:
 * - max: number (default 10)
 * - value: number (selected value)
 * - onChange: function (callback with (value, name))
 * - name: string (input name)
 * - readonly: boolean (default false)
 * - colors: array of background colors per index
 * - textColor: string (default "#fff")
 * - buttonStyle: object (custom button style)
 * - wrapperStyle: object (custom wrapper style)
 * - scrollable: boolean (default true)
 */
const CustomRating = _ref => {
  let {
    max = 10,
    value = 0,
    name = "rating",
    onChange,
    readonly = false,
    colors = [],
    textColor = "#fff",
    buttonStyle = {},
    wrapperStyle = {},
    scrollable = true
  } = _ref;
  const MAX_SAFE_LIMIT = 200;
  const finalMax = Math.min(Number(max) || 10, MAX_SAFE_LIMIT);
  const [selectedValue, setSelectedValue] = (0, _react.useState)(Number(value));
  (0, _react.useEffect)(() => {
    setSelectedValue(Number(value));
  }, [value]);

  // Generates a color if not defined (for indices beyond colors.length)
  const generateColor = i => {
    const hue = Math.floor(i / finalMax * 120); // Red (0) → Green (120)
    return "hsl(".concat(hue, ", 80%, 60%)");
  };
  const getBackgroundColor = index => colors[index] || generateColor(index);
  const handleClick = rating => {
    if (!readonly) {
      setSelectedValue(rating);
      onChange === null || onChange === void 0 || onChange(rating, name);
    }
  };
  const wrapperBase = scrollable ? styles.scrollWrapper : styles.wrapWrapper;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, wrapperBase), wrapperStyle)
  }, Array.from({
    length: finalMax
  }).map((_, index) => {
    const ratingValue = index + 1;
    const isSelected = selectedValue >= ratingValue;
    return /*#__PURE__*/_react.default.createElement("button", {
      key: ratingValue,
      onClick: () => handleClick(ratingValue),
      disabled: readonly,
      style: _objectSpread(_objectSpread(_objectSpread({}, styles.button), buttonStyle), {}, {
        backgroundColor: isSelected ? getBackgroundColor(index) : "#f0f0f0",
        color: isSelected ? textColor : "#333",
        transform: isSelected ? "scale(1.05)" : "scale(1)",
        boxShadow: isSelected ? "0 4px 8px rgba(0,0,0,0.1)" : "none"
      }),
      "aria-label": "Priority ".concat(ratingValue)
    }, ratingValue);
  }));
};
const styles = {
  scrollWrapper: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
    padding: "12px",
    scrollbarWidth: "thin"
  },
  wrapWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    padding: "12px",
    justifyContent: "center"
  },
  button: {
    minWidth: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out"
  }
};
var _default = exports.default = CustomRating;