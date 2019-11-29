import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <Link to='/listings'>Listings</Link>
      <Link to='/profiles'>Profiles</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default NavBar
