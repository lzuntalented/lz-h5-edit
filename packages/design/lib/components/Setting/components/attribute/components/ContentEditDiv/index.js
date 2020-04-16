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
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: '1px solid #d9d9d9',
      borderRadius: 4,
      height: 60,
      overflow: 'hidden',
      padding: '4px 8px'
    },
    contentEditable: true,
    onBlur: function onBlur(e) {
      return onChange(e.target.innerHTML);
    },
    dangerouslySetInnerHTML: {
      __html: data
    }
  })));
}