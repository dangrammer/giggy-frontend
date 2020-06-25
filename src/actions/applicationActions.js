import {API_ROOT, headers} from '../constants'
import {loadProfile} from './currentUserActions'
import {fetchListings} from './listingActions'

export const createApplication = (listingId, applicantId) => {
  const token = localStorage.token
  
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch(`${API_ROOT}/applications`, {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({
          applicant_id: applicantId, 
          listing_id: listingId
        })
      })
      .then(response => response.json())
      .then(data => {
        data.errors ?
          console.log(data.errors) :
            console.log(data.success)
            dispatch(loadProfile())
            dispatch(fetchListings())
            dispatch(reRenderListingShow(listingId))
      })
    }
  }
}

const reRenderListingShow = (listingId) => {
  const token = localStorage.token

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    if (token) {
      fetch(`${API_ROOT}/listings/${listingId}`, {
        method: 'GET',
        headers: headers(token)
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