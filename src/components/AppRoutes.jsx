import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { PrivateRoutes } from './PrivateRoutes'
import { Registro } from './Registro'
import { UserRoutes } from './UserRoutes'
import { AuthContextProvider } from '../context/AuthContextG'
import { AuthContextProvider2 } from '../context/AuthContextC'

export default function AppRoutes() {
  return (
    <>
    <AuthContextProvider2>
    <AuthContextProvider>
      
        <Routes>
            <Route path="login" element={ <LoginPage/> } />
            <Route path="Registro" element={ <Registro/> } />
            <Route path="/*" element={ 
                //<PrivateRoutes>
                    <UserRoutes/>
              // </PrivateRoutes>
            } />

        </Routes>
      
    </AuthContextProvider>
    </AuthContextProvider2>
    </>
  )
}
