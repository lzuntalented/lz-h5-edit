import React from 'react';
import {
  Table,
} from 'antd';
import { getList } from '../../services/home';
import './index.scss';
// 引入样式文件

import getColumns from './config';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.params.type;

    this.state = {
      list: [
        // {
        //   term: '2018114',
        //   openTime: '2018年11月1日',
        //   numbers: [1, 2, 3, 4, 5, 6, 15],
        //   red: [1, 2, 3, 4, 5, 6],
        //   blue: [15],
        // },
      ],
      pagination: {
        current: 1,
        total: 0,
        pageSize: 10,
      },
    };

    this.columns = getColumns(this.type);
  }

  componentDidMount() {
    this.search();
  }

  componentWillReceiveProps(nextProps) {
    const type = nextProps.params.type;
    if (type !== this.type) {
      this.columns = getColumns(type);
      this.type = type;
      this.search();
      this.setState({});
      // console.log(nextProps.type);
    }
  }

  onTableChange = (pagination) => {
    this.search(pagination.current);
  }

  search(page = 1) {
    getList({
      type: this.type,
      page,
    }).then((response) => {
      const { pagination } = this.state;
      const { total, list } = response;
      const data = list.map((it) => {
        const obj = it;
        obj.red = obj.red.split(',');
        obj.blue = obj.blue.split(',');
        obj.numbers = obj.red;
        return obj;
      });
      this.setState({
        list: data,
        pagination: Object.assign(pagination, { total, current: page }),
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { list, pagination } = this.state;
    return (
      <div className="shuang-container">
        <Table
          dataSource={list}
          columns={this.columns}
          rowKey={r => r.id}
          bordered
          size="small"
          pagination={pagination}
          onChange={this.onTableChange}
        />
      </div>
    );
  }
}

export default Home;
