import {API_ROOT, headers} from '../constants'

export const fetchConversations = () => {
  const token = localStorage.token

  return (dispatch) => {
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

export const createConversation = (users, history) => {
  const token = localStorage.token
  const {senderId, receiverId} = users

  console.log(senderId, receiverId)

  return (dispatch) => {
    if (token) {
      fetch(`${API_ROOT}/conversations`, {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({
          sender_id: senderId, 
          receiver_id: receiverId
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.errors) {
          console.log(data.errors)
        } else {
          history.push('/dashboard/conversations')
        }
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