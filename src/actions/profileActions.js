import {API_ROOT, headers} from '../constants'

export const fetchProfiles = () => {
  return (dispatch) => {
    const token = localStorage.token

    if (token) {
      fetch(`${API_ROOT}/users`, {
        method: 'GET',
        headers: headers(token)
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

    if (token) {
      fetch(`${API_ROOT}/users/${profileId}`, {
        method: 'GET',
        headers: headers(token)
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
