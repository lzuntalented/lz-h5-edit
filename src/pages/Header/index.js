import React from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';

import './index.scss';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';
import { addPageItem, resetStore } from '../../components/EditItem/action';
import LzLocalStorage from '../../utils/LocalStorage';
import {
  LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE,
  EXAMPLE_DATA_PREVIEW, EXAMPLE_DATA_DRAGON_FESTIVAL,
  EXAMPLE_DATA_CHILDREN_FESTIVAL, EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
} from '../../core/constants';
import ImageClip from './components/ImageClip';
import Music from './components/Music';
import { getGKData, getDragonFestivalData, getChildrenFestivalData } from '../realpreview/config';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
    this.state = {
      modelImageClipVisible: false,
      modalMusicVisible: false,
    };
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
    const {
      pages, editList, backGroundImage, backMusicUrl,
    } = this.props;
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
    this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, JSON.stringify({
      backMusicUrl,
      backGroundImage,
      list: result,
    }));
    window.open(`#/preview/${EXAMPLE_DATA_PREVIEW}`, '_blank');
  }

  onChangeVisible = flag => () => {
    this.setState({ modelImageClipVisible: flag });
  }

  onChangeModalMusicVisible = flag => () => {
    this.setState({ modalMusicVisible: flag });
  }

  onEdit = key => () => {
    let data = getGKData();
    if (key === EXAMPLE_DATA_DRAGON_FESTIVAL) {
      data = getDragonFestivalData();
    } else if (key === EXAMPLE_DATA_CHILDREN_FESTIVAL) {
      data = getChildrenFestivalData();
    }
    const { dispatch } = this.props;
    dispatch(resetStore(data));
  }

  render() {
    const { dispatch } = this.props;
    const { modelImageClipVisible, modalMusicVisible } = this.state;
    return (
      <section
        className="page-header-container"
      >
        <div className="example-container">
          <a href={`#/preview/${EXAMPLE_DATA_DRAGON_FESTIVAL}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_DRAGON_FESTIVAL)}>示例-端午节</Button>
          </a>
          <a className="m-l-20" href={`#/preview/${EXAMPLE_DATA_CHILDREN_FESTIVAL}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_CHILDREN_FESTIVAL)}>示例-儿童节</Button>
          </a>
          <a className="m-l-20" href={`#/preview/${EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION)}>示例-高考加油</Button>
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
          <li className="item" onClick={this.onChangeVisible(true)}>
            <Icon type="qrcode" className="icon" />
            <div className="txt">背景</div>
          </li>
          <li className="item" onClick={this.onChangeModalMusicVisible(true)}>
            <Icon type="customer-service" className="icon" />
            <div className="txt">音效</div>
          </li>
          <ImageClip
            visible={modelImageClipVisible}
            changeVisible={this.onChangeVisible(false)}
            dispatch={dispatch}
          />
          <Music
            visible={modalMusicVisible}
            changeVisible={this.onChangeModalMusicVisible(false)}
            dispatch={dispatch}
          />
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
  const {
    pages, editList, backGroundImage, backMusicUrl,
  } = state;
  const result = {
    pages, editList, backGroundImage, backMusicUrl,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Header);
