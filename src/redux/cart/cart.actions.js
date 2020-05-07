// types
export const SHOW_CART_DROPDOWN = 'SHOW_CART_DROPDOWN'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
export const DECREASE_PRODUCT_FROM_CART = 'DECREASE_PRODUCT_FROM_CART'

// acions
export const toggleCartDropdown = () => ({
    type: SHOW_CART_DROPDOWN
})

export const addProductToCart = (item) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: item
})

export const decreaseProductFromCart = item => ({
    type: DECREASE_PRODUCT_FROM_CART,
    payload: item
})

export const removeProductFromCart = (item) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: item
})

