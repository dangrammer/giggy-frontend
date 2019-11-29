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
    <div onClick={handleClick}>
      {`${posting_date} — ${subject}`}
      {` — ${paying ? '💲' : '—'} — `}
      {city !== null && state !== null ?
        `${city}, ${state}` :
          null
      }
      {` — posted by: ${poster.username}`}
    </div>
  )
}

export default Listing
