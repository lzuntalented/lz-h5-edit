/**
 * Created by lz on 2017/6/21.
 */

import Axios from 'axios';
import queryString from 'query-string';
// import Cookies from 'js-cookie';

export default {
  post(url, params) {
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
          return response.data;
        }
        return false;
      }).catch(reject);
    });
  },
};
