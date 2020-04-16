"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderStyle;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ImageModal = _interopRequireDefault(require("../../../../../ImageModal"));

function RenderStyle(props) {
  var data = props.data,
      onChange = props.onChange,
      label = props.label,
      dispatch = props.dispatch;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var showModal = (0, _react.useCallback)(function () {
    setVisible(true);
  });
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    className: "set-attr-picture",
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 12
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-blank"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: data,
    alt: "",
    width: "100%"
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 12
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: showModal
  }, "\u66F4\u6362\u56FE\u7247")), /*#__PURE__*/_react["default"].createElement(_ImageModal["default"], {
    addMode: false,
    onVisibleChange: setVisible,
    visible: visible,
    dispatch: dispatch
  }));
}