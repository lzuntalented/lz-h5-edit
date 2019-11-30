/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import './render.scss';

export default function EditItemRender(Component) {
  function Layout(props) {
    const {
      rect, attrs, animate, border = {},
    } = props;
    const {
      width, left, top, height, rotate,
    } = rect;
    const {
      name = '',
      duration,
      delay,
      repeat,
    } = animate;
    const cls = `content-hide-container ${animate || ''}`;
    const animateStyle = {
      animation: `${duration}s ease ${delay}s ${repeat} normal both running ${name}`,
      borderStyle: border.style,
      borderWidth: border.width,
      borderColor: border.color,
      borderRadius: border.radius,
    };
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
        <div className={cls} style={animateStyle}>
          <div
            className="content-container"
          >
            <Component {...attrs} />
          </div>
        </div>
      </div>
    );
  }

  Layout.prototype.propTypes = {
    rect: PropTypes.object,
    attrs: PropTypes.object,
    animate: PropTypes.object,
  };

  Layout.prototype.defaultProps = {
    rect: {},
    attrs: {},
    animate: {},
  };

  return Layout;
}
