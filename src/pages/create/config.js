

import {
  EXAMPLE_DATA_1024, EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
  LOCALSTORAGE_PREVIEW_NAMESPACE,
  LOCALSTORAGE_PREVIEW_CHACHE,
  EXAMPLE_DATA_DOUBLE_ELEVEN,
} from '../../core/constants';
import {
  get1024Data, getDragonFestivalData, getChildrenFestivalData, getGKData, getDouble11Data,
} from '../realpreview/config';
import LzLocalStorage from '../../utils/LocalStorage';

export function getComponetData(id) {
  switch (id) {
    case EXAMPLE_DATA_1024:
      return get1024Data();
    case EXAMPLE_DATA_DRAGON_FESTIVAL:
      return getDragonFestivalData();
    case EXAMPLE_DATA_CHILDREN_FESTIVAL:
      return getChildrenFestivalData();
    case EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION:
      return getGKData();
    case EXAMPLE_DATA_DOUBLE_ELEVEN:
      return getDouble11Data();
    default: break;
  }
  if (+id > 0) {
    const mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);
    const data = mLzLocalStorage.get(LOCALSTORAGE_PREVIEW_CHACHE, '{}');
    return JSON.parse(data);
  }
  return getDouble11Data();
}

export default () => {};
