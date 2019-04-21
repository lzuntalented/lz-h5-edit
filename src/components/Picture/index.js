import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem';
import { COMPONENT_TYPE_PICTURE } from '../EditItem/constants';

// function Text() {
//   return <Input placeholder="请输入" />;
// }
const refNames = {
  editDom: 'editDom',
};
class Picture extends React.Component {
  static propTypes = {
    setAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
  }

  state = {
    editable: false,
  }

  magicRefs = {}

  constructor(props) {
    super(props);
    props.setAttrs({
      color: 'red',
    });
  }

  onDoubleClick = () => {
    const elem = this.magicRefs.editDom;
  }

  onLoad = () => {
    const { color, resetHeight } = this.props;
    console.log('onload');
    resetHeight();
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  render() {
    const { editable } = this.state;
    const { color, resetHeight } = this.props;
    return (
      <div
        style={{
          width: '100%',
          minHeight: '40px',
          color,
        }}
        ref={this.setMagicRefs(refNames.editDom)}
      >
        <img src="http://www.lzuntalented.cn/lzphp-show/data/img/1.jpg" alt="" onLoad={this.onLoad} width="100%" />
      </div>
    );
  }
}

export default Layout(Picture, COMPONENT_TYPE_PICTURE);
