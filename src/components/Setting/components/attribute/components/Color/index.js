import React from 'react';
import { Row, Col, Select } from 'antd';
import ColorPicker from '../../../../../ColorPicker';

export default function RenderStyle(props) {
  const {
    data, onChange, label,
  } = props;
  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={16}>
        <ColorPicker color={data} onChange={onChange} />
      </Col>
    </Row>
  );
}
