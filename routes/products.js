const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product_controller');

//Get all Products
router.get('/', product_controller.getProducts);


//Get a single Product
router.get('/:id', product_controller.getOneProduct);


//Add a new Product
router.post('/create', product_controller.addProduct);


//Remove a Product
router.delete('/:id', product_controller.removeProduct);


//Update a Product 
router.patch('/:id/update_quantity', product_controller.updateProduct);

module.exports = router;