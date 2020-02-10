import React from 'react';
import { Row, Col, Input } from 'antd';

export default function RenderStyle(props) {
  const {
    data, onChange, label, attrs,
  } = props;
  const {
    left, right, leftText, rightText,
  } = attrs;
  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={8}>
        <Input value={data[left]} onChange={e => onChange({ [left]: e.target.value })} />
      </Col>
      <Col span={8}>
        <Input value={data[right]} onChange={e => onChange({ [right]: e.target.value })} />
      </Col>
      <Col span={8} />
      <Col span={8} className="text-center">
        {leftText}
      </Col>
      <Col span={8} className="text-center">
        {rightText}
      </Col>
    </Row>
  );
}
