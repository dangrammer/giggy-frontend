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
  // const activeConversationId = useSelector(state => state.conversationReducer.activeConversationId)

  const handleClick = (id) => {
    dispatch(setActiveConvo(id))
  }

  const handleReceivedConversation = (response) => {
    const {conversation} = response
    dispatch(addConversation(conversation))
  }

  const handleReceivedMessage = (response) => {
    const {message} = response
    dispatch(addMessage(message))
  }

  return (
    <div id="conversations">
      <ActionCableConsumer
        channel={{channel: 'ConversationsChannel'}}
        onReceived={handleReceivedConversation}
      />
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
            {convo.title}
          </li>
        )}
        {/* {mapConversations(conversations, handleClick)} */}
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
    // <Switch>
    //   <Route exact path='/conversations' component={Conversations}/>
    //   <Route exact path='/conversations/:id' component={ConversationShow}/>
    // </Switch>
  )
}

export default Conversations
