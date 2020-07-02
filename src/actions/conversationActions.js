import {API_ROOT, headers} from '../constants'

export const fetchConversations = () => {
  const token = localStorage.token

  return (dispatch) => {
    // dispatch({type: 'LOADING'})
    if (token) {
      fetch(`${API_ROOT}/conversations`, {
        method: 'GET',
        headers: headers(token)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.errors ?
          console.log(data.errors) :
            dispatch({type: 'FETCH_CONVERSATIONS', conversations: data.data})
      })
    }
  }
}

export const setActiveConvo = (id) => ({
  type: 'SET_ACTIVE_CONVERSATION', 
  id
})

export const addConversation = (conversation) => ({
  type: 'ADD_CONVERSATION', 
  conversation
})

export const addMessage = (message) => ({
  type: 'ADD_MESSAGE', 
  message
})