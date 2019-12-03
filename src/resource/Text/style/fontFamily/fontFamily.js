import React from 'react';
import {
  Row, Col, Tooltip, Icon,
} from 'antd';
import { getFontFamilyOptions } from '../../../../core/config';

function change(cb) {
  return () => {
    cb();
  };
}

export default function StyleFontFamily(props) {
  const {
    data = {}, onChange, attrs, label, setVisible,
  } = props;
  const { options = [] } = attrs || {};
  const list = getFontFamilyOptions();
  return (
    <Row gutter={12}>
      {
      list.map(it => (
        <Col
          key={it.text}
          span={12}
        >
          <div
            className="font-item"
            onClick={() => { onChange(it.key); setVisible(false); }}
          >
            <div
              className="font-item-title"
              style={{ fontFamily: it.key }}
            >字体示例
            </div>
            <div
              className="font-item-desc"
            >
              {it.text}
            </div>
          </div>
        </Col>
      ))
    }
    </Row>
  );
}
