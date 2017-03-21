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


// router.get('/inv', (req,res)=> {
//   mongoose.model('Inv').find({}, function(err, loaners) {
//     if (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//
//     res.json(loaners);
//   });
// });

router.get('/inv', invController.list);
router.get('/inv', invController.get);
router.post('/inv', invController.create);
