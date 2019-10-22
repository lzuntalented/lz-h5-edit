import Input from '../components/Input';
import Picture from '../components/Picture';
import QQVideo from '../components/QQVideo';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO } from './constants';

const map = {
  [COMPONENT_TYPE_TEXT]: Input,
  [COMPONENT_TYPE_PICTURE]: Picture,
  [COMPONENT_TYPE_QQ_VIDEO]: QQVideo,
};

export function getComponentEditMap(key) {
  return map[key].edit;
}

export function getComponentRenderMap(key) {
  return map[key].render;
}

export function getComponentStyleMap(key) {
  return map[key].style;
}
