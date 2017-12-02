const User = require('../models/mongoose/user');
const Subscription = require('../models/mongoose/subscription')

module.exports.getAllUsers = async function () {
  const users = await User.list();
  return users;
}

module.exports.addNewUser = async function (name, age) {
  const user = await User.insert({ name, age });
  return user;
}

module.exports.getUserById = async function (userId) {
  const user = await User.getOneById(userId);

  return user;
}
module.exports.getUserByName = async function (name) {
  const user = await User.getOenByName(name);

  return user;
}

