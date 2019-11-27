import React from 'react'
import ListingsContainer from './ListingsContainer'
import {Switch, Route} from 'react-router-dom' //, Redirect
// import ProfilesContainer from './ProfilesContainer'

const MainContainer = () => {
  
  return (
    <>
      
      <Switch>
        <Route path='/listings' component={ListingsContainer}/>
        {/* <ProfilesContainer/> */}
        {/* <Redirect to='/listings'/> // other switch routes need to be established first */}
      </Switch>
    </>
  )
}

export default MainContainer
