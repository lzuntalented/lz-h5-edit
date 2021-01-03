import React from 'react';
import PropTypes from 'prop-types';
import PreviewAnimation from '../PreviewAnimation';

import './render.scss';

// onContentChange={this.onContentChange(it, index, idx)}
//                     contentFormData={this.formData[index]}

export default function EditItemRender(Component) {
  function Layout(props) {
    const {
      rect, attrs, border = {}, animates, show, onContentChange, getContentFormData, getRequestHandler, onItemClick,
    } = props;
    const {
      width, left, top, height, rotate,
    } = rect;
    const cls = 'content-hide-container ';
    const animateStyle = {
      borderStyle: border.style,
      borderWidth: border.width,
      borderColor: border.color,
      borderRadius: border.radius,
    };
    const animateList = animates || [];
    return (
      <div
        className="render-item"
        style={{
          width,
          left,
          top,
          height,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <PreviewAnimation
          className={cls}
          list={animateList}
          style={animateStyle}
        >
          <div
            className="content-container"
          >
            <Component
              onItemClick={onItemClick}
              getRequestHandler={getRequestHandler}
              onContentChange={onContentChange}
              getContentFormData={getContentFormData}
              showStatus={show}
              {...attrs}
              height={height}
            />
          </div>
        </PreviewAnimation>
      </div>
    );
  }

  Layout.prototype.propTypes = {
    rect: PropTypes.object,
    attrs: PropTypes.object,
    animate: PropTypes.object,
    animates: PropTypes.object,
    border: PropTypes.object,
    show: PropTypes.bool,
  };

  Layout.prototype.defaultProps = {
    rect: {},
    attrs: {},
    animate: {},
    border: {},
    animates: {},
    show: false,
  };

  return Layout;
}
