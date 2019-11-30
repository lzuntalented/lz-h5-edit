import { STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_SELECT } from '../../core/constants';

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
          text: '三角形',
        },
        {
          key: '2',
          text: '直线',
        },
      ],
    },
  },
  {
    label: '形状颜色',
    key: 'stroke',
    initValue: '#08A1EF',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '背景色',
    key: 'bgColor',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
];

export default config;
