"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUploadProps = getUploadProps;
exports["default"] = void 0;

function getUploadProps() {
  var props = {
    name: 'upFile',
    accept: 'image/*',
    action: "".concat(getUrlPrefix()).concat(apiConfig.file.upload),
    showUploadList: false // withCredentials: true,

  };
  return props;
}

var _default = function _default() {};

exports["default"] = _default;