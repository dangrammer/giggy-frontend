import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import listingsReducer from './listingsReducer'


const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  listingsReducer: listingsReducer
})

export default rootReducer
