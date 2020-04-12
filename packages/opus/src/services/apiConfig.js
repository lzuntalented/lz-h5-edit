export default {
  create: {
    getDetail: '/index/getDetail',
  },
};

export function isDaily() {
  if (window.location.host.indexOf('localhost') > -1) {
    return true;
  }
  return false;
}

export function getDomain() {
  let result = 'http://show.lzuntalented.cn';
  if (isDaily()) {
    result = 'http://localhost';
  }
  return result;
}

export function getUrlPrefix() {
  const doamin = getDomain();
  const urlPrefix = `${doamin}:8380`;
  return urlPrefix;
}
