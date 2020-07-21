const path = require('path');

const isDev = think.env === 'development';

const PUBLIC_PATH = path.join(think.ROOT_PATH, 'www/static');

export function getPicturePathWithName(name) {
  return path.join(PUBLIC_PATH, 'pic', name);
}

export function getPicturePath() {
  return getPicturePathWithName('');
}

export function getBgPicturePath(name) {
  return path.join(PUBLIC_PATH, 'bg', name);
}

export function getFontPath(name) {
  return path.join(PUBLIC_PATH, 'fonts', name);
}

/**
 * 创建随机字符
 * @param {*} type 类型
 * @param {*} len 长度
 */
export function createRandom(len = 6) {
  const pool = '1234567890qwertyuiiopasdfghjklzxcvbnm';
  const poolSize = pool.length;
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += pool[Math.floor(Math.random() * poolSize)];
  }
  return result;
}

export function getDomain() {
  return 'localhost:8380';
  return isDev ? 'localhost:8380' : 'www.lzuntalented.cn:8380';
}

export function translateShowDataFromStore(store) {
  const {
    pages, editList, backGroundImage, backMusicUrl, groupList
  } = store;
  const result = [];
  pages.forEach((it) => {
    const arr = [];
    it.forEach((item) => {
      const { nodeType } = editList[item];
      if (nodeType === 'ITEM_TYPE_GROUP') {
        const groupItems = groupList[item];
        const { rect } = editList[item];
        groupItems.forEach((key) => {
          const obj = editList[key];
          Object.assign(obj.rect, {
            top: rect.top + obj.rect.top,
            left: rect.left + obj.rect.left
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
    list: result
  };
}
