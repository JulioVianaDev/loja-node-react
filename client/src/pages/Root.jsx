import React from 'react'
import { Outlet,NavLink } from "react-router-dom";
import './Navbar.css'
function Root() {
  return (
    <div>
        <nav>
            <div>
                <NavLink
                    to='/cadastro'
                >
                    Cadastro de Produtos
                </NavLink>
                <NavLink
                    to='/register'
                >
                    Criar Conta
                </NavLink>
                <NavLink
                    to='/login'
                >
                    Logar na loja
                </NavLink>
            </div>
            <div>

            </div>
        </nav>

        <div className='conteudo'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root