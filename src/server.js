//Require modules and files needed by assigning to variables
const express = require('express');
const config = require("./config");
const router = require('./routes');
const path = require('path');


//set APP variable  as express in order to use set up apps
const app = express();

//setting up Pug as template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//set up express static server for css,js, and oher public facing files for frontend.
app.use(express.static(path.join(__dirname,'/public')));

//display the data from routes/index.js
app.use(router)

//Setes up server to allow client to connect at port 8080
app.listen(config.port, ()=>{
  console.log("THE FRONTEND SERVER IS LISTENING ON PORT " + config.port + "!!!!");
})
