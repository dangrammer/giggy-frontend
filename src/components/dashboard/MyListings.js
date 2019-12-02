import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Listing from '../listings/Listing'

const MyListings = ({history}) => {
  const currentUser = useSelector(state => state.currentUserReducer.currentUser)
  const listings = useSelector(state => state.listingReducer.listings)
  const appliedIds = currentUser.attributes.listings_applied_to.map(listing => listing.id)
  const listingsPosted = listings.filter(listing => listing.attributes.user_id === parseInt(currentUser.id, 10))
  const listingsAppliedTo = listings.filter(listing => appliedIds.includes(parseInt(listing.id, 10)))
  const [posted, setPosted] = useState(true)
  const setListings = posted ? listingsPosted : listingsAppliedTo

  const handleClick = () => {
    setPosted(!posted)
  }
  
  return (
    <div>
      <h1>My Listings</h1>
      <button onClick={handleClick}>{posted ? 'Show Listings Applied To' : 'Show Listings Posted'}</button>
      <h4>{posted ? 'Listings Posted' : 'Listings Applied To'}</h4>
      {setListings.map(listing => 
        <Listing key={listing.id} listing={listing} history={history}/>
      )}
    </div>
  )
}

export default MyListings