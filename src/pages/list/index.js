import React from 'react';
import Card from './components/Card';

import './index.scss';
import {
  CLICK_TYPE_DEFAULT, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW, getLocalCardList, getPerviewImage,
} from './config';

const clickCallback = (type, data) => () => {
  if (type === CLICK_TYPE_DEFAULT) {
    window.location.hash = '/create';
  } else if (type === CLICK_TYPE_EDIT) {
    window.location.hash = `/edit/${data}`;
  } else if (type === CLICK_TYPE_PREVIEW) {
    // getPerviewImage();
    window.location.hash = `/preview/${data}`;
  }
};

export default () => {
  const list = getLocalCardList();
  return (
    <div className="page-list">
      <ul>
        <Card defaultType onClick={clickCallback} />
        {
            list.map(it => <Card key={it.id} onClick={clickCallback} data={it} />)
        }
      </ul>
    </div>
  );
};
