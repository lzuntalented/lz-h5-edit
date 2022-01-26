import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { UserContext } from './store'
import router from './router';
import { info } from './services/user';
// import { setUserInfo } from './store/action'
import './style';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [fetchFinish, setFetchFinish] = useState(false);
  useEffect(() => {
    info().then((res) => {
      setUserInfo(res);
    }).catch((e) => {
      // e && e.errmsg && message.error(e.errmsg);
      // window.location.hash = 'login';
    }).finally(()=>setFetchFinish(true))
  }, []);
  return (
    fetchFinish &&
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {router}
    </UserContext.Provider>
  )
}

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <App />,
  rootEl,
);
