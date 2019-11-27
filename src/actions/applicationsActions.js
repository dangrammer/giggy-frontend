export const createApplication = (listingId, applicantId) => {
  return (dispatch) => {
    const token = localStorage.token

    dispatch({type: 'LOADING'})
    if (token) {
      fetch('http://localhost:3000/api/v1/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          applicant_id: applicantId, 
          listing_id: listingId
        })
      })
      .then(response => response.json())
      .then(data => {
        data.errors ?
          console.log(data.errors) :
            console.log(data.message)
            dispatch(reRenderListingShow(listingId))
      })
    }
  }
}

const reRenderListingShow = (listingId) => {
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
      })
    }
  }
}