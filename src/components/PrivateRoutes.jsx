import React, { useContext} from 'react'
import { UserContext } from './CreateContext'

export  const  PrivateRoutes = ({children}) => {

   const {logged} = useContext(UserContext)
   return logged ? children : <>Error 403</>
}
