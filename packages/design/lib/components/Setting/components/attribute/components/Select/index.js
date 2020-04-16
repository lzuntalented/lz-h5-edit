"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderStyle;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/select/style/css");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

function RenderStyle(props) {
  var data = props.data,
      onChange = props.onChange,
      attrs = props.attrs,
      label = props.label;

  var _ref = attrs || {},
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;

  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, label), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 16
  }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
    value: data,
    onChange: onChange,
    style: {
      width: '100%'
    }
  }, options.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
      key: it.key
    }, it.text);
  }))));
}