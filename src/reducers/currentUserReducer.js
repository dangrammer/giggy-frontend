const initialState = {}

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'LOGIN_USER':
      console.log(action.user, 'adding user')
      return {...action.user} 

    case 'LOGOUT_USER':
        console.log('removing user')
      return {} 

    default:
      return state
  }  
}

export default currentUserReducer
