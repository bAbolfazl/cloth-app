import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const rootReducer = {
    cart: cartReducer,
    user: userReducer,
}

export default combineReducers(rootReducer)