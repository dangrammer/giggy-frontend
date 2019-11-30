import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createListing} from '../../actions/listingActions'

const NewListingForm = ({history}) => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.currentUserReducer.currentUser.id)
  const categories = useSelector(state => state.categoryReducer.categories)
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [paying, setPaying] = useState(false)
  const [categoryId, setCategoryId] = useState('')
  
  const clearForm = () => {
    setSubject('')
    setDescription('')
    setDate('')
    setEndDate('')
    setCity('')
    setState('')
    setZipCode('')
    setPaying(false)
    setCategoryId('')
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const listing = {subject, description, date, endDate, 
      city, state, zipCode, paying, categoryId, userId}
    
    dispatch(createListing(listing, history))
    clearForm()
  }

  return (
    <>
      <h1>New Listing Form</h1>
      <form onSubmit={handleSubmit}>
        <select defaultValue='Choose Category' onChange={event => setCategoryId(event.target.value)} required>
          <option disabled hidden>Choose Category</option>
          {categories.map(category => 
            <option key={category.id} value={category.id}>{category.attributes.name}</option>
          )}
        </select>
        <br/>
        <input
          type='text'
          value={subject}
          placeholder='Subject'
          onChange={event => setSubject(event.target.value)}
          required
        />
        <br/>
        <textarea
          value={description}
          placeholder='Description'
          onChange={event => setDescription(event.target.value)}
          required
        />
        <br/>
        <span>
          <label htmlFor='checkbox'>Paying</label>
          <input
            type='checkbox'
            name='checkbox'
            onChange={event => setPaying(event.target.checked ? true : false)}
          /> 
        </span>
        <br/>
        <input
          type='text'
          value={date}
          placeholder='Date'
          onChange={event => setDate(event.target.value)}
        />
        <br/>
        <input
          type='text'
          value={endDate}
          placeholder='End Date'
          onChange={event => setEndDate(event.target.value)}
        />
        <br/>
        <input
          type='text'
          value={city}
          placeholder='City'
          onChange={event => setCity(event.target.value)}
        />
        <br/>
        <input
          type='text'
          value={state}
          placeholder='State'
          onChange={event => setState(event.target.value)}
        />
        <br/>
        <input
          type='text'
          value={zipCode}
          placeholder='Zip Code'
          onChange={event => setZipCode(event.target.value)}
        />
        <br/>
        <br/>
        <input type='submit' value='Create Listing'/>
      </form>
    </>
  )
}

export default NewListingForm
