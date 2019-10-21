import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './reducers/userReducer.js'
import { usersTableReducer } from './reducers/usersTableReducer.js'

const singleReducer = combineReducers({
    userReducer,
    usersTableReducer
})

// Creates an empty store object = {}
const store = createStore(
    singleReducer,
    applyMiddleware(logger)
)

console.log(store.getState())

export default store