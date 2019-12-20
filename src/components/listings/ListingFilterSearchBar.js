import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterListings} from '../../actions/listingActions'
import {searchListings} from '../../actions/listingActions'

const ListingFilterSearchBar = () => {
  const categories = useSelector(state => state.categoryReducer.categories)
  const filter = useSelector(state => state.listingReducer.filter)
  const searchTerm = useSelector(state => state.listingReducer.searchTerm)
  const dispatch = useDispatch()

  const changeFilter = (event) => {
    dispatch(filterListings(event.target.value))
  }

  const changeSearchTerm = (event) => {
    dispatch(searchListings(event.target.value))
  }

  return (
    <div className='listing-filter-search'>
      <div>
        <label htmlFor='filter'>Filter by Category: </label>
        <select name='filter' defaultValue={filter} onChange={(event) => changeFilter(event)}>
          <option value='all'>All</option>
          {categories.map(category => 
            <option key={category.id} value={category.id}>{category.attributes.name}</option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor='search'>Search by Keyword: </label>
        <input 
          type='text' 
          name='search' 
          value={searchTerm} 
          onChange={(event) => changeSearchTerm(event)}
        />
      </div>
    </div>
  )
}

export default ListingFilterSearchBar