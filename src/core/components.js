import Input from '../components/Input';
import Picture from '../components/Picture';
import QQVideo from '../components/QQVideo';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO } from './constants';

export default {
  [COMPONENT_TYPE_TEXT]: Input,
  [COMPONENT_TYPE_PICTURE]: Picture,
  [COMPONENT_TYPE_QQ_VIDEO]: QQVideo,
};
