"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Map = _interopRequireDefault(require("../components/Map"));

function BDMap(props) {
  var address = props.address,
      style = props.style;
  var mapStyle = Object.assign({
    width: '100%'
  }, style);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: mapStyle
  }, /*#__PURE__*/_react["default"].createElement(_Map["default"], {
    address: address
  }));
}

BDMap.prototype.propTypes = {
  address: _propTypes["default"].string,
  style: _propTypes["default"].object
};
BDMap.prototype.defaultProps = {
  address: '',
  style: {}
};
var _default = BDMap;
exports["default"] = _default;