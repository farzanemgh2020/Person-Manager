
const express = require("express");
var cors = require('cors');
var mongoose = require('mongoose');
var personAPI = require('./person/PersonApi.js');


const app = express();
app.use(cors());
app.use(express.json());

// require('dotenv').config();
//set mongo db connection
const mongoDB = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true }).then(
  () => {console.log('Database is connected');},
  err => { console.log('Can not connect to the database'+ err)}
 ); 

app.use('/person', personAPI);
//  
/**
 * Server Activation
 */
const port = process.env.PORT || 8002;
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
module.exports = app;

