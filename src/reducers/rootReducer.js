import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import listingsReducer from './listingsReducer'
import profilesReducer from './profilesReducer'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  listingsReducer: listingsReducer,
  profilesReducer: profilesReducer
})

export default rootReducer
