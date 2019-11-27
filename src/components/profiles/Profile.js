import React from 'react'
import {useDispatch} from 'react-redux'
import {profileShow} from '../../actions/profilesActions'

const Profile = (props) => {
  const dispatch = useDispatch()
  const {username, principal_role, principal_instrument, location} = props.profile.attributes
  
  const handleClick = () => {
    dispatch(profileShow(props.profile.id, props.history)) 
  }

  return (
    <div onClick={handleClick}>
      {username}
      {` — ${principal_role} / ${principal_instrument} — `}
      {location}
    </div>
  )
}

export default Profile