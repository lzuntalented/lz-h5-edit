import React from 'react';
import { Button } from 'antd';
import Phone from './phone';
import LzLocalStorage from '../../utils/LocalStorage';

// 引入样式文件
import './index.scss';
import { getDragonFestivalData, getChildrenFestivalData, getGKData } from './config';
import {
  LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE, EXAMPLE_DATA_PREVIEW, EXAMPLE_DATA_CHILDREN_FESTIVAL, EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
} from '../../core/constants';

const refNames = {
  content: 'content',
};

class Perview extends React.Component {
  constructor(props) {
    super(props);
    this.mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
    const { params } = props;
    this.data = getDragonFestivalData();
    if (params && params.source === EXAMPLE_DATA_PREVIEW) {
      const data = this.mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE, '[]');
      this.data = JSON.parse(data);
    }
    if (params && params.source === EXAMPLE_DATA_CHILDREN_FESTIVAL) {
      this.data = getChildrenFestivalData();
    }
    if (params && params.source === EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION) {
      this.data = getGKData();
    }
    this.state = {};
    this.magicRefs = {};
  }

  componentDidMount() {
    // #TODO 需要及时处理路由问题
    window.document.querySelector('.layout-header-container .page-header-container').innerHTML = '';
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
      </div>
    );
  }
}

export default Perview;
