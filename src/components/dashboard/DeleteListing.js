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
    <>
      <h1>Delete Listing</h1>
      <h4>If you're sure you want to delete this listing...</h4>
      <button onClick={handleClick}>CONFIRM DELETION</button>
      <h2>Otherwise...</h2>
      <button onClick={navBack}>Back</button>
    </>
  )
}

export default DeleteListing