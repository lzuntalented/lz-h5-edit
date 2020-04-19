import React, { useCallback, useState } from 'react';
import {
  Row, Col, Select,
} from 'antd';
import FontModal from '../../../../../FontModal';
import ConsumerContainer from '../../../../../../context/ConsumerContainer';

function RenderStyle(props) {
  const [visible, setVisible] = useState(false);
  const {
    data, onChange, label, dispatch, config,
  } = props;

  const { libs } = config || {};
  const { font } = libs || {};
  const {
    initData = [],
  } = font || {};

  const obj = initData?.find(it => it.key === data);

  const onFontChange = (e) => {
    if (e === 'more') {
      setVisible(true);
    } else if (e === '') {
      onChange('');
    }
  };

  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={16}>
        <Select value={data} style={{ width: '100%' }} onChange={onFontChange}>
          <Select.Option value="">默认字体</Select.Option>
          {
            obj && <Select.Option value={obj.key}>{obj.name}</Select.Option>
          }
          <Select.Option value="more">更多字体</Select.Option>
        </Select>
      </Col>
      <FontModal
        addMode={false}
        onVisibleChange={setVisible}
        visible={visible}
        dispatch={dispatch}
        onChange={onChange}
      />
    </Row>
  );
}

export default ConsumerContainer(RenderStyle);
