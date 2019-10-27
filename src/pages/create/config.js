

import {
  EXAMPLE_DATA_1024, EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
} from '../../core/constants';
import {
  get1024Data, getDragonFestivalData, getChildrenFestivalData, getGKData,
} from '../realpreview/config';

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
    default: break;
  }
  return get1024Data();
}

export default () => {};
