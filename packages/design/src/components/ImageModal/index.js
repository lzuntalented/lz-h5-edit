import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Upload } from 'antd';
import ModalContainer from '../ModalContainer';
import ImageList from '../Header/components/ImageList';
import { addPageItemWithAttrs, changeActiveItemAttrs } from '../../store/action';
import { COMPONENT_TYPE_PICTURE } from '../../core/constants';
import { getUploadProps } from '../Header/config';

import './index.scss';

const uploadProps = getUploadProps();

export default function ImageModal(props) {
  const {
    dispatch, onVisibleChange, visible, addMode = true,
  } = props;
  const imageListRef = useRef();

  const onAddPicture = imgSrc => () => {
    if (!addMode) {
      dispatch(changeActiveItemAttrs({ imgSrc }));
    } else {
      dispatch(addPageItemWithAttrs(COMPONENT_TYPE_PICTURE, { imgSrc }));
    }
    onVisibleChange(false);
  };

  const onFileChange = ({ file }) => {
    if (file.status !== 'uploading') {
      if (file.status === 'done') {
        const { current } = imageListRef;
        if (current) {
          current.refresh();
        }
      }
    }
  };

  return (
    <ModalContainer
      onCancel={() => { onVisibleChange(false); }}
      maskClosable
      visible={visible}
      className="modal-page-create-image"
      title="图片素材库"
      options={[{
        title: '图片列表',
        comp: <ImageList
          ref={imageListRef}
          onAddPicture={onAddPicture}
        />,
      }]}
    >
      <Upload
        {...uploadProps}
        onChange={onFileChange}
      >
        <Button type="primary">
          本地上传
        </Button>
      </Upload>
    </ModalContainer>
  );
}

ImageModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  addMode: PropTypes.bool,
};

ImageModal.defaultProps = {
  visible: false,
  addMode: true,
};
