const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema({
 
  firstName: {
      type: String,
      required: [true, 'FirstName is required']
  },
  lastName:{
       type:String,
       required: [true, 'LastName is required']
  },
  email:{
    type:String,
    required: [true, 'Email is required']
},
phone:{
    type:String,
    required: [true, 'Phone is required']
},
gender:{
    type:String,
    required: [true, 'Gender is required']
}
},{
    collection: 'persons'
});

module.exports = mongoose.model('Person', Person);
