/**
 * Created by lz on 2017/6/21.
 */

import Axios from 'axios';
// import fetch from 'node-fetch';
import queryString from 'query-string';
import Cookies from 'js-cookie';

import constants from '../services/constants';

const { ajaxRetCode } = constants;

// let url_prefix = 'http://localhost:3000';
// const url_prefix = 'http://mock-api.lzuntalented.cn';
let url_prefix = '//cp.lzuntalented.cn:8360';
if (window.location.host.indexOf('localhost') > -1) {
  url_prefix = '//localhost:8360';
}

function addUid(obj) {
  const uid = Cookies.get('uid');
  if (uid && uid != '' && !isNaN(uid) && uid > 0) {
    obj.uid = uid;
  }
}
export default {
  get(url, params) {
    const cookie = Cookies.get();

    params = params || {};
    url = url_prefix + url;
    return new Promise((resolve, reject) => {
      Axios.get(url, {
        params,
        onDownloadProgress: null,
        onUploadProgress: null,
        // withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'lzcookie': queryString.stringify(cookie)
        },
      }).then((response) => {
        if (response) {
          const res = response.data;
          // console.log(res);
          if (res && res.errno === ajaxRetCode.success) {
            resolve(res.data);
          }
        }
      }).catch(() => {});
    });
  },

  post(url, params) {
    const cookie = Cookies.get();

    url = url_prefix + url;
    // return Axios.post(url,params)
    return new Promise((resolve, reject) => {
      Axios({
        method: 'post',
        url,
        data: queryString.stringify(params),
        onDownloadProgress: null,
        onUploadProgress: null,
        // withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'lzcookie': queryString.stringify(cookie)
        },
      }).then((response) => {
        if (response) {
          const res = response.data;
          if (res && res.code === ajaxRetCode.success) {
            resolve(res.msg);
          }
        }
      }).catch(() => {});
    });
  },
};
