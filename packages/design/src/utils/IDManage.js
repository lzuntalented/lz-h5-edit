import { createRandom } from './index';

const map = [];

// 新增已用id集合
export function addIds(ids) {
  ids.forEach(it => map.push(it));
}

// 创建唯一id
export function createId() {
  while (true) {
    const unique = createRandom();
    if (map.indexOf(unique) === -1) {
      map.push(unique);
      return unique;
    }
  }
}
