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
        <div
          style={{
            border: '1px solid #d9d9d9',
            borderRadius: 4,
            height: 60,
            overflow: 'hidden',
            padding: '4px 8px',
          }}
          contentEditable
          onBlur={e => onChange(e.target.innerHTML)}
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </Col>
    </Row>
  );
}
