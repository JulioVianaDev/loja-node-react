const Product = require('../models/Product')

module.exports= class ProductsController{
    static async getAll(req,res){
        res.send({message: 'pegando todos os valores'})
    }
}