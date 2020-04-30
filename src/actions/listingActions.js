export const fetchListings = () => {
  const token = localStorage.token

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch('http://localhost:3000/api/v1/listings', {
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
            dispatch({type: 'FETCH_LISTINGS', listings: data.data})
      })
    }
  }
}

export const filterListings = (filter) => ({
  type: 'FILTER_LISTINGS',
  filter
})

export const searchListings = (searchTerm) => ({
  type: 'SEARCH_LISTINGS',
  searchTerm
})

export const listingShow = (listingId, history) => {
  const token = localStorage.token
  
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
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
            dispatch({type: 'LISTING_SHOW', listing: data.data})
            history.push(`/listings/${listingId}`)
      })
    }
  }
}

export const createListing = (newListing, history) => {
  const token = localStorage.token
  const {subject, description, date, endDate, 
    city, state, zipCode, paying, categoryId, userId} = newListing

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3000/api/v1/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        subject,
        description,
        date,
        end_date: endDate,
        paying,
        city,
        state,
        zip_code: zipCode,
        category_id: parseInt(categoryId, 10),
        user_id: parseInt(userId, 10)
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'LISTING_ERRORS', errors: data.errors})
        setTimeout(() => dispatch({type: 'CLEAR_USER_ERRORS'}), 3000)
      } else {
        dispatch({type: 'CREATE_LISTING', listing: data.data})
        history.push(`/listings/${data.data.id}`)
      }
    })
  }
}

export const updateListing = (listing, listingId, history) => {
  const token = localStorage.token
  const {subjectVar, descriptionVar, dateVar, endDate, 
    cityVar, stateVar, zipCode, payingVar, categoryId} = listing

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        subject: subjectVar,
        description: descriptionVar,
        date: dateVar,
        end_date: endDate,
        city: cityVar,
        state: stateVar,
        zip_code: zipCode,
        paying: payingVar,
        category_id: categoryId
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        dispatch({type: 'LISTING_ERRORS', errors: data.errors})
        setTimeout(() => dispatch({type: 'CLEAR_USER_ERRORS'}), 3000)
      } else {
        dispatch({type: 'UPDATE_LISTING', listing: data.data})
        history.goBack()
      }
      // data.errors ?
      //   console.log(data.errors) : // do something more useful with errors
      //     dispatch({type: 'UPDATE_LISTING', listing: data.data})
      //     history.goBack()
    })
  }
}

export const deleteListing = (listingId, history) => {
  const token = localStorage.token

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
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
      dispatch({type: 'DELETE_LISTING'})
      dispatch(fetchListings())
      history.push('/dashboard/listings')
    })
  }
}