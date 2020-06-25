import {API_ROOT, headers} from '../constants'

export const fetchCategories = () => {
  const token = localStorage.token
  
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch(`${API_ROOT}/categories`, {
        method: 'GET',
        headers: headers(token)
      })
      .then(response => response.json())
      .then(data => {
        data.errors ?
          console.log(data.errors) :
            dispatch({type: 'FETCH_CATEGORIES', categories: data.data})
      })
    }
  }
}