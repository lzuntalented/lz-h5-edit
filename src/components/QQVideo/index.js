import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';
import Layout from '../EditItem';
import { COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO } from '../../core/constants';
import { winSize } from '../../utils';

import './index.scss';

// 组件默认属性
const defaultAttrs = {
  // 图片地址
  imgSrc: 'http://www.lzuntalented.cn/img/1.jpg',
  name: 'lz',
  place: '北京',
};

class Picture extends React.Component {
  static propTypes = {
    registerAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
  }

  magicRefs = {}

  constructor(props) {
    super(props);
    props.registerAttrs(defaultAttrs);
  }

  componentDidMount() {
    // this.resetHeight();
  }

  render() {
    const { imgSrc, name, place } = this.props;
    const { height } = winSize;
    return (
      <div
        style={{
          width: '100%',
          height,
          background: '#232129',
        }}
        className="component-qq-video"
      >
        <Row type="flex" justify="space-between" className="nav">
          <Col>
            <span className="name">{name}</span><br /><span className="place">{place}</span>
          </Col>
          <Col>
            <img src={imgSrc} height="56" alt="" />
          </Col>
        </Row>
        <div className="bottom">
          <Row type="flex" justify="space-between" className="message">
            <Col className="text-center">
              <Icon type="clock-circle" /><br />
              提醒我
            </Col>
            <Col className="text-center">
              <Icon type="message" /><br />
              信息
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Layout(Picture, COMPONENT_TYPE_QQ_VIDEO);
