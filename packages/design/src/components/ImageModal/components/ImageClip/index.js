import React from 'react';
import { Modal } from 'antd';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import ImageClipChild from './ImageClip';

class ImageClip extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  handleCancel = () => {
    const { changeVisible } = this.props;
    changeVisible();
    this.setState({ showImageClip: false });
  }

  handleOk = () => {
    const {
      changeVisible, src, onChangeBackground, cropImage,
    } = this.props;
    const handler = this.imgRef.current;
    if (handler) {
      const data = handler.getCropData();
      // console.log(data);
      cropImage({
        ...data,
        url: src,
      }).then((res) => {
        onChangeBackground(res);
        changeVisible();
      }).catch(() => {
        Modal.error('操作失败');
      });
    }
  }

  render() {
    const { visible, src } = this.props;
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
        <ImageClipChild
          ref={this.imgRef}
          src={src}
        />
      </Modal>
    );
  }
}

export default ImageClip;
