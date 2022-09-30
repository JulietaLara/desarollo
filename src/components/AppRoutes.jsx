import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { PrivateRoutes } from './PrivateRoutes'
import { UserRoutes } from './UserRoutes'


export default function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path="login" element={ <LoginPage/> } />
        <Route path="/*" element={ 
            <PrivateRoutes>
                <UserRoutes/>
            </PrivateRoutes>
        } />

    </Routes>
    </>
  )
}
