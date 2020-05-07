import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducers from './root.reducer'

const middleWares = [logger]

export const store = createStore(rootReducers, applyMiddleware(...middleWares))
export const persistor = persistStore(store)

// export { store, persistor };