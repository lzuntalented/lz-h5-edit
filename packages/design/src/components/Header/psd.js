import React, { PureComponent } from 'react';
import {
  Upload, message, Button, Icon,
} from 'antd';

import ConsumerContainer from '../../context/ConsumerContainer';

export default ConsumerContainer((props) => {
  const { config, dispatch } = props;
  const { libs } = config || {};
  const { psd } = libs || {};
  const {
    upLoadProps,
  } = psd || {};

  const upprops = {
    ...upLoadProps,
    onChange({ file }) {
      if (file.status !== 'uploading') {
        if (file.status === 'done') {
          if (file.response.data) dispatch(file.response.data);
        }
      }
    },
  };
  return (
    <Upload {...upprops}>
      <Button>
        <Icon type="upload" /> 一键上传PSD文件
      </Button>
    </Upload>
  );
});
