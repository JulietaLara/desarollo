import React from 'react'
import {Link, Navigate, Route, Routes, NavLink } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { ProductsPage } from './ProductsPage'
import { SearchPage } from './SearchPage'

export  const UserRoutes = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="navbar navbar-expand-lg bg-light">
            <div class="navbar-nav" > 
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="/"> Index </NavLink> 
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="about"> About </NavLink>              
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="products"> Products </NavLink>
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="search"> Search </NavLink>
                <NavLink className={ (args) => `nav-link ${ args.isActive? 'active' : '' } ` } to="login"> Login </NavLink>
                

            </div>
        </div>
    </nav>
    <Routes>
        <Route path="products" element={ <ProductsPage/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="search" element={ <SearchPage/> } />
     </Routes>
    </>
  )
}
