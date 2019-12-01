import React from 'react';
import { Drawer } from 'antd';
import Realpreview from '../../../realpreview/Loadable';

export default function Preview(props) {
  const { visible, hidePreview } = props;
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
      <Realpreview localPreview />
    </Drawer>
  );
}
