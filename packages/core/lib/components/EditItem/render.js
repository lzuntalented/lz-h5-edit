"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditItemRender;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreviewAnimation = _interopRequireDefault(require("../PreviewAnimation"));

require("./render.scss");

function EditItemRender(Component) {
  function Layout(props) {
    var rect = props.rect,
        attrs = props.attrs,
        animate = props.animate,
        _props$border = props.border,
        border = _props$border === void 0 ? {} : _props$border,
        animates = props.animates,
        show = props.show;
    var width = rect.width,
        left = rect.left,
        top = rect.top,
        height = rect.height,
        rotate = rect.rotate;
    var _animate$name = animate.name,
        name = _animate$name === void 0 ? '' : _animate$name,
        duration = animate.duration,
        delay = animate.delay,
        repeat = animate.repeat;
    var cls = "content-hide-container ".concat(animate || '');
    var animateStyle = {
      // animation: `${duration}s ease ${delay}s ${repeat} normal both running ${name}`,
      borderStyle: border.style,
      borderWidth: border.width,
      borderColor: border.color,
      borderRadius: border.radius
    };
    var animateList = [animate];

    if (animates && animates.length > 0) {
      animateList = animates;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "render-item",
      style: {
        width: width,
        left: left,
        top: top,
        height: height,
        transform: "rotate(".concat(rotate, "deg)")
      }
    }, /*#__PURE__*/_react["default"].createElement(_PreviewAnimation["default"], {
      className: cls,
      list: animateList,
      style: animateStyle
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "content-container"
    }, /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
      showStatus: show
    }, attrs)))));
  }

  Layout.prototype.propTypes = {
    rect: _propTypes["default"].object,
    attrs: _propTypes["default"].object,
    animate: _propTypes["default"].object,
    animates: _propTypes["default"].object,
    border: _propTypes["default"].object
  };
  Layout.prototype.defaultProps = {
    rect: {},
    attrs: {},
    animate: {},
    border: {},
    animates: {}
  };
  return Layout;
}