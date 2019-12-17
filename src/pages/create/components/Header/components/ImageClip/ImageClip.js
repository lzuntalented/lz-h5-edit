import React from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

class ImageClip extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.initCropper();
  }

  getCropData() {
    if (this.mCropper) {
      return this.mCropper.getData();
    }
    return null;
  }

  initCropper() {
    const handler = this.imgRef;
    if (handler && handler.current) {
      this.mCropper = new Cropper(handler.current,
        {
          aspectRatio: 2 / 3, // 默认比例
          movable: false, // 是否允许移动图片
          dragCrop: true, // 是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
          zoomable: false,
          mouseWheelZoom: false,
          autoCropArea: 1,
        });
    }
  }

  render() {
    const { src } = this.props;
    return (
      <div style={{
        height: 320,
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <img
          ref={this.imgRef}
          src={src}
          alt="图片加载失败"
          height="100%"
        />
      </div>
    );
  }
}

export default ImageClip;
