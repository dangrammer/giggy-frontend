import React from 'react'
import {useSelector} from 'react-redux'
import Listing from './Listing'

const Listings = ({history}) => {
  const listings = useSelector(state => state.listingReducer.listings)

  return (
    <div>
      <h1>Listings</h1>
      {listings.map(listing => 
        <Listing key={listing.id} listing={listing} history={history}/>
      )}
    </div> 
  )
}

export default Listings
