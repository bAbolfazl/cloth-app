const INITIAL_STATE = {
    show: false,
    items: []
}

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_DROPDOWN_DISPLAY':
            return {
                ...state,
                show: !state.show
            }
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state
    }
}

export default cartDropdownReducer