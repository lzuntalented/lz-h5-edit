import React from 'react';
import {
  Button, Col, Row, Input,
} from 'antd';
import QRCode from 'qrcode';
import Phone from '@lzshow/preview';

// 引入样式文件
import './index.scss';
import { translateShowDataFromStore } from '@lzshow/utils';
import LzLocalStorage from '../../utils/LocalStorage';
import { getDetail } from '../../services/create';
import { LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE } from '../../core/constants';
import { getDomain, getUrlPrefix } from '../../services/apiConfig';

const refNames = {
  content: 'content',
};

class Perview extends React.Component {
  constructor(props) {
    super(props);
    const { params, localPreview } = props;
    this.state = { data: {} };

    this.cacheKey = params && +params.id;
    this.state = { wapPreviewUrl: null };
    if (localPreview) {
      this.mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
      const data = this.mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE, '{}');
      this.state.data = translateShowDataFromStore(JSON.parse(data));
    }
    this.magicRefs = {};
    this.wapUrl = `${getDomain()}/wap.html?id=${this.cacheKey}`;
  }

  componentDidMount() {
    if (this.cacheKey && this.cacheKey > 0) {
      getDetail({ id: this.cacheKey }).then((resp) => {
        const { content: res } = resp;
        const data = translateShowDataFromStore(JSON.parse(res));
        this.setState({ data });
      });
      QRCode.toDataURL(this.wapUrl)
        .then((url) => {
          this.setState({ wapPreviewUrl: url });
        });
    }
  }


  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  prevPage = () => {
    this.magicRefs[refNames.content].prev();
  }

  nextPage = () => {
    this.magicRefs[refNames.content].next();
  }

  render() {
    const { wapPreviewUrl, data } = this.state;
    return (
      <Row className="realperview-container" type="flex" align="middle">
        <Col>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <div className="phone-container">
                <div className="header" />
                {data && <Phone data={data} ref={this.setMagicRefs(refNames.content)} />}
                <div className="footer" />
              </div>
            </Col>
            <Col>
              <div className="toggle-page">
                <div>
                  <Button onClick={this.prevPage}>上一页</Button>
                  <p />
                  {
                data && data.list
                && <div className="text-center">共{data.list.length}页</div>
              }
                  <p />
                  <Button onClick={this.nextPage}>下一页</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row type="flex" justify="center" align="middle">
            <div>

              {
            wapPreviewUrl
            && (
            <div className="eq">
              <div>
                <img src={wapPreviewUrl} alt="" className="img" />
                <div className="text-center">手机扫码预览</div>
              </div>
              <div className="m-b-12">{this.wapUrl}</div>
              {
                (this.cacheKey && this.cacheKey > 0) && <a href={`${getUrlPrefix()}/index/download?id=${this.cacheKey}`} target="_blank" rel="noopener noreferrer">离线下载</a>
              }
            </div>
            )
          }
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Perview;
