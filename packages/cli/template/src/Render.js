import React from 'react';
import PropTypes from 'prop-types';

function EditComp(props) {
  const {
    shape,
    stroke,
    STYLE_RENDER_TYPE_INPUT,
    STYLE_RENDER_TYPE_TEXTAREA,
    STYLE_RENDER_TYPE_SLIDER_INPUT,
    STYLE_RENDER_TYPE_HIDDEN,
    STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
    STYLE_RENDER_TYPE_PICTURE,
    STYLE_RENDER_TYPE_FONT,
    textShadowX,
    textShadowY,
  } = props;
  return (
    <div>
      <li>{shape}</li>
      <li>{stroke}</li>
      <li>{STYLE_RENDER_TYPE_INPUT}</li>
      <li>{STYLE_RENDER_TYPE_TEXTAREA}</li>
      <li>{STYLE_RENDER_TYPE_SLIDER_INPUT}</li>
      <li>{STYLE_RENDER_TYPE_HIDDEN}</li>
      <li>{STYLE_RENDER_TYPE_CONTENT_EDIT_DIV}</li>
      <li>{textShadowX}</li>
      <li>{textShadowY}</li>
      <li>{STYLE_RENDER_TYPE_PICTURE}</li>
      <li>{STYLE_RENDER_TYPE_FONT}</li>
    </div>
  );
}

EditComp.prototype.propTypes = {
};

EditComp.prototype.defaultProps = {
};

export default EditComp;
