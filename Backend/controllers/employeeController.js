const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Employee } = require('../models/employee');

//localhost:8000/employees/
router.get('/',(req,res) =>{
  Employee.find((err,docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req,res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No records with given id : ${req.params.id}');
  
  Employee.findById(req.params.id, (err,doc) => {
    if(!err) { res.send(doc); }
    else{console.log('Error in Retriving Emplyee: '+ JSON.stringify(err, undefined, 2));}
  });
});

router.post('/', (req,res) => {
  var emp = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    relationship: req.body.relationship,
    dob:req.body.dob,
    ssn:req.body.ssn,
    memberid:req.body.memberid,
    status:req.body.status,
  });
  emp.save((err, doc) => {
    if(!err) { res.send(doc); }
    else { console.log('Error in Employee Save: ' + JSON.stringify(err, undefined, 2));}
  });
});

router.put('/:id', (req,res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No records with given id : ${req.params.id}');

  var emp = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    relationship: req.body.relationship,
    dob:req.body.dob,
    ssn:req.body.ssn,
    memberid:req.body.memberid,
    status:req.body.status,
  };
  Employee.findByIdAndUpdate(req.params.id, { $set:emp }, { new: true}, (err,doc) =>{
    if(!err) { res.send(doc); }
    else { console.log('Error in Employee Save: ' + JSON.stringify(err, undefined, 2));}
  });
});

// router.put('/:id',(req,res)=>{
//   if(!ObjectId.isValid(req.params.id))
//      return res.status(400).send(`No record with given id:${req.params.id}`)

//      let emp = {
//      firstName: req.body.firstName,
//      lastName: req.body.lastName,
//      relationship: req.body.relationship,
//      dob:req.body.dob,
//      ssn:req.body.ssn,
//      memberid:req.body.memberid,
//      status:req.body.status,
//      };

//      Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new :true},(err,doc)=>{
//        if(!err){
//           res.send(doc);
//        }
//        else{
//           console.log('error in Employee update:' +JSON.stringify(err,undefined,2))
//        }
//      })
// })
module.exports = router;