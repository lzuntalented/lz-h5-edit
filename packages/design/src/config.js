import {
  LOCALSTORAGE_PREVIEW_NAMESPACE,
  LOCALSTORAGE_PREVIEW_CHACHE,
} from '@lzshow/constants';
import { getLocalTplDatas } from '@lzshow/utils';
import LzLocalStorage from './utils/LocalStorage';

export function getComponetData(id) {
  const locals = getLocalTplDatas();
  const obj = locals.find(it => it.id === id);
  if (obj) return obj.origin;
  if (+id > 0) {
    const mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
    const data = mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE, '{}');
    return JSON.parse(data);
  }
  return null;
}

export default () => {};
