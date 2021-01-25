import {
  STYLE_RENDER_TYPE_COLLAPSE, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
  STYLE_RENDER_TYPE_FONT, STYLE_RENDER_TYPE_HIDDEN, STYLE_RENDER_TYPE_INPUT,
  STYLE_RENDER_TYPE_PICTURE,
  STYLE_RENDER_TYPE_SELECT, STYLE_RENDER_TYPE_SLIDER_INPUT, STYLE_RENDER_TYPE_TEXTAREA,
  STYLE_RENDER_TYPE_TWO_INPUT,
} from '@lzshow/constants';

const config = [
  {
    label: '形状',
    key: 'shape',
    initValue: '1',
    renderType: STYLE_RENDER_TYPE_SELECT,
    props: {
      options: [
        {
          key: '1',
          text: '选项一',
        },
        {
          key: '2',
          text: '选项二',
        },
      ],
    },
  },
  {
    label: '颜色',
    key: 'stroke',
    initValue: '#08A1EF',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '输入框',
    key: 'STYLE_RENDER_TYPE_INPUT',
    initValue: '输入框',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '多行输入框',
    key: 'STYLE_RENDER_TYPE_TEXTAREA',
    initValue: '多行输入框',
    renderType: STYLE_RENDER_TYPE_TEXTAREA,
  },
  {
    label: '带滑动条的输入框',
    key: 'STYLE_RENDER_TYPE_SLIDER_INPUT',
    initValue: 10,
    renderType: STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 100,
      step: 1,
    },
  },
  {
    label: '我不展示',
    key: 'STYLE_RENDER_TYPE_HIDDEN',
    initValue: '我不展示',
    renderType: STYLE_RENDER_TYPE_HIDDEN,
  },
  {
    label: '可编辑的div标签',
    key: 'STYLE_RENDER_TYPE_CONTENT_EDIT_DIV',
    initValue: '可编辑的div标签',
    renderType: STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
  },
  // {
  //   label: '可展开面板',
  //   key: 'bgColor',
  //   initValue: '',
  //   renderType: STYLE_RENDER_TYPE_COLLAPSE,
  // },
  {
    label: '一行两个输入框',
    key: [
      'textShadowX',
      'textShadowY',
    ],
    initValue: {
      textShadowX: 0,
      textShadowY: 0,
    },
    props: {
      left: 'textShadowX',
      leftText: 'x',
      right: 'textShadowY',
      rightText: 'y',
    },
    renderType: STYLE_RENDER_TYPE_TWO_INPUT,
  },
  {
    label: '图片库',
    key: 'STYLE_RENDER_TYPE_PICTURE',
    initValue: '图片库',
    renderType: STYLE_RENDER_TYPE_PICTURE,
  },
  {
    label: '字体库',
    key: 'STYLE_RENDER_TYPE_FONT',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_FONT,
  },
];

export default config;
