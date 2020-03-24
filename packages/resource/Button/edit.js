import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonEdit(props) {
  const { defaultAttrs, ...others } = props;
  const styleProps = Object.assign({ }, defaultAttrs, others);
  return <Button {...styleProps} />;
}

ButtonEdit.prototype.propTypes = {
  defaultAttrs: PropTypes.object.isRequired,
};
