const express = require('express')
const cors = require('cors')
require('dotenv').config()
const fetch = require("node-fetch");

var app = express();

app.use(cors())
app.use(express.json())

const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes')
const ProductsRouter = require('./routes/ProductsRoutes')

const port = process.env.PORT || 3000

app.use(AuthRegisterUserRoutes)
app.use('/products',ProductsRouter)

app.get('/lucas', async function(req, res){
  const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D')
      const data = await response.json()
      res.send(data)
  })
app.listen(port,()=>{
  console.log(`Servidor rodando na porta: ${port}`)
})

require("./database/connection")
