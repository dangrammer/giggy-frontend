const initialState = {
  conversations: []
}

const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONVERSATIONS':
      return {...state, conversations: [...action.conversations]}
    
    default:
      return {state}
  }
}

export default conversationReducer
