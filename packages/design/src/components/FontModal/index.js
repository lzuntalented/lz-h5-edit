import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { COMPONENT_TYPE_PICTURE } from '@lzshow/constants';
import ModalContainer from '../ModalContainer';
import FontFamily from './components/FontFamily';
import { addPageItemWithAttrs, changeActiveItemAttrs } from '../../store/action';
import ConsumerContainer from '../../context/ConsumerContainer';

import './index.scss';

function ImageModal(props) {
  const {
    onVisibleChange, visible, config, onChange,
  } = props;

  const { libs } = config || {};
  const { font } = libs || {};
  const {
    initData = [],
  } = font || {};

  const onFontSelect = (key) => {
    onVisibleChange(false);
    onChange(key);
  };

  return (
    <ModalContainer
      className="modal-resource-text-font-family"
      onCancel={() => { onVisibleChange(false); }}
      maskClosable
      visible={visible}
      title="字体库"
      options={[{ title: '字体列表', comp: <FontFamily list={initData} onFontSelect={onFontSelect} /> }]}
    />
  );
}

ImageModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  visible: PropTypes.bool,
};

ImageModal.defaultProps = {
  visible: false,
};

export default ConsumerContainer(ImageModal);
