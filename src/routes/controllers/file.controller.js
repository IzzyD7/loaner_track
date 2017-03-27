const mongoose = require('mongoose');
const Inv = require('../../models/file.model')


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
  //   const fileId = req.params.fileId;
  //   console.log(fileId);
  //   Inv.findById(fileId, function(err, file) {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).json(err);
  //     }
  //
  //     res.json(file);
  //   });
  // },

//reusable code to get loaner by name
  getLoanerId: function (req,res,next,id) {
    console.log(id);
    Inv.findById(id, function (err, doc){
      if(err) return next(err);
      if(!doc){
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
      }
      req.item = doc;
      console.log(doc);
      return next();

    });
  },

//GET single machine
  getLoaner: function (req,res,next) {
    console.log("this ran");
    res.json(req.item);
  },

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
        console.log("Added the following to the database:"+newMachineModel);
      }
    });
  },

  //update loaner info
  update: function(req,res,next) {
    // const loanerId = req.params.loanerId;
    const updatedLoaner = req.body;

    // Inv.findById(loanerId, function(err,loaner) {
    //   if (err){
    //     console.log(err);
    //     res.status(500).json(err);
    //   }

      req.item.pcName = updatedLoaner.name;
      req.item.model = updatedLoaner.model;
      req.item.client = updatedLoaner.client;

      req.item.save(function(err,loaner) {
        if(err) {
          console.log(err);
          res.status(500).json(err);
        }
        res.json(loaner);
      });
    // });
  },

  //Change Status
  statusIn: function(req,res,next){
    console.log(req.item.pcStatus);
    if(req.item.pcStatus === true){
      req.item.pcStatus = false;
    } else {
      req.item.pcStatus = true;
    }
    res.json(loanerId);
  },

  //Check out

  //Delete loaner
  delete: function(req,res) {
    req.item.remove(function(err){
      if(err) return next(err);
      res.send("Machine record deleted!")
    });

  }

}
