import React from 'react'
import {useSelector} from 'react-redux'

const ProfileShow = ({history}) => {
  const profile = useSelector(state => state.profilesReducer.profileShow)
  const {username, full_name, image_url, location, principal_role, principal_instrument,
    bio, credits, website_url, member_since} = profile.attributes

  const navBack = () => {
    history.goBack() 
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
      <br/>
      <button onClick={navBack}>Back</button>
    </div>
  )
}

export default ProfileShow