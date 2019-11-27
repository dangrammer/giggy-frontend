const initialState = {}

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'LOGIN_USER':
      return {...action.user} 

    case 'LOGOUT_USER':
      return {} 

    default:
      return state
  }  
}

export default currentUserReducer
