import React from 'react'
import {useSelector} from 'react-redux'

const ProfileShow = ({history}) => {
  const profile = useSelector(state => state.profileReducer.profileShow)
  const currentUser = useSelector(state => state.currentUserReducer.currentUser)
  const {username, full_name, image_url, location, principal_role, principal_instrument,
    bio, credits, website_url, member_since} = profile.attributes
  const listingsCount = profile.attributes.listings_posted
  const applicationsCount = profile.attributes.listings_applied_to

  const navBack = () => {
    history.goBack() 
  }

  const editProfile = () => {
    history.push('/dashboard/profile/edit')
  }

  const deleteConfirm = () => {
    history.push('/dashboard/profile/delete')
  }

  return (
    <div className='profile-show'>
      <img src={image_url} alt='Profile' height='400' width='600'/><br/>
      <span id='profile-info'>
        {full_name} {`@${username}`}<br/>
        {location}<br/>
        {member_since}<br/>
        <br/>
        {principal_role ? `Principal Role: ${principal_role}` : null}<br/>
        {principal_instrument ? `Principal Instrument: ${principal_instrument}` : null}<br/>
        {website_url ? <a className='profile-link' href={website_url} target='_blank' rel='noopener noreferrer'>Website</a> : null}<br/>
        <br/>
        {bio ? `Bio: ${bio}` : null}<br/>
        {credits ? `Credits: ${credits}` : null}<br/>
        <br/>
        {currentUser.id === profile.id ?
          <>
            {listingsCount.length} {listingsCount.length === 1 ? 'Listing' : 'Listings'} Posted<br/>
            {applicationsCount.length} {applicationsCount.length === 1 ? 'Listing' : 'Listings'} Applied To<br/>
            <br/>
            <button className='btn' onClick={editProfile}>Edit Profile</button>
            <br/>
            <br/>
            <button className='btn' onClick={deleteConfirm}>Delete Account</button>
            <br/>
          </> :
            null
        }
        <br/>
        <button className='btn' onClick={navBack}>Back</button>
      </span>
    </div>
  )
}

export default ProfileShow