import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteListing} from '../../actions/listingActions'

const DeleteListing = ({history}) => {
  const dispatch = useDispatch()
  const listingShow = useSelector(state => state.listingReducer.listingShow)
  
  const handleClick = () => {
    dispatch(deleteListing(listingShow.id, history))
  }

  const navBack = () => {
    history.goBack() 
  }
  
  return (
    <div className='delete-set'>
      <h1 className='delete delete-heading'>Delete Listing</h1>
      <h4 className='delete'>If you're sure you want to delete this listing...</h4>
      <button className='delete btn' onClick={handleClick}>CONFIRM DELETION</button>
      <h2 className='delete'>Otherwise...</h2>
      <button className='delete btn' onClick={navBack}>Back</button>
    </div>
  )
}

export default DeleteListing