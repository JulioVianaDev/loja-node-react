const Product = require('../models/Product')

module.exports= class ProductsController{
    static async getAll(res,req){
        res.send({message: 'pegando todos os valores'})
    }
}