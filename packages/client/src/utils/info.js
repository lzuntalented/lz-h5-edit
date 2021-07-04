import React from 'react';
const userInfo = null;
export async function withUserInfo(ret) {
  if (!userInfo) {
    try {
      const info = await info();
      userInfo = info;
      console.log(info, 'info')
    } catch (e) {
      e && e.errmsg && message.error(e.errmsg);
      window.location.hash = 'login';
      return Promise.reject(null);
    }
  }
  return ret;
}