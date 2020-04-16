"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderStyle;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

function RenderStyle(props) {
  var data = props.data,
      _onChange2 = props.onChange,
      label = props.label,
      attrs = props.attrs;
  var left = attrs.left,
      right = attrs.right,
      leftText = attrs.leftText,
      rightText = attrs.rightText;
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, label), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: data[left],
    onChange: function onChange(e) {
      return _onChange2((0, _defineProperty2["default"])({}, left, e.target.value));
    }
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: data[right],
    onChange: function onChange(e) {
      return _onChange2((0, _defineProperty2["default"])({}, right, e.target.value));
    }
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8,
    className: "text-center"
  }, leftText), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8,
    className: "text-center"
  }, rightText));
}