//src/routes/index.js
const mongoose = require('mongoose');
const router = require('express').Router();


module.exports = router;



//setting template for frontpage
router.get('/', (req,res) => {
  res.render('index',
  {title: 'Loaner Tracker',
   message: 'FARTS!',
  });
});


router.get('/inv', (req,res)=> {
  mongoose.model('Inv').find({}, function(err, loaners) {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    }

    res.json(loaners);
  });
});
