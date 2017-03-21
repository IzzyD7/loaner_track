//Require modules and files needed by assigning to variables
const express = require('express');
const config = require("./config");
const router = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

//Connect to MongoDB. Create and use as defined in config
mongoose.connect(`mongodb://${config.db.host}/${config.db.dbName}`);

//set APP variable  as express in order to use set up apps
const app = express();

// Import all models
require('./models/file.model.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//setting up Pug as template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//set up express static server for css,js, and oher public facing files for frontend. Also set up static for node_modules
app.use(express.static(path.join(__dirname,'../public')));
app.use('/node_modules',express.static(path.join(__dirname,'../node_modules')));


//display the data from routes/index.js
app.use(router)

//Setes up server to allow client to connect at port 8080
app.listen(config.port, ()=>{
  console.log("THE FRONTEND SERVER IS LISTENING ON PORT " + config.port + "!!!!");
})
