import ActionCable from 'actioncable'
import API_WS_ROOT from './constants'

const cable = () => {
  const cable = ActionCable.createConsumer(API_WS_ROOT)
  console.log('cable connected')

  return (dispatch) => next => (action) => {
    if (typeof(action) === 'function') return next(action)

    const {channel} = action
    let {received} = action

    if (!channel) return next(action)

    if (typeof received === 'string') {
      received = result => dispatch({type: received, result})
    }

    return cable.subscriptions.create({channel}, {received})
  }
}

export default cable