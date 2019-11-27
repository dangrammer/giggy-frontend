import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ListingsContainer from './ListingsContainer'
import ProfilesContainer from './ProfilesContainer'

const MainContainer = () => {
  
  return (
    <>
      <Switch>
        <Route path='/listings' component={ListingsContainer}/>
        <Route path='/profiles' component={ProfilesContainer}/>
        <Redirect to='/listings'/>
      </Switch>
    </>
  )
}

export default MainContainer
