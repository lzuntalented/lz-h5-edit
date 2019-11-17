
import {
  get1024Data, getDragonFestivalData, getChildrenFestivalData, getGKData, getDouble11Data,
} from '../../../../../realpreview/config';
import {
  EXAMPLE_DATA_1024, EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
  EXAMPLE_DATA_DOUBLE_ELEVEN,
} from '../../../../../../core/constants';
import { translateShowDataFromStore } from '../../../../../../utils';

export function getLocalCardList() {
  return [
    {
      id: EXAMPLE_DATA_1024,
      origin: get1024Data(),
      content: translateShowDataFromStore(get1024Data()),
    },
    {
      id: EXAMPLE_DATA_DOUBLE_ELEVEN,
      origin: getDouble11Data(),
      content: translateShowDataFromStore(getDouble11Data()),
    },
    {
      id: EXAMPLE_DATA_DRAGON_FESTIVAL,
      origin: getDragonFestivalData(),
      content: translateShowDataFromStore(getDragonFestivalData()),
    },
    {
      id: EXAMPLE_DATA_CHILDREN_FESTIVAL,
      origin: getChildrenFestivalData(),
      content: translateShowDataFromStore(getChildrenFestivalData()),
    },
    {
      id: EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
      origin: getGKData(),
      content: translateShowDataFromStore(getGKData()),
    },
  ];
}

export default () => {};
