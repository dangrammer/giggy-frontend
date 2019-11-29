export const fetchListings = () => {
  return (dispatch) => {
    const token = localStorage.token

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

export const listingShow = (listingId, history) => {
  return (dispatch) => {
    const token = localStorage.token

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
      data.errors ?
        console.log(data.errors) : // do something more useful with errors
          dispatch({type: 'CREATE_LISTING', listing: data.data})
          history.push(`/listings/${data.data.id}`)
    })
  }
}
