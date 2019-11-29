import React from 'react'
import {Link} from 'react-router-dom'

const DashboardNavBar = () => {
  //should these be exact paths?
  return (
    <div>
      <Link to='/dashboard/myListings'>My Listings</Link> 
      <Link to='/dashboard/newListing'>New Listing</Link>
      <Link to='/dashboard/myProfile'>My Profile</Link>
    </div>
  )
}

export default DashboardNavBar
