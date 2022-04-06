import React from 'react'
import { Outlet } from 'react-router-dom'
const Restaurant = () => {
  return (
    <div>
     
    	{/** inner content */}
      <Outlet />
    </div>
  )
}

export default Restaurant