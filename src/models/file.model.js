const mongoose = require('mongoose');
//defines database schema
const InvSchema = new mongoose.Schema({
  pcName: {
    type: String,
    required: true,
    trim: true
  },
  // model: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // client: {
  //   type: String,
  //   trim: true,
  //   default:"Unassigned"
  // },
  pcStatus: {
    type: String,
    default: "In"
  }
});

//makes database accessible to other files
const Inv = mongoose.model('Inv', InvSchema);

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
  });
});


module.exports = Inv;
