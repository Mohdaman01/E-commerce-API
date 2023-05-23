//importing the Schema
const Product = require('../models/product');


// To Get all the products 
module.exports.getProducts = async function(req,res){
    try{

        const product = await Product.find({}).sort('-createdAt');

        return res.status(200).json({
            products: product
        });

    }catch(err){

        console.log('Error in Getting Product: ',err);

        return res.status(500).json({
            message:'Internal Server error!'
        });
    }
};


//To Get only one product by using its _id
module.exports.getOneProduct = async function(req,res){
    try{

        let product = await Product.findById(req.params.id);

        //product exist in the Database
        if(product){

            return res.status(200).json({
                product: product
            });

        }
        //product does exist in the Database
        return res.status(200).json({
            message : `There is no Product with id: ${req.params.id}`
        });

    }catch(err){

        console.log('Error in Getting Product: ',err);

        return res.status(500).json({
            message:'Internal Server error!'
        });
    }
}


//To ADD new a product
module.exports.addProduct = async function(req,res){
    try{

        let product = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

        return res.status(200).json({
            message: 'Product Added Successfully!',
            data: {
                product: product
            }
        });

    }catch(err){

        console.log('Error in Adding Product: ',err);
        
        return res.status(500).json({
            message: 'Internal Server error!'
        });
    }
};


//To REMOVE a product by using its _id
module.exports.removeProduct = async function(req,res){
    try{

        let product = await Product.findById(req.params.id);

        if(product){

            product.deleteOne();

            return res.status(200).json({
                message: "product deleted"
            });
        };

        return res.status(200).json({
            message : `There is no Product with id: ${req.params.id}`
        });


    }catch(err){

        console.log('Error in Removing Product: ', err);

        return res.status(500).json({
            message: 'Internal Server error!'
        });
    }
};


//To UPDATE a product details using its _id
module.exports.updateProduct = async function(req,res){
    try{

        let product = await Product.findById(req.params.id);

        if(product){

            await Product.updateOne(product,{quantity: req.query.number});

            product = await Product.findById(req.params.id);

            return res.status(200).json({
                message: 'Product updated Successfully!',
                product: product
            });
        };

        return res.status(200).json({
            message : `There is no Product with id: ${req.params.id}`
        });

    }catch(err){

        console.log('Error in Updating Product: ', err);

        return res.status(500).json({
            message: 'Internal Server error!'
        });
    }
};