import React from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';

import './index.scss';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';
import { addPageItem } from '../../components/EditItem/action';
import LzLocalStorage from '../../utils/LocalStorage';
import {
  LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE,
  EXAMPLE_DATA_PREVIEW, EXAMPLE_DATA_DRAGON_FESTIVAL,
} from '../../core/constants';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
  }

  onAddText = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_TEXT));
  }

  onAddPicture = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_PICTURE));
  }

  onPreview = () => {
    const { pages, editList } = this.props;
    const result = [];
    pages.forEach((it) => {
      const arr = [];
      it.forEach((item) => {
        const obj = editList[item];
        if (obj) {
          const { current } = obj;
          arr.push(current);
        }
      });
      result.push(arr);
    });
    this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, JSON.stringify(result));
    window.open(`/#/preview/${EXAMPLE_DATA_PREVIEW}`, '_blank');
  }

  render() {
    return (
      <section
        className="page-header-container"
      >
        <div className="example-container">
          <a href={`/#/preview/${EXAMPLE_DATA_DRAGON_FESTIVAL}`} target="blank">
            <Button type="primary">示例1</Button>
          </a>
        </div>
        <ul>
          <li className="item" onClick={this.onAddText}>
            <Icon type="border-inner" className="icon" />
            <div className="txt">文本</div>
          </li>
          <li className="item" onClick={this.onAddPicture}>
            <Icon type="picture" className="icon" />
            <div className="txt">图片</div>
          </li>
        </ul>
        <ul className="publish-container">
          <Button type="primary" onClick={this.onPreview}>预览</Button>
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { pages, editList } = state;
  const result = { pages, editList };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Header);
