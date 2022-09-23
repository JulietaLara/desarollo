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
    </>
  )
}
