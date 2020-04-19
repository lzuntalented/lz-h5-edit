import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Upload } from 'antd';
import { COMPONENT_TYPE_PICTURE } from '@lzshow/constants';
import ModalContainer from '../ModalContainer';
import ImageList from './components/ImageList';
import ImageClip from './components/ImageClip';
import { addPageItemWithAttrs, changeActiveItemAttrs } from '../../store/action';
import ConsumerContainer from '../../context/ConsumerContainer';

import './index.scss';

const useCrop = () => {
  const [showCrop, setShowCrop] = useState(false);
  const [cropUrl, setCropUrl] = useState('');
  return {
    showCrop,
    showCropAction: () => { setShowCrop(true); },
    hiddenCropAction: () => { setShowCrop(false); },
    cropUrl,
    setCropUrl,
  };
};

function ImageModal(props) {
  const {
    dispatch, onVisibleChange, visible, addMode = true, config, withCrop, onChangeBackground,
  } = props;
  const imageListRef = useRef();

  const {
    showCrop,
    showCropAction,
    hiddenCropAction,
    cropUrl,
    setCropUrl,
  } = useCrop();

  const { libs } = config || {};
  const { picture } = libs || {};
  const {
    initData, fetchPromise, upLoadProps, cropImage,
  } = picture || {};

  const onAddPicture = imgSrc => () => {
    if (withCrop) {
      setCropUrl(imgSrc);
      showCropAction();
    } else if (!addMode) {
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
    <React.Fragment>
      <ModalContainer
        onCancel={() => { onVisibleChange(false); }}
        maskClosable
        visible={visible}
        className="modal-page-create-image"
        title="图片素材库"
        options={[{
          title: '图片列表',
          comp: (
            <ImageList
              defaultPicture={initData}
              fetchPicture={fetchPromise}
              ref={imageListRef}
              onAddPicture={onAddPicture}
            />
          ),
        }]}
      >
        <Upload
          {...upLoadProps}
          onChange={onFileChange}
        >
          <Button type="primary">
            本地上传
          </Button>
        </Upload>
      </ModalContainer>
      <ImageClip
        cropImage={cropImage}
        visible={showCrop}
        changeVisible={hiddenCropAction}
        src={cropUrl}
        onChangeBackground={onChangeBackground}
      />
    </React.Fragment>
  );
}

ImageModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  addMode: PropTypes.bool,
  withCrop: PropTypes.bool,
};

ImageModal.defaultProps = {
  visible: false,
  addMode: true,
  withCrop: false,
};

export default ConsumerContainer(ImageModal);
