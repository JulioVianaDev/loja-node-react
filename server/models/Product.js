const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: String,
    price: Number,
    desc: String,
    disponivel: Boolean,
    createdAt: { type: Date,default: Date.now }
})


const Product = mongoose.model('product',productSchema)

module.exports = Product;