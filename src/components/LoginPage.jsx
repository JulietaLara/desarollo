import React, { useContext } from 'react'
import { UserContext } from './CreateContext'

export  const LoginPage = () => {

  const { user, setUser} = useContext(UserContext);

  return (
    <>
    <div>Login Page</div>
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>
    <button
      className='btn btn-primary'
      onClick={
        () => {
          setUser( { id: 313, name: 'Juli Lara', email: 'julietalarar98@gmail.com'})
        }
      }
    >
      Login
    </button>
    </>
  )
}
