/*
*  model: 数据模型----处理数据本身
*  view: 视图层
 * controller: 数据获取
* */

//缓存用户数据


class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    User.id += 1;
    this.id = User.id;
  }

  // 用户列表
  static list() {
    return User.users;
  }

  // 增加用户
  static insert(firstName, lastName, age) {
    const u = new User(firstName, lastName, age);
    User.users.push(u);
    return u;
  }

  // 通过用户名获取用户
  static getOenByName(firstName, lastName) {
    return User.users.find(u => u.firstName === firstName && u.lastName === lastName)
  }

  // 通过用户名获取用户
  static getOenById(id) {
    return User.users.find(u => u.id === id);
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

User.users = [];
User.id = 0;

module.exports = User;

