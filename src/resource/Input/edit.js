import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import Layout from '../../components/EditItem';
import { COMPONENT_TYPE_TEXT } from '../../core/constants';
// 组件默认属性
const defaultAttrs = {
  // 字体颜色
  color: 'red',
  // 内容
  text: '文本',
  // 背景颜色
  bgColor: '',
};

class Text extends React.Component {
  static propTypes = {
    registerAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
    setAttribute: PropTypes.func.isRequired,
    text: PropTypes.string,
    bgColor: PropTypes.string,
  }

  static defaultProps = {
    text: '',
    bgColor: '',
  }

  constructor(props) {
    super(props);
    props.registerAttrs(defaultAttrs);
  }

  render() {
    const {
      resetHeight, setAttribute,
      text, bgColor, ...others
    } = this.props;
    const style = Object.assign({
      width: '100%',
      minHeight: '40px',
      background: bgColor,
      outerColor: 'transport',
    }, defaultAttrs, others);
    return (
      <div style={style}>
        <Input style={style} value={text} />
      </div>
    );
  }
}

export default Layout(Text, COMPONENT_TYPE_TEXT);
