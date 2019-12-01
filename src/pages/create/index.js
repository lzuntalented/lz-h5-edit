import React from 'react';
import { Row, Col } from 'antd';
import Setting from '../../components/Setting';
import PageManage from '../../components/PageManage';
import Phone from './phone';
import Control from './components/Control';
import AideLine from './components/AideLine';
import Resource from './components/Resource';
import Preview from './components/Preview';
import Header from './components/Header';
import './event';

// 引入样式文件
import './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { routeParams } = props;
    this.id = routeParams && routeParams.id;
    this.state = {
      showPreview: false,
    };
  }

  showPreview = () => {
    this.setState({ showPreview: true });
  }

  hidePreview = () => {
    this.setState({ showPreview: false });
  }

  render() {
    const { showPreview } = this.state;
    return (
      <div className="home-container">
        <Header showPreview={this.showPreview} />
        <Row type="flex" justify="center">
          <Col>
            <div className="phone-container">
              <div className="header" />
              <div className="content">
                <div className="border-left" />
                <div className="border-right" />
                <Phone id={this.id} />
              </div>
              <AideLine />
              <Control />
              <div className="footer" />
            </div>
          </Col>
        </Row>
        <div className="style-setting-container">
          <Setting />
        </div>
        <div className="page-manage-container">
          <PageManage />
        </div>
        <Resource />
        {showPreview && (
        <Preview
          visible={showPreview}
          hidePreview={this.hidePreview}
        />
        )}
      </div>
    );
  }
}

export default Home;
