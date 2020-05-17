import React from 'react';
import { Pagination } from 'antd';
import Card from './components/Card';

import './index.scss';
import {
  CLICK_TYPE_DEFAULT, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW,
} from './config';
import { LOCALSTORAGE_PREVIEW_CHACHE, LOCALSTORAGE_PREVIEW_NAMESPACE } from '../../core/constants';
import LzLocalStorage from '../../utils/LocalStorage';
import { getList } from '../../services/mall';
import { translateShowDataFromStore } from '../../utils';

// 分页大小
const pageSize = 8;
export default class List extends React.Component {
  mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);

  state = {
    list: [],
    // 当前页码
    pageIndex: 1,
    // 作品总数
    total: 0,
  }

  componentDidMount() {
    const { pageIndex } = this.state;
    this.getCardList(pageIndex);
  }

  onChosePage = (page) => {
    this.getCardList(page);
  }

  clickCallback = (type, data) => () => {
    if (type === CLICK_TYPE_DEFAULT) {
      window.location.hash = '/create';
    } else if (type === CLICK_TYPE_EDIT) {
      const { list } = this.state;
      const obj = list.find(it => it.id === data);
      if (obj) {
        this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, JSON.stringify(obj.origin));
      }
      window.location.hash = `/edit/${data}`;
    } else if (type === CLICK_TYPE_PREVIEW) {
      const { list } = this.state;
      const obj = list.find(it => it.id === data);
      if (obj) {
        this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, JSON.stringify(obj.origin));
      }
      window.location.hash = `/preview/${data}`;
    }
  };

  // 获取商城模板作品列表
  getCardList = (pageIndex) => {
    // 首屏渲染本地模板，第二页开始再渲染远端数据
    const page = pageIndex;

    const result = [];
    getList({ pageIndex: page }).then((res) => {
      const { list, total } = res;
      list.forEach(({ content, opus_id: id }) => {
        const obj = JSON.parse(content);
        result.push({
          id,
          origin: obj,
          content: translateShowDataFromStore(obj),
        });
      });
      const state = {
        pageIndex,
        total,
      };
      state.list = result;
      this.setState(state);
    });
  }

  render() {
    const { list, pageIndex, total } = this.state;
    return (
      <div className="page-list">
        <ul className="l">
          <Card defaultType onClick={this.clickCallback} />
          {
            list.map(it => <Card key={it.id} onClick={this.clickCallback} data={it} />)
        }
          <i className="empty" /><i className="empty" /><i className="empty" />
        </ul>
        <div className="text-right">
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            onChange={this.onChosePage}
          />
        </div>
      </div>
    );
  }
}
