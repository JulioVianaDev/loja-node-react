import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Produtos() {
    const [produtos,setProdutos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/products')
            .then(res=>setProdutos(res.data))
            .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h1> Produtos </h1>
        
        {
            produtos.map(p=> <div>
                                <h2>Tomate</h2>
                                <p>Desc </p>
                                <p>Price</p>
                                <p>Disponivel</p>
                            </div>
            )
        }
        
    </div>
  )
}

export default Produtos