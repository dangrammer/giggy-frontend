import React from 'react'
import {useSelector} from 'react-redux'
import Profile from './Profile'
import ProfileFilterSearchBar from './ProfileFilterSearchBar'

const Profiles = ({history}) => {
  const profiles = useSelector(state => state.profileReducer.profiles)
  const filter = useSelector(state => state.profileReducer.filter)
  const searchTerm = useSelector(state => state.profileReducer.searchTerm)
  
  const searched = searchTerm ? 
    profiles.filter(profile => 
      profile.attributes[filter].toLowerCase().includes(searchTerm.toLowerCase()) 
    ) : 
      profiles

  return (
    <>
      <ProfileFilterSearchBar/>
      <div id='profiles'>
        {searched.length > 0 ?
          <>
            {searched.map(profile => 
              <Profile key={profile.id} profile={profile} history={history}/>
            )}
          </> :
            <span className='no-items'>* No Profiles</span>
        }
      </div> 
    </>
    
  )
}

export default Profiles
