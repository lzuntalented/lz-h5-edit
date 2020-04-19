"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultAttrs = getDefaultAttrs;

var _constants = require("@lzshow/constants");

var _utils = require("@lzshow/utils");

function getDefaultAttrs(config) {
  var result = {};
  config.forEach(function (_ref) {
    var key = _ref.key,
        initValue = _ref.initValue,
        renderType = _ref.renderType,
        children = _ref.children;

    if (renderType === _constants.STYLE_RENDER_TYPE_COLLAPSE) {
      Object.assign(result, getDefaultAttrs(children));
    } else if ((0, _utils.isString)(key)) {
      result[key] = initValue;
    } else {
      Object.assign(result, initValue);
    }
  });
  return result;
}