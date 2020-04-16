"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderStyle;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _ColorPicker = _interopRequireDefault(require("../../../../../ColorPicker"));

function RenderStyle(props) {
  var data = props.data,
      onChange = props.onChange,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, label), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 16
  }, /*#__PURE__*/_react["default"].createElement(_ColorPicker["default"], {
    color: data,
    onChange: onChange
  })));
}