import React from 'react';
import ReactDom from 'react-dom';
// import domtoimage from 'dom-to-image-more';
// import Perview from './components/Perview';
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


// export function getPerviewImage() {
//   const div = document.createElement('div');
//   div.id = 'shawdn';
//   document.body.appendChild(div);
//   const data = get1024Data();
//   ReactDom.render(<Perview data={data} />, div);
//   domtoimage.toBlob(div)
//     .then((blob) => {
//       console.log(blob);
//     });
// }
