const mongoose = require('mongoose');
const Inv = require('../../models/file.model.js')


module.exports = {
  //list all computers in db
  list: function(req,res,next){
    Inv.find({}, function(err,list) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      res.json(list);
    });
  },

  // // Get a single file
  // get: function(req, res, next) {
  //   const loanerId = req.params.invId;
  //   mongoose.model('Inv').findById(fileId, function(err, loaner) {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).json(err);
  //     }
  //
  //     res.json(loaner);
  //   });
  // },

  //create a new loaner
  create: function(req,res,next) {
    const newMachine = req.body;
    const newMachineModel = new Inv(newMachine);
    newMachineModel.save(function (err) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.json(newMachineModel);
      }
    });
  },

  //Check in/out and update loaner info
  update: function() {

  },

  //Delete loaner
  delete: function() {

  }

}
