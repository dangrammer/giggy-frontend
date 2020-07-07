import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ActionCableConsumer} from 'react-actioncable-provider'
import Cable from '../Cable'
// import NewConversationForm from './NewConversationForm'
// import MessagesArea from './MessagesArea'
import {setActiveConvo, addConversation, addMessage} from '../../actions/conversationActions'
// import {Switch, Route} from 'react-router-dom'

const Conversations = () => {
  const dispatch = useDispatch()
  const conversations = useSelector(state => state.conversationReducer.conversations)
  const currentUserId = useSelector(state => state.currentUserReducer.currentUser.id)
  // const activeConversationId = useSelector(state => state.conversationReducer.activeConversationId)

  const handleClick = (id) => {
    dispatch(setActiveConvo(id))
  }

  const handleReceivedConversation = (response) => {
    console.log(response)
    const {conversation} = response
    console.log(conversation)
    dispatch(addConversation(conversation))
  }

  const handleReceivedMessage = (response) => {
    const {message} = response
    dispatch(addMessage(message))
  }

  return (
    <ActionCableConsumer
      channel={{
        channel: 'ConversationsChannel', 
        token: localStorage.token,
        conversation: `current_user_${currentUserId}`}}
      onReceived={handleReceivedConversation}
    >
      <div id="conversations">
        {conversations.length ?
          <Cable
            conversations={conversations}
            handleReceivedMessage={handleReceivedMessage}
          />
            : null
        }
        <h1>Conversations</h1>
        <ul>
          {conversations.map(convo =>
            <li key={convo.id} onClick={handleClick(convo.id)}>
              {convo.id}
            </li>
          )}
        </ul>
        {/* <NewConversationForm/> */}
        {/* {activeConversationId ? 
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversationId
            )}
          />
            : null
        } */}
      </div>
    </ActionCableConsumer>  
  )
}

export default Conversations
   