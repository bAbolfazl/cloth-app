// types
export const SHOW_CART_DROPDOWN = 'SHOW_CART_DROPDOWN'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

// acions
export const toggleCartDropdown = () => {
    return {
        type: SHOW_CART_DROPDOWN
    }
}

export const addProductToCart = (item) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: item
    }
}