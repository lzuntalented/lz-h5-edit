/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Button, Upload } from 'antd';

import './index.scss';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE,
  LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE,
  EXAMPLE_DATA_PREVIEW, EXAMPLE_DATA_DRAGON_FESTIVAL,
  EXAMPLE_DATA_CHILDREN_FESTIVAL, EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
  COMPONENT_TYPE_QQ_VIDEO, EXAMPLE_DATA_1024,
} from '../../core/constants';
import {
  addPageItem, resetStore, addPageItemWithAttrs, changeBackMusicUrl,
} from '../../store/action';
import LzLocalStorage from '../../utils/LocalStorage';

import ImageClip from './components/ImageClip';
import Music from './components/Music';
import {
  getGKData, getDragonFestivalData, getChildrenFestivalData, get1024Data,
} from '../../pages/realpreview/config';
import { save } from '../../services/create';
import ModalContainer from '../ModalContainer';
import ImageList from './components/ImageList';
import MusicList from './components/MusicList';
import { getUploadProps } from './config';


class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    pages: PropTypes.array.isRequired,
    editList: PropTypes.object.isRequired,
    backGroundImage: PropTypes.string,
    backMusicUrl: PropTypes.string,
  }

  static defaultProps = {
    backGroundImage: '',
    backMusicUrl: '',
  }

  constructor(props) {
    super(props);
    this.mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
    this.state = {
      // 背景图片裁剪
      modelImageClipVisible: false,
      // 音乐选择
      modalMusicVisible: false,
      showPictureModal: false,
      showMusicModal: false,
    };
    this.uploadProps = getUploadProps();
    this.imageListRef = React.createRef();
    this.musicListRef = React.createRef();
  }

  onAddText = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_TEXT));
  }

  onAddPicture = () => {
    this.setState({ showPictureModal: true });
  }

  onAddComponent = key => () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(key));
  }

  onPreview = () => {
    const { state } = this.props;
    // 远程存储用户预览模板
    save({ content: state });
    this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, state);
    window.open(`#/preview/${EXAMPLE_DATA_PREVIEW}`, '_blank');
  }

  onChangeVisible = flag => () => {
    this.setState({ modelImageClipVisible: flag });
  }

  onChangeModalMusicVisible = flag => () => {
    this.setState({ showMusicModal: flag });
  }

  onAddPciture = imgSrc => () => {
    const { dispatch } = this.props;
    dispatch(addPageItemWithAttrs(COMPONENT_TYPE_PICTURE, { imgSrc }));
    this.setState({ showPictureModal: false });
  }

  onEdit = key => () => {
    let data = getGKData();
    if (key === EXAMPLE_DATA_DRAGON_FESTIVAL) {
      data = getDragonFestivalData();
    } else if (key === EXAMPLE_DATA_CHILDREN_FESTIVAL) {
      data = getChildrenFestivalData();
    } else if (key === EXAMPLE_DATA_1024) {
      data = get1024Data();
    }
    const { dispatch } = this.props;
    dispatch(resetStore(data));
  }

  onModalCancel = key => () => {
    if (key === 'showMusicModal') {
      const { current } = this.musicListRef;
      if (current) {
        current.onStop();
      }
    }
    this.setState({ [key]: false });
  }

  onFileChange = ({ file }) => {
    if (file.status !== 'uploading') {
      if (file.status === 'done') {
        const { current } = this.imageListRef;
        if (current) {
          current.refresh();
        }
      }
    }
  }

  onChangeMusic = (src) => {
    this.setState({ showMusicModal: false });
    const { dispatch } = this.props;
    dispatch(changeBackMusicUrl(src));
  }

  render() {
    const { dispatch } = this.props;
    const {
      modelImageClipVisible, modalMusicVisible, showPictureModal, showMusicModal,
    } = this.state;
    return (
      <section
        className="page-header-container"
      >
        <div className="example-container">
          <img onClick={() => { window.location.hash = '/'; }} src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
          <a href={`#/preview/${EXAMPLE_DATA_DRAGON_FESTIVAL}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_DRAGON_FESTIVAL)}>示例-端午节</Button>
          </a>
          <a className="m-l-20" href={`#/preview/${EXAMPLE_DATA_CHILDREN_FESTIVAL}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_CHILDREN_FESTIVAL)}>示例-儿童节</Button>
          </a>
          <a className="m-l-20" href={`#/preview/${EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION)}>示例-高考加油</Button>
          </a>
          <a className="m-l-20" href={`#/preview/${EXAMPLE_DATA_1024}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_1024)}>示例-1024程序员节</Button>
          </a>
        </div>
        <ul className="ul-comp">
          <li className="item" onClick={this.onAddComponent(COMPONENT_TYPE_QQ_VIDEO)}>
            <Icon type="qq" className="icon" />
            <div className="txt">QQ通话</div>
          </li>
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
          <iframe
            src="https://ghbtns.com/github-btn.html?user=lzuntalented&repo=lz-h5-edit&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="100px"
            height="30px"
            className="m-t-12"
          />
        </ul>
        <ModalContainer
          onCancel={this.onModalCancel('showPictureModal')}
          maskClosable
          getContainer={false}
          visible={showPictureModal}
          title="素材库"
          options={[{ title: '图片列表', comp: <ImageList ref={this.imageListRef} onAddPciture={this.onAddPciture} /> }]}
        >
          <Upload
            {...this.uploadProps}
            onChange={this.onFileChange}
          >
            <Button type="primary">
              本地上传
            </Button>
          </Upload>
        </ModalContainer>
        <ModalContainer
          onCancel={this.onModalCancel('showMusicModal')}
          maskClosable
          getContainer={false}
          visible={showMusicModal}
          title="音乐库"
          options={[{ title: '音乐列表', comp: <MusicList ref={this.musicListRef} onSelect={this.onChangeMusic} /> }]}
        />
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    pages, editList, backGroundImage, backMusicUrl, groupList,
  } = state;
  const result = {
    state: JSON.stringify(state),
    pages,
    editList,
    backGroundImage,
    backMusicUrl,
    groupList,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Header);
