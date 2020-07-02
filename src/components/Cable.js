import React from 'react'
import {ActionCableConsumer} from 'react-actioncable-provider'

const Cable = ({conversations, handleReceivedMessage}) => {
  return (
    <>
      {conversations.map(convo =>
        <ActionCableConsumer
          key={convo.id}  
          channel={{channel: 'MessagesChannel', conversation: convo.id}}
          onReceived={handleReceivedMessage}
        />
      )}
    </>
  )
}

export default Cable