import React from 'react';
import {
  Row, Col, Input, Collapse,
} from 'antd';
import TwoInput from '../TwoInput';

export default function RenderCollapse(props) {
  const {
    data, onChange, label, attrs,
  } = props;
  return (
    <Collapse>
      <Collapse.Panel header="边框" key="1">
        <TwoInput attrs={attrs} />
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>{label}</Col>
          <Col span={16}>
            <Input value={data} onChange={e => onChange(e.target.value)} />
          </Col>
        </Row>
      </Collapse.Panel>
    </Collapse>
  );
}
