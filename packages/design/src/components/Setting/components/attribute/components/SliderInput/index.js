import React from 'react';
import {
  Row, Col, Slider, Input,
} from 'antd';

export default function RenderSlideInputStyle(props) {
  const {
    data, onChange, attrs = {}, label,
  } = props;
  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={8}>
        <Slider
          {...attrs}
          onChange={onChange}
          value={data}
        />
      </Col>
      <Col span={8}>
        <Input value={data} onChange={e => onChange(e.target.value)} />
      </Col>
    </Row>
  );
}
