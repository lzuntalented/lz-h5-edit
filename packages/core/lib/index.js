"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentEditMap = getComponentEditMap;
exports.getComponentRenderMap = getComponentRenderMap;
exports.getComponentStyleMap = getComponentStyleMap;
exports.getComponentDefaultSize = getComponentDefaultSize;
exports.getComponentDefaultAttrs = getComponentDefaultAttrs;
exports.getComponentDefaultName = getComponentDefaultName;

var _resource = _interopRequireDefault(require("@lzshow/resource"));

var _utils = require("@lzshow/utils");

var _EditItem = _interopRequireDefault(require("./components/EditItem"));

var _render = _interopRequireDefault(require("./components/EditItem/render"));

var _constants = require("./constants");

var Text = _resource["default"].Text,
    Picture = _resource["default"].Picture,
    QQVideo = _resource["default"].QQVideo,
    Input = _resource["default"].Input,
    Button = _resource["default"].Button,
    ArtInput = _resource["default"].ArtInput,
    BDMap = _resource["default"].BDMap,
    Shape = _resource["default"].Shape,
    Video = _resource["default"].Video,
    TypedText = _resource["default"].TypedText,
    ArtShadow = _resource["default"].ArtShadow,
    ArtSolid = _resource["default"].ArtSolid,
    ArtBorder = _resource["default"].ArtBorder;
var map = {// [COMPONENT_TYPE_TEXT]: Text,
  // [COMPONENT_TYPE_PICTURE]: Picture,
  // [COMPONENT_TYPE_QQ_VIDEO]: QQVideo,
  // [COMPONENT_TYPE_INPUT]: Input,
  // [COMPONENT_TYPE_BUTTON]: Button,
  // [COMPONENT_TYPE_ART_INPUT]: ArtInput,
  // [COMPONENT_TYPE_MAP]: BDMap,
};
/**
 * 注册组件
 * @param {*} key
 * @param {*} obj
 */

function registerComponent(key, obj) {
  var render = obj.render,
      edit = obj.edit,
      style = obj.style,
      size = obj.size,
      name = obj.name;
  map[key] = {
    edit: (0, _EditItem["default"])(edit),
    render: (0, _render["default"])(render),
    style: style,
    size: size,
    attrs: (0, _utils.getDefaultAttrs)(style),
    name: name
  };
}

registerComponent(_constants.COMPONENT_TYPE_TEXT, Text);
registerComponent(_constants.COMPONENT_TYPE_PICTURE, Picture);
registerComponent(_constants.COMPONENT_TYPE_QQ_VIDEO, QQVideo);
registerComponent(_constants.COMPONENT_TYPE_INPUT, Input);
registerComponent(_constants.COMPONENT_TYPE_BUTTON, Button);
registerComponent(_constants.COMPONENT_TYPE_ART_INPUT, ArtInput);
registerComponent(_constants.COMPONENT_TYPE_MAP, BDMap);
registerComponent(_constants.COMPONENT_TYPE_SHAPE, Shape);
registerComponent(_constants.COMPONENT_TYPE_VIDEO, Video);
registerComponent(_constants.COMPONENT_TYPE_TEXT_TYPED, TypedText);
registerComponent(_constants.COMPONENT_TYPE_ART_SHADOW, ArtShadow);
registerComponent(_constants.COMPONENT_TYPE_ART_SOLID, ArtSolid);
registerComponent(_constants.COMPONENT_TYPE_ART_BORDER, ArtBorder);

function getComponentEditMap(key) {
  var obj = map[key];
  if (obj) return obj.edit;
  return null;
}

function getComponentRenderMap(key) {
  var obj = map[key];
  if (obj) return obj.render;
  return null;
}

function getComponentStyleMap(key) {
  var obj = map[key];
  if (obj) return obj.style;
  return null;
}

function getComponentDefaultSize(key) {
  var obj = map[key];
  var result = {};
  if (obj && obj.attrs) result = obj.size;
  return result;
}

function getComponentDefaultAttrs(key) {
  var obj = map[key];
  var result = {};
  if (obj && obj.size) result = obj.attrs;
  return result;
}

function getComponentDefaultName(key) {
  var obj = map[key];
  if (obj && obj.name) return obj.name;
  return '元素';
}