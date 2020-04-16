"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/slider/style/css");

var _slider = _interopRequireDefault(require("antd/lib/slider"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/select/style/css");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _ColorPicker = _interopRequireDefault(require("../../../ColorPicker"));

function _default(props) {
  var _props$border = props.border,
      border = _props$border === void 0 ? {} : _props$border,
      setBorder = props.setBorder;
  var _border$width = border.width,
      width = _border$width === void 0 ? 0 : _border$width,
      style = border.style,
      color = border.color,
      _border$radius = border.radius,
      radius = _border$radius === void 0 ? 0 : _border$radius;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate-container"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u8FB9\u6846\u6837\u5F0F"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 16
  }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
    value: style,
    onChange: setBorder('style')
  }, /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
    value: "solid"
  }, "\u76F4\u7EBF"), /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
    value: "dashed"
  }, "\u865A\u7EBF")))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u8FB9\u6846\u989C\u8272"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 16
  }, /*#__PURE__*/_react["default"].createElement(_ColorPicker["default"], {
    color: color,
    onChange: setBorder('color')
  }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u8FB9\u6846\u5C3A\u5BF8"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
    min: 0,
    max: 30,
    onChange: setBorder('width'),
    value: width
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: width,
    onChange: setBorder('width')
  }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u8FB9\u6846\u5F27\u5EA6"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
    min: 0,
    max: 100,
    onChange: setBorder('radius'),
    value: radius
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: radius,
    onChange: setBorder('radius')
  }))));
}