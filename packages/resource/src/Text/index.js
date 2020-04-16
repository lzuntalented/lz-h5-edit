import edit from './edit';
import render from './render';
import style, { getConfig } from './config';

export default {
  edit,
  render,
  style,
  size: { height: 40 },
  name: '文本',
  getConfig,
};
