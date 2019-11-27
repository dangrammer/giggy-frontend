import React, {useState} from 'react'
import {validateUser} from '../actions/currentUserActions'
import {createUser} from '../actions/currentUserActions'
import {useDispatch} from 'react-redux'

const Login = ({history}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [login, setLogin] = useState(true)
  const dispatch = useDispatch()
  console.log(history)
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={userName}
          placeholder='Username'
          onChange={event => setUserName(event.target.value)}
          required
        />
        <br/>
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
          required
        />
        {login ? null :
          <>
            <br/>
            <input
              type='text'
              value={firstName}
              placeholder='First Name'
              onChange={event => setFirstName(event.target.value)}
              required
            />
            <br/>
            <input
              type='text'
              value={lastName}
              placeholder='Last Name'
              onChange={event => setLastName(event.target.value)}
              required
            />
            <br/>
            <input
              type='text'
              value={imageUrl}
              placeholder='Image URL'
              onChange={event => setImageUrl(event.target.value)}
              required
            />
            <br/>
            <input
              type='text'
              value={city}
              placeholder='City'
              onChange={event => setCity(event.target.value)}
              required
            />
            <br/>
            <input
              type='text'
              value={state}
              placeholder='State'
              onChange={event => setState(event.target.value)}
              required
            />
            <br/>
            <input
              type='text'
              value={zipCode}
              placeholder='Zip Code'
              onChange={event => setZipCode(event.target.value)}
              required
            />
          </>
        }
        <br/>
        <input type='submit' value={login ? 'Log In' : 'Create Account'}/>
      </form>
      <br/>
      <span>
        {login ? 'Need to create an account?' : 'Already have an account?'}
        <button onClick={handleClick}>{login ? 'Sign Up' : 'Log In'}</button>
      </span>
    </div>
  )
}

export default Login
