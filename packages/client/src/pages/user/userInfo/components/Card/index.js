import React from 'react';
import {
  Row, Col, Icon, Tooltip,
} from 'antd';
import QRCode from 'qrcode';
import Preview from '@lzshow/preview';
import { translateShowDataFromStore } from '@lzshow/utils';
import {
  CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW, CLICK_TYPE_DOWNLOAD, CLICK_TYPE_TEMPLATE, CLICK_TYPE_DATA,
} from '../../config';
import { getDomain } from '../../../../../services/apiConfig';

function Register(props) {
  const {
    onClick, id, template, data,
  } = props;
  const [qcorde, setCorde] = React.useState('');
  React.useEffect(() => {
    QRCode.toDataURL(`${getDomain()}/wap.html?id=${id}`)
      .then((url) => {
        setCorde(url);
      });
  }, []);
  return (
    <div className="page-userinfo-card">
      <div className="card-img">
        {
          data.content && <Preview onlyShowFirst data={data.content} />
        }
        <div className="qcorde">
          <img src={qcorde} alt="" width="100%" />
        </div>
      </div>
      <div className="card-title">
        <div className="card-title-txt">未命名场景</div>
        <Row type="flex" justify="space-around" className="card-title-look">
          <Col>
            {data.pv || 0} pv
          </Col>
          <Col>
            0 uv
          </Col>
        </Row>
      </div>
      <Row type="flex" justify="space-around" className="card-op">
        <Col span={12} className="text-center cursor-pointer card-op-item">
          <span className="hove-span" onClick={onClick(CLICK_TYPE_EDIT, id)}><Icon type="edit" />编辑</span>
        </Col>
        <Col span={12} className="text-center cursor-pointer card-op-item">
          <span className="hove-span" onClick={onClick(CLICK_TYPE_PREVIEW, id)}><Icon type="eye" />预览</span>
        </Col>
        <Col span={12} className="text-center cursor-pointer card-op-item">
          <span className="hove-span" onClick={onClick(CLICK_TYPE_DOWNLOAD, id)}><Icon type="download" />下载</span>
        </Col>
        <Col span={12} className="text-center cursor-pointer card-op-item">
          <span className="hove-span" onClick={onClick(CLICK_TYPE_DATA, id)}><Icon type="line-chart" />数据</span>
          {
            // !template
            //   ? (
            //     <Tooltip title="标记为模板，供他人可使用">
            //       <span className="hove-span" onClick={onClick(CLICK_TYPE_TEMPLATE, id)}><Icon type="tag" />模板</span>
            //     </Tooltip>
            //   )
            //   : (
            //     <Tooltip title="取消该模板标记，仅供自己使用">
            //       <span className="hove-span active" onClick={onClick(CLICK_TYPE_TEMPLATE, id)}><Icon type="tag" />模板</span>
            //     </Tooltip>
            //   )
          }
        </Col>
      </Row>
    </div>
  );
}

export default Register;
