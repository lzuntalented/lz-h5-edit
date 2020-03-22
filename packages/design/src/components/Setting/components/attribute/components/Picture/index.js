import React, { useCallback, useState } from 'react';
import {
  Row, Col, Button,
} from 'antd';
import ImageModal from '../../../../../ImageModal';

export default function RenderStyle(props) {
  const {
    data, onChange, label, dispatch,
  } = props;

  const [visible, setVisible] = useState(false);
  const showModal = useCallback(() => {
    setVisible(true);
  });

  return (
    <Row className="set-attr-picture" align="middle" type="flex" gutter={8}>
      <Col span={12}>
        <div className="bg-blank">
          <img src={data} alt="" width="100%" />
        </div>
      </Col>
      <Col span={12}>
        <Button onClick={showModal}>更换图片</Button>
      </Col>
      <ImageModal
        addMode={false}
        onVisibleChange={setVisible}
        visible={visible}
        dispatch={dispatch}
      />
    </Row>
  );
}
