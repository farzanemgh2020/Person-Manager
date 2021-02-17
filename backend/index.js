// index.js

/**
 * Required External Modules
 */
const express = require("express");
var cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const Person = require('./Person.js');


const app = express();
app.use(cors());
const port = process.env.PORT || "8002";
var mongoDB = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
 );
app.use(express.json());
const persons = [];


//fetch all persons
app.get("/person", (req, res,next) => {
 
  Person.find({}).then(function (persons) {
    res.send(persons);
    });
  });
//fetch a particular person with id
app.get('/person/:id',(req,res)=>{
  var query = req.params.id;
  Person.findById(query)
  .then(function (person) {
    res.send(person);
    }) 
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });

  // create a new person
 app.post('/person',(req,res)=>{
  const newPerson = new Person(req.body);
    newPerson.save()
    .then(person => {
     res.json('Person added successfully');
     })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  });

  //Delete a person
 app.delete("/person/:id",(req,res)=>{
   const id=req.params.id;
      Person.findByIdAndDelete({ _id: req.params.id }, function (person) {
        res.send(id.toString());
       }).catch(err => {
        res.status(400).send("unable to connect to database");
        })
  });
   //Edit a person
 app.put("/person/:id",(req,res)=>{
  
  Person.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, function (person) {
    res.send("person updated successfully");
   }).catch(err => {
    res.status(400).send("unable to connect to database");
    })
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
  module.exports = app;