module.exports = class extends think.Model {
  get relation() {
    return {
      opus: think.Model.BELONG_TO
    };
  }
};
