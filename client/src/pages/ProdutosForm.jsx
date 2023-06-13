import React,{useState} from 'react'

function ProdutosForm() {
    const [disponivel,setDisponivel] = useState(false);

    const handleCheckboxChange = (event)=>{
        setDisponivel(event.target.checked);
    }

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
                    <label htmlFor="disponivel"> Produto Disponivel:</label>
                    <input 
                        type="checkbox" 
                        name="disponivel" 
                        id="disponivel" 
                        checked={disponivel}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="nDisponivel"> Produto Não Disponivel:</label>
                    <input 
                        type="checkbox" 
                        name="nDisponivel" 
                        id="nDisponivel" 
                        checked={!disponivel}
                        onChange={handleCheckboxChange}
                    />
                </form>
            </div>
        </div>
    )
}

export default ProdutosForm