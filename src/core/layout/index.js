import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';

import './index.scss';

const { Header, Content } = Layout;// 引入样式文件

class LayoutFrame extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    nav: PropTypes.object,
  }

  static defaultProps = {
    children: null,
    nav: null,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { children, nav } = this.props;
    return (
      <Layout className="layout">
        <Header className="layout-header-container">
          {nav}
        </Header>
        <Content className="layout-content-container">
          {
            children
          }
        </Content>
      </Layout>
    );
  }
}

export default LayoutFrame;
