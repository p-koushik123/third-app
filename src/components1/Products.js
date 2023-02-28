import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import {useAuth} from './auth';
export default function Products() {
  const navLinkStyles = ({isActive}) => {
    return{
        textDecoration : isActive ? 'none' : 'underline',
        fontWeight: isActive ? 'bold' : '100'
    }
  }
  return (
    
    <>
    <div>
      <h1>This is Products Page</h1>
    </div>
    <nav>
        <NavLink style={navLinkStyles} to="featured">Featured</NavLink>
        <NavLink style={navLinkStyles} to="new">New</NavLink>
    </nav>
    <Outlet />
    </>
  )
}
