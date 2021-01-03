import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import Charts from './components/Charts';
import Record from './components/Record';

import './index.scss';

function Register(props) {
  const { params } = props;
  const id = params && +params.id;
  return (
    <div className="page-userinfo">
      <Tabs
        tabPosition="left"
        defaultActiveKey="2"
        onTabClick={(e) => {
          if (e === '1') window.location.hash = '#/ucenter/info';
        }}
      >
        <Tabs.TabPane tab="我的作品" key="1" />
        <Tabs.TabPane tab="我的数据" key="2">
          <Tabs
            defaultActiveKey="1"
          >
            <Tabs.TabPane tab="浏览数据" key="1">
              <Charts id={id} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="表单数据" key="2">
              <Record id={id} />
            </Tabs.TabPane>
          </Tabs>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Register;
