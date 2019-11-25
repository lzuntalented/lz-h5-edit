import React from 'react';
import {
  Tabs, Button, Row, Col,
} from 'antd';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_INPUT, COMPONENT_TYPE_ART_INPUT, COMPONENT_TYPE_MAP, COMPONENT_TYPE_QQ_VIDEO, COMPONENT_TYPE_SHAPE,
} from '../../../../../../core/constants';

const { TabPane } = Tabs;

export default function Node(props) {
  const { onAddComponent } = props;
  return (
    <Tabs className="node" defaultActiveKey="1">
      <TabPane tab="基础组件" key="1">
        <div className="text-center m-t-12 m-b-12">
          <Row>
            <Col span={6}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_TEXT)}>文本</Button>
            </Col>
            <Col span={6}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_PICTURE)}>图片</Button>
            </Col>
            <Col span={6}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_BUTTON)}>按钮</Button>
            </Col>
            <Col span={6}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_INPUT)}>输入框</Button>
            </Col>
          </Row>
          <Row className="m-t-8">
            <Col span={6}>
              <Button type="primary" onClick={onAddComponent(COMPONENT_TYPE_MAP)}>地图</Button>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={onAddComponent(COMPONENT_TYPE_QQ_VIDEO)}>QQ通话</Button>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={onAddComponent(COMPONENT_TYPE_SHAPE)}>形状</Button>
            </Col>
          </Row>
        </div>
      </TabPane>
      <TabPane tab="艺术字" key="2">
        <Row>
          <Col span={6}>
            <div className="ys ys1" onClick={onAddComponent(COMPONENT_TYPE_ART_INPUT)}>文本</div>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
}
