import React from 'react'
import { useNavigate } from 'react-router-dom';
import TecladoNumerico from '../../utils/TecladoNumerico';

const Login = () => {

  const navigate =  useNavigate();
  //ADMIN
  //USER

  const login = () => {
    localStorage.setItem("user", JSON.stringify({role: "ADMIN"}));
    navigate("/dashboard")
  }

  return (
    <div className='login'>
      <h2>Welcome to login page! </h2>
			<p>Please loging to continue</p>
			<button onClick={login}> Login</button>

      <div>
        <TecladoNumerico />
      </div>
    </div>
  )
}

export default Login