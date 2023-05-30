import { createBrowserRouter } from "react-router-dom"
import Registrar from "./pages/Registrar"
import Root from "./pages/Root"

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path: 'cadastro',
          element: <h1>Sou a rota de cadastro</h1>
        },
        {
            path:'register',
            element: <Registrar/>
        }
      ]
    },
])