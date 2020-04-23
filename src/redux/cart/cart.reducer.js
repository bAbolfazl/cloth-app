import { SHOW_CART_DROPDOWN } from './cart.actions'

const INITIAL_STATE = {
    show: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_CART_DROPDOWN:
            return {
                // ...state,
                show: !state.show
            }
        default:
            return state
    }
}

export default cartReducer