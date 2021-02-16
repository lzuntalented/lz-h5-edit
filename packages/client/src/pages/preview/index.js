import React from 'react';
import {
  Button, Col, Row, Spin, Modal,
} from 'antd';
import QRCode from 'qrcode';
import Phone from '@lzshow/preview';
import html2canvas from 'html2canvas';

// 引入样式文件
import './index.scss';
import { translateShowDataFromStore } from '@lzshow/utils';
import LzLocalStorage from '../../utils/LocalStorage';
import { getDetail } from '../../services/create';
import { LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE } from '../../core/constants';
import { getDomain, getUrlPrefix } from '../../services/apiConfig';

const refNames = {
  content: 'content',
  container: 'container',
};

class Perview extends React.Component {
  constructor(props) {
    super(props);
    const { params, localPreview } = props;
    this.state = { data: {} };

    this.cacheKey = params && +params.id;
    this.state = {
      wapPreviewUrl: null,
      poster: '',
      showPosterModal: false,
    };
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
    this.setState({ showPosterModal: false, poster: '' });
  }

  nextPage = () => {
    this.magicRefs[refNames.content].next();
    this.setState({ showPosterModal: false, poster: '' });
  }

  generatePic = () => {
    this.setState({ showPosterModal: true });
    // console.log(this.magicRefs.container);
    html2canvas(
      this.magicRefs.container.firstChild.firstChild,
      {
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
      },
    )
      .then((canvas) => {
        // const ctx = canvas.getContext('2d');
        const img = new window.Image();
        img.src = this.state.wapPreviewUrl;
        img.style.width = '100px';
        img.style.height = '100px';
        // ctx.drawImage(img, 12, 12, 116, 116, 320 - 148, 480 - 148, 116, 116);

        const panel = window.document.createElement('canvas');
        panel.width = 320;
        panel.height = 480;
        const ctx = panel.getContext('2d');
        ctx.drawImage(canvas, 0, 0);
        ctx.fillStyle = '#1890ff';
        ctx.fillRect(0, panel.height - 50, panel.width, 50);
        ctx.fill();
        ctx.fillRect(panel.width - 120, panel.height - 120, 120, 120);
        ctx.fill();

        // const logoImg = new window.Image();
        // logoImg.src = 'http://www.lzuntalented.cn/img/heart-logo.png';
        // ctx.drawImage(logoImg, 49, panel.height - 49, 102, 48);
        ctx.fillStyle = '#fff';
        ctx.font = '32px Arial';
        const textRect = ctx.measureText('随 心 秀');
        ctx.fillText('随 心 秀', (200 - textRect.width) / 2, panel.height - 15);
        ctx.fill();
        ctx.drawImage(img, panel.width - 110, panel.height - 110, 100, 100);
        const poster = panel.toDataURL();
        this.setState({
          poster,
          showPosterModal: true,
        });
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }

  onDownload = () => {
    const a = window.document.createElement('a');
    a.href = this.state.poster;
    a.download = true;
    a.click();
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
                {data && (
                <div ref={this.setMagicRefs(refNames.container)}>
                  <Phone ref={this.setMagicRefs(refNames.content)} data={data} />
                </div>
                )}
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
              <a><div onClick={this.generatePic}>生成海报</div></a>
            </div>
            )
          }
            </div>
          </Row>
        </Col>
        <Modal
          title="海报"
          visible={this.state.showPosterModal}
          onCancel={() => this.setState({ showPosterModal: false })}
          okText="下载"
          cancelText="取消"
          onOk={this.onDownload}
        >
          <Spin spinning={this.state.poster === ''}>
            <div className="text-center">
              <img width="320" src={this.state.poster} alt="" />
            </div>
          </Spin>
        </Modal>
      </Row>
    );
  }
}

export default Perview;
