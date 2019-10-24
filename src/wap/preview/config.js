import { winSize } from '../../utils';

const { width, height } = winSize;
export function resetComponentSize(realWinSize, list) {
  const widthScale = realWinSize.width / width;
  const heightScal = realWinSize.height / height;
  list.forEach((item) => {
    item.forEach((it) => {
      const { rect } = it;
      Object.assign(it.rect, {
        width: widthScale * rect.width,
        height: heightScal * rect.height,
        top: heightScal * rect.top,
        left: widthScale * rect.left,
      });
    });
  });
}

export function getScal() {}
