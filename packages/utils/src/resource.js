import { STYLE_RENDER_TYPE_COLLAPSE } from '@lzshow/constants';
import { isString } from './type';

export function getDefaultAttrs(config) {
  const result = {};
  config.forEach(({
    key, initValue, renderType, children,
  }) => {
    if (renderType === STYLE_RENDER_TYPE_COLLAPSE) {
      Object.assign(result, getDefaultAttrs(children));
    } else if (isString(key)) {
      result[key] = initValue;
    } else {
      Object.assign(result, initValue);
    }
  });
  return result;
}
