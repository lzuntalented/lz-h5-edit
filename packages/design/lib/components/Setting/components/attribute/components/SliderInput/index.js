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

require("antd/lib/slider/style/css");

var _slider = _interopRequireDefault(require("antd/lib/slider"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

function RenderStyle(props) {
  var data = props.data,
      _onChange = props.onChange,
      _props$attrs = props.attrs,
      attrs = _props$attrs === void 0 ? {} : _props$attrs,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, label), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_slider["default"], (0, _extends2["default"])({}, attrs, {
    onChange: _onChange,
    value: data
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: data,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  })));
}