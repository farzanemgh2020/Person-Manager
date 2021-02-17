#Person Management Example

## Introduction

It is a basic node-reactjs application for managing people information. It currently uses MongoDB for the database, Node.js for the REST API server, and React for the front side. The system, whereas simple, is anticipated to be a high-performance system handling millions of people's information in the database and accepting millions of hits per day to the website.

## Project Status

Currently, the user can view the list of contacts. Individual data is stored in the database with the following fields-- (Id, First Name, Last Name, Email, Phone Number, and Gender). The user can edit the details of a person or add a new person.

### Main steps to do
1. Developing a Frontend app (using ReactJs and Redux) 
2. Developing Server (API) app and connect it to MongoDB.
3. Creating  unit testing/integration tests with Jest. 
3. Implementing messaging system by using Kafka streams. 
4. Implementing search engine by using Elastic search
   1. Creating an Elastic Search Data Synchronizer 
   2. Connecting API to Elastic Search for reading/searching data 
5.  Creating a Docker file and Deploying the solution on Docker 

### Completed steps	
By now, the first two steps are developed and completed.

### Running step
I am working on the third part that is implementing tests.

## How to install

```bash
git clone git@github.com:farzanemgh2020/Person-manager
cd person-manager

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

## How to run
Ensure you have mongodb installed in your system and that it is running or if you are using mongodb image, ensure it is up in Docker and running
NOTE: Your local environment must have Java 8+ installed.

### Start the backend server
Start the backend server first:

```bash
cd person-manager/backend
npm start
```
This will run the backend server at localhost: 8002 .If all is working well, you should be able to access the url  http://localhost:8002/person from your Browser or Postman

### Start the client
Open a separate terminal to start the client:

```bash
cd person-manager/frontend
npm start
```
Your default web browser will be launched automatically with the url http://localhost:3000
 




