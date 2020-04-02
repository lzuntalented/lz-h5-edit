import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ModalContainer from '../ModalContainer';
import MusicList from './components/MusicList';
import { changeBackMusicUrl } from '../../store/action';
import ConsumerContainer from '../../context/ConsumerContainer';

import './index.scss';

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

  return (
    <ModalContainer
      onCancel={hidden}
      maskClosable
      getContainer={false}
      visible={visible}
      title="音乐库"
      options={[{ title: '音乐列表', comp: <MusicList ref={ref} defaultList={initData} onSelect={onChangeMusic} /> }]}
    />
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
