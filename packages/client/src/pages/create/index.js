import React, { useEffect, useState } from 'react';
import LzDesign from '@lzshow/design';
import { message } from 'antd';
import {
  getPictureList, cropImage, save, getDetail,
} from '../../services/create';
import apiConfig, { getUrlPrefix } from '../../services/apiConfig';

export default function (props) {
  // 库数据
  const libs = {
    psd: {
      upLoadProps: {
        name: 'upFile',
        accept: 'file',
        // showUploadList: false,
        action: `${getUrlPrefix()}${apiConfig.file.parsePsd}`,
      },
    },
    // 图片库
    picture: {
      initData: [
        'http://www.lzuntalented.cn:8380/static/pic/1589697724000-oev0vndl370c-1.jpg',
      ],
      fetchPromise: getPictureList,
      upLoadProps: {
        name: 'upFile',
        accept: 'image/*',
        action: `${getUrlPrefix()}${apiConfig.file.upload}`,
        showUploadList: false,
      },
      cropImage,
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

  const onPublish = (data, title) => {
    save({ content: data, title }).then(() => {
      window.location.hash = '#/ucenter/info';
      message.success('保存成功');
    });
  };

  const [data, setData] = useState(null);

  const { params } = props;
  const id = params && +params.id;
  useEffect(() => {
    if (id && id > 0) {
      getDetail({ id }).then((resp) => {
        const { content: res } = resp;
        setData(JSON.parse(res));
      });
    }
  }, []);

  return (
    <LzDesign
      onPublish={onPublish}
      libs={libs}
      data={data}
    />
  );
}
