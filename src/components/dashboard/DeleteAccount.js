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
    <div className='delete-set'>
      <span className='delete delete-account-heading'>Thanks for using Giggy!</span>
      <h4 className='delete'>If you're sure you want to delete your account...</h4>
      <button className='delete btn' onClick={deleteAccount}>CONFIRM DELETION</button>
      <h2 className='delete'>Otherwise...</h2>
      <button className='delete btn' onClick={navBack}>Back</button>
    </div>
  )
}

export default DeleteAccount