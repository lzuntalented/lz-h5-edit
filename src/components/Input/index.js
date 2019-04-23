import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem';
import { COMPONENT_TYPE_TEXT } from '../EditItem/constants';

// function Text() {
//   return <Input placeholder="请输入" />;
// }
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
      props.setAttrs({
        color: 'red',
        fontSize: 12,
        text: '',
      });
    }
    this.focusAble = false;
    // console.log(props, 'props input');
  }

  onDoubleClick = () => {
    const elem = this.magicRefs.editDom;
    this.setState({ editable: true }, () => {
      elem.focus();
      // // 获取选定对象
      // const selection = window.getSelection();
      // // 创建新的光标对象
      // const range = selection.getRangeAt(0);
      // // 获取光标对象的范围界定对象，一般就是textNode对象
      // const textNode = range.startContainer;
      // // 光标位置定位在表情节点的最大长度
      // range.setStart(textNode, (elem && elem.innerText) ? elem.innerText.length : 0);
      // // 使光标开始和光标结束重叠
      // range.collapse(true);
      // // 清除选定对象的所有光标对象
      // selection.removeAllRanges();
      // // 插入新的光标对象
      // selection.addRange(range);
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
    setAttribute({ text: e.target.innerText });
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  componentDidUpdate() {
    if (this.focusAble) {
      const elem = this.magicRefs.editDom;
      // 获取选定对象
      const selection = window.getSelection();
      // 创建新的光标对象
      const range = selection.getRangeAt(0);
      // 获取光标对象的范围界定对象，一般就是textNode对象
      const textNode = range.startContainer;
      // 光标位置定位在表情节点的最大长度
      range.setStart(textNode, (elem && elem.innerText) ? elem.innerText.length : 0);
      // 使光标开始和光标结束重叠
      range.collapse(true);
      // 清除选定对象的所有光标对象
      selection.removeAllRanges();
      // 插入新的光标对象
      selection.addRange(range);
    }
  }

  render() {
    const { editable } = this.state;
    const { color, fontSize, text } = this.props;
    return (
      <div
        style={{
          width: '100%',
          minHeight: '40px',
          padding: 10,
          color,
          fontSize,
        }}
        contentEditable={editable}
        onDoubleClick={this.onDoubleClick}
        onBlur={this.onBlur}
        ref={this.setMagicRefs(refNames.editDom)}
        onInput={this.onInput}
        onFocus={this.onFocus}
      >
        {
          text || '双击编辑文本'
        }
      </div>
    );
  }
}

export default Layout(Text, COMPONENT_TYPE_TEXT);
