import React from 'react';
import Input from '../../components/Input';
import Picture from '../../components/Picture';
import Setting from '../../components/Setting';

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
            <Picture />
            <Input />
          </div>
          <div className="footer" />
        </div>
        <div className="style-setting-container">
          <Setting />
        </div>
      </div>
    );
  }
}

export default Home;
