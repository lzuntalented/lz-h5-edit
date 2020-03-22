import { STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_SELECT } from '../../core/constants';

const config = [
  {
    label: '视频地址',
    key: 'src',
    initValue: 'http://www.lzuntalented.cn/assets/video/iu.mp4',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  // {
  //   label: '自动播放',
  //   key: 'autoplay',
  //   initValue: '1',
  //   renderType: STYLE_RENDER_TYPE_SELECT,
  //   props: {
  //     options: [
  //       {
  //         key: '1',
  //         text: '是',
  //       },
  //       {
  //         key: '0',
  //         text: '否',
  //       },
  //     ],
  //   },
  // },
  {
    label: '循环播放',
    key: 'loop',
    initValue: '0',
    renderType: STYLE_RENDER_TYPE_SELECT,
    props: {
      options: [
        {
          key: '1',
          text: '是',
        },
        {
          key: '0',
          text: '否',
        },
      ],
    },
  },
];

export default config;
