const initialState = {
  currentUser: {}
}

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'LOGIN_USER':
      return {...state, currentUser: action.user} 

    case 'LOGOUT_USER':
      return {...state, currentUser: {}} 

    case 'DELETE_USER':
      return {...state, currentUser: {}}   

    default:
      return state
  }  
}

export default currentUserReducer
