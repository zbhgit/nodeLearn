const mongoose = require('mongoose');

const { Schema } = mongoose;

// const SubSchema = new Schema({
//   userId: { type: ObjectId, required: true, index: 1 },
//   url: { String, required: true },
// });

const SubSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, index: 1 },
  url: { type: String, required: true },
})

const SubModel = mongoose.model('sub', SubSchema);


async function insert(sub) {
  const created = await SubModel.create(sub);
  return created;
}

async function findOneById(userId) {
  const subs = await SubModel.find({ userId });
  return subs;
}

async function list() {
  const match = {};
  const flow = SubModel.find(match);
  const subs = await flow.exec()
  return subs;
}

module.exports = {
  insert,
  list,
  findOneById,
}