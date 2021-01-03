import React from 'react';
import {
  Row, Col, Icon, Tooltip, Button,
} from 'antd';
import QRCode from 'qrcode';
import {
  CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW, CLICK_TYPE_DOWNLOAD, CLICK_TYPE_TEMPLATE,
} from '../../config';
import { getDomain } from '../../../../../services/apiConfig';

function Register() {
  return (
    <div className="page-userinfo-card">
      <div className="card-empty-tmp" onClick={() => { window.location.hash = '#/mall'; }}>
        <div>+ 模板创建</div>
      </div>
      <div className="card-empty">
        <Button onClick={() => { window.location.hash = '#/create'; }}>空白创建</Button>
      </div>
    </div>
  );
}

export default Register;
