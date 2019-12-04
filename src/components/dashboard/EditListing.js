import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateListing} from '../../actions/listingActions'

const EditListing = ({history}) => {
  const dispatch = useDispatch()
  const listingShow = useSelector(state => state.listingReducer.listingShow)
  const listingId = listingShow.id
  const {subject, description, date, end_date, city, 
    state, zip_code, paying, category_id} = listingShow.attributes
  const categories = useSelector(state => state.categoryReducer.categories)
  const findCategory = categories.find(category => parseInt(category.id, 10) === category_id)
  const categoryName = findCategory.attributes.name

  const [subjectVar, setSubjectVar] = useState(subject)
  const [descriptionVar, setDescriptionVar] = useState(description)
  const [dateVar, setDateVar] = useState(date)
  const [endDate, setEndDate] = useState(end_date)
  const [cityVar, setCityVar] = useState(city)
  const [stateVar, setStateVar] = useState(state)
  const [zipCode, setZipCode] = useState(zip_code)
  const [payingVar, setPayingVar] = useState(paying)
  const [categoryId, setCategoryId] = useState(category_id)

  const handleSubmit = (event) => {
    event.preventDefault()

    const listing = {subjectVar, descriptionVar, dateVar, endDate, 
      cityVar, stateVar, zipCode, payingVar, categoryId}
    
    dispatch(updateListing(listing, listingId, history))
  }

  return (
    <div id='listing-form'>
      <form className='center-center' onSubmit={handleSubmit}>
        <select defaultValue={categoryName} onChange={event => setCategoryId(event.target.value)} required>
          <option disabled hidden>{categoryName}</option>
          {categories.map(category => 
            <option key={category.id} value={category.id}>{category.attributes.name}</option>
          )}
        </select>
        <span>
          <label htmlFor='checkbox'> Paying</label>
          <input
            type='checkbox'
            name='checkbox'
            checked={payingVar}
            onChange={event => setPayingVar(event.target.checked)}
          /> 
        </span>
        <br/>
        <br/>
        <label htmlFor='subject'>Subject</label>
        <br/>
        <input
          className='form-input'
          type='text'
          name='subject'
          value={subjectVar}
          placeholder='Subject'
          onChange={event => setSubjectVar(event.target.value)}
          required
        />
        <br/>
        <label htmlFor='description'>Description</label>
        <br/>
        <textarea
          className='form-text-area'
          name='description'
          value={descriptionVar}
          placeholder='Description'
          onChange={event => setDescriptionVar(event.target.value)}
          required
        />
        <br/>
        <label htmlFor='date'>Date</label>
        <br/>
        <input
          className='form-input'
          type='text'
          value={dateVar ? dateVar : ''}
          placeholder='Date'
          onChange={event => setDateVar(event.target.value)}
        />
        <br/>
        <label htmlFor='endDate'>End Date</label>
        <br/>
        <input
          className='form-input'
          type='text'
          name='endDate'
          value={endDate ? endDate : ''}
          placeholder='End Date'
          onChange={event => setEndDate(event.target.value)}
        />
        <br/>
        <label htmlFor='city'>City</label>
        <br/>
        <input
          className='form-input'
          type='text'
          name='City'
          value={cityVar ? cityVar : ''}
          placeholder='City'
          onChange={event => setCityVar(event.target.value)}
        />
        <br/>
        <label htmlFor='state'>State</label>
        <br/>
        <input
          className='form-input'
          type='text'
          name='state'
          value={stateVar ? stateVar : ''}
          placeholder='State'
          onChange={event => setStateVar(event.target.value)}
        />
        <br/>
        <label htmlFor='zipCode'>Zip Code</label>
        <br/>
        <input
          className='form-input'
          type='text'
          name='zipCode'
          value={zipCode ? zipCode : ''}
          placeholder='Zip Code'
          onChange={event => setZipCode(event.target.value)}
        />
        <br/>
        <br/>
        <input 
          className='form-input form-submit btn'
          type='submit' 
          value='Save Edit'
        />
      </form>
    </div>
  )
}

export default EditListing
