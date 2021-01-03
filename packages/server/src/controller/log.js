const { todayStart, now, ONE_HOUR, dayStart, dayEnd } = require('../tools/time.js');
const Base = require('./base.js');

module.exports = class extends Base {
  async addAction() {
    const model = this.model('log');
    const id = this.post('opus_id');
    if (!(id > 0)) {
      this.fail('参数错误');
      return;
    }
    const result = await model.add({
      opus_id: id
    });
    this.success('');
  }
  async getListAction() {
    const model = this.model('log');
    const id = this.post('opus_id');
    const time = this.post('time');
    const selectCondition = {
    };
    if (+id > 0) {
      selectCondition.opus_id = id;
    }
    const opusModel = this.model('opus');
    const opusList = await opusModel.where({user_id: this.userId}).select();
    if (+id > 0) {
      const obj = opusList.find(it => it.id === +id);
      if (!obj) {
        // 越权攻击
        return this.fail('参数错误');
      }
    } else {
      selectCondition.opus_id = ['IN', opusList.map(it => it.id)];
    }
    const result = await model.where(selectCondition).select();
    // console.log(result.length);

    let list = result;
    const ret = [];
    const startTime = todayStart();
    if (time === '1') {
      list = result.filter(it => {
        const t = +new Date(it['add_time']);
        return t >= todayStart() && t <= now();
      });
      for (let i = 0; i < 24; i++) {
        const count = list.filter(it => {
          const t = +new Date(it['add_time']);
          return t >= startTime + (i * ONE_HOUR) && t < startTime + ((i + 1) * ONE_HOUR);
        }).length;
        ret.push({
          value: count,
          time: startTime + (i * ONE_HOUR)
        });
      }
    } else if (time === '2' || time === '3') {
      list = result.filter(it => true);
      const max = time === '2' ? 7 : 30;
      for (let i = 0; i < max; i++) {
        // console.log(dayStart(i), dayEnd(i));
        const count = list.filter(it => {
          const t = +new Date(it['add_time']);
          // console.log(it);
          return t >= dayStart(i) && t < dayEnd(i);
        }).length;
        ret.push({
          value: count,
          time: dayStart(i)
        });
      }
    }
    if (time === '1') {
      this.success(ret);
    } else {
      this.success(ret.reverse());
    }
  }
};
