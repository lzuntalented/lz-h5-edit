"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function getCurrentAnimate(list, emptyAnimates) {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      animateIndex = _useState2[0],
      setanimateIndex = _useState2[1];

  var animate = list[animateIndex] || {};

  function onAnimationEnd() {
    if (animateIndex >= list.length - 1) {
      if (emptyAnimates) emptyAnimates();
      return;
    }

    setanimateIndex(animateIndex + 1);
  }

  return {
    onAnimationEnd: onAnimationEnd,
    animate: animate,
    setanimateIndex: setanimateIndex
  };
}

function PreviewAnimation(props) {
  var children = props.children,
      list = props.list,
      style = props.style,
      emptyAnimates = props.emptyAnimates,
      others = (0, _objectWithoutProperties2["default"])(props, ["children", "list", "style", "emptyAnimates"]);

  var _getCurrentAnimate = getCurrentAnimate(list, emptyAnimates),
      animate = _getCurrentAnimate.animate,
      onAnimationEnd = _getCurrentAnimate.onAnimationEnd,
      setanimateIndex = _getCurrentAnimate.setanimateIndex;

  (0, _react.useEffect)(function () {
    setanimateIndex(0);
  }, [list]);

  var _ref = animate || {},
      name = _ref.name,
      duration = _ref.duration,
      delay = _ref.delay,
      repeat = _ref.repeat;

  var animateStyle = style;

  if (name) {
    animateStyle = Object.assign({
      animation: "".concat(duration, "s ease ").concat(delay, "s ").concat(repeat, " normal both running ").concat(name)
    }, style);
  }

  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, others, {
    style: animateStyle,
    onAnimationEnd: onAnimationEnd
  }), children);
}

var _default = PreviewAnimation;
exports["default"] = _default;