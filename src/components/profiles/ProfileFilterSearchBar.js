import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {searchProfiles} from '../../actions/profileActions'
import {filterProfiles} from '../../actions/profileActions'

const ProfilefilterSearchBar = () => {
  const filter = useSelector(state => state.profileReducer.filter)
  const searchTerm = useSelector(state => state.profileReducer.searchTerm)
  const dispatch = useDispatch()

  const changeFilter = (event) => {
    dispatch(filterProfiles(event.target.value))
  }

  const changeSearchTerm = (event) => {
    dispatch(searchProfiles(event.target.value))
  }

  return (
    <div className='filter-search'>
      <div>
        <span>Filter/Search by </span> 
        <select name='filter' defaultValue={filter} onChange={(event) => changeFilter(event)}>
          <option value='username'>Username</option>
          <option value='full_name'>Name</option>
          <option value='location'>Location</option>
          <option value='principal_role'>Role</option>
          <option value='principal_instrument'>Instrument</option>
        </select>
        <span>: </span>
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

export default ProfilefilterSearchBar