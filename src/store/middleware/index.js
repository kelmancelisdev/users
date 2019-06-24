import thunk from 'redux-thunk'

const logger = store => next => action => {
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export { logger, thunk }
