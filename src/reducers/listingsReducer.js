const initialState = {
  listings: [],
  listingShow: {}
}

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'FETCH_LISTINGS':
      return {...state, listings: [...action.listings]} 

    case 'LISTING_SHOW':
      return {...state, listingShow: action.listing}

    default:
      return state
  }  
}

export default listingsReducer
