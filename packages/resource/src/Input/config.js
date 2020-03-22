import { STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_COLOR } from '../../core/constants';

const config = [
  {
    label: '文字',
    key: 'text',
    initValue: '文本',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '文字颜色',
    key: 'color',
    initValue: '#000',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '背景颜色',
    key: 'bgColor',
    initValue: '按钮',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
];

export default config;
