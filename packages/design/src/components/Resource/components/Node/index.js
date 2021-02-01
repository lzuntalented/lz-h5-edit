import React from 'react';
import {
  Tabs, Button, Row, Col,
} from 'antd';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_BUTTON,
  COMPONENT_TYPE_INPUT, COMPONENT_TYPE_ART_INPUT, COMPONENT_TYPE_MAP,
  COMPONENT_TYPE_QQ_VIDEO, COMPONENT_TYPE_SHAPE, COMPONENT_TYPE_VIDEO,
  COMPONENT_TYPE_TEXT_TYPED, COMPONENT_TYPE_ART_SHADOW, COMPONENT_TYPE_ART_SOLID,
  COMPONENT_TYPE_ART_BORDER, COMPONENT_TYPE_LINK, COMPONENT_TYPE_MOTHER_DAY,
  COMPONENT_TYPE_LOVE_FOREVER,
} from '@lzshow/constants';
// import { getFontFamilyOptions } from '../../../../core/config';
import { getComponentPreview } from '@lzshow/core';
import { getArtShadowOptions, getArtSolidOptions, getArtBorderOptions } from './config';
import { generatorTexttextShadow } from '../../../../utils';

const { TabPane } = Tabs;

function renderComponentPreview(key) {
  const { comp: Comp, attrs } = getComponentPreview(key);
  return <Comp {...attrs} />;
}

const list = [
  /** previewList slot */
  '37',
  '36',
  '35',
  COMPONENT_TYPE_MOTHER_DAY, COMPONENT_TYPE_LOVE_FOREVER];

export default function Node(props) {
  const { onAddComponent, onAddComponentWithSize, onAddComponentWithAttrs } = props;
  // const fontFamilys = getFontFamilyOptions();
  const artShadows = getArtShadowOptions();
  const artSolids = getArtSolidOptions();
  const artBorders = getArtBorderOptions();

  return (
    <Tabs className="node" defaultActiveKey="1">
      <TabPane tab="基础组件" key="1">
        <div className="text-center m-t-12 m-b-12">
          <Row>
            <Col span={8}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_BUTTON)}>按钮</Button>
            </Col>
            <Col span={8}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_INPUT)}>输入框</Button>
            </Col>
            <Col span={8}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_SHAPE)}>形状</Button>
            </Col>
          </Row>
          <Row className="m-t-8">
            <Col span={8}>
              <Button type="primary" onClick={onAddComponent(COMPONENT_TYPE_MAP)}>地图</Button>
            </Col>
            <Col span={8}>
              <Button type="primary" onClick={onAddComponent(COMPONENT_TYPE_QQ_VIDEO)}>QQ通话</Button>
            </Col>
            <Col span={8}>
              <Button type="primary" onClick={onAddComponent(COMPONENT_TYPE_VIDEO)}>视频</Button>
            </Col>
          </Row>
          <Row className="m-t-8">
            <Col span={8}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_TEXT_TYPED)}>文本打字机</Button>
            </Col>
            <Col span={8}>
              <Button onClick={onAddComponent(COMPONENT_TYPE_LINK)}>链接</Button>
            </Col>
          </Row>
          <div className="space-line" />
          <Row className="node-comp-preview">
            {
            list.map(it => (
              <Col key={it} className="node-comp-preview-item" onClick={onAddComponent(it)}>
                {renderComponentPreview(it)}
              </Col>
            ))
          }
          </Row>
        </div>
      </TabPane>
      <TabPane tab="艺术字" key="2">
        <Row>
          {
            artShadows.map(it => (
              <Col span={8} key={it.textShadowColor}>
                <div
                  className="ys m-b-8"
                  onClick={onAddComponentWithAttrs(COMPONENT_TYPE_ART_SHADOW, it)}
                  style={{
                    textShadow: `${it.textShadowColor} ${it.textShadowX}px ${it.textShadowY}px ${it.textShadowSpread}px`,
                    color: '#fff',
                  }}
                >阴影
                </div>
              </Col>
            ))
          }
          {
            artSolids.map(it => (
              <Col span={8} key={`${it.textShadowColor}${it.textSolidColor}`}>
                <div
                  className="ys m-b-8"
                  onClick={onAddComponentWithAttrs(COMPONENT_TYPE_ART_SOLID, it)}
                  style={{
                    textShadow: generatorTexttextShadow(it),
                    ...it,
                  }}
                >立体
                </div>
              </Col>
            ))
          }
          {
            artBorders.map(it => (
              <Col span={8} key={`${it.textShadowColor}${it.textSolidColor}${it.color}`}>
                <div
                  className="ys m-b-8"
                  onClick={onAddComponentWithAttrs(COMPONENT_TYPE_ART_BORDER, it)}
                  style={{
                    textShadow: generatorTexttextShadow(it),
                    ...it,
                  }}
                >描边
                </div>
              </Col>
            ))
          }
        </Row>
      </TabPane>
    </Tabs>
  );
}
