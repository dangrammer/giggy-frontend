import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteUser} from '../../actions/currentUserActions'

const DeleteAccount = ({history}) => {
  const dispatch = useDispatch()
  const currentUserId = useSelector(state => state.currentUserReducer.currentUser.id)
  
  const deleteAccount = () => {
    dispatch(deleteUser(currentUserId, history))
  }

  const navBack = () => {
    history.goBack() 
  }
  
  return (
    <>
      <h1>Thanks for using Giggy!</h1>
      <h4>If you're sure you want to delete your account...</h4>
      <button onClick={deleteAccount}>CONFIRM DELETION</button>
      <h2>Otherwise...</h2>
      <button onClick={navBack}>Back</button>
    </>
  )
}

export default DeleteAccount