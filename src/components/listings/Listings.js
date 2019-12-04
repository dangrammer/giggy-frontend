import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Listing from './Listing'
import {filterListings} from '../../actions/listingActions'

const Listings = ({history}) => {
  const dispatch = useDispatch()
  const listings = useSelector(state => state.listingReducer.listings)
  const categories = useSelector(state => state.categoryReducer.categories)
  const filter = useSelector(state => state.listingReducer.filter)
  
  const filteredListings = (filter) => {
    if (filter === 'all') {
      return listings
    } else {
      return listings.filter(listing => listing.attributes.category_id === parseInt(filter, 10))
    }
  }

  const handleChange = (event) => {
    dispatch(filterListings(event.target.value))
  }

  return (
    <div id='listings'>
      <select defaultValue={filter} onChange={(event) => handleChange(event)}>
        <option value='all'>All</option>
        {categories.map(category => 
          <option key={category.id} value={category.id}>{category.attributes.name}</option>
        )}
      </select>
      <br/>
      <br/>
      {filteredListings(filter).length > 0 ?
        <>
          {filteredListings(filter).map(listing => 
            <Listing key={listing.id} listing={listing} history={history}/>
          )}
        </> :
          <p>No Listings</p>
      }
    </div> 
  )
}

export default Listings
