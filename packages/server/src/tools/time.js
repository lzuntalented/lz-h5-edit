export const ONE_HOUR = 60 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export function getFormatDate(num) {
  const date = new Date(num);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return {
    year,
    month,
    day,
    hour,
    minute,
    second
  };
}

export function now() {
  return +new Date();
}

export function todayStart() {
  const obj = getFormatDate(now());
  const str = `${obj.year}-${obj.month}-${obj.day} 00:00:00`;
  return +new Date(str);
}

export function dayStart(fromNow = 0) {
  const num = now() - fromNow * ONE_DAY;
  const obj = getFormatDate(num);
  const str = `${obj.year}-${obj.month}-${obj.day} 00:00:00`;
  return +new Date(str);
}

export function dayEnd(fromNow = 0) {
  return dayStart(fromNow - 1) - 1;
}
