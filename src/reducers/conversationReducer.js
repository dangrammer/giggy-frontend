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

    case 'ADD_CONVERSATION':
      return {...state, conversations: [...state.conversations, action.conversation]}  

    case 'ADD_MESSAGE':
      const conversation = state.conversations.find(conversation => 
        conversation.id === action.message.conversation_id
      )
      conversation.messages = [...conversation.messages, message]
      return {...state, conversations}
    
    default:
      return {state}
  }
}

export default conversationReducer
