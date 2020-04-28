import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
)

export const selectCartShow = createSelector(
    [selectCart],
    cart => cart.show
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (items) => {
        return items.reduce((acc, item) => {
            return acc += item.number
        }, 0)
    }
)

export const selectCartItemsPrice = createSelector(
    [selectCartItems],
    (items) => {
        return items.reduce((acc, item) => {
            return acc += item.price * item.number
        }, 0)
    }
)