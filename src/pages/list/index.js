import React from 'react';
import { Pagination } from 'antd';
import Card from './components/Card';

import './index.scss';
import {
  CLICK_TYPE_DEFAULT, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW, CLICK_TYPE_DOWNLOAD,
} from './config';
import { getList } from '../../services/create';
import { translateShowDataFromStore } from '../../utils';
import { LOCALSTORAGE_PREVIEW_CHACHE, LOCALSTORAGE_PREVIEW_NAMESPACE } from '../../core/constants';
import LzLocalStorage from '../../utils/LocalStorage';
import { getUrlPrefix } from '../../services/apiConfig';

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

  // 获取作品列表
  getCardList = (pageIndex) => {
    const result = [];
    getList({ pageIndex }).then((res) => {
      const { list, total } = res;
      list.forEach(({ id, content }) => {
        const obj = JSON.parse(content);
        result.push({
          id,
          origin: obj,
          content: translateShowDataFromStore(obj),
        });
      });
      this.setState({
        pageIndex,
        list: result,
        total,
      });
    });
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
    } else if (type === CLICK_TYPE_DOWNLOAD) {
      window.open(`${getUrlPrefix()}/index/download?id=${data}`, '_blank');
    }
  };

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
          <Pagination current={pageIndex} total={total} onChange={this.onChosePage} />
        </div>
      </div>
    );
  }
}
