import React from 'react'
import {useDispatch} from 'react-redux'
import {profileShow} from '../../actions/profileActions'

const Profile = (props) => {
  const dispatch = useDispatch()
  const {username, principal_role, principal_instrument, location} = props.profile.attributes
  
  const handleClick = () => {
    dispatch(profileShow(props.profile.id, props.history)) 
  }

  return (
    <div id='profile' onClick={handleClick}>
      <span className='center-left'>@{username}</span>
      <span className='center-center'>{principal_role ? principal_role : null}</span>
      <span className='center-center'>{principal_instrument ? principal_instrument : null}</span> 
      <span className='center-left'>{location}</span>
    </div>
  )
}

export default Profile
