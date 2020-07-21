module.exports = class extends think.Model {
  // get relation() {
  //   return {
  //     template: think.Model.HAS_ONE
  //   };
  // }

  async getList(offset, pageSize) {
    const result = await this.alias('o').join({
      table: 'template',
      as: 'c', // 表别名
      on: ['id', 'opus_id'] // ON 条件
    }).limit(offset * pageSize, pageSize).order('o.id DESC')
      .field('*, c.id as cid').select();
    return result.map(it => {
      const { id, content, title, add_time: addTime, cid } = it;
      const obj = {
        id,
        content,
        title,
        addTime
      };
      if (cid) {
        obj.template = {
          id: cid
        };
      };
      return obj;
    });
  }
};
