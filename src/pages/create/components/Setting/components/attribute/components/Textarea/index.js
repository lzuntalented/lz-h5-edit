import React from 'react';
import { Row, Col, Input } from 'antd';

export default function RenderStyle(props) {
  const {
    data, onChange, label,
  } = props;
  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={16}>
        <Input.TextArea value={data} onChange={e => onChange(e.target.value)} />
      </Col>
    </Row>
  );
}
