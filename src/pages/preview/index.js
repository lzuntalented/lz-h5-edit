import React from 'react';
import { connect } from 'react-redux';
import { Button, Carousel } from 'antd';
import Input from '../../components/Input';
import Picture from '../../components/Picture';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';
import Phone from './phone';

// 引入样式文件
import './index.scss';

const refNames = {
  content: 'content',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.magicRefs = {};
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
      <div className="home-container">
        <div className="phone-container">
          <div className="header" />
          <div className="content">
            <Phone ref={this.setMagicRefs(refNames.content)} />
          </div>
          <div className="footer" />
        </div>
        <div className="toggle-page">
          <Button onClick={this.prevPage}>上一页</Button>
          <Button onClick={this.nextPage}>下一页</Button>
        </div>
      </div>
    );
  }
}

export default Home;
