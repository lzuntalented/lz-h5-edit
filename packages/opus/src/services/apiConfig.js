import { isString } from '@lzshow/utils';

export default {
  create: {
    getDetail: '/index/getDetail',
  },
  log: {
    saveForm: '/form/save',
  },
};

export function isDaily() {
  if (window.location.host.indexOf('localhost') > -1) {
    return true;
  }
  if (window.location.host.indexOf('h5.lz.com') > -1) {
    return 'http://h5.lz.com';
  }
  return false;
}

export function getDomain() {
  let result = 'http://show.lzuntalented.cn';
  // result = 'http://h5.lz.com/server';
  const dailyHost = isDaily();
  if (isString(dailyHost)) {
    result = 'http://h5.lz.com';
  } else if (dailyHost) {
    result = '';
  }
  return result;
}

export function getUrlPrefix() {
  const doamin = getDomain();
  const urlPrefix = `${doamin}/server`;
  return urlPrefix;
}
