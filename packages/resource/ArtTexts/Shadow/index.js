import Text from '../../Text';
import {
  STYLE_RENDER_TYPE_COLLAPSE, STYLE_RENDER_TYPE_COLOR,
  STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_TWO_INPUT,
} from '../../core/constants';

const { getConfig } = Text;

function getAddOptions() {
  const addOptions = {
    label: '文字阴影',
    props: {
      defaultOpen: true,
    },
    children: [
      {
        label: '偏移',
        key: [
          'textShadowX',
          'textShadowY',
        ],
        initValue: {
          textShadowX: 0,
          textShadowY: 0,
        },
        props: {
          left: 'textShadowX',
          leftText: 'x',
          right: 'textShadowY',
          rightText: 'y',
        },
        renderType: STYLE_RENDER_TYPE_TWO_INPUT,
      },
      {
        label: '模糊',
        key: 'textShadowSpread',
        initValue: 0,
        renderType: STYLE_RENDER_TYPE_INPUT,
      },
      {
        label: '阴影颜色',
        key: 'textShadowColor',
        initValue: '',
        renderType: STYLE_RENDER_TYPE_COLOR,
      },
    ],
    renderType: STYLE_RENDER_TYPE_COLLAPSE,
  };
  return addOptions;
}

function resetGetConfig() {
  const addOptions = getAddOptions();
  const config = getConfig();
  config[1].initValue = '阴影';
  config[2].initValue = 18;
  config[3].initValue = '#ffffff';
  config.unshift(addOptions);
  return config;
}

// const config = style;
const config = resetGetConfig();

export default {
  ...Text, style: config, size: { height: 48 }, getConfig: resetGetConfig,
};
