import { typeArray } from '../../core/constants';

export default function getMenuItems() {
  const arr = typeArray.map(it => ({
    name: it.name,
    link: `#/list/${it.key}`,
  }));
  const result = [
    {
      name: '首页',
      link: '#/',
    },
  ];
  return result.concat(arr);
}
