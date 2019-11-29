import React from 'react'
import {useSelector} from 'react-redux'

const MyProfile = ({history}) => {
  const profile = useSelector(state => state.profileReducer.profileShow)
  const {username, full_name, image_url, location, principal_role, principal_instrument,
    bio, credits, website_url, member_since} = profile.attributes
  const listingsCount = profile.attributes.listings_posted
  const applicationsCount = profile.attributes.listings_applied_to

  const navBack = () => {
    history.goBack() 
  }

  const editProfile = () => {
    console.log('EDIT')
  }

  const deleteConfirm = () => {
    history.push('/dashboard/myProfile/deleteAccount')
  }

  return (
    <div>
      <img src={image_url} alt='Profile' height='400' width='600'/><br/>
      {full_name} {`@${username}`}<br/>
      {location}<br/>
      {`Principal Role: ${principal_role}`}<br/>
      {`Principal Instrument: ${principal_instrument}`}<br/>
      <a href={website_url}>Website</a><br/>
      {member_since}<br/>
      {`Bio: ${bio}`}<br/>
      {`Credits: ${credits}`}<br/>
      {listingsCount.length} Listings Posted<br/>
      {applicationsCount.length} Listings Applied To<br/>
      <br/>
      <button onClick={navBack}>Back</button>
      <br/>
      <button onClick={editProfile}>Edit Profile</button>
      <br/>
      <button onClick={deleteConfirm}>Delete Account</button>
    </div>
  )
}

export default MyProfile