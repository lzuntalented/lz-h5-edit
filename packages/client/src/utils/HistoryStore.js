// 最大保存历史数
const HISTORY_MAX_LEN = 20;

class HistoryStore {
    // 历史队列
    quene = []

    queneIndex = -1

    push(obj) {
      if (this.queneIndex !== this.quene.length - 1) {
        // 当前指针后面的操作全都不要了
        this.quene.splice(this.queneIndex + 1);
      }
      this.quene.push(obj);
      if (this.quene.length >= HISTORY_MAX_LEN) {
        this.pop();
      }
      this.queneIndex = this.quene.length - 1;
    }

    pop() {
      this.quene.shift();
    }

    // 重做
    redo() {
      if (this.queneIndex >= this.quene.length) {
        return false;
      }
      if (this.queneIndex === -1) {
        this.queneIndex += 1;
      }
      this.queneIndex += 1;
      if (this.queneIndex >= this.quene.length) {
        return false;
      }
      return this.quene[this.queneIndex];
    }

    // 撤回
    undo() {
      if (this.queneIndex <= -1) {
        return false;
      }
      if (this.queneIndex === this.quene.length) {
        this.queneIndex -= 1;
      }
      this.queneIndex -= 1;
      if (this.queneIndex <= -1) {
        return false;
      }
      return this.quene[this.queneIndex];
    }
}

export default new HistoryStore();
