import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import menuListReducer from './menuList/menuList.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = {
    cart: cartReducer,
    user: userReducer,
    menuList: menuListReducer,
}

export default persistReducer(persistConfig, combineReducers(rootReducer))