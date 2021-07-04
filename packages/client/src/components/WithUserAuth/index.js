import React, { useEffect, useState } from 'react';
import { UserContext } from '../../store'

export default function WithUserAuth(Comp, options) {
  const {
    // 不认证相同
    same,
    cb,
  } = options || {};
  return (props) => (
    <UserContext.Consumer>
      {({userInfo}) => {
        let ret = <Comp userInfo={userInfo} {...props} />;
        if (userInfo) {
          return ret;
        }
        if (same) return ret;
        if (cb) return cb();
      }}
    </UserContext.Consumer>
  )
}