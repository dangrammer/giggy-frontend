import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateUser} from '../../actions/currentUserActions'

const EditProfile = ({history}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUserReducer.currentUser)
  const currentUserId = currentUser.id
  const {first_name, last_name, username, image_url, 
    city, state, zip_code, principal_role, principal_instrument,
    website_url, bio, credits} = currentUser.attributes
  
  const [firstName, setFirstName] = useState(first_name)
  const [lastName, setLastName] = useState(last_name)
  const [userName, setUserName] = useState(username)
  // const [password, setPassword] = useState('') ? How to access password ?
  const [imageUrl, setImageUrl] = useState(image_url)
  const [cityVar, setCityVar] = useState(city)
  const [stateVar, setStateVar] = useState(state)
  const [zipCode, setZipCode] = useState(zip_code)
  const [principalRole, setPrincipalRole] = useState(principal_role)
  const [principalInstrument, setPrincipalInstrument] = useState(principal_instrument)
  const [websiteUrl, setWebsiteUrl] = useState(website_url)
  const [bioVar, setBioVar] = useState(bio)
  const [creditsVar, setCreditsVar] = useState(credits)

  const handleSubmit = (event) => {
    event.preventDefault()

    const profileUpdate = {firstName, lastName, userName, imageUrl,
      cityVar, stateVar, zipCode, principalRole, principalInstrument,
      websiteUrl, bioVar, creditsVar}

    dispatch(updateUser(profileUpdate, currentUserId, history))
  }

  //review image display based on state
  return (
    <div className='profile-show'>
      <img src={imageUrl ? imageUrl : image_url} alt='Profile' height='400' width='600'/>
      <br/>
      <form id='profile-form' onSubmit={handleSubmit}>
        <label htmlFor='imageUrl'>Image URL</label>
        <input
          className='form-input'
          type='text'
          name='imageUrl'
          value={imageUrl}
          placeholder='Image URL'
          onChange={event => setImageUrl(event.target.value)}
        />
        <br/>
        <br/>
        <label htmlFor='firstName'>First Name</label>
        <input
          className='form-input'
          type='text'
          name='firstName'
          value={firstName}
          placeholder='First Name'
          onChange={event => setFirstName(event.target.value)}
        />
        <br/>
        <label htmlFor='lastName'>Last Name</label>
        <input
          className='form-input'
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={event => setLastName(event.target.value)}
        />
        <br/>
        <label htmlFor='username'>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          value={userName}
          placeholder='Username'
          onChange={event => setUserName(event.target.value)}
        />
        <br/>
        {/* <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        <br/> */}
        <label htmlFor='city'>City</label>
        <input
          className='form-input'
          type='text'
          name='city'
          value={cityVar}
          placeholder='City'
          onChange={event => setCityVar(event.target.value)}
        />
        <br/>
        <label htmlFor='state'>State</label>
        <input
          className='form-input'
          type='text'
          name='state'
          value={stateVar}
          placeholder='State'
          onChange={event => setStateVar(event.target.value)}
        />
        <br/>
        <label htmlFor='zipCode'>Zip Code</label>
        <input
          className='form-input'
          type='text'
          name='zipCode'
          value={zipCode}
          placeholder='Zip Code'
          onChange={event => setZipCode(event.target.value)}
        />
        <br/>
        <label htmlFor='principalRole'>Principal Role</label>
        <input
          className='form-input'
          type='text'
          name='principalRole'
          value={principalRole ? principalRole : ''}
          placeholder='Principal Role'
          onChange={event => setPrincipalRole(event.target.value)}
        />
        <br/>
        <label htmlFor='principalInstrument'>Principal Instrument: </label>
        <input
          className='form-input'
          type='text'
          name='principalInstrument'
          value={principalInstrument ? principalInstrument : ''}
          placeholder='Principle Instrument'
          onChange={event => setPrincipalInstrument(event.target.value)}
        />
        <br/>
        <label htmlFor='websiteUrl'>Website URL</label>
        <input
          className='form-input'
          type='text'
          name='websiteUrl'
          value={websiteUrl ? websiteUrl : ''}
          placeholder='Website URL'
          onChange={event => setWebsiteUrl(event.target.value)}
        />
        <br/>
        <label htmlFor='bio'>Bio</label>
        <textarea
          className='form-text-area'
          name='bio'
          value={bioVar ? bioVar : ''}
          placeholder='Bio'
          onChange={event => setBioVar(event.target.value)}
        />
        <br/>
        <label htmlFor='credits'>Credits</label>
        <input
          className='form-input'
          type='text'
          name='credits'
          value={creditsVar ? creditsVar : ''}
          placeholder='Credits'
          onChange={event => setCreditsVar(event.target.value)}
        />
        <br/>
        <br/>
        <input 
          className='form-input form-submit btn'
          type='submit' 
          value='Save Edits'/>
      </form>
    </div>
  )
}

export default EditProfile
