import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
const refNames = {
  editDom: 'editDom',
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

  state = {
    editable: false,
  }

  magicRefs = {}

  componentDidMount() {
    this.componentDidUpdate();
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

  onMouseDown = (e) => {
    if (this.focusAble) {
      e.stopPropagation();
    }
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  render() {
    const { editable } = this.state;
    const {
      resetHeight, setAttribute, fontFamily, defaultAttrs,
      text, bgColor, ...others
    } = this.props;
    const style = Object.assign({
      width: '100%',
      padding: 10,
      background: bgColor,
      outerColor: 'transport',
      textShadow: 'rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) 0px -1px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(214, 214, 214) 1px 1px 0px, rgb(214, 214, 214) 2px 2px 0px, rgb(214, 214, 214) 3px 3px 0px, rgb(214, 214, 214) 4px 4px 0px, rgb(125, 144, 175) 5px 5px 0.2em',
      fontWeight: 'bold',
      fontFamily,
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
        onMouseDown={this.onMouseDown}
      />
    );
  }
}

export default Text;
