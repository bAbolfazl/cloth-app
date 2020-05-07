import { SHOW_CART_DROPDOWN, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, DECREASE_PRODUCT_FROM_CART } from './cart.actions'
import { addProductToCart, removeProductFromCart, decreaseProductFromCart /*itemsNo*/ } from './cart.utils'

const INITIAL_STATE = {
    show: false,
    items: [],
    // itemsNo: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_CART_DROPDOWN:
            return {
                ...state,
                show: !state.show
            }
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                items: addProductToCart(state.items, action.payload),
                // itemsNo: itemsNo(state.items)
            }

        case DECREASE_PRODUCT_FROM_CART:
            return {
                ...state,
                items: decreaseProductFromCart(state.items, action.payload)
            }
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                items: removeProductFromCart(state.items, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer