import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import listingReducer from './listingReducer'
import profileReducer from './profileReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  currentUserReducer: currentUserReducer,
  listingReducer: listingReducer,
  profileReducer: profileReducer,
  categoryReducer: categoryReducer
})

export default rootReducer
