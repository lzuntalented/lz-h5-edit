export default {
  create: {
    getList: '/index/getList',
    add: '/index/add',
    getDetail: '/index/getDetail',
  },
  file: {
    getList: '/file/getList',
    upload: '/file/upload',
  },
};

export function getUrlPrefix() {
  let urlPrefix = 'http://www.lzuntalented.cn:8380';
  if (window.location.host.indexOf('localhost') > -1) {
    urlPrefix = 'http://localhost:8380';
  }
  return urlPrefix;
}
