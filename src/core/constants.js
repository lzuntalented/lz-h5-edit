const Type = {
  // 双色球
  ssq: 'ssq',
  //   福彩3D
  fc3d: '3d',
  //   七乐彩
  qlc: 'qlc',
  // 大乐透
  dlt: 'dlt',
  // 排列3
  pls: 'pls',
  // 排列5
  plw: 'plw',
  // 七星彩
  qxc: 'qxc',
};

export const typeName = {
  [Type.ssq]: '双色球',
  [Type.fc3d]: '福彩3D',
  [Type.qlc]: '七乐彩',
  [Type.dlt]: '大乐透',
  [Type.pls]: '排列3',
  [Type.plw]: '排列5',
  [Type.qxc]: '七星彩',
};

export const typeArray = [
  {
    key: Type.ssq,
    name: typeName.ssq,
  },
  {
    key: Type.fc3d,
    name: typeName[Type.fc3d],
  },
  {
    key: Type.qlc,
    name: typeName.qlc,
  },
  {
    key: Type.dlt,
    name: typeName.dlt,
  },
  {
    key: Type.pls,
    name: typeName.pls,
  },
  {
    key: Type.plw,
    name: typeName.plw,
  },
  {
    key: Type.qxc,
    name: typeName.qxc,
  },
];

export default Type;
