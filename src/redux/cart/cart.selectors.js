import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (item) => {
        return item.reduce((acc, item) => {
            console.log('hiii')
            return acc += item.number
        }, 0)
    }
)