"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderCollapse;

require("antd/lib/collapse/style/css");

var _collapse = _interopRequireDefault(require("antd/lib/collapse"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _TwoInput = _interopRequireDefault(require("../TwoInput"));

function RenderCollapse(props) {
  var data = props.data,
      _onChange = props.onChange,
      label = props.label,
      attrs = props.attrs;
  return /*#__PURE__*/_react["default"].createElement(_collapse["default"], null, /*#__PURE__*/_react["default"].createElement(_collapse["default"].Panel, {
    header: "\u8FB9\u6846",
    key: "1"
  }, /*#__PURE__*/_react["default"].createElement(_TwoInput["default"], {
    attrs: attrs
  }), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, label), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 16
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: data,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  })))));
}