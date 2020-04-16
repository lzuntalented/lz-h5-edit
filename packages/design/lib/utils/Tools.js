"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultAttrs = getDefaultAttrs;
exports.isString = exports.isObject = exports.isArray = exports.isUndefined = exports.isFunction = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _constants = require("../core/constants");

function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === "[object ".concat(type, "]");
  };
}

function isTypeOf(type) {
  return function (obj) {
    return (0, _typeof2["default"])(obj) === type;
  };
}

var isFunction = isType('Function');
exports.isFunction = isFunction;
var isUndefined = isTypeOf('Undefined');
exports.isUndefined = isUndefined;
var isArray = Array.isArray || isType('Array');
exports.isArray = isArray;
var isObject = isType('Object');
exports.isObject = isObject;
var isString = isTypeOf('string');
exports.isString = isString;

function getDefaultAttrs(config) {
  var result = {};
  config.forEach(function (_ref) {
    var key = _ref.key,
        initValue = _ref.initValue,
        renderType = _ref.renderType,
        children = _ref.children;

    if (renderType === _constants.STYLE_RENDER_TYPE_COLLAPSE) {
      Object.assign(result, getDefaultAttrs(children));
    } else if (isString(key)) {
      result[key] = initValue;
    } else {
      Object.assign(result, initValue);
    }
  });
  return result;
}