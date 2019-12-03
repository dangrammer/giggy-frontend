const initialState = {
  currentUser: {},
  errors: []
}

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state
    
    case 'USER_ERRORS':
      return {...state, errors: action.errors}  

    case 'LOGIN_USER':
      return {...state, currentUser: action.user} 

    case 'UPDATE_USER':
      return {...state, currentUser: action.user}

    case 'LOGOUT_USER':
      return {...state, currentUser: {}, errors: []} 

    case 'DELETE_USER':
      return {...state, currentUser: {}}   

    default:
      return state
  }  
}

export default currentUserReducer
