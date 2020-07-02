const initialState = {
  conversations: [],
  activeConversation: null
}

const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONVERSATIONS':
      return {...state, conversations: [...action.conversations]}

    case 'SET_ACTIVE_CONVERSATION':
      return {...state, activeConversation: action.id} 
    
    default:
      return {state}
  }
}

export default conversationReducer
