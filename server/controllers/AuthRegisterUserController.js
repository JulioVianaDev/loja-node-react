const User = require('../models/User')

module.exports = class AuthRegisterUserController{
  static async init(req,res){
    res.send({message: "Bem vindo a nossa api!"})
  }
  static async registerUser(req,res){
    
  }
}