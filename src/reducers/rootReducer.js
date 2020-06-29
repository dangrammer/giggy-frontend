import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import listingReducer from './listingReducer'
import profileReducer from './profileReducer'
import categoryReducer from './categoryReducer'
import conversationReducer from './conversationReducer'

const rootReducer = combineReducers({
  currentUserReducer: currentUserReducer,
  listingReducer: listingReducer,
  profileReducer: profileReducer,
  conversationReducer: conversationReducer,
  categoryReducer: categoryReducer
})

export default rootReducer
