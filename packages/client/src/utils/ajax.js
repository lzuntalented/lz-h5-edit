/**
 * Created by lz on 2017/6/21.
 */

import Axios from 'axios';
// import fetch from 'node-fetch';
import queryString from 'query-string';
// import Cookies from 'js-cookie';

import constants from '../services/constants';
import { getUrlPrefix } from '../services/apiConfig';

const { ajaxRetCode } = constants;

// let url_prefix = 'http://localhost:3000';
// const url_prefix = 'http://mock-api.lzuntalented.cn';
const urlPrefix = getUrlPrefix();

export default {
  get(url, params = {}) {
    const urlPath = urlPrefix + url;
    return new Promise((resolve, reject) => {
      Axios.get(urlPath, {
        params,
        onDownloadProgress: null,
        onUploadProgress: null,
        withCredentials: true,
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
          } else {
            reject(res);
          }
        }
      }).catch(() => {});
    });
  },

  post(url, params) {
    const urlPath = urlPrefix + url;
    return new Promise((resolve, reject) => {
      Axios({
        method: 'post',
        url: urlPath,
        data: queryString.stringify(params),
        onDownloadProgress: null,
        onUploadProgress: null,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'lzcookie': queryString.stringify(cookie)
        },
      }).then((response) => {
        if (response) {
          const res = response.data;
          if (res && res.errno === ajaxRetCode.success) {
            resolve(res.data);
          } else {
            reject(res);
          }
        }
      }).catch(reject);
    });
  },
};
