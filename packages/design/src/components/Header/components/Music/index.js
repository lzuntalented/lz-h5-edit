import React from 'react';
import {
  Input, Button, Modal, Row, Col,
} from 'antd';
// import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import { changeBackMusicUrl } from '../../../../../../store/action';

class ImageClip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: 'http://www.lzuntalented.cn/invite/merryseven/music/music1.mp3',
    };
  }

  handleCancel = () => {
    const { changeVisible } = this.props;
    changeVisible();
    this.setState({ showImageClip: false });
  }

  handleOk = () => {
    const { changeVisible, dispatch } = this.props;
    const { src } = this.state;
    dispatch(changeBackMusicUrl(src));
    changeVisible();
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
        title="选择音效"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText="确定"
        cancelText="取消"
        destroyOnClose
      >
        <Row gutter={12}>
          <Col span={16}><Input value={src} onChange={this.onChangeImage} /></Col>
          <Col span={8}><Button onClick={this.onFetchImage}>获取</Button></Col>
        </Row>
      </Modal>
    );
  }
}

export default ImageClip;
