//Require modules and files needed by assigning to variables
const express = require('express');
const config = require("./config");
const router = require('./routes');

//set APP variable  as express in order to use set up apps
const app = express();

//display the data from routes/index.js
app.use(router);

//Setes up server to allow client to connect at port 8080
app.listen(config.port, ()=>{
  console.log("THE FRONTEND SERVER IS LISTENING ON PORT " + config.port + "!!!!");
})
