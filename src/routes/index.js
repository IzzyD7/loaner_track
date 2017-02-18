//src/routes/index.js
const router = require('express').Router();

//setting template for frontpage
router.get('/', (reg,res) => {
  res.render('index',
  {title: 'Loaner Tracker',
   message: 'FARTS!',
  });
});



module.exports = router;
