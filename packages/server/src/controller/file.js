import jimp from 'jimp';
import {
  getPicturePathWithName, createRandom, getPicturePath,
  getDomain, getBgPicturePath, getPsdTmpPathWithName, getMyPhotoPathWithName
} from '../tools';
import { parsePsd } from '../tools/min';
import { CODE_LOGIN } from '../common/constants';

const fs = require('fs');
const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    // const model = this.model('opus');
    // const result = model.select();
    return this.display();
  }

  async uploadAction() {
    if (!(this.userId > 0)) {
      return this.fail(CODE_LOGIN, '请先登录');
    }
    this.ctx.body = this.ctx.request.body;
    const { body } = this.ctx;
    if (body && body.file && body.file.upFile) {
      const fileObj = body.file.upFile;
      const { path, name } = fileObj;
      const nameList = name.split('.');
      const ext = nameList[nameList.length - 1]
      if (!['jpg','png','jpeg','gif','svg','webp','apng'].includes(String(ext).toLowerCase())) {
        return this.fail('请上传图片文件')
      }
      const fileName = `${Date.parse(new Date())}-${createRandom(12)}-${name}`;
      fs.renameSync(path, getMyPhotoPathWithName(this.userId, fileName));
      return this.success(fileObj);
    }
    return this.fail('操作失败');
  }

  async getListAction() {
    const picPath = getPicturePath();
    const list = fs.readdirSync(picPath);
    const result = list.map(it => (it === '.gitkeep' ? '' : `http://${getDomain()}/server/static/pic/${it}`));
    this.success(result.filter(it => it).reverse());
  }

  async getMyListAction() {
    if (!(this.userId > 0)) {
      return this.fail(CODE_LOGIN, '请先登录');
    }
    const picPath = getMyPhotoPathWithName(this.userId);
    const list = fs.readdirSync(picPath);
    const result = list.map(it => (it === '.gitkeep' ? '' : `http://${getDomain()}/server/static/photo/my/${this.userId}/${it}`));
    return this.success(result.filter(it => it).reverse());
  }

  async cropImageAction() {
    const url = this.post('url');
    const x = +this.post('x');
    const y = +this.post('y');
    const width = +this.post('width');
    const height = +this.post('height');

    const urlPathList = url.split('/');
    const fileName = urlPathList[urlPathList.length - 1];
    let filePath = getPicturePathWithName(fileName);
    let exist = fs.existsSync(filePath);
    if (!exist && +this.userId > 0) {
      filePath = getMyPhotoPathWithName(this.userId, fileName);
      exist = fs.existsSync(filePath);
    }

    if (exist) {
      const image = await jimp.read(filePath);
      const data = await image.crop(x, y, width, height);
      const fileNameList = fileName.split('-');
      const lastExt = fileNameList[fileNameList.length - 1];
      const saveName = `${Date.parse(new Date())}-${createRandom(12)}-${lastExt}`;
      await data.write(getBgPicturePath(saveName));
      return this.success(`http://${getDomain()}/static/bg/${saveName}`);
    }
    return this.fail('参数错误');
  }

  async parsePsdAction() {
    this.ctx.body = this.ctx.request.body;
    const { body } = this.ctx;
    if (body && body.file && body.file.upFile) {
      const fileObj = body.file.upFile;
      const { path, name } = fileObj;
      const nameList = name.split('.');
      const ext = nameList[nameList.length - 1]
      if (!['psd'].includes(String(ext).toLowerCase())) {
        return this.fail('请上传psd文件')
      }
      const psdTmpPath = `${Date.parse(new Date())}-${createRandom(12)}-${name}`;
      const psdname = getPsdTmpPathWithName(psdTmpPath);
      fs.renameSync(path, psdname);
      const result = await parsePsd(psdname);
      return this.success(result);
    }
    return this.fail('参数错误');
  }
};
