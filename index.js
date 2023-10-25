//importing express
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

//importing db
const db = require('./config/mongoose');

//port on which Server will run 
const port = 5000;

//To parse the data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//Directing to this route 
app.use('/',require('./routes/index'));


//Starting the Server
app.listen(port,(error)=>{
    if(error){
       console.log('error',error);
    }
    console.log(`your sever is running on http://localhost:${port}`);
});