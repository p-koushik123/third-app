import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './auth';
export default function Navbar() {
  const auth = useAuth();
  // const navLinkStyles = ({isActive}) => {
  //   return{
  //       textDecoration : isActive ? 'none' : 'underline',
  //       fontWeight: isActive ? 'bold' : '100'
  //   }
  // }
  return (
    <nav className='primary-nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/profileu">Profile</NavLink>
        {
          !auth.user &&(
        <NavLink to="/login">Login</NavLink>
        )
         }
    </nav>
  )
}
// const auth = useAuth();
  
//   const NavLinkStyles = ({isActive}) => {
//     return{
//         fontWeight : isActive ? 'bold' : 'normal',
//         textDecoration : isActive ? 'none' : 'underline'
//     }
//   }
//   return (
//     <nav className='primary-nav'>
//         <NavLink style={NavLinkStyles} to="/">Home</NavLink>
//         <NavLink style={NavLinkStyles} to="/contact">Contact</NavLink>
//         <NavLink style={NavLinkStyles} to="/products">Products</NavLink>
//         <NavLink style={NavLinkStyles} to="/profile">Profile</NavLink>
//         {
//           !auth.user && (
//             <NavLink style={NavLinkStyles} to="/login">Login</NavLink>
//           )
//         }
//     </nav>
//   )