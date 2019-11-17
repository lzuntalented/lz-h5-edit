import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Layout from '../../components/EditItem';
import { COMPONENT_TYPE_TEXT } from '../../core/constants';
// 组件默认属性
const defaultAttrs = {
  // 字体颜色
  color: '#fff',
  // 内容
  text: '按钮',
  // 背景颜色
  bgColor: '',
  type: 'primary',
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
      text, bgColor, type, ...others
    } = this.props;
    const style = Object.assign({
      width: '100%',
    }, defaultAttrs, others);
    return (
      <div style={style}>
        <Button type={type} style={{ width: '100%' }}>{text}</Button>
      </div>
    );
  }
}

export default Layout(Text, COMPONENT_TYPE_TEXT);
