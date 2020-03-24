import { STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_SELECT } from '../../core/constants';

const config = [
  {
    label: '文本',
    key: 'text',
    initValue: '按钮',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '按钮类型',
    key: 'type',
    initValue: 'primary',
    renderType: STYLE_RENDER_TYPE_SELECT,
    props: {
      options: [
        {
          key: ' ',
          text: '默认',
        },
        {
          key: 'primary',
          text: '蓝色',
        },
        {
          key: 'danger',
          text: '红色',
        },
      ],
    },
  },
];

export default config;
