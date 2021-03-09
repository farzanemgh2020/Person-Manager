const PersonRepository=require('./PersonRepo');
const express = require('express');
const { estimatedDocumentCount } = require('../models/Person');
const router = express.Router();

//fetch all persons
router.get("/", async (req,res) => {
    await PersonRepository.getPersonList().then((response)=>{
    res.send(response);
    }).catch(err => {
        return("unable to get the person list");
     });
});
    
//fetch a particular person with id
router.get('/:id',async(req,res)=>{
    await PersonRepository.getPerson(req.params.id).then((response)=>{
        res.send(response);
    }).catch(err => {
            return("unable to get the person info");
    });
});

// create a new person
router.post('/',(req,res)=>{
    res.send(PersonRepository.insertNewPerson(req.body));
});
  
//Delete a person
router.delete("/:id",(req,res)=>{
    res.send(PersonRepository.deletePerson(req.params.id));
});

//Edit a person
router.put("/:id",(req,res)=>{
    const result=PersonRepository.updatePerson(req.params.id,req.body);
    console.log("Delete",result)
    res.send(req.params.id.toString());
});

module.exports = router