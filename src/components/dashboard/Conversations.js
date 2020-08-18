import React from 'react'
import {useSelector} from 'react-redux' //, useDispatch
// import {setActiveConvo, addConversation, addMessage} from '../../actions/conversationActions'
// import {Switch, Route} from 'react-router-dom'

const Conversations = () => {
  // const dispatch = useDispatch()
  const conversations = useSelector(state => state.conversationReducer.conversations)
  console.log(conversations)
 
  return (
    <div id="conversations">
      <h1>Conversations</h1>
      <ul>
        {conversations.map(convo =>
          <li key={convo.id}>
            {convo.id}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Conversations
   