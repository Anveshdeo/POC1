const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/employee-api", (err) => {
  if(!err)
    console.log('MongoDB connection Successeded.');
  else
    console.log('Error in DB connection :'+JSON.stringify(err,undefined, 2));
});

module.exports = mongoose;