import React from 'react'
import { Outlet } from 'react-router-dom'
const Restaurante = () => {
  return (
    <div>
      <h1>Restaurante main page</h1>
    	{/** inner content */}
      <Outlet />
    </div>
  )
}

export default Restaurante