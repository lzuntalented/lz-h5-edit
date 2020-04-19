"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Preview;

require("antd/lib/drawer/style/css");

var _drawer = _interopRequireDefault(require("antd/lib/drawer"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _preview = _interopRequireDefault(require("@lzshow/preview"));

var _constants = require("@lzshow/constants");

var _content = _interopRequireDefault(require("./content"));

var _consumer = _interopRequireDefault(require("../../context/consumer"));

var _LocalStorage = _interopRequireDefault(require("../../utils/LocalStorage"));

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mLzLocalStorage = new _LocalStorage["default"](_constants.LOCALSTORAGE_PREVIEW_NAMESPACE);

function getTop() {
  var height = window.innerHeight;

  if (height > _utils.winSize.height) {
    return (height - _utils.winSize.height) / 2;
  }

  return 0;
}

function Preview(props) {
  var visible = props.visible,
      hidePreview = props.hidePreview;
  var state = JSON.parse(mLzLocalStorage.get(_constants.LOCALSTORAGE_PREVIEW_CHACHE));
  var content = (0, _utils.translateShowDataFromStore)(state);
  var total = content && content.list && content.list.length || 0;
  var ref = (0, _react.useRef)();

  var prevPage = function prevPage() {
    var current = ref.current;
    current.prev();
  };

  var nextPage = function nextPage() {
    var current = ref.current;
    current.next();
  };

  return /*#__PURE__*/_react["default"].createElement(_drawer["default"], {
    title: "\u4F5C\u54C1\u4FE1\u606F",
    placement: "right",
    visible: visible,
    getContainer: false,
    destroyOnClose: true,
    className: "drawer-preview",
    onClose: hidePreview,
    closable: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "realperview-container",
    style: _objectSpread({}, _utils.winSize)
  }, /*#__PURE__*/_react["default"].createElement(_preview["default"], {
    data: content,
    ref: ref,
    marginTop: getTop()
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "toggle-page"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: prevPage
  }, "\u4E0A\u4E00\u9875"), /*#__PURE__*/_react["default"].createElement("p", null), content && content.list && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, "\u5171", total, "\u9875"), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: nextPage
  }, "\u4E0B\u4E00\u9875")))), /*#__PURE__*/_react["default"].createElement(_consumer["default"], null, /*#__PURE__*/_react["default"].createElement(_content["default"], null)));
}