import React from 'react'
import {useDispatch} from 'react-redux'
import {listingShow} from '../../actions/listingActions'

const Listing = (props) => {
  const dispatch = useDispatch()
  const {subject, city, state, paying, poster, posting_date} = props.listing.attributes
  
  const handleClick = () => {
    dispatch(listingShow(props.listing.id, props.history)) 
  }

  return (
    <div className='listing' onClick={handleClick}>
      <span className='center-center'>{posting_date}</span>
      <span className='center-center'>{paying ? '💲' : null}</span>
      <span className='center-left'>{subject}</span>
      <span className='center-left'>{city && state ? `${city}, ${state}` : null}</span>
      <span className='center-left'>{`@${poster.username}`}</span>
    </div>
  )
}

export default Listing
