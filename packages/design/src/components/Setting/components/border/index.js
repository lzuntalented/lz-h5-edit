import React from 'react';
import {
  Row, Col, Input, Slider, Select,
} from 'antd';
import ColorPicker from '../../../ColorPicker';

export default function (props) {
  const {
    border = {}, setBorder,
  } = props;
  const {
    width = 0, style, color, radius = 0,
  } = border;
  return (
    <div className="animate-container">
      <Row align="middle" type="flex" gutter={8}>
        <Col span={8}>边框样式</Col>
        <Col span={16}>
          <Select value={style} onChange={setBorder('style')}>
            <Select.Option value="solid">直线</Select.Option>
            <Select.Option value="dashed">虚线</Select.Option>
          </Select>
        </Col>
      </Row>
      <Row align="middle" type="flex" gutter={8}>
        <Col span={8}>边框颜色</Col>
        <Col span={16}>
          <ColorPicker color={color} onChange={setBorder('color')} />
        </Col>
      </Row>
      <Row align="middle" type="flex" gutter={8}>
        <Col span={8}>边框尺寸</Col>
        <Col span={8}>
          <Slider
            min={0}
            max={30}
            onChange={setBorder('width')}
            value={width}
          />
        </Col>
        <Col span={8}>
          <Input value={width} onChange={setBorder('width')} />
        </Col>
      </Row>
      <Row align="middle" type="flex" gutter={8}>
        <Col span={8}>边框弧度</Col>
        <Col span={8}>
          <Slider
            min={0}
            max={100}
            onChange={setBorder('radius')}
            value={radius}
          />
        </Col>
        <Col span={8}>
          <Input value={radius} onChange={setBorder('radius')} />
        </Col>
      </Row>
    </div>
  );
}
