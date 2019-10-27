import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Row, Col,
} from 'antd';

class LayoutFrame extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClick = ({ key }) => {
    if (key === '2') {
      window.location.hash = '/list';
    } else {
      window.location.hash = '/';
    }
  }

  render() {
    return (
      <Row className="default-header" type="flex" justify="space-between">
        <Col>
          <img onClick={() => this.onClick({ key: '1' })} src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
        </Col>
        <Col>
          <Menu
            defaultSelectedKeys={['1']}
            mode="horizontal"
            onSelect={this.onClick}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">作品集市</Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default LayoutFrame;
