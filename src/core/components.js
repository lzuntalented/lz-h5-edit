import Input from '../components/Input';
import Picture from '../components/Picture';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from './constants';

export default {
  [COMPONENT_TYPE_TEXT]: Input,
  [COMPONENT_TYPE_PICTURE]: Picture,
};
