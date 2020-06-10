import { ITEM_TYPE_GROUP } from '@lzshow/constants';

export function getBoundRectWithKey(key, editList) {
  const item = editList[key];
  const { rect, belong } = item;
  const parentRect = { x: 0, y: 0 };
  let parent = editList[belong];
  while (parent) {
    parentRect.x += parent.rect.left;
    parentRect.y += parent.rect.top;
    if (parent.belong) {
      parent = editList[parent.belong];
    } else {
      break;
    }
  }
  return {
    rect: {
      ...rect,
      left: rect.left + parentRect.x,
      top: rect.top + parentRect.y,
    },
  };
}

function flatPageItem(list, editList, groupList, returnList) {
  list.forEach((key) => {
    const item = editList[key];
    const groupKeys = groupList[key];
    if (groupKeys) {
      flatPageItem(groupKeys, editList, groupList, returnList);
    } else {
      const { rect } = getBoundRectWithKey(key, editList);
      item.rect = rect;
      returnList.push(item);
    }
  });
}

export function translateShowDataFromStore(store) {
  const {
    pages, editList, backGroundImage, backMusicUrl, groupList,
  } = store;
  const result = [];
  pages.forEach((it) => {
    const arr = [];
    flatPageItem(it, editList, groupList, arr);
    result.push(arr);
  });

  return {
    backMusicUrl,
    backGroundImage,
    list: result,
  };
}
