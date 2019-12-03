const initialState = {
  listings: [],
  listingShow: {},
  filter: 'all'
}

const listingReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'FETCH_LISTINGS':
      return {...state, listings: [...action.listings]} 

    case 'FILTER_LISTINGS':
      return {...state, filter: action.filter}  

    case 'CREATE_LISTING':
      return {
        ...state, 
        listings: [...state.listings, action.listing], 
        listingShow: action.listing
      }  

    case 'LISTING_SHOW':
      return {...state, listingShow: action.listing}

    case 'UPDATE_LISTING':
      return {...state, listingShow: action.listing}  

    case 'DELETE_LISTING':
      return {...state, listingShow: {}}

    default:
      return state
  }  
}

export default listingReducer
