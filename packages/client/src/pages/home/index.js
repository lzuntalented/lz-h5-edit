/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Button } from 'antd';
import JParticles from 'jparticles';

import './index.scss';

const bgRef = React.createRef();

export default () => {
  React.useEffect(() => {
    const Ctor = JParticles.particle;
    const hannder = new Ctor('#bg', {
      num: 40,
    });
    console.log(hannder);
  }, []);
  return (
    <div className="page-home">
      <div className="banner">
        <div className="title-left">
          <h1 className="site-name">随心秀</h1>
          <div className="sub-title">提供一款开源微场景编辑器解决方案</div>
          <div className="line" />
          <div className="btn-container">
            <a href="/#/list" className="m-r-12">
              <Button type="primary">开始探索</Button>
            </a>
            <a href="/#/create" className="m-r-12">
              <Button>体验创造</Button>
            </a>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=lzuntalented&repo=lz-h5-edit&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="160px"
              height="32px"
            />
          </div>
          <div className="line" />
          <div className="eq">
            <img src="http://www.lzuntalented.cn/img/show.home.png" alt="" />
          </div>
        </div>
        <div className="home-logo">
          <img src="http://www.lzuntalented.cn/img/home-log.png" alt="" width="100%" />
          <img src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
        </div>
      </div>
      <div ref={bgRef} id="bg" className="bg-container" />
    </div>
  );
};
