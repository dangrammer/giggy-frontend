const initialState = {
  categories: [],
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING':
      console.log('loading')
      return state

    case 'FETCH_CATEGORIES':
      return {...state, categories: [...action.categories]}

    default:
      return state
  }  
}

export default categoryReducer
