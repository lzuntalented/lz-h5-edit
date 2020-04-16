"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StyleAlign;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

function change(cb) {
  return function () {
    cb();
  };
}

function StyleAlign(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      onChange = props.onChange,
      attrs = props.attrs,
      label = props.label;

  var _ref = attrs || {},
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options;

  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 6,
    className: "quick-btns"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u9760\u5DE6"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "align-left",
    className: data.textAlign === 'left' && 'active',
    onClick: function onClick() {
      return onChange({
        textAlign: 'left'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u9760\u5DE6"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "align-center",
    className: data.textAlign === 'center' && 'active',
    onClick: function onClick() {
      return onChange({
        textAlign: 'center'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u9760\u5DE6"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "align-right",
    className: data.textAlign === 'right' && 'active',
    onClick: function onClick() {
      return onChange({
        textAlign: 'right'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u52A0\u7C97"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "bold",
    className: data.fontWeight === 'bold' && 'active',
    onClick: function onClick() {
      return onChange({
        fontWeight: 'bold'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u659C\u4F53"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "italic",
    className: data.fontStyle === 'italic' && 'active',
    onClick: function onClick() {
      return onChange({
        fontStyle: 'italic'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u4E0B\u5212\u7EBF"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "underline",
    className: data.textDecoration === 'underline' && 'active',
    onClick: function onClick() {
      return onChange({
        textDecoration: 'underline'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u5220\u9664\u7EBF"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "strikethrough",
    className: data.textDecoration === 'line-through' && 'active',
    onClick: function onClick() {
      return onChange({
        textDecoration: 'line-through'
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    placement: "top",
    title: "\u6E05\u9664\u6837\u5F0F"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "delete",
    onClick: function onClick() {
      return onChange({
        textDecoration: '',
        fontStyle: '',
        fontWeight: '',
        textAlign: 'center'
      });
    }
  }))));
}