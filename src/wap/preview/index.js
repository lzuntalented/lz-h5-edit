import React from 'react';
import Phone from './phone';

// 引入样式文件
import './index.scss';
import { resetComponentSize } from './config';
import { get1024Data } from '../../pages/realpreview/config';

const refNames = {
  content: 'content',
};

class Perview extends React.Component {
  constructor(props) {
    super(props);
    const size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const data = get1024Data();
    resetComponentSize(size, data.list);
    this.data = data;
    this.state = {
    };
    this.magicRefs = {};
  }

  componentDidMount() {
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  prevPage = () => {
    this.magicRefs[refNames.content].prev();
  }

  nextPage = () => {
    this.magicRefs[refNames.content].next();
  }

  render() {
    return (
      <Phone data={this.data} ref={this.setMagicRefs(refNames.content)} />
    );
  }
}

export default Perview;
