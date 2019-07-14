import { COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_TEXT } from '../../core/constants';

export function getDragonFestivalData() {
  return {
    backGroundImage: '',
    list: [
      [
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 0,
          left: 0,
          width: 320,
          height: 190,
          // 旋转角度 deg
          rotate: 0,
          animate: 'fadeInDown',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-bg-top.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 290,
          left: 0,
          width: 320,
          height: 190,
          // 旋转角度 deg
          rotate: 0,
          animate: 'fadeInUp',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-bg-bottom.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 100,
          left: 60,
          width: 200,
          height: 200,
          // 旋转角度 deg
          rotate: 0,
          animate: 'rotateInUpLeft',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-circle.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 130,
          left: 120,
          width: 80,
          height: 250,
          // 旋转角度 deg
          rotate: 0,
          animate: 'zoomIn',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-dw.png',
          },
        },
        {
          type: COMPONENT_TYPE_TEXT,
          top: 170,
          left: 190,
          width: 48,
          height: 250,
          // 旋转角度 deg
          rotate: 0,
          animate: 'bounceInDown',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            color: '#358d64',
            text: '五月初五',
            fontSize: 14,
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 205,
          left: 40,
          width: 78,
          height: 66,
          // 旋转角度 deg
          rotate: 0,
          animate: 'swing',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 1,
          // 动画重复次数
          animateRepeat: 'infinite',
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-shake.png',
          },
        },
      ],
      [
        {
          type: COMPONENT_TYPE_PICTURE,
          top: -30,
          left: 0,
          width: 158,
          height: 106,
          // 旋转角度 deg
          rotate: 0,
          animate: 'fadeInLeft',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-top-l.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: -30,
          left: 240,
          width: 100,
          height: 100,
          // 旋转角度 deg
          rotate: 0,
          animate: 'fadeInRight',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-top-r.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 350,
          left: 0,
          width: 320,
          height: 150,
          // 旋转角度 deg
          rotate: 0,
          animate: 'fadeInUp',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-bottom.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 370,
          left: 150,
          width: 173,
          height: 122,
          // 旋转角度 deg
          rotate: 0,
          animate: 'swing',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 1,
          // 动画重复次数
          animateRepeat: 'infinite',
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-shake.png',
          },
        },
        {
          type: COMPONENT_TYPE_PICTURE,
          top: 50,
          left: 25,
          width: 269,
          height: 63,
          // 旋转角度 deg
          rotate: 0,
          animate: 'flipInY',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-title.png',
          },
        },
        {
          type: COMPONENT_TYPE_TEXT,
          top: 58,
          left: 117,
          width: 86,
          height: 50,
          // 旋转角度 deg
          rotate: 0,
          animate: 'zoomIn',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
          attrs: {
            color: '#fff',
            text: '端午由来',
            fontSize: 16,
          },
        },
        {
          type: COMPONENT_TYPE_TEXT,
          top: 110,
          left: 20,
          width: 280,
          height: 300,
          // 旋转角度 deg
          rotate: 0,
          animate: 'zoomIn',
          // 动画执行时间 单位(s)
          animateDuration: 1,
          // 动画延时执行 单位(s)
          animateDelay: 0,
          // 动画重复次数
          animateRepeat: 1,
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
    list: [[{
      animate: 'zoomIn', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-circle.png' }, animateDelay: 0, width: 320, left: -13, height: 304, animateName: '', top: 53, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInDown', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-top.png' }, animateDelay: 0, width: 333, left: -7, height: 185, animateName: '', top: -68, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 1, animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bottom.png' }, animateDelay: 0, width: 265, left: 8, height: 156, animateName: '', top: 391, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: -15, animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bottom.png' }, animateDelay: 0, width: 346, left: -3, height: 212, animateName: '', top: 366, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 1, animateRepeat: 1,
    }, {
      animate: 'fadeInDown', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-top.png' }, animateDelay: 0, width: 383, left: -43, height: 212, animateName: '', top: -104, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'jackInTheBox', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-children.png' }, animateDelay: 0.5, width: 219, left: 57, height: 86, animateName: '', top: 146, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'zoomIn',
      attrs: {
        color: '#fe8b9d', fontSize: 14, text: 'create by lz', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 1.5,
      width: 95,
      left: 111,
      height: 41,
      animateName: '',
      top: 230,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'fadeInLeft', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bl.png' }, animateDelay: 2, width: 39, left: 76, height: 40, animateName: '', top: 239, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInRight', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bl.png' }, animateDelay: 2, width: 39, left: 200, height: 40, animateName: '', top: 240, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInLeft', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-left.png' }, animateDelay: 2.5, width: 73, left: -9, height: 202, animateName: '', top: 115, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-right.png' }, animateDelay: 2.5, width: 57, left: 237, height: 116, animateName: '', top: 306, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }], [{
      animate: 'zoomIn', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-bg.png' }, animateDelay: 0, width: 289, left: 16, height: 450, animateName: '', top: 15, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInLeft', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-top.png' }, animateDelay: 0, width: 93, left: 36, height: 84, animateName: '', top: 20, animateDuration: 1.5, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeIn', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-bottom-l.png' }, animateDelay: 0, width: 132, left: 37, height: 78, animateName: '', top: 382, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'lightSpeedIn',
      attrs: {
        color: '#faa8d4', fontSize: 16, text: '儿童节快乐', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 1.5,
      width: 121,
      left: 103,
      height: 66,
      animateName: '',
      top: 189,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }]],
  };
}

