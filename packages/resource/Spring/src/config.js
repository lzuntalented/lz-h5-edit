import {
  STYLE_RENDER_TYPE_COLLAPSE, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
  STYLE_RENDER_TYPE_FONT, STYLE_RENDER_TYPE_HIDDEN, STYLE_RENDER_TYPE_INPUT,
  STYLE_RENDER_TYPE_PICTURE,
  STYLE_RENDER_TYPE_SELECT, STYLE_RENDER_TYPE_SLIDER_INPUT, STYLE_RENDER_TYPE_TEXTAREA,
  STYLE_RENDER_TYPE_TWO_INPUT, STYLE_VALUE_TYPE_NUMBER,
} from '@lzshow/constants';
import Align from './style/align';

const config = [
  {
    label: '文本',
    key: 'title',
    initValue: '春节\nSpring Festival',
    renderType: STYLE_RENDER_TYPE_TEXTAREA,
  },
  {
    label: '字号',
    key: 'fontSize',
    initValue: 26,
    renderType: STYLE_RENDER_TYPE_SELECT,
    valueType: STYLE_VALUE_TYPE_NUMBER,
    props: {
      options: [
        {
          key: 12,
          text: '12',
        },
        {
          key: 14,
          text: '14',
        },
        {
          key: 16,
          text: '16',
        },
        {
          key: 18,
          text: '18',
        },
        {
          key: 20,
          text: '20',
        },
        {
          key: 24,
          text: '24',
        },
        {
          key: 26,
          text: '26',
        },
        {
          key: 28,
          text: '28',
        },
        {
          key: 30,
          text: '30',
        },
        {
          key: 32,
          text: '32',
        },
        {
          key: 48,
          text: '48',
        },
      ],
    },
  },
  {
    label: '文本颜色',
    key: 'color',
    initValue: '#8b5c59',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    key: [
      'textAlign',
      'fontStyle',
      'textDecoration',
      'fontWeight',
    ],
    initValue: {
      textAlign: 'center',
      fontStyle: '',
      textDecoration: '',
      fontWeight: '',
    },
    renderType: Align,
  },
  {
    label: '内容',
    key: 'content',
    initValue: '春节是除旧布新的日子，春节虽定在农历正月初一，但春节的活动却并不止于正月初一这天。从年尾廿四日小年起，人们便开始“忙年”：祭灶、扫尘、购置年货、贴年红、洗头沐浴、张灯结彩等等',
    renderType: STYLE_RENDER_TYPE_TEXTAREA,
  },
  {
    label: '内容颜色',
    key: 'contentColor',
    initValue: '#8b5c59',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '内容背景颜色',
    key: 'contentBgColor',
    initValue: '#fdd9a5',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '内容背景图片',
    key: 'contentImage',
    initValue: 'http://www.lzuntalented.cn:8380/static/pic/1611508910000-29fvgrmi4137-FsHg5efJb92WxalOFxLtDMIHGT59.jpg',
    renderType: STYLE_RENDER_TYPE_PICTURE,
  },
];

export default config;
