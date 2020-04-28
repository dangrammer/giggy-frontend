import React, {useState} from 'react'
import {validateUser} from '../actions/currentUserActions'
import {createUser} from '../actions/currentUserActions'
import {useDispatch, useSelector} from 'react-redux'

const Login = ({history}) => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [login, setLogin] = useState(true)
  const errors = useSelector(state => state.currentUserReducer.errors)
  
  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setUserName('')
    setPassword('')
    setImageUrl('')
    setCity('')
    setState('')
    setZipCode('')
  }

  const handleClick = () => {
    setLogin(!login)
    dispatch({type: 'CLEAR_USER_ERRORS'})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let user

    if (login) {
      user = {userName, password} 
      dispatch(validateUser(user, history))
    } else {
      user = {firstName, lastName, userName, 
        password, imageUrl, city, state, zipCode}
      dispatch(createUser(user, history))
    }  
    clearForm()
  }

  return (
    <div id='login'>
      <ul id='login-errors'>
        {errors ? errors.map(error => <li key={error}>{error}</li>) : null}
      </ul>
      <form id='login-form' onSubmit={handleSubmit}>
        <input
          className='login-input'
          type='text'
          value={userName}
          placeholder='Username'
          onChange={event => setUserName(event.target.value)}
        />
        <input
          className='login-input'
          type='password'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        {login ? null :
          <>
            <input
              className='login-input'
              type='text'
              value={firstName}
              placeholder='First Name'
              onChange={event => setFirstName(event.target.value)}
             
            />
            <input
              className='login-input'
              type='text'
              value={lastName}
              placeholder='Last Name'
              onChange={event => setLastName(event.target.value)}
             
            />
            <input
              className='login-input'
              type='text'
              value={imageUrl}
              placeholder='Image URL'
              onChange={event => setImageUrl(event.target.value)}
             
            />
            <input
              className='login-input'
              type='text'
              value={city}
              placeholder='City'
              onChange={event => setCity(event.target.value)}
             
            />
            <input
              className='login-input'
              type='text'
              value={state}
              placeholder='State'
              onChange={event => setState(event.target.value)}
             
            />
            <input
              className='login-input'
              type='text'
              value={zipCode}
              placeholder='Zip Code'
              onChange={event => setZipCode(event.target.value)}
             
            />
          </>
        }
        <br/>
        <input id='login-submit' type='submit' value={login ? 'Log In' : 'Create Account'}/>
      </form>
      <br/>
      <br/>
      <span id='login-toggle'>{login ? 'Need to create an account? ' : 'Already have an account? '}</span>
      <br/>
      <button id='login-toggle-btn' onClick={handleClick}>{login ? 'Sign Up' : 'Log In'}</button>
    </div>
  )
}

export default Login
