import React from 'react';
import { Row, Col, Select } from 'antd';

export default function RenderStyle(props) {
  const {
    data, onChange, attrs, label,
  } = props;
  const { options = [] } = attrs || {};
  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={16}>
        <Select value={data} onChange={onChange} style={{ width: '100%' }}>
          {
            options.map(it => <Select.Option key={it.key}>{it.text}</Select.Option>)
        }
        </Select>
      </Col>
    </Row>
  );
}
