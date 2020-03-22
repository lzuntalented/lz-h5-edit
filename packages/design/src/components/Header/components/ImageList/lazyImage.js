import React from 'react';

export default function (props) {
  const { src, ...others } = props;
  const [showSrc, setShowSrc] = React.useState('http://www.lzuntalented.cn/img/img-default.png');
  React.useState(() => {
    const image = new window.Image();
    image.onload = () => { setShowSrc(src); };
    image.src = src;
  }, []);
  return <img src={showSrc} {...others} alt="" />;
}
