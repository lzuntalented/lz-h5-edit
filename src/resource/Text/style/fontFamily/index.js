import React from 'react';
import {
  Row, Col, Select,
} from 'antd';
import ModalContainer from '../../../../components/ModalContainer';
import FontFamily from './fontFamily';

import './index.scss';
import { getFontFamilyOptions } from '../../../../core/config';

function onFontChange(onChange, setVisible) {
  return (e) => {
    if (e === 'more') {
      setVisible(true);
    } else if (e === '') {
      onChange('');
    }
  };
}

export default function StyleFontFamily(props) {
  const [visible, setVisible] = React.useState(false);
  const {
    data, onChange, attrs, label,
  } = props;
  const fonts = getFontFamilyOptions();
  const curentFont = fonts.find(it => it.key === data);
  return (
    <Row align="middle" type="flex" gutter={8}>
      <Col span={8}>{label}</Col>
      <Col span={16}>
        <Select value={data} style={{ width: '100%' }} onChange={onFontChange(onChange, setVisible)}>
          <Select.Option value="">默认字体</Select.Option>
          {
            curentFont && <Select.Option value={curentFont.key}>{curentFont.text}</Select.Option>
          }
          <Select.Option value="more">更多字体</Select.Option>
        </Select>
      </Col>
      <ModalContainer
        className="modal-resource-text-font-family"
        onCancel={() => setVisible(false)}
        maskClosable
        visible={visible}
        title="字体库"
        options={[{ title: '字体列表', comp: <FontFamily onChange={onChange} setVisible={setVisible} /> }]}
      />
    </Row>
  );
}
