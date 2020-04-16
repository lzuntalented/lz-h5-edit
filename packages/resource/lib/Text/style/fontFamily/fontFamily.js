"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StyleFontFamily;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _config = require("../../../core/config");

function change(cb) {
  return function () {
    cb();
  };
}

function StyleFontFamily(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      onChange = props.onChange,
      attrs = props.attrs,
      label = props.label,
      setVisible = props.setVisible;

  var _ref = attrs || {},
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;

  var list = (0, _config.getFontFamilyOptions)();
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    gutter: 12
  }, list.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      key: it.text,
      span: 12
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "font-item",
      onClick: function onClick() {
        onChange(it.key);
        setVisible(false);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "font-item-title",
      style: {
        fontFamily: "example-".concat(it.key)
      }
    }, "\u5B57\u4F53\u793A\u4F8B"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "font-item-desc"
    }, it.text)));
  }));
}