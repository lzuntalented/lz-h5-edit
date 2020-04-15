import { ITEM_TYPE_GROUP } from '@lzshow/constants';

export { default as Music } from './Music';
export * from './Tools';

export const winSize = {
  width: 320,
  height: 480,
};

export function translateShowDataFromStore(store) {
  const {
    pages, editList, backGroundImage, backMusicUrl, groupList,
  } = store;
  const result = [];
  pages.forEach((it) => {
    const arr = [];
    it.forEach((item) => {
      const { nodeType } = editList[item];
      if (nodeType === ITEM_TYPE_GROUP) {
        const groupItems = groupList[item];
        const { rect } = editList[item];
        groupItems.forEach((key) => {
          const obj = editList[key];
          Object.assign(obj.rect, {
            top: rect.top + obj.rect.top,
            left: rect.left + obj.rect.left,
          });
          arr.push(obj);
        });
        return;
      }
      const obj = editList[item];
      if (obj) {
        arr.push(obj);
      }
    });
    result.push(arr);
  });

  return {
    backMusicUrl,
    backGroundImage,
    list: result,
  };
}
