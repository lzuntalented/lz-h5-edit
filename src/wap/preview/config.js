import { winSize } from '../../utils';
import { getLocalTplDatas } from '../../core/config';

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
  const locals = getLocalTplDatas();
  const obj = locals.find(it => it.id === id);
  if (obj) {
    return obj.content;
  }
  return null;
}
