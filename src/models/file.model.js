const mongoose = require('mongoose');

const invSchema = new mongoose.Schema({
  name: String,
  model: String,
  client: String,
  status: Boolean

});

const Inv = mongoose.model('Inv', invSchema);

// Seed the database if empty
Inv.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if (count > 0) return;

  const files = require('./file.seed.js');
  console.log("about to create", files);
  Inv.create(files, function(err, newFiles) {
    if (err) {
      throw err;
    }
    console.log();
  });
});

module.exports = Inv;
