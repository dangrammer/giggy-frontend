import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
///
import {ActionCableProvider} from 'react-actioncable-provider'
import {API_WS_ROOT} from './constants'
//
import configureStore from './configureStore'
import App from './App'
import './css/index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <App/> */}
      <ActionCableProvider url={API_WS_ROOT}>
        <App />
      </ActionCableProvider>
    </Router>
  </Provider>,
  document.querySelector('#root')
)
