export const fetchCategories = () => {
  const token = localStorage.token
  
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch('http://localhost:3000/api/v1/categories', {
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
            dispatch({type: 'FETCH_CATEGORIES', categories: data.data})
      })
    }
  }
}