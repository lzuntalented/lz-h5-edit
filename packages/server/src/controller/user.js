import { createRandom } from '../tools';
import md5 from 'md5';
const Base = require('./base.js'); ;

module.exports = class extends Base {
  async registerAction() {
    const email = this.post('email');
    const username = this.post('username');
    const psd = this.post('password');
    const psdAgain = this.post('passwordAgain');
    if (!(username && psd && email)) {
      this.fail('参数错误');
      return;
    }
    if (psd !== psdAgain) {
      this.fail('两次输入的密码不一致');
      return;
    }
    const userModel = this.model('user');

    // 检测帐号是否注册过
    const info = await userModel.where({
      name: username,
      account: email,
      _logic: 'OR'
    }).select();
    if (info && info.length > 0) {
      this.fail('该用户名已被注册');
      return;
    }
    const salt = createRandom();
    const password = md5(`${psd}${salt}`);
    const id = await userModel.add({
      name: username,
      account: email,
      password,
      salt
    });
    this.success('注册成功');
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
    const info = await userModel.where({
      account: username,
      name: username,
      _logic: 'OR'
    }).select();
    if (!(info && info.length > 0)) {
      this.fail('该用户名未被注册');
      return;
    }

    const uInfo = info[0];
    const { salt, password, id } = uInfo;
    if (md5(`${psd}${salt}`) === password) {
      await this.session('uid', `${id}`);
      this.success('登录成功');
    } else {
      this.fail('密码错误');
    }
  }

  async infoAction() {
    // await this.session('id', 'id');
    const id = await this.session('uid');
    if (id) {
      const userModel = this.model('user');
      // 检测帐号是否注册过
      const info = await userModel.where({id}).select();
      if ((info && info.length > 0)) {
        const { name } = info[0];
        return this.success({name});
      }
    }
    this.fail('未登录');
  }

  async logoutAction() {
    await this.session('uid', ``);
    return this.success('成功登出');
    // this.ctx.redirect('/');
  }
};
