import React from 'react'
import {useSelector} from 'react-redux'
import Listing from './Listing'
import ListingFilterSearchBar from './ListingFilterSearchBar'

const Listings = ({history}) => {
  const listings = useSelector(state => state.listingReducer.listings)
  const filter = useSelector(state => state.listingReducer.filter)
  const searchTerm = useSelector(state => state.listingReducer.searchTerm)
  
  const filteredListings = (filter) => {
    if (filter === 'all') {
      return listings
    } else {
      return listings.filter(listing => listing.attributes.category_id === parseInt(filter, 10))
    }
  }

  // needs to be refactored
  const searched = searchTerm ? 
    filteredListings(filter).filter(listing => 
      listing.attributes.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
      listing.attributes.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
      listing.attributes.poster.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.attributes.posting_date.toLowerCase().includes(searchTerm.toLowerCase())
    ) : 
      filteredListings(filter)

  return (
    <>
      <ListingFilterSearchBar/>
      <div id='listings'>
        {searched.length > 0 ?
          <>
            {searched.map(listing => 
              <Listing key={listing.id} listing={listing} history={history}/>
            )}
          </> :
            <span className='no-items'>* No Listings</span>
        }
      </div> 
    </>
  )
}

export default Listings
