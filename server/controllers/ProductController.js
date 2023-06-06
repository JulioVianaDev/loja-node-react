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
    static async createProduct(req,res){
        try {
            const { nome,price,desc,disponivel} = req.body;
            if(!nome){
               return res.status(406).json({message: "O nome é obrigatório."})
            }
            if(!price){
               return res.status(406).json({message: "O price é obrigatório."})
            }
            if(!desc){
               return res.status(406).json({message: "O desc é obrigatório."})
            }
            if(!disponivel){
               return res.status(406).json({message: "O disponivel é obrigatório."})
            }
            if(disponivel !== Boolean){
               return res.status(406).json({message: "O disponivel tem que ser booleano."})
            }
            if(price !== Number){
               return res.status(406).json({message: "O price tem que ser booleano."})
            }
            if(desc !== String){
               return res.status(406).json({message: "O desc tem que ser booleano."})
            }
            if(nome !== String){
               return res.status(406).json({message: "O nome tem que ser booleano."})
            }
            const produto = new Product({nome,price,desc,disponivel})
            await produto.save()
            res.status(201).json(produto)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro ao cadastrar o produto."})
        }
    }
    static async editProduct(req,res){
        try {
            const {nome,price,desc,disponivel} = req.body;
            const produto = await Product.findByIdAndUpdate(
                req.params.id,
                {nome,price,desc,disponivel} ,
                {new: true}
            );
            if(!produto){
                return res.status(404).json({message: "este produto não existe"})
            }
            res.json(produto);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro ao editar o produto."})
        }
    }
    static async deleteProduto(req,res){
        try {
            const produto = await Product.findByIdAndRemove(req.params.id)
            if(!produto){
                return res.status(404).json({message: "Não existe um produto com este id"})
            }
            res.json({message: "Produto deletado com sucesso!"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro ao deletar o produto."})
        }
    }
}