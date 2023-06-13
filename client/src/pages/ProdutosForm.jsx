import React from 'react'

function ProdutosForm() {
  return (
    <div>
        <h1>Cadastre seu produto</h1>
        <div>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
                <label htmlFor="desc">desc</label>
                <input type="text" id="desc" name="desc" />
                <label htmlFor="price">price</label>
                <input type="number" id="price" name="price" />
                
            </form>
        </div>
    </div>
  )
}

export default ProdutosForm