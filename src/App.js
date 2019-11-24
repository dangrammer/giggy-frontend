import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadProfile} from './actions/currentUserActions'

import {Route, Switch, Redirect} from 'react-router'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(loadProfile()))

  return (
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/login' component={Login}/>
      {localStorage.token ?
        <Route exact path='/home' component={Home}/> :
          <Redirect to='/'/>
      }
    </Switch>
  )
}

export default App
