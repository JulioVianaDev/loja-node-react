import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./Register.css"
import Popup from '../components/Popup'
import { Formulario,InputRegistrar } from '../styles/styles'
function Registrar() {
  const [user,setUser] = useState({
                                    name: '',
                                    email:'',
                                    age: '',
                                    password: '',
                                    confirmPassword:''
                                  })
  const [showCard,setShowCard]=useState(false);

  function cadastrarUsuario(user){
    axios.post('https://loja-turma-terca-super-geeks.onrender.com/auth/register/user',user)
      .then(res=>console.log(res.data))
      .catch(erro=> console.log(erro))
  }
  
  function envioFormulario(event){
    event.preventDefault();
    cadastrarUsuario(user)
    setShowCard(true);
    setTimeout(()=>{
      setShowCard(false);
    },3500)
  }
  return (
    <div className='divForm'>
      <Formulario className='form' onSubmit={envioFormulario}>
        <div>
          <label className='label' htmlFor="nome">Nome:</label>
          <InputRegistrar
            className='input' 
            type="text" 
            id="nome" 
            value={user.name}
            onChange={(e)=>setUser({...user,name: e.target.value})}
          />
        </div>
        <div>
          <label className='label' htmlFor="email">Email:</label>
          <InputRegistrar
            className='input' 
            type="text" 
            id="email" 
            value={user.email}
            onChange={(e)=>setUser({...user,email: e.target.value})}
          />
        </div>
        <div>
          <label className='label' htmlFor="idade">Idade:</label>
          <InputRegistrar
            className='input' 
            type="number" 
            id="idade" 
            value={user.age}
            onChange={(e)=>setUser({...user,age: e.target.value})}
          />
        </div>
        <div>
          <label className='label' htmlFor="senha">Senha:</label>
          <InputRegistrar
            className='input' 
            type="password" 
            id="senha" 
            value={user.password}
            onChange={(e)=>setUser({...user,password: e.target.value})}
          />
        </div>
          <label className='label' htmlFor="confirmPassword">Confirme Sua Senha:</label>
          <InputRegistrar
            className='input' 
            type="password" 
            id="confirmPassword" 
            value={user.confirmPassword}
            onChange={(e)=>setUser({...user,confirmPassword: e.target.value})}
          />
        
        <button className="button-form-register" type='submit'>Cadastrar</button>
      </Formulario>
      {
        showCard ?<Popup/> : null
      }
    </div>
  )
}

export default Registrar