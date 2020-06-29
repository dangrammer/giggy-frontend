import React from 'react'
import {NavLink} from 'react-router-dom'

const DashboardNavBar = () => {
  const style = {textShadow: '3px 3px 3px #d4e6be', textDecoration: 'none'}
  
  return (
    <div id='dash-nav-bar'>
      <NavLink 
        className='dash-nav-link' 
        activeStyle={style} 
        exact to='/dashboard/listings'
      >
        My Listings
      </NavLink> 
      <NavLink 
        className='dash-nav-link'
        activeStyle={style} 
        exact to='/dashboard/listings/new'
      >
        New Listing
      </NavLink>
      <NavLink 
        className='dash-nav-link'
        activeStyle={style} 
        exact to='/dashboard/conversations'
      >
        Conversations
      </NavLink>
      <NavLink 
        className='dash-nav-link' 
        activeStyle={style} 
        exact to='/dashboard/profile'
      >
        My Profile
      </NavLink>
    </div>
  )
}

export default DashboardNavBar
