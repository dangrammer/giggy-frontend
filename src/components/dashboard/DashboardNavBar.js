import React from 'react'
import {Link} from 'react-router-dom'

const DashboardNavBar = () => {
  
  return (
    <div>
      <Link to='/dashboard/listings'>My Listings</Link> 
      <Link to='/dashboard/listings/new'>New Listing</Link>
      <Link to='/dashboard/profile'>My Profile</Link>
    </div>
  )
}

export default DashboardNavBar
