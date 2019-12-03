import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  const style = {textShadow: '3px 3px 3px #ae8bc9', textDecoration: 'none'}

  return (
    <div id='nav-bar'>
      <NavLink className='nav-link' activeStyle={style} to='/listings'>Listings</NavLink>
      <NavLink className='nav-link' activeStyle={style} to='/profiles'>Profiles</NavLink>
      <NavLink className='nav-link' activeStyle={style} to='/dashboard'>Dashboard</NavLink>
    </div>
  )
}

export default NavBar
