import {
  ACTION_ACTVIE_ALIGN_TOP, ACTION_ACTVIE_ALIGN_BOTTOM, ACTION_ACTVIE_ALIGN_LEFT,
  ACTION_ACTVIE_ALIGN_RIGHT,
} from '@lzshow/constants';

export function getAlignConfig() {
  return [
    {
      key: ACTION_ACTVIE_ALIGN_TOP,
      icon: 'icon-shangduiqi1',
      tip: '顶对齐',
    },
    {
      key: ACTION_ACTVIE_ALIGN_BOTTOM,
      icon: 'icon-xiaduiqi1',
      tip: '底对齐',
    },
    {
      key: ACTION_ACTVIE_ALIGN_LEFT,
      icon: 'icon-zuoduiqi1',
      tip: '左对齐',
    },
    {
      key: ACTION_ACTVIE_ALIGN_RIGHT,
      icon: 'icon-youduiqi1',
      tip: '右对齐',
    },
  ];
}

export default () => {};
