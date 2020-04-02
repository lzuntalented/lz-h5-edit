import React from 'react';
import LzDesign from '@lz/design';
import { getPictureList } from '../../services/create';
import apiConfig, { getUrlPrefix } from '../../services/apiConfig';

export default function () {
  // 库数据
  const libs = {
    // 图片库
    picture: {
      initData: [
        'http://www.lzuntalented.cn/img/double11/5d9c01049298a.png',
        'http://www.lzuntalented.cn/img/1.jpg',
        'http://www.lzuntalented.cn/img/double11/5daff75820748.png',
        'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif',
        'http://www.lzuntalented.cn/img/double11/5daff75820657.png',
        'http://www.lzuntalented.cn/img/double11/5daff758207ee.gif',
        'http://www.lzuntalented.cn/img/double11/5daff75845ebc.png',
      ],
      fetchPromise: getPictureList,
      upLoadProps: {
        name: 'upFile',
        accept: 'image/*',
        action: `${getUrlPrefix()}${apiConfig.file.upload}`,
        showUploadList: false,
      },
    },
    // 背景图片库
    bg: {

    },
    // 音乐库
    music: {
      initData: [
        {
          name: 'John Dreamer - Rise',
          url: 'http://www.lzuntalented.cn/assets/music/rise.mp3',
        },
        {
          name: '告白之夜',
          url: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
        },
        {
          name: 'Jingle Bells(圣诞)',
          url: 'http://www.lzuntalented.cn/assets/music/chirmis.m4a',
        },
        {
          name: '大哥 - 迷人的危险 (女生烟嗓版)',
          url: 'http://www.lzuntalented.cn/assets/music/mirendeweixian.mp3',
        },
        {
          name: '兔子牙 - 大田後生仔 (MV版片段)',
          url: 'http://www.lzuntalented.cn/assets/music/datianhoushengzai.mp3',
        },
        {
          name: '兔子牙 - 悬溺 (片段)',
          url: 'http://www.lzuntalented.cn/assets/music/xuanni.mp3',
        },
        {
          name: '婚礼进行曲',
          url: 'http://www.lzuntalented.cn/assets/music/hljinxingqu.mp3',
        },
      ],
    },
  };
  return (
    <LzDesign
      onPublish={data => console.log('publish', data)}
      libs={libs}
    />
  );
}
