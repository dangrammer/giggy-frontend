const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const loadProfile = () => {
  const token = localStorage.token

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
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
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: userName,
        password,
      })
    })
    .then(response => response.json())
    .then(data => {
      data.errors ?
        console.log(data.errors) : // do something more useful with errors
          localStorage.setItem('token', data.token)
          dispatch(loginUser(data.user.data))
          history.push('/listings')
    })
  }
}

export const createUser = (newUser, history) => {
  const {firstName, lastName, userName, password, 
    imageUrl, city, state, zipCode} = newUser

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
      data.errors ?
        console.log(data.errors) : // do something more useful with errors
          localStorage.setItem('token', data.token)
          dispatch(loginUser(data.user.data))
          history.push('/dashboard/profile/edit')
    })
  }
}

export const updateUser = (profileUpdate, currentUserId, history) => {
  const token = localStorage.token
  const {firstName, lastName, userName, imageUrl, cityVar, 
    stateVar, zipCode, principalRole, principalInstrument,
    websiteUrl, bioVar, creditsVar} = profileUpdate

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3000/api/v1/users/${currentUserId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
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
      data.errors ?
        console.log(data.errors) : // do something more useful with errors
          dispatch({type: 'UPDATE_USER', user: data.data})
          dispatch({type: 'PROFILE_SHOW', profile: data.data}) //borrowed from profileReducer
          history.goBack()
    })
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const deleteUser = (userId, history) => {
  const token = localStorage.token

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
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
