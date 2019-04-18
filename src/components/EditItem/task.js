class Task {
    list = {};

    dispatch(type, params) {
      const item = this.list[type];
      if (item) {
        item.tasks.forEach(it => it(params));
      }
    }

    listen(type, cb) {
      if (this.list[type]) {
        this.list[type].tasks.push(cb);
      } else {
        this.list[type] = {
          tasks: [cb],
        };
      }
    }
}

const instance = new Task();

export function dispatch(type, params) {
  instance.dispatch(type, params);
}

export function listen(type, cb) {
  instance.listen(type, cb);
}
