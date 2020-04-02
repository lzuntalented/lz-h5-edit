import React from 'react';
import { Drawer, Input, Button } from 'antd';
import Realpreview from '@lz/preview';
import Content from './content';
import ConsumerContainer from '../../context/consumer';
import LzLocalStorage from '../../utils/LocalStorage';
import { LOCALSTORAGE_PREVIEW_NAMESPACE, LOCALSTORAGE_PREVIEW_CHACHE } from '../../core/constants';
import { translateShowDataFromStore, winSize } from '../../utils';

const mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);

export default function Preview(props) {
  const { visible, hidePreview } = props;
  const state = JSON.parse(mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE));
  const content = translateShowDataFromStore(state);
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
        <Realpreview data={content} />
      </div>
      <ConsumerContainer>
        <Content />
      </ConsumerContainer>
    </Drawer>
  );
}
