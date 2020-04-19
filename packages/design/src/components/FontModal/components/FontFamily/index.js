import React from 'react';
import {
  Row, Col, Tooltip, Icon,
} from 'antd';

export default function StyleFontFamily(props) {
  const {
    data = {}, onFontSelect, attrs, label, setVisible, list = [],
  } = props;
  return (
    <Row gutter={12}>
      {
      list.map(it => (
        <Col
          key={it.key}
          span={12}
        >
          <div
            className="font-item"
            onClick={() => onFontSelect(it.key)}
          >
            <div
              className="font-item-title"
              style={{ fontFamily: `example-${it.key}` }}
            >
              {it.text}
            </div>
            <div
              className="font-item-desc"
            >
              {it.name}
            </div>
          </div>
        </Col>
      ))
    }
    </Row>
  );
}
