export const fetchProfiles = () => {
  return (dispatch) => {
    const token = localStorage.token

    dispatch({type: 'LOADING'})
    if (token) {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        data.errors ?
          console.log(data.errors) :
            dispatch({type: 'FETCH_PROFILES', profiles: data.data})
      })
    }
  }
}

export const filterProfiles = (filter) => ({
  type: 'FILTER_PROFILES',
  filter
})

export const searchProfiles = (searchTerm) => ({
  type: 'SEARCH_PROFILES',
  searchTerm
})

export const profileShow = (profileId, history) => {
  return (dispatch) => {
    const token = localStorage.token

    dispatch({type: 'LOADING'})
    if (token) {
      fetch(`http://localhost:3000/api/v1/users/${profileId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        data.errors ?
          console.log(data.errors) :
            dispatch({type: 'PROFILE_SHOW', profile: data.data})
        if (history) {
          history.push(`/profiles/${profileId}`)
        } 
      })
    }
  }
}
