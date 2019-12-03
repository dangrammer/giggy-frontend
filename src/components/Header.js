import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../actions/currentUserActions'

const Header = ({history}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUserReducer.currentUser)
  
  const handleClick = () => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
    history.push('/')
  }
 
  return (
    <div id='header'>
      <h1 id='site-title'>Giggy</h1>
      <span>
        {`Welcome, ${currentUser.attributes.first_name}! `}
        <button id='log-out-btn' onClick={handleClick}>Log Out</button>
      </span>
    </div>
  )
}

export default Header
