//src/routes/index.js
const mongoose = require('mongoose');
const router = require('express').Router();
const invController = require("./controllers/file.controller");


module.exports = router;



//setting template for frontpage
router.get('/', (req,res) => {
  res.render('index',
  {title: 'Loaner Tracker',
   message: 'FARTS!',
  });
});

router.param('loanerId', invController.getLoanerId);
router.get('/inv', invController.list);
router.post('/inv', invController.create);
router.get('/inv/:loanerId', invController.getLoaner);
router.post('/inv/:loanerId/update', invController.update);
router.post('/inv/:loanerId/delete', invController.delete);
router.post('/inv/:loanerId/status', invController.loanerStatus);
