"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMap = createMap;
exports["default"] = void 0;
var key = 'LN8Gj58iEjiSnUDVSrCwikCF6x41Q41i';
var loadSuccess = false;

function createMap() {
  return new Promise(function (resolve, reject) {
    resolve(window.BMap); // const dom = window.document.createElement('script');
    // dom.src = `http://api.map.baidu.com/getscript?v=3.0&ak=${key}&services=&t=20191111160328`;
    // dom.setAttribute('type', 'text/javascript');
    // dom.onload = () => {
    //   console.log('loadSuccess', loadSuccess);
    //   loadSuccess = true;
    //   resolve(window.BMap);
    // };
    // dom.onerror = reject;
    // window.document.body.appendChild(dom);
  });
}

var _default = function _default() {};

exports["default"] = _default;