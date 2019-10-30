import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './reducers/userReducer.js'
import { usersTableReducer } from './reducers/usersTableReducer.js'
import thunk from 'redux-thunk'

const singleReducer = combineReducers({
    userReducer,
    usersTableReducer
})

// Creates an empty store object = {}
const store = createStore(
    singleReducer,
    applyMiddleware(logger, thunk)
)

console.log(store.getState())

export default store