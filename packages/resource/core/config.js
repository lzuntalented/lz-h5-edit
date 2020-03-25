import {
  EXAMPLE_DATA_THINKSGIVING, EXAMPLE_DATA_DOUBLE_ELEVEN, EXAMPLE_DATA_1024,
  EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION, EXAMPLE_DATA_DOUBLE_TWENTY,
  EXAMPLE_DATA_NEW_YEAR_2020,
} from './constants';

export function getFontFamilyOptions() {
  const list = [
    {
      key: 'tianxinyuanyue',
      text: '甜心中文',
    },
    {
      key: 'lanlanlanlandan',
      text: '【蛋蛋】懒懒懒懒蛋',
    },
    {
      key: 'shanmang1',
      text: '【阿苗】闪吗1',
    },
    {
      key: 'wencangshufang',
      text: '问藏书房',
    },
  ];
  return list;
}
