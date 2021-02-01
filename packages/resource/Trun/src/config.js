import {
  STYLE_RENDER_TYPE_COLLAPSE, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
  STYLE_RENDER_TYPE_FONT, STYLE_RENDER_TYPE_HIDDEN, STYLE_RENDER_TYPE_INPUT,
  STYLE_RENDER_TYPE_PICTURE,
  STYLE_RENDER_TYPE_SELECT, STYLE_RENDER_TYPE_SLIDER_INPUT, STYLE_RENDER_TYPE_TEXTAREA,
  STYLE_RENDER_TYPE_TWO_INPUT,
} from '@lzshow/constants';

function createPrize(name, tip, index) {
  return [
    {
      label: `奖品${index}-名称`,
      key: `prizeName${index}`,
      initValue: name,
      renderType: STYLE_RENDER_TYPE_INPUT,
    },
    {
      label: `奖品${index}-图片`,
      key: `prizePic${index}`,
      initValue: 'http://www.lzuntalented.cn:8380/static/pic/1601170354000-iqbjspidrzq9-06.png',
      renderType: STYLE_RENDER_TYPE_PICTURE,
    },
    {
      label: `奖品${index}-概率(%)`,
      key: `prizePercent${index}`,
      initValue: 10,
      renderType: STYLE_RENDER_TYPE_SLIDER_INPUT,
      props: {
        min: 0,
        max: 100,
        step: 1,
      },
    },
    {
      label: `奖品${index}-中奖提示`,
      key: `prizeTip${index}`,
      initValue: tip,
      renderType: STYLE_RENDER_TYPE_INPUT,
    },
  ];
}

const config = [
  ...createPrize('一等奖', '恭喜您抽中一等奖', 1),
  ...createPrize('谢谢惠顾', '很遗憾，您未中奖，再接再厉。', 2),
  ...createPrize('二等奖', '恭喜您抽中二等奖', 3),
  ...createPrize('谢谢惠顾', '很遗憾，您未中奖，再接再厉。', 4),
  ...createPrize('三等奖', '恭喜您抽中三等奖', 5),
  ...createPrize('谢谢惠顾', '很遗憾，您未中奖，再接再厉。', 6),
  ...createPrize('谢谢惠顾', '很遗憾，您未中奖，再接再厉。', 7),
  ...createPrize('谢谢惠顾', '很遗憾，您未中奖，再接再厉。', 8),
];

export default config;
