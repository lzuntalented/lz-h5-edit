import { winSize } from '../../utils';
import {
  EXAMPLE_DATA_1024, EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
} from '../../core/constants';
import {
  get1024Data, getDragonFestivalData, getChildrenFestivalData, getGKData,
} from '../../pages/realpreview/config';

const { width, height } = winSize;
export function resetComponentSize(realWinSize, list) {
  // const widthScale = realWinSize.width / width;
  // const heightScal = realWinSize.height / height;
  // list.forEach((item) => {
  //   item.forEach((it) => {
  //     const { rect } = it;
  //     Object.assign(it.rect, {
  //       width: widthScale * rect.width,
  //       height: heightScal * rect.height,
  //       top: heightScal * rect.top,
  //       left: widthScale * rect.left,
  //     });
  //   });
  // });
}

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
