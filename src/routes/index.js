//src/routes/index.js
const router = require('express').Router();

router.get('/', (reg,res) => {
  res.send("<h1>HOMEPAGE</h1>");
});



module.exports = router;
