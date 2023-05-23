const express =  require('express');

const Router = express.Router();

Router.get('/', (req,res)=>{
    res.send('E-commerce API is Online');
})

//Directing to products route
Router.use('/products', require('./products'));

module.exports = Router;