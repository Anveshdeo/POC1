const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');
const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors({origin:'http://localhost:4200/login'}))

app.listen(8000, () => console.log('Server started at port: 8000'));

app.use('/employees', employeeController)