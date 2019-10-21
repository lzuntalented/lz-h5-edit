import React from 'react';
import { connect } from 'react-redux';
import Hotkeys from 'react-hot-keys';
import Input from '../../components/Input';
import Picture from '../../components/Picture';
import Setting from '../../components/Setting';
import PageManage from '../../components/PageManage';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../core/constants';
import Phone from './phone';
import Control from './control';

// 引入样式文件
import './index.scss';

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
            <Phone />
            <Control />
          </div>
          <div className="footer" />
        </div>
        <div className="style-setting-container">
          <Setting />
        </div>
        <div className="page-manage-container">
          <PageManage />
        </div>
      </div>
    );
  }
}

export default Home;
