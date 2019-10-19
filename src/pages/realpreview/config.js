import { COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_TEXT } from '../../core/constants';

export function getDragonFestivalData() {
  return {
    backGroundImage: '',
    list: [
      [
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 0,
            left: 0,
            width: 320,
            height: 190,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'fadeInDown',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-bg-top.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 290,
            left: 0,
            width: 320,
            height: 190,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'fadeInUp',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-bg-bottom.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 100,
            left: 60,
            width: 200,
            height: 200,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'rotateInUpLeft',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-circle.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 130,
            left: 120,
            width: 80,
            height: 250,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'zoomIn',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-dw.png',
          },
        },
        {
          type: COMPONENT_TYPE_TEXT,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 170,
            left: 190,
            width: 48,
            height: 250,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'bounceInDown',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            color: '#358d64',
            text: '五月初五',
            fontSize: 14,
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 205,
            left: 40,
            width: 78,
            height: 66,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'swing',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 1,
            // 动画重复次数
            repeat: 'infinite',
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-shake.png',
          },
        },
      ],
      [
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: -30,
            left: 0,
            width: 158,
            height: 106,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'fadeInLeft',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-top-l.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: -30,
            left: 240,
            width: 100,
            height: 100,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'fadeInRight',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-top-r.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 350,
            left: 0,
            width: 320,
            height: 150,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'fadeInUp',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-bottom.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 370,
            left: 150,
            width: 173,
            height: 122,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'swing',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 1,
            // 动画重复次数
            repeat: 'infinite',
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-shake.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 50,
            left: 25,
            width: 269,
            height: 63,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'flipInY',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-title.png',
          },
        },
        {
          type: COMPONENT_TYPE_TEXT,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 58,
            left: 117,
            width: 86,
            height: 50,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'zoomIn',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            color: '#fff',
            text: '端午由来',
            fontSize: 16,
          },
        },
        {
          type: COMPONENT_TYPE_TEXT,
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 110,
            left: 20,
            width: 280,
            height: 300,
            // 旋转角度 deg
            rotate: 0,
          },
          animate: {
            name: 'zoomIn',
            // 动画执行时间 单位(s)
            duration: 1,
            // 动画延时执行 单位(s)
            delay: 0,
            // 动画重复次数
            repeat: 1,
          },
          attrs: {
            color: '#333',
            text: '端午节是我国最大的传统节日之一，下面就跟小编一起来看看端午节的由来吧，仲夏五月人倍忙。五月是传统中国农事劳动最繁重的月份之一,可就是在达忙的时间里,却有一个重大的节日。这看起来似乎有些矛盾,实际上,这种安排是能反映乡土社会生产、生活的运行特点。五月虽忙,但可以忙里偷闲,这闲为的是忙。一段忙碌之后,来一个大或小的节日,既是休息,又可以激发劳动热情,这样,“节日和劳动交替着。在劳动中村民们盼望着下一个节日,节日过后他们又精力充活地投人劳动,他们的生活就是劳动和娱乐的循环过程,然而是十分充实的。',
            fontSize: 12,
          },
        },
      ],
    ],
  };
}

export function getData() {
  return [
  ];
}


