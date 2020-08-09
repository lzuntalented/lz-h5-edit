import { getPicturePathWithName, createRandom, getPicturePath, getDomain, getBgPicturePath, getPsdTmpPathWithName } from '../tools';
import jimp from 'jimp';
import { parsePsd } from '../tools/min';
const path = require('path');
const Base = require('./base.js');
const fs = require('fs'); ;

module.exports = class extends Base {
  indexAction() {
    // const model = this.model('opus');
    // const result = model.select();
    return this.display();
  }

  async uploadAction() {
    this.ctx.body = this.ctx.request.body;
    const { body } = this.ctx;
    if (body && body.file && body.file.upFile) {
      const fileObj = body.file.upFile;
      const { path, name } = fileObj;
      fs.renameSync(path, getPicturePathWithName(`${Date.parse(new Date())}-${createRandom(12)}-${name}`));
      this.success(fileObj);
    }
  }

  async getListAction() {
    const picPath = getPicturePath();
    const list = fs.readdirSync(picPath);
    const result = list.map(it => `http://${getDomain()}/static/pic/${it}`);
    this.success(result.reverse());
  }

  async cropImageAction() {
    const url = this.post('url');
    const x = +this.post('x');
    const y = +this.post('y');
    const width = +this.post('width');
    const height = +this.post('height');

    const urlPathList = url.split('/');
    const fileName = urlPathList[urlPathList.length - 1];
    const filePath = getPicturePathWithName(fileName);
    const exist = fs.existsSync(filePath);
    if (exist) {
      const image = await jimp.read(filePath);
      const data = await image.crop(x, y, width, height);
      const fileNameList = fileName.split('-');
      const lastExt = fileNameList[fileNameList.length - 1];
      const saveName = `${Date.parse(new Date())}-${createRandom(12)}-${lastExt}`;
      await data.write(getBgPicturePath(saveName));
      return this.success(`http://${getDomain()}/static/bg/${saveName}`);
    }
    this.fail('参数错误');
  }

  async parsePsdAction() {
    this.ctx.body = this.ctx.request.body;
    const { body } = this.ctx;
    if (body && body.file && body.file.upFile) {
      const fileObj = body.file.upFile;
      const { path, name } = fileObj;
      const psdTmpPath = `${Date.parse(new Date())}-${createRandom(12)}-${name}`;
      const psdname = getPsdTmpPathWithName(psdTmpPath);
      fs.renameSync(path, psdname);
      const result = await parsePsd(psdname);
      return this.success(result);
    }
    this.fail('参数错误');
  }
};
