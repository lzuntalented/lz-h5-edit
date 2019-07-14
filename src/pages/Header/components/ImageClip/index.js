import React from 'react';
import {
  Input, Button, Modal, Row, Col,
} from 'antd';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import { changeBackGround } from '../../../../store/action';

class ImageClip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageClip: false,
      src: 'http://www.lzuntalented.cn/lzphp-show/data/img/1.jpg',
    };
    this.magicRefs = {
      img: React.createRef(),
    };
  }

  componentDidMount() {
    const handler = this.magicRefs.img;
    console.log(handler);
    if (handler && handler.current) {
      this.mCropper = new Cropper(handler.current);
    }
  }

  // todo 对接服务后 提供文件上传功能
  // componentDidUpdate() {
  //   const handler = this.magicRefs.img;
  //   if (!this.mCropper && handler && handler.current) {
  //     console.log(handler, 'up');
  //     this.mCropper = new Cropper(handler.current, {
  //       aspectRatio: 1 / 1, // 默认比例
  //       preview: '.previewImg', // 预览视图
  //       guides: false, // 裁剪框的虚线(九宫格)
  //       autoCropArea: 0.5, // 0-1之间的数值，定义自动剪裁区域的大小，默认0.8
  //       movable: false, // 是否允许移动图片
  //       dragCrop: true, // 是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
  //     });
  //   }
  // }

  handleCancel = () => {
    const { changeVisible } = this.props;
    changeVisible();
    this.setState({ showImageClip: false });
  }

  handleOk = () => {
    const { changeVisible, dispatch } = this.props;
    const { src } = this.state;
    dispatch(changeBackGround(src));
    changeVisible();
    this.setState({ showImageClip: false });
  }

  onFetchImage = () => {
    const { showImageClip } = this.state;
    this.setState({ showImageClip: true });
  }

  onChangeImage = (e) => {
    this.setState({ src: e.target.value });
  }

  render() {
    const { src, showImageClip } = this.state;
    const { visible } = this.props;
    return (
      <Modal
        title="选择背景图片"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText="确定"
        cancelText="取消"
        destroyOnClose
      >
        {
            !showImageClip
            && (
            <Row gutter={12}>
              <Col span={16}><Input value={src} onChange={this.onChangeImage} /></Col>
              <Col span={8}><Button onClick={this.onFetchImage}>获取</Button></Col>
            </Row>
            )
        }
        {
            showImageClip && <img ref={this.magicRefs.img} id="image" src={src} alt="图片加载失败" width="100%" />
        }
      </Modal>
    );
  }
}

export default ImageClip;
