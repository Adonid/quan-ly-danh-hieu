import { applyMiddleware, createStore, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { reducer as formReducer } from 'redux-form'
import rootReducer from './reducers'
import rootSaga from './sagas'

// const storage = thunk.default

const bindMiddleware = (middleware) => {
  if (process.env.NEXT_PUBLIC !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
  const combineReducer = combineReducers({...rootReducer, form: formReducer})
  const sagaMiddleware = createSagaMiddleware()
  const isClient = typeof window !== 'undefined'
  if (isClient){
    // we need it only on client side
    const {persistStore, persistReducer} = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default
    const persistConfig = {
        key: 'common',
        backlist: ['authenticated'], // make sure it does not clash with server keys
        storage
    }

    const persistedReducer = persistReducer(persistConfig, combineReducer)
    const store = createStore(
        persistedReducer, 
        bindMiddleware([sagaMiddleware])
      )
    store.sagaTask = sagaMiddleware.run(rootSaga)
    store.__persistor = persistStore(store) // Nasty hack
    return store
  }else{
    const store = createStore(
      combineReducer,
      bindMiddleware([sagaMiddleware])
    )
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
  }
}

export const wrapper = createWrapper(makeStore, { debug: true })