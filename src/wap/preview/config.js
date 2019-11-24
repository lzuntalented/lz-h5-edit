import { winSize, translateShowDataFromStore } from '../../utils';
import {
  EXAMPLE_DATA_1024, EXAMPLE_DATA_DRAGON_FESTIVAL, EXAMPLE_DATA_CHILDREN_FESTIVAL,
  EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION,
  EXAMPLE_DATA_DOUBLE_ELEVEN,
  EXAMPLE_DATA_THINKSGIVING,
} from '../../core/constants';
import {
  get1024Data, getDragonFestivalData, getChildrenFestivalData, getGKData, getDouble11Data, getThinksgivingData,
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
  let result = null;
  switch (id) {
    case EXAMPLE_DATA_1024:
      result = get1024Data();
      break;
    case EXAMPLE_DATA_DRAGON_FESTIVAL:
      result = getDragonFestivalData();
      break;
    case EXAMPLE_DATA_CHILDREN_FESTIVAL:
      result = getChildrenFestivalData();
      break;
    case EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION:
      result = getGKData();
      break;
    case EXAMPLE_DATA_DOUBLE_ELEVEN:
      result = getDouble11Data();
      break;
    case EXAMPLE_DATA_THINKSGIVING:
      result = getThinksgivingData();
      break;
    default: break;
  }
  if (result) return translateShowDataFromStore(result);
  return result;
}
