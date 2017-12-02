const mongoose = require('mongoose');

const uri = 'mongodb://localhost/waht_i_love';

mongoose.Promise = global.Promise;

mongoose.connect(uri, { useMongoClient: true });

const db = mongoose.connection;

db.on('open', () => {
  console.log('db connect');
});

db.on('error', (err) => {
  console.log(err);
});

module.exports = db;
