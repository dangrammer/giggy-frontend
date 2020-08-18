import ActionCable from 'actioncable'
import {API_WS_ROOT} from './constants'

const cable = () => {
  return (dispatch) => next => (action) => {
    if (typeof(action) === 'function') return next(action)
    
    const token = localStorage.token

    if (token) {
      const cable = ActionCable.createConsumer(`${API_WS_ROOT}?token=${token}`)
      // console.log('cable connected', cable)
      // console.log(action)
      const {channel} = action
      let {received} = action

      if (!channel) return next(action)

      if (typeof received === 'string') {
        received = result => dispatch({type: received, result})
      }

      return cable.subscriptions.create(channel, received)
    }
  }
}

export default cable