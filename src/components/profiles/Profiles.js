import React from 'react'
import {useSelector} from 'react-redux'
import Profile from './Profile'

const Profiles = ({history}) => {
  const profiles = useSelector(state => state.profileReducer.profiles)

  return (
    <div id='profiles'>
      {profiles.map(profile => 
        <Profile key={profile.id} profile={profile} history={history}/>
      )}
    </div> 
  )
}

export default Profiles
