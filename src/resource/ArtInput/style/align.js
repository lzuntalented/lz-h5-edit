import React from 'react';
import {
  Row, Col, Tooltip, Icon,
} from 'antd';

import './style.scss';

function change(cb) {
  return () => {
    cb();
  };
}

export default function StyleAlign(props) {
  const {
    data = {}, onChange, attrs, label,
  } = props;
  const { options = [] } = attrs || {};
  return (
    <Row align="middle" type="flex" gutter={6} className="quick-btns">
      <Col>
        <Tooltip placement="top" title="靠左">
          <Icon type="align-left" className={data.textAlign === 'left' && 'active'} onClick={() => onChange({ textAlign: 'left' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="靠左">
          <Icon type="align-center" className={data.textAlign === 'center' && 'active'} onClick={() => onChange({ textAlign: 'center' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="靠左">
          <Icon type="align-right" className={data.textAlign === 'right' && 'active'} onClick={() => onChange({ textAlign: 'right' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="加粗">
          <Icon type="bold" className={data.fontWeight === 'bold' && 'active'} onClick={() => onChange({ fontWeight: 'bold' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="斜体">
          <Icon type="italic" className={data.fontStyle === 'italic' && 'active'} onClick={() => onChange({ fontStyle: 'italic' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="下划线">
          <Icon type="underline" className={data.textDecoration === 'underline' && 'active'} onClick={() => onChange({ textDecoration: 'underline' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="删除线">
          <Icon type="strikethrough" className={data.textDecoration === 'line-through' && 'active'} onClick={() => onChange({ textDecoration: 'line-through' })} />
        </Tooltip>
      </Col>
      <Col>
        <Tooltip placement="top" title="清除样式">
          <Icon
            type="delete"
            onClick={() => onChange({
              textDecoration: '', fontStyle: '', fontWeight: '', textAlign: 'center',
            })}
          />
        </Tooltip>
      </Col>
    </Row>
  );
}
