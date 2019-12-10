import Text from '../resource/Text';
import Picture from '../resource/Picture';
import QQVideo from '../resource/QQVideo';
import Input from '../resource/Input';
import Button from '../resource/Button';
import ArtInput from '../resource/ArtInput';
import BDMap from '../resource/BDMap';
import Shape from '../resource/Shape';
import Video from '../resource/Video';
import TypedText from '../resource/TypedText';

import EditItem from '../components/EditItem';
import RenderItem from '../components/EditItem/render';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO,
  COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_ART_INPUT,
  COMPONENT_TYPE_MAP, COMPONENT_TYPE_SHAPE, COMPONENT_TYPE_VIDEO, COMPONENT_TYPE_TEXT_TYPED,
} from './constants';
import { getDefaultAttrs } from '../utils/Tools';

const map = {
  // [COMPONENT_TYPE_TEXT]: Text,
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
  const {
    render, edit, style, size, name,
  } = obj;
  map[key] = {
    edit: EditItem(edit),
    render: RenderItem(render),
    style,
    size,
    attrs: getDefaultAttrs(style),
    name,
  };
}

registerComponent(COMPONENT_TYPE_TEXT, Text);
registerComponent(COMPONENT_TYPE_PICTURE, Picture);
registerComponent(COMPONENT_TYPE_QQ_VIDEO, QQVideo);
registerComponent(COMPONENT_TYPE_INPUT, Input);
registerComponent(COMPONENT_TYPE_BUTTON, Button);
registerComponent(COMPONENT_TYPE_ART_INPUT, ArtInput);
registerComponent(COMPONENT_TYPE_MAP, BDMap);
registerComponent(COMPONENT_TYPE_SHAPE, Shape);
registerComponent(COMPONENT_TYPE_VIDEO, Video);
registerComponent(COMPONENT_TYPE_TEXT_TYPED, TypedText);

export function getComponentEditMap(key) {
  const obj = map[key];
  if (obj) return obj.edit;
  return null;
}

export function getComponentRenderMap(key) {
  const obj = map[key];
  if (obj) return obj.render;
  return null;
}

export function getComponentStyleMap(key) {
  const obj = map[key];
  if (obj) return obj.style;
  return null;
}

export function getComponentDefaultSize(key) {
  const obj = map[key];
  let result = {};
  if (obj && obj.attrs) result = obj.size;
  return result;
}

export function getComponentDefaultAttrs(key) {
  const obj = map[key];
  let result = {};
  if (obj && obj.size) result = obj.attrs;
  return result;
}

export function getComponentDefaultName(key) {
  const obj = map[key];
  if (obj && obj.name) return obj.name;
  return '元素';
}
