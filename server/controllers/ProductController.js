const Product = require('../models/Product')

module.exports= class ProductsController{
    static async getAll(req,res){
        try{
            const products = await Product.find();
            res.json(products);
        }catch(erro){
            console.log(erro);
            res.status(500).json({message: "Erro ao pegar todos os produtos."})
        }
    }
}