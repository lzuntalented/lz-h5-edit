import { isString } from '@lzshow/utils';

export default {
  create: {
    getList: '/index/getList',
    add: '/index/add',
    getDetail: '/index/getDetail',
  },
  file: {
    getList: '/file/getList',
    upload: '/file/upload',
    cropImage: '/file/cropImage',
    parsePsd: '/file/parsePsd',
  },
  // 商城相关
  mall: {
    getList: '/tmp/getList',
    addTemplate: '/tmp/add',
    removeTemplate: '/tmp/remove',
  },
  user: {
    register: '/user/register',
    login: '/user/login',
    info: '/user/info',
    logout: '/user/logout',
  },
  template: {
    getMyList: '/template/getMyList',
  },
  log: {
    getList: '/log/getList',
  },
  form: {
    getList: '/form/getList',
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
