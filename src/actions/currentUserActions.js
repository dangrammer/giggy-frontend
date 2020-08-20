import {API_ROOT, headers} from '../constants'

const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const loadProfile = () => {
  const token = localStorage.token

  return (dispatch) => {
    if (token) {
      fetch(`${API_ROOT}/profile`, {
        method: 'GET',
        headers: headers(token)
      })
      .then(response => response.json())
      .then(data => {
        data.user ?
          dispatch(loginUser(data.user.data)) :
            localStorage.removeItem('token')
      })
    }
  }
}

export const validateUser = (returningUser, history) => {
  const {userName, password} = returningUser

  return (dispatch) => {
    fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        username: userName,
        password,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'USER_ERRORS', errors: data.errors})
        setTimeout(() => dispatch({type: 'CLEAR_USER_ERRORS'}), 3000)
      } else {
        localStorage.setItem('token', data.token)
        dispatch(loginUser(data.user.data))
        history.push('/listings')
      }
    }) 
  }
}

export const createUser = (newUser, history) => {
  const {firstName, lastName, userName, password, 
    imageUrl, city, state, zipCode} = newUser

  return (dispatch) => {
    fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: userName,
        password,
        image_url: imageUrl,
        city,
        state,
        zip_code: zipCode
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'USER_ERRORS', errors: data.errors})
      } else {
        localStorage.setItem('token', data.token)
        dispatch(loginUser(data.user.data))
        history.push('/dashboard/profile/edit')
      }
    })
  }
}

export const updateUser = (profileUpdate, currentUserId, history) => {
  const token = localStorage.token
  const {firstName, lastName, userName, imageUrl, cityVar, 
    stateVar, zipCode, principalRole, principalInstrument,
    websiteUrl, bioVar, creditsVar} = profileUpdate

  return (dispatch) => {
    fetch(`${API_ROOT}/users/${currentUserId}`, {
      method: 'PATCH',
      headers: headers(token),
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: userName,
        image_url: imageUrl,
        city: cityVar,
        state: stateVar,
        zip_code: zipCode,
        principal_role: principalRole,
        principal_instrument: principalInstrument,
        website_url: websiteUrl,
        bio: bioVar,
        credits: creditsVar
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'USER_ERRORS', errors: data.errors})
        setTimeout(() => dispatch({type: 'CLEAR_USER_ERRORS'}), 3000)
      } else {
        dispatch({type: 'UPDATE_USER', user: data.data})
        dispatch({type: 'PROFILE_SHOW', profile: data.data}) //borrowed from profileReducer
        history.goBack()
      }
    })
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch({disconnect: 'disconnect'})
    dispatch({type: 'LOGOUT_USER'})
  }
}

export const deleteUser = (userId, history) => {
  const token = localStorage.token

  return (dispatch) => {
    fetch(`${API_ROOT}/users/${userId}`, {
      method: 'DELETE',
      headers: headers(token)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.success)
      dispatch({type: 'DELETE_USER'})
      localStorage.removeItem('token')
      history.push('/')
    })
  }
}
