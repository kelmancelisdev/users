import { createStore, applyMiddleware } from 'redux'
import { logger, thunk } from './middleware'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export { store }
