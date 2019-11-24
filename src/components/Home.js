import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../actions/currentUserActions'

const Home = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)

  console.log(useSelector(state => state))
  console.log(currentUser)

  
  const handleClick = () => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }

  return (
    <div>
      Home
      <br/>
      {`Welcome, ${currentUser.attributes && currentUser.attributes.first_name}`}
      <br/> 
      {currentUser.id ?
        <button onClick={handleClick}>Log Out</button> :
          null
      }
    </div> 
  )
}

export default Home
