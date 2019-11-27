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
        // data.errors ?
        //   console.log(errors) :
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
        // data.errors ?
        //   console.log(errors) :
            dispatch({type: 'LISTING_SHOW', listing: data.data})
            history.push(`/listings/${listingId}`)
      })
    }
  }
}
