/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './event';

import './index.scss';

export default function (Component) {
  function Layout(props) {
    const {
      width, left, top, height, attrs,
    } = props;
    return (
      <div
        className="edit-item"
        style={{
          width,
          left,
          top,
          height,
        }}
      >
        <div className="content-hide-container">
          <div
            className="content-container"
          >
            <Component {...attrs} />
          </div>
        </div>
      </div>
    );
  }

  return Layout;
}
