import React, { useEffect, useRef, useState } from 'react';
import { Radio, Table } from 'antd';
import dayjs from 'dayjs';
import { getList } from '../../../../../services/form';

export default function Charts(props) {
  const { id } = props;
  const [state, setState] = useState({
    time: '1',
    list: [],
    columns: [],
  });
  useEffect(() => {
    getList({
      opus_id: +id,
    }).then((res) => {
      let columns = [];
      const list = [];
      res.forEach((it) => {
        const { content } = it;
        let others = {};
        try {
          others = JSON.parse(content);
          columns = columns.concat(Object.keys(others));
        } catch (error) {
          console.log(error);
        }
        const item = {
          idx: it.page_idx,
          id: it.id,
          ...others,
        };
        list.push(item);
      });
      const colSets = new Set(columns);
      const cols = [
        {
          title: '页码',
          dataIndex: 'idx',
        },
      ];
      colSets.forEach((it) => {
        cols.push({
          title: it,
          dataIndex: it,
        });
      });
      setState({
        ...state,
        columns: cols,
        list,
      });
    });
  }, [id]);


  return (
    <div>
      <Table
        dataSource={state.list}
        columns={state.columns}
        rowKey="id"
      />
    </div>
  );
}
