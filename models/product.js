const mongoose = require('mongoose');

//Schema to store data in database
let productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

});

//Saving the Schema as product in database
let product = mongoose.model('product', productSchema);

//exporting the Schema
module.exports = product;