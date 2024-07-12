const mongoose = require ('mongoose');

const Employee = mongoose.model('Employee',{
  firstName : {
    type:String,
    required: true,
    minlength:4
  },
  lastName : {
    type:String,
    required: true,
    minlength:4
  },
  relationship : {
    type:String,
    required: true,
    minlength:4
  },
  dob : {
    type:String,
    required: true
  },
  ssn : {
    type:Number,
    required: true,
    unique:[true,"ssn already exist"],
    minlength: 9
  },
    memberid : {
    type:Number,
    required: true,
    minlength:4
  },
  status:{type:String}
});

module.exports = { Employee };