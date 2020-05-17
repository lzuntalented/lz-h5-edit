import {
  STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_PICTURE,
} from '@lzshow/constants';

// en, zh, imgRight, imgLeft,
const config = [
  {
    label: '文本中文',
    key: 'zh',
    initValue: '我永远爱你',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '文本英文',
    key: 'en',
    initValue: 'I love you forever',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '前置图片',
    key: 'imgBefore',
    initValue: 'http://www.lzuntalented.cn:8380/static/pic/1589695301000-ne42ifrrwmsb-o_1e80suqjktpl1op61cf41igfc9h1k.png',
    renderType: STYLE_RENDER_TYPE_PICTURE,
  },
  {
    label: '后置图片',
    key: 'imgBack',
    initValue: 'http://www.lzuntalented.cn:8380/static/pic/1589695301000-ne42ifrrwmsb-o_1e80suqjktpl1op61cf41igfc9h1k.png',
    renderType: STYLE_RENDER_TYPE_PICTURE,
  },
  {
    label: '文本中文-文字颜色',
    key: 'zhColor',
    initValue: '#df8fac',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本中文-背景颜色',
    key: 'zhBgColor',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本英文-文字颜色',
    key: 'enColor',
    initValue: '#df8fac',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本英文-背景颜色',
    key: 'enBgColor',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
];

export default config;
