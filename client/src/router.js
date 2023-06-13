import { createBrowserRouter } from "react-router-dom"
import Registrar from "./pages/Registrar"
import Root from "./pages/Root"
import ProdutosForm from "./pages/ProdutosForm"
import Produtos from "./pages/Produtos"
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path: 'cadastro',
          element: <ProdutosForm/>
        },
        {
            path:'register',
            element: <Registrar/>
        },
        {
          path: 'produtos',
          element: <Produtos/>
        }
      ]
    },
])