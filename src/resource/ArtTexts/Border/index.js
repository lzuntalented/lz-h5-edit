import Shadow from '../Solid';
import {
  STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_COLLAPSE,
} from '../../../core/constants';

const { getConfig } = Shadow;

function getAddOptions() {
  return {
    label: '描边',
    props: {
      defaultOpen: true,
    },
    children: [
      {
        label: '尺寸',
        key: 'textBorderSize',
        initValue: 1,
        renderType: STYLE_RENDER_TYPE_INPUT,
      },
      {
        label: '颜色',
        key: 'textBorderColor',
        initValue: '',
        renderType: STYLE_RENDER_TYPE_COLOR,
      },
    ],
    renderType: STYLE_RENDER_TYPE_COLLAPSE,
  };
}

function resetGetConfig() {
  const addOptions = getAddOptions();
  const config = getConfig();
  config[3].initValue = '描边';
  config.unshift(addOptions);
  return config;
}

const config = resetGetConfig();

export default {
  ...Shadow, style: config, size: { height: 48 }, getConfig: resetGetConfig,
};
