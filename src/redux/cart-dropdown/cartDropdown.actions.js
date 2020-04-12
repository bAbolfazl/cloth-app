export const toggleCartDropdownDisplay = () => {
    return {
        type: 'TOGGLE_CART_DROPDOWN_DISPLAY',
        // payload: display
    }
}

export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

// export default toggleCartDropdownDisplay
