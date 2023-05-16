import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Registrar() {
  const [user,setUser] = useState({
                                    name: '',
                                    email:'',
                                    age: '',
                                    password: '',
                                    confirmPassword:''
                                  })
  function cadastrarUsuario(user){
    axios.post('http://localhost:4000/auth/register/user',user)
      .then(res=>console.log(res.data))
      .catch(erro=> console.log(erro))
  }

  return (
    <div>
      <form onSubmit={()=>cadastrarUsuario(user)}>
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id="nome" 
          value={user.name}
          onChange={(e)=>setUser({...user,name: e.target.value})}
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          id="email" 
          value={user.email}
          onChange={(e)=>setUser({...user,email: e.target.value})}
        />
        <label htmlFor="idade">Idade:</label>
        <input 
          type="number" 
          id="idade" 
          value={user.age}
          onChange={(e)=>setUser({...user,age: e.target.value})}
        />
        <label htmlFor="senha">Senha:</label>
        <input 
          type="password" 
          id="senha" 
          value={user.password}
          onChange={(e)=>setUser({...user,password: e.target.value})}
        />
        <label htmlFor="confirmPassword">Confirme Sua Senha:</label>
        <input 
          type="password" 
          id="confirmPassword" 
          value={user.confirmPassword}
          onChange={(e)=>setUser({...user,confirmPassword: e.target.value})}
        />
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Registrar