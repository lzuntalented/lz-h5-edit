module.exports = class extends think.Model {
  get tableName() {
    return this.tablePrefix + 'opus';
  }

  get modelName() {
    return 'opus';
  }

  get relation() {
    return {
      template: think.Model.HAS_ONE
    };
  }
};
