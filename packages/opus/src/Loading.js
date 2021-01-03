import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Phone from '@lzshow/preview';
import { COMPONENT_TYPE_PICTURE } from '@lzshow/constants';

import { saveFormData } from './services/create';

export default function LoadingWrap(props) {
  const { data, marginTop, id } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const { list, backGroundImage } = data;
      if (list.length > 0) {
        //   只预加载首屏资源
        const firstPage = list[0];
        // 背景图片也加入预加载
        const picArr = [backGroundImage];
        firstPage.forEach((it) => {
          const { type, attrs } = it;
          //   预加载图片资源
          if (type === COMPONENT_TYPE_PICTURE) {
            picArr.push(attrs.imgSrc);
          }
        });
        const urls = picArr;
        const total = picArr.length;
        // 预加载成功资源数
        let loadImgSuccessNum = 0;
        // 预加载失败资源数
        let loadImgFailNum = 0;
        urls.forEach((it) => {
          const img = new window.Image();
          img.onload = () => {
            // 每次图片加载成功统计数+1
            loadImgSuccessNum += 1;
            // 资源加载成功失败都显示主屏，防止白屏
            if (loadImgSuccessNum + loadImgFailNum >= total) {
              setIsLoading(false);
            }
          };
          img.onerror = () => {
            loadImgFailNum += 1;
            // 资源加载成功失败都显示主屏，防止白屏
            if (loadImgSuccessNum + loadImgFailNum >= total) {
              setIsLoading(false);
            }
            console.log('todo', '图片加载失败，此处应上报错误');
          };
          img.src = it;
        });
      }
    }
  }, [data]);

  const request = async (d, idx) => {
    if (id && +id > 0 && d) {
      return saveFormData({ data: JSON.stringify(d), idx, id: +id });
    }
    return null;
  };

  return isLoading ? <div className="loading-wrap-container"><Spin /></div> : (
    <Phone
      data={data}
      getRequestHandler={request}
      marginTop={marginTop}
    />
  );
}

LoadingWrap.propTypes = {
  data: PropTypes.object,
  marginTop: PropTypes.number.isRequired,
};

LoadingWrap.defaultProps = {
  data: null,
};
