import React from 'react'
import {ActionCable} from 'react-actioncable-provider'

const Cable = ({conversations, handleReceivedMessage}) => {
  return (
    <>
      {conversations.map(convo =>
        <ActionCable
          key={convo.id}  
          channel={{channel: 'MessagesChannel', conversation: convo.id}}
          onReceived={handleReceivedMessage}
        />
      )}
    </>
  )
}

export default Cable