import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Registrar() {
  const [user,setUser] = useState({
                                    name: 'testando',
                                    email:'testando@gmail.com',
                                    age: 12,
                                    password: 'super123',
                                    confirmPassword:'super123'
                                  })
  function cadastrarUsuario(user){
    axios.post('http://localhost:4000/auth/register/user',user)
      .then(res=>console.log(res.data))
      .catch(erro=> console.log(erro))
  }

  return (
    <div>
      <button onClick={()=>cadastrarUsuario(user)}>Cadastrar</button>
    </div>
  )
}

export default Registrar