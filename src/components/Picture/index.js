import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem';
import { COMPONENT_TYPE_PICTURE } from '../EditItem/constants';

// 组件默认属性
const defaultAttrs = {
  // 图片地址
  imgSrc: 'http://www.lzuntalented.cn/lzphp-show/data/img/1.jpg',
};

const refNames = {
  editDom: 'editDom',
};

class Picture extends React.Component {
  static propTypes = {
    setAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
  }

  magicRefs = {}

  constructor(props) {
    super(props);
    props.setAttrs(defaultAttrs);
  }

  onDoubleClick = () => {
    const elem = this.magicRefs.editDom;
  }

  onLoad = () => {
    const { resetHeight } = this.props;
    resetHeight();
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  render() {
    const { imgSrc } = this.props;
    return (
      <div
        style={{
          width: '100%',
          minHeight: '40px',
        }}
        ref={this.setMagicRefs(refNames.editDom)}
      >
        <img src={imgSrc} alt="" onLoad={this.onLoad} width="100%" />
      </div>
    );
  }
}

export default Layout(Picture, COMPONENT_TYPE_PICTURE);
