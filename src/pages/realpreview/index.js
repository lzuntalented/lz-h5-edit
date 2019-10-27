import React from 'react';
import { Button } from 'antd';
import Phone from './phone';
import LzLocalStorage from '../../utils/LocalStorage';

// 引入样式文件
import './index.scss';
import {
  getDragonFestivalData, getChildrenFestivalData, getGKData, get1024Data,
} from './config';
import {
  LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE, EXAMPLE_DATA_PREVIEW,
  EXAMPLE_DATA_CHILDREN_FESTIVAL, EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION, EXAMPLE_DATA_1024,
} from '../../core/constants';

const refNames = {
  content: 'content',
};

class Perview extends React.Component {
  constructor(props) {
    super(props);
    this.mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
    const { params } = props;
    console.log(params);
    this.data = getDragonFestivalData();
    if (params && params.id === EXAMPLE_DATA_PREVIEW) {
      const data = this.mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE, '[]');
      this.data = JSON.parse(data);
    }
    if (params && params.id === EXAMPLE_DATA_CHILDREN_FESTIVAL) {
      this.data = getChildrenFestivalData();
    }
    if (params && params.id === EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION) {
      this.data = getGKData();
    }
    if (params && params.id === EXAMPLE_DATA_1024) {
      this.data = get1024Data();
    }
    this.cacheKey = params && params.id;
    this.state = {};
    this.magicRefs = {};
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  prevPage = () => {
    this.magicRefs[refNames.content].prev();
  }

  nextPage = () => {
    this.magicRefs[refNames.content].next();
  }

  render() {
    return (
      <div className="realperview-container">
        <div className="phone-container">
          <div className="header" />
          <Phone data={this.data} ref={this.setMagicRefs(refNames.content)} />
          <div className="footer" />
        </div>
        <div className="toggle-page">
          <div>
            <Button onClick={this.prevPage}>上一页</Button>
            <p />
            <Button onClick={this.nextPage}>下一页</Button>
          </div>
        </div>
        {
          this.cacheKey === EXAMPLE_DATA_1024
          && (
          <div>
            <img src="http://www.lzuntalented.cn/img/eq-1024.png" alt="" />
            <div className="text-center">手机端二维码预览</div>
          </div>
          )
        }
      </div>
    );
  }
}

export default Perview;
