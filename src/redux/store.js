import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer.js'

const singleReducer = combineReducers({
    userReducer,
})

// Creates an empty store object = {}
const store = createStore(singleReducer)

console.log(store.getState())

export default store