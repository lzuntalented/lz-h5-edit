"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _default(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_index["default"].Consumer, null, function (value) {
    return _react["default"].cloneElement(children, {
      config: value
    });
  }); // return props => (
  //   <Context.Consumer>
  //     {value => <Comp config={value} {...props} />}
  //   </Context.Consumer>
  // );
}