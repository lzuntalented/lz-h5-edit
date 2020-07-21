import { createRandom } from '../tools';
import md5 from 'md5';
const Base = require('./base.js'); ;

module.exports = class extends Base {
  async registerAction() {
    const username = this.post('username');
    const psd = this.post('password');
    if (!(username && psd)) {
      this.fail('参数错误');
      return;
    }
    const userModel = this.model('user');
    // 检测帐号是否注册过
    const info = await userModel.where({account: username}).select();
    if (info && info.length > 0) {
      this.fail('该用户名已被注册');
      return;
    }
    const salt = createRandom();
    const password = md5(`${psd}${salt}`);
    const id = await userModel.add({
      account: username,
      password,
      salt
    });
    this.success({id});
  }

  async loginAction() {
    const username = this.post('username');
    const psd = this.post('password');
    if (!(username && psd)) {
      this.fail('参数错误');
      return;
    }
    const userModel = this.model('user');
    // 检测帐号是否注册过
    const info = await userModel.where({account: username}).select();
    if (!(info && info.length > 0)) {
      this.fail('该用户名未被注册');
      return;
    }

    const uInfo = info[0];
    const { salt, password, id } = uInfo;
    if (md5(`${psd}${salt}`) === password) {
      this.success({id});
    } else {
      this.fail('密码错误');
    }
  }
};
