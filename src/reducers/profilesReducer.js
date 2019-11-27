const initialState = {
  profiles: [],
  profileShow: {}
}

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'FETCH_PROFILES':
      return {...state, profiles: [...action.profiles]} 

    case 'PROFILE_SHOW':
      return {...state, profileShow: action.profile}

    default:
      return state
  }  
}

export default profilesReducer
