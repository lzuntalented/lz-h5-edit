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
  text: '',
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
    const { text } = this.props;
    if (this.focusAble) {
      const elem = this.magicRefs.editDom;
      // 获取选定对象
      const selection = window.getSelection();
      // 创建新的光标对象
      const range = selection.getRangeAt(0);
      // 获取光标对象的范围界定对象，一般就是textNode对象
      const textNode = elem;
      // 光标位置定位在表情节点的最大长度
      range.setStart(textNode, elem.childNodes.length);
      // 使光标开始和光标结束重叠
      range.collapse(true);
      // 清除选定对象的所有光标对象
      selection.removeAllRanges();
      // 插入新的光标对象
      selection.addRange(range);
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
    const { resetHeight, setAttribute } = this.props;
    // console.log(e.target.textContent);
    resetHeight();
    setAttribute({ text: e.target.innerHTML });
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  render() {
    const { editable } = this.state;
    const {
      setAttrs, resetHeight, setAttribute, text, bgColor, ...others
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
        onBlur={this.onBlur}
        ref={this.setMagicRefs(refNames.editDom)}
        onInput={this.onInput}
        onFocus={this.onFocus}
        dangerouslySetInnerHTML={{ __html: text || '双击编辑文本' }}
      />
    );
  }
}

export default Layout(Text, COMPONENT_TYPE_TEXT);
