import React from 'react'
import {Link, Navigate, Route, Routes, NavLink } from 'react-router-dom'
import {AboutPage} from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NotFoundPAge} from './NotFoundPage'

export  const NavComponent = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="navbar navbar-expand-lg bg-light">
            <div class="navbar-nav" >                
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="home"> Home </NavLink>
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="about"> About </NavLink>
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="login"> Login </NavLink>
            </div>
        </div>
        </nav>

        <Routes>
        <Route path="/home" element={ <HomePage/> } />
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/*" element={ <Navigate to="/about"/>} />
        {/* <Route path="/*" element={ <NotFoundPage/> } />  Para redirigirlo al error 404 */}
        </Routes>

    </>
  )
}
