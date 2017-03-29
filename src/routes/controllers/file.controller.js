const mongoose = require('mongoose');
const Inv = require('../../models/file.model')


module.exports = {
  //list all computers in db
  list: function(req,res,next){
    Inv.find({}, function(err,list) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);

      }

      res.json(list);
    });
  },

//reusable code to get loaner by name
  getLoanerId: function (req,res,next,id) {
    Inv.findById(id, function (err, doc){
      if(err) return next(err);
      if(!doc){
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
      }
      req.item = doc;
      return next();

    });
  },

//GET single machine
  getLoaner: function (req,res,next) {
    res.json(req.item);
  },

  //create a new loaner
  create: function(req,res,next) {
    const newMachine = req.body;
    const newMachineModel = new Inv(newMachine);
    newMachineModel.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      } else {
        res.json(newMachineModel);
      }
    });
  },

  //update loaner info
  update: function(req,res,next) {
    // const loanerId = req.params.loanerId;
    const updatedLoaner = req.body;
      req.item.pcName = updatedLoaner.pcName;
      // req.item.model = updatedLoaner.model;
      // req.item.client = updatedLoaner.client;

      req.item.save(function(err,loaner) {
        if(err) {
          console.log(err);
          res.status(500).json(err);
        }
        res.json(loaner);
    });
  },

  //Change Status
  loanerStatus: function(req,res,next){
    if(req.item.pcStatus === "In"){
      req.item.pcStatus = "Out";
      req.item.save(function(err,loaner) {
        if(err) {
          console.log(err);
          res.status(500).json(err);
        }
        res.json(loaner);
      });
    } else {
      req.item.pcStatus = "In";
      req.item.save(function(err,loaner) {
        if(err) {
          console.log(err);
          res.status(500).json(err);
        }
        res.json(loaner);
      });
    }
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
