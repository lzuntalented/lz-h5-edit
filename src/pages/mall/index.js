import React from 'react';
import Card from './components/Card';

import './index.scss';
import {
  CLICK_TYPE_DEFAULT, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW,
} from './config';
import { LOCALSTORAGE_PREVIEW_CHACHE, LOCALSTORAGE_PREVIEW_NAMESPACE } from '../../core/constants';
import LzLocalStorage from '../../utils/LocalStorage';
import { getLocalTplDatas } from '../../core/config';

export default class List extends React.Component {
  mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);

  state = {
    list: getLocalTplDatas(),
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

  render() {
    const { list } = this.state;
    return (
      <div className="page-list">
        <ul className="l">
          <Card defaultType onClick={this.clickCallback} />
          {
            list.map(it => <Card key={it.id} onClick={this.clickCallback} data={it} />)
        }
          <i className="empty" /><i className="empty" /><i className="empty" />
        </ul>
      </div>
    );
  }
}
