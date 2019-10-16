import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './reducers/userReducer.js'

const singleReducer = combineReducers({
    userReducer,
})

// Creates an empty store object = {}
const store = createStore(
    singleReducer,
    applyMiddleware(logger)
)

console.log(store.getState())

export default store