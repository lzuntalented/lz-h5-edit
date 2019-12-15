import {
  EXAMPLE_DATA_THINKSGIVING, EXAMPLE_DATA_DOUBLE_ELEVEN, EXAMPLE_DATA_1024,
  EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION, EXAMPLE_DATA_DOUBLE_TWENTY,
} from './constants';
import { translateShowDataFromStore } from '../utils';

export function getFontFamilyOptions() {
  const list = [
    {
      key: 'tianxinyuanyue',
      text: '甜心中文',
    },
    {
      key: 'lanlanlanlandan',
      text: '【蛋蛋】懒懒懒懒蛋',
    },
    {
      key: 'shanmang1',
      text: '【阿苗】闪吗1',
    },
    {
      key: 'wencangshufang',
      text: '问藏书房',
    },
  ];
  return list;
}

/* ==========================================以下本地模板============================================= */
export function getDragonFestivalData() {
  return {
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
    moveTag: false,
    editList: {
      bmph4v: {
        name: '文本6',
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 110,
          left: 20,
          width: 280,
          height: 300,
          rotate: 0,
        },
        animate: {
          name: 'zoomIn',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          color: '#333',
          text: '端午节是我国最大的传统节日之一，下面就跟小编一起来看看端午节的由来吧，仲夏五月人倍忙。五月是传统中国农事劳动最繁重的月份之一,可就是在达忙的时间里,却有一个重大的节日。这看起来似乎有些矛盾,实际上,这种安排是能反映乡土社会生产、生活的运行特点。五月虽忙,但可以忙里偷闲,这闲为的是忙。一段忙碌之后,来一个大或小的节日,既是休息,又可以激发劳动热情,这样,“节日和劳动交替着。在劳动中村民们盼望着下一个节日,节日过后他们又精力充活地投人劳动,他们的生活就是劳动和娱乐的循环过程,然而是十分充实的。',
          fontSize: 12,
        },
      },
      h20173: {
        name: '图片2',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 350,
          left: 0,
          width: 320,
          height: 150,
          rotate: 0,
        },
        animate: {
          name: 'fadeInUp',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-bottom.png',
        },
      },
      c03lyz: {
        name: '图片0',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 0,
          left: 0,
          width: 320,
          height: 190,
          rotate: 0,
        },
        animate: {
          name: 'fadeInDown',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-bg-top.png',
        },
      },
      kjcyxk: {
        name: '图片2',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 100,
          left: 60,
          width: 200,
          height: 203,
          rotate: 0,
        },
        animate: {
          name: 'rotateInUpLeft',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-circle.png',
        },
      },
      ep9tei: {
        name: '图片1',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 290,
          left: 0,
          width: 320,
          height: 190,
          rotate: 0,
        },
        animate: {
          name: 'fadeInUp',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-bg-bottom.png',
        },
      },
      gj9lfz: {
        name: '文本4',
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 170,
          left: 190,
          width: 48,
          height: 250,
          rotate: 0,
        },
        animate: {
          name: 'bounceInDown',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          color: '#358d64',
          text: '五月初五',
          fontSize: 14,
        },
      },
      cpeemm: {
        name: '图片3',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 370,
          left: 150,
          width: 173,
          height: 122,
          rotate: 0,
        },
        animate: {
          name: 'swing',
          duration: 1,
          delay: 1,
          repeat: 'infinite',
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-shake.png',
        },
      },
      '0smjer': {
        name: '图片5',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 205,
          left: 40,
          width: 78,
          height: 66,
          rotate: 0,
        },
        animate: {
          name: 'swing',
          duration: 1,
          delay: 1,
          repeat: 'infinite',
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-shake.png',
        },
      },
      '5p1z7f': {
        name: '图片3',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 130,
          left: 120,
          width: 80,
          height: 250,
          rotate: 0,
        },
        animate: {
          name: 'zoomIn',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/1-dw.png',
        },
      },
      '4bi5rl': {
        name: '图片0',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -30,
          left: 0,
          width: 158,
          height: 106,
          rotate: 0,
        },
        animate: {
          name: 'fadeInLeft',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-top-l.png',
        },
      },
      '1ula7v': {
        name: '图片4',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 50,
          left: 25,
          width: 269,
          height: 63,
          rotate: 0,
        },
        animate: {
          name: 'flipInY',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-title.png',
        },
      },
      exn405: {
        name: '图片1',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -30,
          left: 240,
          width: 100,
          height: 100,
          rotate: 0,
        },
        animate: {
          name: 'fadeInRight',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/2-bg-top-r.png',
        },
      },
      h3jt9c: {
        name: '文本5',
        type: 'COMPONENT_TYPE_TEXT',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 58,
          left: 117,
          width: 86,
          height: 50,
          rotate: 0,
        },
        animate: {
          name: 'zoomIn',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          color: '#fff',
          text: '端午由来',
          fontSize: 16,
        },
      },
    },
    groupList: {},
    activeEditKey: [],
    pages: [
      [
        'c03lyz',
        'ep9tei',
        'kjcyxk',
        '5p1z7f',
        'gj9lfz',
        '0smjer',
      ],
      [
        '4bi5rl',
        'exn405',
        'h20173',
        'cpeemm',
        '1ula7v',
        'h3jt9c',
        'bmph4v',
      ],
    ],
    activePage: 0,
    moveBoundRect: {},
    backGroundImage: '',
  };
}

