import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const useAuth  = () => {
  //get item from localstored

  let user;

  const _user = localStorage.getItem("user");

  if(_user){
    user = JSON.parse(_user);
    console.log("user",user);
  }
  if(user){
      return {
        auth: true,
        role: user.role,
      }
  }
  else{
      return {
        auth: false,
        role: null
      }
  }
}

//protected route state
type ProtecteRouteType = {
  roleRequired?: "ADMIN" | "USER"
}

const ProtectRoute = (ProtecteRouteType) => {

  const { auth, role} = useAuth();

  if(ProtectRoute.roleRequired)
  {
      return auth ? (
        ProtecteRouteType.roleRequired === role ? (
          <Outlet/>
        ) : (
          <Navigate to="/denied" />
        )
      ) : (
        <Navigate to="/login"/>
      )
  }
  else{
    return auth ? <Outlet/> : <Navigate to="/login"/>
  }
  
}

export default ProtectRoute