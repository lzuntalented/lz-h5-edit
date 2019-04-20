import React from 'react';
import EditItem from '../../components/Text';
import Input from '../../components/Input';
import Picture from '../../components/Picture';

import { isUndefined } from '../../utils/Tools';

import './index.scss';
// 引入样式文件

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-container">
        <div className="phone-container">
          <div className="header" />
          <div className="content">
            <Input />
            <Picture />
          </div>
          <div className="footer" />
        </div>
      </div>
    );
  }
}

export default Home;
