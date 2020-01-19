import React, { useState, useEffect } from 'react';

function getCurrentAnimate(list, emptyAnimates) {
  const [animateIndex, setanimateIndex] = useState(0);
  const animate = list[animateIndex] || {};

  function onAnimationEnd() {
    // if (list.length === 1) {
    //   setanimateIndex(2);
    //   return;
    // }
    if (animateIndex >= list.length - 1) {
      if (emptyAnimates) emptyAnimates();
    }
    setanimateIndex(animateIndex + 1);
  }

  return {
    onAnimationEnd,
    animate,
    setanimateIndex,
  };
}

function PreviewAnimation(props) {
  const {
    children, list, style, emptyAnimates, ...others
  } = props;

  const { animate, onAnimationEnd, setanimateIndex } = getCurrentAnimate(list, emptyAnimates);

  useEffect(() => {
    setanimateIndex(0);
  }, [list]);

  const {
    name, duration, delay, repeat,
  } = animate || {};
  let animateStyle = style;
  if (name) {
    animateStyle = Object.assign({
      animation: `${duration}s ease ${delay}s ${repeat} normal both running ${name}`,
    }, style);
  }
  return (
    <div {...others} style={animateStyle} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  );
}

export default PreviewAnimation;

// export default React.memo(PreviewAnimation, (prevProps, nextProps) => {
//   const prevList = prevProps.list;
//   const nextList = nextProps.list;
//   if (prevList.length !== nextList) {
//     return true;
//   }
//   const obj = prevList.find((it, index) => {
//     const item = nextList[index];
//     return Object.keys(it).find(k => it[k] !== item[k]);
//   });
//   return !obj;
// });
