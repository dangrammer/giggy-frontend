import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../actions/currentUserActions'

const Header = ({history}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  
  const handleClick = () => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
    history.push('/')
  }
 
  return (
    <div>
      <h2>Giggy</h2>
      <span>
        {`Welcome, ${currentUser.attributes.first_name}!`}
        <button onClick={handleClick}>Log Out</button>
      </span>
    </div>
  )
}

export default Header
