"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

var _constants = _interopRequireDefault(require("../services/constants"));

var _apiConfig = require("../services/apiConfig");

/**
 * Created by lz on 2017/6/21.
 */
// import fetch from 'node-fetch';
// import Cookies from 'js-cookie';
var ajaxRetCode = _constants["default"].ajaxRetCode; // let url_prefix = 'http://localhost:3000';
// const url_prefix = 'http://mock-api.lzuntalented.cn';

var urlPrefix = (0, _apiConfig.getUrlPrefix)();
var _default = {
  get: function get(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var urlPath = urlPrefix + url;
    return new Promise(function (resolve, reject) {
      _axios["default"].get(urlPath, {
        params: params,
        onDownloadProgress: null,
        onUploadProgress: null,
        // withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // 'lzcookie': queryString.stringify(cookie)

        }
      }).then(function (response) {
        if (response) {
          var res = response.data; // console.log(res);

          if (res && res.errno === ajaxRetCode.success) {
            resolve(res.data);
          }
        }
      })["catch"](function () {});
    });
  },
  post: function post(url, params) {
    var urlPath = urlPrefix + url;
    return new Promise(function (resolve, reject) {
      (0, _axios["default"])({
        method: 'post',
        url: urlPath,
        data: _queryString["default"].stringify(params),
        onDownloadProgress: null,
        onUploadProgress: null,
        // withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // 'lzcookie': queryString.stringify(cookie)

        }
      }).then(function (response) {
        if (response) {
          var res = response.data;

          if (res && res.errno === ajaxRetCode.success) {
            resolve(res.data);
          } else {
            reject();
          }
        }
      })["catch"](reject);
    });
  }
};
exports["default"] = _default;