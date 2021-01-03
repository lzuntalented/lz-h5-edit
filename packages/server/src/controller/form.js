const { todayStart, now, ONE_HOUR, dayStart, dayEnd } = require('../tools/time.js');
const Base = require('./base.js');

module.exports = class extends Base {
  async saveAction() {
    const model = this.model('log');
    const id = +this.post('id');
    const dataStr = this.post('data');
    const pageIndex = +this.post('idx');
    let data;
    if (!(id > 0)) {
      this.fail('参数错误');
      return;
    }
    if (!(pageIndex > 0)) {
      this.fail('参数错误');
      return;
    }
    try {
      data = JSON.parse(dataStr);
    } catch (error) {
      this.fail('参数错误');
      return;
    }
    const opus = await model.where({
      id
    }).select();
    if (!opus || opus.length <= 0) {
      this.fail('参数错误');
      return;
    }
    const formModel = this.model('form');
    const result = await formModel.add({
      opus_id: id,
      page_idx: pageIndex,
      content: dataStr
    });
    if (result) {
      this.success('操作成功');
    } else {
      this.fail('参数错误');
    }
  }

  async getListAction() {
    const formModel = this.model('form');
    const opusModel = this.model('opus');
    const id = this.post('opus_id');
    if (!(id > 0)) {
      this.fail('参数错误');
      return;
    }
    const opusList = await opusModel.where({user_id: this.userId, id}).select();
    if (!opusList || opusList.length <= 0) {
      return this.fail('参数错误');
    }
    const result = await formModel.where({opus_id: id}).select();
    this.success(result);
  }
};
