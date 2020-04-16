"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _default(Comp) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(_index["default"].Consumer, null, function (value) {
      return /*#__PURE__*/_react["default"].createElement(Comp, (0, _extends2["default"])({
        config: value
      }, props));
    });
  };
}