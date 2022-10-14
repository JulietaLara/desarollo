import React from 'react'
import {Link, Navigate, Route, Routes, NavLink } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { ProductsPage } from './ProductsPage'
import { SearchPage } from './SearchPage'
import { Registro } from './Registro'
import { UserAuth } from '../context/AuthContextG'
import { UserAuthG } from '../context/AuthContextG'
import { async } from '@firebase/util'
import { Upload } from './Upload'

export  const UserRoutes = () => {
  const {user, logOut} = UserAuthG()
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="navbar navbar-expand-lg bg-light">
            <div className="navbar-nav" > 
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="/"> Index </NavLink> 
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="about"> About </NavLink>              
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="products"> Products </NavLink>
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="search"> Search </NavLink>
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="Upload"> Upload </NavLink>
                
                
                {user?.displayName ? <button onClick={handleSignOut}>Cerrar sesión</button> : 
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="login"> Login </NavLink> 
                
                }
                {user?.displayName? <></> : 
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="Registro"> Registrarse </NavLink>}
                

            </div>
        </div>
    </nav>
    <Routes>
        <Route path="products" element={ <ProductsPage/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="search" element={ <SearchPage/> } />
        <Route path="Upload" element={ <Upload/> } />
     </Routes>
    </>
  )
}
