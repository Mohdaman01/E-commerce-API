
const mongoose = require('mongoose');

//Connet to the local mongoDB
mongoose.connect(process.env.MONGODB_URL);

//Establish the connection to the database
const db = mongoose.connection;

//On a Error occurs
db.on('error',console.error.bind(console,'connection error'));

//This will execute only one time when Server start and make Connetion to database
db.once('open',function(){
    console.log('mongobd connected!'); 
});
// 127.0.0.1:27017 