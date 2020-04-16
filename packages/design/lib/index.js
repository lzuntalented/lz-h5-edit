"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LzDesign;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _store = _interopRequireDefault(require("./store"));

var _app = _interopRequireDefault(require("./app"));

var _provider = _interopRequireDefault(require("./context/provider"));

require("./style");

function LzDesign(props) {
  var onPublish = props.onPublish,
      libs = props.libs;
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store["default"]
  }, /*#__PURE__*/_react["default"].createElement(_provider["default"], {
    config: {
      onPublish: onPublish,
      libs: libs
    }
  }, /*#__PURE__*/_react["default"].createElement(_app["default"], null)));
}

LzDesign.propTypes = {
  // 发布按钮点击
  onPublish: _propTypes["default"].func.isRequired,
  // 弹出库
  libs: _propTypes["default"].shape({
    // 图片库
    picture: _propTypes["default"].shape({
      // 初始数据
      initData: _propTypes["default"].array.isRequired,
      fetchPromise: _propTypes["default"].func.isRequired,
      upLoadProps: _propTypes["default"].object.isRequired
    }).isRequired
  }).isRequired
};