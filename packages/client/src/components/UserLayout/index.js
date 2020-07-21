import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Route } from 'react-router';
import Info from '../../pages/user/userInfo/Loadable';

import './index.scss';

const { Sider, Content } = Layout;

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
      <Layout>
        <Sider>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Route path="/ucenter/info" component={Info} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutFrame;
