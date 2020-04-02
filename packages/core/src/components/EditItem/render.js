import React from 'react';
import PropTypes from 'prop-types';
import PreviewAnimation from '../PreviewAnimation';

import './render.scss';

export default function EditItemRender(Component) {
  function Layout(props) {
    const {
      rect, attrs, animate, border = {}, animates, show,
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
      // animation: `${duration}s ease ${delay}s ${repeat} normal both running ${name}`,
      borderStyle: border.style,
      borderWidth: border.width,
      borderColor: border.color,
      borderRadius: border.radius,
    };
    let animateList = [animate];
    if (animates && animates.length > 0) {
      animateList = animates;
    }
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
            <Component showStatus={show} {...attrs} />
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
  };

  Layout.prototype.defaultProps = {
    rect: {},
    attrs: {},
    animate: {},
    border: {},
    animates: {},
  };

  return Layout;
}
