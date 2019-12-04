import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Listing from './Listing'
import {filterListings} from '../../actions/listingActions'

const Listings = ({history}) => {
  const dispatch = useDispatch()
  const listings = useSelector(state => state.listingReducer.listings)
  const categories = useSelector(state => state.categoryReducer.categories)
  const filter = useSelector(state => state.listingReducer.filter)
  const [searchTerm, setSearchTerm] = useState('')
  
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

  const handleChange = (event) => {
    dispatch(filterListings(event.target.value))
  }
  
  return (
    <div id='listings'>
      <label className='search-filter' htmlFor='filter'>Category: </label>
      <select name='filter' defaultValue={filter} onChange={(event) => handleChange(event)}>
        <option value='all'>All</option>
        {categories.map(category => 
          <option key={category.id} value={category.id}>{category.attributes.name}</option>
        )}
      </select>
      <label className='search-filter' htmlFor='search'> Keyword: </label>
      <input 
        type='text' 
        name='search' 
        value={searchTerm} 
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <br/>
      <br/>
      {searched.length > 0 ?
        <>
          {searched.map(listing => 
            <Listing key={listing.id} listing={listing} history={history}/>
          )}
        </> :
          <p>No Listings</p>
      }
    </div> 
  )
}

export default Listings
