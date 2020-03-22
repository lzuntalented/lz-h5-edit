import {
  ACTION_MULTI_ALIGN_LEFT, ACTION_MULTI_ALIGN_RIGHT, ACTION_MULTI_ALIGN_TOP,
  ACTION_MULTI_ALIGN_BOTTOM,
  ACTION_MULTI_ALIGN_CENTER_HORIZONTAL,
  ACTION_MULTI_ALIGN_CENTER_VERTICAL,
} from '../../../../../../core/constants';

export function getAlignConfig() {
  return [
    {
      key: ACTION_MULTI_ALIGN_LEFT,
      icon: 'icon-zuoduiqi',
      tip: '左对齐',
    },
    {
      key: ACTION_MULTI_ALIGN_RIGHT,
      icon: 'icon-youduiqi',
      tip: '右对齐',
    },
    {
      key: ACTION_MULTI_ALIGN_TOP,
      icon: 'icon-shangduiqi',
      tip: '上对齐',
    },
    {
      key: ACTION_MULTI_ALIGN_BOTTOM,
      icon: 'icon-xiaduiqi',
      tip: '下对齐',
    },
    {
      key: ACTION_MULTI_ALIGN_CENTER_HORIZONTAL,
      icon: 'icon-shuipingjuzhongduiqi',
      tip: '水平居中对齐',
    },
    {
      key: ACTION_MULTI_ALIGN_CENTER_VERTICAL,
      icon: 'icon-chuizhijuzhongduiqi',
      tip: '垂直居中对齐',
    },
  ];
}

export default () => {};
