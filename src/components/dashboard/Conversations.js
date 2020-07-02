import React, {useEffect} from 'react'
// import {ActionCable} from 'react-actioncable-provider'
// import Cable from './Cable'
// import NewConversationForm from './NewConversationForm'
// import MessagesArea from './MessagesArea'
import {useDispatch} from 'react-redux'
import {setActiveConvo} from '../../actions/conversationActions'
// import {Switch, Route} from 'react-router-dom'

const Conversations = () => {
  const dispatch = useDispatch()

  handleClick = (id) => {
    dispatch(setActiveConvo(id))
  }

  return (
    <div id="conversations">
      <h1>Conversations</h1>
    </div>
    // <Switch>
    //   <Route exact path='/conversations' component={Conversations}/>
    //   <Route exact path='/conversations/:id' component={ConversationShow}/>
    // </Switch>
  )
}

export default Conversations
