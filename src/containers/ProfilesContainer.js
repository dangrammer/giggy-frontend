import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {fetchProfiles} from '../actions/profileActions'
import Profiles from '../components/profiles/Profiles'
import ProfileShow from '../components/profiles/ProfileShow'

const ProfilesContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchProfiles()), [dispatch])

  return (
    <Switch>
      <Route exact path='/profiles' component={Profiles}/>
      <Route exact path='/profiles/:id' component={ProfileShow}/>
    </Switch>
  )
}

export default ProfilesContainer
