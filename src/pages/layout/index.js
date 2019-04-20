import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
} from 'antd';

import getMenuItems from './config';

import './index.scss';

const { Header, Content } = Layout;// 引入样式文件

class LayoutFrame extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props) {
    super(props);
    const hash = props.children.props.history.getCurrentLocation().pathname;
    const menus = getMenuItems();
    this.state = {
      menus,
      tag: 0,
    };
    menus.forEach((it, index) => {
      if (it.link === `#${hash}`) {
        this.state.tag = index;
        this.state.defaultName = it.name;
      }
    });
  }

  render() {
    const { menus, tag, defaultName } = this.state;
    const { children } = this.props;
    return (
      <Layout className="layout">
        <Header className="layout-header-container" />
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
