import Text from '../resource/Text';
import Picture from '../resource/Picture';
import QQVideo from '../resource/QQVideo';
import Input from '../resource/Input';
import Button from '../resource/Button';
import ArtInput from '../resource/ArtInput';
import BDMap from '../resource/BDMap';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO,
  COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_ART_INPUT, COMPONENT_TYPE_MAP,
} from './constants';

const map = {
  [COMPONENT_TYPE_TEXT]: Text,
  [COMPONENT_TYPE_PICTURE]: Picture,
  [COMPONENT_TYPE_QQ_VIDEO]: QQVideo,
  [COMPONENT_TYPE_INPUT]: Input,
  [COMPONENT_TYPE_BUTTON]: Button,
  [COMPONENT_TYPE_ART_INPUT]: ArtInput,
  [COMPONENT_TYPE_MAP]: BDMap,
};

export function getComponentEditMap(key) {
  return map[key].edit;
}

export function getComponentRenderMap(key) {
  return map[key].render;
}

export function getComponentStyleMap(key) {
  if (key) {
    return map[key].style;
  }
  return null;
}
