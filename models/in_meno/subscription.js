class Subscriptopn {
  constructor(userId, url) {
    this.userId = userId;
    this.url = url;
  }
  static list() {
    return Subscriptopn.sucscriptions;
  }
  static insert(userId, url) {
    const sub = new Subscriptopn(userId, url);
    Subscriptopn.sucscriptions.push(sub);
    return sub;
  }
  static findByUserId(userId) {
    return Subscriptopn.sucscriptions.map(s => s.userId === userId);
  }
}

Subscriptopn.sucscriptions = [];
module.exports = Subscriptopn;
