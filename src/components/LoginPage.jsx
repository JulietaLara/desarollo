import React, { useContext, useEffect } from 'react'
import { UserContext } from './CreateContext'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import {  UserAuthG } from '../context/AuthContextG';
import { UserAuth2 } from '../context/AuthContextC';
import { async } from '@firebase/util';

export  const LoginPage = () => {

  // const { user, setUser} = useContext(UserContext);
  // const navigate = useNavigate();

  // const onLogin = () => {
  //   setUser({
  //     id: 313,
  //     name: 'Juli Lara',
  //     email: 'julietalarar98@gmail.com'
  //   })

  //   const lastpath = localStorage.getItem('lastpath') || '/'; 
  //   navigate(lastpath, {
  //     replace:true
  //   })
  // }

  const {googleSignIn, user} = UserAuthG()
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn() 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user != null) {
      navigate('about')
    }
  },[user])

  return (
    <>
    {/* <div>Login Page</div>
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>
    <button
      className='btn btn-primary'
      onClick={ () => onLogin() }
    >
      Login
    </button> */}
    <div>
       <h1>Inicie sesión</h1>
       <form>
        <div>
            <label>Correo electrónico:</label>
            <br />
            <input type="email"  />
        </div>
        <div>
            <label>Contraseña:</label>
            <br />
            <input type="password"  />
        </div>
        <br />
        <button>Iniciar sesión</button>
        <br />
        <GoogleButton 
         onClick={handleGoogleSignIn}
        />
    </form>
       <p>
        ¿No tiene cuenta, terrícola? <Link to='/Registro' className='underline'> regístrese</Link>
       </p>
    </div>
    </>
  )
}
