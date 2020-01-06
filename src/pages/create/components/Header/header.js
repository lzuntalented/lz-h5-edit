/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Icon, Button, Upload, Modal,
} from 'antd';

import './index.scss';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE,
  LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE, EXAMPLE_DATA_DRAGON_FESTIVAL,
  EXAMPLE_DATA_THINKSGIVING,
} from '../../../../core/constants';
import {
  addPageItem, addPageItemWithAttrs, changeBackMusicUrl, initStore, initHistoryStore, changeBackGround,
} from '../../../../store/action';
import LzLocalStorage from '../../../../utils/LocalStorage';

import ImageClip from './components/ImageClip';
import Music from './components/Music';
import { save } from '../../../../services/create';
import ModalContainer from '../../../../components/ModalContainer';
import ImageList from './components/ImageList';
import MusicList from './components/MusicList';
import { getUploadProps } from './config';
import HistoryStore from '../../../../utils/HistoryStore';
import { getComponetData } from '../../config';
import { deleteUnUseObject } from '../../../../utils';

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
      showBgChoseModal: false,
      currentClipImage: null,
    };
    this.uploadProps = getUploadProps();
    this.imageListRef = React.createRef();
    this.musicListRef = React.createRef();
    this.imageBgListRef = React.createRef();
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
    const { showPreview, state } = this.props;
    this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, state);
    showPreview();
  }

  onPublish = () => {
    const { state } = this.props;
    const content = deleteUnUseObject(state);
    if (!content) {
      Modal.error({
        title: '发布失败',
        content: '请在场景中添加物料，以丰富内容',
      });
      return;
    }
    // // 远程存储用户预览模板
    save({ content }).then((id) => {
      Modal.success({
        content: '恭喜，发布成功！',
        onOk: () => {
          window.open(`#/preview/${id}`, '_blank');
        },
      });
    }).catch(() => {
      Modal.error({
        title: '发布失败',
      });
    });
    // this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, state);
    // window.open(`#/preview/${EXAMPLE_DATA_PREVIEW}`, '_blank');
  }

  onChangeVisible = flag => () => {
    this.setState({ modelImageClipVisible: flag });
  }

  onChangeModalMusicVisible = flag => () => {
    this.setState({ showMusicModal: flag });
  }

  onChangeModalBgVisible = flag => () => {
    this.setState({ showBgChoseModal: flag });
  }

  onAddPciture = imgSrc => () => {
    const { dispatch } = this.props;
    dispatch(addPageItemWithAttrs(COMPONENT_TYPE_PICTURE, { imgSrc }));
    this.setState({ showPictureModal: false });
  }

  onChoseBackground = imgSrc => () => {
    this.setState({
      modelImageClipVisible: true,
      currentClipImage: imgSrc,
    });
  }

  onChangeBackground = (src) => {
    const { dispatch } = this.props;
    dispatch(changeBackGround(src));
    this.setState({
      showBgChoseModal: false,
    });
  }

  onEdit = key => () => {
    // let data = getGKData();
    // if (key === EXAMPLE_DATA_DRAGON_FESTIVAL) {
    //   data = getDragonFestivalData();
    // } else if (key === EXAMPLE_DATA_CHILDREN_FESTIVAL) {
    //   data = getChildrenFestivalData();
    // } else if (key === EXAMPLE_DATA_1024) {
    //   data = get1024Data();
    // }

    const data = getComponetData(key);
    // dispatch(initStore(data));
    const { dispatch } = this.props;
    dispatch(initStore(data));
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
        const { current: cur } = this.imageBgListRef;
        if (cur) {
          cur.refresh();
        }
      }
    }
  }

  onChangeMusic = (src) => {
    this.setState({ showMusicModal: false });
    const { dispatch } = this.props;
    dispatch(changeBackMusicUrl(src));
  }

  onUndo = () => {
    const store = HistoryStore.undo();
    if (store) {
      const { dispatch } = this.props;
      dispatch(initHistoryStore(store));
    }
  }

  onRedo = () => {
    const store = HistoryStore.redo();
    if (store) {
      const { dispatch } = this.props;
      dispatch(initHistoryStore(store));
    }
  }

  render() {
    const { dispatch } = this.props;
    const {
      modelImageClipVisible, modalMusicVisible, showPictureModal,
      showMusicModal, showBgChoseModal, currentClipImage,
    } = this.state;
    return (
      <section
        className="page-header-container"
      >
        <div className="example-container">
          <img onClick={() => { window.location.hash = '/'; }} src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
          <a href={`#/preview/${EXAMPLE_DATA_DRAGON_FESTIVAL}`} target="_blank" rel="noopener noreferrer">
            <Button type="primary" onClick={this.onEdit(EXAMPLE_DATA_THINKSGIVING)}>示例-感恩节</Button>
          </a>
        </div>
        <ul className="ul-comp">
          <li className="item" onClick={this.onUndo}>
            <Icon type="undo" className="icon" />
            <div className="txt">撤销</div>
          </li>
          <li className="item" onClick={this.onRedo}>
            <Icon type="redo" className="icon" />
            <div className="txt">重做</div>
          </li>
          <li className="item" onClick={this.onAddText}>
            <Icon type="border-inner" className="icon" />
            <div className="txt">文本</div>
          </li>
          <li className="item" onClick={this.onAddPicture}>
            <Icon type="picture" className="icon" />
            <div className="txt">图片</div>
          </li>
          <li className="item" onClick={this.onChangeModalBgVisible(true)}>
            <Icon type="qrcode" className="icon" />
            <div className="txt">背景</div>
          </li>
          <li className="item" onClick={this.onChangeModalMusicVisible(true)}>
            <Icon type="customer-service" className="icon" />
            <div className="txt">音效</div>
          </li>
          {
            modelImageClipVisible
            && (
            <ImageClip
              src={currentClipImage}
              visible={modelImageClipVisible}
              changeVisible={this.onChangeVisible(false)}
              dispatch={dispatch}
              onChangeBackground={this.onChangeBackground}
            />
            )
          }
          <Music
            visible={modalMusicVisible}
            changeVisible={this.onChangeModalMusicVisible(false)}
            dispatch={dispatch}
          />
        </ul>
        <ul className="publish-container">
          <Button type="danger" onClick={this.onPublish}>发布</Button>
          <Button type="primary" className="m-r-4" onClick={this.onPreview}>预览</Button>
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
          title="图片素材库"
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
        <ModalContainer
          onCancel={this.onModalCancel('showBgChoseModal')}
          maskClosable
          getContainer={false}
          visible={showBgChoseModal}
          title="背景素材库"
          options={[{ title: '图片列表', comp: <ImageList ref={this.imageBgListRef} onAddPciture={this.onChoseBackground} /> }]}
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
