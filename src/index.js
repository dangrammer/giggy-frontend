import React from 'react'
import ReactDOM from 'react-dom'
import {ActionCableProvider} from 'react-actioncable-provider'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {API_WS_ROOT} from './constants'
import configureStore from './configureStore'
import App from './App'
import './css/index.css'

const store = configureStore()

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.querySelector('#root')
)
