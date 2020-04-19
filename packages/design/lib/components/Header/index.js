"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _header = _interopRequireDefault(require("./header"));

var _consumer = _interopRequireDefault(require("../../context/consumer"));

/* eslint-disable jsx-a11y/iframe-has-title */
function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(_consumer["default"], null, /*#__PURE__*/_react["default"].createElement(_header["default"], props));
}