import React, { useRef } from 'react';
import { Drawer, Button } from 'antd';
import Realpreview from '@lzshow/preview';
import { LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE } from '@lzshow/constants';
import { translateShowDataFromStore, winSize } from '@lzshow/utils';
import Content from './content';
import ConsumerContainer from '../../context/consumer';
import LzLocalStorage from '../../utils/LocalStorage';

const mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);

export default function Preview(props) {
  const { visible, hidePreview } = props;
  const state = JSON.parse(mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE, '{}'));
  const content = translateShowDataFromStore(state);
  const total = (content && content.list && content.list.length) || 0;
  const ref = useRef();
  const prevPage = () => {
    const { current } = ref;
    current.prev();
  };

  const nextPage = () => {
    const { current } = ref;
    current.next();
  };
  return (
    <Drawer
      title="作品信息"
      placement="right"
      visible={visible}
      getContainer={false}
      destroyOnClose
      className="drawer-preview"
      onClose={hidePreview}
      closable
    >
      <div className="realperview-container" style={{ ...winSize }}>
        <Realpreview data={content} ref={ref} />
        <div className="toggle-page">
          <div>
            <Button onClick={prevPage}>上一页</Button>
            <p />
            {
              content && content.list
              && <div className="text-center">共{total}页</div>
            }
            <p />
            <Button onClick={nextPage}>下一页</Button>
          </div>
        </div>
      </div>
      <ConsumerContainer>
        <Content />
      </ConsumerContainer>
    </Drawer>
  );
}
