import React from 'react';
import Setting from '../../components/Setting';
import PageManage from '../../components/PageManage';
import Phone from './phone';
import Control from './components/Control';
import AideLine from './components/AideLine';
import './event';

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
            <div className="border-left" />
            <div className="border-right" />
            <Phone />
          </div>
          <AideLine />
          <Control />
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
