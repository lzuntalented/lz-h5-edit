import {
  STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_PICTURE,
} from '@lzshow/constants';

// en, zh, imgRight, imgLeft,
const config = [
  {
    label: '文本内容-中文',
    key: 'zh',
    initValue: '妈妈我爱你',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '文本内容-英文',
    key: 'en',
    initValue: 'Happy mother\'s Day',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '右侧图片',
    key: 'imgRight',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_PICTURE,
  },
  {
    label: '左侧图片',
    key: 'imgLeft',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_PICTURE,
  },
  {
    label: '文本内容-中文-文字颜色',
    key: 'zhColor',
    initValue: '#f53bab',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本内容-中文-背景颜色',
    key: 'zhBgColor',
    initValue: '#ffd6ef',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本内容-中文-边框颜色',
    key: 'zhBorderColor',
    initValue: '#ffd6ef',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本内容-英文-文字颜色',
    key: 'enColor',
    initValue: '#f53bab',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
];

export default config;