export function getChildrenFestivalData() {
  return {
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
    moveTag: false,
    editList: {
      '8cn3iz': {
        name: '图片1',
        animate: {
          name: 'fadeInDown',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-top.png',
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
      },
      nqibpw: {
        name: '图片1',
        animate: {
          name: 'fadeInLeft',
          delay: 0,
          duration: 1.5,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-top.png',
        },
        rect: {
          width: 93,
          left: 36,
          height: 84,
          top: 20,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '1ijae9': {
        name: '图片3',
        animate: {
          name: 'fadeInUp',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bottom.png',
        },
        rect: {
          width: 346,
          left: -3,
          height: 212,
          top: 366,
          rotate: 1,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '2nlxmp': {
        name: '文本6',
        animate: {
          name: 'zoomIn',
          delay: 1.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#fe8b9d',
          fontSize: 14,
          text: 'create by lz',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      '675qbp': {
        name: '文本3',
        animate: {
          name: 'lightSpeedIn',
          delay: 1.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#faa8d4',
          fontSize: 16,
          text: '儿童节快乐',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      cdl42u: {
        name: '图片9',
        animate: {
          name: 'fadeInLeft',
          delay: 2.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-left.png',
        },
        rect: {
          width: 73,
          left: -9,
          height: 202,
          top: 115,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      dz5kp4: {
        name: '图片0',
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
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-circle.png',
        },
      },
      tldcuo: {
        name: '图片7',
        animate: {
          name: 'fadeInLeft',
          delay: 2,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bl.png',
        },
        rect: {
          width: 39,
          left: 76,
          height: 40,
          top: 239,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '8esv27': {
        name: '图片8',
        animate: {
          name: 'fadeInRight',
          delay: 2,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bl.png',
        },
        rect: {
          width: 39,
          left: 200,
          height: 40,
          top: 240,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      k3pmvf: {
        name: '图片2',
        animate: {
          name: 'fadeIn',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-bottom-l.png',
        },
        rect: {
          width: 132,
          left: 37,
          height: 78,
          top: 382,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      twde0a: {
        name: '图片0',
        animate: {
          name: 'zoomIn',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/2-bg.png',
        },
        rect: {
          width: 289,
          left: 16,
          height: 450,
          top: 15,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      jmbuno: {
        name: '图片5',
        animate: {
          name: 'jackInTheBox',
          delay: 0.5,
          repeat: 1,
          duration: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-children.png',
        },
        rect: {
          width: 219,
          left: 57,
          height: 86,
          top: 146,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '5u7ijo': {
        name: '图片4',
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
        animate: {
          name: 'fadeInDown',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-top.png',
        },
        rect: {
          width: 383,
          left: -43,
          height: 212,
          top: -104,
          rotate: 0,
        },
      },
      zzy6ok: {
        name: '图片2',
        animate: {
          name: 'fadeInUp',
          delay: 0,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-bottom.png',
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
      },
      '7abxki': {
        name: '图片10',
        animate: {
          name: 'fadeInUp',
          delay: 2.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/61/1-right.png',
        },
        rect: {
          width: 57,
          left: 237,
          height: 116,
          top: 306,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
    },
    groupList: {},
    activeEditKey: [],
    pages: [
      [
        'dz5kp4',
        '8cn3iz',
        'zzy6ok',
        '1ijae9',
        '5u7ijo',
        'jmbuno',
        '2nlxmp',
        'tldcuo',
        '8esv27',
        'cdl42u',
        '7abxki',
      ],
      [
        'twde0a',
        'nqibpw',
        'k3pmvf',
        '675qbp',
      ],
    ],
    activePage: 0,
    moveBoundRect: {},
    backGroundImage: '',
  };
}

export function getGKData() {
  return {
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
    moveTag: false,
    editList: {
      bl56cy: {
        name: '文本0',
        attrs: {
          color: 'red',
          fontSize: 12,
          text: '<span style="color: rgb(255, 255, 255);">祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;</span>',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      psard7: {
        name: '文本0',
        attrs: {
          color: 'red',
          fontSize: 12,
          text: '<span style="color: rgb(255, 255, 255);">祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;</span>',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      irq9b9: {
        name: '图片2',
        animate: {
          name: 'rollIn',
          delay: 1.2,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-s.png',
        },
        rect: {
          width: 227,
          left: 44,
          height: 40,
          top: 206,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '352o7g': {
        name: '图片2',
        animate: {
          name: 'fadeInDown',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/3-t.png',
        },
        rect: {
          width: 236,
          left: 37,
          height: 70,
          rotate: 0,
          top: 39,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      xqqm94: {
        name: '文本4',
        animate: {
          name: 'fadeInLeft',
          delay: 1.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '全国高考日，祝所有莘莘学子超常发挥',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      m5zc1r: {
        name: '图片1',
        animate: {
          name: 'flipInX',
          delay: 0.7,
          repeat: 1,
          duration: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-1.png',
        },
        rect: {
          width: 300,
          left: 9,
          height: 85,
          top: 46,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      d6sa8j: {
        name: '图片2',
        animate: {
          name: 'fadeInUp',
          delay: 0.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-b-2.png',
        },
        rect: {
          width: 425,
          left: -54,
          height: 230,
          top: 359,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      g7xrpx: {
        name: '图片4',
        animate: {
          name: 'fadeInUp',
          delay: 0.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-bottom.png',
        },
        rect: {
          width: 320,
          left: -8,
          height: 236,
          rotate: 0,
          top: 254,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '5p9gis': {
        name: '文本7',
        animate: {
          name: 'zoomIn',
          delay: 1,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 16,
          text: '只为今朝金榜题名',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      nviuv5: {
        name: '图片1',
        animate: {
          name: 'zoomIn',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-fight.png',
        },
        rect: {
          width: 287,
          left: 16,
          height: 76,
          top: 75,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      '0bysis': {
        name: '文本6',
        animate: {
          name: 'zoomIn',
          delay: 1,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 16,
          text: '十年寒窗苦读',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      gccvi0: {
        name: '图片1',
        animate: {
          name: 'fadeInUp',
          delay: 0.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/3-b.png',
        },
        rect: {
          width: 324,
          left: -3,
          height: 212,
          top: 297,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      gj0v9f: {
        name: '文本3',
        animate: {
          name: 'zoomIn',
          delay: 1.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '1、准备好身份证、准考证以及学生证。<div>2、备齐考试工具，2B铅笔、碳素笔、尺子、橡皮檫等需要用到的工具。</div><div>3、当晚查考考试当天的天气情况，做好准备。</div><div>4、提前去考场看看，明确考试场地的坐车路线。</div><div>5、调好闹钟，注意休息养好精神。</div><div>6、注意规律饮食，多和水和少吃热气的东西。</div>',
          bgColor: '',
          lineHeight: 1.7,
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
      },
      vc4wp6: {
        name: '文本4',
        animate: {
          name: 'fadeInDown',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 16,
          text: '考前一天',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      y9uujc: {
        name: '文本5',
        animate: {
          name: 'fadeInDown',
          delay: 0.7,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '高考攻略，助你金榜题名',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      oqvfpx: {
        name: '文本5',
        animate: {
          name: 'fadeInLeft',
          delay: 1.4,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '考入理想的大学，开启属于自己的辉煌人生',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      eohtr6: {
        name: '图片3',
        animate: {
          name: 'fadeInUp',
          delay: 0.5,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/2-b-1.png',
        },
        rect: {
          width: 225,
          left: 50,
          height: 178,
          top: 320,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
      y85v40: {
        name: '文本0',
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '祝&nbsp; /&nbsp; 广&nbsp; /&nbsp; 大&nbsp; /&nbsp; 考&nbsp; /&nbsp; 生&nbsp; /&nbsp; 高&nbsp; /&nbsp; 考&nbsp; /&nbsp; 顺&nbsp; /&nbsp; 利&nbsp;',
          bgColor: '',
          lineHeight: 1.5,
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
      },
      poapds: {
        name: '图片3',
        animate: {
          name: 'zoomIn',
          delay: 1,
          duration: 1,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/1-qc.png',
        },
        rect: {
          width: 287,
          left: 16,
          height: 45,
          top: 156,
          rotate: 0,
        },
        type: 'COMPONENT_TYPE_PICTURE',
        nodeType: 'ITEM_TYPE_SINGLE',
      },
    },
    groupList: {},
    activeEditKey: [],
    pages: [
      [
        'y85v40',
        'nviuv5',
        'irq9b9',
        'poapds',
        'g7xrpx',
      ],
      [
        'psard7',
        'm5zc1r',
        'd6sa8j',
        'eohtr6',
        'xqqm94',
        'oqvfpx',
        '0bysis',
        '5p9gis',
      ],
      [
        'bl56cy',
        'gccvi0',
        '352o7g',
        'gj0v9f',
        'vc4wp6',
        'y9uujc',
      ],
    ],
    activePage: 0,
    moveBoundRect: {},
    backGroundImage: 'http://www.lzuntalented.cn/tool/h5edit/img/gk/bg.png',
  };
}

export function get1024Data() {
  return {
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
    moveTag: false,
    editList: {
      '31g0t9': {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 76,
          left: 59,
          width: 200,
          height: 108,
          rotate: 0,
        },
        animate: {
          name: 'zoomIn',
          duration: 1,
          delay: 0,
          repeat: 1,
          animateRepeat: 'infinite',
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/1024/1024.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ptq3fd: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 220,
          left: 0,
          width: 320,
          height: 227,
          rotate: 0,
        },
        animate: {
          name: 'bounceInUp',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/1024/1.b.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '2t4g46': {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 410,
          left: -26,
          width: 356,
          height: 108,
          rotate: 0,
        },
        animate: {
          name: 'bounceInUp',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/1024/1.cloud.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      uckxb1: {
        name: '文本 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 444,
          left: 114,
          width: 320,
          height: 40,
          rotate: 0,
        },
        animate: {
          name: 'bounceInUp',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          color: '#181818',
          fontSize: 12,
          text: '科技创造未来',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '8be4tj': {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 87,
          left: 32,
          width: 259,
          height: 266,
          rotate: 0,
        },
        animate: {
          name: 'zoomIn',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 14,
          text: '10月24日程序员节，是中国程序员的共同节日。1024是2的十次方，二进制计数的基本计量单位之一。程序员英文Programmer，是从事程序开发、维护的专业人员。程序员就像是一个个 1024，以最低调、踏实、核心的功能模块搭建起这个科技世界。部分互联网机构一直密切关注程序员健康，针对程序员经常周末加班与工作日熬夜的情况，倡议每年的10月24日为1024程序员节，在这一天建议程序员拒绝加班。',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      d52jd3: {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 36,
          left: 90,
          width: 132,
          height: 61,
          rotate: 0,
        },
        animate: {
          name: 'bounceInDown',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/1024/2.gif',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      svxbim: {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 348,
          left: 0,
          width: 320,
          height: 227,
          rotate: 0,
        },
        animate: {
          name: 'bounceInUp',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/1024/1.b.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
    },
    groupList: {},
    activeEditKey: [],
    pages: [
      [
        '31g0t9',
        'ptq3fd',
        '2t4g46',
        'uckxb1',
      ],
      [
        '8be4tj',
        'd52jd3',
        'svxbim',
      ],
    ],
    activePage: 0,
    moveBoundRect: {},
    backGroundImage: 'http://www.lzuntalented.cn/img/1024/bg.jpg',
  };
}

export function getDouble11Data() {
  return {
    moveTag: false,
    editList: {
      igw735: {
        name: '图片 8',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 222, left: 47, width: 222, height: 114, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        attrs:
          { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75845ebc.png?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      g06kr4: {
        name: '图片 10',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 363, left: 215, width: 36, height: 57, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ihsie2: {
        name: '图片 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 243, left: -3, width: 118, height: 179, rotate: 0,
        },
        animate:
        {
          name: 'bounceInLeft', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820748.png?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      fqnbim: {
        name: '图片 8',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 126, width: 70, height: 120, rotate: 0,
        },
        animate:
        {
          name: 'bounceIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ptq3fd: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 220, left: 0, width: 320, height: 227, rotate: 0,
        },
        animate:
        {
          name: 'bounceInUp', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/1024/1.b.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '276gd2': {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 16, left: 16, width: 288, height: 182, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5d9c01049298a.png?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      tg9c2z: {
        name: '文本 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 424, left: 86, width: 165, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0.3, repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 12, text: '不挤不堵双十一保价到底', bgColor: '', lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      gwtjrr: {
        name: '图片 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 121, left: 54, width: 208, height: 100, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75845ebc.png?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      jt7tr1: {
        name: '文本 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 149, left: 104, width: 120, height: 41, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#ffffff', fontSize: 14, text: '我第一重优惠', bgColor: '', lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      r9sww2: {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 422, left: 0, width: 320, height: 84, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820657.png?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      lnfsqj: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 416, left: 13, width: 294, height: 60, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0.3, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff758207ee.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      e99kmp: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 341, left: 125, width: 64, height: 91, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '00yscr': {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 73, left: -81, width: 320, height: 319, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: '//bpic.588ku.com/original_pic/19/10/11/b13e770bdd6274e7e0c41fb82c65899a.jpg!/fw/252/quality/99/unsharp/true/compress/true' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      uckxb1: {
        name: '文本 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
        {
          top: 444, left: 114, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#181818', fontSize: 12, text: '科技创造未来', bgColor: '', lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      f4i69i: {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 379, left: 225, width: 36, height: 51, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '31g0t9': {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 76, left: 59, width: 200, height: 108, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1, animateRepeat: 'infinite',
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/1024/1024.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      e4x8s0: {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 55, left: 43, width: 230, height: 58, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs:
          { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff758207ee.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '0c5zwm': {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 415, left: -1, width: 320, height: 83, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820657.png?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '3wbedl': {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 53, left: 52, width: 223, height: 48, rotate: 0,
        },
        animate:
        {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff758207ee.gif?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '8be4tj': {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 87, left: 32, width: 259, height: 266, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 14,
          text: '10月24日程序员节，是中国程序员的共同节日。1024是2的十次方，二进制计数的基本计量单位之一。程序员英文Programmer，是从事程序开发、维护的专业人员。程序员就像是一个个 1024，以最低调、踏实、核心的功能模块搭建起这个科技世界。部分互联网机构一直密切关注程序员健康，针对程序员经常周末加班与工作日熬夜的情况，倡议每年的10月24日为1024程序员节，在这一天建议程序员拒绝加班。',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      bp4985: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 143,
          left: 81,
          width: 157,
          height: 128,
          rotate: 0,
        },
        animate: {
          name: 'flipInY', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text:
            '我是品牌内容介绍<div>可随意修改</div><div>我是品牌内容介绍<div>可随意修改</div></div><div>我是品牌内容介绍<div>可随意修改</div></div>',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      svxbim: {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 348, left: 0, width: 320, height: 227, rotate: 0,
        },
        animate:
        {
          name: 'bounceInUp', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/1024/1.b.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      bvyil9: {
        name: '文本 10',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 258,
          left: 109,
          width: 121,
          height: 41,
          rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        attrs:
        {
          color: 'red',
          fontSize: 12,
          text: '<span style="color: rgb(255, 255, 255); font- size: 14px; ">我第一重优惠</span>',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '2a5tm1': {
        name: '文本 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 197, left: 97, width: 137, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#ff00d5', fontSize: 16, text: '全场五折疯抢', bgColor: '', lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      bwvs12: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 204, left: 17, width: 290, height: 60, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff7582086b.png?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      z9lamm: {
        name: '图片 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 242, left: 217, width: 116, height: 122, rotate: 264,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff75820748.png?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      nqnh0g: {
        name: '文本 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 53, left: 128, width: 79, height: 40, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '品牌介绍',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '7hstuw': {
        name: '图片 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
        {
          top: 374, left: 229, width: 48, height: 98, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      v8a00s: {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 362, left: 43, width: 56, height: 106, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '5de3vo':
      {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 399, left: 1, width: 320, height: 89, rotate: 0,
        },
        animate:
        {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff75820657.png?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      wtv7ia: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 328, left: 123, width: 84, height: 134, rotate: 0,
        },
        animate: {
          name: 'bounceIn',
          duration: 1,
          delay: 0.5,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '2t4g46': {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
        {
          top: 410, left: -26, width: 356, height: 108, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0, repeat: 1,
        },
        attrs:
          { imgSrc: 'http://www.lzuntalented.cn/img/1024/1.cloud.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      d52jd3: {
        name: '图片 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 36, left: 90, width: 132, height: 61, rotate: 0,
        },
        animate: {
          name: 'bounceInDown', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/1024/2.gif' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      suoar7: {
        name: '图片 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 365, left: 47, width: 50, height: 100, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: {
          imgSrc:
            'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      o5exgh: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 351, left: 59, width: 50, height: 78, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif?x-oss-process=style/w750&t=1',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      mhhyfy: {
        name: '文本 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 56, left: 123, width: 94, height: 40, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          color: '#ffffff',
          fontSize: 12,
          text: '活动详情',
          bgColor: '',
          lineHeight: 1.5,
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
    },
    groupList: {},
    activeEditKey: [],
    pages:
      [['5de3vo', '276gd2', 'bwvs12', '2a5tm1', 'lnfsqj', 'tg9c2z', 'ihsie2', 'z9lamm', 'fqnbim', 'o5exgh', 'g06kr4'],
        ['3wbedl', 'nqnh0g', 'r9sww2', 'wtv7ia', 'v8a00s', '7hstuw', 'bp4985'], ['e4x8s0', 'mhhyfy', '0c5zwm', 'e99kmp', 'f4i69i', 'suoar7', 'gwtjrr', 'igw735', 'jt7tr1', 'bvyil9']],
    activePage: 0,
    moveBoundRect: {},
    backGroundImage: 'http://www.lzuntalented.cn/img/double11/5daff758204db.gif?x-oss-process=style/w750&t=1',
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
  };
}

export function getThinksgivingData() {
  return {
    pages: [
      ['71n3bn', 'np6qla', '6yiwuf', '43t0ii', '6dgnaj', 'unlmqh', 'x1f7ju', 'c9hdpz', 'mnhwnu', 'grsi2z', 'k378wn', '0yyj7g', 'wq3j8p', 'qpggco'],
      ['wzwmi8', 'gfss9a', 'ufwzd4', 'pl65my', 'ism0vv', 'zjdi5x', 'ff6rqv', 'sima1c', 'zc5ilj'], ['wn7cx5', 'i4cb3w', 'os6dry', '1tczw1', 'ib7sx8', 'abxr2f', '6hscwd', 'iswq2w'],
      ['j4a4dd', '87tx55', 'eygpw4', '9nd7is', 'i97m18', 'ishgy2'], ['284es5', 'v1el9f', 'uytwwt', 'aag0j7', 'ng10xl', 'ypazl1', 'fpqr5a', '7g8hre']],
    editList: {
      wn7cx5:
        {
          name: '文本 1',
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 60, left: 16, width: 308, height: 188, rotate: 0,
          },
          animate: {
            name: 'rotateInDownRight',
            duration: 1,
            delay: 0.3,
            repeat: 1,
          },
          attrs: {
            fontStyle: '',
            color: '#9e7a52',
            fontWeight: '',
            opacity: 1,
            text:
              '你是我此生甜蜜的邂逅，<div>让我再不会在世间孤单的漂流，<div>希望你能接受这永恒的指环，</div><div>让闪耀如不灭的星斗，</div><div>从此让幸福成为我们心头最温柔的刺绣！</div></div>',
            fontSize: 14,
            textAlign: 'left',
            lineHeight: 1.5,
            letterSpacing: 6,
            textDecoration: '',
            bgColor: '',
          },
          type: 'COMPONENT_TYPE_TEXT',
        },
      k378wn:
        {
          name: '文本 1 拷贝',
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: 338, left: 187, width: 84, height: 42, rotate: 0,
          },
          animate: {
            name:
              'zoomIn',
            duration: 1,
            delay: 1,
            repeat: 1,
          },
          attrs: {
            fontStyle: '',
            color: '#9e7a52',
            fontWeight: '',
            opacity: 1,
            text: '@父母',
            fontSize: 14,
            textAlign: 'left',
            lineHeight: 1.5,
            letterSpacing: 4,
            textDecoration: '',
            bgColor: '',
          },
          type: 'COMPONENT_TYPE_TEXT',
        },
      ff6rqv: {
        name: '图片 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 245, left: -15, width: 144, height: 181, rotate: 69,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/flower.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ishgy2: {
        name: '文本 1 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
            {
              top: 27, left: 16, width: 222, height: 47, rotate: 0,
            },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '亲爱的朋友：',
          fontSize: 18,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 2,
          textDecoration: '',
          bgColor: '',
        },
        type:
            'COMPONENT_TYPE_TEXT',
      },
      '6yiwuf': {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      q45378: {
        name: '图片 2 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 225, left: 157, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '87tx55': {
        name: '图片 2',
        nodeType:
            'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
                'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ufwzd4: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top:
              -7,
          left: 312,
          width: 10,
          height: 504,
          rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      uytwwt: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      d95ue6: {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
            {
              top: 108, left: 16, width: 222, height: 123, rotate: 0,
            },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#373535',
          fontWeight: '',
          opacity: 1,
          text: '父爱似海，宽广伟大，浩瀚无边；母爱似泉，连绵不断，滋润心田；母爱似花，温馨芬芳，一生相伴。母亲节来临之际，祝天下父母幸福快乐，身体健康。',
          fontSize: 14,
          textAlign: 'center',
          lineHeight: 1.5,
          letterSpacing: 0,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '2sae56': {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      pl65my: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -246,
          left:
              152,
          width: 10,
          height: 504,
          rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      gfss9a: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '53i992': {
        name:
            '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      wzwmi8: {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 21,
          left: 23,
          width: 271,
          height: 43,
          rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.5, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '亲爱的老爸老妈：',
          fontSize: 18,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 2,
          textDecoration: '',
          bgColor: '',
        },
        type:
            'COMPONENT_TYPE_TEXT',
      },
      wq3j8p: {
        name: '文本 1 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 377, left: 189, width: 84, height: 42, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 1, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '@朋友',
          fontSize: 14,
          textAlign:
              'left',
          lineHeight: 1.5,
          letterSpacing: 4,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      m41qq3: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      grsi2z: {
        name: '图片 6 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
            {
              top: 247, left: 0, width: 168, height: 187, rotate: 74,
            },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0.3, repeat: 1,
        },
        attrs: {
          imgSrc:
                'http://www.lzuntalented.cn/img/gen/flower.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      iswq2w: {
        name: '图片 8',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 168,
          left: 131,
          width: 156,
          height: 172,
          rotate: 0,
        },
        animate: {
          name: 'zoomInRight', duration: 1, delay: 0.8, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/heart.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '0yyj7g': {
        name: '文本 1 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
            {
              top: 357, left: 188, width: 84, height: 42, rotate: 0,
            },
        animate: {
          name: 'zoomIn', duration: 1, delay: 1, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '@爱人',
          fontSize: 14,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 4,
          textDecoration: '',
          bgColor: '',
        },
        type:
            'COMPONENT_TYPE_TEXT',
      },
      '71n3bn': {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 29, left: 13, width: 223, height: 176, rotate: 0,
        },
        animate: {
          name: 'fadeIn', duration: 1, delay: 1, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text:
              '今天，<div>你是否会想起那个</div><div>抚育过你，责骂过你，</div><div>照顾过你，包容过你，</div><div>关心过你，爱过你..的人</div><div>这个感恩节</div><div>我想@最重要的你</div>',
          fontSize: 14,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 4,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      qpggco: {
        name: '文本 1 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 262, left: 189, width: 131, height: 62, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.8, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '不要等到明天<div>才想起感恩</div>',
          fontSize: 14,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 4,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      ap9lm7: {
        name: '图片 10',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 131,
          left: 43,
          width: 320,
          height: 212,
          rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzun' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      xpimyi: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ng10xl: {
        name: '图片 2 拷贝 拷贝',
        nodeType:
            'ITEM_TYPE_SINGLE',
        rect: {
          top: 225, left: 157, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
                'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      i97m18: {
        name: '图片 2 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 225,
          left: 157,
          width: 10,
          height: 504,
          rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ism0vv: {
        name: '图片 2 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 225, left: 157, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      i4cb3w: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      abxr2f: {
        name: '文本 1 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect:
            {
              top: 22, left: 16, width: 222, height: 45, rotate: 0,
            },
        animate: {
          name: 'rotateInDownRight', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color:
                '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '宝贝：',
          fontSize: 18,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 0,
          textDecoration: '',
          bgColor: '',
        },
        type:
            'COMPONENT_TYPE_TEXT',
      },
      '6hscwd': {
        name: '图片 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 232, left: 26, width: 227, height: 311, rotate: 0,
        },
        animate: {
          name:
              'slideInUp',
          duration: 1,
          delay: 0.2,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/love.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      vmn0wm: {
        name:
            '文本 15 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 315, left: 188, width: 122, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInRight',
          duration: 1,
          delay:
                0.8,
          repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#000000',
          fontWeight: '',
          opacity: 1,
          text: '123',
          fontSize: 12,
          textAlign: 'center',
          lineHeight: 1.5,
          letterSpacing: 0,
          textDecoration: '',
          bgColor: '#9e7a52',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      v1el9f: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4,
          left: 0,
          width: 10,
          height: 504,
          rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      q0zray: {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 108, left: 16, width: 222, height: 123, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#373535',
          fontWeight: '',
          opacity: 1,
          text:
              '父爱似海，宽广伟大，浩瀚无边；母爱似泉，连绵不断，滋润心田；母爱似花，温馨芬芳，一生相伴。母亲节来临之际，祝天下父母幸福快乐，身体健康。',
          fontSize: 14,
          textAlign: 'center',
          lineHeight: 1.5,
          letterSpacing: 0,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      unlmqh: {
        name: '图片 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 19, left: 199, width: 94, height: 106, rotate: 0,
        },
        animate: {
          name: 'bounceInDown',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/gan.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      pie6o6: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs:
            { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '9nd7is': {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -246, left: 152, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      np6qla: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '7g8hre': {
        name: '输入框 7 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 170, left: 61, width: 184, height: 44, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          text: '留言内容',
          color: '#000',
          bgColor: '按钮',
        },
        type: 'COMPONENT_TYPE_INPUT',
      },
      vuok5m: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -246,
          left: 152,
          width: 10,
          height: 504,
          rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      j35vpy: {
        name: '图片 2 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 225, left: 157, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      k8rli5: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -4, left: 0, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '1tczw1': {
        name: '图片 2 拷贝',
        nodeType:
            'ITEM_TYPE_SINGLE',
        rect: {
          top: -246, left: 152, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
                'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '4lrbf3': {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 108,
          left: 16,
          width: 222,
          height: 123,
          rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#373535',
          fontWeight: '',
          opacity: 1,
          text: '父爱似海，宽广伟大，浩瀚无边；母爱似泉，连绵不断，滋润心田；母爱似花，温馨芬芳，一生相伴。母亲节来临之际，祝天下父母幸福快乐，身体健康。',
          fontSize: 14,
          textAlign: 'center',
          lineHeight: 1.5,
          letterSpacing: 0,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      ypazl1: {
        name: '按钮 6',
        nodeType:
            'ITEM_TYPE_SINGLE',
        rect: {
          top: 246, left: 62, width: 182, height: 40, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs:
            { text: '提交', type: 'primary' },
        type: 'COMPONENT_TYPE_BUTTON',
      },
      ib7sx8: {
        name: '图片 2 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 225,
          left: 157,
          width: 10,
          height: 504,
          rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      x1f7ju: {
        name: '图片 6 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 143, left: 178, width: 66, height: 78, rotate: 0,
        },
        animate: {
          name: 'bounceInDown', duration: 1, delay: 0.2, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/en.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      aag0j7: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -246, left: 152, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      mnhwnu: {
        name: '图片 6 拷贝 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 220, left: 238, width: 66, height: 63, rotate: 0,
        },
        animate: {
          name: 'bounceInDown', duration: 1, delay: 0.6, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/xin.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      fpqr5a: {
        name: '输入框 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 93, left: 62, width: 184, height: 45, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          text: '姓名', color: '#000', bgColor: '按钮',
        },
        type: 'COMPONENT_TYPE_INPUT',
      },
      '0hm4jb': {
        name: '图片 2 拷贝 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 225, left: 157, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      zjdi5x: {
        name: '文本 1 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 58, left: 24, width: 271, height: 146, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft',
          duration: 1,
          delay: 0.7,
          repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text:
              '<div>父爱似海，宽广伟大，浩瀚无边；母爱似泉，连绵不断，滋润心田；母爱似花，温馨芬芳，一生相伴。母亲节来临之际，祝天下父母幸福快乐，身体健康。</div>',
          fontSize: 14,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 2,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      ygnki6:
        {
          name: '图片 2 拷贝',
          nodeType: 'ITEM_TYPE_SINGLE',
          rect: {
            top: -246, left: 152, width: 10, height: 504, rotate: 90,
          },
          animate: {
            name: '',
            duration: 1,
            delay: 0,
            repeat: 1,
          },
          attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
          type: 'COMPONENT_TYPE_PICTURE',
        },
      os6dry: {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate:
            {
              name: '', duration: 1, delay: 0, repeat: 1,
            },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '284es5': {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 33, left: 45, width: 222, height: 42, rotate: 0,
        },
        animate: {
          name: 'fadeIn',
          duration: 1,
          delay: 0,
          repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '留言祝福',
          fontSize: 16,
          textAlign:
              'center',
          lineHeight: 1.5,
          letterSpacing: 0,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      eygpw4: {
        name: '图片 2 拷贝',
        nodeType:
            'ITEM_TYPE_SINGLE',
        rect: {
          top: -7, left: 312, width: 10, height: 504, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
                'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      zc5ilj: {
        name: '文本 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 428,
          left: 9,
          width: 320,
          height: 47,
          rotate: 0,
        },
        animate: {
          name: 'jackInTheBox', duration: 1, delay: 1.2, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color: '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text: '常回家看看',
          fontSize: 16,
          textAlign: 'center',
          lineHeight: 1.5,
          letterSpacing: 5,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '43t0ii': {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -246, left: 152, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '',
          duration: 1,
          delay:
              0,
          repeat: 1,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      c9hdpz: {
        name: '图片 6 拷贝 拷贝',
        nodeType:
            'ITEM_TYPE_SINGLE',
        rect: {
          top: 121, left: 241, width: 66, height: 78, rotate: 0,
        },
        animate: {
          name: 'bounceInDown', duration: 1, delay: 0.4, repeat: 1,
        },
        attrs: {
          imgSrc: 'http://www.lzuntalented.cn/img/gen/zai.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      sima1c: {
        name: '图片 7 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 336, left: 110, width: 238, height: 122, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/one.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '1yzifk': {
        name: '图片 2 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: -246, left: 152, width: 10, height: 504, rotate: 90,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        attrs: {
          imgSrc:
              'http://www.lzuntalented.cn/img/gen/border.png',
        },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '9z1ci3': {
        name: '文本 15',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 270, left: 188, width: 122, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.8, repeat: 1,
        },
        attrs:
          {
            fontStyle: '',
            color: '#000000',
            fontWeight: '',
            opacity: 1,
            text: '123',
            fontSize: 12,
            textAlign: 'center',
            lineHeight: 1.5,
            letterSpacing: 0,
            textDecoration: '',
            bgColor: '#9e7a52',
          },
        type: 'COMPONENT_TYPE_TEXT',
      },
      j4a4dd: {
        name: '文本 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 65,
          left: 17,
          width: 293,
          height: 146,
          rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.3, repeat: 1,
        },
        attrs: {
          fontStyle: '',
          color:
              '#9e7a52',
          fontWeight: '',
          opacity: 1,
          text:
              '感谢你陪我闯过那些风那些雨，感谢在最无助的时候有你鼓励，感谢在孤独的时候至少还有你，亲爱的朋友，<div>想说真得很谢谢你陪我走过人生那么多里地!</div>',
          fontSize: 14,
          textAlign: 'left',
          lineHeight: 1.5,
          letterSpacing: 5,
          textDecoration: '',
          bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '6dgnaj':
          {
            name: '图片 2 拷贝 拷贝',
            nodeType: 'ITEM_TYPE_SINGLE',
            rect: {
              top: 225, left: 157, width: 10, height: 504, rotate: 90,
            },
            animate: {
              name: '', duration: 1, delay: 0, repeat: 1,
            },
            attrs: { imgSrc: 'http://www.lzuntalented.cn/img/gen/border.png' },
            type: 'COMPONENT_TYPE_PICTURE',
          },
    },
    moveTag: false,
    backGroundImage: 'http://www.lzuntalented.cn/img/gen/bg.jpg',
    activeEditKey: [],
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/datianhoushengzai.mp3',
    moveBoundRect: {},
    activePage: 0,
    groupList: {},
    moveInfo: null,
  };
}

export function getDouble12Data() {
  return {
    pages: [['5fgeyv', 'i5i0d9', '6fifd6', 'cl5tnx', 'p8oo6p', 'jadzpl', 'p0nla5', '6h2hk2', '6v3vx5', 'm6wyzd', 'spxxlf', 'n9hxit', '7evni6', 'xrb2bi', 'd2e9fe'], ['nwrmuu', 'cmw2i1', 'pua7m5', 'crcm0q', 'tdwvul', 'ewtcgn', 'i9uibu', 'pc2lu0', 'w3ahtr', 'fyn378', '9odmoq'], ['mgxwjc', 'wtzmfh', '4c2v9f', 'kl2gbl', 'ieex7k', 'v30pz7', '2ganqs', '4e6s5g', '6hhi7f', 'mafvji', 'x3lcgi', '4wf671'], ['wl9qoi', 'lfya0w', 'tx6hci', 'yurxie', 'al24w5', '439c6m', 'hgt6np', 'i285i0', 'tdm0ek', 'uaj4fy', 'rfkqrj', 'xbyive'], ['0fhbr9', 'piwrca', 'p97v0n', '39591w', 'aw2rix', 'k7haum', '3o77cg', 'ih0iyn', 'vb0rgk', '29cb6x', 'hdcih7', 'fomif7', 'aauqij']],
    editList: {
      '4c2v9f': {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '4e6s5g': {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      kl2gbl: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '439c6m': {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '6v3vx5': {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '3o77cg': {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '9odmoq': {
        name: '文本 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 106, left: 7, width: 320, height: 130, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#000000', fontWeight: '', opacity: 1, text: '填写内容<div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><br></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div>', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      d2e9fe: {
        name: '图片 14 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 201, left: 281, width: 32, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInRight', duration: 1, delay: 1.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560903000-oaa0rjol2tdj-13d08884-86bf-4bcf-87b7-0878ce8922a1-2783.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      w3ahtr: {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '7n428e': {
        name: '文本 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 85, left: -3, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 0.4, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#1e1e1e', fontWeight: '', opacity: 1, text: '活动时间：2019.12.12', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '6hhi7f': {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      p8oo6p: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      vzf4iy: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '1qirng': {
        name: '文本 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 106, left: 7, width: 320, height: 130, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#000000', fontWeight: '', opacity: 1, text: '填写内容<div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><br></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div><div>填写内容<span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;">填写内容</span><span style="letter-spacing: 0px;"><br></span></div>', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      t68x8x: {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 66, left: 79, width: 179, height: 138, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559733000-lxtknagsd2bm-4906221f-beff-46da-aed0-f7006dbfa521-3018.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      hgt6np: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      mafvji: {
        name: '文本 7 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 37, left: -14, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'slideInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '》》限时特卖', fontSize: 20, fontFamily: '', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      ieex7k: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      pua7m5: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '2ganqs': {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      yjgolw: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      nwrmuu: {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      tw25r1: {
        name: '文本 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 85, left: -3, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 0.4, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#1e1e1e', fontWeight: '', opacity: 1, text: '活动时间：2019.12.12', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      aw2rix: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      o0itun: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '1awdqz': {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      tdwvul: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      n9hxit: {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      p97v0n: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      thtoz1: {
        name: '图片 10',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 305, left: -14, width: 93, height: 173, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '5i4t2e': {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      wl9qoi: {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '29cb6x': {
        name: '文本 7 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 37, left: -14, width: 320, height: 51, rotate: 0,
        },
        animate: {
          name: 'slideInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '》》立即报名', fontSize: 20, fontFamily: '', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      i5i0d9: {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 66, left: 79, width: 179, height: 138, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559733000-lxtknagsd2bm-4906221f-beff-46da-aed0-f7006dbfa521-3018.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      pc2lu0: {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ewtcgn: {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '2jzjs3': {
        name: '艺术字 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 133, left: 40, width: 268, height: 62, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#249960', fontWeight: 'bold', opacity: 1, text: '优惠为你而来', fontSize: 24, textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_ART_INPUT',
      },
      choig1: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      jadzpl: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      xbyive: {
        name: '文本 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 214, left: 57, width: 223, height: 28, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0.6, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#ffffff', fontWeight: '', opacity: 1, text: '惊爆价：99元', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 0.7, letterSpacing: 0, textDecoration: '', bgColor: '#0e4b4c',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      lfya0w: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      uaj4fy: {
        name: '文本 7 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 37, left: -14, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'slideInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '》》限时特卖', fontSize: 20, fontFamily: '', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      t12bt1: {
        name: '文本 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 85, left: -3, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 0.4, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#1e1e1e', fontWeight: '', opacity: 1, text: '活动时间：2019.12.12', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      mprcuk: {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 66, left: 79, width: 179, height: 138, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559733000-lxtknagsd2bm-4906221f-beff-46da-aed0-f7006dbfa521-3018.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      pkzdk0: {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 66, left: 79, width: 179, height: 138, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559733000-lxtknagsd2bm-4906221f-beff-46da-aed0-f7006dbfa521-3018.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      xqxl85: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '4j7pjf': {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      al24w5: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      yn0bfj: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '5fgeyv': {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '2ve2kf': {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      tupowc: {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '25almk': {
        name: '艺术字 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 133, left: 40, width: 268, height: 62, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#249960', fontWeight: 'bold', opacity: 1, text: '优惠为你而来', fontSize: 24, textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_ART_INPUT',
      },
      cmw2i1: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '4wf671': {
        name: '文本 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 214, left: 57, width: 223, height: 28, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0.6, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#ffffff', fontWeight: '', opacity: 1, text: '惊爆价：99元', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 0.7, letterSpacing: 0, textDecoration: '', bgColor: '#0e4b4c',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      ih0iyn: {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      i285i0: {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      h2danu: {
        name: '图片 8',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 0, left: 0, width: 320, height: 523, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: '' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '6h2hk2': {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      jpyu5b: {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      xfd6gw: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '39591w': {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ic4y0a: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      xrb2bi: {
        name: '图片 14',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 202, left: 13, width: 32, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 1.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560903000-oaa0rjol2tdj-13d08884-86bf-4bcf-87b7-0878ce8922a1-2783.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      hdcih7: {
        name: '输入框 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 93, left: 77, width: 180, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { text: '姓名', color: '#000', bgColor: '按钮' },
        type: 'COMPONENT_TYPE_INPUT',
      },
      u2okpi: {
        name: '艺术字 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 133, left: 40, width: 268, height: 62, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#249960', fontWeight: 'bold', opacity: 1, text: '优惠为你而来', fontSize: 24, textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_ART_INPUT',
      },
      cl5tnx: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      mgxwjc: {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      piwrca: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      rfkqrj: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 91, left: 87, width: 193, height: 111, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575536857000-m4a1rhqjs92o-1002N150926DW03-V史严梦-018.JPG' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      vb0rgk: {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      wtzmfh: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      p0nla5: {
        name: '艺术字 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 133, left: 40, width: 268, height: 62, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#249960', fontWeight: 'bold', opacity: 1, text: '优惠为你而来', fontSize: 24, textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_ART_INPUT',
      },
      '7evni6': {
        name: '文本 13',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 204, left: 49, width: 229, height: 29, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#ffffff', fontWeight: '', opacity: 1, text: '每满200减20，双十二优惠不见不散', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 0.5, letterSpacing: 0, textDecoration: '', bgColor: '#034845',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      geaegx: {
        name: '文本 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 214, left: 57, width: 223, height: 28, rotate: 0,
        },
        animate: {
          name: 'bounceInUp', duration: 1, delay: 0.6, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#ffffff', fontWeight: '', opacity: 1, text: '惊爆价：99元', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 0.7, letterSpacing: 0, textDecoration: '', bgColor: '#0e4b4c',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      x3lcgi: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 91, left: 87, width: 193, height: 111, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575086271000-bglgengn7nf5-8b02199cb321fef23f8006dca9004016.jpg' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      b4fyc2: {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      m6wyzd: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      r6ogvo: {
        name: '图片 9',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 248, left: 76, width: 152, height: 251, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559881000-u66018yyi8hi-e6dd98e7-6b72-45f2-8f5b-e84ecc6d05a1-2870.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      mbyugl: {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ot24g6: {
        name: '图片 1',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 66, left: 79, width: 179, height: 138, rotate: 0,
        },
        animate: {
          name: 'bounceIn', duration: 1, delay: 0.1, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559733000-lxtknagsd2bm-4906221f-beff-46da-aed0-f7006dbfa521-3018.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '9hb1rj': {
        name: '文本 7',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 8, left: -4, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInDownBig', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: '', opacity: 1, text: '随心秀', fontSize: 20, fontFamily: 'tianxinyuanyue', textAlign: 'center', lineHeight: 1.5, letterSpacing: 8, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      fomif7: {
        name: '输入框 11 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 145, left: 77, width: 180, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { text: '联系方式', color: '#000', bgColor: '按钮' },
        type: 'COMPONENT_TYPE_INPUT',
      },
      xms632: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      spxxlf: {
        name: '图片 12',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      i9uibu: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      y60al5: {
        name: '艺术字 6',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 133, left: 40, width: 268, height: 62, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#249960', fontWeight: 'bold', opacity: 1, text: '优惠为你而来', fontSize: 24, textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_ART_INPUT',
      },
      '0fhbr9': {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      hivohf: {
        name: '文本 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 85, left: -3, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 0.4, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#1e1e1e', fontWeight: '', opacity: 1, text: '活动时间：2019.12.12', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      '03ynbb': {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      ifbkrd: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 319, left: 8, width: 89, height: 193, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560381000-1e2wu4n3x8ap-2fb81237-a025-4d90-a07a-1fc0f44444bb-7580.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      oebqc6: {
        name: '图片 11',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 91, left: 87, width: 193, height: 127, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575536857000-m4a1rhqjs92o-1002N150926DW03-V史严梦-018.JPG' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      fyn378: {
        name: '文本 10',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 42, left: -10, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: 'bold', opacity: 1, text: '》》活动简介', fontSize: 18, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      tdm0ek: {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      crcm0q: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      v30pz7: {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      cmzj7w: {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      fu75mz: {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '24bplv': {
        name: '图片 12 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 386, left: 114, width: 112, height: 118, rotate: 0,
        },
        animate: {
          name: 'rotateIn', duration: 1, delay: 1, repeat: 'infinite',
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560434000-dsgq27fewyfc-44b9691c-b7c7-453d-9dfa-fef699e8057d-0795.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '6xnygu': {
        name: '图片 5',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 28, left: 213, width: 44, height: 131, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559873000-cgkxxx1w5ji5-ab443232-faa9-4000-a0a2-c4315c1d8925-3665.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      or0n7r: {
        name: '文本 10',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 42, left: -10, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'zoomIn', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#0e4b4c', fontWeight: 'bold', opacity: 1, text: '》》活动简介', fontSize: 18, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
      sek1jn: {
        name: '图片 13',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 184, left: 114, width: 320, height: 212, rotate: 0,
        },
        animate: {
          name: '', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: '' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      tx6hci: {
        name: '图片 2',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 414, left: 0, width: 320, height: 89, rotate: 0,
        },
        animate: {
          name: 'fadeInUp', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559870000-40mgjecve54g-ba930617-1d7d-4eb6-852c-787ad5acaa7e-7469.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      k7haum: {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      aauqij: {
        name: '按钮 13',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 206, left: 78, width: 175, height: 40, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.5, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { text: '提交', type: 'primary' },
        type: 'COMPONENT_TYPE_BUTTON',
      },
      r7iefb: {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '6f2by7': {
        name: '图片 10 拷贝',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 308, left: 231, width: 88, height: 173, rotate: 0,
        },
        animate: {
          name: 'fadeInRight', duration: 1, delay: 0.2, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575560295000-awav7g7w4s3m-7b2703c0-dd80-4a12-b9ad-2b6012a50fdb-6812.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      yurxie: {
        name: '图片 4',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 27, left: 38, width: 42, height: 208, rotate: 0,
        },
        animate: {
          name: 'fadeInLeft', duration: 1, delay: 0, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: { imgSrc: 'http://www.lzuntalented.cn:8380/static/pic/1575559876000-trle3ywr0adx-316caf65-307e-4b02-b8fe-f4298c1cffa3-9196.webp' },
        type: 'COMPONENT_TYPE_PICTURE',
      },
      '6fifd6': {
        name: '文本 3',
        nodeType: 'ITEM_TYPE_SINGLE',
        rect: {
          top: 85, left: -3, width: 320, height: 40, rotate: 0,
        },
        animate: {
          name: 'bounceInLeft', duration: 1, delay: 0.4, repeat: 1,
        },
        border: {
          style: 'solid', color: '#000000', width: 0, radius: 0,
        },
        attrs: {
          fontStyle: '', color: '#1e1e1e', fontWeight: '', opacity: 1, text: '活动时间：2019.12.12', fontSize: 12, fontFamily: '默认字体', textAlign: 'center', lineHeight: 1.5, letterSpacing: 0, textDecoration: '', bgColor: '',
        },
        type: 'COMPONENT_TYPE_TEXT',
      },
    },
    moveTag: false,
    backGroundImage: 'http://www.lzuntalented.cn:8380/static/pic/1575560251000-9fjvk5lmal4s-78ff3f4d-d1d2-405c-a18f-0bd4a643d465-8036.webp',
    activeEditKey: ['aauqij'],
    backMusicUrl: 'http://www.lzuntalented.cn/assets/music/chirmis.m4a',
    moveBoundRect: {},
    activePage: 4,
    groupList: {},
    moveInfo: null,
  };
}

export function getLocalTplDatas() {
  return [
    {
      id: EXAMPLE_DATA_DOUBLE_TWENTY,
      origin: getDouble12Data(),
      content: translateShowDataFromStore(getDouble12Data()),
    },
    {
      id: EXAMPLE_DATA_THINKSGIVING,
      origin: getThinksgivingData(),
      content: translateShowDataFromStore(getThinksgivingData()),
    },
    {
      id: EXAMPLE_DATA_DOUBLE_ELEVEN,
      origin: getDouble11Data(),
      content: translateShowDataFromStore(getDouble11Data()),
    },
    {
      id: EXAMPLE_DATA_1024,
      origin: get1024Data(),
      content: translateShowDataFromStore(get1024Data()),
    },
    {
      id: EXAMPLE_DATA_DRAGON_FESTIVAL,
      origin: getDragonFestivalData(),
      content: translateShowDataFromStore(getDragonFestivalData()),
    },
    {
      id: EXAMPLE_DATA_CHILDREN_FESTIVAL,
      origin: getChildrenFestivalData(),
      content: translateShowDataFromStore(getChildrenFestivalData()),
    },
    {
      id: EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
      origin: getGKData(),
      content: translateShowDataFromStore(getGKData()),
    },
  ];
}
