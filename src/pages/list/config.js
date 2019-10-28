import React from 'react';
import {
  get1024Data, getDragonFestivalData, getChildrenFestivalData, getGKData,
} from '../realpreview/config';
import {
  EXAMPLE_DATA_1024, EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
} from '../../core/constants';

export const CLICK_TYPE_DEFAULT = 1;
export const CLICK_TYPE_PREVIEW = 2;
export const CLICK_TYPE_EDIT = 3;

export function getLocalCardList() {
  return [
    {
      id: EXAMPLE_DATA_1024,
      content: get1024Data(),
    },
    {
      id: EXAMPLE_DATA_DRAGON_FESTIVAL,
      content: getDragonFestivalData(),
    },
    {
      id: EXAMPLE_DATA_CHILDREN_FESTIVAL,
      content: getChildrenFestivalData(),
    },
    {
      id: EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
      content: getGKData(),
    },
  ];
}
