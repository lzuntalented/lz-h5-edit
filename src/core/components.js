import Text from '../resource/Text';
import Picture from '../resource/Picture';
import QQVideo from '../resource/QQVideo';
import Input from '../resource/Input';
import Button from '../resource/Button';
import ArtInput from '../resource/ArtInput';
import BDMap from '../resource/BDMap';
import Shape from '../resource/Shape';

import EditItem from '../components/EditItem';
import RenderItem from '../components/EditItem/render';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO,
  COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_ART_INPUT, COMPONENT_TYPE_MAP, COMPONENT_TYPE_SHAPE,
} from './constants';

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
  const { render, edit, style } = obj;
  map[key] = {
    edit: EditItem(edit, style),
    render: RenderItem(render),
    style,
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
