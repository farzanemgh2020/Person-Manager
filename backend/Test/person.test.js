
let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();


chai.use(chaiHttp);
describe('test Get route /person', () => {
    it('It should return all persons', (done) => {
      chai.request(server)
          .get('/person')
          .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
            done();
          });
    });
  });
 /*
  * Test the /GET/:id route
  */
 describe('/GET/:id person', () => {
  it('It should GET a person by the given id', (done) => {
    const personId='5fba8ecde917ee5864ca95fc';
    chai.request(server)
        .get('/person/'+ personId)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('firstName');
              res.body.should.have.property('lastName');
              res.body.should.have.property('email');
              res.body.should.have.property('phone');
              res.body.should.have.property('gender');
              res.body.should.have.property('_id').eql(personId);
          done();
        });
      });
    });
  
   /*
  * Test the POST route
  */
 describe('/POST person', () => {
  it('It should POST a new person', (done) => {
    const newperson={
      firstName:'Farzane',
      lastName:'mgh',
      email:'asd@gmail.com',
      phone:'23456789',
      gender:'female'
    }
    chai.request(server)
        .post('/person')
         .send(newperson)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
    });
    
  /*
  * Test the PUT route
  */
 describe('/PUT person', () => {
  it('It should edit a person by the given Id ', (done) => {
    const personId='5fba8eb8e917ee5864ca95fb';
    chai.request(server)
        .put('/person/'+ personId)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
    });

     /*
  * Test the Delete route
  */
 describe('/Delete person', () => {
  it('It should delete a person by the given Id ', (done) => {
    const personId='5fba8eb8e917ee5864ca95fe';
    chai.request(server)
        .delete('/person/'+ personId)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
    });