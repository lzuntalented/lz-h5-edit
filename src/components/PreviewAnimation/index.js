import React, { useState, useEffect } from 'react';
import { TYPE_PREVIEW_ANIMATE_ALL, TYPE_PREVIEW_ANIMATE_CURRENT } from '../../core/constants';

function getCurrentAnimate(list) {
  const [animateIndex, setanimateIndex] = useState(0);
  const animate = list[animateIndex];

  function onAnimationEnd() {
    if (animateIndex > list.length - 1) {
      return;
    }
    setanimateIndex(animateIndex + 1);
  }

  return {
    onAnimationEnd,
    animate,
    setanimateIndex,
  };
}

export default function PreviewAnimation(props) {
  const {
    children, list, style, ...others
  } = props;

  const { animate, onAnimationEnd, setanimateIndex } = getCurrentAnimate(list);

  useEffect(() => {
    setanimateIndex(0);
  }, [list]);

  const {
    name, duration, delay, repeat,
  } = animate || {};
  const animateStyle = Object.assign({
    animation: `${duration}s ease ${delay}s ${repeat} normal both running ${name}`,
  }, style);
  return (
    <div {...others} style={animateStyle} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  );
}
