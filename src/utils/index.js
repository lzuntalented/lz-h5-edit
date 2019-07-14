import {
  QUADRANT_SECOND, QUADRANT_FIRST, QUADRANT_THREE, QUADRANT_FOUR,
} from '../core/constants';

function lzlog(...params) {
  const args = Array.prototype.slice.call(params);
  args.unshift('LZ: ');
  console.log.apply(this, args);
}

/**
 * 检测制定点在另一个点组成的坐标系中的位置
 * @param {Object} pos 指定点
 * @param {Object} reference 参照物
 * @return 1：第一象限；2：第二象限；3：第三象限；4：第四象限
 */
export function checkQuadrant(pos, reference) {
  if (reference.y - pos.y > 0) {
    if (reference.x - pos.x > 0) {
      return QUADRANT_SECOND;
    }
    return QUADRANT_FIRST;
  }
  if (reference.x - pos.x > 0) {
    return QUADRANT_THREE;
  }
  return QUADRANT_FOUR;
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


/**
 * 创建每个编辑组件所需默认参数
 */
export function createEditItem(type, name) {
  return {
    // 组件名称
    name,
    type,
    rect: {
      top: 0,
      left: 0,
      width: 320,
      height: 0,
      rotate: 0,
    },
    animate: {
      // 动画名称
      name: '',
      // 动画执行时间 单位(s)
      duration: 1,
      // 动画延时执行 单位(s)
      delay: 0,
      // 动画重复次数
      repeat: 1,
    },
    attrs: {},
  };
}

export default lzlog;
// export testType;
