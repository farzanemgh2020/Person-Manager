const mongoose = require('mongoose');
const Person= require('../models/Person')
mongoose.set('useFindAndModify', false);


class PersonRepository{
    constructor() {
        if (!PersonRepository.instance) {
            PersonRepository.instance = this;
        }
        return PersonRepository.instance;
    }

    async getPersonList(){
        try{
            return(Person.find({}));
        }
        catch(error) {
            return(error);
          }
    }
    getPerson(id){
        return (Person.findById(id));
    }

    insertNewPerson(person){
        const newPerson = new Person(person);
        newPerson.save()
        .then(() => {
             return ('Person added successfully');
         })
        .catch(err => {
             return("unable to save to database");
        });
    }
    updatePerson(id,person){
        Person.findByIdAndUpdate({ _id: id }, person, { runValidators: true }, function (result) {
           return("person updated successfully");
         }).catch(err => {
            return("unable to update the database");
         })
    }
    deletePerson(id){
        Person.findByIdAndDelete({ _id:id }, function (result) {
            return ("person Deleted successfully");
        }).catch(err => {
            return("unable to delete from the database");
        })
    }
}

// ensure Singleton
const instance = new PersonRepository();
Object.freeze(instance);
module.exports = instance;
