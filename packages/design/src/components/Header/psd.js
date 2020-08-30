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
    beforeUpload: (file) => {
      const isJpgOrPng = /(\.psd)$/.test(file.name);
      // console.log(file.type);
      if (!isJpgOrPng) {
        message.error('仅支持PSD文件!');
      }
      const isLt2M = file.size / 1024 / 1024 < 100;
      if (!isLt2M) {
        message.error('文件大小仅支持100MB以内');
      }
      return isJpgOrPng && isLt2M;
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
