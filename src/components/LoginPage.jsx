import React, { useContext } from 'react'
import { UserContext } from './CreateContext'
import { Navigate, useNavigate } from 'react-router-dom';

export  const LoginPage = () => {

  const { user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    setUser({
      id: 313,
      name: 'Juli Lara',
      email: 'julietalarar98@gmail.com'
    })

    const lastpath = localStorage.getItem('lastpath') || '/'; 
    navigate(lastpath, {
      replace:true
    })
  }

  

  return (
    <>
    <div>Login Page</div>
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>
    <button
      className='btn btn-primary'
      onClick={ () => onLogin() }
    >
      Login
    </button>
    </>
  )
}
