import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem';
import { COMPONENT_TYPE_TEXT } from '../EditItem/constants';
// 组件默认属性
const defaultAttrs = {
  // 字体颜色
  color: 'red',
  // 字体大小
  fontSize: 12,
  // 内容
  text: '双击编辑文本',
  // 背景颜色
  bgColor: '',
  // 行高
  lineHeight: 1.5,
};

const refNames = {
  editDom: 'editDom',
};

class Text extends React.Component {
  static propTypes = {
    setAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
    setAttribute: PropTypes.func.isRequired,
  }

  state = {
    editable: false,
  }

  magicRefs = {}

  constructor(props) {
    super(props);
    const { color } = props;
    if (!color) {
      props.setAttrs(defaultAttrs);
    }
    this.focusAble = false;
    // console.log(props, 'props input');
  }

  componentDidUpdate() {
    const handler = this.magicRefs[refNames.editDom];
    const { text } = this.props;
    // 此处做法有待研究，不完美
    if (handler) {
      // 如果文本内容为空，取已设置的内容填充
      const currentText = handler.innerHTML;
      if (currentText.trim() === '') {
        handler.innerHTML = text;
      }
    }
  }

  onDoubleClick = () => {
    const elem = this.magicRefs.editDom;
    this.setState({ editable: true }, () => {
      elem.focus();
    });
  }

  onBlur = () => {
    this.focusAble = false;
    this.setState({ editable: false });
  }

  onFocus = () => {
    this.focusAble = true;
  }

  onInput = (e) => {
    if (this.compostionStartFlag) return;
    const { resetHeight, setAttribute } = this.props;
    // console.log(e.target.textContent);
    resetHeight();
    setAttribute({ text: e.target.innerHTML });
  }

  onCompositionStart = () => {
    this.compostionStartFlag = true;
  }

  onCompositionEnd = (e) => {
    this.compostionStartFlag = false;
    this.onInput(e);
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  render() {
    const { editable } = this.state;
    const {
      setAttrs, resetHeight,
      setAttribute, text, bgColor, ...others
    } = this.props;
    const style = Object.assign({
      width: '100%',
      minHeight: '40px',
      padding: 10,
      background: bgColor,
    }, defaultAttrs, others);
    return (
      <div
        style={style}
        contentEditable={editable}
        onDoubleClick={this.onDoubleClick}
        onCompositionStart={this.onCompositionStart}
        onCompositionEnd={this.onCompositionEnd}
        onBlur={this.onBlur}
        ref={this.setMagicRefs(refNames.editDom)}
        onInput={this.onInput}
        onFocus={this.onFocus}
      />
    );
  }
}

export default Layout(Text, COMPONENT_TYPE_TEXT);
