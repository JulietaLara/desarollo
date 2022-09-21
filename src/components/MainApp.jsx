import React from 'react'
import {Link, Navigate, Route, Routes, NavLink } from 'react-router-dom'
import {AboutPage} from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavComponent } from './NavComponent'
import { NotFoundPAge} from './NotFoundPage'

export  const MainApp = () => {
  return (
    <>
        <h1>Main App</h1>
        <hr/>

        {/* <Link to="/"> Home </Link>
        <Link to="about"> About </Link>
        <Link to="login"> Login </Link> */}
        {/* <NavLink className={ (args) => ` ${ args.isActive? 'active' : '' } ` } to="/"> Home </NavLink>
        <NavLink className={ (args) => ` ${ args.isActive? 'active' : '' } ` } to="about"> About </NavLink>
        <NavLink className={ (args) => ` ${ args.isActive? 'active' : '' } ` } to="login"> Login </NavLink> 
        
        <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/*" element={ <Navigate to="/about"/>} />
        {/* <Route path="/*" element={ <NotFoundPage/> } />  Para redirigirlo al error 404 
        </Routes> */}
        <NavComponent/>
    </>
  )
}
