import { STYLE_RENDER_TYPE_SELECT, STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_COLOR } from '@lzshow/constants';

const config = [
  {
    label: '点击跳转',
    key: 'linkType',
    initValue: '0',
    renderType: STYLE_RENDER_TYPE_SELECT,
    props: {
      options: [
        {
          key: '0',
          text: '无',
        },
        {
          key: '1',
          text: '跳转链接',
        },
        {
          key: '2',
          text: '拨打电话',
        },
      ],
    },
  },
  {
    label: '按钮名称',
    key: 'text',
    initValue: '按钮名称',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '电话号码',
    key: 'phone',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '链接地址',
    key: 'href',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '文字颜色',
    key: 'color',
    initValue: '#fff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '背景颜色',
    key: 'bgColor',
    initValue: '#59c7f9',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
];

export default config;
