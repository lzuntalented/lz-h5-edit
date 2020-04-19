import {
  EXAMPLE_DATA_THINKSGIVING, EXAMPLE_DATA_DOUBLE_ELEVEN, EXAMPLE_DATA_1024,
  EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION, EXAMPLE_DATA_DOUBLE_TWENTY,
  EXAMPLE_DATA_NEW_YEAR_2020,
} from '@lzshow/constants';

import {
  get2020NewYear, getDouble12Data, getThinksgivingData, getChildrenFestivalData,
  getDouble11Data, get1024Data, getDragonFestivalData, getGKData,
} from '@lzshow/constants/config';

import { translateShowDataFromStore } from './index';

export function getLocalTplDatas() {
  return [
    {
      id: EXAMPLE_DATA_NEW_YEAR_2020,
      origin: get2020NewYear(),
      content: translateShowDataFromStore(get2020NewYear()),
    },
    {
      id: EXAMPLE_DATA_DOUBLE_TWENTY,
      origin: getDouble12Data(),
      content: translateShowDataFromStore(getDouble12Data()),
    },
    {
      id: EXAMPLE_DATA_THINKSGIVING,
      origin: getThinksgivingData(),
      content: translateShowDataFromStore(getThinksgivingData()),
    },
    {
      id: EXAMPLE_DATA_DOUBLE_ELEVEN,
      origin: getDouble11Data(),
      content: translateShowDataFromStore(getDouble11Data()),
    },
    {
      id: EXAMPLE_DATA_1024,
      origin: get1024Data(),
      content: translateShowDataFromStore(get1024Data()),
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
