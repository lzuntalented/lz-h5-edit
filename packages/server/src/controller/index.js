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
    const pageSize = 11;
    if (!(pageIndex > 0)) {
      this.fail('参数错误');
      return;
    }
    const offset = pageIndex - 1;
    const model = this.model('opus');
    // const result = await model.limit(offset * pageSize, pageSize).order('id DESC').select();
    const result = await model.getList(offset, pageSize);
    const total = await model.count();
    this.success({list: result, total});
  }

  async addAction() {
    const model = this.model('opus');
    const content = this.post('content');
    const title = this.post('title') || '未命名';
    try {
      if (content.trim() === '') {
        this.fail('参数错误');
        return;
      }
      const store = JSON.parse(content);
      const id = await model.add({ content,
        title,
        user_id: this.userId });
      await createShortFont(id, store);
      this.success(id);
    } catch (e) {
      this.fail('参数错误');
    }
  }

  async getDetailAction() {
    const id = +this.get('id');
    const source = this.get('source');
    if (!(id > 0)) {
      this.fail('参数错误');
    }
    const model = this.model('opus');
    const result = await model.where({id}).select();
    if (result && result.length > 0) {
      if (source === 'app') {
        const logModel = this.model('log');
        logModel.add({
          opus_id: id,
          ip: this.ctx.ip,
          ua: this.ctx.userAgent
        });
      }
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

  showAction() {
    const { best_result } = this.post() || {};
    this.success();
  }
};
