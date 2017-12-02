const Subscription = require('../models/mongoose/subscription');

module.exports.createSucscription = async function (userId, url) {
  const sub = await Subscription.insert({ userId, url });
  return sub;
}

module.exports.list = async function () {
  const subs = await Subscription.list();
  return subs;
}

module.exports.findOneById = async function findOneById(userId) {
  const subs = await Subscription.findOneById(userId);
  return subs;
}