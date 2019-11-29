const initialState = {
  listings: [],
  listingShow: {}
}

const listingReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'FETCH_LISTINGS':
      return {...state, listings: [...action.listings]} 

    case 'CREATE_LISTING':
      return {
        ...state, 
        listings: [...state.listings, action.listing], 
        listingShow: action.listing
      }  

    case 'LISTING_SHOW':
      return {...state, listingShow: action.listing}

    default:
      return state
  }  
}

export default listingReducer
