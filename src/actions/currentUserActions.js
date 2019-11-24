const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const loadProfile = () => {
  return (dispatch) => {
    const token = localStorage.token

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

export const validateUser = (returningUser) => {
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
    })
  }
}

export const createUser = (newUser) => {
  const {firstName, lastName, userName, password, imageUrl, city, state, zipCode} = newUser

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
    })
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
