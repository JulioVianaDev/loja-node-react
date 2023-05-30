const mongoose = require('mongoose');

const Product = mongoose.Model('product',{
    nome: String,
    price: Number,
    desc: String,
    disponivel: Boolean
})

module.exports = Product;