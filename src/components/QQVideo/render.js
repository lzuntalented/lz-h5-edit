import React from 'react';
import { Row, Col, Icon } from 'antd';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem/render';
import { winSize } from '../../utils';

function Picture(props) {
  const {
    imgSrc, name, place, height,
  } = props;
  return (
    <div
      style={{
        width: '100%',
        height: height || winSize.height,
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
        <Row type="flex" justify="space-between" className="message">
          <Col className="text-center">
            <div>
              <i className="iconfont icon-phonedianhua i-bg-diss" />
                拒绝
            </div>
          </Col>
          <Col className="text-center">
            <div>
              <i className="iconfont icon-phone2 i-bg-acp" />
                    接听
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Layout(Picture);
