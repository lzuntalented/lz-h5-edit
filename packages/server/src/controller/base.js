module.exports = class extends think.Controller {
  async __before() {
    // const {headers, method, href, ip} = this.ctx;
    // const params = Object.assign({}, headers, {method, href, ip});
    // think.logger.info(JSON.stringify(params));
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Headers', '*');
    const id = await this.session('uid');
    this.userId = id;
  }
};
