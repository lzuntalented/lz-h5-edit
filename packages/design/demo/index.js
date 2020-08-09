import React from 'react';
import ReactDOM from 'react-dom';
import LzDesign from '../src';

// 库数据
const libs = {
  // psd
  psd: {
    upLoadProps: {
      name: 'upFile',
      accept: 'file',
      showUploadList: false,
      action: 'http://localhost:8380/file/parsePsd',
    },
  },
  // 图片库
  picture: {
    initData: [
      'http://www.lzuntalented.cn:8380/static/pic/1589697724000-oev0vndl370c-1.jpg',
    ],
    fetchPromise: () => new Promise((r) => { r(); }),
    upLoadProps: {
      name: 'upFile',
      accept: 'image/*',
      showUploadList: false,
    },
    cropImage: () => {},
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
  font: {
    initData: [
      {
        key: 'tianxinyuanyue',
        name: '甜心中文',
        text: '文本示例',
        example: 'http://www.lzuntalented.cn/assets/example/tianxinyuanyue.ttf',
        url: 'http://www.lzuntalented.cn/assets/fonts/tianxinyuanyue.ttf',
      },
      {
        key: 'lanlanlanlandan',
        name: '【蛋蛋】懒懒懒懒蛋',
        text: '文本示例',
        example: 'http://www.lzuntalented.cn/assets/example/lanlanlanlandan.ttf',
        url: 'http://www.lzuntalented.cn/assets/fonts/lanlanlanlandan.ttf',
      },
      {
        key: 'shanmang1',
        name: '【阿苗】闪吗1',
        text: '文本示例',
        example: 'http://www.lzuntalented.cn/assets/example/shanmang1.ttf',
        url: 'http://www.lzuntalented.cn/assets/fonts/shanmang1.ttf',
      },
      {
        key: 'wencangshufang',
        name: '问藏书房',
        text: '文本示例',
        example: 'http://www.lzuntalented.cn/assets/example/wencangshufang.ttf',
        url: 'http://www.lzuntalented.cn/assets/fonts/wencangshufang.ttf',
      },
    ],
  },
};

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <LzDesign
    onPublish={data => console.log('publish', data)}
    libs={libs}
  />,
  rootEl,
);
