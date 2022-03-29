import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';


const useAuth = ()=>{
  //Obtenemos el usuarios del localstored
  const user  = localStorage.getItem('user');

  if(user){
    return true;
  }else{
    return false;
  }
}

const PublicRoute = () => {

  const auth = useAuth();

  return ( auth ? <Navigate to="/dashboard"/> : <Outlet /> );
}

export default PublicRoute;