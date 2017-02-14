//Require modules and files needed by assigning to variables
const express = require('express');
const config = require(."/config");

//set APP variable  as express in order to use set up apps
const app = express();


app.listen(config.port, ()=>{
  console.log("THE FRONTEND SERVER IS LISTENING ON PORT " + config.port + "!!!!");
})
