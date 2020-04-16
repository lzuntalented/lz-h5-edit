"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function InputStyle(props) {
  var _props$editAble = props.editAble,
      editAble = _props$editAble === void 0 ? false : _props$editAble,
      text = props.text,
      bgColor = props.bgColor,
      others = (0, _objectWithoutProperties2["default"])(props, ["editAble", "text", "bgColor"]);
  var inputProps = {};

  if (editAble) {
    inputProps.value = text;
  } else {
    inputProps.defaultValue = text;
  }

  return /*#__PURE__*/_react["default"].createElement(_input["default"], (0, _extends2["default"])({
    style: _objectSpread({
      width: '100%',
      minHeight: '40px',
      padding: 10,
      background: bgColor
    }, others)
  }, inputProps));
}

InputStyle.prototype.propTypes = {
  text: _propTypes["default"].string,
  bgColor: _propTypes["default"].string,
  editAble: _propTypes["default"].bool
};
InputStyle.prototype.defaultProps = {
  text: '',
  bgColor: '',
  editAble: false
};
var _default = InputStyle;
exports["default"] = _default;