export function getChildrenFestivalData() {
  return {
    backGroundImage: '',
    list: [
      [
        {
          rect: {
            width: 320,
            left: -13,
            height: 304,
            top: 53,
            rotate: 0,
          },
          animate: {
            name: 'zoomIn',
            delay: 0,
            duration: 1,
            repeat: 1,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
          attrs: {
            imgSrc:
              'http://www.lzuntalented.cn/tool/h5edit/img/61/1-circle.png',
          },
        }, {
          animate: {
            name: 'fadeInDown',
            delay: 0,
            duration: 1,
            repeat: 1,
          },
          attrs: {
            imgSrc:
              'http://www.lzuntalented.cn/tool/h5edit/img/61/1-top.png',
          },
          rect: {
            width: 333,
            left: -7,
            height: 185,
            top: -68,
            rotate: 1,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInUp',
            delay: 0,
            duration: 1,
            repeat: 1,
          },
          attrs: {
            imgSrc:
              'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bottom.png',
          },
          rect: {
            width: 265,
            left: 8,
            height: 156,
            top: 391,
            rotate: -15,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInUp',
            delay: 0,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bottom.png' },
          rect: {
            width: 346,
            left: -3,
            height: 212,
            top: 366,
            rotate: 1,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
          animate: {
            name: 'fadeInDown',
            delay: 0,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-top.png' },
          rect: {
            width: 383,
            left: -43,
            height: 212,
            top: -104,
            rotate: 0,
          },
        }, {
          animate: {
            name: 'jackInTheBox',
            delay: 0.5,
            repeat: 1,
            duration: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-children.png' },
          rect: {
            width: 219,
            left: 57,
            height: 86,
            top: 146,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'zoomIn',
            delay: 1.5,
            duration: 1,
            repeat: 1,
          },
          attrs: {
            color: '#fe8b9d', fontSize: 14, text: 'create by lz', bgColor: '', lineHeight: 1.5,
          },
          rect: {
            width: 95,
            left: 111,
            height: 41,
            rotate: 0,
            top: 230,
          },
          type: 'COMPONENT_TYPE_TEXT',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInLeft',
            delay: 2,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bl.png' },
          rect: {
            width: 39,
            left: 76,
            height: 40,
            top: 239,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInRight',
            delay: 2,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bl.png' },
          rect: {
            width: 39,
            left: 200,
            height: 40,
            top: 240,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInLeft',
            delay: 2.5,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-left.png' },
          rect: {
            width: 73,
            left: -9,
            height: 202,
            top: 115,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInUp',
            delay: 2.5,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-right.png' },
          rect: {
            width: 57,
            left: 237,
            height: 116,
            top: 306,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }], [{
        animate: {
          name: 'zoomIn',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-bg.png' },
        rect: {
          width: 289,
          left: 16,
          height: 450,
          top: 15,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInLeft',
          delay: 0,
          duration: 1.5,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-top.png' },
        rect: {
          width: 93,
          left: 36,
          height: 84,
          top: 20,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeIn',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-bottom-l.png' },
        rect: {
          width: 132,
          left: 37,
          height: 78,
          top: 382,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'lightSpeedIn',
          delay: 1.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#faa8d4', fontSize: 16, text: '儿童节快乐', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 121,
          left: 103,
          height: 66,
          rotate: 0,
          top: 189,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }]],
  };
}

export function getGKData() {
  return {
    backMusicUrl: 'http://www.lzuntalented.cn/invite/merryseven/music/music1.mp3',
    backGroundImage: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/bg.png',
    list: [
      [
        {
          attrs: {
            color: '#ffffff', fontSize: 12, text: '祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;', bgColor: '', lineHeight: 1.5,
          },
          animate: {
            name: '',
            delay: 0,
            duration: 1,
            repeat: 1,
          },
          rect: {
            width: 291,
            left: 21,
            height: 40,
            top: -1,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_TEXT',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'zoomIn',
            delay: 0.7,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-fight.png' },
          rect: {
            width: 287,
            left: 16,
            height: 76,
            top: 75,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'rollIn',
            delay: 1.2,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-s.png' },
          rect: {
            width: 227,
            left: 44,
            height: 40,
            top: 206,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'zoomIn',
            delay: 1,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-qc.png' },
          rect: {
            width: 287,
            left: 16,
            height: 45,
            top: 156,
            rotate: 0,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }, {
          animate: {
            name: 'fadeInUp',
            delay: 0.4,
            duration: 1,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-bottom.png' },
          rect: {
            width: 320,
            left: -8,
            height: 236,
            rotate: 0,
            top: 254,
          },
          type: 'COMPONENT_TYPE_PICTURE',
          nodeType: 'ITEM_TYPE_SINGLE',
        }], [{
        attrs: {
          color: 'red', fontSize: 12, text: '<span style="color: rgb(255, 255, 255);">祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;</span>', bgColor: '', lineHeight: 1.5,
        },
        animate: {
          delay: 0,
          duration: 1,
          repeat: 1,
          name: '',
        },
        rect: {
          width: 320,
          left: 18,
          height: 40,
          top: -2,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'flipInX',
          delay: 0.7,
          repeat: 1,
          duration: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-1.png' },
        rect: {
          width: 300,
          left: 9,
          height: 85,
          top: 46,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInUp',
          delay: 0.5,
          duration: 1,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-b-2.png' },
        rect: {
          width: 425,
          left: -54,
          height: 230,
          top: 359,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInUp',
          delay: 0.5,
          duration: 1,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-b-1.png' },
        rect: {
          width: 225,
          left: 50,
          height: 178,
          top: 320,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInLeft',
          delay: 1.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 12, text: '全国高考日，祝所有莘莘学子超常发挥', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 233,
          left: 43,
          height: 40,
          top: 244,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInLeft',
          delay: 1.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 12, text: '考入理想的大学，开启属于自己的辉煌人生', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 263,
          left: 29,
          height: 40,
          top: 267,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'zoomIn',
          delay: 1,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 16, text: '十年寒窗苦读', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 127,
          left: 97,
          height: 44,
          top: 147,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'zoomIn',
          delay: 1,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 16, text: '只为今朝金榜题名', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 172,
          left: 83,
          height: 45,
          top: 181,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }], [{
        attrs: {
          color: 'red', fontSize: 12, text: '<span style="color: rgb(255, 255, 255);">祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;</span>', bgColor: '', lineHeight: 1.5,
        },
        animate: {
          delay: 0,
          name: '',
          duration: 1,
          repeat: 1,
        },
        rect: {
          width: 283,
          left: 17,
          height: 40,
          top: -1,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInUp',
          delay: 0.5,
          duration: 1,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/3-b.png' },
        rect: {
          width: 324,
          left: -3,
          height: 212,
          top: 297,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInDown',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/3-t.png' },
        rect: {
          width: 236,
          left: 37,
          height: 70,
          rotate: 0,
          top: 39,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'zoomIn',
          delay: 1.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 12, text: '1、准备好身份证、准考证以及学生证。<div>2、备齐考试工具，2B铅笔、碳素笔、尺子、橡皮檫等需要用到的工具。</div><div>3、当晚查考考试当天的天气情况，做好准备。</div><div>4、提前去考场看看，明确考试场地的坐车路线。</div><div>5、调好闹钟，注意休息养好精神。</div><div>6、注意规律饮食，多和水和少吃热气的东西。</div>', bgColor: '', lineHeight: 1.7,
        },
        rect: {
          width: 275,
          left: 26,
          height: 189,
          rotate: 0,
          top: 119,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInDown',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 16, text: '考前一天', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 95,
          left: 111,
          height: 40,
          top: 61,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }, {
        animate: {
          name: 'fadeInDown',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 12, text: '高考攻略，助你金榜题名', bgColor: '', lineHeight: 1.5,
        },
        rect: {
          width: 156,
          left: 79,
          height: 40,
          rotate: 0,
          top: 33,
        },
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
      }]],
  };
}
