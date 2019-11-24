import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from './Input';

function InputEdit(props) {
  const { defaultAttrs, ...others } = props;
  const styleProps = Object.assign({ editAble: true }, defaultAttrs, others);
  return <InputStyle {...styleProps} />;
}

InputEdit.prototype.propTypes = {
  defaultAttrs: PropTypes.object.isRequired,
};

export default InputEdit;
