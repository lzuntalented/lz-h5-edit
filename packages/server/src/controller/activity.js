import { translateShowDataFromStore } from '../tools';
import {createShortFont} from '../tools/font';
import { createZip } from '../tools/zip';
const Base = require('./base.js'); ;

module.exports = class extends Base {
  indexAction() {
    // const model = this.model('opus');
    // const result = model.select();
    return this.display();
  }

  async trunAction() {
    const model = this.model('opus');
    const id = +this.post('id');
    const pageIndex = +this.post('idx');
    const componentType = this.post('type');
    if (!(id > 0)) {
      this.fail('参数错误');
      return;
    }
    if (!(pageIndex > 0)) {
      this.fail('参数错误');
      return;
    }
    if (!componentType) {
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
    const { content } = opus[0];
    const data = JSON.parse(content);
    const { list } = translateShowDataFromStore(data);
    if (list.length >= pageIndex) {
      const elem = list[pageIndex - 1].find(it => it.type === componentType);
      if (!elem) {
        this.fail('参数错误');
        return;
      }
      const { attrs } = elem;
      // console.log(attrs);
      const {
        prizePercent1,
        prizePercent2,
        prizePercent3,
        prizePercent4,
        prizePercent5,
        prizePercent6,
        prizePercent7,
        prizePercent8
      } = attrs;

      const perizeList = (new Array(8).fill(1)).map((it, index) => ({
        name: attrs[`prizeName${index + 1}`],
        src: attrs[`prizePic${index + 1}`],
        per: attrs[`prizePercent${index + 1}`],
        tip: attrs[`prizeTip${index + 1}`]
      }));
      const arr = [
        prizePercent1,
        prizePercent2,
        prizePercent3,
        prizePercent4,
        prizePercent5,
        prizePercent6,
        prizePercent7,
        prizePercent8
      ];

      const activity = this.model('activity');
      const always = arr.findIndex(it => it === 100);
      // 检查始终抽中
      if (always > -1) {
        await activity.add({
          opus_id: id,
          page_idx: pageIndex,
          type: componentType,
          content: JSON.parse(perizeList[always])
        });
        return this.success(always);
      }
      const count = arr.reduce((prev, cur) => prev + cur);
      const matrix = [];
      arr.forEach((it, i) => {
        let beofore = {
          start: 0,
          prev: 0
        };
        if (i > 0) {
          beofore = matrix[i - 1];
        }
        matrix.push({
          start: beofore.prev,
          end: beofore.prev + it,
          prev: beofore.prev + it
        });
      });
      const pos = Math.floor(Math.random() * count);
      const ret = matrix.findIndex(it => {
        if (it.start === it.end) return false;
        return (pos >= it.start && pos <= it.end);
      });
      const res = ret > -1 ? ret : 0;

      await activity.add({
        opus_id: id,
        page_idx: pageIndex,
        type: componentType,
        content: JSON.stringify(perizeList[res])
      });
      return this.success(res);
    }
    return this.fail('参数错误');
  }

  async getListAction() {
    const activityModel = this.model('activity');
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

    const result = await activityModel.where({opus_id: id}).select();
    this.success(result.map(it => {
      return {
        time: it['add_time'],
        content: it.content,
        user: it.user,
        type: it.type,
        idx: it['page_idx']
      };
    }));
  }
};
