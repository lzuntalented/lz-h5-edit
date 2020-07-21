import {createShortFont} from '../tools/font';
import { createZip } from '../tools/zip';
const Base = require('./base.js'); ;

module.exports = class extends Base {
  indexAction() {
    // const model = this.model('opus');
    // const result = model.select();
    return this.display();
  }

  async getListAction() {
    const pageIndex = +this.get('pageIndex');
    const pageSize = 8;
    if (!(pageIndex > 0)) {
      this.fail('参数错误');
      return;
    }
    const offset = pageIndex - 1;
    const model = this.model('template');
    const result = await model.limit(offset * pageSize, pageSize).order('id DESC').select();
    const total = await model.count();
    const list = [];
    result.forEach(it => {
      const { opus, ...others } = it;
      if (opus) {
        const { title, content } = opus || {};
        list.push(Object.assign(others, { title, content }));
      }
    });
    this.success({list, total});
  }

  async addAction() {
    const id = this.post('id');
    if (!(+id > 0)) {
      this.fail('参数错误');
      return;
    }

    // 检测作品表中是否存在该记录
    const opusModel = this.model('opus');
    const hasOpus = await opusModel.where({id}).select();
    if (!hasOpus || hasOpus.length !== 1) {
      this.fail(hasOpus);
      return;
    }

    // 插入记录
    const model = this.model('template');
    const ret = await model.add({ opus_id: id });
    if (ret) {
      this.success('操作成功');
    } else {
      this.fail('参数错误');
    }
  }

  async removeAction() {
    const id = this.post('id');
    if (!(+id > 0)) {
      this.fail('参数错误');
      return;
    }

    // 检测作品表中是否存在该记录
    const opusModel = this.model('opus');
    const hasOpus = await opusModel.where({id}).select();
    if (!hasOpus || hasOpus.length !== 1) {
      this.fail(hasOpus);
      return;
    }

    // 插入记录
    const model = this.model('template');
    const ret = await model.where({ opus_id: id }).delete();
    if (ret) {
      this.success('操作成功');
    } else {
      this.fail('参数错误');
    }
  }

  async getDetailAction() {
    const id = +this.get('id');
    if (!(id > 0)) {
      this.fail('参数错误');
      return;
    }
    const model = this.model('opus');
    const result = await model.where({id}).select();
    if (result && result.length > 0) {
      this.success(result[0]);
    } else { this.fail('参数错误') }
  }

  async downloadAction() {
    const id = +this.get('id');
    if (!(id > 0)) {
      this.fail('参数错误');
      return;
    }
    const model = this.model('opus');
    const result = await model.where({id}).select();
    if (result && result.length > 0) {
      this.success(result[0]);
      const item = result[0];
      const {content, id} = item;
      try {
        const url = await createZip(content, id);
        this.download(url, `随心秀-${id}.zip`);
      } catch (error) {
        this.fail('下载失败，请重试！');
      }
    } else {
      this.fail('参数错误');
    }
  }
};
