import {
  STYLE_RENDER_TYPE_COLLAPSE, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
  STYLE_RENDER_TYPE_FONT, STYLE_RENDER_TYPE_HIDDEN, STYLE_RENDER_TYPE_INPUT,
  STYLE_RENDER_TYPE_PICTURE,
  STYLE_RENDER_TYPE_SELECT, STYLE_RENDER_TYPE_SLIDER_INPUT, STYLE_RENDER_TYPE_TEXTAREA,
  STYLE_RENDER_TYPE_TWO_INPUT,
} from '@lzshow/constants';

const config = [
  {
    label: '后方块1',
    key: 'back1',
    initValue: '#ffca28',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '后方块2',
    key: 'back2',
    initValue: '#1975ff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '后方块3',
    key: 'back3',
    initValue: '#ffca28',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '后方块4',
    key: 'back4',
    initValue: '#1975ff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '后方块5',
    key: 'back5',
    initValue: '#ffca28',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '前方块1',
    key: 'before1',
    initValue: '#fff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '前方块2',
    key: 'before2',
    initValue: '#fff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '前方块3',
    key: 'before3',
    initValue: '#fff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '前方块4',
    key: 'before4',
    initValue: '#fff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '前方块5',
    key: 'before5',
    initValue: '#fff',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '文本1',
    key: 'title',
    initValue: '寒 假 补 习 班',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
  {
    label: '文本2',
    key: 'content',
    initValue: '开始招生啦！',
    renderType: STYLE_RENDER_TYPE_INPUT,
  },
];

export default config;
