import React, {useContext} from 'react'
import { UserContext } from './CreateContext'

export  const HomePage = () => {

  const { user } = useContext( UserContext )

  return (
    <>
    <div>Home Page <small> { user?.name} </small></div>
    <pre>
      {
        JSON.stringify( user, null, 3)
      }
    </pre>
    </>
  )
}
