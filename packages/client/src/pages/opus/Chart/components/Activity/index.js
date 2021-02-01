import React, { useEffect, useRef, useState } from 'react';
import { Radio, Table } from 'antd';
import dayjs from 'dayjs';
import { getList } from '../../../../../services/activity';

export default function Charts(props) {
  const { id } = props;
  const [state, setState] = useState({
    list: [],
  });
  useEffect(() => {
    getList({
      opus_id: +id,
    }).then((res) => {
      const list = res || [];
      setState({
        list,
      });
    });
  }, [id]);

  const columns = [
    {
      title: '页码',
      dataIndex: 'idx',
    },
    {
      title: '物料标识',
      dataIndex: 'type',
    },
    {
      title: '参与用户',
      dataIndex: 'user',
    },
    {
      title: '活动结果',
      dataIndex: 'content',
    },
    {
      title: '参与时间',
      dataIndex: 'time',
    },
  ];

  return (
    <div>
      <Table
        dataSource={state.list}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
}
