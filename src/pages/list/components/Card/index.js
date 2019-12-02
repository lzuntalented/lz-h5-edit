import React from 'react';
import QRCode from 'qrcode';
import { Row, Col, Icon } from 'antd';
import { CLICK_TYPE_DEFAULT, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW } from '../../config';
import Perview from '../Perview';
import { getUrlPrefix } from '../../../../services/apiConfig';

export default (props) => {
  const { data, defaultType, onClick } = props;
  const { src, id, content } = data || {};
  if (defaultType) {
    return (
      <li className="card card-default">
        <div className="border" onClick={onClick(CLICK_TYPE_DEFAULT)}>+</div>
        <div className="bottom" onClick={onClick(CLICK_TYPE_DEFAULT)}>新建场景</div>
      </li>
    );
  }
  const [qcorde, setCorde] = React.useState('');
  React.useEffect(() => {
    QRCode.toDataURL(`http://show.lzuntalented.cn/wap.html?id=${id}`)
      .then((url) => {
        setCorde(url);
      });
  }, []);
  return (
    <li className="card">
      <div className="img">
        <Perview data={content} />
        <div className="qcorde">
          <img src={qcorde} alt="" width="100%" />
        </div>
      </div>
      <Row type="flex" justify="space-around" className="bottom">
        <Col>
          <span className="hove-span" onClick={onClick(CLICK_TYPE_EDIT, id)}><Icon type="edit" />编辑</span>
        </Col>
        <Col onClick={onClick}>
          <span className="hove-span" onClick={onClick(CLICK_TYPE_PREVIEW, id)}><Icon type="eye" />预览</span>
        </Col>
      </Row>
    </li>
  );
};
