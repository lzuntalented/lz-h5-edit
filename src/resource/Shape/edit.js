import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Shape';

class PictureEdit extends React.Component {
  static propTypes = {
    resetHeight: PropTypes.func.isRequired,
    imgSrc: PropTypes.string,
  }

  static defaultProps = {
    imgSrc: '',
  }

  onLoad = () => {
    const { resetHeight } = this.props;
    resetHeight();
  }

  render() {
    const { shape, bgColor, stroke } = this.props;
    return (
      <Picture shape={shape} bgColor={bgColor} stroke={stroke} />
    );
  }
}

export default PictureEdit;
