"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BDMapEdit;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BDMap = _interopRequireDefault(require("./BDMap"));

function BDMapEdit(props) {
  var defaultAttrs = props.defaultAttrs,
      others = (0, _objectWithoutProperties2["default"])(props, ["defaultAttrs"]);
  var styleProps = Object.assign({}, defaultAttrs, others);
  return /*#__PURE__*/_react["default"].createElement(_BDMap["default"], styleProps);
}

BDMapEdit.prototype.propTypes = {
  defaultAttrs: _propTypes["default"].object.isRequired
};