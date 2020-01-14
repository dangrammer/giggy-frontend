const initialState = {
  profiles: [],
  profileShow: {},
  filter: 'username',
  searchTerm: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'FETCH_PROFILES':
      return {...state, profiles: [...action.profiles]} 

    case 'FILTER_PROFILES':
      return {...state, filter: action.filter} 

    case 'SEARCH_PROFILES':
      return {...state, searchTerm: action.searchTerm}  

    case 'PROFILE_SHOW':
      return {...state, profileShow: action.profile}

    default:
      return state
  }  
}

export default profileReducer
