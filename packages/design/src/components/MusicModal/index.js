import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ModalContainer from '../ModalContainer';
import MusicList from './components/MusicList';
import { changeBackMusicUrl } from '../../store/action';
import ConsumerContainer from '../../context/ConsumerContainer';

import './index.scss';
import { Button } from 'antd';

function MusicModal(props) {
  const {
    dispatch, onVisibleChange, visible, config,
  } = props;

  const { libs } = config || {};
  const { music } = libs || {};
  const { initData } = music || {};

  const ref = useRef();

  const hidden = () => {
    const { current } = ref;
    if (current) current.onStop();
    onVisibleChange(false);
  };

  const onChangeMusic = (src) => {
    dispatch(changeBackMusicUrl(src));
    hidden();
  };

  const onClear = () => {
    onChangeMusic('');
  };

  return (
    <ModalContainer
      onCancel={hidden}
      maskClosable
      visible={visible}
      title="音乐库"
      options={[{ title: '音乐列表', comp: <MusicList ref={ref} defaultList={initData} onSelect={onChangeMusic} /> }]}
    >
      <Button type="danger" onClick={onClear}>清空音效</Button>
    </ModalContainer>
  );
}

MusicModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  visible: PropTypes.bool,
};

MusicModal.defaultProps = {
  visible: false,
};

export default ConsumerContainer(MusicModal);
