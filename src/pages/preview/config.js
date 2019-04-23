import Type, { typeName } from '../../core/constants';

export default function (numbers, type) {
  if (type === Type.ssq || type === Type.qlc) {
    return numbers.map((it, index) => {
      const obj = {
        text: it,
        cls: 'red',
        key: index,
      };
      if (index === numbers.length - 1) {
        obj.cls = 'blue';
      }
      return obj;
    });
  }

  if (type === Type.dlt) {
    return numbers.map((it, index) => {
      const obj = {
        text: it,
        cls: 'red',
        key: index,
      };
      if (index === numbers.length - 1) {
        obj.cls = 'blue';
      }
      if (index === numbers.length - 2) {
        obj.cls = 'blue';
      }
      return obj;
    });
  }

  if (type === Type.fc3d) {
    return numbers.map((it, index) => {
      const obj = {
        text: it,
        cls: 'blue',
        key: index,
      };
      return obj;
    });
  }

  return numbers.map((it, index) => {
    const obj = {
      text: it,
      cls: 'red',
      key: index,
    };
    return obj;
  });
}


export function getSearchType() {
  return [
    {
      key: Type.ssq,
      label: typeName.ssq,
    },
    {
      key: Type.qxc,
      label: typeName.qxc,
    },
    {
      key: Type.dlt,
      label: typeName.dlt,
    },
    {
      key: Type.qlc,
      label: typeName.qlc,
    },
  ];
}
