import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../../components/EditItem';
import Map from '../../components/Map';
import { COMPONENT_TYPE_PICTURE } from '../../core/constants';

// 组件默认属性
const defaultAttrs = {
  // 图片地址
  address: '浙江省杭州市西湖区西湖',
};

const refNames = {
  editDom: 'editDom',
};

class Picture extends React.Component {
  static propTypes = {
    registerAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
  }

  magicRefs = {}

  constructor(props) {
    super(props);
    props.registerAttrs(defaultAttrs);
  }

  onLoad = () => {
    const { resetHeight } = this.props;
    resetHeight();
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  render() {
    const { address } = this.props;
    return (
      <div
        style={{
          width: '100%',
          minHeight: '320px',
        }}
        ref={this.setMagicRefs(refNames.editDom)}
      >
        <Map address={address} />
      </div>
    );
  }
}

export default Layout(Picture, COMPONENT_TYPE_PICTURE);
