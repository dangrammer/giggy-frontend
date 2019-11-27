import React from 'react'
import {useSelector} from 'react-redux'
import Listing from './Listing'

const Listings = ({ history }) => {
  const listings = useSelector(state => state.listingsReducer.listings)

  console.log(listings)

  return (
    <div>
      <h1>Listings</h1>
      {listings.length > 0 ?
        <>
          {listings.map(listing => 
            <Listing key={listing.id} listing={listing} history={history}/>
          )}
        </> : 
          <h4>No listings yet.</h4>
      }
    </div> 
  )
}

export default Listings
