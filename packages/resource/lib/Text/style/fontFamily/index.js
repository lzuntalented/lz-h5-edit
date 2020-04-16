"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StyleFontFamily;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/select/style/css");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _ModalContainer = _interopRequireDefault(require("../../../components/ModalContainer"));

var _fontFamily = _interopRequireDefault(require("./fontFamily"));

require("./index.scss");

var _config = require("../../../core/config");

function onFontChange(onChange, setVisible) {
  return function (e) {
    if (e === 'more') {
      setVisible(true);
    } else if (e === '') {
      onChange('');
    }
  };
}

function StyleFontFamily(props) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var data = props.data,
      onChange = props.onChange,
      attrs = props.attrs,
      label = props.label;
  var fonts = (0, _config.getFontFamilyOptions)();
  var curentFont = fonts.find(function (it) {
    return it.key === data;
  });
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
    style: {
      width: '100%'
    },
    onChange: onFontChange(onChange, setVisible)
  }, /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
    value: ""
  }, "\u9ED8\u8BA4\u5B57\u4F53"), curentFont && /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
    value: curentFont.key
  }, curentFont.text), /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
    value: "more"
  }, "\u66F4\u591A\u5B57\u4F53"))), /*#__PURE__*/_react["default"].createElement(_ModalContainer["default"], {
    className: "modal-resource-text-font-family",
    onCancel: function onCancel() {
      return setVisible(false);
    },
    maskClosable: true,
    visible: visible,
    title: "\u5B57\u4F53\u5E93",
    options: [{
      title: '字体列表',
      comp: /*#__PURE__*/_react["default"].createElement(_fontFamily["default"], {
        onChange: onChange,
        setVisible: setVisible
      })
    }]
  }));
}