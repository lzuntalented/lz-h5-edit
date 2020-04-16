"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isObject = exports.isArray = exports.isUndefined = exports.isFunction = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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