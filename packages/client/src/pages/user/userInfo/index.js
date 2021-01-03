import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import { translateShowDataFromStore } from '@lzshow/utils';
import Card from './components/Card';
import EmptyCard from './components/EmptyCard';

import './index.scss';
import { getMyList } from '../../../services/template';
import {
  CLICK_TYPE_DEFAULT, CLICK_TYPE_DOWNLOAD, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW, CLICK_TYPE_TEMPLATE, CLICK_TYPE_DATA,
} from './config';
import { getUrlPrefix } from '../../../services/apiConfig';

function Register(props) {
  // const {  }

  const { params } = props;
  const id = params && +params.id;

  const onClick = (type, id) => () => {

  };
  const [state, setState] = useState({
    list: [],
    // 当前页码
    pageIndex: 1,
    // 作品总数
    total: 0,
  });

  const { pageIndex, list } = state;

  useEffect(() => {
    const result = [];
    getMyList({ pageIndex }).then((res) => {
      const { list, total } = res;
      list.forEach(({ id, content, ...others }) => {
        const obj = JSON.parse(content);
        result.push({
          id,
          origin: obj,
          content: translateShowDataFromStore(obj),
          ...others,
        });
      });
      setState({
        pageIndex,
        list: result,
        total,
      });
    });
  }, [pageIndex]);

  const clickCallback = (type, id) => () => {
    if (type === CLICK_TYPE_DEFAULT) {
      window.location.hash = '/create';
    } else if (type === CLICK_TYPE_EDIT) {
      window.location.hash = `/edit/${id}`;
    } else if (type === CLICK_TYPE_PREVIEW) {
      window.location.hash = `/preview/${id}`;
    } else if (type === CLICK_TYPE_DOWNLOAD) {
      window.open(`${getUrlPrefix()}/index/download?id=${id}`, '_blank');
    } else if (type === CLICK_TYPE_TEMPLATE) {
      // 点击模板
      // const { template } = obj;
      // let requestHandler = addTemplate;
      // if (template) {
      //   requestHandler = removeTemplate;
      // }
      // requestHandler({ id }).then(() => {
      //   this.getCardList(pageIndex);
      // });
    } else if (type === CLICK_TYPE_DATA) {
      window.location.href = `#/opus/data/${id}`;
    }
  };

  return (
    <div className="page-userinfo">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        onTabClick={(e) => {
          if (e === '2') window.location.hash = '#/opus/data';
        }}
      >
        <Tabs.TabPane tab="我的作品" key="1">
          <Row type="flex" gutter={24}>
            <Col>
              <EmptyCard />
            </Col>
            {
              list.map(it => (
                <Col key={it.id}>
                  <Card onClick={clickCallback} data={it} id={it.id} />
                </Col>
              ))
            }
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="我的数据" key="2" />
      </Tabs>
    </div>
  );
}

export default Register;
