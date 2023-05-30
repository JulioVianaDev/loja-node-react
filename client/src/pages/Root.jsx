import React from 'react'
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div>
        Sou uma pagina principal


        <Outlet/>
    </div>
  )
}

export default Root