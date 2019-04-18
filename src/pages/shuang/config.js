import React from 'react';
import Type from '../../core/constants';
import { isObject } from '../../utils/Tools';

function renderBall(numbers, cls) {
  if (isObject(cls)) {
    cls = 'blue';
  }
  return (
    <ul>
      {
        numbers.map((it, index) => <li key={index} className={`ball ball-${cls}`}>{it}</li>)
      }
    </ul>
  );
}

function getTypeWithType(type) {
  if (type === Type.ssq) {
    return [
      {
        title: '红球',
        dataIndex: 'red',
        key: 'red',
        render: value => renderBall(value, 'red'),
        width: 300,
      },
      {
        title: '蓝球',
        dataIndex: 'blue',
        key: 'blue',
        render: value => renderBall(value, 'blue'),
      },
    ];
  }
  if (type === Type.qlc) {
    return [
      {
        title: '红球',
        dataIndex: 'red',
        key: 'red',
        render: value => renderBall(value, 'red'),
        width: 320,
      },
      {
        title: '特殊球',
        dataIndex: 'blue',
        key: 'blue',
        render: value => renderBall(value, 'blue'),
      },
    ];
  }
  if (type === Type.dlt) {
    return [
      {
        title: '前区',
        dataIndex: 'red',
        key: 'red',
        render: value => renderBall(value, 'red'),
        width: 320,
      },
      {
        title: '后区',
        dataIndex: 'blue',
        key: 'blue',
        render: value => renderBall(value, 'blue'),
      },
    ];
  }
  return [];
}

export default function (type) {
  const result = [
    {
      title: '期号',
      dataIndex: 'term',
      key: 'term',
      width: 100,
    },
    {
      title: '开奖日期',
      dataIndex: 'date',
      key: 'date',
      width: 100,
    },
    {
      title: '中奖号码',
      dataIndex: 'numbers',
      key: 'numbers',
      children: getTypeWithType(type),
      render: renderBall,
    },
  ];
  if (result[2].children.length === 0) {
    delete result[2].children;
  }
  return result;
}
