import Shadow from '../Shadow';
import {
  STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_COLLAPSE,
  STYLE_RENDER_TYPE_SLIDER_INPUT,
} from '../../../core/constants';

const { getConfig } = Shadow;
const config = getConfig();
config[2].initValue = '立体';
config[4].initValue = '#f7e3b9';
config.unshift({
  label: '立体层次',
  props: {
    defaultOpen: true,
  },
  children: [
    {
      label: '尺寸',
      key: 'textSolidSize',
      initValue: 1,
      renderType: STYLE_RENDER_TYPE_INPUT,
    },
    {
      label: '颜色',
      key: 'textSolidColor',
      initValue: '',
      renderType: STYLE_RENDER_TYPE_COLOR,
    },
    {
      label: '角度',
      key: 'textSolidAngle',
      initValue: 0,
      props: {
        min: 0,
        max: 360,
        step: 1,
      },
      renderType: STYLE_RENDER_TYPE_SLIDER_INPUT,
    },
  ],
  renderType: STYLE_RENDER_TYPE_COLLAPSE,
});

export default { ...Shadow, style: config, size: { height: 48 } };