export function getGKData() {
  return {
    backMusicUrl: 'http://www.lzuntalented.cn/invite/merryseven/music/music1.mp3',
    backGroundImage: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/bg.png',
    list: [[{
      attrs: {
        color: '#ffffff', fontSize: 12, text: '祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 0,
      width: 291,
      left: 21,
      height: 40,
      animateName: '',
      top: -1,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'zoomIn', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-fight.png' }, animateDelay: 0.7, width: 287, left: 16, height: 76, animateName: '', top: 75, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'rollIn', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-s.png' }, animateDelay: 1.2, width: 227, left: 44, height: 40, animateName: '', top: 206, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'zoomIn', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-qc.png' }, animateDelay: 1, width: 287, left: 16, height: 45, animateName: '', top: 156, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-bottom.png' }, animateDelay: 0.4, width: 320, left: -8, height: 236, animateName: '', top: 254, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }], [{
      attrs: {
        color: 'red', fontSize: 12, text: '<span style="color: rgb(255, 255, 255);">祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;</span>', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 0,
      width: 320,
      left: 18,
      height: 40,
      animateName: '',
      top: -2,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'flipInX', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-1.png' }, animateDelay: 0.7, width: 300, left: 9, height: 85, animateName: '', top: 46, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-b-2.png' }, animateDelay: 0.5, width: 425, left: -54, height: 230, animateName: '', top: 359, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-b-1.png' }, animateDelay: 0.5, width: 225, left: 50, height: 178, animateName: '', top: 320, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInLeft',
      attrs: {
        color: '#ffffff', fontSize: 12, text: '全国高考日，祝所有莘莘学子超常发挥', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 1.4,
      width: 233,
      left: 43,
      height: 40,
      animateName: '',
      top: 244,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'fadeInLeft',
      attrs: {
        color: '#ffffff', fontSize: 12, text: '考入理想的大学，开启属于自己的辉煌人生', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 1.4,
      width: 263,
      left: 29,
      height: 40,
      animateName: '',
      top: 267,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'zoomIn',
      attrs: {
        color: '#ffffff', fontSize: 16, text: '十年寒窗苦读', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 1,
      width: 127,
      left: 97,
      height: 44,
      animateName: '',
      top: 147,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'zoomIn',
      attrs: {
        color: '#ffffff', fontSize: 16, text: '只为今朝金榜题名', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 1,
      width: 172,
      left: 83,
      height: 45,
      animateName: '',
      top: 181,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }], [{
      attrs: {
        color: 'red', fontSize: 12, text: '<span style="color: rgb(255, 255, 255);">祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;</span>', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 0,
      width: 283,
      left: 17,
      height: 40,
      animateName: '',
      top: -1,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'fadeInUp', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/3-b.png' }, animateDelay: 0.5, width: 324, left: -3, height: 212, animateName: '', top: 297, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'fadeInDown', attrs: { imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/3-t.png' }, animateDelay: 0.7, width: 236, left: 37, height: 70, animateName: '', top: 39, animateDuration: 1, type: 'COMPONENT_TYPE_PICTURE', rotate: 0, animateRepeat: 1,
    }, {
      animate: 'zoomIn',
      attrs: {
        color: '#ffffff', fontSize: 12, text: '1、准备好身份证、准考证以及学生证。<div>2、备齐考试工具，2B铅笔、碳素笔、尺子、橡皮檫等需要用到的工具。</div><div>3、当晚查考考试当天的天气情况，做好准备。</div><div>4、提前去考场看看，明确考试场地的坐车路线。</div><div>5、调好闹钟，注意休息养好精神。</div><div>6、注意规律饮食，多和水和少吃热气的东西。</div>', bgColor: '', lineHeight: 1.7,
      },
      animateDelay: 1.4,
      width: 275,
      left: 26,
      height: 189,
      animateName: '',
      top: 119,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'fadeInDown',
      attrs: {
        color: '#ffffff', fontSize: 16, text: '考前一天', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 0.7,
      width: 95,
      left: 111,
      height: 40,
      animateName: '',
      top: 61,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }, {
      animate: 'fadeInDown',
      attrs: {
        color: '#ffffff', fontSize: 12, text: '高考攻略，助你金榜题名', bgColor: '', lineHeight: 1.5,
      },
      animateDelay: 0.7,
      width: 156,
      left: 79,
      height: 40,
      animateName: '',
      top: 33,
      animateDuration: 1,
      type: 'COMPONENT_TYPE_TEXT',
      rotate: 0,
      animateRepeat: 1,
    }]],
  };
}
